import React from 'react';
import { Fish, Flame, Sparkles, MapPin, Calendar, BookOpen, ArrowRight, ShieldCheck, Award } from 'lucide-react';

export default function AboutSection({ onOpenBookTable, onNavigate }) {
  const handleNav = (target) => {
    if (onNavigate) {
      onNavigate(target);
    } else {
      const el = document.getElementById(target);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-24 sm:py-32 bg-[#050e17] text-slate-100 relative overflow-hidden border-t border-slate-800">
      {/* Background Subtle Ambience */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-950/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gold-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative space-y-24">
        
        {/* ========================================================================= */}
        {/* 1. OUR STORY                                                              */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Gallery of Fish Cooking Techniques */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Primary Featured Image: Tender fire-grilled catch */}
              <div className="relative rounded-3xl overflow-hidden border border-gold-500/30 shadow-2xl group">
                <img
                  src="https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=900&q=85"
                  alt="Tender Fire-Grilled Fresh Fish"
                  className="w-full h-[460px] object-cover group-hover:scale-105 transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050e17] via-transparent to-transparent opacity-80" />
                
                {/* Floating Tag */}
                <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#091b2c]/90 backdrop-blur-md rounded-2xl border border-gold-500/30 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Flame className="w-5 h-5 text-gold-400 shrink-0" />
                    <div>
                      <span className="font-serif text-gold-300 text-sm font-semibold uppercase tracking-wider block">
                        Undivided Attention
                      </span>
                      <span className="text-[11px] text-slate-300 font-light">
                        Single-craft kitchen honoring daily wild catches
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Secondary Inset Photo: Golden-fried & artisanal techniques */}
              <div className="hidden sm:block absolute -top-8 -right-8 w-48 h-48 rounded-2xl overflow-hidden border border-gold-400/40 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=400&q=80"
                  alt="Crisp and blackened fish cuts"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <span className="font-serif italic text-gold-300 text-lg sm:text-xl tracking-wider block">
              dedicated to one craft
            </span>

            <h2 className="font-serif text-3xl sm:text-5xl text-white tracking-tight uppercase leading-[1.1]">
              OUR STORY
            </h2>

            <div className="w-16 h-0.5 bg-gold-400" />

            <p className="text-slate-200 text-base sm:text-lg leading-relaxed font-light">
              When we opened our doors, we had one clear vision: to celebrate the pure, unmatched flavor of fresh fish.
            </p>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
              By dedicating our entire kitchen to this single craft, we are able to give every single filet our undivided attention. 
              We source the best daily catches and treat them with the respect they deserve. 
              Whether you’re craving a crispy, golden-fried basket, a boldly spiced blackened cut, or a tender, fire-grilled catch, 
              you are getting a meal prepared by true experts.
            </p>

            {/* Preparation Styles Highlights */}
            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-slate-800">
              <div className="p-3 bg-[#071421] rounded-xl border border-slate-800/80">
                <span className="font-serif text-xs font-bold text-gold-300 uppercase block mb-1">Golden-Fried</span>
                <p className="text-[11px] text-slate-400 font-light leading-snug">Crispy, light, and perfectly textured</p>
              </div>
              <div className="p-3 bg-[#071421] rounded-xl border border-slate-800/80">
                <span className="font-serif text-xs font-bold text-gold-300 uppercase block mb-1">Blackened Cut</span>
                <p className="text-[11px] text-slate-400 font-light leading-snug">Boldly spiced with vibrant coastal heat</p>
              </div>
              <div className="p-3 bg-[#071421] rounded-xl border border-slate-800/80">
                <span className="font-serif text-xs font-bold text-gold-300 uppercase block mb-1">Fire-Grilled</span>
                <p className="text-[11px] text-slate-400 font-light leading-snug">Tender, flame-kissed with fresh citrus</p>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 2. THE STANDARD WE SET                                                    */}
        {/* ========================================================================= */}
        <div className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="font-serif italic text-gold-300 text-lg tracking-wider">
              unwavering quality
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight uppercase">
              THE STANDARD WE SET
            </h3>
            <div className="w-16 h-0.5 bg-gold-400 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Standard 1: The Freshest Catch */}
            <div className="bg-[#071421] border border-slate-800 hover:border-gold-500/40 rounded-2xl p-8 space-y-4 flex flex-col justify-between transition duration-300 group hover:-translate-y-1 shadow-xl">
              <div className="space-y-4">
                <h4 className="font-serif text-xl text-white group-hover:text-gold-300 transition">
                  The Freshest Catch
                </h4>
                <div className="w-10 h-0.5 bg-gold-400/60" />
                <p className="text-slate-300 text-xs sm:text-sm font-light leading-relaxed">
                  We partner directly with trusted sources to ensure that the fish on your plate is impeccably fresh, day in and day out.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-800 text-[11px] font-serif text-gold-300/80 uppercase tracking-widest">
                Daily Source Verification
              </div>
            </div>

            {/* Standard 2: Uncompromised Technique */}
            <div className="bg-[#071421] border border-slate-800 hover:border-gold-500/40 rounded-2xl p-8 space-y-4 flex flex-col justify-between transition duration-300 group hover:-translate-y-1 shadow-xl">
              <div className="space-y-4">
                <h4 className="font-serif text-xl text-white group-hover:text-gold-300 transition">
                  Uncompromised Technique
                </h4>
                <div className="w-10 h-0.5 bg-gold-400/60" />
                <p className="text-slate-300 text-xs sm:text-sm font-light leading-relaxed">
                  Every species has its own unique texture and flavor profile. Our chefs use the exact cooking method designed to elevate that specific cut, never relying on a one-size-fits-all approach.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-800 text-[11px] font-serif text-gold-300/80 uppercase tracking-widest">
                Species-Specific Craft
              </div>
            </div>

            {/* Standard 3: Bold, Clean Flavors */}
            <div className="bg-[#071421] border border-slate-800 hover:border-gold-500/40 rounded-2xl p-8 space-y-4 flex flex-col justify-between transition duration-300 group hover:-translate-y-1 shadow-xl">
              <div className="space-y-4">
                <h4 className="font-serif text-xl text-white group-hover:text-gold-300 transition">
                  Bold, Clean Flavors
                </h4>
                <div className="w-10 h-0.5 bg-gold-400/60" />
                <p className="text-slate-300 text-xs sm:text-sm font-light leading-relaxed">
                  We believe high-quality fish doesn’t need to be hidden. We use bright, simple, and clean ingredients to let the natural flavor of the catch shine through.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-800 text-[11px] font-serif text-gold-300/80 uppercase tracking-widest">
                Pure Oceanic Taste
              </div>
            </div>

          </div>
        </div>

        {/* ========================================================================= */}
        {/* 3. JOIN US AT THE TABLE                                                   */}
        {/* ========================================================================= */}
        <div className="rounded-3xl bg-gradient-to-r from-[#091b2c] via-[#071421] to-[#091b2c] border border-gold-500/30 p-8 sm:p-14 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            <div className="lg:col-span-8 space-y-4 text-center lg:text-left">
              <span className="font-serif italic text-gold-300 text-lg tracking-wider block">
                welcome to our dining room
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight uppercase">
                JOIN US AT THE TABLE
              </h3>
              <div className="w-16 h-0.5 bg-gold-400 mx-auto lg:mx-0" />
              <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed max-w-2xl">
                Whether you are a lifelong fish enthusiast looking for the perfect filet or simply in the mood for an unforgettable meal, 
                there is a seat for you here. Come see what happens when a kitchen dedicates itself to doing one thing flawlessly.
              </p>
            </div>

            {/* 3 Requested Interactive Action Buttons */}
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              {/* [View Our Menu] */}
              <button
                onClick={() => handleNav('menu')}
                className="w-full py-3.5 px-6 bg-gold-500 hover:bg-gold-400 text-slate-950 font-serif text-xs font-bold tracking-[0.2em] uppercase transition duration-300 shadow-xl flex items-center justify-center space-x-2 rounded-lg cursor-pointer active:scale-95"
              >
                <BookOpen className="w-4 h-4" />
                <span>View Our Menu</span>
              </button>

              {/* [Book a Table] */}
              <button
                onClick={onOpenBookTable}
                className="w-full py-3.5 px-6 bg-transparent hover:bg-gold-500/15 border border-gold-400/80 hover:border-gold-300 text-gold-300 hover:text-white font-serif text-xs font-semibold tracking-[0.2em] uppercase transition duration-300 rounded-lg flex items-center justify-center space-x-2 cursor-pointer active:scale-95"
              >
                <Calendar className="w-4 h-4" />
                <span>Book a Table</span>
              </button>

              {/* [Get Directions] */}
              <button
                onClick={() => handleNav('contacts')}
                className="w-full py-3.5 px-6 bg-[#050e17]/80 hover:bg-[#050e17] border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white font-serif text-xs tracking-[0.2em] uppercase transition duration-300 rounded-lg flex items-center justify-center space-x-2 cursor-pointer active:scale-95"
              >
                <MapPin className="w-4 h-4 text-gold-400" />
                <span>Get Directions</span>
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
