import React from 'react';
import { ArrowDown, Plus, Sparkles, Utensils, Wine } from 'lucide-react';

export default function Hero({ onOpenMenu, onOpenDish, onOpenBookTable, onQuickAdd }) {
  return (
    <section className="relative overflow-hidden bg-[#071421] text-slate-100 min-h-[calc(100vh-6rem)] flex items-center">
      {/* High-Resolution Hero Canvas for Desktop / Large Displays */}
      <div className="absolute inset-0 hidden md:block">
        <img
          src="/hero-art.png"
          alt="SEACLUB Fish Restaurant"
          className="w-full h-full object-cover object-center filter brightness-95"
        />
        {/* Soft edge vignette & gradient blending */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#071421]/90 via-transparent to-[#071421]/80"></div>
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#071421] to-transparent"></div>
      </div>

      {/* Interactive Desktop Hotspots & Layered Content */}
      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 py-16 sm:py-24 w-full z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Left Column: Typography & Action */}
          <div className="md:col-span-6 space-y-6 md:space-y-8">
            {/* seafood + wine */}
            <div className="inline-block">
              <span className="font-serif italic text-2xl sm:text-3xl text-gold-300 tracking-wider">
                seafood + wine
              </span>
            </div>

            {/* Main Title: FISH RESTAURANT */}
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl tracking-tight text-white font-normal uppercase leading-[1.05]">
              FISH<br />
              <span className="tracking-wide">RESTAURANT</span>
            </h1>

            {/* Tagline */}
            <p className="text-slate-300 font-light text-base sm:text-lg tracking-wide max-w-md">
              Delicious food and fine wine
            </p>

            {/* Menu Button - Exactly styled as provided */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#menu"
                onClick={onOpenMenu}
                className="inline-flex items-center justify-center px-10 py-3.5 border border-gold-400/80 hover:border-gold-300 text-gold-200 hover:text-white font-serif text-base tracking-[0.2em] uppercase transition duration-300 bg-[#071421]/40 hover:bg-gold-500/10 backdrop-blur-sm group"
              >
                <span>Menu</span>
              </a>

              <button
                onClick={onOpenBookTable}
                className="inline-flex items-center justify-center px-8 py-3.5 bg-gradient-to-r from-gold-600 to-gold-500 hover:from-gold-500 hover:to-gold-400 text-slate-950 font-semibold text-xs tracking-[0.2em] uppercase transition duration-300 shadow-lg shadow-gold-500/10 active:scale-95"
              >
                <span>Reserve Table</span>
              </button>
            </div>

            {/* Bottom Culinary Note (Mobile / Accessible) */}
            <div className="pt-6 border-t border-slate-800/80 max-w-sm hidden sm:block">
              <p className="text-xs text-slate-400 leading-relaxed font-light">
                Wild morning catch landed directly at our private harbor dock. Expertly prepared by Executive Chef Anthony Laurent.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Hotspots on Desktop / Cards on Mobile */}
          <div className="md:col-span-6 relative h-96 md:h-[520px] flex items-center justify-center">
            {/* Mobile Showcase Cards when hero background image is not active */}
            <div className="md:hidden w-full space-y-4">
              <div className="bg-[#0b1d2e]/90 border border-gold-500/30 rounded-2xl p-4 flex items-center space-x-4">
                <img
                  src="https://images.unsplash.com/photo-1559742811-82286364ceaf?auto=format&fit=crop&w=400&q=80"
                  alt="Dressed Oysters"
                  className="w-20 h-20 rounded-xl object-cover border border-gold-500/40"
                />
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] text-gold-400 uppercase tracking-widest font-serif">Signature Raw Bar</span>
                  <h3 className="font-serif text-lg text-white font-medium">Dressed Oysters</h3>
                  <p className="text-xs text-slate-400">Fresh Fine de Claire on glacier ice</p>
                  <div className="text-gold-300 font-serif font-bold text-base mt-1">25 $</div>
                </div>
                <button
                  onClick={() => onQuickAdd('dish-1')}
                  className="p-2.5 rounded-full bg-gold-500 text-slate-950 hover:bg-gold-400 transition"
                  title="Add to order"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              <div className="bg-[#0b1d2e]/90 border border-gold-500/30 rounded-2xl p-4 flex items-center space-x-4">
                <img
                  src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=400&q=80"
                  alt="Tignanello 2019"
                  className="w-20 h-20 rounded-xl object-cover border border-gold-500/40"
                />
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] text-gold-400 uppercase tracking-widest font-serif">Sommelier Reserve</span>
                  <h3 className="font-serif text-lg text-white font-medium">Tignanello 2019</h3>
                  <p className="text-xs text-slate-400">Marchesi Antinori • Toscana IGT</p>
                  <div className="text-gold-300 font-serif font-bold text-base mt-1">300 $</div>
                </div>
                <button
                  onClick={() => onQuickAdd('dish-10')}
                  className="p-2.5 rounded-full bg-gold-500 text-slate-950 hover:bg-gold-400 transition"
                  title="Add to order"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Desktop Clickable Hotspots overlaying the photo */}
            <div className="hidden md:block w-full h-full relative">
              {/* Hotspot 1: Dressed Oysters Platter */}
              <div
                onClick={() => onOpenDish('dish-1')}
                className="absolute top-1/2 left-[18%] -translate-y-1/2 cursor-pointer group"
                title="Click to view Dressed Oysters"
              >
                <div className="relative">
                  <div className="bg-[#071421]/80 backdrop-blur-md border border-gold-400/50 hover:border-gold-300 px-4 py-2 rounded-xl transition-all duration-300 group-hover:scale-105 shadow-xl">
                    <span className="block font-serif text-sm tracking-wide text-slate-200 group-hover:text-gold-200">
                      Dressed Oysters
                    </span>
                    <span className="block font-serif text-gold-400 text-base font-bold">
                      25 $
                    </span>
                  </div>
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-gold-400 rounded-full animate-ping opacity-75"></span>
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-gold-400 rounded-full"></span>
                </div>
              </div>

              {/* Hotspot 2: Tignanello Wine Bottle */}
              <div
                onClick={() => onOpenDish('dish-10')}
                className="absolute bottom-16 right-4 cursor-pointer group"
                title="Click to view Tignanello 2019"
              >
                <div className="relative">
                  <div className="bg-[#071421]/80 backdrop-blur-md border border-gold-400/50 hover:border-gold-300 px-4 py-2 rounded-xl transition-all duration-300 group-hover:scale-105 shadow-xl">
                    <span className="block font-serif text-sm tracking-wide text-slate-200 group-hover:text-gold-200">
                      Tignanello
                    </span>
                    <span className="block font-serif text-gold-400 text-base font-bold">
                      300 $
                    </span>
                  </div>
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-gold-400 rounded-full animate-ping opacity-75"></span>
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-gold-400 rounded-full"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Down Prompt */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-slate-400 text-[11px] uppercase tracking-[0.25em] flex flex-col items-center space-y-1.5 opacity-60 hover:opacity-100 transition z-10">
        <span>Explore Menu</span>
        <ArrowDown className="w-3.5 h-3.5 animate-bounce text-gold-400" />
      </div>
    </section>
  );
}
