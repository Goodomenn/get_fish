import React, { useState } from 'react';
import { ShoppingBag, Menu, X, ExternalLink } from 'lucide-react';

export default function Header({
  cartCount,
  onOpenCart,
  onOpenBookTable,
  currentPage = 'home',
  onNavigate,
  isVisible = false
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        isVisible
          ? 'translate-y-0 opacity-100 bg-[#071421]/95 backdrop-blur-md border-b border-slate-800 shadow-2xl'
          : '-translate-y-full opacity-0 pointer-events-none'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 h-20 flex items-center justify-between">
        {/* Brand Logo - "SEACLUB" */}
        <div className="flex items-center space-x-6">
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center space-x-3 group text-left cursor-pointer"
          >
            <span className="font-serif tracking-[0.28em] text-xl font-bold uppercase text-gold-300 hover:text-white transition duration-300">
              SEACLUB
            </span>
          </button>
        </div>

        {/* Center Navigation */}
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-10 text-xs sm:text-sm tracking-[0.18em] font-serif uppercase">
          {navItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`transition duration-200 py-1 cursor-pointer relative ${
                  isActive
                    ? 'text-gold-300 font-bold'
                    : 'text-slate-300 hover:text-gold-300'
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

        {/* Right CTA */}
        <div className="flex items-center space-x-4 sm:space-x-6">
          {/* Book a Table — */}
          <button
            onClick={onOpenBookTable}
            className="flex items-center space-x-2 sm:space-x-3 text-gold-300 hover:text-white font-serif text-xs sm:text-sm tracking-[0.16em] uppercase transition duration-300 cursor-pointer group"
          >
            <span>Book a table</span>
            <span className="w-4 sm:w-6 h-0.5 bg-gold-400 group-hover:w-10 transition-all duration-300" />
          </button>

          {/* Ticket / Cart Button */}
          <button
            onClick={onOpenCart}
            className="relative p-2 text-slate-200 hover:text-gold-300 transition duration-200 cursor-pointer flex items-center space-x-1.5"
            title="View Order Ticket"
          >
            <ShoppingBag className="w-4 h-4 text-gold-400" />
            <span className="hidden lg:inline font-serif text-xs tracking-wider uppercase text-slate-200">Ticket</span>
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
            className="p-1.5 text-slate-400 hover:text-gold-300 transition"
            title="Admin Management Portal"
          >
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-300 hover:text-white cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#071421] border-b border-slate-800 px-6 py-6 space-y-3 animate-in slide-in-from-top duration-200 text-xs tracking-widest uppercase font-serif">
          {navItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`block w-full text-left py-2 transition ${
                  isActive ? 'text-gold-300 font-bold' : 'text-slate-200 hover:text-gold-300'
                }`}
              >
                {item.label}
              </button>
            );
          })}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenBookTable();
            }}
            className="w-full text-left py-2 text-gold-300 border-t border-slate-800 pt-3"
          >
            Book a table →
          </button>
        </div>
      )}
    </header>
  );
}
