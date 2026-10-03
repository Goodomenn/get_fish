import React from 'react';
import { ShoppingBag, ExternalLink, ChevronRight } from 'lucide-react';

export default function Hero({
  compact = false,
  pageBadge = '',
  pageTitle = '',
  pageSubtitle = '',
  onOpenMenu,
  onOpenDish,
  onOpenBookTable,
  onOpenCart,
  cartCount = 0,
  currentPage = 'home',
  onNavigate
}) {
  const handleNav = (target) => {
    if (onNavigate) {
      onNavigate(target);
    } else if (target === 'menu' && onOpenMenu) {
      onOpenMenu();
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
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

  // =========================================================================
  // COMPACT VARIANT (30% HEIGHT): Applied to all subpages
  // (Menu, Wine Cellar, About, Events, Contacts)
  // =========================================================================
  if (compact) {
    return (
      <section className="relative w-full bg-[#050e17] overflow-hidden select-none border-b border-slate-800">
        {/* Compact Hero Container: exactly ~30% scale (~220px to 300px height) */}
        <div className="relative w-full max-w-[1536px] mx-auto h-[220px] sm:h-[260px] md:h-[285px] lg:h-[300px] bg-[#071421] shadow-2xl overflow-hidden">
          {/* Pristine Background Canvas cropped to luxury dark-marble & seafood top */}
          <img
            src="/hero-bg.jpg"
            alt="SEACLUB Fish Restaurant & Fine Wine"
            className="w-full h-full object-cover object-top block"
            style={{ imageRendering: '-webkit-optimize-contrast' }}
          />

          {/* Luxury ambient dark gradient overlay for optimal typography readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#050e17]/85 via-[#050e17]/60 to-[#050e17]/95 pointer-events-none" />

          {/* Transparent Top Navigation Bar */}
          <div className="absolute top-0 inset-x-0 h-16 sm:h-20 px-6 sm:px-10 flex items-center justify-between z-30 pointer-events-auto bg-transparent">
            {/* Brand Logo - "SEACLUB" */}
            <button
              onClick={() => handleNav('home')}
              className="font-serif tracking-[0.28em] text-lg sm:text-xl lg:text-2xl font-bold uppercase text-gold-300 hover:text-white transition duration-300 cursor-pointer drop-shadow-md"
            >
              SEACLUB
            </button>

            {/* Center Navigation Links */}
            <nav className="hidden md:flex items-center space-x-6 lg:space-x-10 text-xs sm:text-sm tracking-[0.18em] font-serif uppercase">
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

            {/* Right Action Group */}
            <div className="flex items-center space-x-4 sm:space-x-6">
              <button
                onClick={onOpenBookTable}
                className="flex items-center space-x-2 sm:space-x-3 text-gold-300 hover:text-white font-serif text-xs sm:text-sm tracking-[0.16em] uppercase transition duration-300 cursor-pointer group drop-shadow-md"
              >
                <span>Book a Table</span>
                <span className="w-4 sm:w-6 h-0.5 bg-gold-400 group-hover:w-10 transition-all duration-300" />
              </button>

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

              <a
                href="http://localhost:5174"
                target="_blank"
                rel="noreferrer"
                className="p-1.5 text-slate-400 hover:text-gold-300 transition cursor-pointer"
                title="Admin Management Portal"
              >
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Subpage Breadcrumb & Header Typography Overlay */}
          <div className="absolute inset-x-0 bottom-4 sm:bottom-6 px-6 sm:px-10 z-20">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-end justify-between gap-3">
              <div className="space-y-1">
                {/* Breadcrumbs */}
                <div className="flex items-center space-x-2 text-[11px] font-serif text-slate-400 tracking-wider">
                  <button
                    onClick={() => handleNav('home')}
                    className="hover:text-gold-300 transition flex items-center space-x-1 cursor-pointer"
                  >
                    <span>Home</span>
                  </button>
                  <ChevronRight className="w-3 h-3 text-slate-600" />
                  <span className="text-gold-400 uppercase font-semibold">{pageBadge || currentPage}</span>
                </div>

                {/* Subpage Title */}
                <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white uppercase tracking-tight drop-shadow-lg">
                  {pageTitle}
                </h1>

                {/* Subtitle */}
                {pageSubtitle && (
                  <p className="text-xs sm:text-sm text-slate-300 font-light max-w-2xl drop-shadow">
                    {pageSubtitle}
                  </p>
                )}
              </div>

              {/* Back to Home Button */}
              <button
                onClick={() => handleNav('home')}
                className="hidden sm:inline-flex items-center space-x-1.5 px-4 py-2 border border-slate-700/80 hover:border-gold-400/80 bg-[#071421]/60 hover:bg-gold-500/10 text-slate-300 hover:text-white rounded-lg text-xs font-serif uppercase tracking-wider transition backdrop-blur-sm cursor-pointer"
              >
                <span>Back to Home</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // =========================================================================
  // FULL-SIZE VARIANT (100% SCALE): Exclusively for the Home Page
  // Maintains exact 1024:686 aspect ratio with all dishes & interactive tags
  // =========================================================================
  return (
    <section className="relative w-full bg-[#050e17] overflow-hidden select-none">
      {/* Container maintaining the exact 1024:686 aspect ratio of the clean background image */}
      <div className="relative w-full max-w-[1536px] mx-auto aspect-[1024/686] bg-[#071421] shadow-2xl">
        {/* High-Resolution User-Provided Pristine Clean Background Canvas */}
        <img
          src="/hero-bg.jpg"
          alt="SEACLUB Fish Restaurant & Fine Wine"
          className="w-full h-full object-contain object-center block"
          style={{ imageRendering: '-webkit-optimize-contrast' }}
        />

        {/* ========================================================================= */}
        {/* 1. ULTRA-CRISP TRANSPARENT TOP NAVIGATION BAR                             */}
        {/* Holds Home, Menu, Wine Cellar, About, Events, Contacts                    */}
        {/* ========================================================================= */}
        <div className="absolute top-0 inset-x-0 h-[10%] px-[3%] sm:px-[4%] flex items-center justify-between z-30 pointer-events-auto bg-transparent">
          {/* Brand Logo - "SEACLUB" in crisp luxury gold serif */}
          <button
            onClick={() => handleNav('home')}
            className="font-serif tracking-[0.28em] text-sm sm:text-xl lg:text-2xl font-bold uppercase text-gold-300 hover:text-white transition duration-300 cursor-pointer drop-shadow-md"
          >
            SEACLUB
          </button>

          {/* Center Navigation Links: exact items matching Image 2 */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-10 text-xs sm:text-sm tracking-[0.18em] font-serif uppercase">
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

          {/* Right Action Group: Single clean set of actions */}
          <div className="flex items-center space-x-4 sm:space-x-6">
            {/* Book a Table — */}
            <button
              onClick={onOpenBookTable}
              className="flex items-center space-x-2 sm:space-x-3 text-gold-300 hover:text-white font-serif text-xs sm:text-sm tracking-[0.16em] uppercase transition duration-300 cursor-pointer group drop-shadow-md"
            >
              <span>Book a Table</span>
              <span className="w-5 sm:w-8 h-0.5 bg-gold-400 group-hover:w-12 transition-all duration-300" />
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
              className="p-1.5 text-slate-400 hover:text-gold-300 transition cursor-pointer"
              title="Admin Management Portal"
            >
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 2. HERO LEFT TEXT BLOCK: Real HTML / CSS Typography                       */}
        {/* ========================================================================= */}
        <div className="absolute left-[5.5%] top-[19%] max-w-[42%] z-20 flex flex-col items-start select-text text-left">
          {/* seafood + wine */}
          <span className="font-serif italic text-gold-300 text-sm sm:text-2xl lg:text-3xl tracking-wide mb-1 sm:mb-2 block drop-shadow-md">
            seafood + wine
          </span>

          {/* FISH RESTAURANT */}
          <h1 className="font-serif text-2xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white uppercase leading-[1.02] mb-1.5 sm:mb-3 drop-shadow-lg">
            FISH<br />RESTAURANT
          </h1>

          {/* Delicious food and fine wine */}
          <p className="font-sans text-slate-200 font-light text-[10px] sm:text-base lg:text-lg tracking-wide mb-3 sm:mb-7 drop-shadow">
            Delicious food and fine wine
          </p>

          {/* Menu Button (Outlined Gold Box) */}
          <button
            onClick={() => handleNav('menu')}
            className="px-4 sm:px-9 py-1.5 sm:py-3 border border-gold-400 hover:border-gold-300 text-gold-300 hover:text-white font-serif text-[9px] sm:text-xs tracking-[0.25em] uppercase transition duration-300 bg-[#071421]/50 hover:bg-gold-500/20 shadow-xl backdrop-blur-sm cursor-pointer active:scale-95"
          >
            Menu
          </button>
        </div>

        {/* ========================================================================= */}
        {/* 3. DRESSED OYSTERS TAG: Real HTML Typography                              */}
        {/* ========================================================================= */}
        <div
          onClick={() => scrollToSection('dressed-oysters')}
          className="absolute left-[47%] top-[66%] z-20 cursor-pointer group text-left select-text"
          title="Explore Dressed Oysters Section (25 $)"
        >
          <div className="font-serif text-white text-[11px] sm:text-base lg:text-lg font-normal tracking-wide group-hover:text-gold-300 transition drop-shadow">
            Dressed Oysters
          </div>
          <div className="w-8 sm:w-14 h-[1.5px] sm:h-0.5 bg-gold-400 my-0.5 sm:my-1 group-hover:w-full transition-all duration-300" />
          <div className="font-serif text-slate-200 text-[10px] sm:text-base lg:text-lg font-light group-hover:text-gold-200 transition drop-shadow">
            25 $
          </div>
        </div>

        {/* Oyster Platter Interactive Click Area */}
        <div
          onClick={() => scrollToSection('dressed-oysters')}
          className="absolute left-[50%] top-[20%] w-[38%] h-[53%] rounded-full hover:ring-2 hover:ring-gold-400/30 transition cursor-pointer z-10"
          title="Dressed Fine de Claire Oysters (Click to View Section)"
        />

        {/* ========================================================================= */}
        {/* 4. TIGNANELLO TAG: Real HTML Typography                                   */}
        {/* ========================================================================= */}
        <div
          onClick={() => scrollToSection('tignanello')}
          className="absolute left-[77%] top-[78%] z-20 cursor-pointer group text-left select-text"
          title="Explore Tignanello Wine Section (300 $)"
        >
          <div className="font-serif text-white text-[11px] sm:text-base lg:text-lg font-normal tracking-wide group-hover:text-gold-300 transition drop-shadow">
            Tignanello
          </div>
          <div className="w-8 sm:w-14 h-[1.5px] sm:h-0.5 bg-gold-400 my-0.5 sm:my-1 group-hover:w-full transition-all duration-300" />
          <div className="font-serif text-slate-200 text-[10px] sm:text-base lg:text-lg font-light group-hover:text-gold-200 transition drop-shadow">
            300 $
          </div>
        </div>

        {/* Tignanello Bottle Interactive Click Area */}
        <div
          onClick={() => scrollToSection('tignanello')}
          className="absolute right-[1.5%] top-[34%] w-[18%] h-[58%] rounded-2xl hover:ring-2 hover:ring-gold-400/30 transition cursor-pointer z-10"
          title="Tignanello 2019 (Click to View Section)"
        />

        {/* ========================================================================= */}
        {/* 5. SQUID INK PASTA TAG (Bottom Left)                                      */}
        {/* ========================================================================= */}
        <div
          onClick={() => onOpenDish('dish-7')}
          className="absolute left-[2%] bottom-[3%] z-20 cursor-pointer group text-left select-text"
          title="View Squid Ink Tagliolini (36 $)"
        >
          <div className="font-serif text-white text-[10px] sm:text-sm font-normal tracking-wide group-hover:text-gold-300 transition drop-shadow">
            Squid Ink Tagliolini
          </div>
          <div className="w-6 sm:w-10 h-[1.5px] bg-gold-400 my-0.5 group-hover:w-full transition-all duration-300" />
          <div className="font-serif text-slate-200 text-[9px] sm:text-xs font-light group-hover:text-gold-200 transition">
            36 $
          </div>
        </div>
      </div>
    </section>
  );
}
