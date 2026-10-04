import React from 'react';
import Hero from './Hero';
import {
  Sparkles,
  Fish,
  Wine,
  Anchor,
  Clock,
  Compass,
  Star,
  Award,
  Calendar,
  ChevronRight,
  ShieldCheck,
  Flame,
  MapPin,
  ArrowRight,
  Plus,
  BookOpen
} from 'lucide-react';
import { RESTAURANT_DISHES, RESTAURANT_INFO, RESTAURANT_BRANCHES } from '../data/restaurantData';

export default function HomePage({
  onOpenMenu,
  onOpenDish,
  onAddToCart,
  onOpenBookTable,
  onOpenCart,
  cartCount,
  currentPage = 'home',
  onNavigate
}) {
  const handleBranchViewOnMap = (branchId) => {
    window.dispatchEvent(new CustomEvent('select-branch', { detail: { branchId } }));
    const el = document.getElementById('harbor-map');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Curated Signature Dishes to display on the Home Page
  const featuredDishes = RESTAURANT_DISHES.filter(
    (d) => d.badge === "Chef's Masterpiece" || d.badge === 'Signature Platter' || d.badge === 'Best Seller' || d.id === 'dish-4' || d.id === 'dish-6' || d.id === 'dish-7'
  ).slice(0, 6);

  // Dining Spaces
  const atmospheres = [
    {
      id: 'Ocean Terrace',
      title: 'The Ocean Terrace',
      tag: 'Sunset & Sea Breeze',
      description: 'Perched directly above the marina tides. Enjoy chilled crudo towers, crisp Chablis, and gentle ocean breezes under candlelit lanterns.',
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
      capacity: 'Up to 6 guests per table'
    },
    {
      id: 'Main Dining Salon',
      title: 'The Grand Marine Salon',
      tag: 'Dark Marble & Crystal',
      description: 'Our dramatic centerpiece hall featuring book-matched deep blue marble, bronze fixtures, plush leather seating, and grand table-side fish presentations.',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
      capacity: 'Romantic tables & banquet seating'
    },
    {
      id: "Chef's Counter",
      title: "The Chef's Raw Bar Counter",
      tag: 'Omakase & Shucking',
      description: 'An intimate, front-row gastronomic theater. Watch master sushi chefs and oyster shuckers prepare day-boat crudo and tartare live.',
      image: 'https://images.unsplash.com/photo-1579027989536-b7b1f875659b?auto=format&fit=crop&w=800&q=80',
      capacity: '10 exclusive bar seats'
    },
    {
      id: 'Private Wine Vault',
      title: 'The Private Wine Vault',
      tag: 'Sommelier Sanctuary',
      description: 'Surrounded by 1,200 bottles of Super Tuscans, Bordeaux, and vintage champagnes. Bespoke 7-course degustation menus tailored to your party.',
      image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80',
      capacity: 'Private bookings up to 16 guests'
    }
  ];

  return (
    <div className="w-full bg-[#050e17] text-slate-100">
      {/* 1. HERO BANNER: Real HTML text overlay on clean dark-marble & seafood canvas */}
      <Hero
        onOpenMenu={onOpenMenu}
        onOpenDish={onOpenDish}
        onOpenBookTable={() => onOpenBookTable()}
        onOpenCart={onOpenCart}
        cartCount={cartCount}
        currentPage={currentPage}
        onNavigate={onNavigate}
      />

      {/* 3 Waterfront Branches Announcement Banner */}
      <div className="bg-gradient-to-r from-[#030910] via-[#091b2c] to-[#030910] border-b border-slate-800/80 py-4 px-6 sm:px-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-3">
          <div className="flex items-center space-x-2 text-xs sm:text-sm text-gold-300 font-serif tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span>Welcoming Guests Across 3 Waterfront Destinations</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs text-slate-300 font-light">
            {RESTAURANT_BRANCHES.map((b, idx) => (
              <React.Fragment key={b.id}>
                {idx > 0 && <span className="hidden sm:inline text-slate-700">•</span>}
                <button
                  onClick={() => handleBranchViewOnMap(b.id)}
                  className="flex items-center space-x-1.5 hover:text-gold-300 transition cursor-pointer"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-400"></span>
                  <strong className="text-white font-medium">{b.city.split(',')[0]}:</strong>
                  <span>{b.name}</span>
                </button>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* 2. OUR STORY & THE STANDARD WE SET */}
      <section id="our-story" className="py-20 sm:py-28 bg-[#050e17] relative overflow-hidden border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Visual Column */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden border border-gold-500/30 shadow-2xl group">
                <img
                  src="https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=900&q=85"
                  alt="Tender Fire-Grilled Fresh Fish"
                  className="w-full h-[460px] object-cover group-hover:scale-105 transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050e17] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-6 left-6 right-6 p-4 sm:p-5 bg-[#091b2c]/90 backdrop-blur-md rounded-2xl border border-gold-500/30">
                  <div className="flex items-center space-x-2 text-gold-400 text-xs font-serif uppercase tracking-widest mb-1">
                    <Flame className="w-3.5 h-3.5" />
                    <span>Single-Craft Dedication</span>
                  </div>
                  <p className="text-xs text-slate-300 font-light leading-relaxed">
                    Every single filet given our kitchen's undivided attention, honoring the purest oceanic flavors.
                  </p>
                </div>
              </div>
            </div>

            {/* Narrative Column: Our Story */}
            <div className="lg:col-span-6 space-y-6">
              <span className="font-serif italic text-gold-300 text-lg sm:text-xl tracking-wider block">
                dedicated to one craft
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight uppercase leading-[1.15]">
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

              {/* 3 Preparation Highlights */}
              <div className="grid grid-cols-3 gap-3 pt-3 border-t border-slate-800">
                <div className="p-3 bg-[#071421] rounded-xl border border-slate-800/80">
                  <span className="font-serif text-xs font-bold text-gold-300 uppercase block mb-1">Golden-Fried</span>
                  <p className="text-[11px] text-slate-400 font-light leading-snug">Crispy, light, perfectly textured</p>
                </div>
                <div className="p-3 bg-[#071421] rounded-xl border border-slate-800/80">
                  <span className="font-serif text-xs font-bold text-gold-300 uppercase block mb-1">Blackened Cut</span>
                  <p className="text-[11px] text-slate-400 font-light leading-snug">Boldly spiced with coastal heat</p>
                </div>
                <div className="p-3 bg-[#071421] rounded-xl border border-slate-800/80">
                  <span className="font-serif text-xs font-bold text-gold-300 uppercase block mb-1">Fire-Grilled</span>
                  <p className="text-[11px] text-slate-400 font-light leading-snug">Tender, flame-kissed with citrus</p>
                </div>
              </div>
            </div>
          </div>

          {/* The Standard We Set Grid */}
          <div className="pt-8 border-t border-slate-800/80 space-y-8">
            <div className="text-center max-w-xl mx-auto space-y-2">
              <span className="font-serif italic text-gold-300 text-sm sm:text-base tracking-wider">our pillars</span>
              <h3 className="font-serif text-2xl sm:text-3xl text-white uppercase tracking-tight">THE STANDARD WE SET</h3>
              <div className="w-12 h-0.5 bg-gold-400 mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#071421] border border-slate-800 rounded-2xl p-6 space-y-3 shadow-lg">
                <div className="w-10 h-10 rounded-lg bg-gold-500/10 border border-gold-400/30 flex items-center justify-center text-gold-300">
                  <Fish className="w-5 h-5" />
                </div>
                <h4 className="font-serif text-base font-bold text-white uppercase">The Freshest Catch</h4>
                <p className="text-xs text-slate-300 font-light leading-relaxed">
                  We partner directly with trusted sources to ensure that the fish on your plate is impeccably fresh, day in and day out.
                </p>
              </div>

              <div className="bg-[#071421] border border-slate-800 rounded-2xl p-6 space-y-3 shadow-lg">
                <div className="w-10 h-10 rounded-lg bg-gold-500/10 border border-gold-400/30 flex items-center justify-center text-gold-300">
                  <Flame className="w-5 h-5" />
                </div>
                <h4 className="font-serif text-base font-bold text-white uppercase">Uncompromised Technique</h4>
                <p className="text-xs text-slate-300 font-light leading-relaxed">
                  Every species has its own unique texture and flavor profile. Our chefs use the exact cooking method designed to elevate that specific cut, never relying on a one-size-fits-all approach.
                </p>
              </div>

              <div className="bg-[#071421] border border-slate-800 rounded-2xl p-6 space-y-3 shadow-lg">
                <div className="w-10 h-10 rounded-lg bg-gold-500/10 border border-gold-400/30 flex items-center justify-center text-gold-300">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h4 className="font-serif text-base font-bold text-white uppercase">Bold, Clean Flavors</h4>
                <p className="text-xs text-slate-300 font-light leading-relaxed">
                  We believe high-quality fish doesn’t need to be hidden. We use bright, simple, and clean ingredients to let the natural flavor of the catch shine through.
                </p>
              </div>
            </div>
          </div>

          {/* Join Us at the Table Callout Box */}
          <div className="rounded-2xl bg-gradient-to-r from-[#091b2c] via-[#071421] to-[#091b2c] border border-gold-500/30 p-6 sm:p-10 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 text-center lg:text-left max-w-2xl">
              <span className="font-serif italic text-gold-300 text-sm tracking-wider block">a seat for you</span>
              <h3 className="font-serif text-2xl sm:text-3xl text-white uppercase tracking-tight">JOIN US AT THE TABLE</h3>
              <p className="text-slate-300 text-xs sm:text-sm font-light leading-relaxed">
                Whether you are a lifelong fish enthusiast looking for the perfect filet or simply in the mood for an unforgettable meal, 
                there is a seat for you here. Come see what happens when a kitchen dedicates itself to doing one thing flawlessly.
              </p>
            </div>

            {/* Requested 3 Action Buttons */}
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 w-full lg:w-auto shrink-0 justify-center">
              <button
                onClick={() => onNavigate('menu')}
                className="py-3 px-5 bg-gold-500 hover:bg-gold-400 text-slate-950 font-serif text-xs font-bold tracking-[0.15em] uppercase transition rounded-lg shadow-lg flex items-center space-x-1.5 cursor-pointer active:scale-95 whitespace-nowrap"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>View Our Menu</span>
              </button>

              <button
                onClick={() => onOpenBookTable()}
                className="py-3 px-5 border border-gold-400/80 hover:border-gold-300 text-gold-300 hover:text-white font-serif text-xs font-semibold tracking-[0.15em] uppercase transition rounded-lg bg-[#071421]/60 flex items-center space-x-1.5 cursor-pointer active:scale-95 whitespace-nowrap"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book a Table</span>
              </button>

              <button
                onClick={() => onNavigate('contacts')}
                className="py-3 px-5 border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white font-serif text-xs tracking-[0.15em] uppercase transition rounded-lg bg-[#050e17]/80 flex items-center space-x-1.5 cursor-pointer active:scale-95 whitespace-nowrap"
              >
                <MapPin className="w-3.5 h-3.5 text-gold-400" />
                <span>Get Directions</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CHEF'S SIGNATURE FISH SPECIALTIES */}
      <section className="py-24 bg-[#071421] relative border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
            <div>
              <span className="font-serif italic text-gold-300 text-lg tracking-wider block">
                the culinary collection
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight uppercase mt-1">
                CHEF'S SIGNATURE FISH SPECIALTIES
              </h2>
              <div className="w-16 h-0.5 bg-gold-500/70 mt-3" />
            </div>

            <button
              onClick={() => onNavigate('menu')}
              className="mt-6 md:mt-0 inline-flex items-center space-x-2 text-xs font-serif tracking-[0.2em] uppercase text-gold-300 hover:text-white border-b border-gold-500/60 pb-1 transition group"
            >
              <span>View All 20+ Creations</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
            </button>
          </div>

          {/* Dishes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredDishes.map((dish) => (
              <div
                key={dish.id}
                className="bg-[#050e17] border border-slate-800 hover:border-gold-500/50 rounded-2xl overflow-hidden transition-all duration-300 flex flex-col group hover:-translate-y-1 shadow-xl"
              >
                {/* Dish Photo */}
                <div
                  onClick={() => onOpenDish(dish)}
                  className="relative h-56 overflow-hidden cursor-pointer bg-slate-900"
                >
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050e17] via-transparent to-transparent opacity-80" />

                  {dish.badge && (
                    <span className="absolute top-3 left-3 bg-[#091b2c]/90 border border-gold-500/40 text-gold-300 px-3 py-1 rounded-full text-[10px] font-serif uppercase tracking-wider backdrop-blur-sm">
                      {dish.badge}
                    </span>
                  )}

                  <div className="absolute bottom-3 right-3 bg-black/80 border border-gold-400/40 text-gold-300 px-3 py-1 rounded-lg text-sm font-serif font-bold">
                    ${dish.price.toFixed(2)}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <span className="text-[11px] font-serif italic text-gold-400 block mb-1">
                      {dish.frenchName || dish.category}
                    </span>
                    <h3
                      onClick={() => onOpenDish(dish)}
                      className="font-serif text-lg text-white group-hover:text-gold-300 transition cursor-pointer line-clamp-1"
                    >
                      {dish.name}
                    </h3>
                    <p className="text-xs text-slate-400 font-light mt-2 line-clamp-2 leading-relaxed">
                      {dish.description}
                    </p>
                  </div>

                  {dish.pairingWine && (
                    <div className="bg-[#071421] p-2.5 rounded-lg border border-slate-800 text-[11px] text-slate-300 flex items-center space-x-2">
                      <Wine className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                      <span className="truncate italic">Pairing: {dish.pairingWine}</span>
                    </div>
                  )}

                  <div className="flex items-center space-x-3 pt-2">
                    <button
                      onClick={() => onAddToCart(dish)}
                      className="flex-1 py-2.5 bg-gold-500 hover:bg-gold-400 text-slate-950 font-serif text-xs font-bold tracking-wider uppercase rounded-lg transition flex items-center justify-center space-x-1 shadow-md active:scale-95"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Add to Ticket</span>
                    </button>
                    <button
                      onClick={() => onOpenDish(dish)}
                      className="px-3.5 py-2.5 border border-slate-700 hover:border-gold-400 text-slate-300 hover:text-white rounded-lg text-xs font-serif transition"
                    >
                      Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FOUR UNIQUE DINING SALONS */}
      <section className="py-24 bg-[#050e17] relative border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="font-serif italic text-gold-300 text-lg tracking-wider">
              curated environments
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight uppercase">
              FOUR UNIQUE DINING SALONS
            </h2>
            <div className="w-16 h-0.5 bg-gold-500/70 mx-auto" />
            <p className="text-xs sm:text-sm text-slate-400 font-light">
              From open-air harbor sunsets to private sommelier tastings, choose the setting that suits your occasion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {atmospheres.map((atm) => (
              <div
                key={atm.id}
                className="bg-[#071421] border border-slate-800 hover:border-gold-500/40 rounded-2xl overflow-hidden flex flex-col group transition duration-300 shadow-xl"
              >
                <div className="h-60 relative overflow-hidden">
                  <img
                    src={atm.image}
                    alt={atm.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071421] via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 bg-black/80 border border-gold-500/40 text-gold-300 px-3 py-1 rounded-full text-[10px] font-serif uppercase tracking-widest">
                    {atm.tag}
                  </span>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-serif text-xl text-white group-hover:text-gold-300 transition">
                      {atm.title}
                    </h3>
                    <p className="text-xs text-slate-300 font-light leading-relaxed">
                      {atm.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                    <span className="text-[11px] text-slate-400 font-serif">{atm.capacity}</span>
                    <button
                      onClick={() => onOpenBookTable(atm.id)}
                      className="text-xs font-serif text-gold-300 hover:text-white uppercase tracking-wider font-semibold hover:underline"
                    >
                      Reserve {atm.title} →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. OUR 3 WATERFRONT DESTINATIONS (BRANCHES) */}
      <section id="our-branches" className="py-24 bg-[#071421] border-t border-slate-800 relative overflow-hidden">
        {/* Subtle Ambient Glows */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold-600/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-950/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 sm:px-10 space-y-16 relative z-10">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="font-serif italic text-gold-300 text-lg tracking-wider block">
              coastal sanctuaries
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight uppercase">
              OUR 3 WATERFRONT DESTINATIONS
            </h2>
            <div className="w-20 h-0.5 bg-gold-400 mx-auto" />
            <p className="text-slate-300 text-xs sm:text-sm font-light leading-relaxed">
              Three premier waterfront sanctuaries along the California coast, each featuring private yacht moorings, day-boat seafood selections, and legendary cellar allocations.
            </p>
          </div>

          {/* 3 Branches in Column Order (Vertical Stack) */}
          <div className="space-y-10 max-w-5xl mx-auto">
            {RESTAURANT_BRANCHES.map((branch, idx) => (
              <div
                key={branch.id}
                className="bg-[#050e17] border border-slate-800/90 hover:border-gold-500/40 rounded-3xl overflow-hidden transition-all duration-300 group hover:-translate-y-1 shadow-2xl flex flex-col md:flex-row items-stretch"
              >
                {/* Branch Photo */}
                <div className="relative md:w-5/12 lg:w-1/2 min-h-[260px] sm:min-h-[300px] overflow-hidden">
                  <img
                    src={branch.image}
                    alt={branch.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-transparent via-[#050e17]/30 to-[#050e17] opacity-90" />
                  
                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="px-3 py-1 bg-[#050e17]/85 backdrop-blur-md border border-gold-500/40 text-gold-300 text-[10px] font-serif uppercase tracking-widest rounded-full font-bold">
                      {branch.badge}
                    </span>
                    <span className="px-2.5 py-1 bg-black/60 backdrop-blur-md text-slate-300 text-[10px] font-mono rounded-full">
                      Branch 0{idx + 1}
                    </span>
                  </div>

                  {/* City and Title overlay on small screens */}
                  <div className="absolute bottom-4 left-4 right-4 md:hidden">
                    <span className="text-xs text-gold-300 font-serif italic block">
                      {branch.city}
                    </span>
                    <h3 className="font-serif text-xl text-white font-bold tracking-wide uppercase">
                      {branch.name}
                    </h3>
                  </div>
                </div>

                {/* Branch Details & Actions */}
                <div className="p-6 sm:p-8 md:w-7/12 lg:w-1/2 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    {/* Header on medium/large screens */}
                    <div className="hidden md:block space-y-1">
                      <span className="text-xs text-gold-300 font-serif italic block">
                        {branch.city}
                      </span>
                      <h3 className="font-serif text-2xl lg:text-3xl text-white font-bold tracking-wide uppercase">
                        {branch.name}
                      </h3>
                      <p className="text-xs text-gold-400/80 font-serif tracking-wide">
                        {branch.tagline}
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                      {branch.description}
                    </p>

                    {/* Highlights Pills */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      {branch.highlights.map((h, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-md bg-[#091b2c] border border-slate-800 text-[11px] text-slate-300 font-serif"
                        >
                          {h}
                        </span>
                      ))}
                    </div>

                    {/* Address & Logistics Info */}
                    <div className="space-y-2 pt-4 border-t border-slate-800/80 text-xs text-slate-400 font-light">
                      <div className="flex items-start space-x-2">
                        <MapPin className="w-3.5 h-3.5 text-gold-400 shrink-0 mt-0.5" />
                        <span className="text-slate-200">{branch.address}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                        <span>Dinner Service: {branch.hours.dinner}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Anchor className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                        <span className="text-[11px]">{branch.arrival.yacht}</span>
                      </div>
                    </div>
                  </div>

                  {/* Card CTA Actions */}
                  <div className="pt-4 border-t border-slate-800/60 flex flex-wrap sm:flex-nowrap items-center gap-3">
                    <button
                      onClick={() => onOpenBookTable(branch.id)}
                      className="flex-1 py-3 bg-gradient-to-r from-gold-600 to-gold-500 hover:from-gold-500 hover:to-gold-400 text-slate-950 font-serif font-bold text-xs uppercase tracking-wider rounded-xl transition shadow-lg text-center cursor-pointer active:scale-95 whitespace-nowrap"
                    >
                      Reserve Table at {branch.name.split(' ')[0]}
                    </button>
                    <button
                      onClick={() => handleBranchViewOnMap(branch.id)}
                      className="px-5 py-3 bg-[#091b2c] hover:bg-[#0e273f] border border-slate-700 hover:border-gold-500/40 text-gold-300 hover:text-white font-serif text-xs uppercase tracking-wider rounded-xl transition text-center cursor-pointer whitespace-nowrap"
                      title="View this branch on the map"
                    >
                      View on Map
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Footer Anchor to Map */}
          <div className="text-center pt-4">
            <button
              onClick={() => {
                const el = document.getElementById('harbor-map');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center space-x-2 text-xs font-serif uppercase tracking-widest text-gold-300 hover:text-white transition cursor-pointer"
            >
              <span>Explore All 3 Branches on the Interactive Map</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* 8. CRITIC ACCLAIM */}
      <section className="py-20 bg-[#050e17] border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <div className="text-center max-w-xl mx-auto mb-14 space-y-2">
            <span className="font-serif italic text-gold-300 text-lg tracking-wider">acclaim</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-white tracking-tight uppercase">
              WHAT THE CRITICS SAY
            </h2>
            <div className="w-16 h-0.5 bg-gold-500/70 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-[#071421] border border-slate-800 space-y-4">
              <div className="flex text-gold-400 space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold-400" />
                ))}
              </div>
              <p className="text-xs sm:text-sm text-slate-300 italic font-light leading-relaxed">
                "An extraordinary temple to wild oceanic fish. The wood-fired branzino and sommelier wine pairings set the gold standard on the harbor."
              </p>
              <div className="pt-2 border-t border-slate-800">
                <span className="font-serif text-xs text-gold-300 uppercase tracking-widest block">Michelin Guide</span>
                <span className="text-[10px] text-slate-400">2024 Gastronomic Selection</span>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-[#071421] border border-slate-800 space-y-4">
              <div className="flex text-gold-400 space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold-400" />
                ))}
              </div>
              <p className="text-xs sm:text-sm text-slate-300 italic font-light leading-relaxed">
                "The squid ink tagliolini and Fine de Claire oysters are unforgettable. Accompanied by a 2019 Tignanello, it was pure culinary poetry."
              </p>
              <div className="pt-2 border-t border-slate-800">
                <span className="font-serif text-xs text-gold-300 uppercase tracking-widest block">The World's 50 Best</span>
                <span className="text-[10px] text-slate-400">Discovery Choice</span>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-[#071421] border border-slate-800 space-y-4">
              <div className="flex text-gold-400 space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold-400" />
                ))}
              </div>
              <p className="text-xs sm:text-sm text-slate-300 italic font-light leading-relaxed">
                "Tableside Dover sole service executed with Parisian precision. The ocean terrace sunset view alone is worth the reservation."
              </p>
              <div className="pt-2 border-t border-slate-800">
                <span className="font-serif text-xs text-gold-300 uppercase tracking-widest block">Le Figaro Gastronomie</span>
                <span className="text-[10px] text-slate-400">Critic's Review</span>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
