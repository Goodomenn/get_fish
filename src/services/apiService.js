import { RESTAURANT_DISHES, INITIAL_RESERVATIONS } from '../data/restaurantData';
import { db, isFirebaseConfigured } from '../firebase';
import {
  collection,
  getDocs,
  doc,
  setDoc,
  addDoc,
  onSnapshot,
  query,
  orderBy
} from 'firebase/firestore';

const BACKEND_URL = 'http://localhost:5000/api';
const LOCAL_STORAGE_DISHES = 'seaclub_dishes_v2';
const LOCAL_STORAGE_RESERVATIONS = 'seaclub_reservations_v2';
const LOCAL_STORAGE_ORDERS = 'seaclub_orders_v2';
const LOCAL_STORAGE_FEEDBACK = 'seaclub_feedback_v2';

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
    } else {
      await this.checkBackend();
      if (this.isBackendAvailable) {
        this.initSSE();
      }
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
      // Real-time listener for dishes menu
      const dishesRef = collection(db, 'dishes');
      const unsubDishes = onSnapshot(dishesRef, (snapshot) => {
        if (!snapshot.empty) {
          const list = snapshot.docs.map((docSnap) => ({
            id: docSnap.id,
            ...docSnap.data()
          }));
          localStorage.setItem(LOCAL_STORAGE_DISHES, JSON.stringify(list));
        }
        this.notifySubscribers();
      }, (err) => {
        console.warn('[Firestore] Real-time dishes listener warning:', err);
      });

      this.firestoreUnsubscribes.push(unsubDishes);
    } catch (err) {
      console.warn('[Firestore] Failed to attach listeners:', err);
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
      this.eventSource.addEventListener('ORDER_CREATED', handleUpdate);
      this.eventSource.addEventListener('DATABASE_RESET', handleUpdate);

      this.eventSource.onerror = () => {
        this.isBackendAvailable = false;
      };
    } catch (err) {
      console.warn('[Restaurant API] SSE error:', err);
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
        const snapshot = await getDocs(dishesRef);
        if (!snapshot.empty) {
          const list = snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
          localStorage.setItem(LOCAL_STORAGE_DISHES, JSON.stringify(list));
          return list;
        } else {
          // Auto-seed initial dishes to Firestore if collection is brand new
          await this.seedInitialFirestoreDishes();
        }
      } catch (err) {
        console.warn('[Firestore] Falling back to local cache:', err);
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
        await setDoc(dishRef, dish, { merge: true });
      }
      console.log('[Firestore] Seeded initial restaurant dishes to Cloud Firestore.');
    } catch (err) {
      console.warn('[Firestore] Dish seed error:', err);
    }
  }

  // =========================================================================
  // 2. TABLE RESERVATIONS
  // =========================================================================
  async bookTable(reservationData) {
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const newReservation = {
      id: `RES-${randomNum}`,
      createdAt: new Date().toISOString(),
      status: 'Confirmed',
      ...reservationData
    };

    // A. Firestore Cloud Database
    if (this.isFirestoreAvailable) {
      try {
        const docRef = doc(db, 'reservations', newReservation.id);
        await setDoc(docRef, newReservation);
        this.notifySubscribers();
        return newReservation;
      } catch (err) {
        console.warn('[Firestore] Reservation write error, saving locally:', err);
      }
    }

    // B. Local Express Backend
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

  // =========================================================================
  // 3. KITCHEN ORDERS
  // =========================================================================
  async placeOrder(orderData) {
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const newOrder = {
      id: `ORD-${randomNum}`,
      placedAt: new Date().toISOString(),
      status: 'Received in Kitchen',
      ...orderData
    };

    // A. Firestore Cloud Database
    if (this.isFirestoreAvailable) {
      try {
        const docRef = doc(db, 'orders', newOrder.id);
        await setDoc(docRef, newOrder);
        this.notifySubscribers();
        return newOrder;
      } catch (err) {
        console.warn('[Firestore] Order write error, saving locally:', err);
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

  // =========================================================================
  // 4. GUEST INQUIRIES & COMPLAINTS
  // =========================================================================
  async submitFeedback(feedbackData) {
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const newFeedback = {
      id: `FB-${randomNum}`,
      submittedAt: new Date().toISOString(),
      status: 'Pending Review',
      ...feedbackData
    };

    // A. Firestore Cloud Database
    if (this.isFirestoreAvailable) {
      try {
        const docRef = doc(db, 'feedback', newFeedback.id);
        await setDoc(docRef, newFeedback);
        this.notifySubscribers();
        return newFeedback;
      } catch (err) {
        console.warn('[Firestore] Feedback write error, saving locally:', err);
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
        const snapshot = await getDocs(ref);
        if (!snapshot.empty) {
          return snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
        }
      } catch (err) {
        console.warn('[Firestore] Feedback fetch error:', err);
      }
    }
    const raw = localStorage.getItem(LOCAL_STORAGE_FEEDBACK);
    return raw ? JSON.parse(raw) : [];
  }
}

export const apiService = new ApiService();
