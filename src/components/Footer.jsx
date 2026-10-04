import React from 'react';
import {
  Fish,
  Wine,
  MapPin,
  Phone,
  Mail,
  Clock,
  ExternalLink,
  ArrowRight,
  ShieldCheck,
  Compass,
  Navigation
} from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export default function Footer({ onOpenBookTable, onNavigate }) {
  const handleNav = (page) => {
    if (onNavigate) {
      onNavigate(page);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#030910] text-slate-300 border-t border-slate-800/80 relative overflow-hidden select-none">
      {/* Subtle Background Ambience Glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-950/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold-600/5 rounded-full blur-3xl pointer-events-none" />

      {/* 1. Interactive Harbor Map & Docking Section */}
      <div className="border-b border-slate-800/80 bg-[#050e17] relative">
        {/* Top Header Strip */}
        <div className="max-w-7xl mx-auto px-6 sm:px-10 py-6 border-b border-slate-800/60">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center space-x-2 text-gold-400 font-serif text-xs uppercase tracking-widest">
                <Compass className="w-3.5 h-3.5 text-gold-400" />
                <span>Harbor Coordinates • 37°47'28"N 122°23'19"W</span>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl text-white tracking-wide uppercase">
                Find Us on the Waterfront
              </h3>
              <p className="text-xs text-slate-400 font-light">
                {RESTAURANT_INFO.address} • Yacht Tender Slip 4B • Marina Gate 2 Valet
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(RESTAURANT_INFO.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-5 py-2.5 bg-gradient-to-r from-gold-600 to-gold-500 hover:from-gold-500 hover:to-gold-400 text-slate-950 font-serif font-bold text-xs uppercase tracking-wider rounded-xl transition shadow-lg cursor-pointer active:scale-95"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Get Directions</span>
                <ExternalLink className="w-3 h-3 ml-0.5 opacity-80" />
              </a>

              <a
                href={`tel:${RESTAURANT_INFO.phone}`}
                className="inline-flex items-center space-x-2 px-4 py-2.5 bg-[#091b2c] hover:bg-[#0c2338] border border-slate-700 hover:border-gold-500/50 text-slate-200 hover:text-gold-300 font-serif text-xs uppercase tracking-wider rounded-xl transition"
              >
                <Phone className="w-3.5 h-3.5 text-gold-400" />
                <span>Concierge Desk</span>
              </a>
            </div>
          </div>
        </div>

        {/* Map Container with Dark Stylized Map and Interactive Glassmorphism Overlay */}
        <div className="relative w-full h-[320px] sm:h-[380px] md:h-[420px] bg-[#07131f] overflow-hidden">
          {/* Embedded Map */}
          <iframe
            title="SEACLUB Harbor Location Map"
            src="https://maps.google.com/maps?q=Pier%2024%20The%20Embarcadero%20San%20Francisco%20CA&t=&z=15&ie=UTF8&iwloc=&output=embed"
            className="w-full h-full border-0 filter invert-[92%] hue-rotate-180 contrast-[1.15] brightness-[0.82] opacity-85 hover:opacity-100 transition-opacity duration-300"
            loading="lazy"
            allowFullScreen=""
            referrerPolicy="no-referrer-when-downgrade"
          />

          {/* Floating Glassmorphism Location Card (Overlay) */}
          <div className="absolute top-4 left-4 sm:top-6 sm:left-10 z-10 max-w-sm pointer-events-auto">
            <div className="bg-[#050e17]/92 backdrop-blur-md border border-gold-500/30 p-5 rounded-2xl shadow-2xl space-y-3">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-300 font-serif text-[10px] uppercase tracking-widest">
                  <MapPin className="w-3 h-3 text-gold-400" />
                  <span>Harbor Front Pier 24</span>
                </span>
                <span className="text-[10px] text-emerald-400 font-mono tracking-wider flex items-center space-x-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse inline-block mr-1"></span>
                  OPEN FOR DINNER
                </span>
              </div>

              <div>
                <h4 className="font-serif text-base text-white font-bold tracking-wide">
                  SEACLUB Restaurant & Cellar
                </h4>
                <p className="text-xs text-slate-300 font-light mt-0.5">
                  Pier 24 Marina Blvd, Harbor View Harbor
                </p>
              </div>

              <div className="pt-2 border-t border-slate-800/80 space-y-1.5 text-[11px] text-slate-400">
                <div className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-400"></span>
                  <span><strong>Arriving by Car:</strong> Complimentary Valet at Gate 2</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-400"></span>
                  <span><strong>Arriving by Yacht:</strong> Tender Slip 4B (VHF Ch. 68)</span>
                </div>
              </div>

              <div className="pt-2 flex items-center gap-2">
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(RESTAURANT_INFO.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center py-2 bg-gradient-to-r from-gold-600 to-gold-500 hover:from-gold-500 hover:to-gold-400 text-slate-950 font-serif font-bold text-[11px] uppercase tracking-wider rounded-lg transition shadow cursor-pointer"
                >
                  Navigate Here
                </a>
                <button
                  onClick={onOpenBookTable}
                  className="px-3 py-2 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 text-gold-300 font-serif text-[11px] uppercase tracking-wider rounded-lg transition cursor-pointer"
                >
                  Reserve Table
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Map Status Strip */}
          <div className="absolute bottom-2 right-4 z-10 hidden sm:flex items-center space-x-3 px-3 py-1 bg-[#050e17]/80 backdrop-blur-sm border border-slate-800 rounded-lg text-[10px] text-slate-400 font-mono">
            <span>Waterfront Dock Slip 4B</span>
            <span>•</span>
            <span>Harbor View San Francisco</span>
          </div>
        </div>
      </div>

      {/* 2. Main Footer Multi-Column Grid */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Column 1: Brand Identity & Reservations CTA (4 cols) */}
          <div className="lg:col-span-4 space-y-5 text-center md:text-left">
            <div className="space-y-1">
              <button
                onClick={() => handleNav('home')}
                className="font-serif tracking-[0.28em] text-2xl sm:text-3xl font-bold uppercase text-white hover:text-gold-300 transition cursor-pointer"
              >
                SEACLUB
              </button>
              <span className="font-serif italic text-gold-300 text-sm block">
                seafood + wine
              </span>
            </div>

            <p className="text-xs text-slate-400 font-light leading-relaxed max-w-sm mx-auto md:mx-0">
              When we opened our doors, we had one clear vision: to celebrate the pure, unmatched flavor of fresh fish. Every filet receives our undivided attention, paired alongside legendary wines on the harbor.
            </p>

            {/* Quick Action Button & Concierge */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <button
                onClick={onOpenBookTable}
                className="inline-flex items-center space-x-2 px-5 py-2.5 bg-gradient-to-r from-gold-600 to-gold-500 hover:from-gold-500 hover:to-gold-400 text-slate-950 font-serif font-bold text-xs uppercase tracking-widest rounded-xl transition shadow-lg cursor-pointer"
              >
                <span>Book a Table</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <div className="text-left">
                <span className="text-[10px] text-slate-400 uppercase tracking-widest font-serif block">Concierge Desk</span>
                <a
                  href={`tel:${RESTAURANT_INFO.phone}`}
                  className="text-xs text-gold-300 hover:text-white font-serif tracking-wider transition"
                >
                  {RESTAURANT_INFO.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Gastronomy & Menus (3 cols) */}
          <div className="lg:col-span-3 space-y-4 text-center md:text-left">
            <h4 className="font-serif text-sm font-semibold uppercase tracking-[0.2em] text-white flex items-center justify-center md:justify-start space-x-2">
              <Fish className="w-3.5 h-3.5 text-gold-400" />
              <span>Gastronomy</span>
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400 font-light">
              <li>
                <button
                  onClick={() => handleNav('menu')}
                  className="hover:text-gold-300 transition cursor-pointer flex items-center justify-center md:justify-start space-x-1.5 mx-auto md:mx-0"
                >
                  <span>Wild Day-Boat Catches</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('menu')}
                  className="hover:text-gold-300 transition cursor-pointer flex items-center justify-center md:justify-start space-x-1.5 mx-auto md:mx-0"
                >
                  <span>Raw Bar & Dressed Oysters</span>
                  <span className="text-[10px] text-gold-400 font-serif italic">(25 $)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('menu')}
                  className="hover:text-gold-300 transition cursor-pointer flex items-center justify-center md:justify-start space-x-1.5 mx-auto md:mx-0"
                >
                  <span>Wood-Fired Mediterranean Branzino</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('menu')}
                  className="hover:text-gold-300 transition cursor-pointer flex items-center justify-center md:justify-start space-x-1.5 mx-auto md:mx-0"
                >
                  <span>Squid Ink Tagliolini Pasta</span>
                  <span className="text-[10px] text-gold-400 font-serif italic">(36 $)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('wine')}
                  className="hover:text-gold-300 transition cursor-pointer flex items-center justify-center md:justify-start space-x-1.5 mx-auto md:mx-0"
                >
                  <span>Tignanello & Super Tuscans</span>
                  <span className="text-[10px] text-gold-400 font-serif italic">(300 $)</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Navigation & Experiences (2 cols) */}
          <div className="lg:col-span-2 space-y-4 text-center md:text-left">
            <h4 className="font-serif text-sm font-semibold uppercase tracking-[0.2em] text-white flex items-center justify-center md:justify-start space-x-2">
              <Compass className="w-3.5 h-3.5 text-gold-400" />
              <span>Explore</span>
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400 font-light">
              <li>
                <button onClick={() => handleNav('home')} className="hover:text-gold-300 transition cursor-pointer">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('menu')} className="hover:text-gold-300 transition cursor-pointer">
                  Fish Menu
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('wine')} className="hover:text-gold-300 transition cursor-pointer">
                  Wine Cellar
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-gold-300 transition cursor-pointer">
                  Our Story
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('events')} className="hover:text-gold-300 transition cursor-pointer">
                  Events & Galas
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('contacts')} className="hover:text-gold-300 transition cursor-pointer">
                  Contacts & Hours
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Harbor Location & Hours (3 cols) */}
          <div className="lg:col-span-3 space-y-4 text-center md:text-left">
            <h4 className="font-serif text-sm font-semibold uppercase tracking-[0.2em] text-white flex items-center justify-center md:justify-start space-x-2">
              <MapPin className="w-3.5 h-3.5 text-gold-400" />
              <span>Harbor Location</span>
            </h4>
            
            <div className="space-y-2.5 text-xs text-slate-400 font-light">
              <p className="text-slate-200 font-medium">
                {RESTAURANT_INFO.address}
              </p>
              <p className="text-[11px] text-slate-400">
                Pier 24 Private Slip • Complimentary Valet
              </p>

              <div className="pt-2 border-t border-slate-800/80 space-y-1 text-[11px]">
                <div className="flex items-center justify-center md:justify-start space-x-1.5 text-gold-400/90 font-serif uppercase tracking-wider">
                  <Clock className="w-3 h-3" />
                  <span>Service Hours</span>
                </div>
                <p>{RESTAURANT_INFO.hours.lunch}</p>
                <p>{RESTAURANT_INFO.hours.dinner}</p>
                <p className="text-gold-300/80 italic">{RESTAURANT_INFO.hours.rawBar}</p>
              </div>

              <div className="pt-2">
                <a
                  href={`mailto:${RESTAURANT_INFO.email}`}
                  className="text-slate-300 hover:text-gold-300 transition inline-flex items-center space-x-1.5 text-[11px]"
                >
                  <Mail className="w-3 h-3 text-gold-400" />
                  <span>{RESTAURANT_INFO.email}</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* 3. Bottom Legal, Accreditations & Admin Strip */}
      <div className="border-t border-slate-900 bg-[#02060b]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 py-6 flex flex-col md:flex-row items-center justify-between text-slate-500 text-[11px] gap-4">
          <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-4 text-center sm:text-left">
            <p>© {new Date().getFullYear()} SEACLUB Fish Restaurant & Wine Cellar. All rights reserved.</p>
            <span className="hidden sm:inline text-slate-700">•</span>
            <span className="font-serif italic text-slate-400">Delicious food and fine wine on the harbor.</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-5 text-slate-400">
            <span className="flex items-center space-x-1 text-slate-500">
              <ShieldCheck className="w-3.5 h-3.5 text-gold-400/80" />
              <span>100% Day-Boat Certified</span>
            </span>
            <span className="text-slate-700">•</span>
            <button
              onClick={() => handleNav('contacts')}
              className="hover:text-gold-300 transition cursor-pointer"
            >
              Directions
            </button>
            <span className="text-slate-700">•</span>
            <a
              href="http://localhost:5174"
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-gold-300 transition inline-flex items-center space-x-1 cursor-pointer"
              title="Staff Management Portal"
            >
              <span>Admin Portal</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
