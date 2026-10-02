import React, { useState } from 'react';
import { ShoppingBag, Menu, X, ExternalLink, CalendarDays, UtensilsCrossed } from 'lucide-react';

export default function Header({
  cartCount,
  onOpenCart,
  onOpenBookTable
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#071421]/90 backdrop-blur-md border-b border-slate-800/60 transition-all">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 h-24 flex items-center justify-between">
        {/* Brand Logo - EXACTLY AS IMAGE: "SEACLUB" */}
        <div className="flex items-center space-x-6">
          <a href="#" className="flex items-center space-x-3 group">
            <span className="font-serif tracking-[0.28em] text-xl sm:text-2xl font-bold uppercase text-slate-100 group-hover:text-gold-300 transition duration-300">
              SEACLUB
            </span>
          </a>
        </div>

        {/* Center Navigation - EXACTLY AS IMAGE: "Menu", "About", "Events", "Contacts" */}
        <nav className="hidden md:flex items-center space-x-10 text-sm tracking-[0.12em] font-medium text-slate-300">
          <a
            href="#menu"
            className="hover:text-gold-300 transition duration-200 hover:-translate-y-0.5"
          >
            Menu
          </a>
          <a
            href="#about"
            className="hover:text-gold-300 transition duration-200 hover:-translate-y-0.5"
          >
            About
          </a>
          <a
            href="#events"
            className="hover:text-gold-300 transition duration-200 hover:-translate-y-0.5"
          >
            Events
          </a>
          <a
            href="#contacts"
            className="hover:text-gold-300 transition duration-200 hover:-translate-y-0.5"
          >
            Contacts
          </a>
        </nav>

        {/* Right CTA - EXACTLY AS IMAGE: "Book a table" */}
        <div className="flex items-center space-x-5">
          {/* Book a Table Link / Action Button */}
          <button
            onClick={onOpenBookTable}
            className="relative font-serif text-sm tracking-[0.15em] text-slate-200 hover:text-gold-200 transition duration-300 py-1 border-b border-gold-500/70 hover:border-gold-300"
          >
            Book a table
          </button>

          {/* Cart Icon / Order to Table */}
          <button
            onClick={onOpenCart}
            className="relative p-2.5 rounded-full text-slate-300 hover:text-gold-300 hover:bg-slate-800/60 transition"
            title="View Order"
            aria-label="Open Cart"
          >
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-gold-500 text-slate-950 font-bold text-[10px] flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>

          {/* Admin link */}
          <a
            href="http://localhost:5174"
            target="_blank"
            rel="noreferrer"
            className="hidden lg:inline-flex items-center space-x-1 text-[11px] uppercase tracking-widest text-slate-400 hover:text-gold-300 border border-slate-700/80 px-2.5 py-1 rounded transition"
            title="Open Restaurant Back-Office Admin"
          >
            <span>Admin</span>
            <ExternalLink className="w-3 h-3" />
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-300 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#071421] border-b border-slate-800 px-6 py-6 space-y-4 animate-in slide-in-from-top duration-200 text-sm tracking-widest uppercase">
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
            className="w-full text-left py-2 text-gold-300 font-serif normal-case text-base border-t border-slate-800 pt-3"
          >
            Book a table →
          </button>
        </div>
      )}
    </header>
  );
}
