import React from 'react';
import { ExternalLink } from 'lucide-react';

export default function Footer({ onOpenBookTable, onNavigate }) {
  const handleNav = (page) => {
    if (onNavigate) {
      onNavigate(page);
    }
  };

  return (
    <footer className="bg-[#030910] text-slate-400 border-t border-slate-900 py-16 text-xs">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-slate-900">
          {/* Logo & Tagline */}
          <div className="text-center md:text-left space-y-1">
            <button
              onClick={() => handleNav('home')}
              className="font-serif tracking-[0.3em] text-2xl font-bold uppercase text-white hover:text-gold-300 transition block text-left"
            >
              SEACLUB
            </button>
            <span className="font-serif italic text-gold-300 text-sm block">
              seafood + wine
            </span>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 font-serif uppercase tracking-widest text-slate-300 text-xs">
            <button onClick={() => handleNav('home')} className="hover:text-gold-300 transition">
              Home
            </button>
            <button onClick={() => handleNav('menu')} className="hover:text-gold-300 transition">
              Menu
            </button>
            <button onClick={() => handleNav('wine')} className="hover:text-gold-300 transition">
              Wine Cellar
            </button>
            <button onClick={() => handleNav('about')} className="hover:text-gold-300 transition">
              About
            </button>
            <button onClick={() => handleNav('events')} className="hover:text-gold-300 transition">
              Events
            </button>
            <button onClick={() => handleNav('contacts')} className="hover:text-gold-300 transition">
              Contacts
            </button>
            <button
              onClick={onOpenBookTable}
              className="text-gold-300 hover:text-white transition"
            >
              Book a table
            </button>
            <a
              href="http://localhost:5174"
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-gold-300 inline-flex items-center space-x-1"
            >
              <span>Admin</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-slate-500 text-[11px] gap-4">
          <p>© {new Date().getFullYear()} SEACLUB Fish Restaurant & Wine Cellar. All rights reserved.</p>
          <p className="font-serif italic text-slate-500">Delicious food and fine wine on the harbor.</p>
        </div>
      </div>
    </footer>
  );
}
