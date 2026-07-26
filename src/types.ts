export interface Service {
  id: string;
  title: string;
  iconName: string;
  shortDescription: string;
  fullDescription: string;
  keyFeatures: string[];
  benefits: string[];
  category: 'collection' | 'repossession' | 'legal' | 'management';
}

export interface Industry {
  id: string;
  name: string;
  iconName: string;
  description: string;
  keySolutions: string[];
}

export interface WhyChooseUsItem {
  id: string;
  title: string;
  iconName: string;
  description: string;
  statBadge?: string;
}

export interface ProcessStep {
  stepNumber: number;
  title: string;
  iconName: string;
  description: string;
  details: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  designation: string;
  company: string;
  rating: number;
  content: string;
  image: string;
}

export interface JobPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Compliance' | 'Process' | 'Repossession';
}

export interface BranchOffice {
  id: string;
  city: string;
  state: string;
  type: 'Headquarters' | 'Regional Hub' | 'Operations Office' | 'Head Office' | 'Regional Branch Office' | string;
  address: string;
  phone: string;
  email: string;
  coords: { lat: number; lng: number };
}

export interface AssessmentInputs {
  loanType: string;
  portfolioSize: string;
  dpdBucket: string;
  region: string;
}

export interface AssessmentResult {
  estimatedRecoveryRate: string;
  turnaroundDays: string;
  recommendedStrategy: string;
  legalRiskScore: string;
}
