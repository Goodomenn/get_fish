import React from 'react';
import Hero from './Hero';
import DressedOystersSection from './DressedOystersSection';
import TignanelloSection from './TignanelloSection';
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
  Plus
} from 'lucide-react';
import { RESTAURANT_DISHES, RESTAURANT_INFO } from '../data/restaurantData';

export default function HomePage({
  onOpenMenu,
  onOpenDish,
  onAddToCart,
  onOpenBookTable,
  onOpenCart,
  cartCount,
  onNavigate
}) {
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
        onNavigate={onNavigate}
      />

      {/* 2. DEDICATED SECTION: Dressed Oysters (25 $) */}
      <DressedOystersSection
        onAddToCart={onAddToCart}
        onOpenDishDetail={onOpenDish}
      />

      {/* 3. DEDICATED SECTION: Tignanello 2019 (300 $) */}
      <TignanelloSection
        onAddToCart={onAddToCart}
        onOpenDishDetail={onOpenDish}
      />

      {/* 4. WELCOME & CULINARY HERITAGE */}
      <section className="py-20 sm:py-28 bg-[#050e17] relative overflow-hidden border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Visual Column */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden border border-gold-500/30 shadow-2xl group">
                <img
                  src="https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=900&q=80"
                  alt="SEACLUB Master Fish Craft"
                  className="w-full h-[460px] object-cover group-hover:scale-105 transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050e17] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-6 left-6 right-6 p-5 bg-[#091b2c]/90 backdrop-blur-md rounded-2xl border border-gold-500/30">
                  <div className="flex items-center space-x-2 text-gold-400 text-xs font-serif uppercase tracking-widest mb-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Wild Atlantic Line-Caught</span>
                  </div>
                  <p className="text-xs text-slate-300 font-light leading-relaxed">
                    Harvested at dawn by our partner day-boats, inspected by master fishmongers, and prepared table-side every evening.
                  </p>
                </div>
              </div>
            </div>

            {/* Narrative Column */}
            <div className="lg:col-span-6 space-y-6">
              <span className="font-serif italic text-gold-300 text-lg sm:text-xl tracking-wider block">
                welcome to seaclub
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight uppercase leading-[1.15]">
                A TEMPLE TO WILD SEA FISH & VINTAGE HARMONY
              </h2>

              <div className="w-16 h-0.5 bg-gold-500/70" />

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                At SEACLUB, we celebrate the pure elegance of deep-sea gastronomy. We do not compromise: 
                every whole fish, raw oyster, and seafood pasta is crafted exclusively from certified sustainable, 
                wild-caught oceanic fish, never farmed.
              </p>

              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-light">
                From our raw bar shucking pristine Fine de Claire oysters to our 800° wood-fired oven caramelizing 
                Mediterranean branzino, each dish is paired alongside allocations from our sommelier cellar, 
                including iconic Super Tuscans like Tignanello 2019 and mineral Grand Cru Chablis.
              </p>

              {/* 4 Pillars Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-slate-800">
                <div className="space-y-1">
                  <span className="font-serif text-2xl text-gold-300 font-bold block">100%</span>
                  <p className="text-[11px] text-slate-400 uppercase tracking-wider font-serif">Wild Day-Boat</p>
                </div>
                <div className="space-y-1">
                  <span className="font-serif text-2xl text-gold-300 font-bold block">450+</span>
                  <p className="text-[11px] text-slate-400 uppercase tracking-wider font-serif">Cellar Bottles</p>
                </div>
                <div className="space-y-1">
                  <span className="font-serif text-2xl text-gold-300 font-bold block">800°</span>
                  <p className="text-[11px] text-slate-400 uppercase tracking-wider font-serif">Wood Stone Fire</p>
                </div>
                <div className="space-y-1">
                  <span className="font-serif text-2xl text-gold-300 font-bold block">4</span>
                  <p className="text-[11px] text-slate-400 uppercase tracking-wider font-serif">Dining Salons</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onOpenBookTable()}
                  className="px-7 py-3.5 bg-gradient-to-r from-gold-600 to-gold-500 hover:from-gold-500 hover:to-gold-400 text-slate-950 font-serif text-xs font-bold tracking-[0.2em] uppercase transition duration-300 shadow-xl"
                >
                  Reserve A Table
                </button>
                <button
                  onClick={() => onNavigate('menu')}
                  className="px-7 py-3.5 border border-gold-500/60 hover:border-gold-300 text-gold-200 hover:text-white font-serif text-xs tracking-[0.2em] uppercase transition duration-300 bg-[#091b2c]/60"
                >
                  Explore Full Menu →
                </button>
              </div>
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

      {/* 7. DAY-BOAT SOURCING TIMELINE */}
      <section className="py-20 bg-[#071421] border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <div className="text-center max-w-xl mx-auto mb-14 space-y-3">
            <span className="font-serif italic text-gold-300 text-lg tracking-wider">
              the journey of freshness
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-white tracking-tight uppercase">
              OCEAN TO PLATE IN 12 HOURS
            </h2>
            <div className="w-16 h-0.5 bg-gold-500/70 mx-auto" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-[#050e17] border border-slate-800/80 rounded-2xl space-y-3">
              <span className="text-gold-400 font-serif text-2xl font-bold block">04:30 AM</span>
              <h4 className="font-serif text-sm uppercase text-white">Dawn Day-Boat Harvest</h4>
              <p className="text-xs text-slate-400 font-light leading-relaxed">
                Certified sustainable coastal fishermen land line-caught branzino, Dover sole, and Atlantic tuna.
              </p>
            </div>

            <div className="p-6 bg-[#050e17] border border-slate-800/80 rounded-2xl space-y-3">
              <span className="text-gold-400 font-serif text-2xl font-bold block">08:00 AM</span>
              <h4 className="font-serif text-sm uppercase text-white">Fishmonger Inspection</h4>
              <p className="text-xs text-slate-400 font-light leading-relaxed">
                Executive Chef Antoine Laurent personally examines gill clarity, ocean fragrance, and skin elasticity.
              </p>
            </div>

            <div className="p-6 bg-[#050e17] border border-slate-800/80 rounded-2xl space-y-3">
              <span className="text-gold-400 font-serif text-2xl font-bold block">11:30 AM</span>
              <h4 className="font-serif text-sm uppercase text-white">Cold-Chain Prep</h4>
              <p className="text-xs text-slate-400 font-light leading-relaxed">
                Raw bar beds are layered with glacier ice; whole fishes are dry-aged or prepped for 800° wood stone fire.
              </p>
            </div>

            <div className="p-6 bg-[#050e17] border border-slate-800/80 rounded-2xl space-y-3">
              <span className="text-gold-400 font-serif text-2xl font-bold block">18:00 PM</span>
              <h4 className="font-serif text-sm uppercase text-white">Table-Side Service</h4>
              <p className="text-xs text-slate-400 font-light leading-relaxed">
                Dover sole is filleted table-side, oysters are freshly shucked, and chilled grand crus are poured.
              </p>
            </div>
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

      {/* 9. FAST TABLE RESERVATION CTA */}
      <section className="py-20 bg-gradient-to-b from-[#071421] to-[#050e17] border-t border-slate-800 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 relative z-10 space-y-6">
          <span className="font-serif italic text-gold-300 text-xl tracking-wider block">
            an unforgettable evening awaits
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-white uppercase tracking-tight">
            RESERVE YOUR TABLE AT SEACLUB
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm font-light max-w-xl mx-auto leading-relaxed">
            Due to our reliance on morning day-boat catches, seating is limited each evening. 
            We recommend reserving your table at least 24 hours in advance.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onOpenBookTable()}
              className="px-10 py-4 bg-gradient-to-r from-gold-600 to-gold-500 hover:from-gold-500 hover:to-gold-400 text-slate-950 font-serif text-xs font-bold tracking-[0.25em] uppercase transition duration-300 shadow-2xl active:scale-95"
            >
              Book A Table Now
            </button>
            <button
              onClick={() => onNavigate('contacts')}
              className="px-8 py-4 border border-gold-500/50 hover:border-gold-300 text-gold-200 hover:text-white font-serif text-xs tracking-[0.2em] uppercase transition bg-[#091b2c]/80"
            >
              Location & Yacht Mooring →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
