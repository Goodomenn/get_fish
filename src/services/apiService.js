import {
  RESTAURANT_DISHES,
  INITIAL_RESERVATIONS,
  DEFAULT_SPOTS,
  MENU_CATEGORIES,
  CANONICAL_CATEGORIES,
  normalizeCategory,
  areCategoriesEqual,
  getCanonicalCategoryName,
  deduplicateCategories
} from '../data/restaurantData';
import { db, isFirebaseConfigured } from '../firebase';
import {
  collection,
  getDocs,
  doc,
  setDoc,
  onSnapshot
} from 'firebase/firestore';

const BACKEND_URL = 'http://localhost:5000/api';
const LOCAL_STORAGE_DISHES = 'seaclub_dishes_v2';
const LOCAL_STORAGE_RESERVATIONS = 'seaclub_reservations_v2';
const LOCAL_STORAGE_ORDERS = 'seaclub_orders_v2';
const LOCAL_STORAGE_FEEDBACK = 'seaclub_feedback_v2';
const LOCAL_STORAGE_CATEGORIES = 'seaclub_categories_v2';
const LOCAL_STORAGE_LOCATIONS = 'seaclub_locations_v2';
const LOCAL_STORAGE_SPOTS = 'seaclub_spots_v2';
const LOCAL_STORAGE_EVENTS = 'seaclub_events_v2';

export const DEFAULT_LOCATIONS = [
  {
    id: 'Bahir Dar Flagship',
    branchId: 'bahir-dar',
    name: 'Bahir Dar Flagship (ባህር ዳር)',
    city: 'Bahir Dar • Kebele 13',
    desc: 'Near St. Michael Church • Lake Tana waterfront dining & fresh daily catch',
    badge: 'Lake Tana Flagship',
    address: 'Kebele 13, Near St. Michael Church, Bahir Dar',
    phone: '+251 91 800 1234',
    email: 'bahirdar@gechfish-restaurant.com',
    hours: 'Daily: 11:30 AM – 11:00 PM'
  },
  {
    id: 'Addis Ababa - Summit',
    branchId: 'addis-summit',
    name: 'Addis Ababa - Summit (አዲስ አበባ ሰሚት)',
    city: 'Addis Ababa • Summit',
    desc: 'Behind Chanoli • Sizzling Fish Tibs, Fish Lebleb & family dining',
    badge: 'Summit Branch',
    address: 'Summit Area, Behind Chanoli, Addis Ababa',
    phone: '+251 91 122 3344',
    email: 'summit@gechfish-restaurant.com',
    hours: 'Daily: 11:30 AM – 11:00 PM'
  }
];

// Safe timeout wrapper: guarantees Firestore calls never hang or freeze UI
const withTimeout = (promise, ms = 8000, label = 'Firestore operation') =>
  Promise.race([
    promise,
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error(`${label} timed out after ${ms}ms`)), ms)
    )
  ]);

class ApiService {
  constructor() {
    this.isBackendAvailable = false;
    this.isFirestoreAvailable = isFirebaseConfigured && db !== null;
    this.subscribers = new Set();
    this.eventSource = null;
    this.firestoreUnsubscribes = [];
    this.init();
  }

  async init() {
    this.initLocalStorage();

    if (this.isFirestoreAvailable) {
      this.initFirestoreListeners();
    }

    // Always check backend server and initialize real-time SSE for instant cross-tab sync
    await this.checkBackend();
    if (this.isBackendAvailable) {
      this.initSSE();
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('storage', (e) => {
        if (
          e.key === LOCAL_STORAGE_DISHES ||
          e.key === LOCAL_STORAGE_RESERVATIONS ||
          e.key === LOCAL_STORAGE_ORDERS ||
          e.key === LOCAL_STORAGE_FEEDBACK ||
          e.key === LOCAL_STORAGE_CATEGORIES ||
          e.key === LOCAL_STORAGE_LOCATIONS ||
          e.key === LOCAL_STORAGE_SPOTS ||
          e.key === LOCAL_STORAGE_EVENTS
        ) {
          this.notifySubscribers();
        }
      });
    }
  }

