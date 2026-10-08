import React, { useState } from 'react';
import {
  MENU_CATEGORIES,
  CANONICAL_CATEGORIES,
  normalizeCategory,
  areCategoriesEqual,
  deduplicateCategories
} from '../data/restaurantData';
import { Wine, Plus, Eye, Search, ArrowRight, LayoutGrid, Route, Compass } from 'lucide-react';

/* =========================================================================
   AUTHENTIC HANDCRAFTED CULINARY GARNISHES & ACCENTS
   Matching the reference serpentine visual aesthetic:
   - Fresh organic basil leaf clusters
   - Glossy whole & sliced cherry tomatoes
   - Dipping sauce ramekin attached with a fine stem line
   - Concentric astronomical / fine-dining atlas orbits
   ========================================================================= */

function BasilLeavesGarnish({ className = '', style = {} }) {
  return (
    <div className={`pointer-events-none select-none ${className}`} style={style}>
      <svg
        width="84"
        height="84"
        viewBox="0 0 100 100"
        fill="none"
        className="filter drop-shadow-[0_14px_22px_rgba(0,0,0,0.9)] transition-transform duration-700 hover:scale-105"
      >
        <defs>
          <radialGradient id="basilGrad1" cx="35%" cy="30%" r="75%">
            <stop offset="0%" stopColor="#4ade80" />
            <stop offset="30%" stopColor="#22c55e" />
            <stop offset="70%" stopColor="#15803d" />
            <stop offset="100%" stopColor="#052e16" />
          </radialGradient>
          <radialGradient id="basilGrad2" cx="40%" cy="35%" r="70%">
            <stop offset="0%" stopColor="#86efac" />
            <stop offset="40%" stopColor="#16a34a" />
            <stop offset="80%" stopColor="#14532d" />
            <stop offset="100%" stopColor="#052e16" />
          </radialGradient>
          <linearGradient id="basilStem" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22c55e" />
            <stop offset="100%" stopColor="#14532d" />
          </linearGradient>
        </defs>
        {/* Curved stem */}
        <path d="M50 48 Q54 75 58 92" stroke="url(#basilStem)" strokeWidth="3" strokeLinecap="round" />
        {/* Left leaf */}
        <path d="M50 50 C30 46 12 28 18 10 C34 8 46 26 50 50 Z" fill="url(#basilGrad1)" />
        <path d="M18 10 Q32 28 50 50" stroke="#86efac" strokeWidth="1" strokeOpacity="0.7" fill="none" />
        <path d="M26 19 Q22 23 19 25 M33 27 Q28 32 25 35 M41 37 Q36 42 33 45" stroke="#86efac" strokeWidth="0.8" strokeOpacity="0.45" fill="none" />
        {/* Right leaf */}
        <path d="M50 50 C70 46 88 30 84 14 C68 10 54 28 50 50 Z" fill="url(#basilGrad2)" />
        <path d="M84 14 Q70 30 50 50" stroke="#bbf7d0" strokeWidth="1" strokeOpacity="0.7" fill="none" />
        <path d="M76 22 Q80 26 82 27 M69 30 Q74 35 77 38 M61 39 Q66 44 69 47" stroke="#bbf7d0" strokeWidth="0.8" strokeOpacity="0.45" fill="none" />
        {/* Center top leaf */}
        <path d="M50 50 C41 30 41 12 50 2 C59 12 59 30 50 50 Z" fill="url(#basilGrad1)" />
        <path d="M50 2 L50 50" stroke="#bbf7d0" strokeWidth="1.2" strokeOpacity="0.6" />
      </svg>
    </div>
  );
}

