import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Menu, X, ShieldCheck, ArrowRight, Clock, Lock, Sun, Moon } from 'lucide-react';
import { LogoIcon } from './LogoIcon';
import { useTheme } from '../context/ThemeContext';

interface HeaderProps {
  onOpenConsultation: () => void;
  onOpenAdminInbox?: () => void;
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({ onOpenConsultation, onOpenAdminInbox, activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Bank Partners', href: '#bank-partners' },
    { name: 'Recovery Process', href: '#process' },
    { name: 'Repo App', href: '#repo-app' },
    { name: 'Careers', href: '#careers' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
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
    <>
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
        {/* Main Navbar */}
        <nav className={`transition-all duration-300 ${isScrolled ? 'bg-[#0B192C]/95 backdrop-blur-md shadow-2xl py-3 border-b border-slate-800/80' : 'bg-[#0B192C]/90 backdrop-blur-md py-4 border-b border-slate-800/40'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            
            {/* Logo */}
            <a href="#home" onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }} className="flex items-center space-x-3 group">
              <img 
                src="/src/assets/images/mla_ultra_hd_logo_1785063358915.jpg" 
                alt="MLA ASSOCIATE Ultra HD Official Logo" 
                referrerPolicy="no-referrer"
                className="w-12 h-12 rounded-xl object-cover border-2 border-amber-500/80 shadow-xl shadow-amber-500/30 group-hover:scale-105 transition-transform" 
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
            </a>

            {/* Desktop Navigation */}
            <div className="hidden xl:flex items-center space-x-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                      isActive
                        ? 'text-amber-400 bg-amber-500/10 font-semibold border border-amber-500/20'
                        : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </div>

            {/* Action Buttons */}
            <div className="hidden md:flex items-center space-x-2.5">
              {/* Theme Toggle Button */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-slate-900/90 hover:bg-slate-800 text-amber-400 border border-amber-500/40 transition-all shadow-sm flex items-center justify-center cursor-pointer group"
                title={theme === 'dark' ? 'Switch to Light Mode for high brightness' : 'Switch to Dark Mode'}
                aria-label="Toggle light/dark theme"
              >
                {theme === 'dark' ? (
                  <Sun className="w-4 h-4 text-amber-400 group-hover:rotate-45 transition-transform" />
                ) : (
                  <Moon className="w-4 h-4 text-amber-600 group-hover:-rotate-12 transition-transform" />
                )}
              </button>

              {onOpenAdminInbox && (
                <button
                  onClick={onOpenAdminInbox}
                  className="px-3 py-1.5 bg-slate-900/90 hover:bg-slate-800 text-amber-400 border border-amber-500/40 rounded-lg text-xs font-bold transition-all flex items-center space-x-1.5 shadow-sm"
                  title="Agency Admin & Management Portal (Password Protected)"
                >
                  <Lock className="w-3.5 h-3.5 text-amber-400" />
                  <span>Admin Portal</span>
                </button>
              )}

              <button
                onClick={onOpenConsultation}
                className="relative inline-flex items-center justify-center px-4 py-2 text-xs font-semibold tracking-wide text-slate-950 transition-all bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 rounded-lg shadow-md shadow-amber-500/20 hover:shadow-amber-500/30 hover:scale-[1.02] active:scale-95 group cursor-pointer"
              >
                <span>Get Free Consultation</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="flex items-center space-x-2 xl:hidden">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-slate-900/90 text-amber-400 border border-amber-500/40 shadow-sm flex items-center justify-center"
                title="Toggle Light/Dark Theme"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-amber-600" />}
              </button>

              <button
                onClick={onOpenConsultation}
                className="md:hidden px-3 py-1.5 text-xs font-semibold text-slate-950 bg-amber-400 rounded-md shadow"
              >
                Consult
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/80 focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-[#071321]/98 backdrop-blur-xl border-b border-slate-800 px-4 pt-3 pb-6 shadow-2xl transition-all">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className={`px-4 py-2.5 text-sm font-medium rounded-lg transition-colors flex items-center justify-between ${
                      isActive
                        ? 'text-amber-400 bg-amber-500/10 font-semibold border border-amber-500/20'
                        : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />}
                  </a>
                );
              })}
            </div>

            <div className="mt-5 pt-4 border-t border-slate-800 flex flex-col space-y-3">
              {onOpenAdminInbox && (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenAdminInbox();
                  }}
                  className="w-full py-2.5 text-xs font-bold text-amber-300 bg-slate-900 border border-amber-500/40 rounded-lg shadow flex items-center justify-center space-x-2"
                >
                  <Lock className="w-4 h-4 text-amber-400" />
                  <span>Admin & Management Portal</span>
                </button>
              )}

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full py-3 text-sm font-semibold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 rounded-lg shadow-lg flex items-center justify-center space-x-2"
              >
                <span>Get Free Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex justify-center pt-2 text-xs text-slate-300">
                <a href="mailto:mlaassociate002@gmail.com" className="flex items-center space-x-1.5 hover:text-amber-400 font-semibold">
                  <Mail className="w-4 h-4 text-amber-400" />
                  <span>mlaassociate002@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
