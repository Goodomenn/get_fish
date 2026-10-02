import React, { useState } from 'react';
import { MENU_CATEGORIES } from '../data/restaurantData';
import { Wine, Sparkles, Plus, Eye, Search } from 'lucide-react';

export default function MenuSection({
  dishes,
  onAddToCart,
  onOpenDishDetail
}) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [search, setSearch] = useState('');

  const filteredDishes = dishes.filter(dish => {
    const matchCat = selectedCategory === 'All' || dish.category === selectedCategory;
    const matchSearch =
      dish.name.toLowerCase().includes(search.toLowerCase()) ||
      (dish.frenchName && dish.frenchName.toLowerCase().includes(search.toLowerCase())) ||
      dish.description.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <section id="menu" className="py-20 sm:py-28 bg-[#050d16] text-slate-100 relative">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-marine-700/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <span className="font-serif italic text-gold-300 text-xl tracking-wider block">
            culinary carte
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight uppercase">
            RESTAURANT MENU
          </h2>
          <div className="w-16 h-0.5 bg-gold-500/60 mx-auto"></div>
          <p className="text-slate-400 font-light text-sm tracking-wide">
            Every morning our fishmongers inspect the day-boat catches. Prepared over open wood fire, served raw, or paired with rare cellar vintages.
          </p>
        </div>

        {/* Category Filter Pills & Search */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 border-b border-slate-800/80 pb-6">
          {/* Category Tabs */}
          <div className="flex items-center space-x-2 sm:space-x-3 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {MENU_CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-5 py-2 rounded-full text-xs tracking-[0.15em] uppercase font-serif transition-all duration-300 whitespace-nowrap ${
                    isSelected
                      ? 'bg-gold-500/15 text-gold-300 border border-gold-400/60 shadow-lg shadow-gold-500/10'
                      : 'text-slate-400 hover:text-white border border-transparent hover:border-slate-800'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative max-w-xs w-full">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search fish dishes, oysters, wine..."
              className="w-full pl-10 pr-4 py-2 bg-[#091b2c] border border-slate-800 rounded-full text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-gold-500/60 transition"
            />
          </div>
        </div>

        {/* Menu Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDishes.map((dish) => (
            <div
              key={dish.id}
              className="group bg-[#091928]/80 border border-slate-800/80 hover:border-gold-500/40 rounded-2xl overflow-hidden transition-all duration-500 flex flex-col justify-between hover:shadow-2xl hover:shadow-black/60"
            >
              {/* Dish Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#091928] via-transparent to-black/30"></div>

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
                  className="absolute bottom-3 right-3 p-2 bg-[#071421]/80 hover:bg-[#071421] text-gold-300 rounded-full border border-gold-500/30 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
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
                      {dish.price} $
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
                        <strong className="text-slate-300 font-medium">Wine Pairing:</strong> {dish.pairingWine}
                      </span>
                    </div>
                  )}

                  <div className="flex items-center justify-between pt-1">
                    <button
                      onClick={() => onOpenDishDetail(dish)}
                      className="text-xs text-gold-400 hover:text-gold-300 font-serif tracking-wider uppercase underline underline-offset-4"
                    >
                      Details & Recipe
                    </button>

                    <button
                      onClick={() => onAddToCart(dish)}
                      className="inline-flex items-center space-x-1.5 px-4 py-2 border border-gold-400/50 hover:border-gold-300 text-gold-200 hover:text-white rounded-lg text-xs font-serif tracking-widest uppercase transition bg-[#071421]/60 hover:bg-gold-500/15"
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
      </div>
    </section>
  );
}