function CherryTomatoGarnish({ className = '', style = {} }) {
  return (
    <div className={`pointer-events-none select-none ${className}`} style={style}>
      <svg
        width="92"
        height="70"
        viewBox="0 0 110 85"
        fill="none"
        className="filter drop-shadow-[0_16px_25px_rgba(0,0,0,0.92)] transition-transform duration-700 hover:scale-105"
      >
        <defs>
          <radialGradient id="tomatoWholeGrad" cx="35%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#ff7b7b" />
            <stop offset="35%" stopColor="#ef4444" />
            <stop offset="70%" stopColor="#b91c1c" />
            <stop offset="100%" stopColor="#7f1d1d" />
          </radialGradient>
          <radialGradient id="tomatoSliceGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#f87171" />
            <stop offset="70%" stopColor="#dc2626" />
            <stop offset="90%" stopColor="#991b1b" />
            <stop offset="100%" stopColor="#ef4444" />
          </radialGradient>
          <radialGradient id="tomatoPulpGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fef08a" />
            <stop offset="50%" stopColor="#f87171" />
            <stop offset="100%" stopColor="#b91c1c" />
          </radialGradient>
        </defs>
        {/* Whole Tomato */}
        <g transform="translate(8, 14)">
          <circle cx="28" cy="28" r="24" fill="url(#tomatoWholeGrad)" />
          {/* Specular curved reflection */}
          <ellipse cx="22" cy="18" rx="6" ry="3.5" transform="rotate(-30 22 18)" fill="white" opacity="0.6" />
          {/* Star calyx / fresh stem */}
          <path d="M28 6 L25 10 L20 6 L23 11 L18 13 L24 14 L20 18 L26 16 L28 20 L29 16 L35 18 L31 14 L37 13 L32 11 L35 6 L30 10 Z" fill="#22c55e" />
          <path d="M28 8 Q29 2 33 1" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" />
        </g>
        {/* Sliced Half Tomato */}
        <g transform="translate(56, 10)">
          <ellipse cx="24" cy="28" rx="22" ry="24" fill="url(#tomatoSliceGrad)" stroke="#ef4444" strokeWidth="2.5" />
          {/* Seed cavities */}
          <ellipse cx="16" cy="22" rx="6" ry="8" fill="url(#tomatoPulpGrad)" opacity="0.9" />
          <ellipse cx="31" cy="22" rx="6" ry="8" fill="url(#tomatoPulpGrad)" opacity="0.9" />
          <ellipse cx="23" cy="35" rx="8" ry="6" fill="url(#tomatoPulpGrad)" opacity="0.9" />
          {/* Golden seeds */}
          <circle cx="16" cy="22" r="1.6" fill="#fef08a" />
          <circle cx="31" cy="21" r="1.6" fill="#fef08a" />
          <circle cx="23" cy="35" r="1.6" fill="#fef08a" />
        </g>
      </svg>
    </div>
  );
}

function SauceRamekinAccent({ className = '', style = {} }) {
  return (
    <div className={`pointer-events-none select-none ${className}`} style={style}>
      <div className="relative flex items-center">
        {/* Stem connection line */}
        <div className="w-8 sm:w-12 h-[1.5px] bg-gradient-to-r from-gold-400/20 via-gold-400/60 to-gold-400/80 relative">
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-gold-400 border border-navy-950 shadow-[0_0_8px_rgba(212,175,55,0.8)]" />
        </div>
        {/* Porcelain Dipping Sauce Cup */}
        <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-gradient-to-br from-[#1a2f47] via-[#091b2c] to-[#040e17] p-1 border-2 border-slate-700/80 ring-1 ring-gold-400/30 shadow-[0_12px_28px_rgba(0,0,0,0.85)]">
          <div className="w-full h-full rounded-full bg-[#f8f5ee] flex items-center justify-center relative overflow-hidden shadow-inner">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-600/70 blur-[0.5px]" />
            <div className="absolute top-1.5 left-2.5 w-1 h-1 rounded-full bg-slate-900/60" />
            <div className="absolute bottom-2.5 right-2 w-0.8 h-0.8 rounded-full bg-slate-900/50" />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/10 via-transparent to-white/40 pointer-events-none" />
          </div>
        </div>
      </div>
    </div>
  );
}

function DecorativeOrbitCircles() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-35">
      {/* Top Left Orbit */}
      <div className="absolute -left-24 top-20 w-88 h-88 rounded-full border border-gold-500/15" />
      <div className="absolute -left-12 top-32 w-64 h-64 rounded-full border border-gold-500/10" />
      {/* Mid Right Orbit */}
      <div className="absolute -right-36 top-[35%] w-[420px] h-[420px] rounded-full border border-gold-500/15" />
      <div className="absolute -right-20 top-[40%] w-72 h-72 rounded-full border border-gold-500/10" />
      {/* Bottom Left Orbit */}
      <div className="absolute -left-32 bottom-28 w-96 h-96 rounded-full border border-gold-500/15" />
    </div>
  );
}

