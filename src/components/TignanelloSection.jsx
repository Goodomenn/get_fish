import React, { useState } from 'react';
import { Wine, Award, Plus, Check, Info, Sparkles, GlassWater } from 'lucide-react';

export default function TignanelloSection({ onAddToCart, onOpenDishDetail }) {
  const [format, setFormat] = useState('bottle'); // 'glass' ($60) or 'bottle' ($300)
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const pricePerUnit = format === 'bottle' ? 300.00 : 60.00;
  const currentTotal = pricePerUnit * quantity;

  const handleAdd = () => {
    const wineItem = {
      id: format === 'bottle' ? 'dish-10' : 'dish-10-glass',
      name: format === 'bottle' ? 'Tignanello Toscana IGT 2019 (Bottle 750ml)' : 'Tignanello Toscana IGT 2019 (Glass 150ml)',
      price: pricePerUnit,
      category: 'Fine Wine Cellar',
      image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80',
      description: 'Marchesi Antinori iconic Super Tuscan: 80% Sangiovese, 15% Cabernet Sauvignon, 5% Cabernet Franc. 98 Points.',
      pairingWine: 'Pairs with Dressed Oysters, Tuna Tartare & Wood-Fired Branzino'
    };

    for (let i = 0; i < quantity; i++) {
      onAddToCart(wineItem);
    }

    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <section id="tignanello" className="py-24 sm:py-32 bg-[#071421] relative overflow-hidden border-t border-slate-800">
      {/* Background Glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-red-950/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Narrative, Typography & Ordering */}
          <div className="lg:col-span-5 order-2 lg:order-1 space-y-6">
            <div>
              <span className="font-serif italic text-gold-300 text-lg tracking-wider block">
                sommelier cellar icon
              </span>

              {/* REAL HTML Typography Header matching the uploaded image */}
              <h2 className="font-serif text-4xl sm:text-5xl text-white tracking-tight uppercase mt-1">
                TIGNANELLO
              </h2>

              {/* Elegant Gold Divider Line */}
              <div className="w-16 h-0.5 bg-gold-400 my-3" />

              <div className="flex items-baseline space-x-3">
                <span className="font-serif text-3xl text-gold-300 font-bold">
                  300 $
                </span>
                <span className="text-xs text-slate-400 uppercase tracking-widest font-serif">
                  / Bottle 750ml • Tenuta Tignanello 2019
                </span>
              </div>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed font-light">
              Crafted by the historic Marchesi Antinori estate in Chianti Classico, Tignanello was the first 
              Sangiovese wine aged in small oak barriques and blended with untraditional varieties. A monumental 
              vintage displaying ripe black cherries, aromatic herbs, toasted cedar, and velvet tannins.
            </p>

            {/* Vintage & Varietals Badges */}
            <div className="grid grid-cols-3 gap-3 p-4 bg-[#050e17] rounded-xl border border-slate-800 text-center">
              <div>
                <span className="font-serif text-gold-300 text-base font-bold block">98 Pts</span>
                <span className="text-[10px] text-slate-400 uppercase tracking-wider font-serif">Critical Acclaim</span>
              </div>
              <div className="border-x border-slate-800">
                <span className="font-serif text-gold-300 text-base font-bold block">2019</span>
                <span className="text-[10px] text-slate-400 uppercase tracking-wider font-serif">Vintage Year</span>
              </div>
              <div>
                <span className="font-serif text-gold-300 text-base font-bold block">14 Mos</span>
                <span className="text-[10px] text-slate-400 uppercase tracking-wider font-serif">French Oak</span>
              </div>
            </div>

            {/* Format Selection (Glass vs Bottle) */}
            <div className="space-y-3 pt-2">
              <span className="text-xs uppercase font-serif tracking-widest text-slate-400 block">
                Select Service Format
              </span>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setFormat('bottle')}
                  className={`p-3.5 rounded-xl border text-left transition ${
                    format === 'bottle'
                      ? 'bg-gold-500/15 border-gold-400 text-white'
                      : 'bg-[#050e17] border-slate-800 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-serif text-xs font-bold uppercase text-gold-300">Full Bottle (750ml)</span>
                    <span className="font-serif text-xs font-bold text-white">300 $</span>
                  </div>
                  <span className="text-[10px] text-slate-400 block">Sommelier table decanter service</span>
                </button>

                <button
                  type="button"
                  onClick={() => setFormat('glass')}
                  className={`p-3.5 rounded-xl border text-left transition ${
                    format === 'glass'
                      ? 'bg-gold-500/15 border-gold-400 text-white'
                      : 'bg-[#050e17] border-slate-800 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-serif text-xs font-bold uppercase text-gold-300">By The Glass (150ml)</span>
                    <span className="font-serif text-xs font-bold text-white">60 $</span>
                  </div>
                  <span className="text-[10px] text-slate-400 block">Poured via Coravin preservation</span>
                </button>
              </div>
            </div>

            {/* Fish Harmony Note */}
            <div className="p-4 rounded-xl bg-[#050e17] border border-gold-500/20 flex items-start space-x-3 text-xs">
              <Sparkles className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-serif text-gold-300 uppercase tracking-wider block font-semibold">
                  Culinary Harmony at SEACLUB
                </span>
                <p className="text-slate-300 font-light mt-0.5">
                  Tignanello's balanced acidity cuts exquisitely through the rich fat of our Wood-Fired Mediterranean Branzino and complements Dressed Oysters.
                </p>
              </div>
            </div>

            {/* Order Controls */}
            <div className="pt-2 flex items-center space-x-4">
              {/* Quantity Counter */}
              <div className="flex items-center border border-slate-700 rounded-lg bg-[#050e17] px-2 py-1">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-2 py-1 text-slate-400 hover:text-white font-serif text-base"
                >
                  −
                </button>
                <span className="px-3 font-serif text-sm font-bold text-white">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-2 py-1 text-slate-400 hover:text-white font-serif text-base"
                >
                  +
                </button>
              </div>

              {/* Add to Ticket Button */}
              <button
                onClick={handleAdd}
                className="flex-1 py-3.5 px-6 bg-gradient-to-r from-gold-600 to-gold-500 hover:from-gold-500 hover:to-gold-400 text-slate-950 font-serif text-xs font-bold tracking-[0.2em] uppercase transition duration-300 shadow-xl flex items-center justify-center space-x-2 rounded-lg active:scale-95"
              >
                {added ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Added to Order Ticket!</span>
                  </>
                ) : (
                  <>
                    <Plus className="w-4 h-4" />
                    <span>Add to Ticket • ${currentTotal.toFixed(2)}</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right Column: Visual Composition */}
          <div className="lg:col-span-7 order-1 lg:order-2 relative">
            <div className="relative rounded-3xl overflow-hidden border border-gold-500/30 shadow-2xl bg-[#050e17] group">
              <img
                src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=85"
                alt="Tenuta Tignanello 2019 Bottle & Decanter"
                className="w-full h-[480px] sm:h-[540px] object-cover group-hover:scale-105 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071421] via-transparent to-transparent opacity-80" />

              {/* Real HTML Tag matching the visual reference */}
              <div className="absolute top-6 right-6 bg-[#091b2c]/90 backdrop-blur-md border border-gold-500/40 p-5 rounded-2xl shadow-2xl text-right">
                <span className="font-serif text-white text-xl sm:text-2xl tracking-wide block">
                  Tignanello
                </span>
                <div className="w-14 h-0.5 bg-gold-400 my-2 ml-auto" />
                <span className="font-serif text-gold-300 text-lg sm:text-xl font-bold block">
                  300 $
                </span>
              </div>

              {/* Bottom Inset: Allocation Info */}
              <div className="absolute bottom-6 left-6 right-6 p-4 sm:p-5 bg-[#091b2c]/95 backdrop-blur-md rounded-2xl border border-slate-700 flex items-center justify-between gap-4">
                <div className="flex items-center space-x-3">
                  <Wine className="w-5 h-5 text-gold-400 shrink-0" />
                  <div>
                    <span className="text-xs font-serif uppercase tracking-widest text-gold-300 block">
                      Marchesi Antinori • Toscana IGT
                    </span>
                    <span className="text-[11px] text-slate-300 font-light">
                      Cellar storage at 15.5°C • Decanted 45 minutes prior to table service
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => onOpenDishDetail && onOpenDishDetail({
                    id: 'dish-10',
                    name: 'Tignanello Toscana IGT 2019',
                    price: 300.0,
                    category: 'Fine Wine Cellar',
                    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80',
                    description: 'Legendary Super Tuscan masterpiece crafted from Sangiovese, Cabernet Sauvignon, and Cabernet Franc.',
                    pairingWine: 'Pairs with Dressed Oysters, Tuna Tartare & Wood-Fired Branzino'
                  })}
                  className="hidden sm:inline-flex items-center space-x-1 text-xs font-serif text-gold-300 hover:text-white transition whitespace-nowrap"
                >
                  <Info className="w-3.5 h-3.5" />
                  <span>Vintage Sheet</span>
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
