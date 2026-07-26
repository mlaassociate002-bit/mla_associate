import { Service, Industry, WhyChooseUsItem, ProcessStep, Testimonial, JobPosition, FAQItem, BranchOffice } from '../types';

export const SERVICES_DATA: Service[] = [
  {
    id: 'vehicle-loan-collection',
    title: 'Vehicle Loan Collection',
    iconName: 'Car',
    category: 'collection',
    shortDescription: 'Specialized collection solutions for delinquent two-wheeler, passenger car, commercial vehicle, and construction equipment loans.',
    fullDescription: 'MLA ASSOCIATE delivers specialized vehicle loan collection services across all delinquency buckets (1 to 180+ DPD). Our trained and DRA-certified recovery agents employ polite, persistent, and strictly compliant communication protocols to re-engage delinquent borrowers, collect overdue EMIs, and prevent vehicle accounts from sliding into NPA.',
    keyFeatures: [
      'Early-stage delinquency management (1-30 DPD)',
      'Mid-to-late stage hard recovery (30-180+ DPD)',
      'Two-wheeler, passenger car & heavy vehicle expertise',
      'Multi-channel contact (SMS, WhatsApp, IVR, Call Center)',
      'Doorstep EMI payment collection with instant digital receipt'
    ],
    benefits: [
      'Reduces vehicle loan NPA ratios significantly',
      'Protects lender brand reputation with ethical standards',
      'Accelerates cash flow recovery cycles'
    ]
  },
  {
    id: 'emi-collection',
    title: 'EMI Collection',
    iconName: 'CreditCard',
    category: 'collection',
    shortDescription: 'Doorstep and digital EMI collection services with instant electronic receipts and live payment status sync.',
    fullDescription: 'Efficient EMI collection mechanism facilitating seamless payment recovery at borrower doorsteps or via encrypted digital payment links. Our agents carry POS terminals and mobile collection apps to provide instant SMS/WhatsApp payment receipts to borrowers.',
    keyFeatures: [
      'Doorstep cash, UPI, and cheque payment collection',
      'Instant digital payment link dispatch (UPI, Net Banking, Cards)',
      'Real-time transaction logging to client MIS',
      'Automated SMS & WhatsApp digital receipt generation',
      'Multi-language customer interactions'
    ],
    benefits: [
      'Improves first-time EMI roll-forward rates',
      'Provides instant proof of collection to borrower & lender',
      'Eliminates payment reconciliation delays'
    ]
  },
  {
    id: 'vehicle-repossession',
    title: 'Vehicle Repossession',
    iconName: 'Truck',
    category: 'repossession',
    shortDescription: 'Lawful, safe, and swift repossession of two-wheelers, cars, commercial vehicles, tractors, and heavy equipment.',
    fullDescription: 'Our specialized repossession division operates with strict adherence to judicial precedents, police station intimations, and pre-repossession protocols. We manage end-to-end asset securement, inventory yard management, video documentation, and post-repossession legal notices.',
    keyFeatures: [
      'Pre-repossession police station intimations & acknowledgements',
      'Video-documented vehicle condition & inventory check-sheets',
      '24/7 CCTV guarded yard storage & security handling',
      'Towing, crane support & heavy vehicle recovery specialists',
      'Post-repossession notice dispatch support'
    ],
    benefits: [
      '100% legal compliance & RBI code adherence',
      'Minimal damage risk during asset transport',
      'Rapid liquidation prep for repossessed assets'
    ]
  },
  {
    id: 'skip-tracing',
    title: 'Skip Tracing',
    iconName: 'Search',
    category: 'collection',
    shortDescription: 'Advanced address and contact tracing techniques to locate untraceable or absconding delinquent borrowers.',
    fullDescription: 'When delinquent borrowers change addresses or contact details, our specialized skip tracing intelligence team utilizes compliant OSINT, ground field intelligence, employer verification, public records cross-matching, and local network mapping to re-locate the customer.',
    keyFeatures: [
      'Ground field investigation & neighbor verification',
      'Digital footprint & alternate contact discovery',
      'Employer and business address validation',
      'PAN India field operative network',
      'Verified location mapping & geo-tagging'
    ],
    benefits: [
      'High conversion rate for write-off cases',
      'Saves wasted legal notice costs',
      'Re-establishes communication channels'
    ]
  },
  {
    id: 'field-verification',
    title: 'Field Verification',
    iconName: 'MapPin',
    category: 'management',
    shortDescription: 'On-ground physical verification of residential, commercial, and collateral property addresses with photo evidence.',
    fullDescription: 'Pre-loan and post-default physical field verification services ensuring authentic borrower profiling. Our field officers conduct doorstep checks, asset audits, and document verification with real-time geo-tagged photographic evidence.',
    keyFeatures: [
      'Residential & office physical verification',
      'Collateral asset inspection & condition check',
      'Neighbourhood & trade reference check',
      'Mobile app geo-tagged photo evidence',
      '24-48 hour Turnaround Time (TAT)'
    ],
    benefits: [
      'Mitigates loan origination fraud',
      'Provides accurate field status for credit teams',
      'Supports underwriting accuracy'
    ]
  },
  {
    id: 'address-verification',
    title: 'Address Verification',
    iconName: 'Home',
    category: 'management',
    shortDescription: 'In-depth home, permanent address, and business location checks to validate customer identity and physical presence.',
    fullDescription: 'Thorough address verification for credit approval, high-risk borrower monitoring, and default prevention. Our agents physically visit the location, verify residence proof, check occupancy tenure, and capture timestamped GPS coordinates.',
    keyFeatures: [
      'Doorstep physical visit & landmark mapping',
      'Utility bill & residence proof verification',
      'Neighbor & local shopkeeper inquiry',
      'GPS location tagging & timestamped photos',
      'Digital verification report dispatch'
    ],
    benefits: [
      'Prevents ghost address fraud',
      'Ensures legal notice deliverability',
      'Enhances borrower master data quality'
    ]
  },
  {
    id: 'collection-calling',
    title: 'Collection Calling',
    iconName: 'PhoneCall',
    category: 'collection',
    shortDescription: 'Courteous, compliant outbound call center tele-calling delivering structured payment reminders and EMI assistance.',
    fullDescription: 'Compliant tele-collections team operating from centralized call centers. Callers deliver gentle payment reminders, resolve EMI query bottlenecks, offer convenient digital payment options, and record reason-for-non-payment (RNP) notes.',
    keyFeatures: [
      'Pre-due date EMI reminder campaigns',
      'Multilingual call center support across 10+ Indian languages',
      'Compliant calling windows (08:00 AM to 07:00 PM)',
      '100% call recording & audit trail logging',
      'Customer grievance resolution & payment scheduling'
    ],
    benefits: [
      'Improves early-stage bucket resolution',
      'Maintains positive customer relationship',
      'Filters cases requiring physical field visits'
    ]
  },
  {
    id: 'legal-recovery-support',
    title: 'Legal Recovery Support',
    iconName: 'FileText',
    category: 'legal',
    shortDescription: 'Liaison with legal counsels for Section 138 (Cheque Bounce), SARFAESI, and arbitration notice service.',
    fullDescription: 'Bridging the gap between field recovery and legal proceedings. We support legal notice service verification, Lok Adalat coordination, SARFAESI physical possession assistance, and court summons delivery tracking.',
    keyFeatures: [
      'Legal notice delivery & acknowledgement tracking',
      'SARFAESI physical possession assistance',
      'Lok Adalat case mobilization & attendance',
      'Section 138 (Cheque Bounce) follow-ups',
      'Conciliation & compromise decree drafting'
    ],
    benefits: [
      'Speeds up judicial resolution timelines',
      'Improves legal notice conversion rates',
      'Strict documentation trail maintenance'
    ]
  },
  {
    id: 'settlement-coordination',
    title: 'Settlement Coordination',
    iconName: 'Handshake',
    category: 'legal',
    shortDescription: 'Structured negotiation and execution of One-Time Settlement (OTS) and loan restructuring agreements.',
    fullDescription: 'Expert negotiation to resolve aged NPAs and write-off accounts through structured One-Time Settlement (OTS). We assess borrower financial capability, negotiate within lender approval matrices, and coordinate formal NOC generation.',
    keyFeatures: [
      'Borrower financial capacity & cash flow evaluation',
      'Lender-approved OTS proposal drafting',
      'Escrow payment handling & clearance verification',
      'No Objection Certificate (NOC) facilitation',
      'Formal settlement documentation'
    ],
    benefits: [
      'Recovers value from non-performing assets',
      'Avoids prolonged litigation costs',
      'Secures mutually agreed loan closure'
    ]
  },
  {
    id: 'customer-visit-tracking',
    title: 'Customer Visit Tracking',
    iconName: 'Navigation',
    category: 'management',
    shortDescription: 'Real-time GPS tracking and live visit logging of field executives during borrower doorstep interactions.',
    fullDescription: 'Complete transparency into field operations using our proprietary mobile app. Lenders can track agent routes, visit check-ins, borrower interaction audio logs, visit photos, and outcome updates in real-time.',
    keyFeatures: [
      'Live GPS map view of field executive movements',
      'Geo-fenced visit check-in & check-out logs',
      'Timestamped visit photo uploads',
      'Real-time visit outcome category selection',
      'Instant sync with central lender portal'
    ],
    benefits: [
      'Eliminates fake visit reporting',
      'Ensures 100% field SLA adherence',
      'Provides auditable proof for compliance'
    ]
  },
  {
    id: 'digital-documentation',
    title: 'Digital Documentation',
    iconName: 'ShieldCheck',
    category: 'management',
    shortDescription: 'Secure cloud archiving, digital receipting, vehicle yard check-sheets, and electronic NOC dispatches.',
    fullDescription: 'Paperless digital documentation platform streamlining recovery records. Includes e-receipt generation, digital inventory forms for repossessed assets, encrypted borrower files, and automated report generation.',
    keyFeatures: [
      'Electronic payment receipts with digital signatures',
      'Repossession inventory check-sheet digitisation',
      'Encrypted cloud storage with ISO 27001 standards',
      'Automated daily/weekly MIS export in PDF & Excel',
      'Instant NOC & settlement letter dispatches'
    ],
    benefits: [
      'Fast searchability & zero document loss',
      'Instant audit readiness for bank inspection',
      'Reduces administrative turnaround times'
    ]
  },
  {
    id: 'recovery-analytics',
    title: 'Recovery Analytics',
    iconName: 'TrendingUp',
    category: 'management',
    shortDescription: 'Data-driven insights, roll-rate analysis, field tracking, and real-time MIS reporting dashboards.',
    fullDescription: 'Empowering lender risk teams with actionable recovery intelligence. Our proprietary reporting engine generates real-time daily activity logs, field visit heatmaps, roll-rate predictions, and recovery trend dashboards.',
    keyFeatures: [
      'Real-time client portal access & MIS reports',
      'Roll-rate & flow-rate predictive analytics',
      'Field agent GPS track & visit timestamp logs',
      'Portfolio recovery probability scoring',
      'Automated daily/weekly summary dispatch'
    ],
    benefits: [
      'Full transparency into field operations',
      'Data-backed strategy optimization',
      'Seamless audit-trail verification'
    ]
  }
];

