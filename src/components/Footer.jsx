import React, { useState, useEffect } from 'react';
import {
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
import { RESTAURANT_INFO, RESTAURANT_BRANCHES } from '../data/restaurantData';

export default function Footer({ onOpenBookTable, onNavigate }) {
  const [selectedBranchId, setSelectedBranchId] = useState('pier-24');
  const activeBranch = RESTAURANT_BRANCHES.find(b => b.id === selectedBranchId) || RESTAURANT_BRANCHES[0];

  useEffect(() => {
    const handleSelectBranch = (e) => {
      if (e.detail && e.detail.branchId) {
        setSelectedBranchId(e.detail.branchId);
      }
    };
    window.addEventListener('select-branch', handleSelectBranch);
    return () => window.removeEventListener('select-branch', handleSelectBranch);
  }, []);

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

      {/* 1. Interactive Harbor Map & Docking Section with 3 Branches */}
      <div id="harbor-map" className="border-b border-slate-800/80 bg-[#050e17] relative">
        {/* Top Header Strip with 3 Branch Tabs */}
        <div className="max-w-7xl mx-auto px-6 sm:px-10 py-5 border-b border-slate-800/60">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center space-x-2 text-gold-400 font-serif text-xs uppercase tracking-widest">
                <Compass className="w-3.5 h-3.5 text-gold-400" />
                <span>3 Waterfront Flagships</span>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl text-white tracking-wide uppercase">
                Find Us on the Waterfront
              </h3>
            </div>

            {/* 3 Locations Switcher Tabs */}
            <div className="flex flex-wrap items-center gap-2">
              {RESTAURANT_BRANCHES.map((b) => {
                const isSelected = b.id === selectedBranchId;
                return (
                  <button
                    key={b.id}
                    onClick={() => setSelectedBranchId(b.id)}
                    className={`px-3.5 py-2 rounded-xl font-serif text-xs uppercase tracking-wider transition cursor-pointer flex items-center space-x-2 ${
                      isSelected
                        ? 'bg-gradient-to-r from-gold-600 to-gold-500 text-slate-950 font-bold shadow-lg ring-1 ring-gold-400'
                        : 'bg-[#091b2c] hover:bg-[#0e273f] text-slate-300 hover:text-white border border-slate-700/80'
                    }`}
                  >
                    <MapPin className={`w-3.5 h-3.5 ${isSelected ? 'text-slate-950' : 'text-gold-400'}`} />
                    <span>{b.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Map Container - 100% Clean & Unobstructed */}
        <div className="relative w-full h-[320px] sm:h-[380px] md:h-[440px] bg-[#07131f] overflow-hidden">
          {/* Embedded Map */}
          <iframe
            key={activeBranch.id}
            title={`${activeBranch.name} Location Map`}
            src={activeBranch.mapEmbedUrl}
            className="w-full h-full border-0 filter invert-[92%] hue-rotate-180 contrast-[1.15] brightness-[0.82] opacity-90 hover:opacity-100 transition-opacity duration-300"
            loading="lazy"
            allowFullScreen=""
            referrerPolicy="no-referrer-when-downgrade"
          />

          {/* Discreet live venue tag at bottom-right corner of map */}
          <div className="absolute bottom-3 right-4 z-10 hidden sm:flex items-center space-x-2 px-3 py-1 bg-[#050e17]/85 backdrop-blur-md border border-slate-800 rounded-lg text-[10px] text-slate-400 font-mono pointer-events-none">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400"></span>
            <span>{activeBranch.title}</span>
          </div>
        </div>

        {/* Bottom Location & Action Bar (At the bottom of the map) */}
        <div className="border-t border-slate-800/80 bg-[#050e17] py-5 sm:py-6">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 flex flex-col lg:flex-row items-center justify-between gap-6">
            
            {/* Left: Venue & Arrival Info */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4">
              <div className="w-12 h-12 rounded-2xl bg-gold-500/10 border border-gold-500/25 flex items-center justify-center text-gold-400 shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5">
                  <h4 className="font-serif text-base sm:text-lg text-white font-bold tracking-wide">
                    {activeBranch.title}
                  </h4>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-300 font-serif text-[10px] uppercase tracking-widest">
                    {activeBranch.badge}
                  </span>
                  <span className="text-[10px] text-emerald-400 font-mono tracking-wider flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse inline-block mr-1"></span>
                    OPEN FOR DINNER
                  </span>
                </div>
                <p className="text-xs text-slate-300 font-light">
                  {activeBranch.address}
                </p>
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-4 gap-y-1 text-[11px] text-slate-400 pt-0.5">
                  <span><strong>Arriving by Car:</strong> {activeBranch.arrival.car}</span>
                  <span className="hidden sm:inline text-slate-700">•</span>
                  <span><strong>Arriving by Yacht:</strong> {activeBranch.arrival.yacht}</span>
                </div>
              </div>
            </div>

            {/* Right: Navigate Here & Reserve Table Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3 shrink-0 w-full sm:w-auto">
              <a
                href={activeBranch.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-gold-600 to-gold-500 hover:from-gold-500 hover:to-gold-400 text-slate-950 font-serif font-bold text-xs uppercase tracking-wider rounded-xl transition duration-200 shadow-lg cursor-pointer active:scale-95"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Navigate to {activeBranch.name}</span>
                <ExternalLink className="w-3 h-3 ml-0.5 opacity-80" />
              </a>

              <button
                onClick={() => onOpenBookTable && onOpenBookTable(activeBranch.id)}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center space-x-2 px-6 py-3 bg-[#0a1c2e] hover:bg-[#0f2842] border border-gold-500/40 hover:border-gold-400 text-gold-300 hover:text-gold-200 font-serif font-bold text-xs uppercase tracking-wider rounded-xl transition duration-200 shadow-lg cursor-pointer active:scale-95"
              >
                <ArrowRight className="w-3.5 h-3.5" />
                <span>Reserve Table</span>
              </button>

              <a
                href={`tel:${activeBranch.phone}`}
                className="inline-flex items-center justify-center space-x-2 px-4 py-3 bg-slate-900/90 hover:bg-slate-800 border border-slate-700 hover:border-slate-600 text-slate-300 hover:text-white font-serif text-xs uppercase tracking-wider rounded-xl transition"
                title={`Call ${activeBranch.name} Concierge`}
              >
                <Phone className="w-3.5 h-3.5 text-gold-400" />
                <span className="hidden sm:inline">Concierge</span>
              </a>
            </div>

          </div>
        </div>
      </div>

      {/* 2. Main Footer Multi-Column Grid */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Column 1: Brand Identity & Reservations CTA (5 cols) */}
          <div className="lg:col-span-5 space-y-5 text-center md:text-left">
            <div className="space-y-1">
              <button
                onClick={() => handleNav('home')}
                className="flex items-center justify-center md:justify-start space-x-3 group cursor-pointer"
                title="Gech Fish Home"
              >
                <div className="w-11 h-11 rounded-full overflow-hidden border border-gold-400/50 bg-[#050e17] shrink-0 shadow-lg group-hover:scale-105 transition-transform">
                  <img
                    src="/gech-fish-logo.jpg"
                    alt="Gech Fish Logo"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="font-serif tracking-[0.2em] text-2xl sm:text-3xl font-bold uppercase text-white group-hover:text-gold-300 transition">
                  GECH FISH
                </span>
              </button>
              <span className="font-sans text-gold-300 text-xs tracking-wider block md:pl-14">
                ጌች አሳ • Fresh Fish & Seafood
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

          {/* Column 2: Navigation & Experiences (3 cols) */}
          <div className="lg:col-span-3 space-y-4 text-center md:text-left">
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

          {/* Column 3: Service Hours & Concierge (4 cols) */}
          <div className="lg:col-span-4 space-y-4 text-center md:text-left">
            <h4 className="font-serif text-sm font-semibold uppercase tracking-[0.2em] text-white flex items-center justify-center md:justify-start space-x-2">
              <Clock className="w-3.5 h-3.5 text-gold-400" />
              <span>Service Hours</span>
            </h4>
            
            <div className="space-y-3 text-xs text-slate-400 font-light">
              <div className="space-y-1.5">
                <span className="font-serif text-xs text-gold-300 uppercase tracking-wider block font-semibold">
                  {activeBranch.title}
                </span>
                <p className="text-slate-300 text-xs">{activeBranch.address}</p>
                <div className="pt-1.5 space-y-0.5 text-[11px] text-slate-400">
                  <p>{activeBranch.hours.lunch}</p>
                  <p>{activeBranch.hours.dinner}</p>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-800/80">
                <a
                  href={`mailto:${activeBranch.email || RESTAURANT_INFO.email}`}
                  className="text-slate-300 hover:text-gold-300 transition inline-flex items-center space-x-1.5 text-[11px]"
                >
                  <Mail className="w-3 h-3 text-gold-400" />
                  <span>{activeBranch.email || RESTAURANT_INFO.email}</span>
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
            <p>© {new Date().getFullYear()} Gech Fish Restaurant (ጌች አሳ). All rights reserved.</p>
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
