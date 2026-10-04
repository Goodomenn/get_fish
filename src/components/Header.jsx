import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X, ExternalLink } from 'lucide-react';

export default function Header({
  cartCount = 0,
  onOpenCart,
  onOpenBookTable,
  currentPage = 'home',
  onNavigate,
  isScrolled = false
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Auto-close mobile drawer if viewport is resized to desktop width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'menu', label: 'Menu' },
    { id: 'wine', label: 'Wine Cellar' },
    { id: 'about', label: 'About' },
    { id: 'events', label: 'Events' },
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
        isScrolled || mobileMenuOpen
          ? 'bg-[#071421]/95 backdrop-blur-md border-b border-slate-800 shadow-2xl'
          : 'bg-gradient-to-b from-[#030910]/85 via-[#030910]/40 to-transparent backdrop-blur-[1px]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 h-16 sm:h-20 flex items-center justify-between">
        {/* Brand Logo - "SEACLUB" */}
        <div className="flex items-center space-x-4 sm:space-x-6 shrink-0">
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center space-x-3 group text-left cursor-pointer"
          >
            <span className="font-serif tracking-[0.2em] sm:tracking-[0.28em] text-lg sm:text-xl font-bold uppercase text-gold-300 hover:text-white transition duration-300 whitespace-nowrap drop-shadow-md">
              SEACLUB
            </span>
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
        <div className="flex items-center space-x-2 sm:space-x-4 lg:space-x-6 shrink-0">
          {/* Book a Table — Never wraps or breaks into multiple lines */}
          <button
            onClick={onOpenBookTable}
            className="flex items-center space-x-1.5 sm:space-x-2.5 text-gold-300 hover:text-white font-serif text-[11px] sm:text-xs lg:text-sm tracking-[0.12em] sm:tracking-[0.16em] uppercase transition duration-300 cursor-pointer group whitespace-nowrap shrink-0 drop-shadow-md"
          >
            <span>Book a table</span>
            <span className="hidden sm:inline-block w-3 sm:w-6 h-0.5 bg-gold-400 group-hover:w-8 transition-all duration-300" />
          </button>

          {/* Ticket / Cart Button */}
          <button
            onClick={onOpenCart}
            className="relative p-1.5 sm:p-2 text-slate-200 hover:text-gold-300 transition duration-200 cursor-pointer flex items-center space-x-1 shrink-0"
            title="View Order Ticket"
            aria-label="Order Ticket"
          >
            <ShoppingBag className="w-4 h-4 text-gold-400" />
            <span className="hidden xl:inline font-serif text-xs tracking-wider uppercase text-slate-200">Ticket</span>
            {cartCount > 0 && (
              <span className="w-4 h-4 rounded-full bg-gold-500 text-slate-950 font-bold text-[10px] flex items-center justify-center -mr-1">
                {cartCount}
              </span>
            )}
          </button>

          {/* Admin portal link */}
          <a
            href="http://localhost:5174"
            target="_blank"
            rel="noreferrer"
            className="p-1.5 text-slate-400 hover:text-gold-300 transition shrink-0"
            title="Admin Management Portal"
            aria-label="Admin Portal"
          >
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          {/* Mobile/Tablet Menu Hamburger Button - Always visible on < lg */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 sm:p-2 text-gold-300 hover:text-white cursor-pointer rounded-lg hover:bg-white/5 transition shrink-0"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 sm:w-6 sm:h-6 text-gold-400" />
            ) : (
              <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-gold-400" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile / Tablet Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#071421]/98 backdrop-blur-xl border-b border-slate-800 px-6 py-6 space-y-3 animate-in slide-in-from-top-2 duration-200 text-xs sm:text-sm tracking-widest uppercase font-serif shadow-2xl">
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
          <div className="pt-3 border-t border-slate-800/80 space-y-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBookTable();
              }}
              className="w-full py-3 px-4 bg-gradient-to-r from-gold-500/20 to-gold-400/10 border border-gold-500/50 hover:border-gold-400 text-gold-300 hover:text-white text-center font-serif text-xs tracking-widest uppercase rounded transition cursor-pointer"
            >
              Book a Table →
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
