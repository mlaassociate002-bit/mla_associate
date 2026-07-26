import React, { useState } from 'react';
import { PROCESS_TIMELINE_DATA } from '../data/mockData';
import { Icon } from './Icon';
import { GitCommit, CheckCircle2, ChevronRight, ShieldCheck } from 'lucide-react';

export const ProcessTimeline: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1);

  const currentStepData = PROCESS_TIMELINE_DATA.find(s => s.stepNumber === activeStep) || PROCESS_TIMELINE_DATA[0];

  return (
    <section id="process" className="py-20 bg-slate-950 text-slate-100 relative overflow-hidden border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <GitCommit className="w-3.5 h-3.5" />
            <span>Methodical Execution</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-serif tracking-tight">
            Recovery Process <span className="text-amber-400">Timeline</span>
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            Our standardized 7-step recovery workflow ensures rapid action, meticulous field documentation, and strict adherence to banking compliance guidelines.
          </p>
        </div>

        {/* Steps Bar - Desktop Horizon / Mobile Vertical */}
        <div className="mb-12">
          <div className="hidden lg:grid grid-cols-7 gap-2 relative">
            {/* Connecting line behind */}
            <div className="absolute top-1/2 left-8 right-8 h-1 bg-slate-800 -translate-y-1/2 z-0" />
            
            {PROCESS_TIMELINE_DATA.map((step) => {
              const isActive = step.stepNumber === activeStep;
              const isPast = step.stepNumber < activeStep;
              return (
                <button
                  key={step.stepNumber}
                  onClick={() => setActiveStep(step.stepNumber)}
                  className={`relative z-10 flex flex-col items-center p-3 rounded-xl transition-all cursor-pointer group ${
                    isActive
                      ? 'bg-slate-900 border border-amber-500 shadow-lg shadow-amber-500/20'
                      : 'bg-slate-900/60 border border-slate-800/80 hover:bg-slate-900'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm mb-2 transition-all ${
                    isActive
                      ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 shadow-md shadow-amber-500/30'
                      : isPast
                      ? 'bg-slate-800 text-amber-400 border border-amber-500/30'
                      : 'bg-slate-950 text-slate-400 border border-slate-800'
                  }`}>
                    {step.stepNumber}
                  </div>
                  <span className={`text-xs font-serif font-bold text-center line-clamp-1 ${isActive ? 'text-amber-400' : 'text-slate-300'}`}>
                    {step.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Mobile step selector buttons */}
          <div className="lg:hidden flex overflow-x-auto gap-2 pb-3 no-scrollbar">
            {PROCESS_TIMELINE_DATA.map((step) => (
              <button
                key={step.stepNumber}
                onClick={() => setActiveStep(step.stepNumber)}
                className={`px-4 py-2 text-xs font-bold rounded-xl whitespace-nowrap shrink-0 transition-all flex items-center space-x-2 ${
                  step.stepNumber === activeStep
                    ? 'bg-amber-500 text-slate-950 shadow-md'
                    : 'bg-slate-900 text-slate-300 border border-slate-800'
                }`}
              >
                <span className="w-5 h-5 rounded-full bg-slate-950 text-amber-400 text-[10px] flex items-center justify-center font-extrabold">
                  {step.stepNumber}
                </span>
                <span>{step.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Selected Step Detail Panel */}
        <div className="bg-gradient-to-br from-slate-900 via-[#0d223a] to-slate-900 border border-amber-500/30 rounded-2xl p-6 sm:p-10 shadow-2xl relative">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-5">
              <div className="flex items-center space-x-3">
                <span className="w-10 h-10 rounded-xl bg-amber-500 text-slate-950 font-bold text-lg flex items-center justify-center font-serif">
                  {currentStepData.stepNumber}
                </span>
                <div>
                  <span className="text-xs text-amber-400 font-bold uppercase tracking-widest">Phase {currentStepData.stepNumber} of 7</span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white font-serif">{currentStepData.title}</h3>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {currentStepData.description}
              </p>

              <div>
                <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-3">Key Sub-Tasks & Deliverables:</h4>
                <div className="space-y-2.5">
                  {currentStepData.details.map((detail, idx) => (
                    <div key={idx} className="flex items-start space-x-3 p-3 bg-slate-950/80 rounded-xl border border-slate-800 text-xs sm:text-sm text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Step Navigation Controls & Quick Action */}
            <div className="lg:col-span-4 bg-slate-950/90 p-6 rounded-xl border border-slate-800 flex flex-col justify-between space-y-6">
              
              <div>
                <div className="flex items-center space-x-2 text-amber-400 text-xs font-bold mb-2">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Compliance Verification</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Every step is audited in real-time by our internal Quality & Regulatory Cell before phase completion.
                </p>
              </div>

              <div className="space-y-2 pt-4 border-t border-slate-800">
                <div className="flex justify-between items-center text-xs text-slate-400">
                  <span>Progress Stage:</span>
                  <span className="text-amber-400 font-bold">{Math.round((currentStepData.stepNumber / 7) * 100)}%</span>
                </div>
                <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-amber-400 to-amber-500 h-full transition-all duration-500"
                    style={{ width: `${(currentStepData.stepNumber / 7) * 100}%` }}
                  />
                </div>
              </div>

              <div className="flex justify-between items-center gap-2 pt-2">
                <button
                  disabled={currentStepData.stepNumber === 1}
                  onClick={() => setActiveStep(prev => Math.max(1, prev - 1))}
                  className="px-4 py-2 text-xs font-bold rounded-lg bg-slate-900 border border-slate-800 text-slate-300 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-800 cursor-pointer"
                >
                  ← Previous Step
                </button>
                <button
                  disabled={currentStepData.stepNumber === 7}
                  onClick={() => setActiveStep(prev => Math.min(7, prev + 1))}
                  className="px-4 py-2 text-xs font-bold rounded-lg bg-amber-500 text-slate-950 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-amber-400 cursor-pointer flex items-center space-x-1"
                >
                  <span>Next Step</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
