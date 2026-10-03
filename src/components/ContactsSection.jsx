import React, { useState } from 'react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { apiService } from '../services/apiService';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  AlertCircle,
  Lightbulb,
  Wine,
  MessageSquare,
  Send,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Calendar,
  Anchor,
  Compass,
  ArrowRight
} from 'lucide-react';

const CATEGORIES = [
  {
    id: 'complaint',
    label: 'Complaint / Concern',
    icon: AlertCircle,
    color: 'text-amber-400 border-amber-500/40 bg-amber-500/10',
    activeColor: 'bg-amber-500/20 border-amber-400 text-amber-300 ring-2 ring-amber-400/30',
    description: 'Service issue, food quality, or dining experience concern',
    placeholder: 'Please describe what occurred during your dining experience so our General Manager can personally investigate and make things right...'
  },
  {
    id: 'suggestion',
    label: 'Suggestion / Idea',
    icon: Lightbulb,
    color: 'text-gold-400 border-gold-500/40 bg-gold-500/10',
    activeColor: 'bg-gold-500/20 border-gold-400 text-gold-300 ring-2 ring-gold-400/30',
    description: 'Ideas for seasonal catches, wine pairings, or restaurant ambiance',
    placeholder: 'Share your ideas or recommendations for new seafood cuts, wine allocations, or dining enhancements...'
  },
  {
    id: 'event_inquiry',
    label: 'Private Event / Salon',
    icon: Wine,
    color: 'text-purple-400 border-purple-500/40 bg-purple-500/10',
    activeColor: 'bg-purple-500/20 border-purple-400 text-purple-300 ring-2 ring-purple-400/30',
    description: 'Private Wine Vault buyout, gala banquet, or yacht catering',
    placeholder: 'Tell us about your event (expected guest count, preferred date, custom seafood degustation requests)...'
  },
  {
    id: 'general',
    label: 'General / Other',
    icon: MessageSquare,
    color: 'text-cyan-400 border-cyan-500/40 bg-cyan-500/10',
    activeColor: 'bg-cyan-500/20 border-cyan-400 text-cyan-300 ring-2 ring-cyan-400/30',
    description: 'Dietary inquiries, valet arrangements, or concierge assistance',
    placeholder: 'How can our concierge desk assist you today?'
  }
];