export const INDUSTRIES_DATA: Industry[] = [
  {
    id: 'banks',
    name: 'Banks',
    iconName: 'Landmark',
    description: 'Public, private, and regional rural banks requiring compliant retail, credit card, auto loan, and mortgage recovery.',
    keySolutions: ['Retail Loan Recovery', 'Credit Card Overdues', 'Mortgage Default Resolution', 'SARFAESI Support']
  },
  {
    id: 'nbfcs',
    name: 'NBFCs',
    iconName: 'Building2',
    description: 'Non-Banking Financial Companies needing agile field collections, vehicle repossession, and SME loan recovery.',
    keySolutions: ['Personal Loan Recovery', 'SME Business Loans', 'Two-Wheeler & Auto Recoveries', 'Field Audits']
  },
  {
    id: 'fintech',
    name: 'FinTech Companies',
    iconName: 'Zap',
    description: 'Digital lending platforms needing fast-turnaround digital & soft collections backed by localized field support.',
    keySolutions: ['BNPL & Digital Micro-Loans', 'Instant Soft Outreach', 'Address Tracing', 'Digital Conciliation']
  },
  {
    id: 'auto-finance',
    name: 'Auto Finance Companies',
    iconName: 'CarFront',
    description: 'Specialized lenders in passenger cars, two-wheelers, commercial fleets, and luxury automobiles.',
    keySolutions: ['Swift Asset Seizure', 'Yard Management', 'Police Intimation Workflow', 'Pre-Auction Inspection']
  },
  {
    id: 'mfi',
    name: 'Micro Finance Institutions',
    iconName: 'Users',
    description: 'Grassroot micro-lenders requiring sensitive, community-focused, and respectful group recovery.',
    keySolutions: ['Group Loan Reconciliation', 'Doorstep Follow-ups', 'Community Center Conciliation', 'Financial Counseling']
  },
  {
    id: 'housing-finance',
    name: 'Housing Finance Companies',
    iconName: 'Home',
    description: 'HFCs managing home loan defaults, LAP (Loan Against Property), and construction finance.',
    keySolutions: ['Property Field Inspection', 'Mortgage Default Recovery', 'Legal Notice Service', 'Physical Possession Support']
  },
  {
    id: 'commercial-vehicle',
    name: 'Commercial Vehicle Finance',
    iconName: 'Truck',
    description: 'Lenders financing heavy trucks, buses, tractors, and construction machinery.',
    keySolutions: ['Highway Asset Locating', 'Heavy Equipment Yard Storage', 'Driver & Fleet Manager Negotiation', 'Asset Valuation']
  },
  {
    id: 'consumer-loans',
    name: 'Consumer Loan Companies',
    iconName: 'ShoppingBag',
    description: 'Consumer durable and electronics finance providers with high-volume, low-ticket portfolios.',
    keySolutions: ['High-Volume Outbound Tele-calling', 'Doorstep EMI Pickups', 'Digital Link Dispatches', 'Mass Skip Tracing']
  }
];

