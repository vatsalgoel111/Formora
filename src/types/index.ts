export type ServiceCategory = 
  | 'web-design'
  | 'branding'
  | 'social-media'
  | 'content-writing'
  | 'growth-marketing'
  | 'influencer-ugc';

export interface Project {
  id: string;
  slug: string;
  title: string;
  clientSubtitle: string;
  category: ServiceCategory;
  categoryLabel: string;
  year: string;
  isConcept: boolean;
  conceptLabel: string;
  tagline: string;
  challenge: string;
  solution: string;
  services: string[];
  deliverables: string[];
  colorPalette: { hex: string; name: string }[];
  typography: { role: string; family: string; description: string }[];
  visualHighlights: {
    title: string;
    description: string;
    mockupType: 'desktop-browser' | 'mobile-device' | 'brand-collateral' | 'design-system';
    accentColor: string;
  }[];
  heroMockup: {
    title: string;
    subtitle: string;
    designFocusLabel: string;
    accentHex: string;
  };
}

export interface ServiceDetail {
  slug: ServiceCategory;
  title: string;
  tagline: string;
  businessProblem: string;
  overview: string;
  isPrimary?: boolean;
  capabilities: {
    name: string;
    description: string;
  }[];
  process: {
    step: string;
    title: string;
    description: string;
  }[];
  deliverables: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export interface InquiryFormData {
  fullName: string;
  businessEmail: string;
  companyName: string;
  websiteUrl: string;
  selectedServices: string[];
  timeline: string;
  projectOverview: string;
  consentContact: boolean;
}
