import React from 'react';
import { ShieldCheck, Phone, Mail, MapPin, Linkedin, Twitter, Facebook, Youtube, Shield } from 'lucide-react';
import { LogoIcon } from './LogoIcon';

interface FooterProps {
  onOpenAdminInbox?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAdminInbox }) => {
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-[#050d17] text-slate-300 pt-16 pb-8 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Col 1: Branding */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/src/assets/images/mla_ultra_hd_logo_1785063358915.jpg" 
                alt="MLA ASSOCIATE Ultra HD Official Logo" 
                referrerPolicy="no-referrer"
                className="w-12 h-12 rounded-xl object-cover border-2 border-amber-500/80 shadow-lg shadow-amber-500/20" 
              />
              <div>
                <div className="flex items-center space-x-1.5">
                  <span className="text-xl font-extrabold tracking-tight text-white font-serif">MLA</span>
                  <span className="text-xl font-bold tracking-wider text-amber-400 font-sans">ASSOCIATE</span>
                </div>
                <span className="text-[10px] tracking-widest uppercase text-slate-400 block -mt-1 font-semibold">
                  Collection & Repossession Agency
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              MLA ASSOCIATE is a trusted Collection & Repossession Agency providing nationwide recovery, skip tracing, field verification, and portfolio management services across India.
            </p>

            <div className="pt-2 flex items-center space-x-3 text-xs text-amber-400 font-semibold">
              <Shield className="w-4 h-4 text-emerald-400" />
              <span>100% RBI Fair Practice & IIBF DRA Certified</span>
            </div>

            {/* Social Icons */}
            <div className="pt-2 flex items-center space-x-3">
              <a href="#" className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-amber-500 hover:text-slate-950 border border-slate-800 text-slate-400 flex items-center justify-center transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-amber-500 hover:text-slate-950 border border-slate-800 text-slate-400 flex items-center justify-center transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-amber-500 hover:text-slate-950 border border-slate-800 text-slate-400 flex items-center justify-center transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-amber-500 hover:text-slate-950 border border-slate-800 text-slate-400 flex items-center justify-center transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-serif">Quick Navigation</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#home" onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }} className="hover:text-amber-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" onClick={(e) => { e.preventDefault(); handleNavClick('#about'); }} className="hover:text-amber-400 transition-colors">About Us</a>
              </li>
              <li>
                <a href="#services" onClick={(e) => { e.preventDefault(); handleNavClick('#services'); }} className="hover:text-amber-400 transition-colors">Services</a>
              </li>
              <li>
                <a href="#industries" onClick={(e) => { e.preventDefault(); handleNavClick('#industries'); }} className="hover:text-amber-400 transition-colors">Industries We Serve</a>
              </li>
              <li>
                <a href="#why-choose-us" onClick={(e) => { e.preventDefault(); handleNavClick('#why-choose-us'); }} className="hover:text-amber-400 transition-colors">Why Choose Us</a>
              </li>
              <li>
                <a href="#process" onClick={(e) => { e.preventDefault(); handleNavClick('#process'); }} className="hover:text-amber-400 transition-colors">Recovery Process</a>
              </li>
              <li>
                <a href="#testimonials" onClick={(e) => { e.preventDefault(); handleNavClick('#testimonials'); }} className="hover:text-amber-400 transition-colors">Testimonials</a>
              </li>
              <li>
                <a href="#careers" onClick={(e) => { e.preventDefault(); handleNavClick('#careers'); }} className="hover:text-amber-400 transition-colors">Careers & Openings</a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }} className="hover:text-amber-400 transition-colors">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Key Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-serif">Recovery Services</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>Loan Collection</li>
              <li>Vehicle Repossession</li>
              <li>Skip Tracing & Locating</li>
              <li>Written-Off Debt Recovery</li>
              <li>Field Verification & Audits</li>
              <li>Customer Follow-up</li>
              <li>Portfolio Management</li>
              <li>Asset Recovery & Yard Storage</li>
              <li>Legal Recovery Support</li>
              <li>Collection Analytics & MIS</li>
            </ul>
          </div>

          {/* Col 4: Corporate Contact Info */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-serif">Head Office & Branch</h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-amber-400 block">Head Office:</span>
                  <span>MLA Complex, Main Road, Dhanbad, Jharkhand - 826001</span>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-amber-400 block">Branch Office:</span>
                  <span>Rajeev Nagar, Digha, Patliputra, Patna, Bihar - 800024 / 800011 / 800013</span>
                </div>
              </div>
              <div className="flex items-center space-x-2 pt-1">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href="mailto:mlaassociate002@gmail.com" className="hover:text-amber-400 font-bold text-slate-200">mlaassociate002@gmail.com</a>
              </div>
            </div>
            
            <div className="pt-2 border-t border-slate-900 text-[11px] text-amber-400 font-semibold">
              <span>PAN India Presence • 28 Indian States & All UTs Covered</span>
            </div>
          </div>

        </div>

        {/* Bottom Bar & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-2">
            <p>© {new Date().getFullYear()} MLA ASSOCIATE. All rights reserved.</p>
            <span className="hidden sm:inline text-slate-700">•</span>
            <a href="https://www.mlaassociate.in" target="_blank" rel="noreferrer" className="text-amber-400 font-bold font-mono hover:underline">www.mlaassociate.in</a>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <span className="hover:text-slate-400 transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-400 transition-colors cursor-pointer">Terms of Service</span>
            <span className="hover:text-slate-400 transition-colors cursor-pointer">RBI Fair Practice Code</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
