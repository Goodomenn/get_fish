import React from 'react';
import { X, Wine, Sparkles, Plus, Clock, ChefHat, Check } from 'lucide-react';

export default function DishDetailModal({ dish, onClose, onAddToCart }) {
  if (!dish) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl bg-[#091b2c] border border-gold-500/40 rounded-3xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-slate-950/70 hover:bg-slate-900 text-slate-300 hover:text-white transition backdrop-blur-md"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Scroll Content */}
        <div className="overflow-y-auto flex-1 p-6 sm:p-8 space-y-6">
          {/* Top: Image + Key Presentation */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-slate-900 border border-slate-800">
              {dish.image ? (
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#0c233c] to-[#061421] p-6 text-center">
                  <span className="font-serif italic text-gold-300 text-lg tracking-wide">{dish.name}</span>
                  <span className="text-xs uppercase font-mono tracking-widest text-slate-400 mt-2">{dish.category}</span>
                </div>
              )}
              {dish.badge && (
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 rounded-full text-[10px] uppercase tracking-widest font-serif font-bold bg-[#071421]/90 text-gold-300 border border-gold-500/40 shadow">
                    {dish.badge}
                  </span>
                </div>
              )}
            </div>

            <div className="space-y-4">
              <div>
                <span className="font-serif text-[10px] uppercase tracking-widest text-gold-400 block mb-1">
                  {dish.category}
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-medium text-white leading-tight">
                  {dish.name}
                </h2>
                {dish.frenchName && (
                  <p className="font-serif italic text-xs text-slate-400 mt-1">
                    {dish.frenchName}
                  </p>
                )}
              </div>

              <div className="text-3xl font-serif text-gold-300 font-bold">
                {dish.price} $
                {dish.priceNote && (
                  <span className="text-xs text-slate-400 font-sans font-normal ml-2">
                    ({dish.priceNote})
                  </span>
                )}
              </div>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-light">
                {dish.description}
              </p>

              {dish.dietary && (
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {dish.dietary.map(d => (
                    <span
                      key={d}
                      className="px-2.5 py-0.5 rounded-full text-[10px] font-serif bg-slate-800 text-slate-300 border border-slate-700"
                    >
                      {d}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Sommelier Pairing & Ingredients */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2 text-xs">
            {/* Sommelier Pairing */}
            <div className="bg-[#061421] border border-slate-800 rounded-2xl p-4 space-y-2">
              <div className="flex items-center space-x-2 text-gold-400 font-serif font-bold uppercase tracking-wider text-[11px]">
                <Wine className="w-4 h-4" />
                <span>Head Sommelier Wine Pairing</span>
              </div>
              <p className="text-slate-300 font-light leading-relaxed">
                {dish.pairingWine || 'Paired with our crisp mineral Chablis or Super Tuscan reserve.'}
              </p>
            </div>

            {/* Ingredients */}
            {dish.ingredients && (
              <div className="bg-[#061421] border border-slate-800 rounded-2xl p-4 space-y-2">
                <div className="flex items-center space-x-2 text-gold-400 font-serif font-bold uppercase tracking-wider text-[11px]">
                  <ChefHat className="w-4 h-4" />
                  <span>Key Fresh Ingredients</span>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {dish.ingredients.map(ing => (
                    <span
                      key={ing}
                      className="bg-slate-850 px-2 py-1 rounded text-slate-300 text-[11px] border border-slate-800"
                    >
                      {ing}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Action Footer */}
          <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
            <div className="text-xs text-slate-400">
              Freshly prepared to order • Served table-side
            </div>

            <button
              onClick={() => {
                onAddToCart(dish);
                onClose();
              }}
              className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-gold-600 to-gold-500 hover:from-gold-500 hover:to-gold-400 text-slate-950 font-serif font-bold text-xs uppercase tracking-[0.2em] rounded-xl shadow-lg transition"
            >
              <Plus className="w-4 h-4" />
              <span>Add to Table Order - {dish.price} $</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