export const WHY_CHOOSE_US_DATA: WhyChooseUsItem[] = [
  {
    id: 'experienced-professionals',
    title: 'Experienced Professionals',
    iconName: 'Users',
    description: '500+ IIBF-certified Debt Recovery Agents (DRA), ex-bank officers, and senior legal advisors with 15+ years experience.',
    statBadge: '500+ DRA Certified'
  },
  {
    id: 'quick-recovery',
    title: 'Quick Recovery',
    iconName: 'Zap',
    description: 'First field action within 24 hours of case allocation with rapid address verification and swift asset recovery.',
    statBadge: '24hr Action TAT'
  },
  {
    id: 'legal-compliance',
    title: 'Legal Compliance',
    iconName: 'Scale',
    description: 'Strict adherence to RBI Fair Practice Code, police intimations, pre-repossession notices, and zero-harassment rules.',
    statBadge: '100% RBI Compliant'
  },
  {
    id: 'live-case-tracking',
    title: 'Live Case Tracking',
    iconName: 'Activity',
    description: 'Real-time case progress monitoring via secure Client Portal and agent mobile app updates.',
    statBadge: 'Real-time Portal'
  },
  {
    id: 'gps-verification',
    title: 'GPS Verification',
    iconName: 'MapPin',
    description: 'Geo-tagged field check-ins, timestamped photo evidence, and live route mapping for all agent visits.',
    statBadge: 'Geo-Tagged Proof'
  },
  {
    id: 'digital-reports',
    title: 'Digital Reports',
    iconName: 'FileSpreadsheet',
    description: 'Automated daily/weekly MIS feeds, roll-rate analytics, call recordings, and recovery trend performance reports.',
    statBadge: 'Automated MIS'
  },
  {
    id: 'professional-field-team',
    title: 'Professional Field Team',
    iconName: 'Award',
    description: 'Uniformed, trained, polite field force maintaining the highest standards of ethics and lender brand dignity.',
    statBadge: 'Trained & Uniformed'
  },
  {
    id: 'secure-customer-data',
    title: 'Secure Customer Data',
    iconName: 'ShieldCheck',
    description: 'ISO 27001 certified data security protocols, 256-bit encrypted data transfers, and zero data leakage guarantees.',
    statBadge: 'ISO 27001 Certified'
  },
  {
    id: 'fast-turnaround',
    title: 'Fast Turnaround',
    iconName: 'Clock',
    description: 'Swift SLA turnaround across tele-calling, field visits, skip tracing, and vehicle yard admissions.',
    statBadge: 'Swift SLAs'
  },
  {
    id: '247-support',
    title: '24×7 Support',
    iconName: 'Headphones',
    description: 'Round-the-clock client support, emergency repossession response squad, and dedicated relationship managers.',
    statBadge: '24/7 Response Squad'
  }
];

