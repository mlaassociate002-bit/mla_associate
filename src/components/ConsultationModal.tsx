import React, { useState } from 'react';
import { X, ShieldCheck, PhoneCall, CheckCircle2, Bell } from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    institution: '',
    phone: '',
    email: '',
    portfolioType: 'Retail Loans',
    notes: '',
    emailNotification: true,
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const reqId = 'CON-' + Math.floor(100000 + Math.random() * 900000);

    // Save consultation request locally for admin viewing
    try {
      const existing = JSON.parse(localStorage.getItem('mla_all_submissions') || '[]');
      const isBank = formData.institution && formData.institution.trim() !== '';
      const newEntry = {
        id: (isBank ? 'BANK-' : 'CON-') + Math.floor(100000 + Math.random() * 900000),
        type: isBank ? 'Bank & NBFC Inquiry' : 'Consultation Request',
        name: formData.name,
        roleOrService: formData.portfolioType,
        email: formData.email,
        phone: formData.phone,
        city: 'Bihar (Regional Office)',
        companyOrBank: formData.institution,
        message: formData.notes,
        emailOptIn: formData.emailNotification ? 'Yes (Opted-in for updates)' : 'No',
        timestamp: new Date().toLocaleString()
      };
      localStorage.setItem('mla_all_submissions', JSON.stringify([newEntry, ...existing]));
    } catch (e) {
      console.error(e);
    }

    const subject = encodeURIComponent(`Consultation Request: ${formData.institution || formData.name} - ${formData.portfolioType}`);
    const body = encodeURIComponent(
      `MLA ASSOCIATE Consultation Request:\n` +
      `-----------------------------------\n` +
      `Name: ${formData.name}\n` +
      `Bank / Institution: ${formData.institution || 'N/A'}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone || 'N/A'}\n` +
      `Portfolio Category: ${formData.portfolioType}\n` +
      `Email Status Notifications: ${formData.emailNotification ? 'Opted In' : 'Opted Out'}\n` +
      `Notes: ${formData.notes || 'None'}\n` +
      `-----------------------------------`
    );

    window.location.href = `mailto:mlaassociate002@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div className="bg-[#0B192C] border border-amber-500/40 rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative text-slate-100 overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-14 h-14 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/40 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold font-serif text-white">Free Consultation Booked!</h3>
            <p className="text-xs text-slate-300 leading-relaxed max-w-xs mx-auto">
              Our Senior Institutional Advisory Desk will get in touch with <span className="text-white font-semibold">{formData.name}</span> within 2 hours.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="px-6 py-2.5 bg-amber-500 text-slate-950 font-bold text-xs rounded-xl hover:bg-amber-400 transition-all cursor-pointer"
            >
              Close Window
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center justify-center">
                <PhoneCall className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold font-serif text-white">Get Free Consultation</h3>
                <p className="text-xs text-amber-400">MLA ASSOCIATE Institutional Advisory</p>
              </div>
            </div>

            <p className="text-xs text-slate-300 mb-5 leading-relaxed">
              Schedule a confidential recovery strategy session with our senior DRA compliance experts.
            </p>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Your Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. S. K. Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-slate-200 focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Bank / Company Name</label>
                <input
                  type="text"
                  placeholder="e.g. National Bank Ltd / FinTech NBFC"
                  value={formData.institution}
                  onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-slate-200 focus:outline-none focus:border-amber-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Phone *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-slate-200 focus:outline-none focus:border-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="sharma@bank.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-slate-200 focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Portfolio Category</label>
                <select
                  value={formData.portfolioType}
                  onChange={(e) => setFormData({ ...formData, portfolioType: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-slate-200 focus:outline-none focus:border-amber-500"
                >
                  <option value="DAK & Early Bucket (1-3)">DAK & Early Bucket Collections (Bucket 1, 2, 3 / SMA)</option>
                  <option value="All Loan Types Collection">All Loan Types (Personal, Auto, Tractor, CV, 2W, Gold, MFI)</option>
                  <option value="Retail & Personal Loans">Retail & Personal Loans (Unsecured / Credit Cards)</option>
                  <option value="Vehicle Repossession">Vehicle Repossession (2W / 4W / Commercial / Tractor)</option>
                  <option value="Commercial NPA & Write-off">Hard NPA & Written-off Debt Recovery</option>
                  <option value="Microfinance & MSME">Microfinance, MFI & Business Loans</option>
                  <option value="Mortgage & LAP">Housing Loan, Mortgage & LAP</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Notes / Special Requirements</label>
                <textarea
                  rows={2}
                  placeholder="Mention target cities or special SLA expectations..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-slate-200 focus:outline-none focus:border-amber-500"
                />
              </div>

              {/* Email Notification Checkbox */}
              <div className="bg-slate-950/80 border border-amber-500/20 rounded-xl p-2.5 flex items-start space-x-2.5">
                <input
                  type="checkbox"
                  id="emailNotificationConsultation"
                  checked={formData.emailNotification}
                  onChange={(e) => setFormData({ ...formData, emailNotification: e.target.checked })}
                  className="mt-0.5 rounded border-slate-700 bg-slate-900 text-amber-500 focus:ring-amber-500/40 h-4 w-4 shrink-0 accent-amber-500 cursor-pointer"
                />
                <label htmlFor="emailNotificationConsultation" className="text-xs text-slate-300 cursor-pointer select-none leading-tight">
                  <span className="font-bold text-amber-400 flex items-center gap-1 mb-0.5">
                    <Bell className="w-3.5 h-3.5 text-amber-400 inline" />
                    <span>Email Status Updates</span>
                  </span>
                  <span>Receive automated email updates regarding consultation status and scheduling.</span>
                </label>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-bold text-xs rounded-xl shadow-lg hover:scale-[1.01] transition-all cursor-pointer mt-2"
              >
                Confirm Free Consultation Request
              </button>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};
