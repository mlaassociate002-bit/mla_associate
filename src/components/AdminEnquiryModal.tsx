import React, { useState, useEffect } from 'react';
import { X, Mail, FileSpreadsheet, Trash2, CheckCircle2, User, Phone, MapPin, Briefcase, Calendar, RefreshCw, ShieldAlert, Inbox, ExternalLink, Lock, Building2, KeyRound, AlertCircle, LogOut, Eye, EyeOff, Key, Search, Filter, SlidersHorizontal, RotateCcw, XCircle, Bell, ChevronDown, ChevronUp, Copy, Check, FileText, Maximize2, Minimize2 } from 'lucide-react';

interface AdminEnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface StoredInquiry {
  id: string;
  type: 'Job Application' | 'Client Inquiry' | 'Consultation Request' | 'Bank & NBFC Inquiry';
  name: string;
  roleOrService: string;
  email: string;
  phone: string;
  city: string;
  companyOrBank?: string;
  draCertified?: string;
  experience?: string;
  message?: string;
  emailOptIn?: string;
  timestamp: string;
}

export const AdminEnquiryModal: React.FC<AdminEnquiryModalProps> = ({ isOpen, onClose }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [pinInput, setPinInput] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [pinError, setPinError] = useState<string>('');
  const [isChangingPass, setIsChangingPass] = useState<boolean>(false);
  const [newPass, setNewPass] = useState<string>('');
  const [passSuccessMsg, setPassSuccessMsg] = useState<string>('');

  const [activeTab, setActiveTab] = useState<'all' | 'bank' | 'jobs' | 'inquiries'>('all');
  const [submissions, setSubmissions] = useState<StoredInquiry[]>([]);
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Search & Filter state
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedDistrict, setSelectedDistrict] = useState<string>('all');
  const [selectedServiceType, setSelectedServiceType] = useState<string>('all');
  const [dateRangeFilter, setDateRangeFilter] = useState<string>('all');

  // Expanded row state & copy record feedback
  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>({});
  const [copiedRecordId, setCopiedRecordId] = useState<string | null>(null);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [refreshMsg, setRefreshMsg] = useState(false);

  const handleRefresh = () => {
    setIsRefreshing(true);
    loadSubmissions();
    setRefreshMsg(true);
    setTimeout(() => setIsRefreshing(false), 600);
    setTimeout(() => setRefreshMsg(false), 2500);
  };

  const handleDeleteSingle = (id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const targetItem = submissions.find(s => s.id === id);
    const label = targetItem ? `${targetItem.name} (${targetItem.id})` : `#${id}`;
    if (window.confirm(`Are you sure you want to delete enquiry record ${label}?`)) {
      const updated = submissions.filter(item => item.id !== id);
      setSubmissions(updated);
      localStorage.setItem('mla_all_submissions', JSON.stringify(updated));
      setExpandedIds(prev => {
        const copy = { ...prev };
        delete copy[id];
        return copy;
      });
    }
  };

  const loadSubmissions = () => {
    try {
      const stored = localStorage.getItem('mla_all_submissions');
      if (stored) {
        setSubmissions(JSON.parse(stored));
      } else {
        setSubmissions([]);
      }
    } catch (e) {
      console.error('Error loading submissions:', e);
    }
  };

  useEffect(() => {
    if (isOpen) {
      loadSubmissions();
      const authState = sessionStorage.getItem('mla_admin_authed');
      if (authState === 'true') {
        setIsAuthenticated(true);
      }
    }
  }, [isOpen]);

  if (!isOpen) return null;

  // Handle Password authentication - ONLY active pass allowed (default 1234 or custom)
  const handlePinSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const customPass = localStorage.getItem('mla_admin_password');
    const activePass = customPass ? customPass.trim() : '1234';
    const inputVal = pinInput.trim();

    if (inputVal === activePass) {
      setIsAuthenticated(true);
      sessionStorage.setItem('mla_admin_authed', 'true');
      setPinError('');
      setPinInput('');
    } else {
      setPinError(`Incorrect password! Enter ${customPass ? 'your custom saved password' : 'default PIN 1234'}.`);
    }
  };

  const handleChangePassword = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPass.trim().length < 4) {
      alert('Password must be at least 4 characters.');
      return;
    }
    localStorage.setItem('mla_admin_password', newPass.trim());
    setPassSuccessMsg('New Password Saved Successfully!');
    setNewPass('');
    setTimeout(() => {
      setPassSuccessMsg('');
      setIsChangingPass(false);
    }, 2000);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('mla_admin_authed');
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('mlaassociate002@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleClearAll = () => {
    if (window.confirm('Are you sure you want to delete all bank and job records?')) {
      localStorage.removeItem('mla_all_submissions');
      setSubmissions([]);
    }
  };

  const handleAddSampleData = () => {
    const sampleSubmissions: StoredInquiry[] = [
      {
        id: 'BANK-' + Math.floor(100000 + Math.random() * 900000),
        type: 'Bank & NBFC Inquiry',
        name: 'Anand Prakash (Regional Collection Head)',
        roleOrService: 'DAK & Early Bucket Loan Collection (Bucket 1, 2, 3 / SMA-0/1)',
        companyOrBank: 'HDFC Bank - Patna Zonal Office',
        email: 'anand.prakash@hdfc.com',
        phone: '+91 91023 45678',
        city: 'Patna & Gaya, Bihar',
        message: 'Require empanelment for DAK & Early Bucket 1-3 collections across Personal Loans, Auto Loans, and 2-Wheelers in Bihar.',
        emailOptIn: 'Yes (Opted-in for updates)',
        timestamp: new Date().toLocaleString()
      },
      {
        id: 'BANK-' + Math.floor(100000 + Math.random() * 900000),
        type: 'Bank & NBFC Inquiry',
        name: 'Rakesh Verma (NPA & Recovery Lead)',
        roleOrService: 'All Loan Types NPA & Hard Recovery Contract (Auto, Tractor, Home, MFI, Gold)',
        companyOrBank: 'Bajaj Finance Ltd - Bihar Circle',
        email: 'rakesh.verma@bajajfinance.in',
        phone: '+91 98350 99887',
        city: 'Muzaffarpur & Bhagalpur',
        message: 'Empanelment for Hard NPA & Written-off loan recovery for Tractor, Commercial Vehicles, Business Loans, and Microfinance.',
        emailOptIn: 'Yes (Opted-in for updates)',
        timestamp: new Date().toLocaleString()
      },
      {
        id: 'BANK-' + Math.floor(100000 + Math.random() * 900000),
        type: 'Bank & NBFC Inquiry',
        name: 'Sunil Mehta (Vice President - Collections)',
        roleOrService: 'Vehicle Repossession, DAK Field Tracing & Yard Management',
        companyOrBank: 'Mahindra Finance - Zonal Office',
        email: 'mehta.sunil@mahindra.com',
        phone: '+91 94310 11223',
        city: 'Purnia & Darbhanga, Bihar',
        message: 'Looking for DRA-certified repo agents and yard securement for Tractor, Commercial & Passenger vehicle loans.',
        emailOptIn: 'Yes (Opted-in for updates)',
        timestamp: new Date().toLocaleString()
      },
      {
        id: 'APP-' + Math.floor(100000 + Math.random() * 900000),
        type: 'Job Application',
        name: 'Rahul Kumar Sharma',
        roleOrService: 'Tele-Calling Collection Executive (DAK & NPA Voice Desk)',
        email: 'rahul.sharma@example.com',
        phone: '+91 98351 23456',
        city: 'Patna, Bihar',
        draCertified: 'Yes (IIBF Certified)',
        experience: '2 Years in Bank DAK & NPA Tele-calling',
        timestamp: new Date().toLocaleString()
      },
      {
        id: 'APP-' + Math.floor(100000 + Math.random() * 900000),
        type: 'Job Application',
        name: 'Suresh Kumar Yadav',
        roleOrService: 'Field Recovery Officer (DAK Bucket & Hard NPA Field Recovery)',
        email: 'suresh.yadav@example.com',
        phone: '+91 94312 87654',
        city: 'Muzaffarpur, Bihar',
        draCertified: 'DRA Certified Officer',
        experience: '3 Years in All Loan Types Field Collection',
        timestamp: new Date().toLocaleString()
      }
    ];

    localStorage.setItem('mla_all_submissions', JSON.stringify(sampleSubmissions));
    setSubmissions(sampleSubmissions);
  };

  const filteredSubmissions = submissions.filter(item => {
    // 1. Tab category filter
    if (activeTab === 'bank') {
      const isBank = item.type === 'Bank & NBFC Inquiry' || (item.companyOrBank && item.companyOrBank.trim() !== '');
      if (!isBank) return false;
    } else if (activeTab === 'jobs') {
      if (item.type !== 'Job Application') return false;
    } else if (activeTab === 'inquiries') {
      if (item.type !== 'Client Inquiry' && item.type !== 'Consultation Request') return false;
    }

    // 2. Text Search Query
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase().trim();
      const match =
        item.name.toLowerCase().includes(q) ||
        item.email.toLowerCase().includes(q) ||
        item.phone.toLowerCase().includes(q) ||
        item.city.toLowerCase().includes(q) ||
        (item.companyOrBank && item.companyOrBank.toLowerCase().includes(q)) ||
        item.roleOrService.toLowerCase().includes(q) ||
        (item.message && item.message.toLowerCase().includes(q)) ||
        item.id.toLowerCase().includes(q);
      if (!match) return false;
    }

    // 3. District Filter
    if (selectedDistrict !== 'all') {
      if (!item.city.toLowerCase().includes(selectedDistrict.toLowerCase())) return false;
    }

    // 4. Service / Role Type Filter
    if (selectedServiceType !== 'all') {
      const roleLower = item.roleOrService.toLowerCase();
      const msgLower = (item.message || '').toLowerCase();

      if (selectedServiceType === 'DAK') {
        const isDakMatch =
          roleLower.includes('dak') ||
          roleLower.includes('bucket') ||
          roleLower.includes('sma') ||
          roleLower.includes('early') ||
          msgLower.includes('dak') ||
          msgLower.includes('bucket') ||
          msgLower.includes('sma');
        if (!isDakMatch) return false;
      } else if (selectedServiceType === 'NPA') {
        const isNpaMatch =
          roleLower.includes('npa') ||
          roleLower.includes('hard') ||
          roleLower.includes('write') ||
          msgLower.includes('npa') ||
          msgLower.includes('hard');
        if (!isNpaMatch) return false;
      } else if (selectedServiceType === 'All Loans') {
        const isLoanMatch =
          roleLower.includes('loan') ||
          roleLower.includes('recovery') ||
          roleLower.includes('collection') ||
          roleLower.includes('npa') ||
          roleLower.includes('dak') ||
          roleLower.includes('bucket') ||
          msgLower.includes('loan') ||
          msgLower.includes('recovery');
        if (!isLoanMatch) return false;
      } else {
        if (!roleLower.includes(selectedServiceType.toLowerCase())) return false;
      }
    }

    // 5. Date Range Filter
    if (dateRangeFilter !== 'all') {
      const itemDate = new Date(item.timestamp);
      const now = new Date();
      if (!isNaN(itemDate.getTime())) {
        const diffHours = (now.getTime() - itemDate.getTime()) / (1000 * 3600);
        if (dateRangeFilter === 'today' && diffHours > 24) return false;
        if (dateRangeFilter === 'week' && diffHours > 168) return false;
        if (dateRangeFilter === 'month' && diffHours > 720) return false;
      }
    }

    return true;
  });

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedDistrict('all');
    setSelectedServiceType('all');
    setDateRangeFilter('all');
  };

  const toggleExpand = (id: string) => {
    setExpandedIds(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleExpandAll = () => {
    const newMap: Record<string, boolean> = {};
    filteredSubmissions.forEach(item => {
      newMap[item.id] = true;
    });
    setExpandedIds(newMap);
  };

  const handleCollapseAll = () => {
    setExpandedIds({});
  };

  const handleCopyRecord = (item: StoredInquiry) => {
    const text = `MLA ASSOCIATE - RECORD SUMMARY
Ticket ID: ${item.id}
Type: ${item.type}
Contact / Applicant Name: ${item.name}
Bank / Institution: ${item.companyOrBank || 'N/A'}
Role / Requirement: ${item.roleOrService}
Location: ${item.city || 'N/A'}
Phone: ${item.phone || 'N/A'}
Email: ${item.email}
Email Notifications: ${item.emailOptIn || 'Yes (Opted-in)'}
DRA Certified: ${item.draCertified || 'N/A'}
Experience: ${item.experience || 'N/A'}
Message / Notes: ${item.message || 'None'}
Timestamp: ${item.timestamp}`;

    navigator.clipboard.writeText(text);
    setCopiedRecordId(item.id);
    setTimeout(() => setCopiedRecordId(null), 2000);
  };

  const hasActiveFilters =
    searchQuery.trim() !== '' ||
    selectedDistrict !== 'all' ||
    selectedServiceType !== 'all' ||
    dateRangeFilter !== 'all';

  const handleExportCSV = () => {
    if (filteredSubmissions.length === 0) {
      alert('No enquiries match the current filter criteria to export.');
      return;
    }

    const headers = ['ID', 'Type', 'Name', 'Role/Service', 'Email', 'Phone', 'City/District', 'Company/Bank', 'DRA Certified', 'Experience', 'Email Opt-In', 'Message', 'Date'];
    const rows = filteredSubmissions.map(s => [
      s.id,
      s.type,
      `"${s.name}"`,
      `"${s.roleOrService}"`,
      s.email,
      s.phone,
      `"${s.city}"`,
      `"${s.companyOrBank || ''}"`,
      `"${s.draCertified || ''}"`,
      `"${s.experience || ''}"`,
      `"${s.emailOptIn || 'Yes (Opted-in)'}"`,
      `"${(s.message || '').replace(/\n/g, ' ')}"`,
      `"${s.timestamp}"`
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    const filterTag = hasActiveFilters ? '_Filtered' : '';
    link.setAttribute('download', `MLA_ASSOCIATE_Enquiries${filterTag}_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/85 backdrop-blur-md animate-fadeIn">
      <div className="bg-[#0B192C] border-2 border-amber-500/50 rounded-3xl max-w-5xl w-full h-[90vh] max-h-[90vh] flex flex-col shadow-2xl overflow-hidden relative">
        
        {/* Passcode Security Gateway View if not authenticated */}
        {!isAuthenticated ? (
          <div className="p-8 sm:p-12 flex flex-col items-center justify-center text-center my-auto overflow-y-auto">
            <div className="p-4 bg-amber-500/20 border-2 border-amber-500/40 rounded-2xl text-amber-400 mb-4 shadow-lg animate-bounce">
              <Lock className="w-10 h-10" />
            </div>

            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-amber-500/10 text-amber-300 rounded-full text-xs font-bold border border-amber-500/20 mb-2">
              <KeyRound className="w-3.5 h-3.5" />
              <span>MLA ASSOCIATE INTERNAL ADMIN DESK</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-black text-white font-serif">
              Agency Admin Authentication
            </h2>

            <p className="text-xs sm:text-sm text-slate-300 max-w-md mt-2 leading-relaxed">
              This is a secure portal for agency managers and admins. Enter your 4-digit security PIN password to access Bank/NBFC enquiries and job applications.
            </p>

            <form onSubmit={handlePinSubmit} className="mt-6 w-full max-w-xs space-y-3">
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  maxLength={16}
                  value={pinInput}
                  onChange={(e) => {
                    setPinInput(e.target.value);
                    setPinError('');
                  }}
                  placeholder="Enter Password / PIN"
                  className="w-full bg-slate-950 border-2 border-amber-500/50 rounded-xl pl-4 pr-10 py-3 text-center text-lg font-mono text-amber-400 font-bold focus:outline-none focus:border-amber-400 shadow-inner"
                  autoFocus
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-amber-400/80 hover:text-amber-300 p-1 cursor-pointer"
                  title={showPassword ? "Hide Password" : "Show Password"}
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>

              {pinError && (
                <div className="flex items-center justify-center space-x-1.5 text-red-400 text-xs font-semibold bg-red-950/80 p-2 rounded-lg border border-red-800">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{pinError}</span>
                </div>
              )}

              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-sm rounded-xl shadow-xl transition-all flex items-center justify-center space-x-2 cursor-pointer"
              >
                <Lock className="w-4 h-4" />
                <span>Unlock Portal</span>
              </button>

              <div className="pt-2 text-[11px] text-amber-400/80 font-mono">
                [ {localStorage.getItem('mla_admin_password') ? 'Custom Password active' : 'Default PIN: 1234'} ]
              </div>
            </form>

            <button
              onClick={onClose}
              className="mt-6 text-xs text-slate-400 hover:text-white transition-colors underline cursor-pointer"
            >
              Cancel & Return to Website
            </button>
          </div>
        ) : (
          <>
            {/* Compact Streamlined Authenticated Admin Header */}
            <div className="p-3 sm:p-4 bg-slate-900 border-b border-slate-800 flex flex-wrap items-center justify-between gap-2 shrink-0">
              <div className="flex items-center space-x-2.5">
                <div className="p-2 bg-amber-500/20 text-amber-400 rounded-xl border border-amber-500/30 shrink-0">
                  <Inbox className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <h2 className="text-base sm:text-lg font-black text-white font-serif">
                      Admin Portal & Enquiry Desk
                    </h2>
                    <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center space-x-1">
                      <Lock className="w-2.5 h-2.5" />
                      <span>SECURED ADMIN</span>
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-300">
                    DAK & All Loan Collection Desk (Personal, Auto, Tractor, CV, Home, MFI, Gold) | Sync Email: <strong className="text-amber-400 font-mono">mlaassociate002@gmail.com</strong>
                  </p>
                </div>
              </div>

              {/* Action Control Buttons */}
              <div className="flex flex-wrap items-center gap-2">
                <button
                  onClick={handleRefresh}
                  className="px-2.5 py-1.5 bg-slate-800 hover:bg-slate-700 text-amber-300 rounded-lg border border-slate-700 text-xs font-bold transition-all flex items-center space-x-1 cursor-pointer"
                  title="Reload Enquiries"
                >
                  <RefreshCw className={`w-3.5 h-3.5 text-amber-400 ${isRefreshing ? 'animate-spin' : ''}`} />
                  <span>Refresh</span>
                </button>

                <button
                  onClick={handleExportCSV}
                  className="px-2.5 py-1.5 bg-emerald-600/90 hover:bg-emerald-500 text-white rounded-lg text-xs font-bold transition-all flex items-center space-x-1 cursor-pointer shadow"
                  title="Download CSV report"
                >
                  <FileSpreadsheet className="w-3.5 h-3.5" />
                  <span>Export CSV</span>
                </button>

                {submissions.length > 0 && (
                  <button
                    onClick={handleClearAll}
                    className="px-2.5 py-1.5 bg-rose-500/20 hover:bg-rose-500/30 text-rose-300 rounded-lg border border-rose-500/40 text-xs font-bold transition-all flex items-center space-x-1 cursor-pointer"
                    title="Delete All Enquiry Records"
                  >
                    <Trash2 className="w-3.5 h-3.5 text-rose-400" />
                    <span>Delete All</span>
                  </button>
                )}

                <button
                  onClick={() => setIsChangingPass(!isChangingPass)}
                  className="px-2.5 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 rounded-lg border border-amber-500/30 text-xs font-bold transition-colors flex items-center space-x-1 cursor-pointer"
                  title="Change Admin Password"
                >
                  <Key className="w-3.5 h-3.5 text-amber-400" />
                  <span className="hidden sm:inline">Change Pass</span>
                </button>

                <button
                  onClick={handleLogout}
                  className="px-2.5 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded-lg border border-slate-700 text-xs font-bold transition-colors flex items-center space-x-1 cursor-pointer"
                  title="Lock Admin Portal"
                >
                  <LogOut className="w-3.5 h-3.5 text-amber-400" />
                  <span className="hidden sm:inline">Lock</span>
                </button>

                <button
                  onClick={onClose}
                  className="p-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded-full transition-colors cursor-pointer ml-1"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Change Password Form Drawer */}
            {isChangingPass && (
              <form onSubmit={handleChangePassword} className="bg-amber-950/60 p-3 border-b border-amber-500/40 flex flex-col sm:flex-row items-center justify-between gap-2 animate-fadeIn shrink-0">
                <div className="flex items-center space-x-2">
                  <KeyRound className="w-4 h-4 text-amber-400 shrink-0" />
                  <div>
                    <span className="text-xs font-bold text-white block">Change Admin Password</span>
                    <span className="text-[10px] text-amber-300">Enter a new password (min 4 characters).</span>
                  </div>
                </div>

                <div className="flex items-center space-x-2 w-full sm:w-auto">
                  <input
                    type="password"
                    value={newPass}
                    onChange={(e) => setNewPass(e.target.value)}
                    placeholder="New Password"
                    className="bg-slate-950 border border-amber-500/50 rounded-lg px-3 py-1 text-xs text-amber-300 focus:outline-none focus:border-amber-400 w-full sm:w-48"
                  />
                  <button
                    type="submit"
                    className="px-3 py-1 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs rounded-lg transition-colors shrink-0 cursor-pointer"
                  >
                    Save Password
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsChangingPass(false)}
                    className="p-1 text-slate-400 hover:text-white cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {passSuccessMsg && (
                  <span className="text-xs font-bold text-emerald-400 w-full text-center sm:w-auto">{passSuccessMsg}</span>
                )}
              </form>
            )}

            {/* Category Tabs Bar */}
            <div className="px-3 py-2 bg-slate-950/90 border-b border-slate-800 flex flex-wrap items-center justify-between gap-2 shrink-0">
              <div className="flex items-center space-x-1.5 overflow-x-auto pb-1 sm:pb-0">
                <button
                  onClick={() => setActiveTab('all')}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                    activeTab === 'all'
                      ? 'bg-amber-500 text-slate-950 shadow'
                      : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  All ({submissions.length})
                </button>

                <button
                  onClick={() => setActiveTab('bank')}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition-all whitespace-nowrap flex items-center space-x-1 cursor-pointer ${
                    activeTab === 'bank'
                      ? 'bg-amber-500 text-slate-950 shadow'
                      : 'bg-slate-800/80 text-amber-400 hover:bg-slate-700'
                  }`}
                >
                  <Building2 className="w-3.5 h-3.5" />
                  <span>Bank & NBFC ({submissions.filter(s => s.type === 'Bank & NBFC Inquiry' || (s.companyOrBank && s.companyOrBank.trim() !== '')).length})</span>
                </button>

                <button
                  onClick={() => setActiveTab('jobs')}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                    activeTab === 'jobs'
                      ? 'bg-amber-500 text-slate-950 shadow'
                      : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  Job Apps ({submissions.filter(s => s.type === 'Job Application').length})
                </button>

                <button
                  onClick={() => setActiveTab('inquiries')}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                    activeTab === 'inquiries'
                      ? 'bg-amber-500 text-slate-950 shadow'
                      : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  Client Inquiries ({submissions.filter(s => s.type === 'Client Inquiry' || s.type === 'Consultation Request').length})
                </button>
              </div>

              {/* Expand / Collapse All */}
              {filteredSubmissions.length > 0 && (
                <div className="flex items-center space-x-1.5 bg-slate-900 px-2 py-0.5 rounded-lg border border-slate-800 text-[11px]">
                  <button
                    onClick={handleExpandAll}
                    className="px-1.5 py-0.5 hover:bg-slate-800 text-amber-400 font-bold rounded flex items-center space-x-1 cursor-pointer"
                    title="Expand details for all visible enquiries"
                  >
                    <Maximize2 className="w-3 h-3 text-amber-400" />
                    <span>Expand All</span>
                  </button>
                  <span className="text-slate-700">|</span>
                  <button
                    onClick={handleCollapseAll}
                    className="px-1.5 py-0.5 hover:bg-slate-800 text-slate-300 hover:text-white font-bold rounded flex items-center space-x-1 cursor-pointer"
                    title="Collapse details for all enquiries"
                  >
                    <Minimize2 className="w-3 h-3 text-slate-400" />
                    <span>Collapse All</span>
                  </button>
                </div>
              )}
            </div>

            {/* Search & Filter Bar */}
            <div className="px-3 py-2 bg-slate-900/80 border-b border-slate-800 flex flex-wrap items-center gap-2 text-xs shrink-0">
              {/* Search Bar */}
              <div className="relative flex-1 min-w-[180px]">
                <Search className="w-3.5 h-3.5 text-amber-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search name, phone, email, bank..."
                  className="w-full bg-slate-950 border border-slate-700/80 rounded-lg pl-8 pr-7 py-1 text-xs text-amber-200 placeholder-slate-400 focus:outline-none focus:border-amber-400"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white cursor-pointer"
                  >
                    <XCircle className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {/* District Filter */}
              <select
                value={selectedDistrict}
                onChange={(e) => setSelectedDistrict(e.target.value)}
                className="bg-slate-950 border border-slate-700/80 rounded-lg px-2.5 py-1 text-xs text-slate-200 focus:outline-none focus:border-amber-400"
              >
                <option value="all">📍 All Districts</option>
                <option value="Patna">Patna</option>
                <option value="Muzaffarpur">Muzaffarpur</option>
                <option value="Gaya">Gaya</option>
                <option value="Bhagalpur">Bhagalpur</option>
                <option value="Purnia">Purnia</option>
                <option value="Darbhanga">Darbhanga</option>
                <option value="Begusarai">Begusarai</option>
                <option value="Bhojpur">Bhojpur / Ara</option>
                <option value="Rohtas">Rohtas / Sasaram</option>
                <option value="Bihar">Other Bihar Districts</option>
              </select>

              {/* Service/Role Filter */}
              <select
                value={selectedServiceType}
                onChange={(e) => setSelectedServiceType(e.target.value)}
                className="bg-slate-950 border border-slate-700/80 rounded-lg px-2.5 py-1 text-xs text-slate-200 focus:outline-none focus:border-amber-400"
              >
                <option value="all">💼 All Roles & Buckets</option>
                <option value="DAK">DAK & Early Buckets (Bucket 1, 2, 3 / SMA)</option>
                <option value="NPA">NPA & Hard Recovery (NPA / Write-Off)</option>
                <option value="All Loans">All Loans Collection (Auto, Personal, Tractor, CV, Home, MFI, Gold)</option>
                <option value="Tele-Calling">Tele-Calling Desk</option>
                <option value="Field">Field Recovery Officer</option>
                <option value="Vehicle">Vehicle Repossession</option>
                <option value="Legal">Legal & Notice</option>
                <option value="Yard">Yard Securement</option>
              </select>

              {/* Date Filter */}
              <select
                value={dateRangeFilter}
                onChange={(e) => setDateRangeFilter(e.target.value)}
                className="bg-slate-950 border border-slate-700/80 rounded-lg px-2.5 py-1 text-xs text-slate-200 focus:outline-none focus:border-amber-400"
              >
                <option value="all">📅 All Dates</option>
                <option value="today">Today</option>
                <option value="week">This Week</option>
                <option value="month">This Month</option>
              </select>

              {hasActiveFilters && (
                <button
                  onClick={handleResetFilters}
                  className="p-1 bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 rounded-lg transition-colors cursor-pointer"
                  title="Reset Search & Filters"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              )}

              {refreshMsg && (
                <span className="px-2 py-0.5 bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 font-bold rounded text-[11px] flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                  <span>Refreshed!</span>
                </span>
              )}
            </div>

            {/* Content Body (Scrollable Container) */}
            <div className="p-4 sm:p-6 overflow-y-auto flex-1 min-h-0 space-y-4">
              {filteredSubmissions.length === 0 ? (
                <div className="text-center py-12 px-4 bg-slate-900/50 rounded-2xl border border-slate-800/80">
                  <Inbox className="w-12 h-12 text-slate-600 mx-auto mb-3" />
                  <h3 className="text-lg font-bold text-slate-200">
                    {hasActiveFilters ? 'No Records Match Your Filters' : 'No Records Found in this Category'}
                  </h3>
                  <p className="text-xs text-slate-400 max-w-md mx-auto mt-1 leading-relaxed">
                    {hasActiveFilters
                      ? 'No records match your current search or filter criteria. Please reset your filters.'
                      : 'When Bank/NBFC officials or job candidates submit forms, their data will appear here and deliver to mlaassociate002@gmail.com.'}
                  </p>

                  {hasActiveFilters ? (
                    <button
                      onClick={handleResetFilters}
                      className="mt-5 px-4 py-2.5 bg-amber-500 text-slate-950 text-xs font-black rounded-xl transition-all shadow"
                    >
                      Reset All Search & Filters
                    </button>
                  ) : (
                    <button
                      onClick={handleAddSampleData}
                      className="mt-5 px-4 py-2.5 bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 text-xs font-extrabold rounded-xl transition-all"
                    >
                      + Add Sample Bank & Job Records
                    </button>
                  )}
                </div>
              ) : (
                <div className="grid grid-cols-1 gap-4">
                  {filteredSubmissions.map((item) => {
                    const isExpanded = !!expandedIds[item.id];

                    return (
                      <div
                        key={item.id}
                        className={`bg-slate-900/90 border transition-all shadow-md rounded-2xl p-4 sm:p-5 ${
                          isExpanded ? 'border-amber-500/60 ring-1 ring-amber-500/30' : 'border-slate-800 hover:border-amber-500/40'
                        }`}
                      >
                        {/* Row Header */}
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-800/80 pb-3 mb-3 gap-2">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className={`text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full border ${
                              item.type === 'Bank & NBFC Inquiry' || item.companyOrBank
                                ? 'bg-blue-500/20 text-blue-300 border-blue-500/30'
                                : item.type === 'Job Application' 
                                ? 'bg-amber-500/20 text-amber-400 border-amber-500/30' 
                                : 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30'
                            }`}>
                              {item.type}
                            </span>
                            <span className="text-xs font-mono font-bold text-amber-400/90 bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
                              {item.id}
                            </span>
                          </div>

                          <div className="flex items-center space-x-2 sm:space-x-3 justify-between sm:justify-end">
                            <div className="flex items-center space-x-1 text-[11px] text-slate-400">
                              <Calendar className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                              <span>{item.timestamp}</span>
                            </div>

                            {/* Delete Single Record Button */}
                            <button
                              onClick={(e) => handleDeleteSingle(item.id, e)}
                              className="px-2.5 py-1 bg-rose-500/10 hover:bg-rose-500/20 text-rose-300 hover:text-rose-100 border border-rose-500/30 rounded-lg text-xs font-bold transition-all flex items-center space-x-1 cursor-pointer"
                              title="Delete this enquiry record"
                            >
                              <Trash2 className="w-3.5 h-3.5 text-rose-400" />
                              <span className="hidden xs:inline">Delete</span>
                            </button>

                            {/* Expand / Collapse Button */}
                            <button
                              onClick={() => toggleExpand(item.id)}
                              className={`px-3 py-1 rounded-lg text-xs font-bold transition-all flex items-center space-x-1.5 border cursor-pointer ${
                                isExpanded
                                  ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-md ring-2 ring-amber-500/20'
                                  : 'bg-slate-800 hover:bg-slate-700 text-amber-300 border-slate-700 hover:border-amber-500/50'
                              }`}
                            >
                              <span>{isExpanded ? 'Collapse' : 'Expand'}</span>
                              {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                            </button>
                          </div>
                        </div>

                        {/* Primary Summary Grid (Always Visible) */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
                          <div>
                            <span className="text-slate-400 block text-[10px] font-semibold">Contact / Applicant:</span>
                            <span className="font-bold text-white text-sm flex items-center mt-0.5">
                              <User className="w-3.5 h-3.5 text-amber-400 mr-1 shrink-0" />
                              {item.name}
                            </span>
                          </div>

                          <div>
                            <span className="text-slate-400 block text-[10px] font-semibold">
                              {item.companyOrBank ? 'Bank / NBFC Institution:' : 'Requirement / Role:'}
                            </span>
                            <span className="font-bold text-amber-400 flex items-center mt-0.5">
                              {item.companyOrBank ? (
                                <>
                                  <Building2 className="w-3.5 h-3.5 text-amber-400 mr-1 shrink-0" />
                                  {item.companyOrBank}
                                </>
                              ) : (
                                <>
                                  <Briefcase className="w-3.5 h-3.5 text-amber-400 mr-1 shrink-0" />
                                  {item.roleOrService}
                                </>
                              )}
                            </span>
                          </div>

                          <div>
                            <span className="text-slate-400 block text-[10px] font-semibold">District / Location:</span>
                            <span className="font-semibold text-slate-200 flex items-center mt-0.5">
                              <MapPin className="w-3.5 h-3.5 text-amber-400 mr-1 shrink-0" />
                              {item.city || 'Bihar (Regional)'}
                            </span>
                          </div>

                          <div>
                            <span className="text-slate-400 block text-[10px] font-semibold">Phone Contact:</span>
                            <a href={`tel:${item.phone}`} className="font-bold text-blue-400 hover:underline flex items-center mt-0.5">
                              <Phone className="w-3.5 h-3.5 text-blue-400 mr-1 shrink-0" />
                              {item.phone || 'N/A'}
                            </a>
                          </div>
                        </div>

                        {/* Collapsed Note Snippet Preview */}
                        {!isExpanded && item.message && (
                          <div className="mt-3 pt-2 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-400">
                            <span className="truncate italic max-w-xl text-[11px] text-slate-300">
                              Note: "{item.message}"
                            </span>
                            <button
                              onClick={() => toggleExpand(item.id)}
                              className="text-[11px] text-amber-400 hover:underline font-semibold ml-2 shrink-0 flex items-center gap-1 cursor-pointer"
                            >
                              <span>View Full Notes & Metadata</span>
                              <ChevronDown className="w-3 h-3" />
                            </button>
                          </div>
                        )}

                        {/* EXPANDED NESTED METADATA & NOTES PANEL */}
                        {isExpanded && (
                          <div className="mt-4 pt-3.5 border-t border-slate-800/80 bg-slate-950/90 rounded-xl p-4 space-y-3.5 border border-amber-500/25 shadow-xl transition-all">
                            {/* Panel Header */}
                            <div className="flex flex-wrap items-center justify-between border-b border-slate-800 pb-2.5 gap-2">
                              <div className="flex items-center space-x-2 text-xs font-bold text-amber-400">
                                <FileText className="w-4 h-4 text-amber-400" />
                                <span>Expanded Metadata & Enquiry Notes</span>
                              </div>

                              <button
                                onClick={() => handleCopyRecord(item)}
                                className="px-2.5 py-1 bg-slate-900 hover:bg-slate-800 text-amber-300 border border-amber-500/30 rounded-lg text-[11px] font-bold flex items-center space-x-1.5 transition-all cursor-pointer"
                              >
                                {copiedRecordId === item.id ? (
                                  <>
                                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                                    <span className="text-emerald-400">Copied Record!</span>
                                  </>
                                ) : (
                                  <>
                                    <Copy className="w-3.5 h-3.5 text-amber-400" />
                                    <span>Copy Full Record</span>
                                  </>
                                )}
                              </button>
                            </div>

                            {/* Detailed Metadata Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 text-xs">
                              <div className="bg-slate-900/90 p-2.5 rounded-lg border border-slate-800">
                                <span className="text-slate-400 block text-[10px] font-semibold">Contact / Applicant Name</span>
                                <span className="font-bold text-white text-sm flex items-center mt-0.5">
                                  <User className="w-3.5 h-3.5 text-amber-400 mr-1.5 shrink-0" />
                                  {item.name}
                                </span>
                              </div>

                              {item.companyOrBank && (
                                <div className="bg-slate-900/90 p-2.5 rounded-lg border border-slate-800">
                                  <span className="text-slate-400 block text-[10px] font-semibold">Bank / NBFC Institution</span>
                                  <span className="font-black text-amber-400 flex items-center mt-0.5">
                                    <Building2 className="w-3.5 h-3.5 text-amber-400 mr-1.5 shrink-0" />
                                    {item.companyOrBank}
                                  </span>
                                </div>
                              )}

                              <div className="bg-slate-900/90 p-2.5 rounded-lg border border-slate-800">
                                <span className="text-slate-400 block text-[10px] font-semibold">Requirement / Role</span>
                                <span className="font-bold text-amber-300 flex items-center mt-0.5">
                                  <Briefcase className="w-3.5 h-3.5 text-amber-400 mr-1.5 shrink-0" />
                                  {item.roleOrService}
                                </span>
                              </div>

                              <div className="bg-slate-900/90 p-2.5 rounded-lg border border-slate-800">
                                <span className="text-slate-400 block text-[10px] font-semibold">Location / District</span>
                                <span className="font-semibold text-slate-200 flex items-center mt-0.5">
                                  <MapPin className="w-3.5 h-3.5 text-amber-400 mr-1.5 shrink-0" />
                                  {item.city || 'Bihar (Regional Office)'}
                                </span>
                              </div>

                              <div className="bg-slate-900/90 p-2.5 rounded-lg border border-slate-800">
                                <span className="text-slate-400 block text-[10px] font-semibold">Phone Contact Number</span>
                                <a href={`tel:${item.phone}`} className="font-bold text-blue-400 hover:underline flex items-center mt-0.5">
                                  <Phone className="w-3.5 h-3.5 text-blue-400 mr-1.5 shrink-0" />
                                  {item.phone || 'N/A'}
                                </a>
                              </div>

                              <div className="bg-slate-900/90 p-2.5 rounded-lg border border-slate-800">
                                <span className="text-slate-400 block text-[10px] font-semibold">Email Address</span>
                                <a href={`mailto:${item.email}`} className="font-bold text-amber-400 hover:underline flex items-center mt-0.5">
                                  <Mail className="w-3.5 h-3.5 text-amber-400 mr-1.5 shrink-0" />
                                  {item.email}
                                </a>
                              </div>

                              <div className="bg-slate-900/90 p-2.5 rounded-lg border border-slate-800">
                                <span className="text-slate-400 block text-[10px] font-semibold">Email Notification Status</span>
                                <span className="font-bold text-emerald-400 flex items-center mt-0.5">
                                  <Bell className="w-3.5 h-3.5 text-emerald-400 mr-1.5 shrink-0" />
                                  {item.emailOptIn || 'Yes (Opted-in for updates)'}
                                </span>
                              </div>

                              {item.draCertified && (
                                <div className="bg-slate-900/90 p-2.5 rounded-lg border border-slate-800">
                                  <span className="text-slate-400 block text-[10px] font-semibold">DRA Certified (IIBF)</span>
                                  <span className="font-bold text-emerald-400 block mt-0.5">{item.draCertified}</span>
                                </div>
                              )}

                              {item.experience && (
                                <div className="bg-slate-900/90 p-2.5 rounded-lg border border-slate-800">
                                  <span className="text-slate-400 block text-[10px] font-semibold">Recovery Experience</span>
                                  <span className="font-semibold text-slate-200 block mt-0.5">{item.experience}</span>
                                </div>
                              )}

                              <div className="bg-slate-900/90 p-2.5 rounded-lg border border-slate-800">
                                <span className="text-slate-400 block text-[10px] font-semibold">Reference Ticket ID</span>
                                <span className="font-mono text-amber-400 font-bold block mt-0.5">{item.id}</span>
                              </div>

                              <div className="bg-slate-900/90 p-2.5 rounded-lg border border-slate-800">
                                <span className="text-slate-400 block text-[10px] font-semibold">Delivery Target Email</span>
                                <span className="font-mono text-slate-300 font-semibold block mt-0.5">mlaassociate002@gmail.com</span>
                              </div>

                              <div className="bg-slate-900/90 p-2.5 rounded-lg border border-slate-800">
                                <span className="text-slate-400 block text-[10px] font-semibold">Submission Date & Time</span>
                                <span className="font-semibold text-slate-200 block mt-0.5">{item.timestamp}</span>
                              </div>
                            </div>

                            {/* Associated Notes / Message Box */}
                            {item.message ? (
                              <div className="bg-slate-900/90 p-3 rounded-xl border border-slate-800">
                                <div className="flex items-center justify-between mb-1">
                                  <span className="text-slate-400 text-[11px] font-bold uppercase tracking-wider block">Associated Notes / Detailed Inquiry Message:</span>
                                  <button
                                    onClick={() => {
                                      navigator.clipboard.writeText(item.message || '');
                                      setCopiedRecordId(`${item.id}-msg`);
                                      setTimeout(() => setCopiedRecordId(null), 2000);
                                    }}
                                    className="text-[10px] text-amber-400 hover:underline flex items-center gap-1 font-semibold cursor-pointer"
                                  >
                                    {copiedRecordId === `${item.id}-msg` ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                                    <span>{copiedRecordId === `${item.id}-msg` ? 'Copied Note!' : 'Copy Note'}</span>
                                  </button>
                                </div>
                                <p className="text-slate-200 text-xs italic leading-relaxed bg-slate-950 p-3 rounded-lg border border-slate-800/80 whitespace-pre-wrap">
                                  "{item.message}"
                                </p>
                              </div>
                            ) : (
                              <div className="bg-slate-900/60 p-2.5 rounded-xl border border-slate-800 text-slate-500 text-xs italic">
                                No custom notes or additional message body provided for this enquiry.
                              </div>
                            )}

                            {/* Quick Action Buttons */}
                            <div className="flex flex-wrap items-center justify-end gap-2 pt-2 border-t border-slate-800/80">
                              <button
                                onClick={(e) => handleDeleteSingle(item.id, e)}
                                className="px-3 py-1.5 bg-rose-600/90 hover:bg-rose-500 text-white font-bold text-xs rounded-lg flex items-center space-x-1.5 shadow cursor-pointer transition-colors"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                                <span>Delete Record</span>
                              </button>

                              <a
                                href={`tel:${item.phone}`}
                                className="px-3 py-1.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded-lg flex items-center space-x-1.5 shadow"
                              >
                                <Phone className="w-3.5 h-3.5" />
                                <span>Call ({item.phone || 'N/A'})</span>
                              </a>

                              <a
                                href={`mailto:${item.email}?subject=MLA%20ASSOCIATE%20-%20Update%20on%20Enquiry%20${item.id}`}
                                className="px-3 py-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-lg flex items-center space-x-1.5 shadow"
                              >
                                <Mail className="w-3.5 h-3.5" />
                                <span>Email Applicant</span>
                              </a>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="p-4 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400 shrink-0">
              <div className="flex items-center space-x-2">
                <ShieldAlert className="w-4 h-4 text-amber-400" />
                <span>Submissions automatically sync to <strong>mlaassociate002@gmail.com</strong></span>
              </div>

              <button
                onClick={onClose}
                className="px-5 py-2 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl transition-colors cursor-pointer"
              >
                Close Admin Viewer
              </button>
            </div>
          </>
        )}

      </div>
    </div>
  );
};