export const PROCESS_TIMELINE_DATA: ProcessStep[] = [
  {
    stepNumber: 1,
    title: 'Case Allocation',
    iconName: 'FolderInput',
    description: 'Secure API or bulk data import of delinquent cases into our system with automated risk profiling and bucket categorization.',
    details: [
      'Encrypted client data ingestion & validation',
      'Delinquency bucket mapping (SMA-0 to NPA)',
      'Automated geographical agent assignment'
    ]
  },
  {
    stepNumber: 2,
    title: 'Customer Verification',
    iconName: 'UserCheck',
    description: 'Preliminary data audit, telephone contact attempt, address validation, and soft skip-tracing if contact details are stale.',
    details: [
      'Contact number & address re-verification',
      'System-driven skip tracing if unreachable',
      'Initial polite payment reminder outreach'
    ]
  },
  {
    stepNumber: 3,
    title: 'Field Visit',
    iconName: 'Navigation',
    description: 'DRA-certified field executive deployed for doorstep visit with geo-tagged check-in, official ID verification, and respectful interaction.',
    details: [
      'Certified agent doorstep visit & check-in',
      'Geo-tagged location & photographic proof',
      'Borrower situation assessment & documentation'
    ]
  },
  {
    stepNumber: 4,
    title: 'Negotiation',
    iconName: 'Handshake',
    description: 'Constructive dialogue to establish borrower financial capacity, structuring customized repayment schedules or One-Time Settlements (OTS).',
    details: [
      'Financial stress & income analysis',
      'OTS or restructured EMI proposal',
      'Lender approval matrix execution'
    ]
  },
  {
    stepNumber: 5,
    title: 'Legal Process',
    iconName: 'Scale',
    description: 'Issuance of statutory legal notices, police station pre-intimations, SARFAESI notices, and compliance checks.',
    details: [
      'Legal notice dispatch & delivery proof',
      'Pre-repossession police station intimation logging',
      'Statutory compliance clearance'
    ]
  },
  {
    stepNumber: 6,
    title: 'Asset Repossession',
    iconName: 'Truck',
    description: 'Lawful, safe, and respectful physical securement of motor vehicles, machinery, or pledged collateral.',
    details: [
      'Compliant physical asset seizure',
      'Vehicle condition video & photo documentation',
      'On-site inventory itemization & signature'
    ]
  },
  {
    stepNumber: 7,
    title: 'Digital Documentation',
    iconName: 'ShieldCheck',
    description: 'Instant upload of inventory sheets, payment receipts, photo evidence, and digital logs to central client portal.',
    details: [
      'Digital inventory check-sheet creation',
      'Instant payment receipt / receipt generation',
      'Encrypted cloud archiving'
    ]
  },
  {
    stepNumber: 8,
    title: 'Vehicle Yard Submission',
    iconName: 'Home',
    description: 'Safe transport of repossessed asset to 24/7 CCTV guarded yard with police post-intimation submission.',
    details: [
      'Towing/transport to secure storage yard',
      'CCTV check-in entry & physical inspection',
      'Post-repossession police station confirmation'
    ]
  },
  {
    stepNumber: 9,
    title: 'Report Submission',
    iconName: 'FileSpreadsheet',
    description: 'Comprehensive case resolution dispatch, field logs submission, recovery analytics, and audit trail archiving.',
    details: [
      'End-of-case MIS report dispatch to bank',
      'Recovery yield & cost analysis feed',
      'Secure data archiving per RBI standards'
    ]
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 'test-hdfc',
    name: 'Sanjeev Mukherji',
    designation: 'AGM - Retail Loan Recovery',
    company: 'HDFC Bank',
    rating: 5,
    content: 'MLA ASSOCIATE has provided exceptional vehicle recovery and EMI collection services for HDFC Bank across Jharkhand and Bihar. Their 100% DRA certified field agents adhere strictly to RBI guidelines, ensuring zero customer complaints and rapid roll-rate resolution.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=250'
  },
  {
    id: 'test-icici',
    name: 'Priya Sundaram',
    designation: 'Head - Auto Loan Collections',
    company: 'ICICI Bank',
    rating: 5,
    content: 'Their vehicle repossession execution and yard management protocols are best-in-class. Pre-intimation to police stations, real-time GPS tracking, and digital inventory check-sheets have significantly boosted our NPA recovery efficiency.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=250'
  },
  {
    id: 'test-sbi',
    name: 'Rameshwar Prasad Sinha',
    designation: 'Chief Manager - NPA Recovery Cell',
    company: 'State Bank of India',
    rating: 5,
    content: 'MLA ASSOCIATE has consistently delivered high resolution rates for hard-bucket agricultural and commercial vehicle loan defaults. Their skip-tracing division in Eastern India is remarkably swift and accurate.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=250'
  },
  {
    id: 'test-axis',
    name: 'Amitabh Sen',
    designation: 'VP - Commercial Vehicle Collections',
    company: 'Axis Bank',
    rating: 5,
    content: 'We rely on MLA ASSOCIATE for complex commercial fleet repossession and doorstep EMI collections. Their team operates with extreme professionalism and prompt police station documentation.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=250'
  },
  {
    id: 'test-kotak',
    name: 'Ananya Deshmukh',
    designation: 'VP - Risk & Portfolio Management',
    company: 'Kotak Mahindra Bank',
    rating: 5,
    content: 'Vehicle repossession and skip tracing are high-sensitivity areas. MLA ASSOCIATE handles every case with utmost legal precision, pre-intimation protocols, and safe yard storage. Their real-time dashboard provides complete operational visibility.',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=250'
  },
  {
    id: 'test-mmfsl',
    name: 'Manoj Kumar Sharma',
    designation: 'State Recovery Head - Eastern Region',
    company: 'Mahindra Finance',
    rating: 5,
    content: 'For tractor and heavy commercial vehicle recoveries in Jharkhand & Bihar, MLA ASSOCIATE is our most dependable agency partner. Excellent field execution and 24/7 guarded yard security.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=250'
  },
  {
    id: 'test-bajaj',
    name: 'Vikramaditya Roy',
    designation: 'National Portfolio Manager',
    company: 'Bajaj Finance',
    rating: 5,
    content: 'Seamless integration with our digital collection engine. Their DRA certified field officers conduct polite doorstep visits and issue instant e-receipts to borrowers.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=250'
  }
];

