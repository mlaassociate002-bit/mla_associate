import React, { useState, useEffect } from 'react';
import { Mail, ArrowUp } from 'lucide-react';

export const FloatingActions: React.FC = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const emailSubject = encodeURIComponent('Enquiry for MLA ASSOCIATE - Collection & Repossession');
  const emailBody = encodeURIComponent('Hello MLA ASSOCIATE,\n\nI am reaching out to inquire about your Collection & Repossession Services for my organization.\n\nName:\nOrganization / Institution:\nCity:\nDetails:\n');

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end space-y-3 pointer-events-auto">
      
      {/* Email Enquiry Floating Button */}
      <a
        href={`mailto:mlaassociate002@gmail.com?subject=${emailSubject}&body=${emailBody}`}
        className="flex items-center space-x-2 px-4 py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold text-xs sm:text-sm rounded-full shadow-2xl transition-all hover:scale-105 active:scale-95 border-2 border-amber-300/50"
        title="Email Enquiry to mlaassociate002@gmail.com"
      >
        <Mail className="w-4 h-4 text-slate-950" />
        <span>Email Enquiry</span>
      </a>

      {/* Back To Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="w-10 h-10 rounded-full bg-slate-900 border border-amber-500/40 text-amber-400 flex items-center justify-center shadow-2xl hover:bg-amber-500 hover:text-slate-950 transition-all hover:scale-110 cursor-pointer animate-fadeIn"
          title="Back to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

    </div>
  );
};
