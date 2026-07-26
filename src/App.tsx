import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Header } from './components/Header';
import { AgencyAdBanner } from './components/AgencyAdBanner';
import { Hero } from './components/Hero';
import { StatsBar } from './components/StatsBar';
import { BankPartnersMarquee } from './components/BankPartnersMarquee';
import { AboutUs } from './components/AboutUs';
import { Services } from './components/Services';
import { Industries } from './components/Industries';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ProcessTimeline } from './components/ProcessTimeline';
import { RepoAppSection } from './components/RepoAppSection';
import { AssessmentTool } from './components/AssessmentTool';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Careers } from './components/Careers';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

import { ConsultationModal } from './components/ConsultationModal';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { JobApplyModal } from './components/JobApplyModal';
import { AdminEnquiryModal } from './components/AdminEnquiryModal';
import { FloatingActions } from './components/FloatingActions';

import { Service, JobPosition } from './types';
import { JOB_POSITIONS_DATA } from './data/mockData';

export default function App() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [isAdminInboxOpen, setIsAdminInboxOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedJob, setSelectedJob] = useState<JobPosition | null>(null);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'bank-partners', 'about', 'services', 'industries', 'why-choose-us', 'process', 'repo-app', 'testimonials', 'careers', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToContact = () => {
    const element = document.getElementById('contact');
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

  const handleApplyAgentClick = () => {
    // Open JobApplyModal directly with default Field Officer position
    if (JOB_POSITIONS_DATA && JOB_POSITIONS_DATA.length > 0) {
      setSelectedJob(JOB_POSITIONS_DATA[0]);
    }
    const careersSection = document.getElementById('careers');
    if (careersSection) {
      const headerOffset = 80;
      const elementPosition = careersSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[#0B192C] text-slate-100 font-sans antialiased selection:bg-amber-500 selection:text-slate-950 transition-colors duration-200">
        
        {/* Sticky Header */}
        <Header
          onOpenConsultation={handleScrollToContact}
          onOpenAdminInbox={() => setIsAdminInboxOpen(true)}
          activeSection={activeSection}
        />

        <main id="main-content" className="pt-20">
          {/* Agency Top Promotional Banner & Recruitment Notice */}
          <AgencyAdBanner
            onOpenConsultation={handleScrollToContact}
            onApplyAgent={handleApplyAgentClick}
            onScrollToRepoApp={() => {
              const repoSection = document.getElementById('repo-app');
              if (repoSection) {
                repoSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          />

          {/* Homepage Hero */}
          <Hero
            onOpenConsultation={handleScrollToContact}
            onScrollToContact={handleScrollToContact}
          />

          {/* High-Impact Statistics Section */}
          <StatsBar />

          {/* Live Bank & NBFC Logo Marquee */}
          <BankPartnersMarquee />

          {/* About Us */}
          <AboutUs />

          {/* Services */}
          <Services onSelectService={(service) => setSelectedService(service)} />

          {/* Industries We Serve */}
          <Industries onOpenConsultation={handleScrollToContact} />

          {/* Why Choose MLA ASSOCIATE */}
          <WhyChooseUs />

          {/* Recovery Process Timeline */}
          <ProcessTimeline />

          {/* Dedicated Repo Mobile App Section */}
          <RepoAppSection />

          {/* Interactive Lenders Portfolio Yield Calculator */}
          <AssessmentTool onOpenConsultation={handleScrollToContact} />

          {/* Professional Testimonials */}
          <Testimonials />

          {/* FAQ Section */}
          <FAQ />

          {/* Careers Section */}
          <Careers onApplyJob={(job) => setSelectedJob(job)} />

          {/* Contact Us Section */}
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer onOpenAdminInbox={() => setIsAdminInboxOpen(true)} />

        {/* Floating Action Buttons */}
        <FloatingActions />

        {/* Modals */}
        <ConsultationModal
          isOpen={isConsultationOpen}
          onClose={() => setIsConsultationOpen(false)}
        />

        <ServiceDetailModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
          onOpenConsultation={handleScrollToContact}
        />

        <JobApplyModal
          job={selectedJob}
          onClose={() => setSelectedJob(null)}
        />

        <AdminEnquiryModal
          isOpen={isAdminInboxOpen}
          onClose={() => setIsAdminInboxOpen(false)}
        />

      </div>
    </ThemeProvider>
  );
}
