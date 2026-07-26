import React, { useState } from 'react';
import { Calculator, ArrowRight, ShieldCheck, CheckCircle, HelpCircle, FileSpreadsheet } from 'lucide-react';
import { AssessmentInputs, AssessmentResult } from '../types';

interface AssessmentToolProps {
  onOpenConsultation: () => void;
}

export const AssessmentTool: React.FC<AssessmentToolProps> = ({ onOpenConsultation }) => {
  const [inputs, setInputs] = useState<AssessmentInputs>({
    loanType: 'Retail & Personal Loans',
    portfolioSize: '10L - 1 Cr',
    dpdBucket: '30-90 DPD (Early Delinquency)',
    region: 'PAN India / Metro Cities'
  });

  const [result, setResult] = useState<AssessmentResult>({
    estimatedRecoveryRate: '75% - 88%',
    turnaroundDays: '15 - 30 Days',
    recommendedStrategy: 'Soft tele-calling outreach paired with field doorstep verification within 48 hours.',
    legalRiskScore: 'Low (Standard DRA Field Outreach)'
  });

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();

    let rate = '60% - 75%';
    let days = '20 - 40 Days';
    let strategy = 'Dedicated DRA field squad with structured EMI settlement negotiation.';
    let risk = 'Low';

    if (inputs.dpdBucket.includes('1-30')) {
      rate = '85% - 94%';
      days = '7 - 15 Days';
      strategy = 'Early preventive tele-calling & digital payment link dispatches.';
      risk = 'Minimal';
    } else if (inputs.dpdBucket.includes('90-180')) {
      rate = '45% - 62%';
      days = '30 - 60 Days';
      strategy = 'Hard field recovery, Lok Adalat conciliation, and One-Time Settlement (OTS) proposal.';
      risk = 'Moderate (Legal Notice Backup Required)';
    } else if (inputs.dpdBucket.includes('Write-off')) {
      rate = '25% - 40%';
      days = '45 - 90 Days';
      strategy = 'Deep skip-tracing intelligence, doorstep asset audit, and legal notice escalation.';
      risk = 'Requires Legal Supervision';
    }

    if (inputs.loanType.includes('Vehicle')) {
      strategy += ' Lawful asset repossession & yard storage protocol.';
    }

    setResult({
      estimatedRecoveryRate: rate,
      turnaroundDays: days,
      recommendedStrategy: strategy,
      legalRiskScore: risk
    });
  };

  return (
    <section className="py-20 bg-[#071321] text-slate-100 relative overflow-hidden border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Lenders' Tool</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-serif tracking-tight">
            Portfolio Recovery Yield <span className="text-amber-400">Calculator</span>
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            Select your portfolio parameters to simulate expected recovery rates, estimated turnaround times, and the recommended execution framework.
          </p>
        </div>

        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Input Form */}
            <form onSubmit={handleCalculate} className="lg:col-span-6 space-y-4">
              <h3 className="text-lg font-bold text-white font-serif mb-2 flex items-center space-x-2">
                <FileSpreadsheet className="w-5 h-5 text-amber-400" />
                <span>Specify Portfolio Details</span>
              </h3>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">Asset / Loan Category</label>
                <select
                  value={inputs.loanType}
                  onChange={(e) => setInputs({ ...inputs, loanType: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-700/80 rounded-xl px-4 py-2.5 text-xs text-slate-200 focus:outline-none focus:border-amber-500"
                >
                  <option value="Retail & Personal Loans">Retail & Personal Unsecured Loans</option>
                  <option value="Vehicle Loans">Vehicle Loans (Auto / 2-Wheeler / Commercial)</option>
                  <option value="FinTech Loans">FinTech / Digital Micro-Credit</option>
                  <option value="Housing & LAP">Housing Finance / Loan Against Property (LAP)</option>
                  <option value="Microfinance">Microfinance Group Loans</option>
                  <option value="Commercial Equipment">Commercial & Heavy Machinery</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">Delinquency Bucket (DPD)</label>
                <select
                  value={inputs.dpdBucket}
                  onChange={(e) => setInputs({ ...inputs, dpdBucket: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-700/80 rounded-xl px-4 py-2.5 text-xs text-slate-200 focus:outline-none focus:border-amber-500"
                >
                  <option value="1-30 DPD (DAK / Early Bucket 1)">1 - 30 DPD (DAK / SMA-0 / Early Bucket 1)</option>
                  <option value="30-90 DPD (Bucket 2 & 3)">30 - 90 DPD (SMA-1 & SMA-2 / Bucket 2 & 3)</option>
                  <option value="90-180 DPD (Hard NPA Stage)">90 - 180 DPD (Hard NPA Recovery Stage)</option>
                  <option value="Written-off Bad Debt">180+ DPD / Written-off Bad Debt Recovery</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">Total Portfolio Volume / Value</label>
                <select
                  value={inputs.portfolioSize}
                  onChange={(e) => setInputs({ ...inputs, portfolioSize: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-700/80 rounded-xl px-4 py-2.5 text-xs text-slate-200 focus:outline-none focus:border-amber-500"
                >
                  <option value="Under 10L">Under ₹10 Lakhs</option>
                  <option value="10L - 1 Cr">₹10 Lakhs - ₹1 Crore</option>
                  <option value="1 Cr - 10 Cr">₹1 Crore - ₹10 Crores</option>
                  <option value="10 Cr - 50 Cr">₹10 Crores - ₹50 Crores</option>
                  <option value="50 Cr+">₹50 Crores + Institutional Pool</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">Geographic Concentration</label>
                <select
                  value={inputs.region}
                  onChange={(e) => setInputs({ ...inputs, region: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-700/80 rounded-xl px-4 py-2.5 text-xs text-slate-200 focus:outline-none focus:border-amber-500"
                >
                  <option value="PAN India / Metro Cities">PAN India Metro Hubs (Mumbai, Delhi, Blr, Kolkata, Hyd, Chennai)</option>
                  <option value="Tier-2 & Tier-3 Districts">Tier-2 / Tier-3 Regional District Networks</option>
                  <option value="State Specific">Single State Focused Portfolio</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-xl transition-all shadow-md flex items-center justify-center space-x-2 cursor-pointer"
              >
                <span>Simulate Recovery Yield</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            {/* Results Display */}
            <div className="lg:col-span-6 bg-slate-950/80 p-6 sm:p-8 rounded-xl border border-amber-500/30 flex flex-col justify-between space-y-6">
              
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <span className="text-xs text-amber-400 uppercase font-bold tracking-wider">Simulation Output</span>
                  <span className="text-[10px] text-slate-400">DRA Compliance Standard</span>
                </div>

                <div className="grid grid-cols-2 gap-4 my-6">
                  <div className="p-4 bg-slate-900 rounded-xl border border-slate-800 text-center">
                    <span className="text-xs text-slate-400 block mb-1">Estimated Recovery Yield</span>
                    <span className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-serif">{result.estimatedRecoveryRate}</span>
                  </div>
                  <div className="p-4 bg-slate-900 rounded-xl border border-slate-800 text-center">
                    <span className="text-xs text-slate-400 block mb-1">Average Resolution TAT</span>
                    <span className="text-2xl sm:text-3xl font-extrabold text-white font-serif">{result.turnaroundDays}</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <span className="text-xs font-bold text-slate-300 block mb-1">Recommended Deployment Strategy:</span>
                    <p className="text-xs text-slate-300 leading-relaxed bg-slate-900 p-3 rounded-lg border border-slate-800">
                      {result.recommendedStrategy}
                    </p>
                  </div>

                  <div>
                    <span className="text-xs font-bold text-slate-300 block mb-1">Risk & Compliance Assessment:</span>
                    <p className="text-xs text-emerald-400 bg-emerald-950/30 p-2.5 rounded-lg border border-emerald-800/40 flex items-center space-x-2">
                      <ShieldCheck className="w-4 h-4 shrink-0" />
                      <span>{result.legalRiskScore}</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800">
                <button
                  onClick={onOpenConsultation}
                  className="w-full py-3 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-bold text-xs rounded-xl shadow-lg hover:scale-[1.01] transition-all cursor-pointer"
                >
                  Get Custom Proposal & SLA Terms
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
