import React, { useState } from 'react';
import { X, Calendar, Clock, Users, Sparkles, CheckCircle2, MapPin, Wine } from 'lucide-react';
import { apiService } from '../services/apiService';

const SEATING_AREAS = [
  { id: 'Ocean Terrace', label: 'Ocean Terrace', desc: 'Harbor sunset breeze & panoramic water views' },
  { id: 'Main Dining Salon', label: 'Main Dining Salon', desc: 'Refined acoustic luxury with marble & velvet' },
  { id: "Chef's Counter", label: "Chef's Counter", desc: 'Front-row view of wood fire grill & master shuckers' },
  { id: 'Private Wine Vault', label: 'Private Wine Vault', desc: 'Intimate cellar setting surrounded by rare vintages' }
];

const TIME_SLOTS = [
  '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30'
];

export default function BookTableModal({ isOpen, onClose, onBookingCompleted }) {
  if (!isOpen) return null;

  const [form, setForm] = useState({
    guestName: '',
    email: '',
    phone: '',
    partySize: 2,
    date: 'Tonight',
    time: '19:30',
    seatingArea: 'Ocean Terrace',
    notes: ''
  });

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
                  Table Reserved At SEACLUB
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl text-white font-normal mt-1">
                  #{confirmedReservation.id}
                </h3>
                <p className="text-sm text-slate-300 mt-2 max-w-md mx-auto font-light">
                  We look forward to welcoming you, <strong className="text-white font-serif">{confirmedReservation.guestName}</strong>. 
                  A table in the <strong className="text-gold-300">{confirmedReservation.seatingArea}</strong> is set for your arrival.
                </p>
              </div>

              {/* Reservation Receipt Card */}
              <div className="bg-[#061421] border border-slate-800 rounded-2xl p-5 text-left text-xs space-y-3 max-w-md mx-auto">
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
                <div className="flex justify-between pb-2 border-b border-slate-800">
                  <span className="text-slate-400">Atmosphere:</span>
                  <span className="font-semibold text-slate-200">{confirmedReservation.seatingArea}</span>
                </div>
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
                      <option value="Sunday">Sunday Brunch</option>
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

                {/* Seating Area Picker */}
                <div>
                  <label className="font-serif text-slate-300 block mb-2 uppercase tracking-wider text-[11px]">
                    Select Dining Area *
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {SEATING_AREAS.map(area => {
                      const isSelected = form.seatingArea === area.id;
                      return (
                        <button
                          key={area.id}
                          type="button"
                          onClick={() => setForm({ ...form, seatingArea: area.id })}
                          className={`p-3 rounded-xl border text-left transition ${
                            isSelected
                              ? 'bg-gold-500/15 border-gold-400 text-white shadow-md'
                              : 'bg-[#061421] border-slate-800 text-slate-300 hover:border-slate-700'
                          }`}
                        >
                          <span className="font-serif font-bold text-sm block text-gold-300">
                            {area.label}
                          </span>
                          <span className="text-[11px] text-slate-400 mt-0.5 block leading-snug">
                            {area.desc}
                          </span>
                        </button>
                      );
                    })}
                  </div>
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
