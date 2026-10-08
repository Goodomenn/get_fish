import React, { useState } from 'react';
import { Wine, Plus, Check, Info, Award, ShieldCheck } from 'lucide-react';

export default function DressedOystersSection({ onAddToCart, onOpenDishDetail }) {
  const [platterType, setPlatterType] = useState('half'); // 'half' (6 pcs, $25) or 'imperial' (12 pcs + caviar, $65)
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const pricePerUnit = platterType === 'half' ? 25.00 : 65.00;
  const currentTotal = pricePerUnit * quantity;

  const handleAdd = () => {
    const dishItem = {
      id: platterType === 'half' ? 'dish-1' : 'dish-1-imperial',
      name: platterType === 'half' ? 'Dressed Fine de Claire Oysters (Half Dozen)' : 'Grand Imperial Oyster & Caviar Platter (Dozen)',
      price: pricePerUnit,
      category: 'Raw Bar & Oysters',
      image: 'https://images.unsplash.com/photo-1559742811-82286364ceaf?auto=format&fit=crop&w=800&q=80',
      description: platterType === 'half'
        ? 'Freshly shucked premium French Atlantic oysters on crushed glacier ice with shallot-champagne mignonette and yuzu pearls.'
        : 'Twelve Fine de Claire oysters crowned with 10g Royal Oscietra caviar and gold leaf.',
      pairingWine: 'Chablis Grand Cru Les Clos 2020'
    };

    for (let i = 0; i < quantity; i++) {
      onAddToCart(dishItem);
    }

    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <section id="dressed-oysters" className="py-24 sm:py-32 bg-[#050e17] relative overflow-hidden border-t border-slate-800">
      {/* Background Subtle Gradient & Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-900/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Platter Composition */}
          <div className="lg:col-span-7 relative">
            <div className="relative rounded-3xl overflow-hidden border border-gold-500/30 shadow-2xl bg-[#071421] group">
              <img
                src="https://images.unsplash.com/photo-1559742811-82286364ceaf?auto=format&fit=crop&w=1200&q=85"
                alt="Dressed Fine de Claire Oysters Platter on Ice"
                className="w-full h-[480px] sm:h-[540px] object-cover group-hover:scale-105 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050e17] via-transparent to-transparent opacity-80" />

              {/* Real HTML Tag matching the visual reference */}
              <div className="absolute top-6 left-6 bg-[#071421]/90 backdrop-blur-md border border-gold-500/40 p-5 rounded-2xl shadow-2xl">
                <span className="font-serif text-white text-xl sm:text-2xl tracking-wide block">
                  Dressed Oysters
                </span>
                <div className="w-14 h-0.5 bg-gold-400 my-2" />
                <span className="font-serif text-gold-300 text-lg sm:text-xl font-bold block">
                  25 $
                </span>
              </div>

              {/* Bottom Inset: Sourcing Info */}
              <div className="absolute bottom-6 left-6 right-6 p-4 sm:p-5 bg-[#091b2c]/95 backdrop-blur-md rounded-2xl border border-slate-700 flex items-center justify-between gap-4">
                <div className="flex items-center space-x-3">
                  <Award className="w-5 h-5 text-gold-400 shrink-0" />
                  <div>
                    <span className="text-xs font-serif uppercase tracking-widest text-gold-300 block">
                      Fine de Claire No. 2
                    </span>
                    <span className="text-[11px] text-slate-300 font-light">
                      Marennes-Oléron Atlantic Basin, France • Shucked live to order
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => onOpenDishDetail && onOpenDishDetail({
                    id: 'dish-1',
                    name: 'Dressed Fine de Claire Oysters',
                    price: 25.0,
                    category: 'Raw Bar & Oysters',
                    image: 'https://images.unsplash.com/photo-1559742811-82286364ceaf?auto=format&fit=crop&w=800&q=80',
                    description: 'Freshly shucked premium French Atlantic oysters on crushed glacier ice with shallot-champagne mignonette and yuzu pearls.',
                    pairingWine: 'Chablis Grand Cru Les Clos 2020'
                  })}
                  className="hidden sm:inline-flex items-center space-x-1 text-xs font-serif text-gold-300 hover:text-white transition whitespace-nowrap"
                >
                  <Info className="w-3.5 h-3.5" />
                  <span>Culinary Notes</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative, Typography & Ordering */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="font-serif italic text-gold-300 text-lg tracking-wider block">
                raw bar signature
              </span>
              
              {/* REAL HTML Typography Header matching the uploaded image */}
              <h2 className="font-serif text-4xl sm:text-5xl text-white tracking-tight uppercase mt-1">
                DRESSED OYSTERS
              </h2>
              
              {/* Elegant Gold Divider Line */}
              <div className="w-16 h-0.5 bg-gold-400 my-3" />
              
              <div className="flex items-baseline space-x-3">
                <span className="font-serif text-3xl text-gold-300 font-bold">
                  25 $
                </span>
                <span className="text-xs text-slate-400 uppercase tracking-widest font-serif">
                  / Half Dozen Platter
                </span>
              </div>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed font-light">
              Plump, briny Fine de Claire oysters harvested from the French Atlantic coast, shucked moments before 
              reaching your table. Served over a mound of mountain glacier ice with our signature shallot and champagne 
              mignonette, Japanese yuzu citrus pearls, and freshly sliced Meyer lemons.
            </p>

            {/* Platter Size Selector */}
            <div className="space-y-3 pt-2">
              <span className="text-xs uppercase font-serif tracking-widest text-slate-400 block">
                Select Platter Size
              </span>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setPlatterType('half')}
                  className={`p-3.5 rounded-xl border text-left transition ${
                    platterType === 'half'
                      ? 'bg-gold-500/15 border-gold-400 text-white'
                      : 'bg-[#071421] border-slate-800 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-serif text-xs font-bold uppercase text-gold-300">Half Dozen (6 pcs)</span>
                    <span className="font-serif text-xs font-bold text-white">25 $</span>
                  </div>
                  <span className="text-[10px] text-slate-400 block">Classic ice platter with mignonette</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPlatterType('imperial')}
                  className={`p-3.5 rounded-xl border text-left transition ${
                    platterType === 'imperial'
                      ? 'bg-gold-500/15 border-gold-400 text-white'
                      : 'bg-[#071421] border-slate-800 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-serif text-xs font-bold uppercase text-gold-300">Imperial Dozen (12 pcs)</span>
                    <span className="font-serif text-xs font-bold text-white">65 $</span>
                  </div>
                  <span className="text-[10px] text-slate-400 block">Includes 10g Oscietra Caviar</span>
                </button>
              </div>
            </div>

            {/* Sommelier Pairing Highlight */}
            <div className="p-4 rounded-xl bg-[#071421] border border-gold-500/20 flex items-start space-x-3 text-xs">
              <Wine className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-serif text-gold-300 uppercase tracking-wider block font-semibold">
                  Recommended Sommelier Match
                </span>
                <p className="text-slate-300 font-light mt-0.5">
                  Chablis Grand Cru Les Clos 2020 or Tenuta Tignanello 2019. Crisp chalky minerality complements oceanic brininess.
                </p>
              </div>
            </div>

            {/* Order Controls */}
            <div className="pt-2 flex items-center space-x-4">
              {/* Quantity Counter */}
              <div className="flex items-center border border-slate-700 rounded-lg bg-[#071421] px-2 py-1">
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

        </div>
      </div>
    </section>
  );
}
