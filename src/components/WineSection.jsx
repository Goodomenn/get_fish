import React from 'react';
import { Wine, Award, Plus, Sparkles, Check } from 'lucide-react';

export default function WineSection({ onAddToCart, onOpenDishDetail }) {
  const featuredWines = [
    {
      id: 'dish-10',
      name: 'Tignanello Toscana IGT 2019',
      producer: 'Marchesi Antinori • Toscana',
      price: 300.00,
      badge: 'Sommelier Reserve 98pts',
      image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=600&q=80',
      notes: 'Velvety cherries, dark plums, French oak spices. Pairs sublime with Dressed Oysters and Wood-Fired Fish.'
    },
    {
      id: 'dish-11',
      name: 'Chablis Grand Cru Les Clos 2020',
      producer: 'Domaine Christian Moreau • Burgundy',
      price: 185.00,
      badge: 'Iconic Mineral White',
      image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=600&q=80',
      notes: 'Pristine kimmeridgian limestone minerality, citrus blossom, and saline crispness tailored for raw bar oysters.'
    },
    {
      id: 'dish-12',
      name: 'Dom Pérignon Vintage Champagne 2013',
      producer: 'Moët & Chandon • Épernay',
      price: 350.00,
      badge: 'Prestige Cuvée',
      image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=600&q=80',
      notes: 'Silky effervescence with candied citrus, mirabelle plum and toasted brioche. The supreme celebration accompaniment.'
    }
  ];

  return (
    <section className="py-24 bg-[#050d16] text-slate-100 border-t border-slate-800/80 relative overflow-hidden w-full">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="font-serif italic text-gold-300 text-xl tracking-wider block">
              the cellar allocation
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl text-white tracking-tight uppercase mt-1">
              CURATED WINE PAIRINGS
            </h2>
          </div>
          <p className="text-xs text-slate-400 max-w-md font-light">
            Our sommelier curates over 1,200 bottles spanning old-world Grand Crus and rare Super Tuscans stored in our temperature-controlled harbor vault.
          </p>
        </div>

        {/* 3 Wine Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredWines.map((wine) => (
            <div
              key={wine.id}
              className="bg-[#091928] border border-slate-800 hover:border-gold-500/40 rounded-2xl p-6 flex flex-col justify-between space-y-6 transition-all duration-300 hover:shadow-xl"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-serif uppercase tracking-widest text-gold-400 bg-gold-500/10 px-2.5 py-1 rounded-full border border-gold-500/30">
                    {wine.badge}
                  </span>
                  <Wine className="w-4 h-4 text-gold-400" />
                </div>

                <div>
                  <h3 className="font-serif text-2xl text-white font-medium">{wine.name}</h3>
                  <p className="text-xs text-slate-400 font-serif italic mt-0.5">{wine.producer}</p>
                </div>

                <p className="text-xs text-slate-300/80 font-light leading-relaxed">
                  {wine.notes}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase text-slate-400 block">Cellar Bottle</span>
                  <span className="font-serif text-2xl text-gold-300 font-bold">{wine.price} $</span>
                </div>

                <button
                  onClick={() => onAddToCart(wine)}
                  className="inline-flex items-center space-x-1.5 px-4 py-2 border border-gold-400/50 hover:border-gold-300 text-gold-200 hover:text-white rounded-lg text-xs font-serif tracking-widest uppercase transition bg-[#071421]/60 hover:bg-gold-500/20"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Pair with Meal</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
