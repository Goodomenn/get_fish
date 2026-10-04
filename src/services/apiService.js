import { RESTAURANT_DISHES, INITIAL_RESERVATIONS } from '../data/restaurantData';
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

// Safe timeout wrapper: guarantees Firestore calls never hang or freeze UI
const withTimeout = (promise, ms = 2200, label = 'Firestore operation') =>
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
          e.key === LOCAL_STORAGE_FEEDBACK
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

      this.firestoreUnsubscribes.push(unsubDishes, unsubRes);
    } catch (err) {
      console.warn('[Firestore] Notice attaching cloud listeners:', err.message);
    }
  }

  async checkBackend() {
    try {
      const res = await fetch(`${BACKEND_URL}/health`, { method: 'GET', signal: AbortSignal.timeout(1200) });
      if (res.ok) {
        this.isBackendAvailable = true;
        return true;
      }
    } catch (err) {
      this.isBackendAvailable = false;
    }
    return false;
  }

  initLocalStorage() {
    if (typeof window === 'undefined') return;
    if (!localStorage.getItem(LOCAL_STORAGE_DISHES)) {
      localStorage.setItem(LOCAL_STORAGE_DISHES, JSON.stringify(RESTAURANT_DISHES));
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
  }

  initSSE() {
    if (typeof window === 'undefined' || !window.EventSource) return;
    try {
      if (this.eventSource) this.eventSource.close();
      this.eventSource = new EventSource(`${BACKEND_URL}/events`);

      const handleUpdate = () => {
        this.notifySubscribers();
      };

      this.eventSource.addEventListener('DISH_CREATED', handleUpdate);
      this.eventSource.addEventListener('DISH_UPDATED', handleUpdate);
      this.eventSource.addEventListener('DISH_DELETED', handleUpdate);
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
    // A. Firestore Cloud Database
    if (this.isFirestoreAvailable) {
      try {
        const dishesRef = collection(db, 'dishes');
        const snapshot = await withTimeout(getDocs(dishesRef), 2200, 'Dishes fetch');
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

    // B. Local Express Backend
    if (this.isBackendAvailable) {
      try {
        const res = await fetch(`${BACKEND_URL}/dishes`);
        if (res.ok) {
          const data = await res.json();
          localStorage.setItem(LOCAL_STORAGE_DISHES, JSON.stringify(data));
          return data;
        }
      } catch (err) {
        this.isBackendAvailable = false;
      }
    }

    // C. Fallback: Local Storage
    const raw = localStorage.getItem(LOCAL_STORAGE_DISHES);
    return raw ? JSON.parse(raw) : RESTAURANT_DISHES;
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
}

export const apiService = new ApiService();
