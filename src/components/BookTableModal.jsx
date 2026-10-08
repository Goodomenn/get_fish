import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, Users, CheckCircle2, MapPin, Wine } from 'lucide-react';
import { apiService, DEFAULT_LOCATIONS } from '../services/apiService';
import { RESTAURANT_BRANCHES } from '../data/restaurantData';

const TIME_SLOTS = [
  '12:00', '13:00', '14:00', '17:30', '18:30', '19:30', '20:30', '21:30'
];

export default function BookTableModal({
  isOpen,
  onClose,
  onBookingCompleted,
  initialSeatingArea = 'Bahir Dar Flagship',
  initialBranch = 'bahir-dar'
}) {
  if (!isOpen) return null;

  const [locations, setLocations] = useState(DEFAULT_LOCATIONS);

  useEffect(() => {
    let isMounted = true;
    const fetchLocs = async () => {
      try {
        const data = await apiService.getLocations();
        if (isMounted && Array.isArray(data) && data.length > 0) {
          setLocations(data);
        }
      } catch (e) {
        console.error('Failed to load locations', e);
      }
    };
    fetchLocs();
    const unsubscribe = apiService.subscribe(fetchLocs);
    return () => {
      isMounted = false;
      unsubscribe();
    };
  }, []);

  const defaultBranch = RESTAURANT_BRANCHES.find(b => b.id === initialBranch) || RESTAURANT_BRANCHES[0];
  const defaultLoc = locations.find(l => l.branchId === initialBranch || l.id === initialSeatingArea) || locations[0] || DEFAULT_LOCATIONS[0];

  const [form, setForm] = useState({
    guestName: '',
    email: '',
    phone: '',
    partySize: 2,
    date: 'Tonight',
    time: '19:30',
    branch: defaultBranch?.name || defaultLoc.name,
    seatingArea: defaultLoc.id,
    tableNumber: '',
    notes: ''
  });

  useEffect(() => {
    if (initialSeatingArea) {
      const match = locations.find(l => l.id === initialSeatingArea || l.branchId === initialSeatingArea);
      if (match) {
        setForm(prev => ({ ...prev, seatingArea: match.id, branch: match.name }));
      }
    }
  }, [initialSeatingArea, locations]);

  useEffect(() => {
    if (initialBranch) {
      const match = locations.find(l => l.branchId === initialBranch || l.id === initialBranch);
      if (match) {
        setForm(prev => ({ ...prev, seatingArea: match.id, branch: match.name }));
      }
    }
  }, [initialBranch, locations]);

  const [submitting, setSubmitting] = useState(false);
  const [confirmedReservation, setConfirmedReservation] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.guestName || !form.phone) {
      alert('Please provide your name and phone number for reservation confirmation.');
      return;
    }

    setSubmitting(true);
    try {
      const reservation = await apiService.bookTable(form);
      setConfirmedReservation(reservation);
      if (onBookingCompleted) {
        onBookingCompleted(reservation);
      }
    } catch (err) {
      console.error('Reservation error:', err);
      alert('Failed to book table. Please call our hotline.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-[#091b2c] border border-gold-500/40 rounded-3xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-slate-800 bg-[#061421] flex items-center justify-between">
          <div>
            <span className="font-serif italic text-gold-300 text-sm tracking-wider block">
              seafood + wine
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-white tracking-wide uppercase">
              {confirmedReservation ? 'RESERVATION CONFIRMED' : 'BOOK A TABLE'}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-full hover:bg-slate-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="overflow-y-auto flex-1 p-6 sm:p-8">
          {confirmedReservation ? (
            /* Confirmation Success State */
            <div className="text-center py-6 space-y-6 animate-in zoom-in-95 duration-300">
              <div className="w-20 h-20 rounded-full bg-gold-500/20 border border-gold-400/50 text-gold-300 flex items-center justify-center mx-auto shadow-xl">
                <CheckCircle2 className="w-12 h-12" />
              </div>

              <div>
                <span className="text-[11px] font-serif uppercase tracking-[0.2em] text-gold-400 block">
                  Table Reserved At Gech Fish
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl text-white font-normal mt-1">
                  #{confirmedReservation.id}
                </h3>
                <p className="text-sm text-slate-300 mt-2 max-w-md mx-auto font-light">
                  We look forward to welcoming you, <strong className="text-white font-serif">{confirmedReservation.guestName}</strong>. 
                  A table at <strong className="text-gold-300">{confirmedReservation.seatingArea || confirmedReservation.branch}</strong> is set for your arrival.
                </p>
              </div>

              {/* Reservation Receipt Card */}
              <div className="bg-[#061421] border border-slate-800 rounded-2xl p-5 text-left text-xs space-y-3 max-w-md mx-auto">
                <div className="flex justify-between pb-2 border-b border-slate-800">
                  <span className="text-slate-400">Restaurant Location:</span>
                  <span className="font-serif text-gold-300 font-bold text-sm">
                    {confirmedReservation.seatingArea || confirmedReservation.branch}
                  </span>
                </div>
                <div className="flex justify-between pb-2 border-b border-slate-800">
                  <span className="text-slate-400">Date & Time:</span>
                  <span className="font-serif text-gold-300 font-bold text-sm">
                    {confirmedReservation.date} at {confirmedReservation.time}
                  </span>
                </div>
                <div className="flex justify-between pb-2 border-b border-slate-800">
                  <span className="text-slate-400">Guests:</span>
                  <span className="font-bold text-white">{confirmedReservation.partySize} Guests</span>
                </div>
                {confirmedReservation.tableNumber && (
                  <div className="flex justify-between pb-2 border-b border-slate-800">
                    <span className="text-slate-400">Reserved Table:</span>
                    <span className="font-mono text-gold-300 font-bold text-sm">
                      {confirmedReservation.tableNumber}
                    </span>
                  </div>
                )}
                {confirmedReservation.notes && (
                  <div className="pt-1 text-slate-400 italic text-[11px]">
                    Note: "{confirmedReservation.notes}"
                  </div>
                )}
              </div>

              <div className="pt-2">
                <button
                  onClick={onClose}
                  className="px-8 py-3 bg-gradient-to-r from-gold-600 to-gold-500 text-slate-950 font-serif font-bold tracking-widest text-xs uppercase rounded-xl transition hover:opacity-90 shadow-lg"
                >
                  Return to Menu
                </button>
              </div>
            </div>
          ) : (
            /* Booking Form */
            <form onSubmit={handleSubmit} className="space-y-6 text-xs">
              {/* Select Restaurant Location */}
              <div>
                <label className="font-serif text-slate-300 block mb-2 uppercase tracking-wider text-[11px] flex items-center justify-between">
                  <span className="flex items-center space-x-1.5 text-gold-400">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Select Restaurant Location (ቅርንጫፍ ይምረጡ) *</span>
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono">{locations.length} Locations</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {locations.map(loc => {
                    const isSelected = form.seatingArea === loc.id;
                    return (
                      <button
                        key={loc.id}
                        type="button"
                        onClick={() => setForm({ ...form, seatingArea: loc.id, branch: loc.name })}
                        className={`p-3.5 rounded-2xl border text-left transition cursor-pointer flex flex-col justify-between ${
                          isSelected
                            ? 'bg-gradient-to-b from-[#0a233a] to-[#071727] border-gold-400 shadow-md ring-1 ring-gold-400/50'
                            : 'bg-[#061421] border-slate-800 text-slate-300 hover:border-slate-700'
                        }`}
                      >
                        <div className="space-y-1">
                          <div className="flex items-center justify-between">
                            <span className={`font-serif font-bold text-sm block ${isSelected ? 'text-gold-300' : 'text-white'}`}>
                              {loc.name}
                            </span>
                            <span className="text-[9px] px-2 py-0.5 rounded-full font-mono bg-gold-500/10 text-gold-400 border border-gold-500/20">
                              {loc.badge}
                            </span>
                          </div>
                          <span className="text-[10px] text-slate-400 block font-medium">
                            {loc.city}
                          </span>
                          <span className="text-[11px] text-slate-300/80 mt-1 block leading-snug">
                            {loc.desc}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Guests & Date & Time */}
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {/* Party Size */}
                  <div>
                    <label className="font-serif text-slate-300 block mb-1.5 uppercase tracking-wider text-[11px]">
                      Guests *
                    </label>
                    <select
                      value={form.partySize}
                      onChange={(e) => setForm({ ...form, partySize: parseInt(e.target.value, 10) })}
                      className="w-full px-3 py-2.5 bg-[#061421] border border-slate-700 rounded-xl text-white focus:outline-none focus:border-gold-500 font-medium"
                    >
                      {[1, 2, 3, 4, 5, 6, 8, 10].map(n => (
                        <option key={n} value={n}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>
                      ))}
                    </select>
                  </div>

                  {/* Date */}
                  <div>
                    <label className="font-serif text-slate-300 block mb-1.5 uppercase tracking-wider text-[11px]">
                      Date *
                    </label>
                    <select
                      value={form.date}
                      onChange={(e) => setForm({ ...form, date: e.target.value })}
                      className="w-full px-3 py-2.5 bg-[#061421] border border-slate-700 rounded-xl text-white focus:outline-none focus:border-gold-500 font-medium"
                    >
                      <option value="Tonight">Tonight</option>
                      <option value="Tomorrow">Tomorrow</option>
                      <option value="Friday">This Friday</option>
                      <option value="Saturday">This Saturday</option>
                      <option value="Sunday">Sunday Lunch</option>
                    </select>
                  </div>

                  {/* Time Slot */}
                  <div>
                    <label className="font-serif text-slate-300 block mb-1.5 uppercase tracking-wider text-[11px]">
                      Preferred Time *
                    </label>
                    <select
                      value={form.time}
                      onChange={(e) => setForm({ ...form, time: e.target.value })}
                      className="w-full px-3 py-2.5 bg-[#061421] border border-slate-700 rounded-xl text-white focus:outline-none focus:border-gold-500 font-medium"
                    >
                      {TIME_SLOTS.map(t => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Table Number & Seating Name Picker */}
                <div className="pt-1">
                  <label className="font-serif text-slate-300 block mb-1.5 uppercase tracking-wider text-[11px] flex items-center justify-between">
                    <span className="flex items-center space-x-1.5 text-gold-400">
                      <span>Pick Table Number & Name (የጠረጴዛ ቁጥርና ስም ይምረጡ)</span>
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono">Optional</span>
                  </label>
                  <select
                    value={form.tableNumber || ''}
                    onChange={(e) => setForm({ ...form, tableNumber: e.target.value })}
                    className="w-full px-3 py-2.5 bg-[#061421] border border-slate-700 hover:border-gold-500/50 focus:border-gold-400 rounded-xl text-white focus:outline-none font-medium text-xs cursor-pointer"
                  >
                    <option value="">Auto-Assign Best Available Table (ምርጥ ክፍት ጠረጴዛ)</option>
                    <optgroup label="Lake Tana Terrace (ባህር ዳር)">
                      <option value="Table 1 (Lake Tana Terrace)">Table 1 (Lake Tana Terrace)</option>
                      <option value="Table 2 (Lake Tana Terrace)">Table 2 (Lake Tana Terrace)</option>
                      <option value="Table 3 (Lake Tana Terrace)">Table 3 (Lake Tana Terrace)</option>
                      <option value="Table 4 (Lake Tana Terrace)">Table 4 (Lake Tana Terrace)</option>
                      <option value="Table 5 (Lake Tana Terrace)">Table 5 (Lake Tana Terrace)</option>
                      <option value="Table 6 (Lake Tana Terrace)">Table 6 (Lake Tana Terrace)</option>
                    </optgroup>
                    <optgroup label="Main Dining Hall">
                      <option value="Table 7 (Main Dining Hall)">Table 7 (Main Dining Hall)</option>
                      <option value="Table 8 (Main Dining Hall)">Table 8 (Main Dining Hall)</option>
                      <option value="Table 9 (Main Dining Hall)">Table 9 (Main Dining Hall)</option>
                      <option value="Table 10 (Main Dining Hall)">Table 10 (Main Dining Hall)</option>
                      <option value="Table 11 (Main Dining Hall)">Table 11 (Main Dining Hall)</option>
                      <option value="Table 12 (Main Dining Hall)">Table 12 (Main Dining Hall)</option>
                    </optgroup>
                    <optgroup label="Garden Breeze & Terrace">
                      <option value="Table 13 (Garden Breeze)">Table 13 (Garden Breeze)</option>
                      <option value="Table 14 (Terrace)">Table 14 (Terrace)</option>
                      <option value="Table 15 (Garden Breeze)">Table 15 (Garden Breeze)</option>
                      <option value="Table 16 (Garden Breeze)">Table 16 (Garden Breeze)</option>
                    </optgroup>
                    <optgroup label="Sunset Balcony & VIP Lounge">
                      <option value="Table 17 (Sunset Balcony)">Table 17 (Sunset Balcony)</option>
                      <option value="Table 18 (Sunset Balcony)">Table 18 (Sunset Balcony)</option>
                      <option value="Table 19 (VIP Wine Lounge)">Table 19 (VIP Wine Lounge)</option>
                      <option value="Table 20 (VIP Wine Lounge)">Table 20 (VIP Wine Lounge)</option>
                    </optgroup>
                    <optgroup label="Summit Family Hall (ሰሚት)">
                      <option value="Table 21 (Summit Family Hall)">Table 21 (Summit Family Hall)</option>
                      <option value="Table 22 (Summit Family Hall)">Table 22 (Summit Family Hall)</option>
                      <option value="Table 23 (Summit Family Hall)">Table 23 (Summit Family Hall)</option>
                      <option value="Table 24 (Summit Family Hall)">Table 24 (Summit Family Hall)</option>
                    </optgroup>
                  </select>
                  {form.tableNumber && (
                    <div className="mt-2 text-[11px] text-gold-300 font-serif flex items-center space-x-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold-400"></span>
                      <span>Selected Table: <strong className="text-white font-bold">{form.tableNumber}</strong></span>
                    </div>
                  )}
                </div>

                {/* Guest Contact Details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div>
                    <label className="font-serif text-slate-300 block mb-1 uppercase tracking-wider text-[11px]">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Lord Alistair"
                      value={form.guestName}
                      onChange={(e) => setForm({ ...form, guestName: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#061421] border border-slate-700 rounded-xl text-white focus:outline-none focus:border-gold-500"
                    />
                  </div>

                  <div>
                    <label className="font-serif text-slate-300 block mb-1 uppercase tracking-wider text-[11px]">
                      Contact Telephone *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+1 (555) 000-0000"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#061421] border border-slate-700 rounded-xl text-white focus:outline-none focus:border-gold-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-serif text-slate-300 block mb-1 uppercase tracking-wider text-[11px]">
                    Special Occasion & Culinary Preferences (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Anniversary dinner, window view requested, interested in Sommelier wine pairing"
                    value={form.notes}
                    onChange={(e) => setForm({ ...form, notes: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#061421] border border-slate-700 rounded-xl text-white focus:outline-none focus:border-gold-500"
                  />
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <span className="text-[11px] text-slate-400 font-light">
                  Direct confirmation • No reservation fee required
                </span>

                <button
                  type="submit"
                  disabled={submitting}
                  className="px-8 py-3.5 bg-gradient-to-r from-gold-600 to-gold-500 hover:from-gold-500 hover:to-gold-400 text-slate-950 font-serif font-bold tracking-[0.2em] uppercase text-xs rounded-xl shadow-lg transition active:scale-95 disabled:opacity-50"
                >
                  {submitting ? 'Confirming...' : 'Reserve Table'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
