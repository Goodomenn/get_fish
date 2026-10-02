import React from 'react';
import { ShoppingBag, Calendar, ExternalLink } from 'lucide-react';

export default function Hero({
  onOpenMenu,
  onOpenDish,
  onOpenBookTable,
  onOpenCart,
  cartCount,
  onNavigate
}) {
  const handleNav = (target) => {
    if (onNavigate) {
      onNavigate(target);
    } else if (target === 'menu' && onOpenMenu) {
      onOpenMenu();
    }
  };

  return (
    <section className="relative w-full bg-[#050e17] overflow-hidden select-none">
      {/* Container maintaining the exact 1024:685 aspect ratio with zero distortion */}
      <div className="relative w-full max-w-[1536px] mx-auto aspect-[1024/685] bg-[#071421] shadow-2xl">
        {/* High-Resolution Pristine Hero Canvas */}
        <img
          src="/hero-hd.jpg"
          alt="SEACLUB Fish Restaurant - Delicious food and fine wine"
          className="w-full h-full object-contain object-center block"
          style={{ imageRendering: '-webkit-optimize-contrast' }}
        />

        {/* ========================================================================= */}
        {/* INTERACTIVE HOTSPOTS OVER THE EXACT DESIGN COORDINATES                    */}
        {/* ========================================================================= */}

        {/* 1. SEACLUB Logo (Top Left) -> Go to Home */}
        <button
          onClick={() => {
            handleNav('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="absolute left-[2.5%] top-[2.5%] w-[13%] h-[7%] rounded-lg hover:bg-gold-500/10 transition cursor-pointer z-20"
          title="SEACLUB Home"
          aria-label="SEACLUB Home"
        />

        {/* 2. Top Nav: Menu */}
        <button
          onClick={() => handleNav('menu')}
          className="absolute left-[30.2%] top-[3.2%] w-[6%] h-[6%] rounded-lg hover:bg-gold-500/15 transition cursor-pointer z-20"
          title="Explore Restaurant Menu"
          aria-label="Menu"
        />

        {/* 3. Top Nav: About */}
        <button
          onClick={() => handleNav('about')}
          className="absolute left-[37.2%] top-[3.2%] w-[6%] h-[6%] rounded-lg hover:bg-gold-500/15 transition cursor-pointer z-20"
          title="About SEACLUB Fish Restaurant"
          aria-label="About"
        />

        {/* 4. Top Nav: Events */}
        <button
          onClick={() => handleNav('events')}
          className="absolute left-[44.8%] top-[3.2%] w-[6.5%] h-[6%] rounded-lg hover:bg-gold-500/15 transition cursor-pointer z-20"
          title="Gastronomic Events & Masterclasses"
          aria-label="Events"
        />

        {/* 5. Top Nav: Contacts */}
        <button
          onClick={() => handleNav('contacts')}
          className="absolute left-[52.5%] top-[3.2%] w-[7.8%] h-[6%] rounded-lg hover:bg-gold-500/15 transition cursor-pointer z-20"
          title="Location & Valet Contacts"
          aria-label="Contacts"
        />

        {/* 6. Top Nav: Book a Table (Top Right) */}
        <button
          onClick={onOpenBookTable}
          className="absolute right-[2.8%] top-[2.8%] w-[15%] h-[7%] rounded-lg hover:bg-gold-500/20 transition cursor-pointer z-20 group"
          title="Book a Table at SEACLUB"
          aria-label="Book a Table"
        >
          <span className="sr-only">Book a Table</span>
          <span className="opacity-0 group-hover:opacity-100 absolute -bottom-5 right-0 text-[10px] text-gold-300 font-serif tracking-widest uppercase transition whitespace-nowrap bg-black/80 px-2 py-0.5 rounded">
            Click to Reserve
          </span>
        </button>

        {/* 7. Menu Button (Outlined Rectangle on Left) */}
        <button
          onClick={() => handleNav('menu')}
          className="absolute left-[11.8%] top-[57.6%] w-[14.2%] h-[6.5%] rounded-md hover:bg-gold-500/20 hover:border hover:border-gold-300/60 transition cursor-pointer z-20 group"
          title="Browse Full Menu"
          aria-label="Menu Button"
        >
          <span className="sr-only">Menu</span>
        </button>

        {/* 8. Dressed Oysters Platter & Price Label */}
        {/* Platter hotspot */}
        <div
          onClick={() => onOpenDish('dish-1')}
          className="absolute left-[50%] top-[20%] w-[38%] h-[53%] rounded-full hover:ring-2 hover:ring-gold-400/40 transition cursor-pointer z-20 group"
          title="View Dressed Oysters Platter"
        >
          <span className="opacity-0 group-hover:opacity-100 absolute top-4 left-1/2 -translate-x-1/2 bg-black/85 border border-gold-500/40 text-gold-300 px-3 py-1 rounded-full text-xs font-serif tracking-wider uppercase transition shadow-xl pointer-events-none whitespace-nowrap">
            Dressed Fine de Claire • 25 $
          </span>
        </div>

        {/* Dressed Oysters Text Label hotspot */}
        <div
          onClick={() => onOpenDish('dish-1')}
          className="absolute left-[47%] top-[68.5%] w-[13.5%] h-[8%] rounded-lg hover:bg-gold-500/15 transition cursor-pointer z-20 group"
          title="Dressed Oysters (25 $)"
        >
          <span className="sr-only">Dressed Oysters 25 $</span>
        </div>

        {/* 9. Tignanello Wine Bottle & Price Label */}
        <div
          onClick={() => onOpenDish('dish-10')}
          className="absolute right-[1.5%] top-[34%] w-[18%] h-[58%] rounded-2xl hover:ring-2 hover:ring-gold-400/40 transition cursor-pointer z-20 group"
          title="View Tignanello 2019 (300 $)"
        >
          <span className="opacity-0 group-hover:opacity-100 absolute bottom-12 left-1/2 -translate-x-1/2 bg-black/85 border border-gold-500/40 text-gold-300 px-3 py-1 rounded-full text-xs font-serif tracking-wider uppercase transition shadow-xl pointer-events-none whitespace-nowrap">
            Tignanello 2019 • 300 $
          </span>
        </div>

        {/* Tignanello Label hotspot */}
        <div
          onClick={() => onOpenDish('dish-10')}
          className="absolute right-[19%] top-[81%] w-[11.5%] h-[9%] rounded-lg hover:bg-gold-500/15 transition cursor-pointer z-20 group"
          title="Tignanello 300 $"
        >
          <span className="sr-only">Tignanello 300 $</span>
        </div>

        {/* 10. Bottom Left Dish (Squid Ink Pasta with Prawns) */}
        <div
          onClick={() => onOpenDish('dish-7')}
          className="absolute left-[0%] bottom-[0%] w-[17%] h-[26%] rounded-tr-3xl hover:ring-2 hover:ring-gold-400/40 transition cursor-pointer z-20 group"
          title="Squid Ink Tagliolini with Scallops & Colossal Prawns (36 $)"
        >
          <span className="opacity-0 group-hover:opacity-100 absolute top-4 left-6 bg-black/85 border border-gold-500/40 text-gold-300 px-3 py-1 rounded-full text-xs font-serif tracking-wider uppercase transition shadow-xl pointer-events-none whitespace-nowrap">
            Squid Ink Tagliolini • 36 $
          </span>
        </div>
      </div>

      {/* Floating Action Controls on Top Right for quick cart & reservation */}
      <div className="fixed top-6 right-6 z-50 flex items-center space-x-3">
        {/* Table Booking Quick Pill */}
        <button
          onClick={onOpenBookTable}
          className="hidden sm:inline-flex items-center space-x-2 bg-[#091b2c]/90 hover:bg-[#091b2c] border border-gold-500/50 hover:border-gold-300 text-gold-200 px-4 py-2 rounded-full text-xs font-serif tracking-widest uppercase transition shadow-xl backdrop-blur-md active:scale-95"
        >
          <Calendar className="w-3.5 h-3.5 text-gold-400" />
          <span>Book a Table</span>
        </button>

        {/* Cart Quick Pill */}
        <button
          onClick={onOpenCart}
          className="relative inline-flex items-center space-x-2 bg-gradient-to-r from-gold-600 to-gold-500 hover:from-gold-500 hover:to-gold-400 text-slate-950 px-4 py-2 rounded-full text-xs font-serif font-bold tracking-widest uppercase transition shadow-xl active:scale-95"
          title="View Order Ticket"
        >
          <ShoppingBag className="w-4 h-4" />
          <span>Ticket</span>
          {cartCount > 0 && (
            <span className="w-4 h-4 rounded-full bg-slate-950 text-gold-300 text-[10px] font-bold flex items-center justify-center -mr-1">
              {cartCount}
            </span>
          )}
        </button>

        {/* Admin Link */}
        <a
          href="http://localhost:5174"
          target="_blank"
          rel="noreferrer"
          className="p-2 rounded-full bg-[#071421]/90 border border-slate-700 hover:border-gold-400 text-slate-300 hover:text-gold-300 transition shadow-lg backdrop-blur-md"
          title="Open Admin Management Portal"
        >
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </section>
  );
}
