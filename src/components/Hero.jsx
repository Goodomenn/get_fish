import React from 'react';
import { ShoppingBag, ExternalLink } from 'lucide-react';

export default function Hero({
  onOpenMenu,
  onOpenDish,
  onOpenBookTable,
  onOpenCart,
  cartCount,
  currentPage = 'home',
  onNavigate,
  pageBadge
}) {
  const handleNav = (target) => {
    if (onNavigate) {
      onNavigate(target);
    } else if (target === 'menu' && onOpenMenu) {
      onOpenMenu();
    }
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'menu', label: 'Menu' },
    { id: 'wine', label: 'Wine Cellar' },
    { id: 'about', label: 'About' },
    { id: 'events', label: 'Events' },
    { id: 'contacts', label: 'Contacts' }
  ];

  return (
    <section className="relative w-full bg-[#050e17] overflow-hidden select-none border-b border-slate-800/80">
      {/* Container: 30% of current full size (compact, cinematic height ~210px to ~285px) */}
      <div className="relative w-full max-w-[1536px] mx-auto h-[210px] sm:h-[250px] md:h-[280px] lg:h-[300px] bg-[#071421] shadow-2xl overflow-hidden">
        {/* High-Resolution User-Provided Pristine Clean Background Canvas */}
        <img
          src="/hero-bg.jpg"
          alt="SEACLUB Fish Restaurant & Fine Wine"
          className="w-full h-full object-cover object-center block"
          style={{ imageRendering: '-webkit-optimize-contrast' }}
        />

        {/* Subtle dark gradient overlay to ensure perfect text contrast over dark marble */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050e17]/90 via-[#050e17]/40 to-transparent pointer-events-none" />

        {/* ========================================================================= */}
        {/* 1. ULTRA-CRISP TRANSPARENT TOP NAVIGATION BAR                             */}
        {/* ========================================================================= */}
        <div className="absolute top-0 inset-x-0 h-14 sm:h-16 px-4 sm:px-8 lg:px-10 flex items-center justify-between z-30 pointer-events-auto bg-transparent">
          {/* Brand Logo - "SEACLUB" */}
          <button
            onClick={() => {
              handleNav('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="font-serif tracking-[0.25em] text-base sm:text-xl font-bold uppercase text-gold-300 hover:text-white transition duration-300 cursor-pointer drop-shadow-md"
          >
            SEACLUB
          </button>

          {/* Center Navigation Links: Home, Menu, Wine Cellar, About, Events, Contacts */}
          <nav className="hidden md:flex items-center space-x-5 lg:space-x-8 text-xs sm:text-sm tracking-[0.16em] font-serif uppercase">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNav(item.id)}
                  className={`transition duration-200 py-1 cursor-pointer relative drop-shadow-sm ${
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

          {/* Right Action Group: Book a Table —, Ticket, and Admin Link */}
          <div className="flex items-center space-x-3 sm:space-x-5">
            {/* Book a Table — */}
            <button
              onClick={onOpenBookTable}
              className="flex items-center space-x-1.5 sm:space-x-2 text-gold-300 hover:text-white font-serif text-xs tracking-[0.14em] uppercase transition duration-300 cursor-pointer group drop-shadow-md"
            >
              <span>Book a Table</span>
              <span className="w-4 sm:w-6 h-0.5 bg-gold-400 group-hover:w-10 transition-all duration-300" />
            </button>

            {/* Ticket / Cart Button */}
            <button
              onClick={onOpenCart}
              className="relative p-1.5 text-slate-200 hover:text-gold-300 transition duration-200 cursor-pointer flex items-center space-x-1"
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
              className="p-1 text-slate-400 hover:text-gold-300 transition"
              title="Admin Management Portal"
            >
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 2. HERO LEFT TEXT BLOCK: Scaled to 30% proportion                         */}
        {/* ========================================================================= */}
        <div className="absolute left-[4%] sm:left-[5%] bottom-3 sm:bottom-5 max-w-[48%] z-20 flex flex-col items-start select-text text-left">
          {/* seafood + wine / Page Badge */}
          <div className="flex items-center space-x-2 text-gold-300 text-[10px] sm:text-xs font-serif uppercase tracking-widest mb-0.5">
            <span className="italic">seafood + wine</span>
            {pageBadge && (
              <>
                <span className="text-slate-500">•</span>
                <span className="text-gold-400 font-bold tracking-wider">{pageBadge}</span>
              </>
            )}
          </div>

          {/* FISH RESTAURANT */}
          <h1 className="font-serif text-xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white uppercase leading-none drop-shadow-lg">
            FISH RESTAURANT
          </h1>

          {/* Delicious food and fine wine */}
          <p className="font-sans text-slate-300 font-light text-[10px] sm:text-xs tracking-wide mt-1 drop-shadow hidden xs:block">
            Delicious food and fine wine
          </p>

          {/* Action / Breadcrumb link */}
          {currentPage === 'home' ? (
            <button
              onClick={() => handleNav('menu')}
              className="mt-2 px-3 sm:px-5 py-1 border border-gold-400/90 hover:border-gold-300 text-gold-300 hover:text-white font-serif text-[9px] sm:text-[10px] tracking-[0.2em] uppercase transition duration-300 bg-[#071421]/60 hover:bg-gold-500/20 rounded shadow cursor-pointer active:scale-95"
            >
              Explore Menu
            </button>
          ) : (
            <div className="mt-1.5 flex items-center space-x-1.5 text-[10px] sm:text-xs font-serif text-slate-300">
              <button
                onClick={() => handleNav('home')}
                className="hover:text-gold-300 transition underline underline-offset-2"
              >
                Home
              </button>
              <span className="text-slate-500">/</span>
              <span className="text-gold-300 uppercase tracking-wider">{pageBadge || currentPage}</span>
            </div>
          )}
        </div>

        {/* ========================================================================= */}
        {/* 3. DRESSED OYSTERS TAG: Compact Tag                                       */}
        {/* ========================================================================= */}
        <div
          onClick={() => {
            if (currentPage === 'home') scrollToSection('dressed-oysters');
            else onOpenDish('dish-1');
          }}
          className="absolute left-[54%] sm:left-[52%] bottom-3 sm:bottom-4 z-20 cursor-pointer group text-left select-text"
          title="Explore Dressed Oysters Section (25 $)"
        >
          <div className="font-serif text-white text-[10px] sm:text-xs font-normal tracking-wide group-hover:text-gold-300 transition drop-shadow">
            Dressed Oysters
          </div>
          <div className="w-6 sm:w-10 h-0.5 bg-gold-400 my-0.5 group-hover:w-full transition-all duration-300" />
          <div className="font-serif text-slate-200 text-[9px] sm:text-xs font-light group-hover:text-gold-200 transition drop-shadow">
            25 $
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 4. TIGNANELLO TAG: Compact Tag                                            */}
        {/* ========================================================================= */}
        <div
          onClick={() => {
            if (currentPage === 'home') scrollToSection('tignanello');
            else onOpenDish('dish-10');
          }}
          className="absolute right-[4%] sm:right-[5%] bottom-3 sm:bottom-4 z-20 cursor-pointer group text-left select-text"
          title="Explore Tignanello Wine Section (300 $)"
        >
          <div className="font-serif text-white text-[10px] sm:text-xs font-normal tracking-wide group-hover:text-gold-300 transition drop-shadow">
            Tignanello
          </div>
          <div className="w-6 sm:w-10 h-0.5 bg-gold-400 my-0.5 group-hover:w-full transition-all duration-300" />
          <div className="font-serif text-slate-200 text-[9px] sm:text-xs font-light group-hover:text-gold-200 transition drop-shadow">
            300 $
          </div>
        </div>
      </div>
    </section>
  );
}
