import React, { useState } from 'react';
import { JobPosition } from '../types';
import { X, Briefcase, CheckCircle2, Upload, MapPin, Bell } from 'lucide-react';

interface JobApplyModalProps {
  job: JobPosition | null;
  onClose: () => void;
}

export const JobApplyModal: React.FC<JobApplyModalProps> = ({ job, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [selectedRole, setSelectedRole] = useState<string>(job?.title || 'Tele-Calling Collection Executive');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    experience: '',
    draCertified: 'Yes',
    notes: '',
    emailNotification: true,
  });

  // Sync role if job prop changes
  React.useEffect(() => {
    if (job?.title) {
      setSelectedRole(job.title);
    }
  }, [job]);

  if (!job) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const appId = 'APP-' + Math.floor(100000 + Math.random() * 900000);

    // Save job application locally for admin viewing
    try {
      const existing = JSON.parse(localStorage.getItem('mla_all_submissions') || '[]');
      const newEntry = {
        id: appId,
        type: 'Job Application',
        name: formData.name,
        roleOrService: selectedRole,
        email: formData.email,
        phone: formData.phone,
        city: formData.city,
        draCertified: formData.draCertified,
        experience: formData.experience,
        message: formData.notes,
        emailOptIn: formData.emailNotification ? 'Yes (Opted-in for updates)' : 'No',
        timestamp: new Date().toLocaleString()
      };
      localStorage.setItem('mla_all_submissions', JSON.stringify([newEntry, ...existing]));
    } catch (e) {
      console.error(e);
    }

    const subject = encodeURIComponent(`Agent Job Application: ${selectedRole} - ${formData.name}`);
    const body = encodeURIComponent(
      `MLA ASSOCIATE Agent Job Application:\n` +
      `-----------------------------------\n` +
      `Applied Position / Role: ${selectedRole}\n` +
      `Applicant Name: ${formData.name}\n` +
      `Phone Number: ${formData.phone}\n` +
      `Email Address: ${formData.email}\n` +
      `Current City / District in Bihar: ${formData.city || 'N/A'}\n` +
      `DRA Certified (IIBF): ${formData.draCertified}\n` +
      `Experience in Collections/Repo: ${formData.experience || 'N/A'}\n` +
      `Email Status Notifications: ${formData.emailNotification ? 'Opted In' : 'Opted Out'}\n` +
      `-----------------------------------`
    );

    window.location.href = `mailto:mlaassociate002@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div className="bg-[#0B192C] border border-amber-500/40 rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative text-slate-100 max-h-[90vh] overflow-y-auto">
        
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
            <h3 className="text-xl font-bold font-serif text-white">Application Submitted!</h3>
            <p className="text-xs text-slate-300 leading-relaxed max-w-xs mx-auto">
              Thank you <span className="text-white font-semibold">{formData.name}</span>. Our HR Operations team will review your credentials for the position of <span className="text-amber-400">{job.title}</span>.
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
            <div className="mb-5">
              <div className="flex items-center space-x-2 mb-1">
                <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/20">
                  {job.department}
                </span>
                <span className="text-[10px] font-extrabold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                  BIHAR HIRING DRIVE
                </span>
              </div>
              <h3 className="text-xl font-bold font-serif text-white mt-1">{job.title}</h3>
              <p className="text-xs text-slate-300 flex items-center mt-1">
                <MapPin className="w-3.5 h-3.5 text-amber-400 mr-1" /> {job.location}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs font-bold text-amber-400 mb-1">Select Applying Role / Post *</label>
                <select
                  value={selectedRole}
                  onChange={(e) => setSelectedRole(e.target.value)}
                  className="w-full bg-slate-950 border-2 border-amber-500/50 rounded-xl px-3.5 py-2.5 text-xs text-white font-semibold focus:outline-none focus:border-amber-400 shadow-md"
                >
                  <option value="Tele-Calling Collection Executive (Voice Desk)">Tele-Calling Collection Executive (Voice Desk - 50+ Vacancies)</option>
                  <option value="Field Recovery Officer - DRA Certified (Field Desk)">Field Recovery Officer - DRA Certified (All 38 Bihar Districts - 150+ Vacancies)</option>
                  <option value="Tele-Calling Team Leader & Supervisor">Tele-Calling Team Leader & Supervisor (Patna Hub - 10+ Vacancies)</option>
                  <option value="Vehicle Repossession Specialist">Vehicle Repossession Specialist (Asset Recovery - 25+ Vacancies)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Vikram Singh"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-slate-200 focus:outline-none focus:border-amber-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Phone Number *</label>
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
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="vikram@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-slate-200 focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Your City / District in Bihar *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Patna, Gaya, Muzaffarpur, Bhagalpur, Purnia"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-slate-200 focus:outline-none focus:border-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">DRA Certified (IIBF)?</label>
                  <select
                    value={formData.draCertified}
                    onChange={(e) => setFormData({ ...formData, draCertified: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-slate-200 focus:outline-none focus:border-amber-500"
                  >
                    <option value="Yes">Yes (Active Certificate)</option>
                    <option value="No">No (Willing to undergo exam)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Years of Experience in Collections/Recovery</label>
                <input
                  type="text"
                  placeholder="e.g. 3 Years in Auto Finance recovery"
                  value={formData.experience}
                  onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-slate-200 focus:outline-none focus:border-amber-500"
                />
              </div>

              {/* Simulated Resume Upload */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Upload Resume (PDF / DOC)</label>
                <div className="border border-dashed border-slate-700 bg-slate-950/60 rounded-xl p-3 text-center text-xs text-slate-400 hover:border-amber-500/50 cursor-pointer flex items-center justify-center space-x-2">
                  <Upload className="w-4 h-4 text-amber-400" />
                  <span>Click or drag your Resume file here</span>
                </div>
              </div>

              {/* Email Notification Checkbox */}
              <div className="bg-slate-950/80 border border-amber-500/20 rounded-xl p-2.5 flex items-start space-x-2.5">
                <input
                  type="checkbox"
                  id="emailNotificationJob"
                  checked={formData.emailNotification}
                  onChange={(e) => setFormData({ ...formData, emailNotification: e.target.checked })}
                  className="mt-0.5 rounded border-slate-700 bg-slate-900 text-amber-500 focus:ring-amber-500/40 h-4 w-4 shrink-0 accent-amber-500 cursor-pointer"
                />
                <label htmlFor="emailNotificationJob" className="text-xs text-slate-300 cursor-pointer select-none leading-tight">
                  <span className="font-bold text-amber-400 flex items-center gap-1 mb-0.5">
                    <Bell className="w-3.5 h-3.5 text-amber-400 inline" />
                    <span>Email Status Notifications</span>
                  </span>
                  <span>Notify me via email regarding application updates, interview schedules, and onboarding status.</span>
                </label>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-bold text-xs rounded-xl shadow-lg hover:scale-[1.01] transition-all cursor-pointer mt-2"
              >
                Submit Application to MLA HR
              </button>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};
