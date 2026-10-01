import React from 'react';
import { TESTIMONIALS } from '../data/initialData';
import { Star, Quote, Award } from 'lucide-react';

export default function ReviewsSection() {
  return (
    <section id="reviews" className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
          <div className="inline-flex items-center space-x-1.5 text-xs font-bold text-ocean-700 bg-ocean-100/70 px-3 py-1 rounded-full uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" />
            <span>Endorsed By Top Culinary Masters</span>
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Trusted by Michelin Chefs & Seafood Lovers
          </h2>
          <p className="text-sm text-slate-500">
            Over 24,000 satisfied home cooks and restaurants order weekly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-md transition flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-slate-200" />
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  "{t.content}"
                </p>
              </div>

              <div className="flex items-center space-x-3 mt-6 pt-4 border-t border-slate-100">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-11 h-11 rounded-full object-cover border-2 border-ocean-100"
                />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">{t.name}</h4>
                  <p className="text-xs text-slate-500">{t.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
