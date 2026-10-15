import { ServiceDetail } from '../types';

export const SERVICES: ServiceDetail[] = [
  {
    slug: 'web-design',
    title: 'Website Design & Development',
    tagline: 'Primary Service: High-performance digital flagships that convert visitors into committed clients.',
    isPrimary: true,
    businessProblem:
      'Most business websites are either aesthetically outdated templates or slow, bloated experiments that fail to convert traffic into qualified inquiries.',
    overview:
      'We design and build bespoke, modern web platforms from scratch. From custom code and interactive WebGL experiences to headless Shopify flagships and fast marketing sites, every detail is engineered for speed, mobile elegance, and commercial clarity.',
    capabilities: [
      {
        name: 'Custom Agency & Business Flagships',
        description: 'Bespoke corporate websites engineered with modern React, Next.js, or Vite, optimized for sub-second page loads and memorable brand presence.',
      },
      {
        name: 'E-Commerce & Digital Commerce',
        description: 'Headless Shopify and custom commerce platforms built for conversion, frictionless cart drawer flows, and seamless inventory management.',
      },
      {
        name: 'Conversion-Focused Landing Pages',
        description: 'Dedicated single-page digital experiences built to maximize return on ad spend, product drops, and inbound marketing campaigns.',
      },
      {
        name: 'Website Redesigns & Replatforming',
        description: 'Strategic audits, architectural modernization, and complete visual overhaul of legacy websites with zero downtime or SEO regression.',
      },
      {
        name: 'Ongoing Maintenance & Technical Stewardship',
        description: 'Continuous performance monitoring, security hardening, technical updates, and iterative conversion rate optimization.',
      },
    ],
    process: [
      { step: '01', title: 'Architecture & Inbound Flow', description: 'User flow mapping, wireframing, and commercial positioning alignment.' },
      { step: '02', title: 'Art Direction & Prototyping', description: 'High-fidelity Figma prototypes, micro-interaction design, and responsive design systems.' },
      { step: '03', title: 'Full-Stack Development', description: 'Clean, accessible TypeScript code, responsive layouts, and performance optimization.' },
      { step: '04', title: 'QA & Worldwide Launch', description: 'Cross-browser testing, Core Web Vitals audit, and seamless DNS cutover.' },
    ],
    deliverables: [
      'Production-Ready Source Code & Repository',
      'Fully Responsive Desktop, Tablet & Mobile Views',
      'Interactive Design System & Token Library',
      'SEO & OpenGraph Configuration',
      'CMS Integration & Training Walkthrough',
    ],
    faqs: [
      {
        question: 'What technologies do you build websites with?',
        answer: 'We prioritize modern, robust stacks: React, TypeScript, Vite, Tailwind CSS, Next.js, and headless CMS platforms. We avoid bloated generic themes or heavy page builders that degrade performance.',
      },
      {
        question: 'How long does a website project take?',
        answer: 'A high-impact landing page or focused business website typically spans 3 to 5 weeks. Comprehensive bespoke flagships with custom commerce or 3D interactions typically take 6 to 10 weeks depending on scope.',
      },
      {
        question: 'Do you offer ongoing website support after launch?',
        answer: 'Yes. We provide dedicated monthly maintenance retainers covering security updates, technical monitoring, content additions, and ongoing conversion optimization.',
      },
    ],
  },
  {
    slug: 'branding',
    title: 'Brand Identity & Creative Direction',
    tagline: 'Distinctive visual identities that make your business instantly recognizable and enduring.',
    isPrimary: false,
    businessProblem:
      'In crowded markets, indistinguishable visual styling forces businesses to compete on price alone. Without a coherent brand system, every touchpoint feels disjointed.',
    overview:
      'We forge comprehensive visual identities, typographic systems, brand guidelines, and collateral that give ambitious companies a distinctive voice and confident posture across digital and physical touchpoints.',
    capabilities: [
      {
        name: 'Core Visual Identity & Monograms',
        description: 'Distinctive logomarks, secondary emblems, and responsive lockups crafted with geometric precision.',
      },
      {
        name: 'Curated Typography & Color Architecture',
        description: 'Cohesive font pairings, custom scale tokens, and accessible palettes tuned for digital screens and print.',
      },
      {
        name: 'Comprehensive Brand Guidelines',
        description: 'Living brand manuals detailing layout grids, voice principles, clear space rules, and visual do-and-don’ts.',
      },
      {
        name: 'Digital & Physical Brand Collateral',
        description: 'Stationery suites, presentation decks, packaging concepts, social media design kits, and event assets.',
      },
    ],
    process: [
      { step: '01', title: 'Brand Audit & Positioning', description: 'Deep-dive into your market landscape, competitive peers, and core differentiators.' },
      { step: '02', title: 'Creative Concepts', description: 'Presentation of two to three distinct creative directions with real-world mockups.' },
      { step: '03', title: 'System Refinement', description: 'Extending the chosen direction into an exhaustive multi-touchpoint asset suite.' },
      { step: '04', title: 'Guidelines & Asset Handoff', description: 'Production-ready vectors, web fonts, and our definitive Brand Operating Manual.' },
    ],
    deliverables: [
      'Master Vector Logo Suite (SVG, EPS, PNG)',
      'Digital & Print Color Specification Sheet (HEX, RGB, CMYK, Pantone)',
      'Typography Licensing & Web Font Packages',
      'Social Profile & Banner Asset Suite',
      'Comprehensive PDF Brand Guidelines Manual',
    ],
    faqs: [
      {
        question: 'Can you evolve an existing logo rather than starting completely over?',
        answer: 'Absolutely. We regularly execute strategic brand refreshes that preserve equity and recognition while modernizing geometry, typography, and contrast for modern digital displays.',
      },
      {
        question: 'Do you provide brand voice and tone guidelines?',
        answer: 'Yes. Every brand identity package includes copywriting principles and vocabulary guidelines so your written communication matches your visual caliber.',
      },
    ],
  },
  {
    slug: 'social-media',
    title: 'Social Media Management & Content',
    tagline: 'Consistent, editorial-grade visual storytelling that builds an engaged, loyal community.',
    isPrimary: false,
    businessProblem:
      'Many brands struggle to balance the relentless demand for daily social content with the discipline of maintaining premium brand aesthetics, resulting in erratic, low-quality posts.',
    overview:
      'We handle complete social media strategy, monthly content calendar production, graphic curation, and caption copywriting. We ensure your brand looks as exceptional on Instagram, LinkedIn, and X as it does on your flagship website.',
    capabilities: [
      {
        name: 'Strategic Content Architecture',
        description: 'Channel-specific content pillars designed to inform, inspire, and drive traffic to your core offers.',
      },
      {
        name: 'Editorial Social Graphics & Layouts',
        description: 'Bespoke carousels, typographic quote cards, motion snippets, and announcement graphics.',
      },
      {
        name: 'Short-Form Video Coordination',
        description: 'Hook-driven Reel, TikTok, and YouTube Shorts ideation, pacing guides, and post-production editing.',
      },
      {
        name: 'Publishing & Engagement Management',
        description: 'Meticulous scheduling at peak audience times and authentic community interaction management.',
      },
    ],
    process: [
      { step: '01', title: 'Channel & Audience Audit', description: 'Assessing historical performance, demographics, and competitive content gaps.' },
      { step: '02', title: 'Monthly Content Calendar', description: 'Curating themes, visual drafts, and conversion copy two weeks ahead of schedule.' },
      { step: '03', title: 'Creative Production', description: 'Designing high-res assets, editing video clips, and writing persuasive microcopy.' },
      { step: '04', title: 'Publishing & Performance Review', description: 'Active distribution, engagement monitoring, and transparent monthly analytics.' },
    ],
    deliverables: [
      'Monthly Structured Editorial Content Calendars',
      'Feed Grid Art Direction & Story Highlight Covers',
      'Ready-to-Publish Graphic & Motion Assets',
      'Channel Growth & Audience Engagement Reports',
    ],
    faqs: [
      {
        question: 'Which social platforms do you specialize in?',
        answer: 'We focus where modern visual and professional brands thrive: Instagram, LinkedIn, X, and short-form video on TikTok and YouTube.',
      },
      {
        question: 'Do we get to approve content before it is published?',
        answer: 'Always. All posts, captions, and visual assets are submitted via a collaborative review board 10 to 14 days before scheduled deployment.',
      },
    ],
  },
  {
    slug: 'growth-marketing',
    title: 'Growth Marketing & Campaign Coordination',
    tagline: 'Strategic campaign management, creator-led UGC, and influencer partnerships that scale.',
    isPrimary: false,
    businessProblem:
      'Generic corporate ads are ignored by modern consumers. Scaling customer acquisition requires authentic human advocacy combined with disciplined conversion funnels.',
    overview:
      'We orchestrate digital marketing campaigns that bridge creator authenticity and commercial rigor. From sourcing high-performing UGC creators to managing influencer whitelisting and tracking conversions, we build campaigns that generate measurable revenue.',
    capabilities: [
      {
        name: 'Creator-Led UGC Advertising',
        description: 'Sourcing, vetting, and directing content creators to produce authentic, high-converting video and photo creative.',
      },
      {
        name: 'Influencer Campaign Coordination',
        description: 'End-to-end influencer outreach, contract negotiation, creative brief distribution, and compliance monitoring.',
      },
      {
        name: 'Growth Funnels & Conversion Audits',
        description: 'Optimizing landing pages, email nurture sequences, and post-click journeys to maximize ad efficiency.',
      },
      {
        name: 'Performance Reporting & Attribution',
        description: 'Clear reporting tracking return on ad spend (ROAS), cost per acquisition (CPA), and customer lifetime value.',
      },
    ],
    process: [
      { step: '01', title: 'Campaign Objective & Persona', description: 'Defining target CAC thresholds, value props, and customer triggers.' },
      { step: '02', title: 'Creator Sourcing & Briefing', description: 'Recruiting aligned creators and supplying detailed hook-and-cta scripts.' },
      { step: '03', title: 'Creative Assembly & Launch', description: 'Iterating variants for headline hooks, music, and aspect ratios.' },
      { step: '04', title: 'Scale & Iterative Optimization', description: 'Doubling down on winning creative angles and pruning underperformers.' },
    ],
    deliverables: [
      'Comprehensive Campaign Briefs & Hook Frameworks',
      'Creator Rights & Licensing Agreements',
      'Library of Ready-to-Test Video & Static Ad Variations',
      'Live Performance & Conversion Dashboard',
    ],
    faqs: [
      {
        question: 'How do you choose UGC creators?',
        answer: 'We vet creators based on delivery authenticity, camera presence, audio quality, and demographic fit with your buyer persona, not vanity follower counts.',
      },
      {
        question: 'How does Formora coordinate with our internal marketing team?',
        answer: 'We can act as an autonomous campaign strike-team or seamlessly integrate into your existing Slack, project management, and ad accounts.',
      },
    ],
  },
];
