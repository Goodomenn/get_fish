import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import MenuSection from './components/MenuSection';
import WineSection from './components/WineSection';
import AboutSection from './components/AboutSection';
import EventsSection from './components/EventsSection';
import ContactsSection from './components/ContactsSection';
import Footer from './components/Footer';
import BookTableModal from './components/BookTableModal';
import DishDetailModal from './components/DishDetailModal';
import CartDrawer from './components/CartDrawer';
import { apiService } from './services/apiService';
import { CheckCircle2, Sparkles, Wine, Calendar } from 'lucide-react';

export default function App() {
  const [dishes, setDishes] = useState([]);
  const [loading, setLoading] = useState(true);

  // Cart State (persisted in localStorage)
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem('seaclub_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Modals state
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isBookTableOpen, setIsBookTableOpen] = useState(false);
  const [activeDetailDish, setActiveDetailDish] = useState(null);

  // Toast Notification
  const [toast, setToast] = useState(null);

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3500);
  };

  useEffect(() => {
    localStorage.setItem('seaclub_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const loadDishes = async () => {
    try {
      const list = await apiService.getDishes();
      setDishes(list);
    } catch (err) {
      console.error('Failed to load menu dishes:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadDishes();
    const unsubscribe = apiService.subscribe(() => {
      loadDishes();
    });
    return () => unsubscribe();
  }, []);

  // Cart Handlers
  const handleAddToCart = (dish) => {
    setCartItems(prev => {
      const existingIdx = prev.findIndex(item => item.id === dish.id);
      if (existingIdx !== -1) {
        const copy = [...prev];
        copy[existingIdx].quantity += 1;
        return copy;
      } else {
        return [...prev, { ...dish, quantity: 1 }];
      }
    });

    showToast(`Added ${dish.name} to order ticket!`);
  };

  const handleUpdateQuantity = (id, newQty) => {
    setCartItems(prev =>
      prev.map(item => (item.id === id ? { ...item, quantity: newQty } : item))
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
    showToast('Item removed from order ticket', 'info');
  };

  const handleQuickAddById = (id) => {
    const dish = dishes.find(d => d.id === id);
    if (dish) {
      handleAddToCart(dish);
    }
  };

  const handleOpenDishById = (id) => {
    const dish = dishes.find(d => d.id === id);
    if (dish) {
      setActiveDetailDish(dish);
    }
  };

  const handleProceedOrder = async (orderPayload) => {
    try {
      const created = await apiService.placeOrder(orderPayload);
      setCartItems([]);
      setIsCartOpen(false);
      showToast(`🎉 Order #${created.id} transmitted to the kitchen!`);
    } catch (err) {
      console.error('Order error:', err);
      showToast('Could not submit order. Please notify waitstaff.', 'error');
    }
  };

  const handleBookingCompleted = (reservation) => {
    showToast(`🎉 Table reserved under "${reservation.guestName}" (#${reservation.id})`);
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#071421] text-slate-100 flex flex-col selection:bg-gold-500 selection:text-black">
      {/* Toast Alert */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 animate-in slide-in-from-bottom-5 duration-300">
          <div className="bg-[#091b2c] border border-gold-500/40 text-white px-5 py-3 rounded-2xl shadow-2xl flex items-center space-x-3 text-xs sm:text-sm font-medium">
            <CheckCircle2 className="w-5 h-5 text-gold-400 shrink-0" />
            <span className="font-serif tracking-wide">{toast.message}</span>
          </div>
        </div>
      )}

      {/* Top Header */}
      <Header
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenBookTable={() => setIsBookTableOpen(true)}
      />

      {/* Hero Section matching exact screenshot */}
      <Hero
        onOpenMenu={() => {
          const el = document.getElementById('menu');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        onOpenDish={handleOpenDishById}
        onOpenBookTable={() => setIsBookTableOpen(true)}
        onQuickAdd={handleQuickAddById}
      />

      {/* Restaurant Menu Section */}
      <MenuSection
        dishes={dishes}
        onAddToCart={handleAddToCart}
        onOpenDishDetail={setActiveDetailDish}
      />

      {/* Sommelier Wine Pairings */}
      <WineSection
        onAddToCart={handleAddToCart}
        onOpenDishDetail={setActiveDetailDish}
      />

      {/* About The Fish Restaurant */}
      <AboutSection onOpenBookTable={() => setIsBookTableOpen(true)} />

      {/* Gastronomic Events & Masterclasses */}
      <EventsSection onOpenBookTable={() => setIsBookTableOpen(true)} />

      {/* Location & Contacts */}
      <ContactsSection onOpenBookTable={() => setIsBookTableOpen(true)} />

      {/* Luxury Footer */}
      <Footer onOpenBookTable={() => setIsBookTableOpen(true)} />

      {/* Modals & Drawers */}
      <BookTableModal
        isOpen={isBookTableOpen}
        onClose={() => setIsBookTableOpen(false)}
        onBookingCompleted={handleBookingCompleted}
      />

      <DishDetailModal
        dish={activeDetailDish}
        onClose={() => setActiveDetailDish(null)}
        onAddToCart={handleAddToCart}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onProceedOrder={handleProceedOrder}
      />
    </div>
  );
}
