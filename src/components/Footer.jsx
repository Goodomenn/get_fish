import React from 'react';
import { Fish, Phone, Mail, MapPin, Clock, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-xl bg-ocean-600 text-white flex items-center justify-center shadow-lg shadow-ocean-600/30">
                <Fish className="w-5 h-5 -rotate-12" />
              </div>
              <span className="text-2xl font-extrabold text-white tracking-tight">GetFish</span>
            </div>
            <p className="text-slate-400 max-w-sm leading-relaxed">
              Premium fresh seafood delivered directly from ethical coastal fisheries to your kitchen counter in sub-zero insulated gel coolers within 2 hours.
            </p>
            <div className="pt-1 flex items-center space-x-3 text-white text-xs">
              <span className="bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700">
                🌊 100% Wild / Sustainable
              </span>
              <span className="bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700">
                ❄️ Cold Chain Certified
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase text-[11px] tracking-wider">Seafood Categories</h4>
            <ul className="space-y-2">
              <li><a href="#catalog" className="hover:text-cyan-400 transition">Wild Salmon & Cod</a></li>
              <li><a href="#catalog" className="hover:text-cyan-400 transition">Sashimi Grade Tuna</a></li>
              <li><a href="#catalog" className="hover:text-cyan-400 transition">Live Maine Lobsters</a></li>
              <li><a href="#catalog" className="hover:text-cyan-400 transition">Mediterranean Whole Fish</a></li>
              <li><a href="#catalog" className="hover:text-cyan-400 transition">Jumbo Tiger Prawns</a></li>
            </ul>
          </div>

          {/* Customer Care */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase text-[11px] tracking-wider">Customer Care</h4>
            <ul className="space-y-2">
              <li><a href="#cold-chain" className="hover:text-cyan-400 transition">How Cold Chain Works</a></li>
              <li><a href="#cold-chain" className="hover:text-cyan-400 transition">Cut & Filleting Guide</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition">Freshness Guarantee</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition">Chef Cooking Recipes</a></li>
              <li>
                <a
                  href="http://localhost:5174"
                  target="_blank"
                  rel="noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 font-semibold inline-flex items-center gap-1"
                >
                  <span>Admin Management Portal</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase text-[11px] tracking-wider">Harbor Depot</h4>
            <div className="space-y-2.5">
              <p className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-ocean-500 shrink-0 mt-0.5" />
                <span>Pier 39 Dockside Terminal, Harbor Way</span>
              </p>
              <p className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-ocean-500 shrink-0" />
                <span>+1 (800) 438-3474 (GET-FISH)</span>
              </p>
              <p className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-ocean-500 shrink-0" />
                <span>orders@getfishmarket.com</span>
              </p>
              <p className="flex items-center space-x-2 text-slate-500">
                <Clock className="w-4 h-4 text-slate-500 shrink-0" />
                <span>Dispatches 7 AM - 9 PM Daily</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom copyright & disclaimer */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-slate-500 text-[11px] gap-4">
          <p>© {new Date().getFullYear()} GetFish Seafood Co. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-slate-400">Privacy Policy</a>
            <a href="#" className="hover:text-slate-400">Terms of Service</a>
            <a href="#" className="hover:text-slate-400">Sustainable Sourcing Manifesto</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
