import React, { useState } from 'react';
import { INDUSTRIES_DATA } from '../data/mockData';
import { Industry } from '../types';
import { Icon } from './Icon';
import { ShieldCheck, ChevronRight, Building } from 'lucide-react';

interface IndustriesProps {
  onOpenConsultation: () => void;
}

export const Industries: React.FC<IndustriesProps> = ({ onOpenConsultation }) => {
  const [selectedIndustry, setSelectedIndustry] = useState<Industry>(INDUSTRIES_DATA[0]);

  return (
    <section id="industries" className="py-20 bg-slate-950 text-slate-100 relative overflow-hidden border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Building className="w-3.5 h-3.5" />
            <span>Specialized Sectors</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-serif tracking-tight">
            Industries We Serve
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            Every lending vertical requires a tailored recovery strategy. We customize field operations, compliance procedures, and borrower negotiation techniques for each sector.
          </p>
        </div>

        {/* 8 Industries Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {INDUSTRIES_DATA.map((ind) => {
            const isSelected = selectedIndustry.id === ind.id;
            return (
              <div
                key={ind.id}
                onClick={() => setSelectedIndustry(ind)}
                className={`p-5 rounded-2xl border cursor-pointer transition-all duration-300 flex flex-col justify-between ${
                  isSelected
                    ? 'bg-slate-900 border-amber-500 shadow-xl shadow-amber-500/10 scale-[1.02]'
                    : 'bg-slate-900/60 border-slate-800/80 hover:bg-slate-900 hover:border-slate-700'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${isSelected ? 'bg-amber-500 text-slate-950 font-bold' : 'bg-slate-950 text-amber-400 border border-slate-800'}`}>
                      <Icon name={ind.iconName} className="w-5 h-5" />
                    </div>
                    {isSelected && (
                      <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                    )}
                  </div>
                  <h3 className="text-base font-bold text-white font-serif mb-1.5">{ind.name}</h3>
                  <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">{ind.description}</p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-amber-400 font-semibold">
                  <span>Explore Sector Solutions</span>
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Industry Detail Showcase Banner */}
        <div className="bg-gradient-to-r from-slate-900 via-[#0d223a] to-slate-900 border border-amber-500/30 rounded-2xl p-6 sm:p-8 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center font-bold">
                  <Icon name={selectedIndustry.iconName} className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs text-amber-400 uppercase font-semibold tracking-wider">Tailored Recovery Framework</span>
                  <h3 className="text-2xl font-bold text-white font-serif">{selectedIndustry.name} Solutions</h3>
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                {selectedIndustry.description}
              </p>

              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2.5">Key Recovery Protocols & Interventions:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedIndustry.keySolutions.map((sol, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-xs text-slate-200 bg-slate-950/70 p-2.5 rounded-lg border border-slate-800">
                      <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                      <span>{sol}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 bg-slate-950/90 p-6 rounded-xl border border-slate-800 text-center space-y-4">
              <h4 className="text-base font-bold text-white font-serif">Partner with MLA ASSOCIATE</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Get a customized portfolio recovery proposal specifically structured for {selectedIndustry.name}.
              </p>
              <button
                onClick={onOpenConsultation}
                className="w-full py-3 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-bold text-xs rounded-xl shadow-lg hover:scale-[1.02] active:scale-95 transition-all cursor-pointer"
              >
                Request Sector Proposal
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
