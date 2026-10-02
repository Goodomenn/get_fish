import React from 'react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { MapPin, Phone, Mail, Clock, ShieldCheck, Compass } from 'lucide-react';

export default function ContactsSection({ onOpenBookTable }) {
  return (
    <section id="contacts" className="py-24 bg-[#050d16] text-slate-100 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Hours & Location */}
          <div className="lg:col-span-7 space-y-6">
            <span className="font-serif italic text-gold-300 text-xl tracking-wider block">
              visiting us
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl text-white tracking-tight uppercase">
              HARBOR LOCATION & SERVICE
            </h2>

            <div className="w-16 h-0.5 bg-gold-500/60"></div>

            <p className="text-slate-300 text-sm font-light leading-relaxed max-w-xl">
              Located directly along the historic marina pier with sweeping sunset views across the open bay. 
              Complimentary valet parking available at our private harbor reception.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 text-xs">
              <div className="p-5 rounded-2xl bg-[#091b2c] border border-slate-800 space-y-2">
                <div className="flex items-center space-x-2 text-gold-400 font-serif font-bold uppercase tracking-wider text-[11px]">
                  <MapPin className="w-4 h-4" />
                  <span>Address & Dock</span>
                </div>
                <p className="text-slate-200 font-medium text-sm">{RESTAURANT_INFO.address}</p>
                <p className="text-slate-400 font-light">Pier 24 Private Harbor Slip • Valet Parking</p>
              </div>

              <div className="p-5 rounded-2xl bg-[#091b2c] border border-slate-800 space-y-2">
                <div className="flex items-center space-x-2 text-gold-400 font-serif font-bold uppercase tracking-wider text-[11px]">
                  <Clock className="w-4 h-4" />
                  <span>Dining Hours</span>
                </div>
                <p className="text-slate-300 font-light">{RESTAURANT_INFO.hours.dinner}</p>
                <p className="text-slate-300 font-light">{RESTAURANT_INFO.hours.lunch}</p>
                <p className="text-gold-300/80 font-serif italic text-[11px]">{RESTAURANT_INFO.hours.rawBar}</p>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <button
                onClick={onOpenBookTable}
                className="px-8 py-3.5 bg-gradient-to-r from-gold-600 to-gold-500 text-slate-950 font-serif font-bold tracking-[0.2em] uppercase text-xs rounded-xl shadow-lg transition hover:opacity-90"
              >
                Book a Table Now
              </button>

              <div className="flex items-center space-x-2 text-xs text-slate-400">
                <Phone className="w-4 h-4 text-gold-400" />
                <span>Concierge Hotline: <strong className="text-slate-200">{RESTAURANT_INFO.phone}</strong></span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Atmosphere Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden border border-gold-500/30 p-8 bg-[#091b2c] text-center space-y-4 shadow-2xl">
              <span className="font-serif text-3xl sm:text-4xl text-white tracking-[0.2em] font-normal uppercase block">
                SEACLUB
              </span>
              <span className="font-serif italic text-gold-300 text-base block -mt-2">
                seafood + wine
              </span>

              <div className="w-12 h-0.5 bg-gold-500/40 mx-auto"></div>

              <p className="text-xs text-slate-300 font-light leading-relaxed">
                "Dining at SEACLUB is an ode to the deep waters. Every plate represents the morning catch, framed by extraordinary wine and sunset tides."
              </p>

              <div className="pt-2">
                <span className="text-[10px] text-slate-500 uppercase tracking-widest font-serif block">
                  Dress Code: Smart Casual / Elegant Evening
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
