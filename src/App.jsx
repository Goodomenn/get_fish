import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import HomePage from './components/HomePage';
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
import { CheckCircle2 } from 'lucide-react';

export default function App() {
  // Page Routing State ('home' | 'menu' | 'wine' | 'about' | 'events' | 'contacts')
  const [currentPage, setCurrentPage] = useState(() => {
    const hash = window.location.hash.replace('#', '').toLowerCase();
    const validPages = ['home', 'menu', 'wine', 'about', 'events', 'contacts'];
    return validPages.includes(hash) ? hash : 'home';
  });

  const [dishes, setDishes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

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
  const [selectedSeatingArea, setSelectedSeatingArea] = useState('Ocean Terrace');
  const [selectedBranch, setSelectedBranch] = useState('pier-24');
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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Listen for browser back/forward or hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      const validPages = ['home', 'menu', 'wine', 'about', 'events', 'contacts'];
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page) => {
    setCurrentPage(page);
    window.location.hash = `#${page}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenBookTableWithArea = (areaOrBranch = 'Ocean Terrace') => {
    if (typeof areaOrBranch === 'string') {
      if (['pier-24', 'carmel-cove', 'newport-harbor'].includes(areaOrBranch)) {
        setSelectedBranch(areaOrBranch);
      } else {
        setSelectedSeatingArea(areaOrBranch);
      }
    } else if (typeof areaOrBranch === 'object' && areaOrBranch !== null) {
      if (areaOrBranch.area) setSelectedSeatingArea(areaOrBranch.area);
      if (areaOrBranch.branchId) setSelectedBranch(areaOrBranch.branchId);
    }
    setIsBookTableOpen(true);
  };

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
    <div className="min-h-screen bg-[#050e17] text-slate-100 flex flex-col selection:bg-gold-500 selection:text-black w-full overflow-x-hidden">
      {/* Toast Alert */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 animate-in slide-in-from-bottom-5 duration-300">
          <div className="bg-[#091b2c] border border-gold-500/40 text-white px-5 py-3 rounded-2xl shadow-2xl flex items-center space-x-3 text-xs sm:text-sm font-medium">
            <CheckCircle2 className="w-5 h-5 text-gold-400 shrink-0" />
            <span className="font-serif tracking-wide">{toast.message}</span>
          </div>
        </div>
      )}

      {/* Stuck/Sticky Header with navigation and responsive mobile burger menu */}
      <Header
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenBookTable={() => handleOpenBookTableWithArea('Ocean Terrace')}
        currentPage={currentPage}
        onNavigate={handleNavigate}
        isScrolled={isScrolled}
      />

      {/* Main Content Router */}
      <main className="flex-1">
        {/* 1. DEDICATED HOME PAGE (Full 100% Size Layout) */}
        {currentPage === 'home' && (
          <HomePage
            onOpenMenu={() => handleNavigate('menu')}
            onOpenDish={setActiveDetailDish}
            onAddToCart={handleAddToCart}
            onOpenBookTable={handleOpenBookTableWithArea}
            onOpenCart={() => setIsCartOpen(true)}
            cartCount={totalCartCount}
            currentPage={currentPage}
            onNavigate={handleNavigate}
          />
        )}

        {/* 2. DEDICATED MENU PAGE (30% Scale Compact Hero Banner) */}
        {currentPage === 'menu' && (
          <div>
            <Hero
              compact={true}
              pageBadge="Menu"
              pageTitle="Restaurant Fish Menu & Raw Bar"
              pageSubtitle="Day-boat line-caught wild sea fish, raw bar platters, and handmade seafood pasta"
              currentPage={currentPage}
              onNavigate={handleNavigate}
              onOpenBookTable={() => handleOpenBookTableWithArea('Ocean Terrace')}
              onOpenCart={() => setIsCartOpen(true)}
              cartCount={totalCartCount}
            />
            <MenuSection
              dishes={dishes}
              onAddToCart={handleAddToCart}
              onOpenDishDetail={setActiveDetailDish}
            />
          </div>
        )}

        {/* 3. DEDICATED WINE CELLAR PAGE (30% Scale Compact Hero Banner) */}
        {currentPage === 'wine' && (
          <div>
            <Hero
              compact={true}
              pageBadge="Wine Cellar"
              pageTitle="The Sommelier Wine Cellar"
              pageSubtitle="Rare allocations, Super Tuscans, Grand Cru Chablis, and vintage champagnes"
              currentPage={currentPage}
              onNavigate={handleNavigate}
              onOpenBookTable={() => handleOpenBookTableWithArea('Ocean Terrace')}
              onOpenCart={() => setIsCartOpen(true)}
              cartCount={totalCartCount}
            />
            <WineSection
              onAddToCart={handleAddToCart}
              onOpenDishDetail={setActiveDetailDish}
            />
          </div>
        )}

        {/* 4. DEDICATED ABOUT PAGE (30% Scale Compact Hero Banner) */}
        {currentPage === 'about' && (
          <div>
            <Hero
              compact={true}
              pageBadge="About"
              pageTitle="About SEACLUB"
              pageSubtitle="Our culinary heritage, day-boat sustainability ethics, and master craftsmanship"
              currentPage={currentPage}
              onNavigate={handleNavigate}
              onOpenBookTable={() => handleOpenBookTableWithArea('Ocean Terrace')}
              onOpenCart={() => setIsCartOpen(true)}
              cartCount={totalCartCount}
            />
            <AboutSection
              onOpenBookTable={() => handleOpenBookTableWithArea('Ocean Terrace')}
              onNavigate={handleNavigate}
            />
          </div>
        )}

        {/* 5. DEDICATED EVENTS PAGE (30% Scale Compact Hero Banner) */}
        {currentPage === 'events' && (
          <div>
            <Hero
              compact={true}
              pageBadge="Events"
              pageTitle="Gastronomic Events & Masterclasses"
              pageSubtitle="Oyster shucking workshops, winemaker galas, and seaside acoustic jazz brunches"
              currentPage={currentPage}
              onNavigate={handleNavigate}
              onOpenBookTable={() => handleOpenBookTableWithArea('Ocean Terrace')}
              onOpenCart={() => setIsCartOpen(true)}
              cartCount={totalCartCount}
            />
            <EventsSection
              onOpenBookTable={() => handleOpenBookTableWithArea('Ocean Terrace')}
            />
          </div>
        )}

        {/* 6. DEDICATED CONTACTS PAGE (30% Scale Compact Hero Banner) */}
        {currentPage === 'contacts' && (
          <div>
            <Hero
              compact={true}
              pageBadge="Contacts"
              pageTitle="Location, Hours & Valet Contacts"
              pageSubtitle="Pier 24 Marina Boulevard, private yacht tender docking, and service hours"
              currentPage={currentPage}
              onNavigate={handleNavigate}
              onOpenBookTable={() => handleOpenBookTableWithArea('Ocean Terrace')}
              onOpenCart={() => setIsCartOpen(true)}
              cartCount={totalCartCount}
            />
            <ContactsSection
              onOpenBookTable={() => handleOpenBookTableWithArea('Ocean Terrace')}
              showToast={showToast}
            />
          </div>
        )}
      </main>

      {/* Luxury Footer with Home link and routing */}
      <Footer
        onOpenBookTable={(branchId) => handleOpenBookTableWithArea(branchId || 'pier-24')}
        onNavigate={handleNavigate}
      />

      {/* Modals & Drawers */}
      <BookTableModal
        isOpen={isBookTableOpen}
        onClose={() => setIsBookTableOpen(false)}
        onBookingCompleted={handleBookingCompleted}
        initialSeatingArea={selectedSeatingArea}
        initialBranch={selectedBranch}
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
