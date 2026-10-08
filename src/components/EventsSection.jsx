import React from 'react';
import { UPCOMING_EVENTS } from '../data/restaurantData';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

export default function EventsSection({ onOpenBookTable }) {
  return (
    <section id="events" className="py-24 bg-[#071421] text-slate-100 border-t border-slate-800/80 relative overflow-hidden w-full">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <span className="font-serif italic text-gold-300 text-xl tracking-wider block">
            gastronomic calendar
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl text-white tracking-tight uppercase">
            EVENTS & PRIVATE SOIRÉES
          </h2>
          <div className="w-16 h-0.5 bg-gold-500/60 mx-auto"></div>
          <p className="text-xs sm:text-sm text-slate-400 font-light">
            Join our head sommeliers and culinary masters for intimate tasting dinners and seasonal harbor celebrations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {UPCOMING_EVENTS.map((evt) => (
            <div
              key={evt.id}
              className="bg-[#091b2c] border border-slate-800 hover:border-gold-500/40 rounded-2xl p-6 flex flex-col justify-between space-y-6 transition-all duration-300 hover:shadow-2xl"
            >
              <div className="space-y-3">
                <span className="text-[10px] font-serif uppercase tracking-widest text-gold-400 bg-gold-500/10 px-2.5 py-1 rounded-full border border-gold-500/30 inline-block">
                  {evt.tag}
                </span>

                <h3 className="font-serif text-2xl text-white font-medium">{evt.title}</h3>

                <div className="space-y-1 text-xs text-slate-400 pt-1">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-3.5 h-3.5 text-gold-400" />
                    <span>{evt.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-3.5 h-3.5 text-gold-400" />
                    <span>{evt.time}</span>
                  </div>
                </div>

                <p className="text-xs text-slate-300/80 font-light leading-relaxed pt-2">
                  {evt.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <span className="font-serif text-base text-gold-300 font-bold">{evt.price}</span>
                <button
                  onClick={onOpenBookTable}
                  className="text-xs font-serif uppercase tracking-wider text-gold-400 hover:text-gold-200 flex items-center space-x-1"
                >
                  <span>Reserve Seat</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
