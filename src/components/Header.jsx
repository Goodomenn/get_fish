import React, { useState } from 'react';
import { ShoppingBag, Search, Compass, ShieldCheck, ExternalLink, Menu, X, Truck, Fish } from 'lucide-react';

export default function Header({
  cartCount,
  onOpenCart,
  onOpenTracker,
  searchQuery,
  setSearchQuery,
  onCategorySelect
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-all shadow-sm">
      {/* Top Banner Ticker */}
      <div className="bg-gradient-to-r from-ocean-900 via-ocean-800 to-ocean-950 text-white text-xs py-2 px-4 font-medium tracking-wide">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="hidden sm:inline">TODAY'S HARBOR CATCH:</span>
            <span className="text-ocean-200 font-semibold">Morning boats docked • 120kg King Salmon & Bluefin Tuna unloaded</span>
          </div>

          <div className="flex items-center space-x-5 text-xs text-ocean-200">
            <span className="hidden md:flex items-center space-x-1">
              <Truck className="w-3.5 h-3.5 text-cyan-300" />
              <span>Same-Day Ice Box Delivery within 2 Hours</span>
            </span>
            <a
              href="http://localhost:5174"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center space-x-1 bg-ocean-700/80 hover:bg-ocean-600 px-2.5 py-1 rounded text-cyan-200 hover:text-white font-medium transition"
              title="Open Admin & Inventory Management Portal"
            >
              <span>Admin Portal</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <div className="flex items-center space-x-3">
          <a href="#" className="flex items-center space-x-2 group">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-ocean-500 to-ocean-700 flex items-center justify-center text-white shadow-md shadow-ocean-500/25 group-hover:scale-105 transition-transform duration-200">
              <Fish className="w-6 h-6 transform -rotate-12" />
            </div>
            <div>
              <span className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-ocean-950 via-ocean-800 to-ocean-600 bg-clip-text text-transparent">
                GetFish
              </span>
              <span className="block text-[10px] uppercase font-bold tracking-widest text-ocean-600 -mt-1">
                Fresh Seafood Market
              </span>
            </div>
          </a>
        </div>

        {/* Search Bar - Desktop */}
        <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
          <div className="relative w-full">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search wild salmon, bluefin tuna, lobster, oysters..."
              className="w-full pl-10 pr-4 py-2.5 bg-slate-100/80 border border-slate-200 rounded-full text-sm placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-ocean-500/20 focus:border-ocean-500 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs font-bold"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Navigation & Actions */}
        <div className="flex items-center space-x-3 sm:space-x-4">
          <nav className="hidden lg:flex items-center space-x-6 text-sm font-semibold text-slate-700">
            <a href="#catalog" className="hover:text-ocean-600 transition">
              Fresh Catch
            </a>
            <a href="#cold-chain" className="hover:text-ocean-600 transition">
              Cold Chain Journey
            </a>
            <a href="#reviews" className="hover:text-ocean-600 transition">
              Chef Reviews
            </a>
          </nav>

          {/* Track Order Button */}
          <button
            onClick={onOpenTracker}
            className="hidden sm:inline-flex items-center space-x-1.5 px-3 py-2 text-sm font-medium text-slate-700 hover:text-ocean-600 hover:bg-slate-100 rounded-lg transition"
          >
            <Compass className="w-4 h-4 text-ocean-600" />
            <span>Track Order</span>
          </button>

          {/* Cart Button */}
          <button
            onClick={onOpenCart}
            className="relative flex items-center space-x-2 bg-ocean-600 hover:bg-ocean-700 text-white px-4 py-2.5 rounded-full font-medium shadow-sm hover:shadow-md transition active:scale-95 duration-150"
            aria-label="Open Shopping Cart"
          >
            <ShoppingBag className="w-5 h-5" />
            <span className="hidden sm:inline font-semibold">Cart</span>
            {cartCount > 0 && (
              <span className="flex items-center justify-center min-w-5 h-5 px-1.5 text-xs font-bold bg-coral-500 text-white rounded-full ring-2 ring-white animate-bounce">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-600 hover:text-slate-900 rounded-lg focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-4 animate-in slide-in-from-top duration-200">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search seafood..."
              className="w-full pl-9 pr-4 py-2 bg-slate-100 border border-slate-200 rounded-lg text-sm"
            />
          </div>

          <div className="flex flex-col space-y-2 pt-2 text-slate-800 font-medium">
            <a
              href="#catalog"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-100"
            >
              🐟 Fresh Catch Catalog
            </a>
            <a
              href="#cold-chain"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-100"
            >
              ❄️ 2-Hour Cold-Chain Guarantee
            </a>
            <a
              href="#reviews"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-100"
            >
              ⭐ Chef & Customer Reviews
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTracker();
              }}
              className="text-left px-3 py-2 rounded-md text-ocean-600 font-semibold hover:bg-ocean-50 flex items-center space-x-2"
            >
              <Compass className="w-4 h-4" />
              <span>Track Existing Order</span>
            </button>
            <a
              href="http://localhost:5174"
              target="_blank"
              rel="noreferrer"
              className="px-3 py-2 rounded-md bg-ocean-50 text-ocean-700 font-semibold flex items-center justify-between"
            >
              <span>Admin & Inventory Portal</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
