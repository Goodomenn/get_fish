import React from 'react';
import { ShoppingBag, Calendar, ExternalLink } from 'lucide-react';

export default function Hero({
  onOpenMenu,
  onOpenDish,
  onOpenBookTable,
  onOpenCart,
  cartCount,
  onNavigate
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

  return (
    <section className="relative w-full bg-[#050e17] overflow-hidden select-none">
      {/* Container maintaining the exact 1024:686 aspect ratio of the user's background image */}
      <div className="relative w-full max-w-[1536px] mx-auto aspect-[1024/686] bg-[#071421] shadow-2xl">
        {/* High-Resolution User-Provided Clean Background Canvas */}
        <img
          src="/hero-bg.jpg"
          alt="SEACLUB Fish Restaurant & Fine Wine"
          className="w-full h-full object-contain object-center block"
          style={{ imageRendering: '-webkit-optimize-contrast' }}
        />

        {/* ========================================================================= */}
        {/* TOP NAVIGATION HOTSPOTS & HOVER OVERLAY                                  */}
        {/* ========================================================================= */}

        {/* 1. SEACLUB Logo (Top Left) */}
        <button
          onClick={() => {
            handleNav('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="absolute left-[2.5%] top-[2.8%] w-[13.5%] h-[6.5%] rounded-lg hover:bg-gold-500/10 transition cursor-pointer z-30"
          title="SEACLUB Home"
          aria-label="SEACLUB Home"
        />

        {/* 2. Top Nav: Menu */}
        <button
          onClick={() => handleNav('menu')}
          className="absolute left-[30.5%] top-[2.8%] w-[6.5%] h-[6.5%] rounded-lg hover:bg-gold-500/15 transition cursor-pointer z-30"
          title="Explore Restaurant Menu"
          aria-label="Menu"
        />

        {/* 3. Top Nav: About */}
        <button
          onClick={() => handleNav('about')}
          className="absolute left-[38.5%] top-[2.8%] w-[6%] h-[6.5%] rounded-lg hover:bg-gold-500/15 transition cursor-pointer z-30"
          title="About SEACLUB Fish Restaurant"
          aria-label="About"
        />

        {/* 4. Top Nav: Events */}
        <button
          onClick={() => handleNav('events')}
          className="absolute left-[45.5%] top-[2.8%] w-[6.5%] h-[6.5%] rounded-lg hover:bg-gold-500/15 transition cursor-pointer z-30"
          title="Gastronomic Events & Masterclasses"
          aria-label="Events"
        />

        {/* 5. Top Nav: Contacts */}
        <button
          onClick={() => handleNav('contacts')}
          className="absolute left-[53.5%] top-[2.8%] w-[7.8%] h-[6.5%] rounded-lg hover:bg-gold-500/15 transition cursor-pointer z-30"
          title="Location & Valet Contacts"
          aria-label="Contacts"
        />

        {/* 6. Top Nav: Book a Table (Top Right) */}
        <button
          onClick={onOpenBookTable}
          className="absolute right-[2.5%] top-[2.5%] w-[15.5%] h-[7%] rounded-lg hover:bg-gold-500/20 transition cursor-pointer z-30 group"
          title="Book a Table at SEACLUB"
          aria-label="Book a Table"
        >
          <span className="sr-only">Book a Table</span>
          <span className="opacity-0 group-hover:opacity-100 absolute -bottom-5 right-0 text-[10px] text-gold-300 font-serif tracking-widest uppercase transition whitespace-nowrap bg-black/85 px-2 py-0.5 rounded shadow">
            Click to Reserve Table
          </span>
        </button>

        {/* ========================================================================= */}
        {/* REAL HTML / CSS TYPOGRAPHY OVERLAY (NOT EMBEDDED IN IMAGE)                */}
        {/* ========================================================================= */}

        {/* HERO LEFT TEXT BLOCK: Real HTML matching media_1790931516274.png */}
        <div className="absolute left-[5.5%] top-[20%] max-w-[42%] z-20 flex flex-col items-start select-text text-left">
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

        {/* DRESSED OYSTERS TAG: Real HTML matching media_1790931549564.png */}
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

        {/* TIGNANELLO TAG: Real HTML matching media_1790931563676.png */}
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

        {/* SQUID INK PASTA TAG (Bottom Left) */}
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

      {/* Floating Action Controls on Top Right for quick cart & reservation */}
      <div className="fixed top-6 right-6 z-50 flex items-center space-x-3">
        {/* Table Booking Quick Pill */}
        <button
          onClick={onOpenBookTable}
          className="hidden sm:inline-flex items-center space-x-2 bg-[#091b2c]/90 hover:bg-[#091b2c] border border-gold-500/50 hover:border-gold-300 text-gold-200 px-4 py-2 rounded-full text-xs font-serif tracking-widest uppercase transition shadow-xl backdrop-blur-md active:scale-95"
        >
          <Calendar className="w-3.5 h-3.5 text-gold-400" />
          <span>Book a Table</span>
        </button>

        {/* Cart Quick Pill */}
        <button
          onClick={onOpenCart}
          className="relative inline-flex items-center space-x-2 bg-gradient-to-r from-gold-600 to-gold-500 hover:from-gold-500 hover:to-gold-400 text-slate-950 px-4 py-2 rounded-full text-xs font-serif font-bold tracking-widest uppercase transition shadow-xl active:scale-95"
          title="View Order Ticket"
        >
          <ShoppingBag className="w-4 h-4" />
          <span>Ticket</span>
          {cartCount > 0 && (
            <span className="w-4 h-4 rounded-full bg-slate-950 text-gold-300 text-[10px] font-bold flex items-center justify-center -mr-1">
              {cartCount}
            </span>
          )}
        </button>

        {/* Admin Link */}
        <a
          href="http://localhost:5174"
          target="_blank"
          rel="noreferrer"
          className="p-2 rounded-full bg-[#071421]/90 border border-slate-700 hover:border-gold-400 text-slate-300 hover:text-gold-300 transition shadow-lg backdrop-blur-md"
          title="Open Admin Management Portal"
        >
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </section>
  );
}