  initFirestoreListeners() {
    try {
      // 1. Dishes Menu Listener
      const unsubDishes = onSnapshot(collection(db, 'dishes'), (snapshot) => {
        if (!snapshot.empty) {
          const list = snapshot.docs.map((docSnap) => ({
            id: docSnap.id,
            ...docSnap.data()
          }));
          localStorage.setItem(LOCAL_STORAGE_DISHES, JSON.stringify(list));
          this.notifySubscribers();
        }
      }, (err) => {
        console.warn('[Firestore] Dishes listener notice:', err.message);
      });

      // 2. Reservations Listener
      const unsubRes = onSnapshot(collection(db, 'reservations'), (snapshot) => {
        if (!snapshot.empty) {
          const list = snapshot.docs.map((docSnap) => ({
            id: docSnap.id,
            ...docSnap.data()
          }));
          localStorage.setItem(LOCAL_STORAGE_RESERVATIONS, JSON.stringify(list));
          this.notifySubscribers();
        }
      }, (err) => {
        console.warn('[Firestore] Reservations listener notice:', err.message);
      });

      // 3. Spots Dining Salons Listener
      const unsubSpots = onSnapshot(collection(db, 'spots'), (snapshot) => {
        if (!snapshot.empty) {
          const list = snapshot.docs.map((docSnap) => ({
            id: docSnap.id,
            ...docSnap.data()
          }));
          localStorage.setItem(LOCAL_STORAGE_SPOTS, JSON.stringify(list));
          this.notifySubscribers();
        }
      }, (err) => {
        console.warn('[Firestore] Spots listener notice:', err.message);
      });

      // 4. Events Real-time Listener
      const unsubEvents = onSnapshot(collection(db, 'events'), (snapshot) => {
        const list = snapshot.docs.map((docSnap) => ({
          id: docSnap.id,
          ...docSnap.data()
        }));
        localStorage.setItem(LOCAL_STORAGE_EVENTS, JSON.stringify(list));
        this.notifySubscribers();
      }, (err) => {
        console.warn('[Firestore] Events listener notice:', err.message);
      });

      this.firestoreUnsubscribes.push(unsubDishes, unsubRes, unsubSpots, unsubEvents);
    } catch (err) {
      console.warn('[Firestore] Notice attaching cloud listeners:', err.message);
    }
  }

  async checkBackend() {
    try {
      const res = await fetch(`${BACKEND_URL}/health`, { method: 'GET', signal: AbortSignal.timeout(1200) });
      if (res.ok) {
        const wasOffline = !this.isBackendAvailable;
        this.isBackendAvailable = true;
        if (wasOffline) {
          this.notifySubscribers();
        }
        return true;
      }
    } catch (err) {
      this.isBackendAvailable = false;
    }
    return false;
  }

