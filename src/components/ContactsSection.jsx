import React, { useState } from 'react';
import { RESTAURANT_INFO, RESTAURANT_BRANCHES } from '../data/restaurantData';
import { apiService } from '../services/apiService';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  ChevronDown
} from 'lucide-react';

export default function ContactsSection({ onOpenBookTable, showToast }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      if (showToast) {
        showToast('Please fill out all required fields.', 'error');
      }
      return;
    }

    setIsSubmitting(true);

    try {
      const payload = {
        category: formData.subject || 'General Inquiry',
        name: formData.name.trim(),
        email: formData.email.trim(),
        subject: formData.subject || 'Direct Message from Website',
        message: formData.message.trim(),
        createdAt: new Date().toISOString()
      };

      const created = await apiService.submitFeedback(payload);
      setTicketId(created.id);
      setSubmitted(true);

      if (showToast) {
        showToast(`Message sent successfully (#${created.id})!`);
      }
    } catch (err) {
      console.error('Error submitting contact form:', err);
      if (showToast) {
        showToast('Could not send message. Please try again or call us directly.', 'error');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section id="contacts" className="py-20 sm:py-28 bg-[#050e17] text-slate-100 relative overflow-hidden select-none border-t border-slate-800/80">
      {/* Background Ambience consistent with SEACLUB palette */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-950/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[450px] h-[450px] bg-gold-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* ========================================================================= */}
          {/* LEFT COLUMN: Contact Information                                          */}
          {/* ========================================================================= */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs sm:text-sm font-serif italic text-gold-300 block mb-1.5 tracking-wider">
                Find Us
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-serif font-bold text-white tracking-tight uppercase leading-tight">
                Contact Information
              </h2>
            </div>

            <div className="space-y-7 pt-2">
              {/* 1. Address */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-[#091b2c] border border-gold-500/30 text-gold-400 flex items-center justify-center shrink-0 shadow-lg">
                  <MapPin className="w-5 h-5 text-gold-400" />
                </div>
                <div className="space-y-1 pt-0.5">
                  <h4 className="text-white font-serif font-semibold text-base">Address</h4>
                  <p className="text-slate-300 text-sm font-light leading-snug">
                    {RESTAURANT_INFO.address}
                  </p>
                  <p className="text-slate-400 text-xs font-light">
                    Pier 24 Private Slip • Harbor View Marina
                  </p>
                </div>
              </div>

              {/* 2. Phone */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-[#091b2c] border border-gold-500/30 text-gold-400 flex items-center justify-center shrink-0 shadow-lg">
                  <Phone className="w-5 h-5 text-gold-400" />
                </div>
                <div className="space-y-1 pt-0.5">
                  <h4 className="text-white font-serif font-semibold text-base">Phone</h4>
                  <a
                    href={`tel:${RESTAURANT_INFO.phone}`}
                    className="text-slate-300 hover:text-gold-300 text-sm font-light transition block"
                  >
                    {RESTAURANT_INFO.phone}
                  </a>
                </div>
              </div>

              {/* 3. Email */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-[#091b2c] border border-gold-500/30 text-gold-400 flex items-center justify-center shrink-0 shadow-lg">
                  <Mail className="w-5 h-5 text-gold-400" />
                </div>
                <div className="space-y-1.5 pt-0.5 w-full">
                  <h4 className="text-white font-serif font-semibold text-base mb-1">Email</h4>
                  <div className="space-y-1 text-xs sm:text-sm">
                    <div className="flex">
                      <span className="w-28 text-slate-400 font-light">General</span>
                      <a
                        href="mailto:hello@gechfish-restaurant.com"
                        className="text-slate-300 hover:text-gold-300 transition"
                      >
                        hello@gechfish-restaurant.com
                      </a>
                    </div>
                    <div className="flex">
                      <span className="w-28 text-slate-400 font-light">Reservations</span>
                      <a
                        href={`mailto:${RESTAURANT_INFO.email}`}
                        className="text-slate-300 hover:text-gold-300 transition"
                      >
                        {RESTAURANT_INFO.email}
                      </a>
                    </div>
                    <div className="flex">
                      <span className="w-28 text-slate-400 font-light">Press</span>
                      <a
                        href="mailto:press@gechfish-restaurant.com"
                        className="text-slate-300 hover:text-gold-300 transition"
                      >
                        press@gechfish-restaurant.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* 4. Hours */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-[#091b2c] border border-gold-500/30 text-gold-400 flex items-center justify-center shrink-0 shadow-lg">
                  <Clock className="w-5 h-5 text-gold-400" />
                </div>
                <div className="space-y-1.5 pt-0.5 w-full">
                  <h4 className="text-white font-serif font-semibold text-base mb-1">Hours</h4>
                  <div className="space-y-1 text-xs sm:text-sm">
                    <div className="flex">
                      <span className="w-28 text-slate-400 font-light">Wed – Sun</span>
                      <span className="text-slate-300">12 PM – 3:30 PM (Lunch)</span>
                    </div>
                    <div className="flex">
                      <span className="w-28 text-slate-400 font-light">Mon – Sun</span>
                      <span className="text-slate-300">5:30 PM – 11:30 PM</span>
                    </div>
                    <div className="flex">
                      <span className="w-28 text-slate-400 font-light">Daily</span>
                      <span className="text-slate-300">4 PM – Late (Raw Bar)</span>
                    </div>
                    <div className="flex">
                      <span className="w-28 text-slate-400 font-light">Monday</span>
                      <span className="text-slate-400 italic">Harbor Slip Open</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 5. Direct Lines Across 3 Destinations */}
              <div className="pt-4 border-t border-slate-800/80 space-y-3">
                <span className="text-[11px] font-serif uppercase tracking-widest text-gold-400 block">
                  Direct Lines Across 3 Waterfront Destinations
                </span>
                <div className="space-y-2">
                  {RESTAURANT_BRANCHES.map(b => (
                    <div
                      key={b.id}
                      className="p-3 bg-[#071421] border border-slate-800/80 rounded-xl flex items-center justify-between"
                    >
                      <div>
                        <span className="font-serif font-bold text-white text-xs block">{b.name}</span>
                        <span className="text-[10px] text-slate-400 block truncate">{b.city}</span>
                      </div>
                      <a
                        href={`tel:${b.phone}`}
                        className="text-xs text-gold-300 hover:text-white font-mono font-semibold transition"
                      >
                        {b.phone}
                      </a>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* ========================================================================= */}
          {/* RIGHT COLUMN: Send a Message Card                                         */}
          {/* ========================================================================= */}
          <div className="lg:col-span-7">
            <div className="bg-[#071421] border border-slate-800 rounded-3xl p-7 sm:p-10 shadow-2xl relative">
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-6 tracking-tight uppercase">
                Send a Message
              </h3>

              {submitted ? (
                <div className="py-10 space-y-6 text-center animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto shadow-xl">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div className="space-y-2 max-w-md mx-auto">
                    <span className="text-xs uppercase tracking-widest text-gold-400 bg-gold-500/10 px-3 py-1 rounded-full border border-gold-500/30 inline-block font-mono">
                      Ref #{ticketId}
                    </span>
                    <h4 className="text-2xl font-serif font-bold text-white uppercase">
                      Message Received
                    </h4>
                    <p className="text-sm text-slate-300 font-light leading-relaxed">
                      Thank you for reaching out. Your message has been logged directly with our management team and concierge desk. We will respond to your email promptly.
                    </p>
                  </div>

                  <div className="pt-4">
                    <button
                      onClick={handleReset}
                      className="px-8 py-3 bg-[#091b2c] hover:bg-slate-800 border border-slate-700 text-slate-200 text-xs sm:text-sm font-serif uppercase tracking-wider rounded-xl transition duration-200 cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Row 1: Full Name & Email Address */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block text-xs font-serif uppercase tracking-wider text-slate-300 font-medium">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                        className="w-full bg-[#091b2c] border border-slate-700/80 focus:border-gold-400 focus:ring-1 focus:ring-gold-400/40 text-white placeholder-slate-500 text-sm px-4 py-3 rounded-xl outline-none transition"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs font-serif uppercase tracking-wider text-slate-300 font-medium">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        required
                        className="w-full bg-[#091b2c] border border-slate-700/80 focus:border-gold-400 focus:ring-1 focus:ring-gold-400/40 text-white placeholder-slate-500 text-sm px-4 py-3 rounded-xl outline-none transition"
                      />
                    </div>
                  </div>

                  {/* Row 2: Subject */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-serif uppercase tracking-wider text-slate-300 font-medium">
                      Subject
                    </label>
                    <div className="relative">
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full bg-[#091b2c] border border-slate-700/80 focus:border-gold-400 focus:ring-1 focus:ring-gold-400/40 text-white text-sm px-4 py-3 rounded-xl outline-none transition appearance-none cursor-pointer pr-10"
                      >
                        <option value="" disabled className="bg-[#071421] text-slate-400">
                          Select a subject...
                        </option>
                        <option value="Complaint / Service Concern" className="bg-[#071421] text-white">
                          Complaint / Service Concern
                        </option>
                        <option value="Suggestion / Feedback" className="bg-[#071421] text-white">
                          Suggestion / Feedback
                        </option>
                        <option value="Private Dining & Events" className="bg-[#071421] text-white">
                          Private Dining & Events
                        </option>
                        <option value="General Inquiry" className="bg-[#071421] text-white">
                          General Inquiry
                        </option>
                        <option value="Something else" className="bg-[#071421] text-white">
                          Something else
                        </option>
                      </select>
                      <ChevronDown className="w-4 h-4 text-gold-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                  </div>

                  {/* Row 3: Message */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-serif uppercase tracking-wider text-slate-300 font-medium">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us what's on your mind..."
                      required
                      className="w-full bg-[#091b2c] border border-slate-700/80 focus:border-gold-400 focus:ring-1 focus:ring-gold-400/40 text-white placeholder-slate-500 text-sm p-4 rounded-xl outline-none transition resize-none leading-relaxed"
                    />
                  </div>

                  {/* Row 4: Submit Button (Luxury Gold Gradient matching SEACLUB theme) */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-gradient-to-r from-gold-600 via-gold-500 to-gold-400 hover:from-gold-500 hover:to-gold-300 active:scale-[0.99] text-slate-950 font-serif font-bold text-xs sm:text-sm uppercase tracking-[0.2em] rounded-xl transition duration-200 shadow-xl flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin mr-2" />
                        <span>SENDING MESSAGE...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-slate-950" />
                        <span>SEND MESSAGE</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