export const JOB_POSITIONS_DATA: JobPosition[] = [
  {
    id: 'job-1',
    title: 'Tele-Calling Collection Executive (50+ Vacancies)',
    department: 'Tele-Collections (Voice Desk)',
    location: 'Bihar (Patna Office / Muzaffarpur / Gaya / Bhagalpur)',
    type: 'Full-Time (50+ Openings)',
    experience: '0 - 3 Years (Freshers & Experienced)',
    description: 'Special hiring drive for 50+ Telecallers across Bihar. Polite, persuasive, and result-oriented voice officers required for soft-bucket bank/NBFC loan reminders, EMI scheduling, and customer support. Female & Male candidates welcome.',
    responsibilities: [
      'Conduct polite outbound payment reminder calls to borrowers',
      'Explain EMI repayment options and send secure digital payment links',
      'Record customer feedback and reason for non-payment (RNP)',
      'Achieve daily calling targets & earn attractive monthly performance bonuses'
    ],
    requirements: [
      'Minimum 10+2 / Intermediate or Graduate degree',
      'Good speaking skills in Hindi and local Bihar regional dialects',
      'Basic smartphone / computer operation knowledge',
      'Prior call center / bank tele-calling experience is an added advantage'
    ]
  },
  {
    id: 'job-2',
    title: 'Field Recovery Officer - DRA Certified (150+ Vacancies)',
    department: 'Field Operations (All 38 Bihar Districts)',
    location: 'Bihar (Patna, Gaya, Muzaffarpur, Bhagalpur, Purnia, Darbhanga, Samastipur, Rohtas, Begusarai, etc.)',
    type: 'Full-Time (150+ Openings)',
    experience: '1 - 5 Years',
    description: 'Mass recruitment drive for 150+ Field Collection Officers across all 38 districts of Bihar. Responsible for doorstep customer visits, loan recovery, address verification, and compliant debt collection.',
    responsibilities: [
      'Conduct polite doorstep field visits for delinquent 2W, 4W & Personal Loan accounts',
      'Negotiate EMI settlements under bank guidelines',
      'Log live geo-tagged visit updates via MLA Mobile App',
      'Maintain strict compliance with RBI Fair Practice Codes'
    ],
    requirements: [
      'IIBF DRA Certification (or willingness to complete company-sponsored DRA training)',
      'Two-wheeler (Bike/Scooter) with valid driving license',
      'Android smartphone for live location logging & e-receipt generation',
      'Strong local geographic knowledge of assigned district in Bihar'
    ]
  },
  {
    id: 'job-3',
    title: 'Tele-Calling Team Leader & Supervisor (10+ Vacancies)',
    department: 'Operations & Voice Management',
    location: 'Patna Regional Office, Bihar',
    type: 'Full-Time (10 Openings)',
    experience: '3 - 6 Years',
    description: 'Lead team of 15-20 telecallers in Bihar. Drive portfolio resolution rates, monitor call quality, ensure SLA compliance, and report to bank recovery heads.',
    responsibilities: [
      'Monitor daily team calling metrics and roll-rate improvements',
      'Conduct call quality audits and case strategy reviews for hard-bucket loans',
      'Ensure zero compliance breaches during borrower calls',
      'Prepare daily & weekly bank client MIS reports'
    ],
    requirements: [
      'Graduate degree in any discipline; prior TL experience in collections required',
      'Minimum 3 years in Banking/NBFC tele-collection operations in Bihar',
      'Strong leadership skills and daily target achievement track record',
      'Good knowledge of MS Excel and CRM tools'
    ]
  },
  {
    id: 'job-4',
    title: 'Vehicle Repossession Specialist (25+ Vacancies)',
    department: 'Asset Recovery Division (Bihar)',
    location: 'Bihar (Patna, Muzaffarpur, Bhagalpur, Gaya, Purnia)',
    type: 'Full-Time (25 Openings)',
    experience: '2 - 6 Years',
    description: 'Specialist team for commercial vehicle & auto asset tracing, police station intimations, physical securement, and yard transport in Bihar.',
    responsibilities: [
      'Coordinate lawful asset repossession operations using MLA Repo Search App',
      'File police station intimations and detailed vehicle condition sheets',
      'Safely transport repossessed vehicles to designated CCTV guarded yards in Bihar',
      'Assist valuation teams for pre-auction preparations'
    ],
    requirements: [
      'Prior experience in auto loan recovery & vehicle repossession',
      'Thorough knowledge of legal repossession protocols in Bihar',
      'Strong local network and field coordination skills',
      'Clean background check and ethical compliance record'
    ]
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Are all MLA ASSOCIATE recovery agents DRA certified?',
    answer: 'Yes, 100% of our field executives and recovery officers hold active Debt Recovery Agent (DRA) certifications administered by the Indian Institute of Banking & Finance (IIBF) as mandated by the Reserve Bank of India.',
    category: 'Compliance'
  },
  {
    id: 'faq-2',
    question: 'How does MLA ASSOCIATE ensure strict compliance with RBI guidelines?',
    answer: 'We maintain an internal zero-tolerance compliance framework. Calls are made only between 08:00 AM and 07:00 PM, all field visits are geo-tagged and body-cam recorded where applicable, and harassment or intimidation is strictly prohibited. Every interaction is audited by our internal Legal & Compliance Cell.',
    category: 'Compliance'
  },
  {
    id: 'faq-3',
    question: 'What types of loans and assets do you handle?',
    answer: 'We handle retail personal loans, credit card overdues, auto loans (2-wheeler, 4-wheeler, commercial vehicles), heavy construction machinery, housing loans, MSME business loans, microfinance group loans, and written-off NPA accounts.',
    category: 'General'
  },
  {
    id: 'faq-4',
    question: 'What is the turnaround time (TAT) once a case portfolio is allocated?',
    answer: 'Initial tele-outreach and data verification commence within 4 to 12 hours of case ingestion. First physical field visits are conducted within 24 to 48 hours anywhere across our covered PAN India network.',
    category: 'Process'
  },
  {
    id: 'faq-5',
    question: 'How is repossessed vehicle storage and yard management handled?',
    answer: 'We operate 24/7 guarded, CCTV-monitored secure storage yards in all major metro and tier-1 hubs. Vehicles undergo immediate condition inventorying, photo/video documentation, and police station intimation logging prior to yard entry.',
    category: 'Repossession'
  },
  {
    id: 'faq-6',
    question: 'Can financial institutions monitor recovery status in real-time?',
    answer: 'Yes! Client institutions receive dedicated secure access to the MLA ASSOCIATE Client Portal. You can track daily field visit logs, call recordings, payment receipts, roll-rate trends, and download custom MIS reports 24/7.',
    category: 'Process'
  },
  {
    id: 'faq-7',
    question: 'How does MLA ASSOCIATE handle skip-tracing for untraceable borrowers?',
    answer: 'Our skip tracing division combines compliant open-source intelligence, field network inquiries, verified address mapping, and employer verification to locate absconding defaulters without violating privacy regulations.',
    category: 'Process'
  },
  {
    id: 'faq-8',
    question: 'What is the fee structure for hiring MLA ASSOCIATE?',
    answer: 'We offer flexible, performance-driven fee models tailored to lender preferences: Success-based Contingency Fee (% of recovered amount), Fixed SLA Retainership, or Hybrid Models. Contact us for a customized proposal.',
    category: 'General'
  }
];

