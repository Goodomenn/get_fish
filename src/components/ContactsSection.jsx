import React, { useState } from 'react';
import { RESTAURANT_INFO } from '../data/restaurantData';
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
    <section id="contacts" className="py-20 sm:py-28 bg-[#0c0608] text-slate-100 relative overflow-hidden select-none">
      {/* Dark wood & warm wine ambient glow */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#2a0e14]/40 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[450px] h-[450px] bg-[#1a080c]/60 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* ========================================================================= */}
          {/* LEFT COLUMN: Contact Information                                          */}
          {/* ========================================================================= */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs sm:text-sm font-medium tracking-wide text-slate-400 block mb-1.5">
                Find Us
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white tracking-tight leading-tight">
                Contact Information
              </h2>
            </div>

            <div className="space-y-7 pt-2">
              {/* 1. Address */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-[#200c12] border border-[#3e1420] text-[#e11d48] flex items-center justify-center shrink-0 shadow-inner">
                  <MapPin className="w-5 h-5 text-[#e11d48]" />
                </div>
                <div className="space-y-1 pt-0.5">
                  <h4 className="text-white font-semibold text-base">Address</h4>
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
                <div className="w-12 h-12 rounded-full bg-[#200c12] border border-[#3e1420] text-[#e11d48] flex items-center justify-center shrink-0 shadow-inner">
                  <Phone className="w-5 h-5 text-[#e11d48]" />
                </div>
                <div className="space-y-1 pt-0.5">
                  <h4 className="text-white font-semibold text-base">Phone</h4>
                  <a
                    href={`tel:${RESTAURANT_INFO.phone}`}
                    className="text-slate-300 hover:text-white text-sm font-light transition block"
                  >
                    {RESTAURANT_INFO.phone}
                  </a>
                </div>
              </div>

              {/* 3. Email */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-[#200c12] border border-[#3e1420] text-[#e11d48] flex items-center justify-center shrink-0 shadow-inner">
                  <Mail className="w-5 h-5 text-[#e11d48]" />
                </div>
                <div className="space-y-1.5 pt-0.5 w-full">
                  <h4 className="text-white font-semibold text-base mb-1">Email</h4>
                  <div className="space-y-1 text-xs sm:text-sm">
                    <div className="flex">
                      <span className="w-28 text-slate-400 font-light">General</span>
                      <a
                        href="mailto:hello@seaclub-restaurant.com"
                        className="text-slate-300 hover:text-[#e11d48] transition"
                      >
                        hello@seaclub-restaurant.com
                      </a>
                    </div>
                    <div className="flex">
                      <span className="w-28 text-slate-400 font-light">Reservations</span>
                      <a
                        href={`mailto:${RESTAURANT_INFO.email}`}
                        className="text-slate-300 hover:text-[#e11d48] transition"
                      >
                        {RESTAURANT_INFO.email}
                      </a>
                    </div>
                    <div className="flex">
                      <span className="w-28 text-slate-400 font-light">Press</span>
                      <a
                        href="mailto:press@seaclub-restaurant.com"
                        className="text-slate-300 hover:text-[#e11d48] transition"
                      >
                        press@seaclub-restaurant.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* 4. Hours */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-[#200c12] border border-[#3e1420] text-[#e11d48] flex items-center justify-center shrink-0 shadow-inner">
                  <Clock className="w-5 h-5 text-[#e11d48]" />
                </div>
                <div className="space-y-1.5 pt-0.5 w-full">
                  <h4 className="text-white font-semibold text-base mb-1">Hours</h4>
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
            </div>
          </div>

          {/* ========================================================================= */}
          {/* RIGHT COLUMN: Send a Message Card                                         */}
          {/* ========================================================================= */}
          <div className="lg:col-span-7">
            <div className="bg-[#170a0e]/95 border border-[#33141d] rounded-3xl p-7 sm:p-10 shadow-2xl backdrop-blur-sm relative">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 tracking-tight">
                Send a Message
              </h3>

              {submitted ? (
                <div className="py-10 space-y-6 text-center animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto shadow-xl">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div className="space-y-2 max-w-md mx-auto">
                    <span className="text-xs uppercase tracking-widest text-[#e11d48] bg-[#220c13] px-3 py-1 rounded-full border border-[#431622] inline-block font-mono">
                      Ref #{ticketId}
                    </span>
                    <h4 className="text-2xl font-bold text-white">
                      Message Received
                    </h4>
                    <p className="text-sm text-slate-300 font-light leading-relaxed">
                      Thank you for reaching out. Your message has been logged directly with our management team and concierge desk. We will respond to your email promptly.
                    </p>
                  </div>

                  <div className="pt-4">
                    <button
                      onClick={handleReset}
                      className="px-8 py-3 bg-[#241117] hover:bg-[#32161f] border border-[#441a24] text-white text-xs sm:text-sm font-semibold uppercase tracking-wider rounded-xl transition duration-200 cursor-pointer"
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
                      <label className="block text-xs text-slate-300 font-medium">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                        className="w-full bg-[#200e13] border border-[#3b1721] focus:border-[#d82046] focus:ring-1 focus:ring-[#d82046]/40 text-white placeholder-slate-500 text-sm px-4 py-3 rounded-xl outline-none transition"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs text-slate-300 font-medium">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        required
                        className="w-full bg-[#200e13] border border-[#3b1721] focus:border-[#d82046] focus:ring-1 focus:ring-[#d82046]/40 text-white placeholder-slate-500 text-sm px-4 py-3 rounded-xl outline-none transition"
                      />
                    </div>
                  </div>

                  {/* Row 2: Subject */}
                  <div className="space-y-1.5">
                    <label className="block text-xs text-slate-300 font-medium">
                      Subject
                    </label>
                    <div className="relative">
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full bg-[#200e13] border border-[#3b1721] focus:border-[#d82046] focus:ring-1 focus:ring-[#d82046]/40 text-white text-sm px-4 py-3 rounded-xl outline-none transition appearance-none cursor-pointer pr-10"
                      >
                        <option value="" disabled className="bg-[#170a0e] text-slate-400">
                          Select a subject...
                        </option>
                        <option value="Complaint / Service Concern" className="bg-[#170a0e] text-white">
                          Complaint / Service Concern
                        </option>
                        <option value="Suggestion / Feedback" className="bg-[#170a0e] text-white">
                          Suggestion / Feedback
                        </option>
                        <option value="Private Dining & Events" className="bg-[#170a0e] text-white">
                          Private Dining & Events
                        </option>
                        <option value="General Inquiry" className="bg-[#170a0e] text-white">
                          General Inquiry
                        </option>
                        <option value="Something else" className="bg-[#170a0e] text-white">
                          Something else
                        </option>
                      </select>
                      <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                  </div>

                  {/* Row 3: Message */}
                  <div className="space-y-1.5">
                    <label className="block text-xs text-slate-300 font-medium">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us what's on your mind..."
                      required
                      className="w-full bg-[#200e13] border border-[#3b1721] focus:border-[#d82046] focus:ring-1 focus:ring-[#d82046]/40 text-white placeholder-slate-500 text-sm p-4 rounded-xl outline-none transition resize-none leading-relaxed"
                    />
                  </div>

                  {/* Row 4: Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-[#d82046] hover:bg-[#be183c] active:scale-[0.99] text-white font-bold text-xs sm:text-sm uppercase tracking-wider rounded-xl transition duration-200 shadow-lg shadow-rose-950/40 flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                        <span>SENDING MESSAGE...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
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
