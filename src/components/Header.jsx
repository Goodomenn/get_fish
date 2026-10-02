import React, { useState } from 'react';
import { ShoppingBag, Menu, X, ExternalLink, Calendar } from 'lucide-react';

export default function Header({
  cartCount,
  onOpenCart,
  onOpenBookTable,
  isVisible = false
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
          <a href="#" className="flex items-center space-x-3 group">
            <span className="font-serif tracking-[0.28em] text-xl font-bold uppercase text-slate-100 group-hover:text-gold-300 transition duration-300">
              SEACLUB
            </span>
          </a>
        </div>

        {/* Center Navigation */}
        <nav className="hidden md:flex items-center space-x-10 text-xs tracking-[0.15em] font-serif uppercase text-slate-300">
          <a href="#menu" className="hover:text-gold-300 transition duration-200">
            Menu
          </a>
          <a href="#about" className="hover:text-gold-300 transition duration-200">
            About
          </a>
          <a href="#events" className="hover:text-gold-300 transition duration-200">
            Events
          </a>
          <a href="#contacts" className="hover:text-gold-300 transition duration-200">
            Contacts
          </a>
        </nav>

        {/* Right CTA */}
        <div className="flex items-center space-x-4">
          <button
            onClick={onOpenBookTable}
            className="font-serif text-xs tracking-[0.15em] uppercase text-gold-200 hover:text-white transition duration-300 py-1 border-b border-gold-500/70"
          >
            Book a table
          </button>

          <button
            onClick={onOpenCart}
            className="relative p-2 rounded-full text-slate-300 hover:text-gold-300 hover:bg-slate-800 transition"
            title="View Order Ticket"
          >
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-gold-500 text-slate-950 font-bold text-[10px] flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-300 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#071421] border-b border-slate-800 px-6 py-6 space-y-4 animate-in slide-in-from-top duration-200 text-xs tracking-widest uppercase font-serif">
          <a
            href="#menu"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-200 hover:text-gold-300"
          >
            Menu
          </a>
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-200 hover:text-gold-300"
          >
            About
          </a>
          <a
            href="#events"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-200 hover:text-gold-300"
          >
            Events
          </a>
          <a
            href="#contacts"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-200 hover:text-gold-300"
          >
            Contacts
          </a>
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