export const BRANCH_OFFICES_DATA: BranchOffice[] = [
  {
    id: 'hq-dhanbad',
    city: 'Dhanbad',
    state: 'Jharkhand',
    type: 'Head Office',
    address: 'MLA Complex, Main Road, Near City Center, Dhanbad, Jharkhand - 826001',
    phone: 'Email Desk: mlaassociate002@gmail.com',
    email: 'mlaassociate002@gmail.com',
    coords: { lat: 23.7957, lng: 86.4304 }
  },
  {
    id: 'branch-patna',
    city: 'Patna',
    state: 'Bihar',
    type: 'Regional Branch Office',
    address: 'MLA Corporate Office, Rajeev Nagar, Digha, Patliputra, Patna, Bihar - 800024 (Rajeev Nagar) / 800011 (Digha) / 800013 (Patliputra)',
    phone: 'Website: www.mlaassociate.in | Email: mlaassociate002@gmail.com',
    email: 'mlaassociate002@gmail.com',
    coords: { lat: 25.6208, lng: 85.1054 }
  },
  {
    id: 'hub-ranchi',
    city: 'Ranchi',
    state: 'Jharkhand',
    type: 'State Branch Office',
    address: 'MLA House, Main Road, Near Overbridge, Ranchi, Jharkhand - 834001',
    phone: 'Email Desk: mlaassociate002@gmail.com',
    email: 'mlaassociate002@gmail.com',
    coords: { lat: 23.3441, lng: 85.3096 }
  },
  {
    id: 'hub-kolkata',
    city: 'Kolkata',
    state: 'West Bengal',
    type: 'Eastern Zonal Office',
    address: 'Eastern Corporate Park, Salt Lake Sector V, Kolkata, West Bengal - 700091',
    phone: 'Email Desk: mlaassociate002@gmail.com',
    email: 'mlaassociate002@gmail.com',
    coords: { lat: 22.5726, lng: 88.4331 }
  },
  {
    id: 'hub-delhi',
    city: 'New Delhi / NCR',
    state: 'Delhi NCR',
    type: 'Northern Zonal Hub',
    address: 'Business Heights, 4th Floor, Connaught Place, New Delhi - 110001',
    phone: 'Email Desk: mlaassociate002@gmail.com',
    email: 'mlaassociate002@gmail.com',
    coords: { lat: 28.6315, lng: 77.2167 }
  },
  {
    id: 'hub-mumbai',
    city: 'Mumbai',
    state: 'Maharashtra',
    type: 'Western Zonal Hub',
    address: 'BKC Financial District, Bandra East, Mumbai, Maharashtra - 400051',
    phone: 'Email Desk: mlaassociate002@gmail.com',
    email: 'mlaassociate002@gmail.com',
    coords: { lat: 19.0657, lng: 72.8687 }
  }
];
