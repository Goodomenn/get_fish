import React from 'react';
import { Anchor, Scissors, Snowflake, Truck, CheckCircle2 } from 'lucide-react';

export default function FreshnessJourney() {
  const steps = [
    {
      step: '01',
      icon: Anchor,
      title: 'Dawn Dockside Sourcing',
      desc: 'Our fishmongers meet day-boat fishermen at dawn. Only the highest 5% grade catch is selected, strictly adhering to sustainable quotas.'
    },
    {
      step: '02',
      icon: Scissors,
      title: 'Free Custom Filleting',
      desc: 'Scaled, gutted, butterfly-cut, or portioned into sashimi saku blocks by master handlers in our temperature-controlled sanitised room.'
    },
    {
      step: '03',
      icon: Snowflake,
      title: '0°C Gel-Ice Insulated Packaging',
      desc: 'Vacuum-sealed in food-grade eco pouches, layered with dry-ice packs and seaweed to preserve natural omega moisture and ocean flavor.'
    },
    {
      step: '04',
      icon: Truck,
      title: '2-Hour Chilled Delivery',
      desc: 'Dispatched directly in refrigerated electric vans. Arrives so fresh you can prepare sashimi minutes after unboxing.'
    }
  ];

  return (
    <section id="cold-chain" className="py-16 sm:py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-ocean-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest bg-ocean-500/20 px-3.5 py-1 rounded-full border border-ocean-500/30">
            Uncompromising Quality Standard
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            The Boat-to-Kitchen Journey
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Standard supermarket fish spends 7–14 days in intermediate distribution networks. 
            GetFish cuts out every middleman to deliver the true sweetness of wild waters.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 relative flex flex-col justify-between group hover:border-cyan-400/50 transition duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-slate-600 group-hover:text-cyan-400 transition">
                      {item.step}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-ocean-500/15 border border-ocean-500/30 text-cyan-300 flex items-center justify-center group-hover:scale-110 transition duration-200">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">{item.desc}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-700/50 flex items-center space-x-1.5 text-xs text-emerald-400 font-semibold">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Cold Chain Verified</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
