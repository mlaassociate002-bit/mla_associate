import React from 'react';
import { Landmark, ShieldCheck, Building2 } from 'lucide-react';
import { BankLogoIcon } from './BankLogos';

interface BankPartner {
  name: string;
  type: 'Bank' | 'NBFC';
  code: string;
  badgeBg: string;
}

const BANKS_AND_NBFCS: BankPartner[] = [
  // Banks
  { name: 'HDFC Bank', type: 'Bank', code: 'HDFC', badgeBg: 'bg-blue-900/60 text-blue-300' },
  { name: 'ICICI Bank', type: 'Bank', code: 'ICICI', badgeBg: 'bg-orange-900/60 text-orange-300' },
  { name: 'Axis Bank', type: 'Bank', code: 'AXIS', badgeBg: 'bg-rose-900/60 text-rose-300' },
  { name: 'Kotak Mahindra Bank', type: 'Bank', code: 'KOTAK', badgeBg: 'bg-red-900/60 text-red-300' },
  { name: 'IndusInd Bank', type: 'Bank', code: 'INDUS', badgeBg: 'bg-amber-900/60 text-amber-300' },
  { name: 'IDFC FIRST Bank', type: 'Bank', code: 'IDFC', badgeBg: 'bg-purple-900/60 text-purple-300' },
  { name: 'AU Small Finance Bank', type: 'Bank', code: 'AU-SFB', badgeBg: 'bg-amber-900/60 text-amber-300' },
  { name: 'Federal Bank', type: 'Bank', code: 'FED', badgeBg: 'bg-sky-900/60 text-sky-300' },
  { name: 'Bandhan Bank', type: 'Bank', code: 'BANDHAN', badgeBg: 'bg-blue-950 text-slate-300' },
  { name: 'Bank of Baroda', type: 'Bank', code: 'BOB', badgeBg: 'bg-orange-950 text-orange-300' },
  { name: 'Punjab National Bank', type: 'Bank', code: 'PNB', badgeBg: 'bg-yellow-950 text-yellow-300' },
  { name: 'Canara Bank', type: 'Bank', code: 'CANARA', badgeBg: 'bg-sky-950 text-sky-300' },
  { name: 'Union Bank of India', type: 'Bank', code: 'UNION', badgeBg: 'bg-blue-950 text-blue-300' },
  { name: 'Indian Bank', type: 'Bank', code: 'INDIAN', badgeBg: 'bg-indigo-950 text-indigo-300' },
  { name: 'State Bank of India', type: 'Bank', code: 'SBI', badgeBg: 'bg-sky-900/60 text-sky-300' },

  // Finance Companies (NBFCs)
  { name: 'Bajaj Finance', type: 'NBFC', code: 'BAJAJ', badgeBg: 'bg-sky-950 text-sky-300' },
  { name: 'Mahindra Finance', type: 'NBFC', code: 'MMFSL', badgeBg: 'bg-red-950 text-red-300' },
  { name: 'Shriram Finance', type: 'NBFC', code: 'SHRIRAM', badgeBg: 'bg-orange-950 text-amber-300' },
  { name: 'Tata Capital', type: 'NBFC', code: 'TATA', badgeBg: 'bg-blue-950 text-blue-300' },
  { name: 'Hero FinCorp', type: 'NBFC', code: 'HERO', badgeBg: 'bg-red-950 text-red-300' },
  { name: 'L&T Finance', type: 'NBFC', code: 'LT-FIN', badgeBg: 'bg-amber-950 text-amber-300' },
  { name: 'Cholamandalam Finance', type: 'NBFC', code: 'CHOLA', badgeBg: 'bg-rose-950 text-rose-300' },
  { name: 'Muthoot Finance', type: 'NBFC', code: 'MUTHOOT', badgeBg: 'bg-red-950 text-amber-300' },
  { name: 'Aditya Birla Finance', type: 'NBFC', code: 'ABFL', badgeBg: 'bg-amber-950 text-amber-300' },
  { name: 'TVS Credit', type: 'NBFC', code: 'TVS', badgeBg: 'bg-blue-950 text-blue-300' },
  { name: 'Magma Finance', type: 'NBFC', code: 'MAGMA', badgeBg: 'bg-teal-950 text-emerald-300' },
  { name: 'Sundaram Finance', type: 'NBFC', code: 'SUNDARAM', badgeBg: 'bg-amber-950 text-amber-300' }
];

export const BankPartnersMarquee: React.FC = () => {
  // Duplicate array to ensure infinite loop marquee
  const marqueeItems = [...BANKS_AND_NBFCS, ...BANKS_AND_NBFCS];

  return (
    <section id="bank-partners" className="py-16 bg-[#071321] text-white relative overflow-hidden border-y border-slate-800/80">
      
      {/* Background Subtle Glows */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center relative z-10">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-2">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Institutional Trust</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-serif tracking-tight">
          Trusted By Leading <span className="text-amber-400">Banks & NBFCs</span>
        </h2>
        <p className="mt-2 text-xs sm:text-sm text-slate-400 max-w-2xl mx-auto">
          Empowering India's top 50+ banking institutions, NBFCs, and financial organizations with ethical, compliant, and technology-driven recovery solutions.
        </p>
      </div>

      {/* Auto-scrolling infinite marquee container */}
      <div className="relative w-full overflow-hidden py-4">
        
        {/* Gradient Edge Blurs */}
        <div className="absolute top-0 left-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#071321] to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 right-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#071321] to-transparent z-20 pointer-events-none" />

        {/* Marquee Track */}
        <div className="flex space-x-4 sm:space-x-6 animate-marquee w-max hover:[animation-play-state:paused]">
          {marqueeItems.map((partner, index) => (
            <div
              key={`${partner.code}-${index}`}
              className="flex items-center space-x-3.5 px-5 py-3 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-amber-500/50 shadow-lg hover:shadow-amber-500/10 transition-all cursor-pointer group shrink-0"
            >
              {/* Official Vector Logo Emblem */}
              <div className="shrink-0 group-hover:scale-105 transition-transform">
                <BankLogoIcon code={partner.code} className="w-10 h-10 shadow-md rounded-lg" />
              </div>

              {/* Institution Title */}
              <div>
                <h4 className="text-sm font-bold text-white font-serif group-hover:text-amber-400 transition-colors">
                  {partner.name}
                </h4>
                <div className="flex items-center space-x-2 mt-0.5">
                  <span className={`text-[10px] font-semibold px-2 py-0.5 rounded ${partner.badgeBg}`}>
                    {partner.type}
                  </span>
                  <span className="text-[10px] text-slate-400 flex items-center">
                    <Landmark className="w-2.5 h-2.5 mr-0.5 text-amber-400" /> Authorized Partner
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee Row 2 (Reverse motion for rich dynamic visual) */}
      <div className="relative w-full overflow-hidden py-2 mt-2">
        <div className="flex space-x-4 sm:space-x-6 animate-marquee-reverse w-max hover:[animation-play-state:paused]">
          {[...BANKS_AND_NBFCS].reverse().concat([...BANKS_AND_NBFCS].reverse()).map((partner, index) => (
            <div
              key={`rev-${partner.code}-${index}`}
              className="flex items-center space-x-3 px-4 py-2.5 rounded-lg bg-slate-900/60 border border-slate-800/80 hover:border-amber-500/40 transition-all shrink-0 opacity-90 hover:opacity-100"
            >
              <BankLogoIcon code={partner.code} className="w-7 h-7 rounded shadow-sm" />
              <span className="text-xs font-semibold text-slate-200 font-serif">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

