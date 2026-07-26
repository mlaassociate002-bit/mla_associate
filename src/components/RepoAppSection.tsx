import React, { useState } from 'react';
import { Smartphone, Download, QrCode, CheckCircle2, ShieldCheck, MapPin, Camera, CreditCard, FileCheck, ArrowRight, UserCheck, RefreshCw, X, Copy, Check } from 'lucide-react';

export const RepoAppSection: React.FC = () => {
  const [showQRModal, setShowQRModal] = useState(false);
  const [showImageLightbox, setShowImageLightbox] = useState(false);
  const [viewMode, setViewMode] = useState<'screenshot' | 'interactive'>('screenshot');
  const [activeScreen, setActiveScreen] = useState<'dashboard' | 'case' | 'receipt'>('dashboard');
  const [isDownloading, setIsDownloading] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  const appScreenshotUrl = '/src/assets/images/repo_app_screenshot_1784923925440.jpg';

  const playStoreLink = 'https://play.google.com/store/apps/details?id=com.mla.vehiclerepossession';

  const handleDownloadAPK = () => {
    window.open(playStoreLink, '_blank');
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(playStoreLink);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const features = [
    { title: 'Agent Login', desc: 'Secure biometric & OTP verification for recovery officers', icon: UserCheck },
    { title: 'Case Allocation', desc: 'Real-time assignment of delinquent borrower files with priority tags', icon: ShieldCheck },
    { title: 'GPS Navigation', desc: 'Turn-by-turn route mapping to verified borrower residential/office addresses', icon: MapPin },
    { title: 'Visit Photo Upload', desc: 'Timestamped & geo-tagged site photo capture with body-cam sync', icon: Camera },
    { title: 'Customer Details', desc: 'Encrypted access to borrower history, EMI defaults & legal notices', icon: ShieldCheck },
    { title: 'EMI Collection', desc: 'Doorstep UPI, Cash & DD collection module with offline sync', icon: CreditCard },
    { title: 'Digital Receipt', desc: 'Instant SMS & WhatsApp e-receipt dispatch with electronic signatures', icon: FileCheck },
    { title: 'Follow-up', desc: 'Automated promise-to-pay (PTP) scheduling & calendar alerts', icon: RefreshCw },
    { title: 'Live Location', desc: 'Background location beacon for agent safety & audit compliance', icon: MapPin },
    { title: 'Report Submission', desc: 'One-click visit MIS upload directly to central bank portal', icon: FileCheck },
  ];

  return (
    <section id="repo-app" className="py-20 bg-slate-950 text-white relative overflow-hidden border-t border-slate-900">
      
      {/* Background Lighting */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Smartphone className="w-3.5 h-3.5" />
            <span>Digital Field Technology</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-serif tracking-tight">
            MLA ASSOCIATE <span className="text-amber-400">Repo App</span>
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            Engineered for India's largest recovery field force. Features live case allocation, turn-by-turn GPS navigation, doorstep EMI collection, visit photo uploads, and real-time bank MIS reporting.
          </p>
        </div>

        {/* Main Content: Phone Mockup + Features List */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Interactive Mobile Phone Mockup */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[320px] sm:max-w-[340px]">
              
              {/* Outer Phone Frame */}
              <div className="relative mx-auto border-[12px] border-slate-800 bg-slate-950 rounded-[48px] shadow-2xl shadow-black/90 p-3 ring-1 ring-amber-500/30 overflow-hidden">
                
                {/* Notch / Speaker bar */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-800 rounded-b-2xl z-30 flex items-center justify-center">
                  <div className="w-12 h-1.5 bg-slate-700 rounded-full" />
                </div>

                {/* Inner Screen */}
                <div className="bg-[#0B192C] text-slate-100 rounded-[36px] pt-7 pb-3 px-2 min-h-[580px] flex flex-col justify-between relative overflow-hidden border border-slate-800">
                  
                  {/* Mode Switch Header */}
                  <div className="flex items-center justify-between text-[10px] text-slate-400 pb-2 mb-2 border-b border-slate-800 px-1 z-20">
                    <span className="font-bold text-amber-400">MLA REPO APP</span>
                    <div className="flex bg-slate-900 rounded-lg p-0.5 border border-slate-800">
                      <button
                        onClick={() => setViewMode('screenshot')}
                        className={`px-2 py-0.5 text-[9px] font-bold rounded ${viewMode === 'screenshot' ? 'bg-amber-500 text-slate-950' : 'text-slate-400 hover:text-white'}`}
                      >
                        Screenshot
                      </button>
                      <button
                        onClick={() => setViewMode('interactive')}
                        className={`px-2 py-0.5 text-[9px] font-bold rounded ${viewMode === 'interactive' ? 'bg-amber-500 text-slate-950' : 'text-slate-400 hover:text-white'}`}
                      >
                        Demo
                      </button>
                    </div>
                  </div>

                  {/* Screenshot View Mode - Displaying exact reference image */}
                  <div className="relative flex-1 flex flex-col items-center justify-center group/screen cursor-pointer overflow-hidden rounded-2xl bg-slate-950" onClick={() => setShowImageLightbox(true)}>
                    <img 
                      src={appScreenshotUrl} 
                      alt="MLA ASSOCIATE Repo Mobile App Official Interface Screenshot" 
                      referrerPolicy="no-referrer"
                      className="w-full h-[510px] object-contain rounded-2xl border border-slate-800 shadow-md group-hover/screen:scale-102 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-slate-950/30 opacity-0 group-hover/screen:opacity-100 transition-opacity flex flex-col items-center justify-center p-3 text-center">
                      <span className="p-2 rounded-full bg-amber-500 text-slate-950 font-bold mb-1 shadow-lg">
                        <Download className="w-4 h-4" />
                      </span>
                      <span className="text-xs font-bold text-white bg-slate-900/90 px-3 py-1 rounded-full border border-amber-500/40">
                        Tap to View Full Screen
                      </span>
                    </div>
                  </div>

                  {/* Mockup Screen Content 1: Dashboard / Case Allocation (Interactive Demo Mode) */}
                  {viewMode === 'interactive' && (
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        {/* Agent Profile Strip */}
                        <div className="bg-slate-900/90 p-2 rounded-xl border border-slate-800 mb-2 flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <div className="w-7 h-7 rounded-full bg-amber-500 text-slate-950 font-bold text-xs flex items-center justify-center">
                              RA
                            </div>
                            <div>
                              <div className="text-xs font-bold text-white leading-none">Ramesh Agent</div>
                              <div className="text-[10px] text-amber-400 mt-0.5">DRA ID: IIBF-88902</div>
                            </div>
                          </div>
                          <span className="text-[9px] bg-amber-500/10 text-amber-400 px-2 py-0.5 rounded-full border border-amber-500/20">
                            Active
                          </span>
                        </div>

                        {/* App Navigation Screen Tabs inside Mockup */}
                        <div className="flex gap-1 bg-slate-900/80 p-1 rounded-lg text-[10px] mb-2">
                          <button
                            onClick={() => setActiveScreen('dashboard')}
                            className={`flex-1 py-1 rounded font-semibold transition-all ${activeScreen === 'dashboard' ? 'bg-amber-500 text-slate-950' : 'text-slate-400'}`}
                          >
                            Cases
                          </button>
                          <button
                            onClick={() => setActiveScreen('case')}
                            className={`flex-1 py-1 rounded font-semibold transition-all ${activeScreen === 'case' ? 'bg-amber-500 text-slate-950' : 'text-slate-400'}`}
                          >
                            Map
                          </button>
                          <button
                            onClick={() => setActiveScreen('receipt')}
                            className={`flex-1 py-1 rounded font-semibold transition-all ${activeScreen === 'receipt' ? 'bg-amber-500 text-slate-950' : 'text-slate-400'}`}
                          >
                            Receipt
                          </button>
                        </div>

                        {activeScreen === 'dashboard' && (
                          <div className="space-y-2 animate-fadeIn">
                            <div className="p-2.5 bg-slate-900 rounded-xl border border-amber-500/30">
                              <div className="flex justify-between text-[10px] mb-0.5">
                                <span className="font-bold text-white">Vehicle Case #4892</span>
                                <span className="text-amber-400 font-bold">120 DPD</span>
                              </div>
                              <p className="text-[10px] text-slate-300">Hyundai Creta (MH-02-CX-9021)</p>
                              <div className="mt-1.5 pt-1.5 border-t border-slate-800 flex justify-between items-center text-[9px]">
                                <span className="text-slate-400">Overdue: ₹1,45,000</span>
                                <span className="bg-emerald-500/10 text-emerald-400 px-1.5 py-0.5 rounded font-bold">Allocated</span>
                              </div>
                            </div>

                            <div className="p-2.5 bg-slate-900 rounded-xl border border-slate-800">
                              <div className="flex justify-between text-[10px] mb-0.5">
                                <span className="font-bold text-white">Truck #8812</span>
                                <span className="text-rose-400 font-bold">180 DPD</span>
                              </div>
                              <p className="text-[10px] text-slate-300">Tata Prima 2830 • Repo Order</p>
                              <div className="mt-1.5 pt-1.5 border-t border-slate-800 flex justify-between items-center text-[9px]">
                                <span className="text-slate-400">Overdue: ₹4,80,000</span>
                                <span className="bg-rose-500/10 text-rose-400 px-1.5 py-0.5 rounded font-bold">Priority Seizure</span>
                              </div>
                            </div>
                          </div>
                        )}

                        {activeScreen === 'case' && (
                          <div className="space-y-2 animate-fadeIn">
                            <div className="p-2.5 bg-slate-900 rounded-xl border border-slate-800 text-xs">
                              <div className="flex items-center space-x-1 text-amber-400 font-bold mb-0.5 text-[11px]">
                                <MapPin className="w-3 h-3" />
                                <span>Geo-fenced Address</span>
                              </div>
                              <p className="text-[10px] text-slate-300">Plot 45, MIDC Area, Thane, Mumbai</p>
                            </div>

                            <div className="p-2.5 bg-slate-950 rounded-xl border border-dashed border-amber-500/40 text-center">
                              <Camera className="w-5 h-5 text-amber-400 mx-auto mb-1" />
                              <div className="text-[10px] font-bold text-white">Visit Photo Uploaded</div>
                              <div className="text-[9px] text-slate-400 mt-0.5">19.0760° N, 72.8777° E</div>
                            </div>
                          </div>
                        )}

                        {activeScreen === 'receipt' && (
                          <div className="p-3 bg-slate-900 rounded-xl border border-emerald-500/40 text-center animate-fadeIn space-y-1.5">
                            <div className="w-7 h-7 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                              <CheckCircle2 className="w-4 h-4" />
                            </div>
                            <div className="text-xs font-bold text-white">EMI Collection Done</div>
                            <div className="text-base font-extrabold text-amber-400 font-serif">₹25,000</div>
                            <p className="text-[9px] text-slate-300">Receipt #MLA-2026-8891</p>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Mockup Screen Bottom Footer Button */}
                  <div className="mt-2 pt-2 border-t border-slate-800 z-20">
                    <button
                      onClick={() => setShowImageLightbox(true)}
                      className="w-full py-1.5 bg-slate-900 hover:bg-slate-800 border border-amber-500/40 text-amber-400 font-bold text-[11px] rounded-xl transition-all flex items-center justify-center space-x-1"
                    >
                      <span>🔍 Full App Screenshot</span>
                    </button>
                  </div>

                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-4 -right-2 bg-slate-900/95 border border-amber-500/40 text-amber-300 text-[11px] font-bold px-3.5 py-1.5 rounded-full shadow-2xl backdrop-blur-md flex items-center space-x-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>100% Secure Field Encryption</span>
              </div>

            </div>
          </div>

          {/* Right Column: App Features & Download Buttons */}
          <div className="lg:col-span-7 space-y-8">
            
            <div className="space-y-3">
              <h3 className="text-2xl font-bold text-white font-serif">
                Field Recovery Operations Streamlined on Android
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                The MLA ASSOCIATE Repo App equips collection agents with high-precision digital tools. From real-time route optimization to instant digital receipting, our app ensures full RBI compliance and zero audit gaps.
              </p>
            </div>

            {/* 10 Core Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {features.map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <div key={idx} className="p-3.5 bg-slate-900/80 rounded-xl border border-slate-800 hover:border-amber-500/30 transition-all">
                    <div className="flex items-center space-x-2.5 mb-1">
                      <div className="w-7 h-7 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                        <IconComp className="w-4 h-4" />
                      </div>
                      <h4 className="text-xs font-bold text-white font-serif">{item.title}</h4>
                    </div>
                    <p className="text-[11px] text-slate-400 leading-normal pl-9.5">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Action Buttons Section */}
            <div className="pt-4 border-t border-slate-800/80 space-y-4">
              <div className="flex flex-col sm:flex-row items-center gap-3">
                
                {/* Download App / APK Button */}
                <button
                  onClick={handleDownloadAPK}
                  disabled={isDownloading}
                  className="w-full sm:w-auto px-6 py-3.5 text-xs font-extrabold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 rounded-xl shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center space-x-2 cursor-pointer shrink-0"
                >
                  <Download className="w-4 h-4" />
                  <span>{isDownloading ? 'Preparing APK Download...' : 'Download Android App (APK)'}</span>
                </button>

                {/* Scan QR Code Button */}
                <button
                  onClick={() => setShowQRModal(true)}
                  className="w-full sm:w-auto px-5 py-3.5 text-xs font-bold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700/80 rounded-xl transition-all flex items-center justify-center space-x-2 cursor-pointer shrink-0"
                >
                  <QrCode className="w-4 h-4 text-amber-400" />
                  <span>Scan QR Code</span>
                </button>
              </div>

              {/* Direct Play Store Download Link Bar */}
              <div className="p-3 bg-slate-900/90 rounded-xl border border-slate-800 flex items-center justify-between text-xs text-slate-300">
                <div className="flex items-center space-x-2 truncate mr-2">
                  <span className="text-amber-400 font-bold shrink-0">Play Store:</span>
                  <a
                    href={playStoreLink}
                    target="_blank"
                    rel="noreferrer"
                    className="text-amber-300 hover:underline truncate font-mono text-[11px]"
                  >
                    {playStoreLink}
                  </a>
                </div>
                <button
                  onClick={handleCopyLink}
                  className="p-1.5 rounded-lg bg-slate-800 hover:bg-amber-500 hover:text-slate-950 text-slate-300 transition-colors shrink-0"
                  title="Copy Play Store Link"
                >
                  {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* QR Code Modal Popup */}
      {showQRModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-slate-900 border border-amber-500/40 rounded-2xl max-w-sm w-full p-6 text-center relative shadow-2xl space-y-4">
            
            <button
              onClick={() => setShowQRModal(false)}
              className="absolute top-4 right-4 p-1 rounded-full bg-slate-800 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 mx-auto flex items-center justify-center">
              <QrCode className="w-6 h-6" />
            </div>

            <div>
              <h3 className="text-lg font-bold text-white font-serif">Scan to Install Repo App</h3>
              <p className="text-xs text-slate-400 mt-1">Point your Android smartphone camera to download the APK directly.</p>
            </div>

            {/* High-Tech QR Code Mockup graphic */}
            <div className="p-4 bg-white rounded-xl max-w-[200px] mx-auto shadow-inner flex flex-col items-center">
              <div className="w-36 h-36 border-4 border-slate-950 p-2 bg-slate-950 rounded flex items-center justify-center relative overflow-hidden">
                <div className="grid grid-cols-6 gap-1 w-full h-full">
                  {Array.from({ length: 36 }).map((_, i) => (
                    <div
                      key={i}
                      className={`${(i * 7) % 3 === 0 || i % 5 === 0 ? 'bg-amber-400' : 'bg-slate-800'} rounded-xs`}
                    />
                  ))}
                </div>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="bg-slate-950 px-2 py-1 rounded border border-amber-400 text-amber-400 text-[9px] font-extrabold font-serif">
                    MLA REPO
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-2 pt-2">
              <button
                onClick={() => {
                  setShowQRModal(false);
                  handleDownloadAPK();
                }}
                className="w-full py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-xl shadow transition-all"
              >
                Download APK Directly
              </button>
              <p className="text-[10px] text-slate-500">Official Android Build • Version 2.4.0</p>
            </div>

          </div>
        </div>
      )}

      {/* Image Lightbox Modal */}
      {showImageLightbox && (
        <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn" onClick={() => setShowImageLightbox(false)}>
          <div className="relative max-w-sm sm:max-w-md w-full bg-slate-900 border border-amber-500/40 rounded-3xl p-4 shadow-2xl space-y-3" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <div className="flex items-center space-x-2">
                <Smartphone className="w-4 h-4 text-amber-400" />
                <span className="text-sm font-bold text-white font-serif">MLA ASSOCIATE Repo App Interface</span>
              </div>
              <button
                onClick={() => setShowImageLightbox(false)}
                className="p-1 rounded-full bg-slate-800 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="overflow-hidden rounded-2xl border border-slate-800 max-h-[80vh] flex items-center justify-center bg-slate-950">
              <img 
                src={appScreenshotUrl} 
                alt="MLA ASSOCIATE Repo Mobile App Full Interface Screenshot" 
                referrerPolicy="no-referrer"
                className="w-full max-h-[75vh] object-contain rounded-2xl" 
              />
            </div>

            <div className="flex items-center justify-between pt-1 text-xs text-slate-400">
              <span className="text-amber-400 font-semibold">Live Chassis/Vehicle Search App</span>
              <button
                onClick={handleDownloadAPK}
                className="px-3 py-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-xl transition-all flex items-center space-x-1"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download App</span>
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