  initLocalStorage() {
    if (typeof window === 'undefined') return;
    const rawDishes = localStorage.getItem(LOCAL_STORAGE_DISHES);
    if (!rawDishes) {
      localStorage.setItem(LOCAL_STORAGE_DISHES, JSON.stringify(RESTAURANT_DISHES));
    } else {
      try {
        const parsed = JSON.parse(rawDishes);
        if (!Array.isArray(parsed) || parsed.length < RESTAURANT_DISHES.length) {
          localStorage.setItem(LOCAL_STORAGE_DISHES, JSON.stringify(RESTAURANT_DISHES));
        }
      } catch (e) {
        localStorage.setItem(LOCAL_STORAGE_DISHES, JSON.stringify(RESTAURANT_DISHES));
      }
    }
    if (!localStorage.getItem(LOCAL_STORAGE_RESERVATIONS)) {
      localStorage.setItem(LOCAL_STORAGE_RESERVATIONS, JSON.stringify(INITIAL_RESERVATIONS));
    }
    if (!localStorage.getItem(LOCAL_STORAGE_ORDERS)) {
      localStorage.setItem(LOCAL_STORAGE_ORDERS, JSON.stringify([]));
    }
    if (!localStorage.getItem(LOCAL_STORAGE_FEEDBACK)) {
      localStorage.setItem(LOCAL_STORAGE_FEEDBACK, JSON.stringify([]));
    }

    const rawCats = localStorage.getItem(LOCAL_STORAGE_CATEGORIES);
    let cats = CANONICAL_CATEGORIES;
    if (rawCats) {
      try {
        const parsed = JSON.parse(rawCats);
        if (Array.isArray(parsed) && parsed.length > 0) {
          cats = deduplicateCategories([...parsed, ...CANONICAL_CATEGORIES]);
        }
      } catch (e) {}
    }
    localStorage.setItem(LOCAL_STORAGE_CATEGORIES, JSON.stringify(cats));

    if (!localStorage.getItem(LOCAL_STORAGE_LOCATIONS)) {
      localStorage.setItem(LOCAL_STORAGE_LOCATIONS, JSON.stringify(DEFAULT_LOCATIONS));
    }

    if (!localStorage.getItem(LOCAL_STORAGE_SPOTS)) {
      localStorage.setItem(LOCAL_STORAGE_SPOTS, JSON.stringify(DEFAULT_SPOTS));
    }

    if (!localStorage.getItem(LOCAL_STORAGE_EVENTS)) {
      localStorage.setItem(LOCAL_STORAGE_EVENTS, JSON.stringify([]));
    }
  }

  initSSE() {
    if (typeof window === 'undefined' || !window.EventSource) return;
    try {
      if (this.eventSource) this.eventSource.close();
      this.eventSource = new EventSource(`${BACKEND_URL}/events`);

      const handleUpdate = () => {
        this.notifySubscribers();
      };

      this.eventSource.addEventListener('CATEGORIES_UPDATED', (e) => {
        try {
          if (e.data) {
            const parsed = JSON.parse(e.data);
            if (Array.isArray(parsed)) {
              localStorage.setItem(LOCAL_STORAGE_CATEGORIES, JSON.stringify(parsed));
            }
          }
        } catch (err) {}
        this.notifySubscribers();
      });

      this.eventSource.addEventListener('DISHES_UPDATED', (e) => {
        try {
          if (e.data) {
            const parsed = JSON.parse(e.data);
            if (Array.isArray(parsed)) {
              localStorage.setItem(LOCAL_STORAGE_DISHES, JSON.stringify(parsed));
            }
          }
        } catch (err) {}
        this.notifySubscribers();
      });

      this.eventSource.addEventListener('DISH_CREATED', handleUpdate);
      this.eventSource.addEventListener('DISH_UPDATED', handleUpdate);
      this.eventSource.addEventListener('DISH_DELETED', handleUpdate);
      this.eventSource.addEventListener('LOCATIONS_UPDATED', handleUpdate);
      this.eventSource.addEventListener('SPOT_CREATED', handleUpdate);
      this.eventSource.addEventListener('SPOT_UPDATED', handleUpdate);
      this.eventSource.addEventListener('SPOT_DELETED', handleUpdate);
      this.eventSource.addEventListener('SPOTS_UPDATED', handleUpdate);
      this.eventSource.addEventListener('EVENTS_UPDATED', (e) => {
        try {
          if (e.data) {
            const parsed = JSON.parse(e.data);
            if (Array.isArray(parsed)) {
              localStorage.setItem(LOCAL_STORAGE_EVENTS, JSON.stringify(parsed));
            }
          }
        } catch (err) {}
        this.notifySubscribers();
      });
      this.eventSource.addEventListener('RESERVATION_CREATED', handleUpdate);
      this.eventSource.addEventListener('RESERVATION_UPDATED', handleUpdate);
      this.eventSource.addEventListener('RESERVATION_DELETED', handleUpdate);
      this.eventSource.addEventListener('ORDER_CREATED', handleUpdate);
      this.eventSource.addEventListener('ORDER_UPDATED', handleUpdate);
      this.eventSource.addEventListener('ORDER_DELETED', handleUpdate);
      this.eventSource.addEventListener('FEEDBACK_CREATED', handleUpdate);
      this.eventSource.addEventListener('FEEDBACK_UPDATED', handleUpdate);
      this.eventSource.addEventListener('FEEDBACK_DELETED', handleUpdate);
      this.eventSource.addEventListener('DATABASE_RESET', handleUpdate);

      this.eventSource.onerror = () => {
        this.isBackendAvailable = false;
      };
    } catch (err) {
      console.warn('[Restaurant API] SSE error:', err.message);
    }
  }