/* =========================================================================
   MAIN COMPONENT: MENU SECTION
   ========================================================================= */

export default function MenuSection({
  dishes = [],
  categories = [],
  onAddToCart,
  onOpenDishDetail
}) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [search, setSearch] = useState('');
  const [viewMode, setViewMode] = useState('journey'); // 'journey' (Serpentine) or 'grid'

  const categoryList =
    categories && categories.length > 0
      ? ['All', ...deduplicateCategories(categories.filter((c) => c !== 'All'))]
      : ['All', ...CANONICAL_CATEGORIES];

  const activeCategory = categoryList.find((c) => areCategoriesEqual(c, selectedCategory)) || 'All';
  const validCategories = categoryList.filter((c) => c !== 'All');

  const filteredDishes = dishes.filter(dish => {
    if (validCategories.length > 0 && !validCategories.some((c) => areCategoriesEqual(c, dish.category))) {
      return false;
    }
    const matchCat = activeCategory === 'All' || areCategoriesEqual(dish.category, activeCategory);
    const matchSearch =
      dish.name.toLowerCase().includes(search.toLowerCase()) ||
      (dish.frenchName && dish.frenchName.toLowerCase().includes(search.toLowerCase())) ||
      dish.description.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <section id="menu" className="py-20 sm:py-28 bg-[#050e17] text-slate-100 relative overflow-hidden w-full">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[850px] h-[450px] sm:h-[800px] bg-sky-950/20 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 w-[600px] h-[600px] bg-amber-950/10 rounded-full blur-[180px] pointer-events-none" />

      {/* Decorative fine-dining cosmic orbits */}
      <DecorativeOrbitCircles />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* ================================================================= */}
        {/* 1. SECTION HEADING                                                */}
        {/* ================================================================= */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-14">
          <span className="font-serif italic text-gold-300 text-xl tracking-wider block">
            culinary carte & voyage
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight uppercase">
            RESTAURANT MENU
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto" />
          <p className="text-slate-400 font-light text-sm sm:text-base tracking-wide leading-relaxed">
            Every morning our fishmongers select the finest day-boat catches. Prepared over open wood fire, gently simmered in wild herbs, or paired with rare cellar vintages.
          </p>
        </div>

        {/* ================================================================= */}
        {/* 2. CATEGORY TABS, SEARCH & VIEW MODE SWITCHER                     */}
        {/* ================================================================= */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-14 border-b border-slate-800/80 pb-6">
          
          {/* Category Tabs */}
          <div className="flex items-center space-x-2 sm:space-x-2.5 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
            {categoryList.map((cat) => {
              const isSelected = areCategoriesEqual(activeCategory, cat);
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 sm:px-5 py-2 rounded-full text-xs tracking-[0.15em] uppercase font-serif transition-all duration-300 whitespace-nowrap cursor-pointer ${
                    isSelected
                      ? 'bg-gold-500/15 text-gold-300 border border-gold-400/70 shadow-lg shadow-gold-500/15 font-semibold'
                      : 'text-slate-400 hover:text-white border border-transparent hover:border-slate-800'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Right Tools: View Switcher & Search */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            
            {/* View Mode Switcher */}
            <div className="inline-flex items-center p-1 bg-[#071727] border border-slate-800/90 rounded-full shrink-0 shadow-inner">
              <button
                onClick={() => setViewMode('journey')}
                className={`px-3.5 py-1.5 rounded-full text-xs font-serif tracking-wider uppercase transition-all duration-300 flex items-center space-x-1.5 cursor-pointer ${
                  viewMode === 'journey'
                    ? 'bg-gold-500/20 text-gold-300 border border-gold-500/50 shadow-md shadow-gold-500/10 font-medium'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
                title="Serpentine Culinary Path View"
              >
                <Route className="w-3.5 h-3.5 text-gold-400" />
                <span>Culinary Path</span>
              </button>

              <button
                onClick={() => setViewMode('grid')}
                className={`px-3.5 py-1.5 rounded-full text-xs font-serif tracking-wider uppercase transition-all duration-300 flex items-center space-x-1.5 cursor-pointer ${
                  viewMode === 'grid'
                    ? 'bg-gold-500/20 text-gold-300 border border-gold-500/50 shadow-md shadow-gold-500/10 font-medium'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
                title="Classic Multi-Column Grid View"
              >
                <LayoutGrid className="w-3.5 h-3.5 text-gold-400" />
                <span>Grid</span>
              </button>
            </div>

            {/* Search Input */}
            <div className="relative max-w-xs w-full">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search dish, recipe, wines..."
                className="w-full pl-10 pr-4 py-2 bg-[#071727] border border-slate-800 rounded-full text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-gold-500/60 transition shadow-inner"
              />
            </div>
          </div>
        </div>

        {/* ================================================================= */}
        {/* EMPTY STATE                                                       */}
        {/* ================================================================= */}
        {filteredDishes.length === 0 && (
          <div className="py-24 text-center max-w-md mx-auto space-y-4">
            <div className="w-16 h-16 rounded-full border border-gold-500/30 bg-[#071727] flex items-center justify-center mx-auto text-gold-400">
              <Search className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-2xl text-white">No Dishes Found</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              We couldn't find any dish matching your selection. Try clearing your search term or exploring another category.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearch('');
              }}
              className="px-6 py-2 bg-gold-500/20 border border-gold-500/50 text-gold-300 rounded-full text-xs font-serif uppercase tracking-widest hover:bg-gold-500 hover:text-slate-950 transition"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* ================================================================= */}
        {/* 3A. SERPENTINE CULINARY PATH VIEW (Signature Requested Style)     */}
        {/* ================================================================= */}
        {viewMode === 'journey' && filteredDishes.length > 0 && (
          <div className="relative max-w-5xl mx-auto py-6">
            
            {/* Top Journey Entry Pin */}
            <div className="flex flex-col items-center justify-center mb-8 pointer-events-none">
              <div className="w-2.5 h-2.5 rounded-full bg-gold-400 shadow-[0_0_12px_rgba(212,175,55,1)]" />
              <div className="w-[1.5px] h-8 bg-gradient-to-b from-gold-400 via-gold-400/50 to-transparent" />
            </div>

            {filteredDishes.map((dish, index) => {
              const isLeft = index % 2 === 0; // Alternates Left plate / Right card vs Right plate / Left card
              const isLast = index === filteredDishes.length - 1;

              return (
                <div key={dish.id} className="relative">
                  
                  {/* -------------------------------------------------------- */}
                  {/* DISH ROW: Alternating Circular Plate + Content Card       */}
                  {/* -------------------------------------------------------- */}
                  <div
                    className={`flex flex-col ${
                      isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                    } items-center justify-between gap-8 md:gap-14 lg:gap-16 py-6 sm:py-8 relative group`}
                  >

                    {/* A. CIRCULAR CERAMIC DISH PLATE */}
                    <div className="relative shrink-0 flex items-center justify-center">
                      
                      {/* Outer Plate Shadow & Glow */}
                      <div className="w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full relative p-2.5 sm:p-3 bg-gradient-to-br from-[#0e2742] via-[#081829] to-[#030911] border-[5px] border-[#061421] ring-1 ring-gold-500/35 shadow-[0_25px_60px_-10px_rgba(0,0,0,0.95),0_0_35px_rgba(212,175,55,0.12)] flex items-center justify-center transition-all duration-700 group-hover:shadow-[0_30px_70px_rgba(0,0,0,1),0_0_45px_rgba(212,175,55,0.22)] group-hover:scale-[1.02]">
                        
                        {/* Inner Plate Rim & Food Plating Container */}
                        <div
                          onClick={() => onOpenDishDetail(dish)}
                          className="w-full h-full rounded-full overflow-hidden relative shadow-[inset_0_4px_22px_rgba(0,0,0,0.85)] border border-slate-700/40 bg-[#05111c] cursor-pointer group/plate"
                        >
                          {dish.image ? (
                            <img
                              src={dish.image}
                              alt={dish.name}
                              className="w-full h-full object-cover rounded-full group-hover/plate:scale-110 transition-transform duration-700 ease-out"
                            />
                          ) : (
                            <div className="w-full h-full rounded-full flex flex-col items-center justify-center bg-gradient-to-br from-[#0c233c] via-[#071727] to-[#040e17] p-6 text-center relative overflow-hidden">
                              <span className="font-serif italic text-gold-200 text-base sm:text-lg font-semibold tracking-wide max-w-[150px] leading-snug">
                                {dish.name}
                              </span>
                              <span className="text-[10px] uppercase font-mono tracking-widest text-slate-400 mt-2 px-3 py-0.5 rounded-full bg-slate-900/70 border border-slate-700/50">
                                {dish.category}
                              </span>
                            </div>
                          )}

                          {/* Subtle Ceramic Glaze Sheen Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-white/10 pointer-events-none rounded-full" />

                          {/* Quick View Eye Overlay on Plate Hover */}
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/plate:opacity-100 transition-opacity duration-300 rounded-full flex items-center justify-center pointer-events-none">
                            <span className="p-3 bg-[#071421]/90 rounded-full text-gold-300 border border-gold-500/40 shadow-xl">
                              <Eye className="w-5 h-5" />
                            </span>
                          </div>
                        </div>

                        {/* ATTACHED PRICE BADGE (Exact Reference Style: Attached to the outer plate rim) */}
                        <div
                          className={`absolute top-1/2 -translate-y-1/2 z-20 ${
                            isLeft
                              ? '-left-3 sm:-left-4 lg:-left-5'
                              : '-right-3 sm:-right-4 lg:-right-5'
                          }`}
                        >
                          <div className="bg-gradient-to-r from-amber-400 via-amber-300 to-gold-400 text-slate-950 font-serif font-bold text-xs sm:text-sm px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-md shadow-2xl tracking-wider border border-amber-200/90 flex items-center space-x-1 whitespace-nowrap">
                            <span>
                              {typeof dish.price === 'number'
                                ? dish.price.toLocaleString()
                                : dish.price}
                            </span>
                            <span className="text-[10px] font-sans font-semibold uppercase tracking-tight text-slate-900/80">
                              ETB
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Circular Plate Node Dot (Where the serpentine line attaches) */}
                      <div
                        className={`hidden md:block absolute w-3 h-3 rounded-full bg-gold-400 border-2 border-[#050e17] shadow-[0_0_10px_rgba(212,175,55,1)] z-30 ${
                          isLeft
                            ? 'top-4 -right-1'
                            : 'top-4 -left-1'
                        }`}
                      />
                    </div>

                    {/* B. HORIZONTAL DISH CONTENT CARD */}
                    <div className="flex-1 w-full max-w-lg bg-[#071727]/85 backdrop-blur-md border border-slate-800/80 hover:border-gold-500/40 rounded-2xl p-6 sm:p-8 shadow-2xl transition-all duration-500 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative">
                      
                      {/* Category & Badge */}
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-[10px] uppercase tracking-[0.2em] font-serif font-semibold text-gold-400/90">
                          {dish.category}
                        </span>
                        {dish.badge && (
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-serif uppercase tracking-wider font-semibold bg-[#092038] text-gold-300 border border-gold-500/30">
                            {dish.badge}
                          </span>
                        )}
                      </div>

                      {/* Dish Name (Serif & Prominent) */}
                      <h3
                        onClick={() => onOpenDishDetail(dish)}
                        className="font-serif text-2xl sm:text-3xl text-white font-normal tracking-wide group-hover:text-gold-200 transition-colors cursor-pointer"
                      >
                        {dish.name}
                      </h3>

                      {/* Subtitle / French or Amharic translation */}
                      {dish.frenchName && (
                        <p className="font-serif italic text-xs sm:text-sm text-slate-400 mt-1">
                          {dish.frenchName}
                        </p>
                      )}

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-slate-300/85 font-light leading-relaxed mt-3.5">
                        {dish.description}
                      </p>

                      {/* Wine Pairing */}
                      {dish.pairingWine && (
                        <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center space-x-2 text-xs text-slate-400">
                          <Wine className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                          <span className="truncate">
                            <strong className="text-slate-300 font-medium">Wine Pairing:</strong>{' '}
                            {dish.pairingWine}
                          </span>
                        </div>
                      )}

                      {/* Actions Row: Catalog Link (Ref style) & Order Button */}
                      <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between gap-4">
                        
                        {/* Reference Image Style Catalog Link: "catalog ➔" */}
                        <button
                          onClick={() => onOpenDishDetail(dish)}
                          className="group/btn inline-flex items-center space-x-2 text-xs font-serif tracking-[0.18em] uppercase text-gold-400 hover:text-gold-200 transition cursor-pointer"
                        >
                          <span>Catalog / Recipe</span>
                          <span className="w-5 h-5 rounded-full border border-gold-400/40 flex items-center justify-center text-[10px] group-hover/btn:border-gold-300 group-hover/btn:translate-x-1 transition-all bg-[#091f35]/50">
                            ➔
                          </span>
                        </button>

                        {/* Order Button */}
                        <button
                          onClick={() => onAddToCart(dish)}
                          className="inline-flex items-center space-x-2 px-5 py-2.5 bg-gradient-to-r from-gold-500 to-amber-500 hover:from-gold-400 hover:to-amber-400 text-slate-950 rounded-xl text-xs font-serif font-bold tracking-wider uppercase transition shadow-lg shadow-gold-500/10 active:scale-95 cursor-pointer"
                        >
                          <Plus className="w-3.5 h-3.5 stroke-[2.5]" />
                          <span>Order</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* -------------------------------------------------------- */}
                  {/* SERPENTINE CONNECTOR CURVE TO NEXT DISH                   */}
                  {/* -------------------------------------------------------- */}
                  {!isLast && (
                    <div className="relative py-2 sm:py-4">
                      
                      {/* Desktop S-Curve Connector */}
                      <div className="hidden md:block relative w-full h-28 sm:h-36 pointer-events-none overflow-visible">
                        <svg
                          viewBox="0 0 1000 140"
                          fill="none"
                          className="w-full h-full overflow-visible"
                          preserveAspectRatio="none"
                        >
                          <defs>
                            <linearGradient
                              id={`serpentineGrad-${index}`}
                              x1={isLeft ? '20%' : '80%'}
                              y1="0%"
                              x2={isLeft ? '80%' : '20%'}
                              y2="100%"
                            >
                              <stop offset="0%" stopColor="#d4af37" stopOpacity="0.85" />
                              <stop offset="50%" stopColor="#f59e0b" stopOpacity="0.6" />
                              <stop offset="100%" stopColor="#d4af37" stopOpacity="0.85" />
                            </linearGradient>
                          </defs>

                          {/* S-Curve Path from plate to next plate */}
                          {isLeft ? (
                            // Left plate (X ~ 180) to Right plate (X ~ 820)
                            <path
                              d="M 180 0 C 180 90, 820 50, 820 140"
                              stroke={`url(#serpentineGrad-${index})`}
                              strokeWidth="1.5"
                              fill="none"
                            />
                          ) : (
                            // Right plate (X ~ 820) to Left plate (X ~ 180)
                            <path
                              d="M 820 0 C 820 90, 180 50, 180 140"
                              stroke={`url(#serpentineGrad-${index})`}
                              strokeWidth="1.5"
                              fill="none"
                            />
                          )}

                          {/* Node Dots at start and finish */}
                          {isLeft ? (
                            <>
                              <circle cx="180" cy="4" r="4.5" fill="#f0c05a" stroke="#050e17" strokeWidth="2" />
                              <circle cx="820" cy="136" r="4.5" fill="#f0c05a" stroke="#050e17" strokeWidth="2" />
                            </>
                          ) : (
                            <>
                              <circle cx="820" cy="4" r="4.5" fill="#f0c05a" stroke="#050e17" strokeWidth="2" />
                              <circle cx="180" cy="136" r="4.5" fill="#f0c05a" stroke="#050e17" strokeWidth="2" />
                            </>
                          )}
                        </svg>

                        {/* Staggered Garnishes Along Path */}
                        {isLeft ? (
                          <>
                            {/* Dipping Sauce Ramekin on Left */}
                            <div className="absolute left-[8%] sm:left-[11%] top-1/2 -translate-y-1/2">
                              <SauceRamekinAccent />
                            </div>
                            {/* Fresh Basil Leaves on Right */}
                            <div className="absolute right-[6%] sm:right-[10%] top-1/3">
                              <BasilLeavesGarnish />
                            </div>
                          </>
                        ) : (
                          <>
                            {/* Sliced Cherry Tomatoes on Right */}
                            <div className="absolute right-[8%] sm:right-[12%] top-1/2 -translate-y-1/2">
                              <CherryTomatoGarnish />
                            </div>
                            {/* Fresh Basil Leaves on Left */}
                            <div className="absolute left-[6%] sm:left-[10%] top-1/3 rotate-[-15deg]">
                              <BasilLeavesGarnish />
                            </div>
                          </>
                        )}
                      </div>

                      {/* Mobile Vertical Wave Connector */}
                      <div className="md:hidden flex flex-col items-center justify-center py-3 relative pointer-events-none">
                        <svg width="48" height="64" viewBox="0 0 48 64" fill="none">
                          <path
                            d="M 24 0 C 38 20, 10 44, 24 64"
                            stroke="#f0c05a"
                            strokeWidth="1.5"
                            strokeOpacity="0.75"
                            fill="none"
                          />
                          <circle cx="24" cy="4" r="3.5" fill="#f0c05a" />
                          <circle cx="24" cy="60" r="3.5" fill="#f0c05a" />
                        </svg>
                        
                        {/* Compact Mobile Garnish */}
                        {index % 2 === 0 ? (
                          <div className="absolute right-6 top-1/2 -translate-y-1/2 scale-75">
                            <BasilLeavesGarnish />
                          </div>
                        ) : (
                          <div className="absolute left-6 top-1/2 -translate-y-1/2 scale-75">
                            <CherryTomatoGarnish />
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}

            {/* Bottom Journey Finish Seal */}
            <div className="flex flex-col items-center justify-center mt-12 pt-8 border-t border-slate-800/80 text-center space-y-3">
              <div className="w-12 h-12 rounded-full border border-gold-500/40 bg-[#071727] flex items-center justify-center text-gold-300 shadow-lg">
                <Compass className="w-6 h-6 animate-spin-slow" />
              </div>
              <span className="font-serif italic text-gold-300 text-sm tracking-widest uppercase">
                End of Culinary Voyage
              </span>
              <p className="text-xs text-slate-400 font-light max-w-sm">
                Pair your selection with our curated Lake Tana reserve wines or ask your captain for the catch of the day.
              </p>
            </div>
          </div>
        )}

        {/* ================================================================= */}
        {/* 3B. CLASSIC MULTI-COLUMN GRID VIEW (When toggled)                 */}
        {/* ================================================================= */}
        {viewMode === 'grid' && filteredDishes.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDishes.map((dish) => (
              <div
                key={dish.id}
                className="group bg-[#091928]/85 border border-slate-800/80 hover:border-gold-500/40 rounded-2xl overflow-hidden transition-all duration-500 flex flex-col justify-between hover:shadow-2xl hover:shadow-black/70"
              >
                {/* Dish Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                  {dish.image ? (
                    <img
                      src={dish.image}
                      alt={dish.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#0c233c] to-[#061421] p-4 text-center">
                      <span className="font-serif italic text-gold-300 text-sm tracking-wide">
                        {dish.name}
                      </span>
                      <span className="text-[10px] uppercase font-mono tracking-widest text-slate-400 mt-1">
                        {dish.category}
                      </span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#091928] via-transparent to-black/30 pointer-events-none" />

                  {/* Badge */}
                  {dish.badge && (
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 rounded-full text-[10px] uppercase tracking-widest font-serif font-bold bg-[#071421]/90 backdrop-blur-md text-gold-300 border border-gold-500/40 shadow">
                        {dish.badge}
                      </span>
                    </div>
                  )}

                  {/* Quick View Button */}
                  <button
                    onClick={() => onOpenDishDetail(dish)}
                    className="absolute bottom-3 right-3 p-2 bg-[#071421]/80 hover:bg-[#071421] text-gold-300 rounded-full border border-gold-500/30 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 cursor-pointer"
                    title="View Ingredients & Sommelier Notes"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                </div>

                {/* Dish Description & Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-baseline justify-between gap-2">
                      <span className="text-[10px] uppercase tracking-widest text-gold-400 font-serif font-semibold">
                        {dish.category}
                      </span>
                      <span className="font-serif text-2xl text-gold-300 font-bold">
                        {typeof dish.price === 'number' ? dish.price.toLocaleString() : dish.price} ETB
                      </span>
                    </div>

                    <h3
                      onClick={() => onOpenDishDetail(dish)}
                      className="font-serif text-xl sm:text-2xl text-white font-medium group-hover:text-gold-200 transition-colors mt-1 cursor-pointer line-clamp-1"
                    >
                      {dish.name}
                    </h3>

                    {dish.frenchName && (
                      <p className="font-serif italic text-xs text-slate-400 mt-0.5">
                        {dish.frenchName}
                      </p>
                    )}

                    <p className="text-xs text-slate-300/80 font-light leading-relaxed mt-2.5 line-clamp-2">
                      {dish.description}
                    </p>
                  </div>

                  {/* Wine Pairing & Action */}
                  <div className="pt-4 border-t border-slate-800/80 space-y-3">
                    {dish.pairingWine && (
                      <div className="flex items-center space-x-2 text-[11px] text-slate-400">
                        <Wine className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                        <span className="truncate">
                          <strong className="text-slate-300 font-medium">Wine Pairing:</strong>{' '}
                          {dish.pairingWine}
                        </span>
                      </div>
                    )}

                    <div className="flex items-center justify-between pt-1">
                      <button
                        onClick={() => onOpenDishDetail(dish)}
                        className="text-xs text-gold-400 hover:text-gold-300 font-serif tracking-wider uppercase underline underline-offset-4 cursor-pointer"
                      >
                        Details & Recipe
                      </button>

                      <button
                        onClick={() => onAddToCart(dish)}
                        className="inline-flex items-center space-x-1.5 px-4 py-2 border border-gold-400/50 hover:border-gold-300 text-gold-200 hover:text-white rounded-lg text-xs font-serif tracking-widest uppercase transition bg-[#071421]/60 hover:bg-gold-500/15 cursor-pointer active:scale-95"
                      >
                        <Plus className="w-3.5 h-3.5" />
                        <span>Order</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
