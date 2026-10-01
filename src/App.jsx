import React, { useState, useEffect, useMemo } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CategoryFilter from './components/CategoryFilter';
import ProductCard from './components/ProductCard';
import ProductDetailModal from './components/ProductDetailModal';
import CartDrawer from './components/CartDrawer';
import CheckoutModal from './components/CheckoutModal';
import OrderTrackerModal from './components/OrderTrackerModal';
import FreshnessJourney from './components/FreshnessJourney';
import ReviewsSection from './components/ReviewsSection';
import Footer from './components/Footer';
import { apiService } from './services/apiService';
import { AlertCircle, CheckCircle, Sparkles } from 'lucide-react';

export default function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('featured');
  const [inStockOnly, setInStockOnly] = useState(false);

  // Cart State (with local storage persistence)
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem('getfish_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Modals state
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeDetailProduct, setActiveDetailProduct] = useState(null);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isTrackerOpen, setIsTrackerOpen] = useState(false);
  const [trackerOrderId, setTrackerOrderId] = useState('');
  const [checkoutTotals, setCheckoutTotals] = useState({ subtotal: 0, deliveryFee: 0, discount: 0, total: 0 });

  // Toast Notification
  const [toast, setToast] = useState(null);

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3500);
  };

  // Sync cart to local storage
  useEffect(() => {
    localStorage.setItem('getfish_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  // Load products & subscribe to real-time changes
  const loadProducts = async () => {
    try {
      const list = await apiService.getProducts();
      setProducts(list);
    } catch (err) {
      console.error('Failed to load products:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProducts();
    const unsubscribe = apiService.subscribe(() => {
      loadProducts();
    });
    return () => unsubscribe();
  }, []);

  // Cart operations
  const handleAddToCart = (productWithCut) => {
    setCartItems(prev => {
      const existingIdx = prev.findIndex(
        item => item.id === productWithCut.id && item.cut === productWithCut.cut
      );

      if (existingIdx !== -1) {
        const copy = [...prev];
        copy[existingIdx].quantity += productWithCut.quantity || 1;
        return copy;
      } else {
        return [...prev, { ...productWithCut, quantity: productWithCut.quantity || 1 }];
      }
    });

    showToast(`Added ${productWithCut.name} (${productWithCut.cut}) to cart!`);
  };

  const handleUpdateQuantity = (id, cut, newQty) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id && item.cut === cut ? { ...item, quantity: newQty } : item
      )
    );
  };

  const handleRemoveItem = (id, cut) => {
    setCartItems(prev => prev.filter(item => !(item.id === id && item.cut === cut)));
    showToast('Item removed from cart', 'info');
  };

  const handleProceedToCheckout = (totals) => {
    setCheckoutTotals(totals);
    setIsCheckoutOpen(true);
  };

  const handleOrderCompleted = (order) => {
    setCartItems([]);
    setTrackerOrderId(order.id);
    showToast(`🎉 Order #${order.id} placed! Tracking details ready.`);
  };

  const handleOpenTrackerWithId = (id) => {
    setTrackerOrderId(id || '');
    setIsTrackerOpen(true);
  };

  // Filter & Sort Products
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.origin.toLowerCase().includes(q) ||
        (p.description && p.description.toLowerCase().includes(q))
      );
    }

    // Category filter
    if (selectedCategory !== 'All') {
      result = result.filter(p => p.category === selectedCategory);
    }

    // In stock filter
    if (inStockOnly) {
      result = result.filter(p => p.stock > 0);
    }

    // Sorting
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'stock':
        result.sort((a, b) => b.stock - a.stock);
        break;
      case 'featured':
      default:
        result.sort((a, b) => (b.isPopular ? 1 : 0) - (a.isPopular ? 1 : 0));
        break;
    }

    return result;
  }, [products, searchQuery, selectedCategory, inStockOnly, sortBy]);

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col selection:bg-ocean-500 selection:text-white">
      {/* Toast Alert */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 animate-in slide-in-from-bottom-5 duration-300">
          <div className="bg-slate-900 text-white px-5 py-3 rounded-2xl shadow-2xl flex items-center space-x-3 border border-slate-700 text-xs sm:text-sm font-semibold">
            {toast.type === 'success' && <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />}
            {toast.type === 'info' && <Sparkles className="w-5 h-5 text-cyan-400 shrink-0" />}
            {toast.type === 'error' && <AlertCircle className="w-5 h-5 text-rose-400 shrink-0" />}
            <span>{toast.message}</span>
          </div>
        </div>
      )}

      {/* Navigation Header */}
      <Header
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenTracker={() => setIsTrackerOpen(true)}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onCategorySelect={setSelectedCategory}
      />

      {/* Hero Section */}
      <Hero
        onExploreClick={() => {
          const el = document.getElementById('catalog');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        onOpenTracker={() => setIsTrackerOpen(true)}
      />

      {/* Main Catalog Section */}
      <main id="catalog" className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 w-full">
        {/* Section Title */}
        <div className="mb-6 space-y-1">
          <div className="inline-flex items-center space-x-1.5 text-xs font-bold text-ocean-700 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Today's Harbor Landings</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Fresh Catch & Seafood Market
            </h2>
            <p className="text-xs text-slate-500">
              Cleaned, filleted & packed dockside • Sub-zero delivery in 2 hours
            </p>
          </div>
        </div>

        {/* Filter Bar */}
        <CategoryFilter
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          sortBy={sortBy}
          onSortChange={setSortBy}
          inStockOnly={inStockOnly}
          onToggleInStock={setInStockOnly}
          productCount={filteredProducts.length}
        />

        {/* Product Grid */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="bg-white rounded-2xl h-96 p-4 animate-pulse border border-slate-200">
                <div className="bg-slate-200 h-48 rounded-xl mb-4"></div>
                <div className="bg-slate-200 h-4 w-3/4 rounded mb-2"></div>
                <div className="bg-slate-200 h-4 w-1/2 rounded"></div>
              </div>
            ))}
          </div>
        ) : filteredProducts.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-slate-200 p-8">
            <p className="text-base font-bold text-slate-700">No seafood found matching your filters.</p>
            <p className="text-xs text-slate-400 mt-1">Try searching a different catch or clearing the filters.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
                setInStockOnly(false);
              }}
              className="mt-4 px-4 py-2 bg-ocean-600 text-white text-xs font-bold rounded-xl"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
                onQuickView={setActiveDetailProduct}
              />
            ))}
          </div>
        )}
      </main>

      {/* Cold Chain Process Section */}
      <FreshnessJourney />

      {/* Chef & Customer Testimonials */}
      <ReviewsSection />

      {/* Footer */}
      <Footer />

      {/* Modals & Drawers */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onProceedToCheckout={handleProceedToCheckout}
      />

      <ProductDetailModal
        product={activeDetailProduct}
        onClose={() => setActiveDetailProduct(null)}
        onAddToCart={handleAddToCart}
      />

      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        cartItems={cartItems}
        orderTotals={checkoutTotals}
        onOrderCompleted={handleOrderCompleted}
      />

      <OrderTrackerModal
        isOpen={isTrackerOpen}
        onClose={() => setIsTrackerOpen(false)}
        initialOrderId={trackerOrderId}
      />
    </div>
  );
}
