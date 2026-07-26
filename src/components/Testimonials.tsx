import React, { useState, useEffect } from 'react';
import { TESTIMONIALS_DATA } from '../data/mockData';
import { Testimonial } from '../types';
import { Star, Quote, Building2, ShieldCheck, Plus, X, CheckCircle2, MessageSquarePlus, Sparkles } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(() => {
    const saved = localStorage.getItem('mla_bank_testimonials');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return TESTIMONIALS_DATA;
      }
    }
    return TESTIMONIALS_DATA;
  });

  const [showAddModal, setShowAddModal] = useState(false);
  const [showSuccessToast, setShowSuccessToast] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    designation: '',
    company: '',
    rating: 5,
    content: '',
  });

  useEffect(() => {
    localStorage.setItem('mla_bank_testimonials', JSON.stringify(testimonials));
  }, [testimonials]);

  const handleAddFeedback = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.company || !formData.name || !formData.content) {
      alert('Please fill in Bank Name, Officer Name, and Feedback content.');
      return;
    }

    const newFeedback: Testimonial = {
      id: 'test-user-' + Date.now(),
      name: formData.name,
      designation: formData.designation || 'Recovery Officer',
      company: formData.company,
      rating: Number(formData.rating) || 5,
      content: formData.content,
      image: `https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=250`
    };

    setTestimonials((prev) => [newFeedback, ...prev]);
    setShowAddModal(false);
    setFormData({
      name: '',
      designation: '',
      company: '',
      rating: 5,
      content: '',
    });

    setShowSuccessToast(true);
    setTimeout(() => setShowSuccessToast(false), 4000);
  };

  // Duplicate list for continuous infinite marquee loop
  const marqueeList = [...testimonials, ...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="py-20 bg-[#0B192C] text-slate-100 relative overflow-hidden">
      
      {/* Background Lighting */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header with Small Discreet Feedback Button */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          <div className="text-center md:text-left max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
              <Quote className="w-3.5 h-3.5" />
              <span>Verified Institutional Feedback</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-serif tracking-tight">
              Trusted by Financial Leaders
            </h2>
            <p className="mt-2 text-slate-300 text-sm sm:text-base leading-relaxed">
              Real-time feedback & endorsements from recovery heads, CROs, and NPA managers of India's leading Banks & NBFCs.
            </p>
          </div>

          {/* Discreet Small Button for Bank Feedback Update */}
          <div className="shrink-0 flex flex-col items-center md:items-end">
            <button
              onClick={() => setShowAddModal(true)}
              className="px-3.5 py-1.5 text-xs font-semibold text-slate-300 hover:text-amber-400 bg-slate-900/90 hover:bg-slate-800 border border-slate-800 hover:border-amber-500/40 rounded-full transition-all flex items-center space-x-1.5 shadow-md group cursor-pointer"
              title="Post official bank review"
            >
              <MessageSquarePlus className="w-3.5 h-3.5 text-amber-400 group-hover:scale-110 transition-transform" />
              <span>+ Add Bank Feedback</span>
            </button>
            <span className="text-[10px] text-slate-500 mt-1">Live Institutional Update Desk</span>
          </div>
        </div>

        {/* Live Toast Alert */}
        {showSuccessToast && (
          <div className="mb-6 p-3.5 bg-emerald-500/10 border border-emerald-500/40 rounded-xl text-emerald-300 text-xs flex items-center space-x-2 animate-fadeIn max-w-md mx-auto shadow-lg">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span className="font-semibold">New Bank Feedback updated live in the running ticker below!</span>
          </div>
        )}

      </div>

      {/* CONTINUOUS RUNNING MARQUEE ("HMSA CHALTE RAHE") */}
      <div className="relative w-full overflow-hidden py-4 group">
        
        {/* Subtle Gradient Fade Edges */}
        <div className="absolute top-0 bottom-0 left-0 w-20 z-20 bg-gradient-to-r from-[#0B192C] to-transparent pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-20 z-20 bg-gradient-to-l from-[#0B192C] to-transparent pointer-events-none" />

        <div className="flex w-max space-x-6 animate-marquee group-hover:[animation-play-state:paused]">
          {marqueeList.map((test, index) => (
            <div
              key={`${test.id}-${index}`}
              className="w-[320px] sm:w-[380px] shrink-0 bg-slate-900/95 border border-slate-800 hover:border-amber-500/40 rounded-2xl p-5 sm:p-6 transition-all duration-300 shadow-xl flex flex-col justify-between relative"
            >
              {/* Top Quote Accent */}
              <div className="absolute top-4 right-4 text-slate-800/80">
                <Quote className="w-8 h-8" />
              </div>

              <div>
                {/* Rating Stars */}
                <div className="flex items-center space-x-1 mb-3">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-[10px] font-bold text-amber-400 ml-1.5 bg-amber-500/10 px-2 py-0.5 rounded">
                    5.0 Verified
                  </span>
                </div>

                {/* Feedback Content */}
                <p className="text-xs text-slate-300 leading-relaxed italic mb-5 relative z-10 line-clamp-4">
                  "{test.content}"
                </p>
              </div>

              {/* Author & Bank Brand */}
              <div className="pt-3 border-t border-slate-800/80 flex items-center space-x-3">
                <img
                  src={test.image}
                  alt={test.name}
                  className="w-10 h-10 rounded-full object-cover border-2 border-amber-500/40 shrink-0"
                  referrerPolicy="no-referrer"
                />
                <div className="min-w-0 flex-1">
                  <h3 className="text-xs font-bold text-white font-serif truncate flex items-center">
                    <span className="truncate">{test.name}</span>
                    <ShieldCheck className="w-3.5 h-3.5 text-amber-400 ml-1 shrink-0" />
                  </h3>
                  <p className="text-[11px] font-medium text-amber-400 truncate">{test.designation}</p>
                  <p className="text-[10px] text-slate-400 flex items-center mt-0.5 font-semibold truncate">
                    <Building2 className="w-3 h-3 mr-1 text-amber-400 shrink-0" />
                    <span className="truncate text-slate-200">{test.company}</span>
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* Second Reverse Marquee Row for Dynamic Depth */}
      <div className="relative w-full overflow-hidden py-3 group mt-2">
        <div className="absolute top-0 bottom-0 left-0 w-20 z-20 bg-gradient-to-r from-[#0B192C] to-transparent pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-20 z-20 bg-gradient-to-l from-[#0B192C] to-transparent pointer-events-none" />

        <div className="flex w-max space-x-6 animate-marquee-reverse group-hover:[animation-play-state:paused]">
          {marqueeList.map((test, index) => (
            <div
              key={`rev-${test.id}-${index}`}
              className="w-[320px] sm:w-[380px] shrink-0 bg-slate-900/90 border border-slate-800/90 hover:border-amber-500/30 rounded-2xl p-5 sm:p-6 transition-all duration-300 shadow-xl flex flex-col justify-between relative"
            >
              <div>
                <div className="flex items-center space-x-1 mb-2">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-[10px] text-slate-400 ml-2">Institutional Review</span>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed italic mb-4 line-clamp-3">
                  "{test.content}"
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                <div>
                  <span className="font-bold text-white text-xs block">{test.name}</span>
                  <span className="text-[10px] text-slate-400">{test.company}</span>
                </div>
                <span className="text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded font-bold">
                  Verified Bank
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Institution Category Badges */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-slate-800/80 text-center relative z-10">
        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
          Empowering 50+ Institutional Lenders Across India
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-semibold text-slate-300">
          <span className="px-3.5 py-1.5 bg-slate-900/90 rounded-full border border-slate-800 text-amber-400">HDFC Bank</span>
          <span className="px-3.5 py-1.5 bg-slate-900/90 rounded-full border border-slate-800 text-amber-400">ICICI Bank</span>
          <span className="px-3.5 py-1.5 bg-slate-900/90 rounded-full border border-slate-800 text-amber-400">State Bank of India</span>
          <span className="px-3.5 py-1.5 bg-slate-900/90 rounded-full border border-slate-800 text-amber-400">Axis Bank</span>
          <span className="px-3.5 py-1.5 bg-slate-900/90 rounded-full border border-slate-800 text-amber-400">Kotak Mahindra</span>
          <span className="px-3.5 py-1.5 bg-slate-900/90 rounded-full border border-slate-800 text-amber-400">Mahindra Finance</span>
          <span className="px-3.5 py-1.5 bg-slate-900/90 rounded-full border border-slate-800 text-amber-400">Bajaj Finance</span>
          <span className="px-3.5 py-1.5 bg-slate-900/90 rounded-full border border-slate-800 text-amber-400">Shriram Finance</span>
        </div>
      </div>

      {/* ADD BANK FEEDBACK MODAL */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-slate-900 border border-amber-500/40 rounded-2xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl space-y-4">
            
            <button
              onClick={() => setShowAddModal(false)}
              className="absolute top-4 right-4 p-1.5 rounded-full bg-slate-800 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center space-x-3 pb-3 border-b border-slate-800">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white font-serif">Submit Bank / Lender Feedback</h3>
                <p className="text-xs text-slate-400">Updates live instantly into the running ticker feed.</p>
              </div>
            </div>

            <form onSubmit={handleAddFeedback} className="space-y-4 pt-2">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Bank / Institution Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Canara Bank / IndusInd Bank / L&T Finance"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-slate-200 focus:outline-none focus:border-amber-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Officer / Manager Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh Kumar"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-slate-200 focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Designation</label>
                  <input
                    type="text"
                    placeholder="e.g. Recovery Head / AGM NPA Cell"
                    value={formData.designation}
                    onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-slate-200 focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Star Rating</label>
                <select
                  value={formData.rating}
                  onChange={(e) => setFormData({ ...formData, rating: Number(e.target.value) })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-slate-200 focus:outline-none focus:border-amber-500"
                >
                  <option value={5}>⭐⭐⭐⭐⭐ 5 Stars (Outstanding Execution)</option>
                  <option value={4}>⭐⭐⭐⭐ 4 Stars (Very Good)</option>
                  <option value={3}>⭐⭐⭐ 3 Stars (Satisfactory)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Official Review / Endorsement *</label>
                <textarea
                  rows={3}
                  required
                  placeholder="Describe your recovery experience, compliance standards, or resolution results with MLA ASSOCIATE..."
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-slate-200 focus:outline-none focus:border-amber-500"
                />
              </div>

              <div className="pt-2 flex items-center justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold rounded-xl"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-extrabold rounded-xl shadow-lg flex items-center space-x-1.5"
                >
                  <span>Publish Live Feedback</span>
                  <Sparkles className="w-3.5 h-3.5" />
                </button>
              </div>

            </form>

          </div>
        </div>
      )}

    </section>
  );
};
