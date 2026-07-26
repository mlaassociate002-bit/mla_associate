import React, { useState, useEffect, useRef } from 'react';
import { UserCheck, Building2, Smartphone, Megaphone, ArrowRight, ShieldCheck, MapPin, Sparkles, Award, ChevronLeft, ChevronRight, Pause, Play, CheckCircle2, ShieldAlert } from 'lucide-react';

interface AgencyAdBannerProps {
  onOpenConsultation: () => void;
  onApplyAgent?: () => void;
  onScrollToRepoApp?: () => void;
}

interface BannerItem {
  id: string;
  category: string;
  badge: string;
  title: string;
  highlightText: string;
  subtitle: string;
  imageUrl: string;
  points: { icon: React.ReactNode; title: string; desc: string }[];
  primaryCtaText: string;
  primaryCtaIcon: React.ReactNode;
  onPrimaryClick: 'consultation' | 'apply' | 'repoApp';
  secondaryCtaText: string;
  onSecondaryClick: 'consultation' | 'apply' | 'repoApp';
}

export const AgencyAdBanner: React.FC<AgencyAdBannerProps> = ({
  onOpenConsultation,
  onApplyAgent,
  onScrollToRepoApp,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const handleApplyClick = () => {
    if (onApplyAgent) {
      onApplyAgent();
    } else {
      const careersSection = document.getElementById('careers');
      if (careersSection) {
        careersSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleRepoAppClick = () => {
    if (onScrollToRepoApp) {
      onScrollToRepoApp();
    } else {
      const repoSection = document.getElementById('repo-app');
      if (repoSection) {
        repoSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const banners: BannerItem[] = [
    {
      id: 'bank-partnership',
      category: '🏛️ BANK & NBFC TIE-UP',
      badge: 'Institutional Recovery Partnership',
      title: 'Official Bank & NBFC Recovery',
      highlightText: 'NPA Portfolio Partnership',
      subtitle: 'Partner with MLA ASSOCIATE for compliant, high-yield retail & commercial vehicle debt recovery, field verification, and NPA resolution across India.',
      imageUrl: '/src/assets/images/bank_partnership_banner_v3_1784925758128.jpg',
      points: [
        { icon: <Building2 className="w-4 h-4 text-amber-400" />, title: '80+ Bank & NBFC Partners', desc: 'Empaneled across 28 states' },
        { icon: <ShieldCheck className="w-4 h-4 text-emerald-400" />, title: '100% RBI Compliant', desc: 'Certified professional DRA agents' },
        { icon: <CheckCircle2 className="w-4 h-4 text-blue-400" />, title: 'NPA Debt Resolution', desc: 'Highest recovery yield in India' },
        { icon: <MapPin className="w-4 h-4 text-amber-400" />, title: 'Dhanbad Head Office', desc: 'Nationwide institutional desk' },
      ],
      primaryCtaText: 'Bank & NBFC Partnership Desk',
      primaryCtaIcon: <Building2 className="w-4 h-4" />,
      onPrimaryClick: 'consultation',
      secondaryCtaText: 'Empanelment Inquiry',
      onSecondaryClick: 'consultation',
    },
    {
      id: 'agent-hiring',
      category: '🦅 BIHAR RECRUITMENT DRIVE 2026',
      badge: 'Mass Recruitment across Bihar (All 38 Districts)',
      title: 'Bihar Hiring Drive: 50+ Telecallers &',
      highlightText: '150+ Field Officers Required',
      subtitle: 'Transform your career in financial recovery. Direct hiring for 50+ Telecallers & 150+ Field Officers in Bihar (Patna, Gaya, Muzaffarpur, Bhagalpur, Purnia & all 38 districts) with daily payouts & high incentive structures.',
      imageUrl: '/src/assets/images/agent_career_banner_v3_1784925773192.jpg',
      points: [
        { icon: <UserCheck className="w-4 h-4 text-amber-400" />, title: '50+ Telecaller Openings', desc: 'Voice desk (Female & Male candidates)' },
        { icon: <UserCheck className="w-4 h-4 text-emerald-400" />, title: '150+ Field Officer Openings', desc: 'Covering all 38 districts of Bihar' },
        { icon: <Award className="w-4 h-4 text-blue-400" />, title: 'IIBF DRA Certification', desc: '100% sponsor & training support' },
        { icon: <Sparkles className="w-4 h-4 text-amber-400" />, title: 'Daily Payouts & Bonuses', desc: 'High earning potential in Bihar' },
      ],
      primaryCtaText: 'Apply Role-Wise Now',
      primaryCtaIcon: <UserCheck className="w-4 h-4" />,
      onPrimaryClick: 'apply',
      secondaryCtaText: 'Apply for Telecaller / Agent',
      onSecondaryClick: 'apply',
    },
    {
      id: 'repo-app',
      category: '📱 REPO APP TECH',
      badge: 'Real-Time Chassis Radar Engine',
      title: 'MLA Repo App: Live Vehicle &',
      highlightText: 'Chassis Search Engine',
      subtitle: 'High-precision mobile app for field collection agents with live vehicle lookup, geo-fenced visit MIS, instant e-receipts, and 100% bank audit compliance.',
      imageUrl: '/src/assets/images/repo_app_dhaansu_1784925542496.jpg',
      points: [
        { icon: <Smartphone className="w-4 h-4 text-amber-400" />, title: 'Chassis & Vehicle Search', desc: 'Instant live database check' },
        { icon: <MapPin className="w-4 h-4 text-emerald-400" />, title: 'Geo-Tagged Visit MIS', desc: 'Real-time location logs' },
        { icon: <CheckCircle2 className="w-4 h-4 text-blue-400" />, title: 'Instant e-Receipts', desc: 'SMS/WhatsApp receipt to borrower' },
        { icon: <ShieldAlert className="w-4 h-4 text-amber-400" />, title: 'Zero Audit Gap', desc: 'Full RBI digital compliance' },
      ],
      primaryCtaText: 'Download Repo App',
      primaryCtaIcon: <Smartphone className="w-4 h-4" />,
      onPrimaryClick: 'repoApp',
      secondaryCtaText: 'View App Screenshots',
      onSecondaryClick: 'repoApp',
    },
    {
      id: 'yard-network',
      category: '🛡️ SECURED YARDS',
      badge: '24/7 CCTV Guarded Vehicle Depots',
      title: 'Secured Yard Storage &',
      highlightText: 'Heavy Asset Repossession',
      subtitle: 'Safe, high-capacity vehicle storage yards equipped with round-the-clock CCTV surveillance, armed security guards, and digital yard inventory audits.',
      imageUrl: '/src/assets/images/secured_yard_dhaansu_1784925559386.jpg',
      points: [
        { icon: <ShieldCheck className="w-4 h-4 text-amber-400" />, title: '24/7 CCTV Guarded', desc: 'Gated & perimeter secured' },
        { icon: <Building2 className="w-4 h-4 text-emerald-400" />, title: 'Commercial Trucks & 4W', desc: 'Dedicated heavy vehicle bays' },
        { icon: <CheckCircle2 className="w-4 h-4 text-blue-400" />, title: 'Digital Inventory Check', desc: 'Instant condition report' },
        { icon: <MapPin className="w-4 h-4 text-amber-400" />, title: 'Highway Connectivity', desc: 'Easy transport logistics' },
      ],
      primaryCtaText: 'Inquire Yard Facility',
      primaryCtaIcon: <Building2 className="w-4 h-4" />,
      onPrimaryClick: 'consultation',
      secondaryCtaText: 'Apply as Yard Partner',
      onSecondaryClick: 'apply',
    },
  ];

  // Auto Rotation Timer for Spotlight
  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % banners.length);
      }, 3500); // 3.5s smooth transition
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, banners.length]);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);
  };

  const currentBanner = banners[currentSlide];

  const executeAction = (type: 'consultation' | 'apply' | 'repoApp') => {
    if (type === 'consultation') onOpenConsultation();
    else if (type === 'apply') handleApplyClick();
    else if (type === 'repoApp') handleRepoAppClick();
  };

  return (
    <div className="w-full bg-slate-950 border-b border-amber-500/30 overflow-hidden relative z-20">
      
      {/* 1. TOP RUNNING TICKER / MARQUEE BAR */}
      <div className="bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 text-slate-950 font-extrabold py-2 px-4 shadow-md overflow-hidden relative flex items-center">
        <div className="flex items-center space-x-2 bg-slate-950 text-amber-400 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider shrink-0 z-10 mr-3 border border-amber-400/50 shadow-inner">
          <Megaphone className="w-3.5 h-3.5 text-amber-400 animate-bounce" />
          <span>AGENCY NOTICE</span>
        </div>

        <div className="overflow-hidden whitespace-nowrap w-full flex items-center">
          <div className="inline-block animate-marquee text-xs sm:text-sm font-bold tracking-wide">
            <span className="mx-4">🦅 <strong className="underline">NOW HIRING:</strong> Experienced Repo Agents & Field Collection Officers (DRA Certified) across 28 States</span>
            <span className="mx-4">🏛️ <strong className="underline">BANK & NBFC PARTNERSHIPS:</strong> Open for Retail & Commercial Vehicle Recovery Portfolios</span>
            <span className="mx-4">📱 <strong className="underline">MLA REPO APP:</strong> Real-time Live Vehicle & Chassis Search Active</span>
            <span className="mx-4">📍 <strong className="underline">HEAD OFFICE:</strong> Dhanbad, Jharkhand | Nationwide Coverage</span>
          </div>
          <div className="inline-block animate-marquee2 text-xs sm:text-sm font-bold tracking-wide absolute top-2">
            <span className="mx-4">🦅 <strong className="underline">NOW HIRING:</strong> Experienced Repo Agents & Field Collection Officers (DRA Certified) across 28 States</span>
            <span className="mx-4">🏛️ <strong className="underline">BANK & NBFC PARTNERSHIPS:</strong> Open for Retail & Commercial Vehicle Recovery Portfolios</span>
            <span className="mx-4">📱 <strong className="underline">MLA REPO APP:</strong> Real-time Live Vehicle & Chassis Search Active</span>
            <span className="mx-4">📍 <strong className="underline">HEAD OFFICE:</strong> Dhanbad, Jharkhand | Nationwide Coverage</span>
          </div>
        </div>
      </div>

      {/* 2. CONTINUOUS SCROLLING BANNER POSTERS MARQUEE RIBBON */}
      <div className="bg-slate-900/90 py-3 border-y border-amber-500/20 overflow-hidden relative group/marquee">
        <div className="overflow-hidden whitespace-nowrap w-full flex items-center relative">
          <div className="inline-flex animate-marquee space-x-4 items-center shrink-0">
            {banners.map((b, idx) => (
              <div
                key={`m1-${b.id}`}
                onClick={() => { setCurrentSlide(idx); }}
                className="w-72 sm:w-80 shrink-0 bg-slate-950 rounded-2xl border-2 border-amber-500/40 p-2.5 hover:border-amber-400 transition-all cursor-pointer shadow-lg hover:scale-[1.02] flex items-center space-x-3 group/card"
              >
                <img 
                  src={b.imageUrl} 
                  alt={b.title} 
                  referrerPolicy="no-referrer"
                  className="w-20 h-16 object-cover rounded-xl border border-amber-500/50 shrink-0" 
                />
                <div className="overflow-hidden text-left">
                  <span className="text-[9px] font-black uppercase text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-md border border-amber-500/20 inline-block mb-1">
                    {b.badge}
                  </span>
                  <div className="text-xs font-bold text-white truncate group-hover/card:text-amber-400 transition-colors">
                    {b.title}
                  </div>
                  <div className="text-[10px] text-slate-400 truncate">
                    {b.highlightText}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="inline-flex animate-marquee2 space-x-4 items-center shrink-0 absolute top-3">
            {banners.map((b, idx) => (
              <div
                key={`m2-${b.id}`}
                onClick={() => { setCurrentSlide(idx); }}
                className="w-72 sm:w-80 shrink-0 bg-slate-950 rounded-2xl border-2 border-amber-500/40 p-2.5 hover:border-amber-400 transition-all cursor-pointer shadow-lg hover:scale-[1.02] flex items-center space-x-3 group/card"
              >
                <img 
                  src={b.imageUrl} 
                  alt={b.title} 
                  referrerPolicy="no-referrer"
                  className="w-20 h-16 object-cover rounded-xl border border-amber-500/50 shrink-0" 
                />
                <div className="overflow-hidden text-left">
                  <span className="text-[9px] font-black uppercase text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-md border border-amber-500/20 inline-block mb-1">
                    {b.badge}
                  </span>
                  <div className="text-xs font-bold text-white truncate group-hover/card:text-amber-400 transition-colors">
                    {b.title}
                  </div>
                  <div className="text-[10px] text-slate-400 truncate">
                    {b.highlightText}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. CATEGORY BANNER NAVIGATION TABS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-2">
        <div className="flex items-center justify-between gap-2 overflow-x-auto no-scrollbar pb-1 border-b border-slate-800">
          <div className="flex items-center space-x-2">
            {banners.map((b, idx) => (
              <button
                key={b.id}
                onClick={() => setCurrentSlide(idx)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 flex items-center space-x-1.5 ${
                  currentSlide === idx
                    ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20 scale-105'
                    : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                <span>{b.category}</span>
              </button>
            ))}
          </div>

          {/* Controls: Play/Pause & Prev/Next */}
          <div className="hidden sm:flex items-center space-x-2 shrink-0">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              title={isPlaying ? 'Pause auto-rotate' : 'Play auto-rotate'}
              className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-white transition-all text-xs"
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            </button>
            <button
              onClick={handlePrev}
              className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-white transition-all text-xs"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-xs text-amber-400 font-bold px-1">
              {currentSlide + 1} / {banners.length}
            </span>
            <button
              onClick={handleNext}
              className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-white transition-all text-xs"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* 3. MAIN CAROUSEL BANNER DISPLAY */}
      <div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6"
        onMouseEnter={() => setIsPlaying(false)}
        onMouseLeave={() => setIsPlaying(true)}
      >
        <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 rounded-3xl border-2 border-amber-500/40 p-5 sm:p-7 shadow-2xl shadow-amber-500/10 relative overflow-hidden transition-all duration-500">
          
          {/* Subtle Ambient Glow */}
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            
            {/* Left Col: Dynamic Banner Graphic Image */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden border-2 border-amber-500/50 shadow-2xl bg-slate-950 group/img">
                <img 
                  key={currentBanner.imageUrl}
                  src={currentBanner.imageUrl} 
                  alt={currentBanner.title} 
                  referrerPolicy="no-referrer"
                  className="w-full h-56 sm:h-64 lg:h-72 object-cover object-center transform group-hover/img:scale-105 transition-all duration-700 animate-fadeIn"
                />
                
                {/* Overlay Badges */}
                <div className="absolute top-3 left-3 bg-slate-950/90 backdrop-blur-md px-3 py-1 rounded-full border border-amber-500/50 text-[11px] font-bold text-amber-400 flex items-center space-x-1.5 shadow-lg">
                  <Award className="w-3.5 h-3.5 text-amber-400" />
                  <span>{currentBanner.badge}</span>
                </div>

                <div className="absolute bottom-3 right-3 bg-amber-500 text-slate-950 font-black px-3 py-1 rounded-full text-[10px] tracking-wider uppercase shadow-xl">
                  Official MLA Poster
                </div>
              </div>
            </div>

            {/* Right Col: Banner Text, Points & Action CTAs */}
            <div className="lg:col-span-6 space-y-3.5 animate-fadeIn">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>MLA ASSOCIATE • {currentBanner.category}</span>
              </div>

              <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white font-serif leading-tight">
                {currentBanner.title} <span className="text-amber-400">{currentBanner.highlightText}</span>
              </h2>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {currentBanner.subtitle}
              </p>

              {/* 4 Bullet Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                {currentBanner.points.map((pt, i) => (
                  <div key={i} className="bg-slate-950/80 p-2.5 rounded-xl border border-slate-800 flex items-center space-x-2.5">
                    <div className="w-7 h-7 rounded-lg bg-slate-900 border border-amber-500/20 flex items-center justify-center shrink-0">
                      {pt.icon}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">{pt.title}</div>
                      <div className="text-[10px] text-slate-400">{pt.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => executeAction(currentBanner.onPrimaryClick)}
                  className="px-4 py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold text-xs sm:text-sm rounded-xl shadow-lg shadow-amber-500/20 transition-all flex items-center space-x-2"
                >
                  {currentBanner.primaryCtaIcon}
                  <span>{currentBanner.primaryCtaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => executeAction(currentBanner.onSecondaryClick)}
                  className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 border border-amber-500/40 text-amber-400 font-bold text-xs sm:text-sm rounded-xl transition-all flex items-center space-x-2"
                >
                  <span>{currentBanner.secondaryCtaText}</span>
                </button>
              </div>

            </div>

          </div>

          {/* Bottom Slide Dots */}
          <div className="flex items-center justify-center space-x-2 pt-4">
            {banners.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                aria-label={`Go to banner slide ${i + 1}`}
                className={`h-2 rounded-full transition-all ${
                  currentSlide === i ? 'w-8 bg-amber-400' : 'w-2 bg-slate-700 hover:bg-slate-500'
                }`}
              />
            ))}
          </div>

        </div>
      </div>

    </div>
  );
};