  subscribe(callback) {
    this.subscribers.add(callback);
    return () => this.subscribers.delete(callback);
  }

  notifySubscribers() {
    for (const callback of this.subscribers) {
      try {
        callback();
      } catch (err) {
        console.error('Subscriber callback error:', err);
      }
    }
  }

  // =========================================================================
  // 1. DISHES & MENU
  // =========================================================================
  async getDishes() {
    // A. Local Express Backend (live real-time database)
    try {
      const res = await fetch(`${BACKEND_URL}/dishes`, { signal: AbortSignal.timeout(2000) });
      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data) && data.length >= RESTAURANT_DISHES.length) {
          this.isBackendAvailable = true;
          localStorage.setItem(LOCAL_STORAGE_DISHES, JSON.stringify(data));
          return data;
        }
      }
    } catch (err) {
      // Backend not yet reachable or timed out
    }

    // B. Firestore Cloud Database
    if (this.isFirestoreAvailable) {
      try {
        const dishesRef = collection(db, 'dishes');
        const snapshot = await withTimeout(getDocs(dishesRef), 8000, 'Dishes fetch');
        if (!snapshot.empty) {
          const list = snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
          localStorage.setItem(LOCAL_STORAGE_DISHES, JSON.stringify(list));
          return list;
        } else {
          await this.seedInitialFirestoreDishes();
        }
      } catch (err) {
        console.warn('[Firestore] Falling back to backend/local cache:', err.message);
      }
    }

    // C. Fallback: Local Storage
    const raw = localStorage.getItem(LOCAL_STORAGE_DISHES);
    if (raw) {
      try {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed) && parsed.length >= RESTAURANT_DISHES.length) {
          return parsed;
        }
      } catch (e) {}
    }

    localStorage.setItem(LOCAL_STORAGE_DISHES, JSON.stringify(RESTAURANT_DISHES));
    return RESTAURANT_DISHES;
  }

  async getCategories() {
    let rawList = [];
    // A. Backend Server (always try first)
    try {
      const res = await fetch(`${BACKEND_URL}/categories`, { signal: AbortSignal.timeout(2000) });
      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) {
          this.isBackendAvailable = true;
          rawList = data;
        }
      }
    } catch (err) {
      // Backend not yet reachable or timed out
    }

    // B. Local Storage
    if (rawList.length === 0) {
      const raw = localStorage.getItem(LOCAL_STORAGE_CATEGORIES);
      if (raw) {
        try {
          const parsed = JSON.parse(raw);
          if (Array.isArray(parsed) && parsed.length > 0) rawList = parsed;
        } catch (e) {}
      }
    }

    if (rawList.length === 0) {
      rawList = [...CANONICAL_CATEGORIES];
    }

    const merged = deduplicateCategories([...rawList, ...CANONICAL_CATEGORIES]);
    localStorage.setItem(LOCAL_STORAGE_CATEGORIES, JSON.stringify(merged));
    return merged;
  }

  async getLocations() {
    if (this.isBackendAvailable) {
      try {
        const res = await fetch(`${BACKEND_URL}/locations`);
        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data) && data.length > 0) {
            localStorage.setItem(LOCAL_STORAGE_LOCATIONS, JSON.stringify(data));
            return data;
          }
        }
      } catch (err) {
        this.isBackendAvailable = false;
      }
    }

    const raw = localStorage.getItem(LOCAL_STORAGE_LOCATIONS);
    if (raw) {
      try {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      } catch (e) {}
    }

    return [...DEFAULT_LOCATIONS];
  }

  async seedInitialFirestoreDishes() {
    if (!this.isFirestoreAvailable) return;
    try {
      for (const dish of RESTAURANT_DISHES) {
        const dishRef = doc(db, 'dishes', dish.id);
        await withTimeout(setDoc(dishRef, dish, { merge: true }), 2000);
      }
      console.log('[Firestore] Seeded initial restaurant dishes to Cloud Firestore.');
    } catch (err) {
      console.warn('[Firestore] Dish seed notice:', err.message);
    }
  }

  // =========================================================================
  // 2. TABLE RESERVATIONS
  // =========================================================================
  async bookTable(reservationData) {
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const guestEmail = (reservationData.email && reservationData.email.includes('@'))
      ? reservationData.email.trim()
      : `${(reservationData.guestName || 'guest').toLowerCase().replace(/[^a-z0-9]/g, '') || 'guest'}@seaclub.com`;

    const newReservation = {
      id: reservationData.id || `RES-${randomNum}`,
      guestName: reservationData.guestName || 'Anonymous Guest',
      email: guestEmail,
      phone: reservationData.phone || '+251900000000',
      partySize: Number(reservationData.partySize || reservationData.guests || 2),
      date: reservationData.date || 'Tonight',
      time: reservationData.time || '19:30',
      branch: reservationData.branch || 'Pier 24 Grand Harbor',
      seatingArea: reservationData.seatingArea || 'Ocean Terrace',
      notes: reservationData.notes || '',
      specialRequests: reservationData.notes || reservationData.specialRequests || '',
      status: 'Confirmed',
      createdAt: new Date().toISOString()
    };

    // A. Firestore Cloud Database (Guarded with timeout so UI NEVER hangs)
    if (this.isFirestoreAvailable) {
      try {
        const docRef = doc(db, 'reservations', newReservation.id);
        await withTimeout(setDoc(docRef, newReservation), 2200, 'Reservation setDoc');
        console.log('[Firestore] Reservation saved to Cloud Firestore:', newReservation.id);
      } catch (err) {
        console.warn('[Firestore] Cloud write skipped/timed out (saving to local server):', err.message);
      }
    }

    // B. Local Express Backend (Instant live sync across ports to Admin)
    if (this.isBackendAvailable) {
      try {
        const res = await fetch(`${BACKEND_URL}/reservations`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newReservation)
        });
        if (res.ok) {
          const created = await res.json();
          this.notifySubscribers();
          return created;
        }
      } catch (err) {
        this.isBackendAvailable = false;
      }
    }

    // C. Fallback: Local Storage
    const raw = localStorage.getItem(LOCAL_STORAGE_RESERVATIONS);
    const list = raw ? JSON.parse(raw) : [...INITIAL_RESERVATIONS];
    list.unshift(newReservation);
    localStorage.setItem(LOCAL_STORAGE_RESERVATIONS, JSON.stringify(list));
    this.notifySubscribers();
    return newReservation;
  }

  async getReservations() {
    if (this.isFirestoreAvailable) {
      try {
        const snap = await withTimeout(getDocs(collection(db, 'reservations')), 2200, 'Reservations fetch');
        if (!snap.empty) {
          const list = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
          localStorage.setItem(LOCAL_STORAGE_RESERVATIONS, JSON.stringify(list));
          return list;
        }
      } catch (err) {
        console.warn('[Firestore] Reservations fetch notice:', err.message);
      }
    }

    if (this.isBackendAvailable) {
      try {
        const res = await fetch(`${BACKEND_URL}/reservations`);
        if (res.ok) {
          const data = await res.json();
          localStorage.setItem(LOCAL_STORAGE_RESERVATIONS, JSON.stringify(data));
          return data;
        }
      } catch (err) {
        this.isBackendAvailable = false;
      }
    }

    const raw = localStorage.getItem(LOCAL_STORAGE_RESERVATIONS);
    return raw ? JSON.parse(raw) : INITIAL_RESERVATIONS;
  }

  // =========================================================================
  // 3. KITCHEN ORDERS
  // =========================================================================
  async placeOrder(orderData) {
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const newOrder = {
      id: orderData.id || `ORD-${randomNum}`,
      placedAt: new Date().toISOString(),
      status: 'Received in Kitchen',
      ...orderData
    };

    // A. Firestore Cloud Database
    if (this.isFirestoreAvailable) {
      try {
        const docRef = doc(db, 'orders', newOrder.id);
        await withTimeout(setDoc(docRef, newOrder), 2200, 'Order setDoc');
        console.log('[Firestore] Order saved to Cloud Firestore:', newOrder.id);
      } catch (err) {
        console.warn('[Firestore] Order write skipped/timed out (saving to local server):', err.message);
      }
    }

    // B. Local Express Backend
    if (this.isBackendAvailable) {
      try {
        const res = await fetch(`${BACKEND_URL}/orders`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newOrder)
        });
        if (res.ok) {
          const created = await res.json();
          this.notifySubscribers();
          return created;
        }
      } catch (err) {
        this.isBackendAvailable = false;
      }
    }

    // C. Fallback: Local Storage
    const raw = localStorage.getItem(LOCAL_STORAGE_ORDERS);
    const list = raw ? JSON.parse(raw) : [];
    list.unshift(newOrder);
    localStorage.setItem(LOCAL_STORAGE_ORDERS, JSON.stringify(list));
    this.notifySubscribers();
    return newOrder;
  }

  async getOrders() {
    if (this.isFirestoreAvailable) {
      try {
        const snap = await withTimeout(getDocs(collection(db, 'orders')), 2200, 'Orders fetch');
        if (!snap.empty) {
          const list = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
          localStorage.setItem(LOCAL_STORAGE_ORDERS, JSON.stringify(list));
          return list;
        }
      } catch (err) {
        console.warn('[Firestore] Orders fetch notice:', err.message);
      }
    }

    if (this.isBackendAvailable) {
      try {
        const res = await fetch(`${BACKEND_URL}/orders`);
        if (res.ok) {
          const data = await res.json();
          localStorage.setItem(LOCAL_STORAGE_ORDERS, JSON.stringify(data));
          return data;
        }
      } catch (err) {
        this.isBackendAvailable = false;
      }
    }

    const raw = localStorage.getItem(LOCAL_STORAGE_ORDERS);
    return raw ? JSON.parse(raw) : [];
  }

  // =========================================================================
  // 4. GUEST INQUIRIES & COMPLAINTS
  // =========================================================================
  async submitFeedback(feedbackData) {
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const newFeedback = {
      id: feedbackData.id || `FB-${randomNum}`,
      submittedAt: new Date().toISOString(),
      status: 'Pending Review',
      ...feedbackData
    };

    // A. Firestore Cloud Database
    if (this.isFirestoreAvailable) {
      try {
        const docRef = doc(db, 'feedback', newFeedback.id);
        await withTimeout(setDoc(docRef, newFeedback), 2200, 'Feedback setDoc');
        console.log('[Firestore] Feedback saved to Cloud Firestore:', newFeedback.id);
      } catch (err) {
        console.warn('[Firestore] Feedback write notice:', err.message);
      }
    }

    // B. Local Express Backend
    if (this.isBackendAvailable) {
      try {
        const res = await fetch(`${BACKEND_URL}/feedback`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newFeedback)
        });
        if (res.ok) {
          const created = await res.json();
          this.notifySubscribers();
          return created;
        }
      } catch (err) {
        this.isBackendAvailable = false;
      }
    }

    // C. Fallback: Local Storage
    const raw = localStorage.getItem(LOCAL_STORAGE_FEEDBACK);
    const list = raw ? JSON.parse(raw) : [];
    list.unshift(newFeedback);
    localStorage.setItem(LOCAL_STORAGE_FEEDBACK, JSON.stringify(list));
    this.notifySubscribers();
    return newFeedback;
  }

  async getFeedback() {
    if (this.isFirestoreAvailable) {
      try {
        const ref = collection(db, 'feedback');
        const snapshot = await withTimeout(getDocs(ref), 2200, 'Feedback fetch');
        if (!snapshot.empty) {
          const list = snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
          localStorage.setItem(LOCAL_STORAGE_FEEDBACK, JSON.stringify(list));
          return list;
        }
      } catch (err) {
        console.warn('[Firestore] Feedback fetch notice:', err.message);
      }
    }

    if (this.isBackendAvailable) {
      try {
        const res = await fetch(`${BACKEND_URL}/feedback`);
        if (res.ok) {
          const data = await res.json();
          localStorage.setItem(LOCAL_STORAGE_FEEDBACK, JSON.stringify(data));
          return data;
        }
      } catch (err) {
        this.isBackendAvailable = false;
      }
    }

    const raw = localStorage.getItem(LOCAL_STORAGE_FEEDBACK);
    return raw ? JSON.parse(raw) : [];
  }

  // =========================================================================
  // 5. DINING SALONS & SPOTS
  // =========================================================================
  async getSpots() {
    // A. Firestore Cloud Database
    if (this.isFirestoreAvailable) {
      try {
        const snap = await withTimeout(getDocs(collection(db, 'spots')), 2200, 'Spots fetch');
        if (!snap.empty) {
          const list = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
          localStorage.setItem(LOCAL_STORAGE_SPOTS, JSON.stringify(list));
          return list;
        }
      } catch (err) {
        console.warn('[Firestore] Spots fetch notice:', err.message);
      }
    }

    // B. Local Backend Server
    if (this.isBackendAvailable) {
      try {
        const res = await fetch(`${BACKEND_URL}/spots`);
        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data) && data.length > 0) {
            localStorage.setItem(LOCAL_STORAGE_SPOTS, JSON.stringify(data));
            return data;
          }
        }
      } catch (err) {
        this.isBackendAvailable = false;
      }
    }

    // C. Fallback: Local Storage
    const raw = localStorage.getItem(LOCAL_STORAGE_SPOTS);
    if (raw) {
      try {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      } catch (e) {}
    }

    return [...DEFAULT_SPOTS];
  }

  // =========================================================================
  // 6. RESTAURANT EVENTS
  // =========================================================================
  async getEvents() {
    // A. Firestore Cloud Database
    if (this.isFirestoreAvailable) {
      try {
        const snap = await withTimeout(getDocs(collection(db, 'events')), 2500, 'Events fetch');
        if (!snap.empty) {
          const list = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
          localStorage.setItem(LOCAL_STORAGE_EVENTS, JSON.stringify(list));
          return list;
        }
      } catch (err) {
        console.warn('[Firestore] Events fetch notice:', err.message);
      }
    }

    // B. Local Backend Server
    try {
      const res = await fetch(`${BACKEND_URL}/restaurant-events`);
      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data)) {
          this.isBackendAvailable = true;
          if (data.length > 0) {
            localStorage.setItem(LOCAL_STORAGE_EVENTS, JSON.stringify(data));
            return data;
          }
        }
      }
    } catch (err) {}

    // C. Fallback: Local Storage Cache
    const raw = localStorage.getItem(LOCAL_STORAGE_EVENTS);
    if (raw) {
      try {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) return parsed;
      } catch (e) {}
    }

    return [];
  }
}

export const apiService = new ApiService();
