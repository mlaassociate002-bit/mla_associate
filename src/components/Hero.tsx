import React, { useState } from 'react';
import { Shield, ArrowRight, CheckCircle2, Building, ShieldCheck, MapPin, Award, ChevronRight, Car, Truck, Bike, TrendingUp, Landmark, Smartphone, UserCheck, Activity } from 'lucide-react';
import { LogoIcon } from './LogoIcon';

interface HeroProps {
  onOpenConsultation: () => void;
  onScrollToContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation, onScrollToContact }) => {
  const [quickIndustry, setQuickIndustry] = useState('Banks & NBFCs');
  const [quickAmount, setQuickAmount] = useState('10L - 1 Cr');
  const [quickEstimate, setQuickEstimate] = useState<string | null>(null);

  const handleQuickAssess = (e: React.FormEvent) => {
    e.preventDefault();
    setQuickEstimate(`Estimated Recovery Window: 15-30 Days • Strategy: Dedicated DRA Field Squad`);
  };

  const scrollToRepoApp = () => {
    const element = document.getElementById('repo-app');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-[85vh] pt-10 pb-16 md:pt-14 md:pb-20 bg-[#0B192C] text-white overflow-hidden flex items-center">
      {/* Background Graphic Accents */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/40 via-[#0B192C] to-[#071321]" />
      
      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`, backgroundSize: '32px 32px' }}
      />

      {/* Animated Floating Asset Graphics in Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {/* Banking Icon Float */}
        <div className="absolute top-24 left-[8%] p-3 rounded-2xl bg-slate-900/40 border border-slate-800/80 text-amber-400/30 animate-bounce duration-[6000ms]">
          <Landmark className="w-10 h-10" />
        </div>
        {/* Car Silhouette Float */}
        <div className="absolute top-1/3 left-[4%] p-3 rounded-2xl bg-slate-900/40 border border-slate-800/80 text-blue-400/30 animate-pulse duration-[4000ms]">
          <Car className="w-12 h-12" />
        </div>
        {/* Truck Silhouette Float */}
        <div className="absolute bottom-1/4 left-[12%] p-3 rounded-2xl bg-slate-900/40 border border-slate-800/80 text-amber-500/20 animate-bounce duration-[8000ms]">
          <Truck className="w-10 h-10" />
        </div>
        {/* Bike Silhouette Float */}
        <div className="absolute top-1/4 right-[8%] p-3 rounded-2xl bg-slate-900/40 border border-slate-800/80 text-slate-400/30 animate-pulse duration-[5000ms]">
          <Bike className="w-10 h-10" />
        </div>
        {/* Financial Chart Float */}
        <div className="absolute bottom-20 right-[15%] p-3 rounded-2xl bg-slate-900/40 border border-slate-800/80 text-emerald-400/30 animate-bounce duration-[7000ms]">
          <TrendingUp className="w-10 h-10" />
        </div>
        {/* Recovery Agent Beacon */}
        <div className="absolute top-12 right-[25%] p-2.5 rounded-xl bg-slate-900/40 border border-amber-500/20 text-amber-400/30 flex items-center space-x-2">
          <UserCheck className="w-6 h-6" />
          <span className="text-[10px] font-mono tracking-widest text-slate-500">DRA FIELD OPS</span>
        </div>
      </div>

      {/* Gold Radial Glow */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top Badge with Official Logo */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-amber-500/40 text-amber-400 text-xs font-medium shadow-xl shadow-black/40">
                <img 
                  src="/src/assets/images/mla_ultra_hd_logo_1785063358915.jpg" 
                  alt="MLA Official Crest" 
                  referrerPolicy="no-referrer"
                  className="w-6 h-6 rounded-md object-cover border border-amber-500/60"
                />
                <span>Trusted Recovery & Repossession Partner across India</span>
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-serif leading-[1.15]">
              Professional Collection & Repossession Services Across India
            </h1>

            {/* Subheadline */}
            <p className="text-sm sm:text-base md:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Specialized in Vehicle Loan Recovery, Collection Services, Skip Tracing, Field Investigation, Legal Recovery Support and Asset Repossession.
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={onScrollToContact}
                className="w-full sm:w-auto px-7 py-3.5 text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 rounded-xl shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center space-x-2 cursor-pointer"
              >
                <span>Contact Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="https://play.google.com/store/apps/details?id=com.mla.vehiclerepossession"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-3.5 text-sm font-semibold text-white bg-slate-900/90 hover:bg-slate-800 border border-amber-500/40 rounded-xl hover:border-amber-400 transition-all flex items-center justify-center space-x-2 cursor-pointer backdrop-blur-sm group"
              >
                <Smartphone className="w-4 h-4 text-amber-400 group-hover:scale-110 transition-transform" />
                <span>Download Repo App</span>
              </a>
            </div>

            {/* Trust Badges Bar */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-3 gap-4 text-slate-300 text-xs">
              <div className="flex items-center space-x-2 bg-slate-900/60 p-2.5 rounded-lg border border-slate-800/60">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>500+ DRA Certified Force</span>
              </div>
              <div className="flex items-center space-x-2 bg-slate-900/60 p-2.5 rounded-lg border border-slate-800/60">
                <Shield className="w-4 h-4 text-amber-400 shrink-0" />
                <span>100% RBI Compliant</span>
              </div>
              <div className="flex items-center space-x-2 bg-slate-900/60 p-2.5 rounded-lg border border-slate-800/60 col-span-2 sm:col-span-1">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <span>PAN India Digital Tracking</span>
              </div>
            </div>

          </div>

          {/* Hero Right Widget: Quick Recovery Assessment Box */}
          <div className="lg:col-span-5">
            <div className="bg-slate-900/90 backdrop-blur-xl p-6 sm:p-8 rounded-2xl border border-amber-500/30 shadow-2xl shadow-black/80 relative">
              
              <div className="absolute -top-3 right-6 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold text-[10px] tracking-wider uppercase px-3 py-1 rounded-full shadow">
                Fast Turnaround
              </div>

              <div className="flex items-center space-x-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                  <Building className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white font-serif">Quick Recovery Estimator</h3>
                  <p className="text-xs text-slate-400">For Banks, NBFCs & Financial Institutions</p>
                </div>
              </div>

              <form onSubmit={handleQuickAssess} className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">Institution / Loan Type</label>
                  <select
                    value={quickIndustry}
                    onChange={(e) => setQuickIndustry(e.target.value)}
                    className="w-full bg-slate-950/80 border border-slate-700/80 rounded-lg px-3.5 py-2.5 text-xs text-slate-200 focus:outline-none focus:border-amber-500"
                  >
                    <option value="DAK & Early Buckets">DAK & Early Buckets (Bucket 1, 2, 3 / SMA)</option>
                    <option value="All Loan Types">All Loan Types Collection (Auto, Personal, Tractor, CV, Gold, MFI)</option>
                    <option value="Banks & NBFCs">Retail & Personal Loans (Banks / NBFCs)</option>
                    <option value="Auto Finance">Vehicle Loans (2W, 4W, Tractor, Commercial Vehicles)</option>
                    <option value="FinTech">FinTech / Digital Micro Loans</option>
                    <option value="Housing Finance">Housing / LAP Mortgage Loans</option>
                    <option value="Write-off">Hard NPA & Written-off Debt Recovery</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">Outstanding NPA / Delinquency Volume</label>
                  <select
                    value={quickAmount}
                    onChange={(e) => setQuickAmount(e.target.value)}
                    className="w-full bg-slate-950/80 border border-slate-700/80 rounded-lg px-3.5 py-2.5 text-xs text-slate-200 focus:outline-none focus:border-amber-500"
                  >
                    <option value="Under 10 Lakhs">Under ₹10 Lakhs</option>
                    <option value="10L - 1 Cr">₹10 Lakhs - ₹1 Crore</option>
                    <option value="1 Cr - 10 Cr">₹1 Crore - ₹10 Crores</option>
                    <option value="10 Cr+">₹10 Crores + Portfolio</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-lg transition-all flex items-center justify-center space-x-2 shadow-md cursor-pointer"
                >
                  <span>Estimate Recovery Strategy</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </form>

              {quickEstimate && (
                <div className="mt-4 p-3.5 bg-amber-500/10 border border-amber-500/30 rounded-lg text-xs text-amber-300 animate-fadeIn">
                  <p className="font-semibold text-white mb-1">Recommended Execution:</p>
                  <p>{quickEstimate}</p>
                  <button
                    onClick={onOpenConsultation}
                    className="mt-2 text-[11px] underline font-bold text-amber-400 hover:text-amber-300 block"
                  >
                    Request Full Institutional Proposal →
                  </button>
                </div>
              )}

              <div className="mt-5 pt-4 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
                <span className="flex items-center">
                  <Award className="w-3.5 h-3.5 text-amber-400 mr-1" /> ISO 27001 Data Security
                </span>
                <span className="text-slate-500">Confidential Enquiry</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

