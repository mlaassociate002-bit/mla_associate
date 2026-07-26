import React, { useState } from 'react';
import { ShieldCheck, Scale, Users, Award, Check, Building2, MapPin, Target, Eye, Lock } from 'lucide-react';

export const AboutUs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'pillars' | 'vision' | 'mission' | 'compliance'>('pillars');

  const pillars = [
    {
      title: 'Experienced Professionals',
      desc: 'Our team comprises 500+ IIBF-certified Debt Recovery Agents (DRA), retired bank managers, and senior legal advocates with deep recovery expertise.',
      icon: Users,
    },
    {
      title: 'Transparent Processes',
      desc: 'Every field interaction, payment link dispatch, and repossession yard entry is logged in real-time on our Client Portal with GPS proof.',
      icon: Eye,
    },
    {
      title: 'Legal Compliance',
      desc: 'Strict adherence to RBI guidelines, police intimations, pre-notice documentation, and zero-harassment protocols across all operations.',
      icon: Scale,
    },
    {
      title: 'Customer-Focused Solutions',
      desc: 'Respectful borrower engagement that offers constructive repayment structures while protecting lender brand reputation.',
      icon: Target,
    },
  ];

  return (
    <section id="about" className="py-20 bg-slate-950 text-slate-100 relative overflow-hidden">
      {/* Subtle BG Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Building2 className="w-3.5 h-3.5" />
            <span>About MLA ASSOCIATE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-serif tracking-tight">
            India's Trusted Debt Collection & <br className="hidden sm:inline" />
            <span className="text-amber-400">Repossession Partner</span>
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            MLA ASSOCIATE is a premier Collection & Repossession Agency delivering end-to-end debt recovery solutions across India. We bridge the gap between financial institutions and delinquent borrowers through professional, legal, and result-oriented strategies.
          </p>
        </div>

        {/* Grid Layout: Main story + Tabs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Visual Banner Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl p-8 bg-gradient-to-br from-[#0d223a] to-[#071321] border border-slate-800 shadow-2xl overflow-hidden group">
              <div className="absolute top-0 right-0 w-40 h-40 bg-amber-500/10 rounded-full blur-2xl group-hover:bg-amber-500/20 transition-all" />
              
              <div className="relative z-10 space-y-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-slate-950 font-bold shadow-lg shadow-amber-500/20">
                  <ShieldCheck className="w-8 h-8 stroke-[2.2]" />
                </div>

                <h3 className="text-2xl font-bold text-white font-serif leading-snug">
                  Built on Ethics, Powered by Experience & Technology
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Founded with a vision to revolutionize the recovery landscape in India, MLA ASSOCIATE has grown into a trusted partner for over 50 leading public/private banks, NBFCs, and fintech companies.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-center space-x-3 text-xs text-slate-200">
                    <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </span>
                    <span>DRA Certified Field Recovery Force</span>
                  </div>
                  <div className="flex items-center space-x-3 text-xs text-slate-200">
                    <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </span>
                    <span>24/7 CCTV Guarded Repossession Storage Yards</span>
                  </div>
                  <div className="flex items-center space-x-3 text-xs text-slate-200">
                    <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </span>
                    <span>256-bit Encrypted Client Data Rooms</span>
                  </div>
                  <div className="flex items-center space-x-3 text-xs text-slate-200">
                    <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </span>
                    <span>Comprehensive Legal Notice & SARFAESI Support</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center"><MapPin className="w-3.5 h-3.5 text-amber-400 mr-1" /> Head Office Dhanbad Jharkhand</span>
                  <span className="text-amber-400 font-semibold">28 States</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Interactive Tabs & Information */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Tab Controls */}
            <div className="flex flex-wrap gap-2 p-1.5 bg-slate-900 border border-slate-800 rounded-xl">
              <button
                onClick={() => setActiveTab('pillars')}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                  activeTab === 'pillars'
                    ? 'bg-amber-500 text-slate-950 shadow-md'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                Core Pillars
              </button>
              <button
                onClick={() => setActiveTab('vision')}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                  activeTab === 'vision'
                    ? 'bg-amber-500 text-slate-950 shadow-md'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                Our Vision
              </button>
              <button
                onClick={() => setActiveTab('mission')}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                  activeTab === 'mission'
                    ? 'bg-amber-500 text-slate-950 shadow-md'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                Our Mission
              </button>
              <button
                onClick={() => setActiveTab('compliance')}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                  activeTab === 'compliance'
                    ? 'bg-amber-500 text-slate-950 shadow-md'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                Compliance & Ethics
              </button>
            </div>

            {/* Tab Content Display */}
            {activeTab === 'pillars' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-fadeIn">
                {pillars.map((pillar, i) => {
                  const IconComp = pillar.icon;
                  return (
                    <div key={i} className="p-5 bg-slate-900/80 rounded-xl border border-slate-800 hover:border-amber-500/40 transition-all">
                      <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mb-3">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <h4 className="text-base font-bold text-white font-serif mb-1.5">{pillar.title}</h4>
                      <p className="text-xs text-slate-300 leading-relaxed">{pillar.desc}</p>
                    </div>
                  );
                })}
              </div>
            )}

            {activeTab === 'vision' && (
              <div className="p-6 bg-slate-900/80 rounded-xl border border-slate-800 space-y-4 animate-fadeIn">
                <div className="flex items-center space-x-3 text-amber-400">
                  <Eye className="w-6 h-6" />
                  <h4 className="text-xl font-bold font-serif text-white">Our Vision</h4>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  To be India's most admired and trusted debt recovery institution, recognized for setting benchmark standards in ethical collection, digital transparency, and legal compliance. We envision a financial ecosystem where non-performing assets are resolved swiftly while preserving borrower dignity and lender reputation.
                </p>
                <div className="pt-3 border-t border-slate-800 grid grid-cols-2 gap-4 text-xs text-slate-400">
                  <div>• Benchmark for Ethical Collection</div>
                  <div>• Zero-Breach Compliance Goal</div>
                  <div>• Technology-First Field Operations</div>
                  <div>• Nationwide Recovery Footprint</div>
                </div>
              </div>
            )}

            {activeTab === 'mission' && (
              <div className="p-6 bg-slate-900/80 rounded-xl border border-slate-800 space-y-4 animate-fadeIn">
                <div className="flex items-center space-x-3 text-amber-400">
                  <Target className="w-6 h-6" />
                  <h4 className="text-xl font-bold font-serif text-white">Our Mission</h4>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  To empower financial institutions, banks, and businesses with swift, cost-effective, and fully compliant debt collection and asset repossession services. We achieve this by deploying certified field forces, leveraging AI-driven data insights, and strictly adhering to regulatory guidelines.
                </p>
                <div className="pt-3 border-t border-slate-800 grid grid-cols-2 gap-4 text-xs text-slate-400">
                  <div>• Maximize Portfolio Recovery Yields</div>
                  <div>• Reduce NPA Turnaround Timelines</div>
                  <div>• Protect Lender Brand Assets</div>
                  <div>• Continuous DRA Training & Auditing</div>
                </div>
              </div>
            )}

            {activeTab === 'compliance' && (
              <div className="p-6 bg-slate-900/80 rounded-xl border border-slate-800 space-y-4 animate-fadeIn">
                <div className="flex items-center space-x-3 text-amber-400">
                  <Lock className="w-6 h-6" />
                  <h4 className="text-xl font-bold font-serif text-white">Legal Compliance & Governance</h4>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Compliance is at the core of MLA ASSOCIATE. Our operations strictly abide by the Reserve Bank of India (RBI) Fair Practice Code, Debt Recovery Agent (DRA) guidelines, and standard operating procedures for vehicle repossession.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="p-3 bg-slate-950 rounded border border-slate-800 text-xs">
                    <span className="font-bold text-amber-400 block mb-0.5">RBI Fair Practice Code</span>
                    Strict adherence to calling hours (08:00 AM - 07:00 PM) and polite communication.
                  </div>
                  <div className="p-3 bg-slate-950 rounded border border-slate-800 text-xs">
                    <span className="font-bold text-amber-400 block mb-0.5">IIBF DRA Certification</span>
                    100% of field personnel hold active DRA certificates issued by IIBF.
                  </div>
                  <div className="p-3 bg-slate-950 rounded border border-slate-800 text-xs">
                    <span className="font-bold text-amber-400 block mb-0.5">Police Station Intimation</span>
                    Mandatory prior intimation to local police before vehicle repossession.
                  </div>
                  <div className="p-3 bg-slate-950 rounded border border-slate-800 text-xs">
                    <span className="font-bold text-amber-400 block mb-0.5">ISO 27001 Security</span>
                    Encrypted customer database management preventing data exposure.
                  </div>
                </div>
              </div>
            )}

          </div>

        </div>
      </div>
    </section>
  );
};
