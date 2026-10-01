import React from 'react';
import { ShieldCheck, Snowflake, Clock, Sparkles, ArrowRight, Anchor, Award } from 'lucide-react';

export default function Hero({ onExploreClick, onOpenTracker }) {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-ocean-950 via-ocean-900 to-slate-900 text-white py-16 sm:py-24">
      {/* Background Graphic Patterns */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <defs>
            <pattern id="ocean-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M0 20 Q 10 10, 20 20 T 40 20" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#ocean-pattern)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Hero Text */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 bg-ocean-500/20 border border-ocean-400/30 text-ocean-200 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
              <span>Harbor-Fresh Seafood Guaranteed</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]">
              Wild-Caught & Ocean-Fresh Seafood,{' '}
              <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-ocean-400 bg-clip-text text-transparent">
                Delivered in 2 Hours.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed mx-auto lg:mx-0">
              Skip the grocery store seafood counter. We source directly from day-boat fishermen, 
              custom fillet to your specifications for free, and deliver ice-packed at 0°C to preserve 
              restaurant-grade sashimi quality and ocean sweetness.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#catalog"
                onClick={onExploreClick}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-ocean-500 to-cyan-500 hover:from-ocean-600 hover:to-cyan-600 text-white font-bold px-8 py-3.5 rounded-full shadow-lg shadow-ocean-500/30 hover:shadow-ocean-500/50 transition-all duration-200 active:scale-95"
              >
                <span>Shop Today's Catch</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              <button
                onClick={onOpenTracker}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-slate-800/80 hover:bg-slate-700/80 text-slate-200 hover:text-white font-semibold px-6 py-3.5 rounded-full border border-slate-700 transition active:scale-95"
              >
                <Anchor className="w-4 h-4 text-cyan-400" />
                <span>Track Active Order</span>
              </button>
            </div>

            {/* Quick Benefits Ticker */}
            <div className="pt-6 grid grid-cols-3 gap-3 border-t border-slate-800/80 text-left">
              <div className="flex items-start space-x-2.5">
                <div className="p-2 rounded-lg bg-ocean-500/10 text-cyan-400 border border-ocean-500/20">
                  <Snowflake className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">Sub-Zero Chilled</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Gel-ice boxes at 0–2°C</p>
                </div>
              </div>

              <div className="flex items-start space-x-2.5">
                <div className="p-2 rounded-lg bg-ocean-500/10 text-cyan-400 border border-ocean-500/20">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">Under 2 Hours</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Fast local cold-delivery</p>
                </div>
              </div>

              <div className="flex items-start space-x-2.5">
                <div className="p-2 rounded-lg bg-ocean-500/10 text-cyan-400 border border-ocean-500/20">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">100% Guaranteed</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Free replacement or refund</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Showcase Feature Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-ocean-500 to-cyan-400 rounded-3xl blur-xl opacity-30 group-hover:opacity-100 transition duration-1000"></div>

              <div className="relative rounded-2xl overflow-hidden bg-slate-800/90 border border-slate-700/80 shadow-2xl">
                {/* Hero Showcase Image */}
                <div className="relative h-64 sm:h-72 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80"
                    alt="Wild Alaskan King Salmon"
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>

                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center space-x-1.5 bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                      <span>Arrived 45 mins ago</span>
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                    <div>
                      <span className="text-cyan-400 text-xs font-bold uppercase tracking-wider">Catch of the Day</span>
                      <h3 className="text-xl font-bold text-white">Wild Alaskan King Salmon</h3>
                      <p className="text-xs text-slate-300">Bristol Bay • Sashimi Grade Cut</p>
                    </div>
                    <div className="text-right">
                      <span className="text-xs text-slate-400 line-through">$39.99</span>
                      <div className="text-2xl font-extrabold text-cyan-300">$34.99<span className="text-xs text-slate-300 font-normal">/kg</span></div>
                    </div>
                  </div>
                </div>

                {/* Highlights List */}
                <div className="p-5 space-y-3 bg-slate-850">
                  <div className="flex items-center justify-between text-xs py-1 border-b border-slate-700/50">
                    <span className="text-slate-400">Omega-3 Healthy Fats:</span>
                    <span className="text-white font-semibold">2,500 mg / 100g</span>
                  </div>
                  <div className="flex items-center justify-between text-xs py-1 border-b border-slate-700/50">
                    <span className="text-slate-400">Fillet Preference:</span>
                    <span className="text-cyan-300 font-semibold">Skin-on, Steaks or Sashimi</span>
                  </div>
                  <div className="flex items-center justify-between text-xs py-1">
                    <span className="text-slate-400">Live Cold-Storage:</span>
                    <span className="text-emerald-400 font-semibold flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-400"></span> 28 kg remaining in stock
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
