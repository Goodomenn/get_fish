import React, { useState, useEffect } from 'react';
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
  ChevronLeft,
  ShieldCheck,
  MapPin,
  ArrowRight,
  Plus,
  BookOpen
} from 'lucide-react';
import { RESTAURANT_DISHES, RESTAURANT_INFO, RESTAURANT_BRANCHES, DEFAULT_SPOTS } from '../data/restaurantData';

export default function HomePage({
  onOpenMenu,
  onOpenDish,
  onAddToCart,
  onOpenBookTable,
  onOpenCart,
  cartCount,
  currentPage = 'home',
  onNavigate,
  spots = DEFAULT_SPOTS
}) {
  const handleBranchViewOnMap = (branchId) => {
    window.dispatchEvent(new CustomEvent('select-branch', { detail: { branchId } }));
    const el = document.getElementById('harbor-map');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Critic reviews data for "What the Critics Say"
  const criticReviews = [
    {
      id: 1,
      rating: 5,
      quote: "An extraordinary temple to wild oceanic fish. The wood-fired branzino and sommelier wine pairings set the gold standard on the harbor.",
      author: "Michelin Guide",
      tag: "2024 Gastronomic Selection"
    },
    {
      id: 2,
      rating: 5,
      quote: "The squid ink tagliolini and Fine de Claire oysters are unforgettable. Accompanied by a 2019 Tignanello, it was pure culinary poetry.",
      author: "The World's 50 Best",
      tag: "Discovery Choice"
    },
    {
      id: 3,
      rating: 5,
      quote: "Tableside Dover sole service executed with Parisian precision. The ocean terrace sunset view alone is worth the reservation.",
      author: "Le Figaro Gastronomie",
      tag: "Critic's Review"
    }
  ];

  // Mobile slideshow state with 5-second auto-advancing loop
  const [activeReviewIndex, setActiveReviewIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveReviewIndex((prev) => (prev + 1) % criticReviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [criticReviews.length]);

  // Curated Signature Dishes to display on the Home Page
  const featuredDishes = RESTAURANT_DISHES.filter(
    (d) => d.badge === "Chef's Masterpiece" || d.badge === 'Signature Platter' || d.badge === 'Best Seller' || d.id === 'dish-4' || d.id === 'dish-6' || d.id === 'dish-7'
  ).slice(0, 6);

  // Dining Spaces (Dynamically fetched from Database / Firestore)
  const atmospheres = Array.isArray(spots) && spots.length > 0 ? spots : DEFAULT_SPOTS;

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

      {/* Restaurant Locations Announcement Banner - Single Line */}
      <div className="bg-gradient-to-r from-[#030910] via-[#091b2c] to-[#030910] border-b border-slate-800/80 py-3.5 px-4 sm:px-8 overflow-x-auto no-scrollbar">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-6 whitespace-nowrap min-w-max md:min-w-0">
          <div className="text-xs sm:text-sm text-gold-300 font-serif tracking-wider uppercase shrink-0">
            <span>Welcoming Guests Across 2 Locations:</span>
          </div>
          <div className="flex items-center gap-4 sm:gap-6 text-xs text-slate-300 font-light shrink-0">
            {RESTAURANT_BRANCHES.map((b, idx) => (
              <React.Fragment key={b.id}>
                {idx > 0 && <span className="text-slate-600">•</span>}
                <button
                  type="button"
                  onClick={() => handleBranchViewOnMap(b.id)}
                  className="inline-flex items-center space-x-1.5 hover:text-gold-300 transition cursor-pointer"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-400 shrink-0"></span>
                  <strong className="text-white font-medium">{b.city.split(',')[0]}:</strong>
                  <span>{b.badge}</span>
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
                  <div className="text-gold-400 text-xs font-serif uppercase tracking-widest mb-1">
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
                <h4 className="font-serif text-base font-bold text-white uppercase">The Freshest Catch</h4>
                <p className="text-xs text-slate-300 font-light leading-relaxed">
                  We partner directly with trusted sources to ensure that the fish on your plate is impeccably fresh, day in and day out.
                </p>
              </div>

              <div className="bg-[#071421] border border-slate-800 rounded-2xl p-6 space-y-3 shadow-lg">
                <h4 className="font-serif text-base font-bold text-white uppercase">Uncompromised Technique</h4>
                <p className="text-xs text-slate-300 font-light leading-relaxed">
                  Every species has its own unique texture and flavor profile. Our chefs use the exact cooking method designed to elevate that specific cut, never relying on a one-size-fits-all approach.
                </p>
              </div>

              <div className="bg-[#071421] border border-slate-800 rounded-2xl p-6 space-y-3 shadow-lg">
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
                className="bg-[#050e17] border border-slate-800 hover:border-gold-500/50 rounded-2xl overflow-hidden transition-all duration-500 flex flex-col group hover:-translate-y-1 shadow-2xl relative"
              >
                {/* Circular Dish Plate Header Container */}
                <div
                  onClick={() => onOpenDish(dish)}
                  className="relative p-6 flex items-center justify-center cursor-pointer bg-gradient-to-b from-[#091b2c]/60 to-transparent overflow-hidden"
                >
                  {/* Subtle plate glow */}
                  <div className="w-48 h-48 sm:w-52 sm:h-52 rounded-full relative p-2 bg-gradient-to-br from-[#0e2742] via-[#081829] to-[#030911] border-4 border-[#071626] ring-1 ring-gold-500/35 shadow-[0_18px_40px_rgba(0,0,0,0.9),0_0_25px_rgba(212,175,55,0.12)] flex items-center justify-center transition-transform duration-700 group-hover:scale-105">
                    
                    {/* Inner plate image */}
                    <div className="w-full h-full rounded-full overflow-hidden relative shadow-inner bg-slate-900">
                      {dish.image ? (
                        <img
                          src={dish.image}
                          alt={dish.name}
                          className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-700 ease-out"
                        />
                      ) : (
                        <div className="w-full h-full rounded-full flex flex-col items-center justify-center bg-gradient-to-br from-[#0c233c] to-[#040e17] text-center p-3">
                          <span className="font-serif italic text-gold-300 text-xs">{dish.name}</span>
                        </div>
                      )}
                      {/* Glaze highlight */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-white/10 pointer-events-none rounded-full" />
                    </div>

                    {/* Attached Gold Price Badge (Reference Style) */}
                    <div className="absolute -right-3 top-1/2 -translate-y-1/2 z-20">
                      <div className="bg-gradient-to-r from-amber-400 via-amber-300 to-gold-400 text-slate-950 font-serif font-bold text-xs px-3 py-1 rounded shadow-xl tracking-wider border border-amber-200/90 whitespace-nowrap">
                        {typeof dish.price === 'number' ? dish.price.toLocaleString() : dish.price} ETB
                      </div>
                    </div>
                  </div>

                  {dish.badge && (
                    <span className="absolute top-4 left-4 bg-[#091b2c]/90 border border-gold-500/40 text-gold-300 px-3 py-1 rounded-full text-[10px] font-serif uppercase tracking-wider backdrop-blur-sm shadow">
                      {dish.badge}
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <span className="text-[11px] font-serif italic text-gold-400 block mb-1">
                      {dish.frenchName || dish.category}
                    </span>
                    <h3
                      onClick={() => onOpenDish(dish)}
                      className="font-serif text-lg sm:text-xl text-white group-hover:text-gold-300 transition cursor-pointer line-clamp-1"
                    >
                      {dish.name}
                    </h3>
                    <p className="text-xs text-slate-300/80 font-light mt-2 line-clamp-2 leading-relaxed">
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
                      className="flex-1 py-2.5 bg-gold-500 hover:bg-gold-400 text-slate-950 font-serif text-xs font-bold tracking-wider uppercase rounded-lg transition flex items-center justify-center space-x-1 shadow-md active:scale-95 cursor-pointer"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Add to Ticket</span>
                    </button>
                    <button
                      onClick={() => onOpenDish(dish)}
                      className="px-3.5 py-2.5 border border-slate-700 hover:border-gold-400 text-slate-300 hover:text-white rounded-lg text-xs font-serif transition cursor-pointer"
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

      {/* 7. OUR RESTAURANT LOCATIONS (BRANCHES) */}
      <section id="our-branches" className="py-24 bg-[#071421] border-t border-slate-800 relative overflow-hidden">
        {/* Subtle Ambient Glows */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold-600/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-950/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 sm:px-10 space-y-16 relative z-10">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="font-serif italic text-gold-300 text-lg tracking-wider block">
              የጌች ዓሳ ቅርንጫፎች • our locations
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight uppercase">
              OUR RESTAURANT LOCATIONS
            </h2>
            <div className="w-20 h-0.5 bg-gold-400 mx-auto" />
            <p className="text-slate-300 text-xs sm:text-sm font-light leading-relaxed">
              Experience the unmatched taste of fresh fish across our founding Lake Tana flagship in Bahir Dar and our signature capital city branch in Addis Ababa.
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

          {/* Desktop Grid Layout (Screens >= md) */}
          <div className="hidden md:grid md:grid-cols-3 gap-8">
            {criticReviews.map((review) => (
              <div key={review.id} className="p-8 rounded-2xl bg-[#071421] border border-slate-800 space-y-4">
                <div className="flex text-gold-400 space-x-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold-400" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-slate-300 italic font-light leading-relaxed">
                  "{review.quote}"
                </p>
                <div className="pt-2 border-t border-slate-800">
                  <span className="font-serif text-xs text-gold-300 uppercase tracking-widest block">
                    {review.author}
                  </span>
                  <span className="text-[10px] text-slate-400">
                    {review.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile / Phone Slideshow Layout (Screens < md) */}
          {/* Autoplays every 5 seconds, loops continuously, with gentle ease-in transition */}
          <div className="block md:hidden">
            <div className="relative min-h-[250px]">
              {criticReviews.map((review, idx) => {
                const isActive = idx === activeReviewIndex;
                return (
                  <div
                    key={review.id}
                    className={`transition-all duration-1000 ease-in-out transform ${
                      isActive
                        ? 'opacity-100 translate-y-0 scale-100 relative z-10 pointer-events-auto'
                        : 'opacity-0 translate-y-3 scale-[0.98] absolute inset-0 pointer-events-none'
                    }`}
                  >
                    <div className="p-7 rounded-2xl bg-[#071421] border border-slate-800 space-y-4 shadow-xl">
                      <div className="flex items-center justify-between">
                        <div className="flex text-gold-400 space-x-1">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-gold-400" />
                          ))}
                        </div>
                        <span className="text-[10px] font-mono text-gold-400/90 bg-gold-500/10 px-2.5 py-0.5 rounded-full border border-gold-500/20">
                          0{idx + 1} / 0{criticReviews.length}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-200 italic font-light leading-relaxed min-h-[70px]">
                        "{review.quote}"
                      </p>
                      <div className="pt-3 border-t border-slate-800">
                        <span className="font-serif text-xs text-gold-300 uppercase tracking-widest block">
                          {review.author}
                        </span>
                        <span className="text-[10px] text-slate-400">
                          {review.tag}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Mobile Slideshow Controls & 5s Loop Progress Dots */}
            <div className="flex items-center justify-center space-x-4 mt-6">
              <button
                onClick={() => setActiveReviewIndex((prev) => (prev - 1 + criticReviews.length) % criticReviews.length)}
                className="p-2 rounded-full bg-[#071421] border border-slate-800 text-slate-400 hover:text-gold-300 transition cursor-pointer"
                title="Previous Review"
                aria-label="Previous Review"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <div className="flex items-center space-x-2">
                {criticReviews.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveReviewIndex(idx)}
                    className={`h-1.5 rounded-full transition-all duration-700 cursor-pointer ${
                      idx === activeReviewIndex
                        ? 'w-7 bg-gold-400 shadow-[0_0_8px_rgba(204,162,81,0.5)]'
                        : 'w-2 bg-slate-700 hover:bg-slate-500'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={() => setActiveReviewIndex((prev) => (prev + 1) % criticReviews.length)}
                className="p-2 rounded-full bg-[#071421] border border-slate-800 text-slate-400 hover:text-gold-300 transition cursor-pointer"
                title="Next Review"
                aria-label="Next Review"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
