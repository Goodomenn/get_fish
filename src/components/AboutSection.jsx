import React from 'react';
import { Anchor, Sparkles, Flame, Wine, Compass } from 'lucide-react';

export default function AboutSection({ onOpenBookTable }) {
  return (
    <section id="about" className="py-24 sm:py-32 bg-[#071421] text-slate-100 relative overflow-hidden border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Composition */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              <div className="relative rounded-3xl overflow-hidden border border-gold-500/30 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80"
                  alt="SEACLUB Fish Culinary Craft"
                  className="w-full h-[450px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071421] via-transparent to-transparent"></div>
              </div>

              {/* Inset Badge */}
              <div className="absolute -bottom-6 -right-4 sm:right-6 bg-[#091b2c] border border-gold-400/50 p-6 rounded-2xl shadow-2xl max-w-xs">
                <span className="font-serif italic text-gold-300 text-lg block">Day-Boat Catch</span>
                <p className="text-xs text-slate-300 mt-1 font-light leading-relaxed">
                  Landed at dawn, filleted with artisanal reverence, served table-side by evening.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Philosophy */}
          <div className="lg:col-span-6 space-y-6">
            <span className="font-serif italic text-gold-300 text-xl tracking-wider block">
              the craft & terroir
            </span>

            <h2 className="font-serif text-4xl sm:text-5xl text-white tracking-tight uppercase leading-[1.1]">
              A TEMPLE TO WILD SEAFOOD & TIMELESS VINTAGES
            </h2>

            <div className="w-16 h-0.5 bg-gold-500/60"></div>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
              Founded on the principle of culinary purity, SEACLUB celebrates the wild bounty of pristine waters. 
              We work directly with certified sustainable day-boat fishermen who harvest in strict harmony with coastal tides.
            </p>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-light">
              From our raw bar shucking pristine Fine de Claire oysters to our 800° wood-fired oven roasting whole Mediterranean branzino, every dish is designed to harmonize with our sommelier’s rare cellar acquisitions.
            </p>

            {/* 3 Pillars */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-800">
              <div className="space-y-1">
                <span className="font-serif text-2xl text-gold-300 font-bold">100%</span>
                <p className="text-[11px] text-slate-400 uppercase tracking-wider font-serif">Wild & Fresh</p>
              </div>
              <div className="space-y-1">
                <span className="font-serif text-2xl text-gold-300 font-bold">1,200+</span>
                <p className="text-[11px] text-slate-400 uppercase tracking-wider font-serif">Cellar Bottles</p>
              </div>
              <div className="space-y-1">
                <span className="font-serif text-2xl text-gold-300 font-bold">800°</span>
                <p className="text-[11px] text-slate-400 uppercase tracking-wider font-serif">Wood Stone Fire</p>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenBookTable}
                className="inline-flex items-center space-x-2 px-8 py-3.5 border border-gold-400/80 hover:border-gold-300 text-gold-200 hover:text-white font-serif text-xs tracking-[0.2em] uppercase transition duration-300 bg-[#071421]/60 hover:bg-gold-500/10"
              >
                <span>Reserve An Evening</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
