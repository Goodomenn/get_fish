import { INITIAL_PRODUCTS, INITIAL_ORDERS } from '../data/initialData';

const BACKEND_URL = 'http://localhost:5000/api';
const LOCAL_STORAGE_PRODUCTS = 'getfish_products_v1';
const LOCAL_STORAGE_ORDERS = 'getfish_orders_v1';

class ApiService {
  constructor() {
    this.isBackendAvailable = false;
    this.subscribers = new Set();
    this.eventSource = null;
    this.init();
  }

  async init() {
    await this.checkBackend();
    this.initLocalStorage();

    if (this.isBackendAvailable) {
      this.initSSE();
    }

    // Also listen to cross-tab storage changes
    if (typeof window !== 'undefined') {
      window.addEventListener('storage', (e) => {
        if (e.key === LOCAL_STORAGE_PRODUCTS || e.key === LOCAL_STORAGE_ORDERS) {
          this.notifySubscribers();
        }
      });
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
    if (!localStorage.getItem(LOCAL_STORAGE_PRODUCTS)) {
      localStorage.setItem(LOCAL_STORAGE_PRODUCTS, JSON.stringify(INITIAL_PRODUCTS));
    }
    if (!localStorage.getItem(LOCAL_STORAGE_ORDERS)) {
      localStorage.setItem(LOCAL_STORAGE_ORDERS, JSON.stringify(INITIAL_ORDERS));
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

      this.eventSource.addEventListener('PRODUCT_CREATED', handleUpdate);
      this.eventSource.addEventListener('PRODUCT_UPDATED', handleUpdate);
      this.eventSource.addEventListener('PRODUCT_DELETED', handleUpdate);
      this.eventSource.addEventListener('PRODUCTS_UPDATED', handleUpdate);
      this.eventSource.addEventListener('ORDER_CREATED', handleUpdate);
      this.eventSource.addEventListener('ORDER_UPDATED', handleUpdate);
      this.eventSource.addEventListener('DATABASE_RESET', handleUpdate);

      this.eventSource.onerror = () => {
        // Backend might have stopped, fallback silently
        this.isBackendAvailable = false;
      };
    } catch (err) {
      console.warn('[GetFish API] SSE error:', err);
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

  async getProducts() {
    if (this.isBackendAvailable) {
      try {
        const res = await fetch(`${BACKEND_URL}/products`);
        if (res.ok) {
          const data = await res.json();
          // Update local cache
          localStorage.setItem(LOCAL_STORAGE_PRODUCTS, JSON.stringify(data));
          return data;
        }
      } catch (err) {
        this.isBackendAvailable = false;
      }
    }

    // Local storage fallback
    const raw = localStorage.getItem(LOCAL_STORAGE_PRODUCTS);
    return raw ? JSON.parse(raw) : INITIAL_PRODUCTS;
  }

  async placeOrder(orderData) {
    if (this.isBackendAvailable) {
      try {
        const res = await fetch(`${BACKEND_URL}/orders`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(orderData)
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

    // Fallback: local storage
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const newOrder = {
      id: `GF-${randomNum}`,
      placedAt: new Date().toISOString(),
      status: 'Pending',
      ...orderData
    };

    const ordersRaw = localStorage.getItem(LOCAL_STORAGE_ORDERS);
    const orders = ordersRaw ? JSON.parse(ordersRaw) : [...INITIAL_ORDERS];
    orders.unshift(newOrder);
    localStorage.setItem(LOCAL_STORAGE_ORDERS, JSON.stringify(orders));

    // Reduce stock
    const productsRaw = localStorage.getItem(LOCAL_STORAGE_PRODUCTS);
    const products = productsRaw ? JSON.parse(productsRaw) : [...INITIAL_PRODUCTS];
    if (Array.isArray(newOrder.items)) {
      for (const item of newOrder.items) {
        const prod = products.find(p => p.id === item.id);
        if (prod) {
          prod.stock = Math.max(0, prod.stock - (item.quantity || 1));
        }
      }
    }
    localStorage.setItem(LOCAL_STORAGE_PRODUCTS, JSON.stringify(products));

    this.notifySubscribers();
    return newOrder;
  }

  async getOrderById(orderId) {
    const cleanId = orderId.trim().toUpperCase();
    if (this.isBackendAvailable) {
      try {
        const res = await fetch(`${BACKEND_URL}/orders`);
        if (res.ok) {
          const orders = await res.json();
          return orders.find(o => o.id.toUpperCase() === cleanId) || null;
        }
      } catch (err) {
        this.isBackendAvailable = false;
      }
    }

    const ordersRaw = localStorage.getItem(LOCAL_STORAGE_ORDERS);
    const orders = ordersRaw ? JSON.parse(ordersRaw) : INITIAL_ORDERS;
    return orders.find(o => o.id.toUpperCase() === cleanId) || null;
  }
}

export const apiService = new ApiService();
