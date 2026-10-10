import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X, ExternalLink, CalendarCheck } from 'lucide-react';

export default function Header({
  cartCount = 0,
  onOpenCart,
  onOpenBookTable,
  currentPage = 'home',
  onNavigate,
  isScrolled = false,
  hasEvents = false
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close drawer on escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'menu', label: 'Menu' },
    { id: 'about', label: 'About' },
    ...(hasEvents ? [{ id: 'events', label: 'Events' }] : []),
    { id: 'contacts', label: 'Contacts' }
  ];

  const handleNavClick = (pageId) => {
    if (onNavigate) {
      onNavigate(pageId);
    }
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isScrolled || mobileMenuOpen || currentPage !== 'home'
          ? 'bg-[#071421]/95 backdrop-blur-md border-b border-slate-800 shadow-2xl'
          : 'bg-gradient-to-b from-[#030910]/85 via-[#030910]/40 to-transparent backdrop-blur-[1px]'
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-3 sm:px-6 lg:px-10 h-16 sm:h-20 flex items-center justify-between">
        {/* Brand Logo - Gech Fish Logo Emblem */}
        <div className="flex items-center space-x-3 shrink-0">
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center space-x-2 sm:space-x-3 group text-left cursor-pointer"
            title="Gech Fish Home"
            aria-label="Gech Fish Home"
          >
            {/* Gech Fish Circular Brand Logo */}
            <div className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden border border-gold-400/50 shadow-md group-hover:border-gold-300 group-hover:scale-105 transition-all duration-300 shrink-0 bg-white p-0.5">
              <img
                src="/gech-fish-logo.png"
                alt="Gech Fish Logo"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Brand Typography */}
            <div className="flex flex-col">
              <span className="font-serif tracking-[0.16em] sm:tracking-[0.22em] text-base sm:text-xl font-bold uppercase text-gold-300 group-hover:text-white transition duration-300 whitespace-nowrap drop-shadow-md">
                GECH FISH
              </span>
              <span className="hidden sm:block text-[8px] sm:text-[9px] font-sans tracking-wider uppercase text-gold-400/80 -mt-0.5 whitespace-nowrap">
                ጌች አሳ • Fresh Fish
              </span>
            </div>
          </button>
        </div>

        {/* Center Navigation - Desktop (lg:flex) */}
        <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8 text-xs xl:text-sm tracking-[0.18em] font-serif uppercase">
          {navItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`transition duration-200 py-1 cursor-pointer relative whitespace-nowrap drop-shadow-sm ${
                  isActive
                    ? 'text-gold-300 font-bold'
                    : 'text-slate-200 hover:text-gold-300'
                }`}
              >
                <span>{item.label}</span>
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold-400 rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right CTA / Action Group */}
        <div className="flex items-center space-x-2 sm:space-x-3 lg:space-x-4 shrink-0">
          {/* Book a Table — Icon on Mobile, Icon + Text on Desktop */}
          <button
            onClick={onOpenBookTable}
            className="relative p-1.5 sm:px-3 sm:py-1.5 text-gold-300 hover:text-white rounded-lg border border-gold-500/30 hover:border-gold-400 bg-gold-500/10 hover:bg-gold-500/20 transition duration-300 cursor-pointer flex items-center space-x-1.5 shrink-0 group shadow-sm"
            title="Book a Table"
            aria-label="Book a Table"
          >
            <CalendarCheck className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-gold-400 group-hover:scale-110 transition-transform shrink-0" />
            <span className="hidden md:inline font-serif text-xs lg:text-sm tracking-[0.14em] uppercase whitespace-nowrap">
              Book a table
            </span>
          </button>

          {/* Ticket / Cart Button */}
          <button
            onClick={onOpenCart}
            className="relative p-1.5 sm:p-2 text-slate-200 hover:text-gold-300 transition duration-200 cursor-pointer flex items-center space-x-1 shrink-0"
            title="View Order Ticket"
            aria-label="Order Ticket"
          >
            <ShoppingBag className="w-4 h-4 text-gold-400" />
            <span className="hidden xl:inline font-serif text-xs tracking-wider uppercase text-slate-200">Cart</span>
            {cartCount > 0 && (
              <span className="w-4 h-4 rounded-full bg-gold-500 text-slate-950 font-bold text-[10px] flex items-center justify-center -mr-1">
                {cartCount}
              </span>
            )}
          </button>

          {/* Burger Menu Button - Only visible on mobile/tablet (< lg), hidden when desktop nav is visible */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 sm:px-2.5 sm:py-1.5 text-gold-300 hover:text-white cursor-pointer rounded-xl border border-gold-500/40 bg-gold-500/10 hover:bg-gold-500/25 transition shrink-0 flex items-center space-x-1 shadow-sm active:scale-95"
            aria-label="Toggle navigation menu"
            title="Menu"
          >
            {mobileMenuOpen ? (
              <>
                <X className="w-4 h-4 sm:w-5 sm:h-5 text-gold-400 shrink-0" />
                <span className="hidden sm:inline font-serif text-xs uppercase tracking-wider text-gold-300 font-semibold">Close</span>
              </>
            ) : (
              <>
                <Menu className="w-4 h-4 sm:w-5 sm:h-5 text-gold-400 shrink-0" />
                <span className="hidden sm:inline font-serif text-xs uppercase tracking-wider text-gold-300 font-semibold">Menu</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Navigation Drawer - Opens cleanly on any resolution */}
      {mobileMenuOpen && (
        <div className="bg-[#071421]/98 backdrop-blur-xl border-b border-slate-800 px-6 py-6 space-y-4 animate-in slide-in-from-top-2 duration-200 text-xs sm:text-sm tracking-widest uppercase font-serif shadow-2xl">
          {/* Drawer Brand Header with Gech Fish Logo */}
          <div className="flex items-center space-x-3 pb-3 border-b border-slate-800/80">
            <div className="w-9 h-9 rounded-full overflow-hidden border border-gold-400/50 bg-white p-0.5 shrink-0">
              <img
                src="/gech-fish-logo.png"
                alt="Gech Fish Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <div className="font-serif tracking-[0.2em] text-sm font-bold uppercase text-gold-300">
                GECH FISH
              </div>
              <div className="text-[9px] font-sans tracking-wider text-slate-300">
                ጌች አሳ • Fish Restaurant
              </div>
            </div>
          </div>

          <div className="space-y-1">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center justify-between w-full text-left py-2.5 transition border-b border-slate-800/40 last:border-b-0 cursor-pointer ${
                    isActive ? 'text-gold-300 font-bold' : 'text-slate-200 hover:text-gold-300'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />}
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-800/80 space-y-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBookTable();
              }}
              className="w-full py-3 px-4 bg-gradient-to-r from-gold-500/20 to-gold-400/10 border border-gold-500/50 hover:border-gold-400 text-gold-300 hover:text-white text-center font-serif text-xs tracking-widest uppercase rounded transition cursor-pointer flex items-center justify-center space-x-2"
            >
              <CalendarCheck className="w-4 h-4 text-gold-400" />
              <span>Book a Table →</span>
            </button>
            <a
              href="http://localhost:5174"
              target="_blank"
              rel="noreferrer"
              className="w-full py-2 px-4 text-center text-slate-400 hover:text-gold-300 text-xs tracking-wider font-serif uppercase transition flex items-center justify-center space-x-2"
            >
              <span>Admin Management Portal</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
