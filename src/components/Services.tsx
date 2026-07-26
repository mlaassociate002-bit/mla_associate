import React, { useState } from 'react';
import { SERVICES_DATA } from '../data/mockData';
import { Service } from '../types';
import { Icon } from './Icon';
import { ArrowRight, CheckCircle2, ShieldAlert, Sparkles, Filter } from 'lucide-react';

interface ServicesProps {
  onSelectService: (service: Service) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'collection' | 'repossession' | 'legal' | 'management'>('all');

  const filteredServices = SERVICES_DATA.filter(s => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'collection') return s.category === 'collection';
    if (activeCategory === 'repossession') return s.category === 'repossession';
    if (activeCategory === 'legal') return s.category === 'legal';
    if (activeCategory === 'management') return s.category === 'management';
    return true;
  });

  return (
    <section id="services" className="py-20 bg-[#0B192C] text-slate-100 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Our Core Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-serif tracking-tight">
            Comprehensive Recovery & <span className="text-amber-400">Repossession Services</span>
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            From soft tele-reminders to specialized vehicle repossession, field audits, and legal notices, MLA ASSOCIATE offers a 360-degree suite of recovery solutions designed for maximum yield and complete compliance.
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 text-xs font-bold rounded-xl transition-all ${
              activeCategory === 'all'
                ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 shadow-lg shadow-amber-500/20'
                : 'bg-slate-900 text-slate-300 border border-slate-800 hover:border-slate-700'
            }`}
          >
            All Services ({SERVICES_DATA.length})
          </button>
          <button
            onClick={() => setActiveCategory('collection')}
            className={`px-4 py-2 text-xs font-bold rounded-xl transition-all ${
              activeCategory === 'collection'
                ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 shadow-lg shadow-amber-500/20'
                : 'bg-slate-900 text-slate-300 border border-slate-800 hover:border-slate-700'
            }`}
          >
            Loan & Debt Collection
          </button>
          <button
            onClick={() => setActiveCategory('repossession')}
            className={`px-4 py-2 text-xs font-bold rounded-xl transition-all ${
              activeCategory === 'repossession'
                ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 shadow-lg shadow-amber-500/20'
                : 'bg-slate-900 text-slate-300 border border-slate-800 hover:border-slate-700'
            }`}
          >
            Vehicle & Asset Repossession
          </button>
          <button
            onClick={() => setActiveCategory('legal')}
            className={`px-4 py-2 text-xs font-bold rounded-xl transition-all ${
              activeCategory === 'legal'
                ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 shadow-lg shadow-amber-500/20'
                : 'bg-slate-900 text-slate-300 border border-slate-800 hover:border-slate-700'
            }`}
          >
            Legal Recovery Support
          </button>
          <button
            onClick={() => setActiveCategory('management')}
            className={`px-4 py-2 text-xs font-bold rounded-xl transition-all ${
              activeCategory === 'management'
                ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 shadow-lg shadow-amber-500/20'
                : 'bg-slate-900 text-slate-300 border border-slate-800 hover:border-slate-700'
            }`}
          >
            Portfolio & Analytics
          </button>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-slate-900/90 border border-slate-800/90 hover:border-amber-500/50 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-amber-500/10 flex flex-col justify-between group"
            >
              <div>
                {/* Header with Icon */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 text-amber-400 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors shadow-md">
                    <Icon name={service.iconName} className="w-6 h-6 stroke-[2]" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                    {service.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white font-serif group-hover:text-amber-400 transition-colors mb-2.5">
                  {service.title}
                </h3>

                {/* Short Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  {service.shortDescription}
                </p>

                {/* Key Features bullet points */}
                <div className="space-y-2 mb-6 border-t border-slate-800/80 pt-4">
                  {service.keyFeatures.slice(0, 3).map((feat, idx) => (
                    <div key={idx} className="flex items-start space-x-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onSelectService(service)}
                className="w-full py-2.5 px-4 text-xs font-bold text-slate-200 bg-slate-950 hover:bg-amber-500 hover:text-slate-950 border border-slate-800 hover:border-amber-500 rounded-xl transition-all flex items-center justify-center space-x-2 cursor-pointer group/btn"
              >
                <span>View Full Details & Enquire</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