export default function ContactsSection({ onOpenBookTable, showToast }) {
  const [selectedCategory, setSelectedCategory] = useState('suggestion');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    diningArea: 'Not applicable / General Inquiry',
    visitDate: '',
    message: '',
    requestCallback: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedTicket, setSubmittedTicket] = useState(null);

  const activeCategoryObj = CATEGORIES.find((c) => c.id === selectedCategory) || CATEGORIES[1];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
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
        category: activeCategoryObj.label,
        categoryId: activeCategoryObj.id,
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim() || 'N/A',
        subject: formData.subject.trim() || `${activeCategoryObj.label} Submission`,
        diningArea: formData.diningArea,
        visitDate: formData.visitDate || 'N/A',
        message: formData.message.trim(),
        requestCallback: formData.requestCallback,
        createdAt: new Date().toISOString()
      };

      const created = await apiService.submitFeedback(payload);
      setSubmittedTicket(created);

      if (showToast) {
        showToast(`Feedback logged (#${created.id}). Thank you!`);
      }
    } catch (err) {
      console.error('Feedback submit error:', err);
      if (showToast) {
        showToast('Failed to submit message. Please contact concierge by phone.', 'error');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetForm = () => {
    setSubmittedTicket(null);
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      diningArea: 'Not applicable / General Inquiry',
      visitDate: '',
      message: '',
      requestCallback: false
    });
  };

  return (
    <section id="contacts" className="py-20 sm:py-28 bg-[#050e17] text-slate-100 relative overflow-hidden select-none">
      {/* Background Ambience */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-950/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gold-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="font-serif italic text-gold-300 text-lg sm:text-xl tracking-wider block">
            concierge & guest relations
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight uppercase">
            CONTACT & GUEST INQUIRIES
          </h2>
          <div className="w-16 h-0.5 bg-gold-400 mx-auto" />
          <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
            Whether visiting our harbor pier, arranging a private salon, submitting valuable feedback, or addressing a service concern, our management and concierge desk are at your service.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* TWO-COLUMN GRID: Left = Location & Harbor Info, Right = Interactive Form  */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* ===================================================================== */}
          {/* LEFT COLUMN: Harbor Location, Hours & Service Details (5 cols)         */}
          {/* ===================================================================== */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Harbor Address & Dock Card */}
            <div className="p-6 rounded-2xl bg-[#071421] border border-slate-800 space-y-4 shadow-xl">
              <div className="flex items-center space-x-3 text-gold-400 font-serif font-bold uppercase tracking-wider text-xs">
                <MapPin className="w-4 h-4 text-gold-400 shrink-0" />
                <span>Harbor Location & Slip</span>
              </div>
              <div className="space-y-1 text-xs">
                <p className="text-white font-medium text-sm sm:text-base">{RESTAURANT_INFO.address}</p>
                <p className="text-slate-400 font-light">Pier 24 Private Harbor Slip • Harbor View Marina</p>
                <p className="text-slate-400 font-light">Complimentary valet parking available at our private harbor rotunda.</p>
              </div>

              <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-300">
                <span className="text-[11px] text-slate-400">Yacht Tender Docking:</span>
                <span className="font-serif text-gold-300 font-medium">Slip 4B (VHF Ch. 12)</span>
              </div>
            </div>

            {/* Service & Dining Hours Card */}
            <div className="p-6 rounded-2xl bg-[#071421] border border-slate-800 space-y-4 shadow-xl">
              <div className="flex items-center space-x-3 text-gold-400 font-serif font-bold uppercase tracking-wider text-xs">
                <Clock className="w-4 h-4 text-gold-400 shrink-0" />
                <span>Service & Dining Hours</span>
              </div>
              <div className="space-y-2 text-xs divide-y divide-slate-800/60">
                <div className="flex justify-between items-center pt-1">
                  <span className="text-slate-400">Lunch Service:</span>
                  <span className="text-slate-200 font-light">{RESTAURANT_INFO.hours.lunch}</span>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-slate-400">Dinner Service:</span>
                  <span className="text-slate-200 font-light">{RESTAURANT_INFO.hours.dinner}</span>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-slate-400">Raw Bar & Wine Lounge:</span>
                  <span className="text-gold-300 font-serif italic">{RESTAURANT_INFO.hours.rawBar}</span>
                </div>
              </div>
            </div>

            {/* Direct Concierge Contact Card */}
            <div className="p-6 rounded-2xl bg-[#071421] border border-slate-800 space-y-4 shadow-xl">
              <div className="flex items-center space-x-3 text-gold-400 font-serif font-bold uppercase tracking-wider text-xs">
                <Phone className="w-4 h-4 text-gold-400 shrink-0" />
                <span>Concierge & Reservations</span>
              </div>
              <div className="space-y-2 text-xs">
                <div className="flex items-center space-x-2">
                  <Phone className="w-3.5 h-3.5 text-slate-500" />
                  <span className="text-slate-400">Hotline:</span>
                  <a
                    href={`tel:${RESTAURANT_INFO.phone}`}
                    className="text-white hover:text-gold-300 font-serif font-bold transition"
                  >
                    {RESTAURANT_INFO.phone}
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-3.5 h-3.5 text-slate-500" />
                  <span className="text-slate-400">Email:</span>
                  <a
                    href={`mailto:${RESTAURANT_INFO.email}`}
                    className="text-slate-300 hover:text-gold-300 transition"
                  >
                    {RESTAURANT_INFO.email}
                  </a>
                </div>
              </div>

              {/* Direct Book Table CTA */}
              <div className="pt-2">
                <button
                  onClick={onOpenBookTable}
                  className="w-full py-3 bg-gradient-to-r from-gold-600 to-gold-500 hover:from-gold-500 hover:to-gold-400 text-slate-950 font-serif font-bold uppercase tracking-widest text-xs rounded-xl shadow-lg transition duration-300 cursor-pointer flex items-center justify-center space-x-2"
                >
                  <span>Book a Table Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Dining Standards / Dress Code Card */}
            <div className="p-5 rounded-2xl bg-[#091b2c]/80 border border-gold-500/20 text-xs space-y-1.5">
              <div className="flex items-center space-x-2 text-gold-400 font-serif text-[11px] uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Dress Code & Hospitality Etiquette</span>
              </div>
              <p className="text-slate-300 font-light leading-relaxed text-[11px]">
                Smart casual / elegant evening attire. We kindly request gentleman avoid sleeveless sportswear and flip-flops in our main dining salon and wine vault.
              </p>
            </div>
          </div>

          {/* ===================================================================== */}
          {/* RIGHT COLUMN: Interactive Feedback & Inquiries Form (7 cols)          */}
          {/* ===================================================================== */}
          <div className="lg:col-span-7">
            <div className="bg-[#071421] border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl relative">
              
              {/* Form Headline */}
              <div className="border-b border-slate-800 pb-6 mb-6">
                <div className="flex items-center space-x-2 text-gold-400 font-serif text-xs uppercase tracking-widest mb-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Direct Guest Relations</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl text-white tracking-tight uppercase">
                  SUBMIT A SUGGESTION, COMPLAINT OR INQUIRY
                </h3>
                <p className="text-xs text-slate-400 font-light mt-1">
                  Select the nature of your message below. Every submission is routed directly to the restaurant general management.
                </p>
              </div>

              {/* SUCCESS CONFIRMATION SCREEN */}
              {submittedTicket ? (
                <div className="py-8 space-y-6 text-center animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-xl">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div className="space-y-2 max-w-lg mx-auto">
                    <span className="text-[11px] font-serif uppercase tracking-widest text-gold-400 bg-gold-500/10 px-3 py-1 rounded-full border border-gold-500/30 inline-block">
                      Case #{submittedTicket.id}
                    </span>
                    <h4 className="font-serif text-2xl sm:text-3xl text-white uppercase tracking-wide">
                      Thank You, {submittedTicket.name}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                      Your <strong className="text-gold-300 font-medium">{submittedTicket.category}</strong> has been logged directly with our General Management and Concierge team.
                    </p>
                  </div>

                  {/* Submission Details Recap Box */}
                  <div className="p-5 rounded-2xl bg-[#091b2c] border border-slate-800 text-left text-xs max-w-lg mx-auto space-y-2">
                    <div className="flex justify-between border-b border-slate-800/80 pb-2">
                      <span className="text-slate-400">Subject:</span>
                      <span className="text-white font-medium">{submittedTicket.subject}</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-800/80 pb-2">
                      <span className="text-slate-400">Notification Email:</span>
                      <span className="text-slate-200">{submittedTicket.email}</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-800/80 pb-2">
                      <span className="text-slate-400">Dining Area:</span>
                      <span className="text-slate-200">{submittedTicket.diningArea}</span>
                    </div>
                    <div className="flex justify-between pt-1">
                      <span className="text-slate-400">Follow-up:</span>
                      <span className="text-gold-300 font-serif italic">
                        {submittedTicket.requestCallback ? 'Manager follow-up requested' : 'Standard review'}
                      </span>
                    </div>
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      onClick={handleResetForm}
                      className="px-6 py-2.5 bg-[#091b2c] hover:bg-slate-800 border border-slate-700 text-slate-200 font-serif text-xs uppercase tracking-wider rounded-xl transition cursor-pointer"
                    >
                      Submit Another Message
                    </button>
                    <button
                      onClick={onOpenBookTable}
                      className="px-6 py-2.5 bg-gradient-to-r from-gold-600 to-gold-500 text-slate-950 font-serif font-bold text-xs uppercase tracking-wider rounded-xl transition shadow-lg cursor-pointer"
                    >
                      Book a Table
                    </button>
                  </div>
                </div>
              ) : (
                /* INTERACTIVE FORM */
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* 1. Category Selector Pills */}
                  <div className="space-y-2">
                    <label className="block text-xs font-serif uppercase tracking-wider text-slate-300">
                      Inquiry Category <span className="text-gold-400">*</span>
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {CATEGORIES.map((cat) => {
                        const Icon = cat.icon;
                        const isSelected = selectedCategory === cat.id;
                        return (
                          <button
                            key={cat.id}
                            type="button"
                            onClick={() => setSelectedCategory(cat.id)}
                            className={`p-3 rounded-xl border text-left transition duration-200 flex items-start space-x-3 cursor-pointer ${
                              isSelected ? cat.activeColor : 'bg-[#091b2c]/80 border-slate-800 hover:border-slate-700 text-slate-300'
                            }`}
                          >
                            <div className="mt-0.5">
                              <Icon className="w-4 h-4 shrink-0" />
                            </div>
                            <div className="space-y-0.5">
                              <span className="font-serif text-xs font-medium block text-white">
                                {cat.label}
                              </span>
                              <span className="text-[10px] text-slate-400 font-light block leading-tight">
                                {cat.description}
                              </span>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* 2. Personal Information Fields (Name & Email) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block text-xs font-serif uppercase tracking-wider text-slate-300">
                        Full Name <span className="text-gold-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Lord Alexander Wright"
                        required
                        className="w-full bg-[#091b2c] border border-slate-700 focus:border-gold-400 focus:ring-1 focus:ring-gold-400/40 text-white placeholder-slate-500 text-xs px-4 py-3 rounded-xl outline-none transition"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs font-serif uppercase tracking-wider text-slate-300">
                        Email Address <span className="text-gold-400">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. alexander@example.com"
                        required
                        className="w-full bg-[#091b2c] border border-slate-700 focus:border-gold-400 focus:ring-1 focus:ring-gold-400/40 text-white placeholder-slate-500 text-xs px-4 py-3 rounded-xl outline-none transition"
                      />
                    </div>
                  </div>

                  {/* 3. Phone & Dining Area / Visit Date */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="space-y-1.5">
                      <label className="block text-xs font-serif uppercase tracking-wider text-slate-300">
                        Phone Number <span className="text-slate-500 text-[10px]">(Optional)</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 000-0000"
                        className="w-full bg-[#091b2c] border border-slate-700 focus:border-gold-400 focus:ring-1 focus:ring-gold-400/40 text-white placeholder-slate-500 text-xs px-4 py-3 rounded-xl outline-none transition"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs font-serif uppercase tracking-wider text-slate-300">
                        Dining Space
                      </label>
                      <select
                        name="diningArea"
                        value={formData.diningArea}
                        onChange={handleChange}
                        className="w-full bg-[#091b2c] border border-slate-700 focus:border-gold-400 focus:ring-1 focus:ring-gold-400/40 text-white text-xs px-3 py-3 rounded-xl outline-none transition cursor-pointer"
                      >
                        <option value="Not applicable / General Inquiry">General / Not Applicable</option>
                        <option value="The Ocean Terrace">The Ocean Terrace</option>
                        <option value="The Grand Marine Salon">The Grand Marine Salon</option>
                        <option value="The Chef's Raw Bar Counter">The Chef's Raw Bar Counter</option>
                        <option value="The Private Wine Vault">The Private Wine Vault</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs font-serif uppercase tracking-wider text-slate-300">
                        Visit Date <span className="text-slate-500 text-[10px]">(Optional)</span>
                      </label>
                      <input
                        type="date"
                        name="visitDate"
                        value={formData.visitDate}
                        onChange={handleChange}
                        className="w-full bg-[#091b2c] border border-slate-700 focus:border-gold-400 focus:ring-1 focus:ring-gold-400/40 text-slate-300 text-xs px-3 py-2.5 rounded-xl outline-none transition cursor-pointer"
                      />
                    </div>
                  </div>

                  {/* 4. Subject Line */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-serif uppercase tracking-wider text-slate-300">
                      Subject / Topic <span className="text-gold-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder={
                        selectedCategory === 'complaint'
                          ? 'e.g. Service feedback regarding Friday evening table'
                          : selectedCategory === 'suggestion'
                          ? 'e.g. Suggestion for Chilean Sea Bass preparation or wine list'
                          : selectedCategory === 'event_inquiry'
                          ? 'e.g. Private buyout inquiry for 14 guests in Wine Vault'
                          : 'e.g. Dietary question regarding shellfish allergies'
                      }
                      required
                      className="w-full bg-[#091b2c] border border-slate-700 focus:border-gold-400 focus:ring-1 focus:ring-gold-400/40 text-white placeholder-slate-500 text-xs px-4 py-3 rounded-xl outline-none transition"
                    />
                  </div>

                  {/* 5. Detailed Message Body */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <label className="block text-xs font-serif uppercase tracking-wider text-slate-300">
                        Message Details <span className="text-gold-400">*</span>
                      </label>
                      <span className="text-[10px] text-slate-500">
                        {formData.message.length} characters
                      </span>
                    </div>
                    <textarea
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={activeCategoryObj.placeholder}
                      required
                      className="w-full bg-[#091b2c] border border-slate-700 focus:border-gold-400 focus:ring-1 focus:ring-gold-400/40 text-white placeholder-slate-500 text-xs p-4 rounded-xl outline-none transition leading-relaxed resize-none"
                    />
                  </div>

                  {/* 6. Request Follow-up Checkbox */}
                  <div className="p-3.5 bg-[#091b2c]/80 border border-slate-800 rounded-xl flex items-center space-x-3">
                    <input
                      type="checkbox"
                      id="requestCallback"
                      name="requestCallback"
                      checked={formData.requestCallback}
                      onChange={handleChange}
                      className="w-4 h-4 rounded border-slate-700 text-gold-500 focus:ring-gold-400 bg-slate-900 cursor-pointer"
                    />
                    <label htmlFor="requestCallback" className="text-xs text-slate-300 font-light cursor-pointer select-none">
                      I request direct personal follow-up from the General Manager or Sommelier by email/telephone within 24 hours.
                    </label>
                  </div>

                  {/* 7. Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-gradient-to-r from-gold-600 via-gold-500 to-gold-400 hover:from-gold-500 hover:to-gold-300 text-slate-950 font-serif font-bold text-xs uppercase tracking-[0.22em] rounded-xl transition duration-300 cursor-pointer shadow-xl flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.99]"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                        <span>Transmitting to Management...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit {activeCategoryObj.label}</span>
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-center text-slate-500 font-light">
                    🔒 Submissions are confidential and handled directly by SEACLUB Guest Relations & Executive Management.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
