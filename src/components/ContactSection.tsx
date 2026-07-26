import React, { useState } from 'react';
import { BRANCH_OFFICES_DATA } from '../data/mockData';
import { BranchOffice } from '../types';
import { Mail, Phone, MapPin, Send, CheckCircle2, Building, ShieldCheck, Clock, Bell } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [selectedOffice, setSelectedOffice] = useState<BranchOffice>(BRANCH_OFFICES_DATA[0]);
  const [submittedTicket, setSubmittedTicket] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    city: '',
    serviceRequired: 'Collection & Repossession',
    message: '',
    emailNotification: true,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      alert('Please fill in required fields (Name, Email).');
      return;
    }
    const ticketId = 'MLA-' + Math.floor(100000 + Math.random() * 900000);
    setSubmittedTicket(ticketId);

    // Save inquiry locally for admin viewing
    try {
      const existing = JSON.parse(localStorage.getItem('mla_all_submissions') || '[]');
      const isBankInquiry = formData.company && formData.company.trim() !== '';
      const newEntry = {
        id: (isBankInquiry ? 'BANK-' : 'INQ-') + Math.floor(100000 + Math.random() * 900000),
        type: isBankInquiry ? 'Bank & NBFC Inquiry' : 'Client Inquiry',
        name: formData.name,
        roleOrService: formData.serviceRequired,
        email: formData.email,
        phone: formData.phone,
        city: formData.city,
        companyOrBank: formData.company,
        message: formData.message,
        emailOptIn: formData.emailNotification ? 'Yes (Opted-in for updates)' : 'No',
        timestamp: new Date().toLocaleString()
      };
      localStorage.setItem('mla_all_submissions', JSON.stringify([newEntry, ...existing]));
    } catch (e) {
      console.error(e);
    }

    const subject = encodeURIComponent(`Inquiry from ${formData.name} - ${formData.serviceRequired}`);
    const body = encodeURIComponent(
      `MLA ASSOCIATE Inquiry Details:\n` +
      `-----------------------------------\n` +
      `Full Name: ${formData.name}\n` +
      `Company / Bank: ${formData.company || 'N/A'}\n` +
      `Email Address: ${formData.email}\n` +
      `City / Region: ${formData.city || 'N/A'}\n` +
      `Service Required: ${formData.serviceRequired}\n` +
      `Email Status Notifications: ${formData.emailNotification ? 'Opted In' : 'Opted Out'}\n\n` +
      `Message / Details:\n${formData.message || 'No additional message provided.'}\n` +
      `-----------------------------------\n` +
      `Reference Ticket ID: ${ticketId}`
    );

    // Launch email client addressed to mlaassociate002@gmail.com
    window.location.href = `mailto:mlaassociate002@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20 bg-[#071321] text-slate-100 relative overflow-hidden border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-serif tracking-tight">
            Contact <span className="text-amber-400">MLA ASSOCIATE</span>
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            Partner with India’s leading Collection & Repossession Agency. Reach out to our institutional desk for portfolio inquiries, field verification deployment, or general consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Contact Form */}
          <div className="lg:col-span-7 bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl relative">
            
            {submittedTicket ? (
              <div className="text-center py-10 space-y-4 animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/40 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold font-serif text-white">Inquiry Received Successfully!</h3>
                <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="text-white font-semibold">{formData.name}</span>. Our Senior Portfolio Manager will review your details and contact you within 2 business hours.
                </p>
                <div className="inline-block p-3 bg-slate-950 rounded-xl border border-amber-500/30 text-xs text-amber-400 font-mono font-bold">
                  Reference Ticket ID: {submittedTicket}
                </div>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setSubmittedTicket(null);
                      setFormData({
                        name: '',
                        company: '',
                        phone: '',
                        email: '',
                        city: '',
                        serviceRequired: 'Collection & Repossession',
                        message: '',
                      });
                    }}
                    className="px-6 py-2.5 bg-slate-800 hover:bg-slate-700 text-xs font-bold text-slate-200 rounded-lg cursor-pointer transition-all"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <h3 className="text-lg font-bold text-white font-serif">Institutional Inquiry Form</h3>
                  <span className="text-[10px] text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-full font-semibold">Fast 2hr Response</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Kumar"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-slate-200 focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Company / Institution Name</label>
                    <input
                      type="text"
                      placeholder="e.g. HDFC Bank / ABC Finance"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-slate-200 focus:outline-none focus:border-amber-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-slate-200 focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-slate-200 focus:outline-none focus:border-amber-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">City / Region</label>
                    <input
                      type="text"
                      placeholder="e.g. Mumbai, Delhi, Bengaluru"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-slate-200 focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Service Required</label>
                    <select
                      value={formData.serviceRequired}
                      onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-slate-200 focus:outline-none focus:border-amber-500"
                    >
                      <option value="Collection & Repossession">Collection & Repossession</option>
                      <option value="Loan Collection">Loan Collection</option>
                      <option value="Vehicle Repossession">Vehicle Repossession</option>
                      <option value="Skip Tracing">Skip Tracing</option>
                      <option value="Debt Recovery">Debt Recovery</option>
                      <option value="Field Verification">Field Verification</option>
                      <option value="Customer Follow-up">Customer Follow-up</option>
                      <option value="Recovery Portfolio Management">Recovery Portfolio Management</option>
                      <option value="Asset Recovery">Asset Recovery</option>
                      <option value="Legal Recovery Support">Legal Recovery Support</option>
                      <option value="Collection Analytics & Reporting">Collection Analytics & Reporting</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Message / Portfolio Details</label>
                  <textarea
                    rows={4}
                    placeholder="Provide details regarding portfolio volume, DPD buckets, or specific recovery requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-slate-200 focus:outline-none focus:border-amber-500"
                  />
                </div>

                {/* Email Notification Opt-in Checkbox */}
                <div className="bg-slate-950/80 border border-amber-500/20 rounded-xl p-3 flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="emailNotificationContact"
                    checked={formData.emailNotification}
                    onChange={(e) => setFormData({ ...formData, emailNotification: e.target.checked })}
                    className="mt-0.5 rounded border-slate-700 bg-slate-900 text-amber-500 focus:ring-amber-500/40 h-4 w-4 shrink-0 accent-amber-500 cursor-pointer"
                  />
                  <label htmlFor="emailNotificationContact" className="text-xs text-slate-300 cursor-pointer select-none leading-tight">
                    <span className="font-bold text-amber-400 flex items-center gap-1 mb-0.5">
                      <Bell className="w-3.5 h-3.5 text-amber-400 inline" />
                      <span>Email Status Updates</span>
                    </span>
                    <span>Send me automated email status notifications and reference updates regarding this enquiry.</span>
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-950 font-bold text-xs rounded-xl shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 hover:scale-[1.01] transition-all flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Inquiry to MLA ASSOCIATE</span>
                </button>
              </form>
            )}

          </div>

          {/* Office Locations & Interactive Map Placeholder */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Contact Cards */}
            <div className="p-6 bg-slate-900/90 border border-slate-800 rounded-2xl space-y-4">
              <h3 className="text-lg font-bold text-white font-serif flex items-center justify-between">
                <span>Head Office & Branch Contact</span>
                <ShieldCheck className="w-5 h-5 text-amber-400" />
              </h3>

              <div className="space-y-3 text-xs">
                <div className="p-3 bg-slate-950 rounded-xl border border-amber-500/30">
                  <span className="font-bold text-amber-400 block text-xs">Head Office (Dhanbad, Jharkhand):</span>
                  <span className="text-slate-200 block text-[11px] mt-0.5">MLA Complex, Main Road, Near City Center, Dhanbad, Jharkhand - 826001</span>
                </div>

                <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
                  <span className="font-bold text-amber-400 block text-xs">Branch Office (Patna, Bihar):</span>
                  <span className="text-slate-200 block text-[11px] mt-0.5">MLA Corporate Office, Rajeev Nagar, Digha, Patliputra, Patna, Bihar - 800024 (Rajeev Nagar) / 800011 (Digha) / 800013 (Patliputra)</span>
                </div>

                <a href="mailto:mlaassociate002@gmail.com" className="flex items-start space-x-3 p-3 bg-slate-950 rounded-xl border border-amber-500/30 hover:border-amber-400 transition-colors">
                  <Mail className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block text-[11px]">Official Contact Email</span>
                    <span className="text-amber-400 font-bold text-xs">mlaassociate002@gmail.com</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Branch Offices Selector & Map Simulation */}
            <div className="p-6 bg-slate-900/90 border border-slate-800 rounded-2xl space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold text-white font-serif">Regional Office Network</h3>
                <span className="text-[10px] text-amber-400 font-bold bg-amber-500/10 px-2 py-0.5 rounded">6 Major Hubs</span>
              </div>

              {/* Office Selector Pills */}
              <div className="flex flex-wrap gap-1.5">
                {BRANCH_OFFICES_DATA.map((office) => (
                  <button
                    key={office.id}
                    onClick={() => setSelectedOffice(office)}
                    className={`px-2.5 py-1 text-[11px] font-semibold rounded-lg transition-all ${
                      selectedOffice.id === office.id
                        ? 'bg-amber-500 text-slate-950 shadow'
                        : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
                    }`}
                  >
                    {office.city}
                  </button>
                ))}
              </div>

              {/* Selected Office Details */}
              <div className="p-4 bg-slate-950 rounded-xl border border-amber-500/30 text-xs space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-amber-400 text-sm font-serif">{selectedOffice.city} Office</span>
                  <span className="text-[10px] font-bold text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                    {selectedOffice.type}
                  </span>
                </div>
                <p className="text-slate-300">{selectedOffice.address}</p>
                <div className="pt-2 border-t border-slate-900 flex justify-between text-[11px] text-slate-400">
                  <span>Ph: {selectedOffice.phone}</span>
                  <span>{selectedOffice.email}</span>
                </div>
              </div>

              {/* Simulated Google Map View */}
              <div className="relative h-44 bg-slate-950 rounded-xl overflow-hidden border border-slate-800 flex flex-col justify-end p-4">
                <div 
                  className="absolute inset-0 opacity-20 bg-cover bg-center"
                  style={{
                    backgroundImage: `radial-gradient(#38bdf8 1px, transparent 1px)`,
                    backgroundSize: '16px 16px'
                  }}
                />
                
                {/* Simulated Map Pin */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                  <div className="w-8 h-8 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center mx-auto shadow-lg shadow-amber-500/50 animate-bounce">
                    <MapPin className="w-5 h-5 fill-slate-950" />
                  </div>
                  <span className="text-[10px] font-bold text-white bg-slate-900/90 px-2 py-0.5 rounded border border-amber-500/40 mt-1 inline-block">
                    MLA {selectedOffice.city}
                  </span>
                </div>

                <div className="relative z-10 bg-slate-900/90 backdrop-blur-sm p-2 rounded-lg border border-slate-800 flex justify-between items-center text-[10px] text-slate-300">
                  <span>GPS Coords: {selectedOffice.coords.lat}, {selectedOffice.coords.lng}</span>
                  <a
                    href={`https://maps.google.com/?q=${selectedOffice.coords.lat},${selectedOffice.coords.lng}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-amber-400 font-bold hover:underline"
                  >
                    Open in Google Maps →
                  </a>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
