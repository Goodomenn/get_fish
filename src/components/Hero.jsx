import React from 'react';
import { ChevronRight } from 'lucide-react';

export default function Hero({
  compact = false,
  pageBadge = '',
  pageTitle = '',
  pageSubtitle = '',
  onOpenMenu,
  onOpenDish,
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

  // =========================================================================
  // COMPACT VARIANT (30% HEIGHT): Applied to all subpages
  // (Menu, Wine Cellar, About, Events, Contacts)
  // Navigation is handled cleanly by the stuck/fixed Header component above.
  // =========================================================================
  if (compact) {
    return (
      <section className="relative w-full bg-[#050e17] overflow-hidden select-none border-b border-slate-800">
        {/* Compact Hero Container: exactly ~30% scale (~220px to 300px height) */}
        <div className="relative w-full max-w-[1536px] mx-auto min-h-[220px] sm:h-[260px] md:h-[285px] lg:h-[300px] bg-[#071421] shadow-2xl overflow-hidden">
          {/* Pristine Background Canvas cropped to luxury dark-marble & seafood top */}
          <img
            src="/hero-bg.jpg"
            alt="SEACLUB Fish Restaurant & Fine Wine"
            className="w-full h-full object-cover object-top block"
            style={{ imageRendering: '-webkit-optimize-contrast' }}
          />

          {/* Luxury ambient dark gradient overlay for optimal typography readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#050e17]/85 via-[#050e17]/60 to-[#050e17]/95 pointer-events-none" />

          {/* Subpage Breadcrumb & Header Typography Overlay (positioned cleanly below the stuck 64px-80px header) */}
          <div className="absolute inset-x-0 bottom-4 sm:bottom-6 px-4 sm:px-10 z-20">
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
  // Maintains exact 1024:686 aspect ratio with all dishes & interactive tags.
  // Navigation is managed by the stuck Header at top.
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
        {/* HERO LEFT TEXT BLOCK: Real HTML / CSS Typography                          */}
        {/* Positioned safely below the fixed header across all resolutions          */}
        {/* ========================================================================= */}
        <div className="absolute left-[5.5%] top-[70px] sm:top-[17%] md:top-[19%] max-w-[44%] sm:max-w-[42%] z-20 flex flex-col items-start select-text text-left">
          {/* seafood + wine */}
          <span className="font-serif italic text-gold-300 text-xs sm:text-2xl lg:text-3xl tracking-wide mb-0.5 sm:mb-2 block drop-shadow-md">
            seafood + wine
          </span>

          {/* FISH RESTAURANT */}
          <h1 className="font-serif text-xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white uppercase leading-[1.02] mb-1 sm:mb-3 drop-shadow-lg">
            FISH<br />RESTAURANT
          </h1>

          {/* Delicious food and fine wine */}
          <p className="font-sans text-slate-200 font-light text-[9px] sm:text-base lg:text-lg tracking-wide mb-2 sm:mb-7 drop-shadow">
            Delicious food and fine wine
          </p>

          {/* Menu Button (Outlined Gold Box) */}
          <button
            onClick={() => handleNav('menu')}
            className="px-3 sm:px-9 py-1 sm:py-3 border border-gold-400 hover:border-gold-300 text-gold-300 hover:text-white font-serif text-[8px] sm:text-xs tracking-[0.2em] sm:tracking-[0.25em] uppercase transition duration-300 bg-[#071421]/50 hover:bg-gold-500/20 shadow-xl backdrop-blur-sm cursor-pointer active:scale-95"
          >
            Menu
          </button>
        </div>

        {/* ========================================================================= */}
        {/* DRESSED OYSTERS TAG: Real HTML Typography                                 */}
        {/* ========================================================================= */}
        <div
          onClick={() => (onOpenDish ? onOpenDish('dish-1') : handleNav('menu'))}
          className="absolute left-[47%] top-[66%] z-20 cursor-pointer group text-left select-text"
          title="Explore Dressed Oysters (25 $)"
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
          onClick={() => (onOpenDish ? onOpenDish('dish-1') : handleNav('menu'))}
          className="absolute left-[50%] top-[20%] w-[38%] h-[53%] rounded-full hover:ring-2 hover:ring-gold-400/30 transition cursor-pointer z-10"
          title="Dressed Fine de Claire Oysters (Click to View Dish)"
        />

        {/* ========================================================================= */}
        {/* TIGNANELLO TAG: Real HTML Typography                                      */}
        {/* ========================================================================= */}
        <div
          onClick={() => handleNav('wine')}
          className="absolute left-[77%] top-[78%] z-20 cursor-pointer group text-left select-text"
          title="Explore Sommelier Wine Cellar (300 $)"
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
          onClick={() => handleNav('wine')}
          className="absolute right-[1.5%] top-[34%] w-[18%] h-[58%] rounded-2xl hover:ring-2 hover:ring-gold-400/30 transition cursor-pointer z-10"
          title="Tignanello 2019 (Click to View Wine Cellar)"
        />

        {/* ========================================================================= */}
        {/* SQUID INK PASTA TAG (Bottom Left)                                         */}
        {/* ========================================================================= */}
        <div
          onClick={() => (onOpenDish ? onOpenDish('dish-7') : handleNav('menu'))}
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
