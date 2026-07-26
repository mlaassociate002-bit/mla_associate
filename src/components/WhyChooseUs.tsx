import React from 'react';
import { WHY_CHOOSE_US_DATA } from '../data/mockData';
import { Icon } from './Icon';
import { Award, CheckCircle2, Shield } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-choose-us" className="py-20 bg-[#0B192C] text-slate-100 relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-3/4 h-96 bg-blue-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>The MLA Advantage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-serif tracking-tight">
            Why Choose <span className="text-amber-400">MLA ASSOCIATE</span>
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            We deliver the gold standard in debt recovery—combining strict regulatory adherence, experienced certified field personnel, nationwide logistics, and cutting-edge data security.
          </p>
        </div>

        {/* 8 Modern Icon Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_US_DATA.map((item) => (
            <div
              key={item.id}
              className="bg-slate-900/80 border border-slate-800 hover:border-amber-500/50 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-amber-500/10 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 text-amber-400 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors shadow-md">
                    <Icon name={item.iconName} className="w-6 h-6" />
                  </div>
                  {item.statBadge && (
                    <span className="text-[10px] font-bold text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2.5 py-1 rounded-full">
                      {item.statBadge}
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold text-white font-serif mb-2 group-hover:text-amber-400 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center text-[11px] text-slate-400 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 mr-1.5 shrink-0" />
                <span>Verified Benchmark Standard</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 bg-gradient-to-r from-amber-500/10 via-amber-500/20 to-amber-500/10 border border-amber-500/30 rounded-2xl p-6 text-center max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left space-y-1">
            <h4 className="text-lg font-bold text-white font-serif">Looking for a Compliant Recovery Partner?</h4>
            <p className="text-xs text-slate-300">Deploy experienced DRA-certified recovery officers for your portfolio in 24 hours.</p>
          </div>
          <a
            href="#contact"
            className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-xl shadow-lg transition-all shrink-0"
          >
            Schedule Partner Meeting
          </a>
        </div>

      </div>
    </section>
  );
};
