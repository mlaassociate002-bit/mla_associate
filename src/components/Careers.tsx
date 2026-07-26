import React from 'react';
import { JOB_POSITIONS_DATA } from '../data/mockData';
import { JobPosition } from '../types';
import { Briefcase, MapPin, Clock, ArrowRight, Award, Users, CheckCircle2 } from 'lucide-react';

interface CareersProps {
  onApplyJob: (job: JobPosition) => void;
}

export const Careers: React.FC<CareersProps> = ({ onApplyJob }) => {
  return (
    <section id="careers" className="py-20 bg-[#0B192C] text-slate-100 relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Join Our Growth Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-serif tracking-tight">
            Careers at <span className="text-amber-400">MLA ASSOCIATE</span>
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            Special hiring drive for <strong className="text-amber-400">Bihar State (All 38 Districts)</strong>. We invite ambitious Telecallers, Field Collection Officers, Vehicle Repo Specialists, and Team Leaders to join India’s premier financial recovery agency.
          </p>
        </div>

        {/* Special Bihar State Hiring Drive Highlight Card */}
        <div className="mb-12 bg-gradient-to-br from-amber-500/10 via-slate-900 to-slate-950 border-2 border-amber-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-amber-500 text-slate-950 font-black text-[10px] sm:text-xs uppercase px-4 py-1.5 rounded-bl-2xl tracking-widest shadow-md">
            OFFICIAL BIHAR HIRING DRIVE 2026
          </div>

          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center space-x-2 px-3 py-1 bg-amber-500/20 text-amber-300 rounded-full text-xs font-bold border border-amber-500/30">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span>Bihar - All 38 Districts (Patna, Gaya, Muzaffarpur, Bhagalpur, Purnia & More)</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white font-serif leading-tight">
                235+ Total Vacancies Open in <span className="text-amber-400">Bihar</span>
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Direct recruitment for Bank & NBFC retail recovery operations across all 38 districts of Bihar. High fixed payout + daily field incentives + IIBF DRA Certification sponsor support.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="bg-slate-950/80 p-3 rounded-xl border border-amber-500/30">
                  <span className="text-xs text-slate-400 block font-semibold">Telecallers</span>
                  <span className="text-lg font-black text-amber-400">50+ Openings</span>
                  <span className="text-[10px] text-slate-400 block">Voice / Call Center Desk</span>
                </div>

                <div className="bg-slate-950/80 p-3 rounded-xl border border-amber-500/30">
                  <span className="text-xs text-slate-400 block font-semibold">Field Agents</span>
                  <span className="text-lg font-black text-emerald-400">150+ Openings</span>
                  <span className="text-[10px] text-slate-400 block">All 38 Bihar Districts</span>
                </div>

                <div className="bg-slate-950/80 p-3 rounded-xl border border-amber-500/30">
                  <span className="text-xs text-slate-400 block font-semibold">Team Leaders</span>
                  <span className="text-lg font-black text-blue-400">10+ Openings</span>
                  <span className="text-[10px] text-slate-400 block">Patna Regional Office</span>
                </div>

                <div className="bg-slate-950/80 p-3 rounded-xl border border-amber-500/30">
                  <span className="text-xs text-slate-400 block font-semibold">Repo Officers</span>
                  <span className="text-lg font-black text-purple-400">25+ Openings</span>
                  <span className="text-[10px] text-slate-400 block">Asset Recovery Division</span>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-auto shrink-0 flex flex-col sm:flex-row lg:flex-col gap-2.5">
              <button
                onClick={() => onApplyJob(JOB_POSITIONS_DATA[0])}
                className="px-5 py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold text-xs sm:text-sm rounded-xl shadow-xl flex items-center justify-between space-x-2"
              >
                <span>Apply: Telecaller Executive</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onApplyJob(JOB_POSITIONS_DATA[1])}
                className="px-5 py-3 bg-slate-900 hover:bg-slate-800 text-emerald-400 border border-emerald-500/50 font-extrabold text-xs sm:text-sm rounded-xl flex items-center justify-between space-x-2"
              >
                <span>Apply: Field Recovery Agent</span>
                <ArrowRight className="w-4 h-4 text-emerald-400" />
              </button>

              <button
                onClick={() => onApplyJob(JOB_POSITIONS_DATA[2])}
                className="px-5 py-3 bg-slate-900 hover:bg-slate-800 text-blue-400 border border-blue-500/50 font-extrabold text-xs sm:text-sm rounded-xl flex items-center justify-between space-x-2"
              >
                <span>Apply: Team Leader</span>
                <ArrowRight className="w-4 h-4 text-blue-400" />
              </button>

              <button
                onClick={() => onApplyJob(JOB_POSITIONS_DATA[3])}
                className="px-5 py-3 bg-slate-900 hover:bg-slate-800 text-purple-400 border border-purple-500/50 font-extrabold text-xs sm:text-sm rounded-xl flex items-center justify-between space-x-2"
              >
                <span>Apply: Repo Specialist</span>
                <ArrowRight className="w-4 h-4 text-purple-400" />
              </button>
            </div>
          </div>
        </div>

        {/* Why Work With Us Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          <div className="p-5 bg-slate-900/80 rounded-2xl border border-slate-800 text-center">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center mx-auto mb-3">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white font-serif mb-1">Competitive Incentives</h3>
            <p className="text-xs text-slate-400">Industry-best base pay + high performance recovery payouts.</p>
          </div>

          <div className="p-5 bg-slate-900/80 rounded-2xl border border-slate-800 text-center">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center mx-auto mb-3">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white font-serif mb-1">DRA Training & Certification</h3>
            <p className="text-xs text-slate-400">Complete sponsor support for IIBF DRA certification & ethical collection training.</p>
          </div>

          <div className="p-5 bg-slate-900/80 rounded-2xl border border-slate-800 text-center">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center mx-auto mb-3">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white font-serif mb-1">Pan-India Opportunities</h3>
            <p className="text-xs text-slate-400">Positions across North, East, West & South zonal offices and branch hubs.</p>
          </div>
        </div>

        {/* Job Listings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {JOB_POSITIONS_DATA.map((job) => (
            <div
              key={job.id}
              className="bg-slate-900/90 border border-slate-800 hover:border-amber-500/40 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <span className="inline-block text-[11px] font-bold text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded-full mb-2">
                      {job.department}
                    </span>
                    <h3 className="text-lg font-bold text-white font-serif group-hover:text-amber-400 transition-colors">
                      {job.title}
                    </h3>
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 bg-slate-800 text-slate-300 rounded-lg shrink-0">
                    {job.type}
                  </span>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {job.description}
                </p>

                <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 mb-5">
                  <span className="flex items-center">
                    <MapPin className="w-3.5 h-3.5 text-amber-400 mr-1" />
                    {job.location}
                  </span>
                  <span className="flex items-center">
                    <Clock className="w-3.5 h-3.5 text-amber-400 mr-1" />
                    Exp: {job.experience}
                  </span>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-[11px] text-slate-400 font-medium">Full-Time Corporate Opening</span>
                <button
                  onClick={() => onApplyJob(job)}
                  className="px-4 py-2 text-xs font-bold text-slate-950 bg-amber-500 hover:bg-amber-400 rounded-xl transition-all flex items-center space-x-1.5 cursor-pointer shadow-md"
                >
                  <span>Apply Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
