import React from 'react';
import { Briefcase, ThumbsUp, Globe2, Headphones, ShieldCheck, TrendingUp } from 'lucide-react';

export const StatsBar: React.FC = () => {
  const stats = [
    {
      value: '10,000+',
      label: 'Cases Managed',
      subtext: 'Across Retail, Auto & Corporate Debt',
      icon: Briefcase,
      color: 'from-amber-400 to-amber-600',
    },
    {
      value: '95%',
      label: 'Client Satisfaction',
      subtext: 'Trusted by 50+ Banks & NBFCs',
      icon: ThumbsUp,
      color: 'from-amber-400 to-amber-600',
    },
    {
      value: 'PAN India',
      label: 'Network Coverage',
      subtext: '28 States & 400+ Cities',
      icon: Globe2,
      color: 'from-amber-400 to-amber-600',
    },
    {
      value: '24/7',
      label: 'Client Support',
      subtext: 'Dedicated MIS & Field Response',
      icon: Headphones,
      color: 'from-amber-400 to-amber-600',
    },
  ];

  return (
    <section className="relative z-20 -mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-[#0f2137] border border-amber-500/20 rounded-2xl shadow-2xl p-6 sm:p-8 backdrop-blur-xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-800/80">
          {stats.map((stat, index) => {
            const IconComp = stat.icon;
            return (
              <div key={index} className={`flex items-start space-x-4 ${index !== 0 ? 'pt-6 sm:pt-0 sm:pl-6' : ''}`}>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500/20 to-amber-600/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                  <IconComp className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-white font-serif tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-sm font-semibold text-amber-400 mt-0.5">
                    {stat.label}
                  </div>
                  <div className="text-xs text-slate-400 mt-1">
                    {stat.subtext}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
