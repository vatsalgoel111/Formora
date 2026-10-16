import { ServiceDetail } from '../types';

export const SERVICES: ServiceDetail[] = [
  {
    slug: 'web-design',
    title: 'Website Design & Development',
    tagline: 'Primary Discipline: High-velocity digital flagships engineered for distinction and conversion.',
    isPrimary: true,
    businessProblem:
      'Most business websites are either aesthetically outdated templates or slow, bloated experiments that fail to communicate clear positioning.',
    overview:
      'We design and build bespoke, modern web platforms from scratch. From custom code and interactive WebGL experiences to headless commerce flagships and fast marketing sites, every detail is engineered for speed, mobile elegance, and commercial clarity.',
    capabilities: [
      {
        name: 'Website Strategy & Architecture',
        description: 'Information architecture, user flow mapping, and commercial positioning alignment prior to design.',
      },
      {
        name: 'UI/UX & Art Direction',
        description: 'Bespoke design systems, responsive layouts, micro-interaction choreography, and accessible component libraries.',
      },
      {
        name: 'Full-Stack Engineering',
        description: 'Clean, accessible TypeScript, modern React and Vite frameworks, optimized Core Web Vitals, and responsive performance.',
      },
      {
        name: 'E-Commerce & Digital Commerce',
        description: 'Headless storefronts and custom commerce architectures built for frictionless browsing and streamlined checkouts.',
      },
      {
        name: 'Landing Pages & Campaign Sites',
        description: 'Dedicated single-page digital experiences built to maximize inbound campaigns and brand product drops.',
      },
      {
        name: 'Website Optimization & Stewardship',
        description: 'Continuous performance monitoring, security hardening, technical updates, and ongoing technical evolution.',
      },
    ],
    process: [
      { step: '01', title: 'Architecture & Inbound Flow', description: 'User flow mapping, wireframing, and commercial positioning alignment.' },
      { step: '02', title: 'Art Direction & Prototyping', description: 'High-fidelity prototypes, micro-interaction design, and responsive design systems.' },
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
        answer: 'Yes. We provide ongoing technical stewardship covering security updates, technical monitoring, content additions, and performance maintenance.',
      },
    ],
  },
  {
    slug: 'branding',
    title: 'Branding & Graphic Design',
    tagline: 'Distinctive visual identities and graphic systems that give your business an enduring presence.',
    isPrimary: false,
    businessProblem:
      'In crowded markets, indistinguishable visual styling forces businesses into commoditization. Without a coherent brand system, every touchpoint feels disjointed.',
    overview:
      'We forge comprehensive visual identities, typographic systems, brand guidelines, and collateral that give ambitious companies a distinctive voice and confident posture across digital and physical touchpoints.',
    capabilities: [
      {
        name: 'Brand Identity & Monograms',
        description: 'Distinctive logomarks, secondary emblems, and responsive lockups crafted with geometric precision.',
      },
      {
        name: 'Typography & Color Systems',
        description: 'Cohesive font pairings, custom scale tokens, and accessible palettes tuned for digital screens and print.',
      },
      {
        name: 'Brand Guidelines Manual',
        description: 'Living brand manuals detailing layout grids, voice principles, clear space rules, and visual application standards.',
      },
      {
        name: 'Marketing Collateral & Print',
        description: 'Stationery suites, presentation decks, packaging concepts, social media design kits, and event assets.',
      },
      {
        name: 'Campaign Design & Key Visuals',
        description: 'Art-directed master graphics and visual hooks designed for multi-channel product announcements.',
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
      'Comprehensive Brand Guidelines Manual',
    ],
    faqs: [
      {
        question: 'Can you evolve an existing logo rather than starting completely over?',
        answer: 'Absolutely. We execute strategic brand refreshes that preserve recognition while modernizing geometry, typography, and contrast for modern digital displays.',
      },
      {
        question: 'Do you provide brand voice and tone guidelines?',
        answer: 'Yes. Every brand identity package includes copywriting principles and vocabulary guidelines so your written communication matches your visual caliber.',
      },
    ],
  },
  {
    slug: 'social-media',
    title: 'Social Media Management',
    tagline: 'Consistent, editorial-grade visual storytelling that builds an engaged, loyal community.',
    isPrimary: false,
    businessProblem:
      'Many brands struggle to balance the relentless demand for daily social content with the discipline of maintaining premium brand aesthetics, resulting in erratic posts.',
    overview:
      'We handle complete social media strategy, monthly content calendar production, graphic curation, and caption copywriting. We ensure your brand looks as exceptional on Instagram, LinkedIn, and X as it does on your flagship website.',
    capabilities: [
      {
        name: 'Social Content Planning',
        description: 'Channel-specific content pillars designed to inform, inspire, and drive traffic to your core offers.',
      },
      {
        name: 'Content Calendars & Schedules',
        description: 'Structured monthly visual calendars with detailed caption briefs and strategic publishing cadences.',
      },
      {
        name: 'Editorial Social Graphics',
        description: 'Bespoke carousels, typographic quote cards, motion snippets, and announcement graphics.',
      },
      {
        name: 'Publishing & Engagement Support',
        description: 'Strategic scheduling at peak audience times and authentic community interaction management.',
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
    slug: 'content-writing',
    title: 'Content Writing & Copywriting',
    tagline: 'Sharp, intelligent words that clarify complex ideas and compel decisive action.',
    isPrimary: false,
    businessProblem:
      'Vague, jargon-filled copy undermines beautiful design. If prospective clients cannot immediately grasp what you do and why it matters, they leave.',
    overview:
      'We craft strategic website copywriting, brand messaging frameworks, editorial articles, and conversion-focused copy. Every headline, paragraph, and micro-label is written to communicate with clarity, intelligence, and commercial intent.',
    capabilities: [
      {
        name: 'Website Copywriting',
        description: 'Comprehensive hero headlines, narrative sections, capability descriptions, and microcopy written for maximum readability.',
      },
      {
        name: 'Brand Messaging Frameworks',
        description: 'Core value propositions, elevator pitches, brand mission statements, and tone-of-voice playbooks.',
      },
      {
        name: 'Landing-Page Copy',
        description: 'Conversion-engineered sales copy, objection-handling frameworks, and compelling call-to-action language.',
      },
      {
        name: 'Social Media Captions',
        description: 'Engaging, thoughtful captions crafted for LinkedIn thought leadership and Instagram visual storytelling.',
      },
      {
        name: 'Editorial & Content Planning',
        description: 'Long-form editorial articles, case-study narratives, and content strategy documentation.',
      },
    ],
    process: [
      { step: '01', title: 'Message Discovery', description: 'Stakeholder interviews, audience persona mapping, and value proposition extraction.' },
      { step: '02', title: 'Tone & Voice Architecture', description: 'Establishing writing principles, terminology rules, and sample headline exploration.' },
      { step: '03', title: 'Drafting & Hierarchy', description: 'Writing full page copy synchronized with wireframes and visual layout rhythm.' },
      { step: '04', title: 'Refinement & Proofing', description: 'Collaborative review cycles, line-editing for brevity, and final signoff.' },
    ],
    deliverables: [
      'Complete Website Copy Deck (Headlines, Body, CTAs)',
      'Brand Messaging Guide & Vocabulary Rules',
      'High-Converting Landing Page Copy Templates',
      'Editorial Style Guide',
    ],
    faqs: [
      {
        question: 'Do you write the copy before or after the design is created?',
        answer: 'We believe copy and design inform each other. We establish message hierarchy and key headlines upfront during architecture, and refine the prose alongside visual prototypes.',
      },
      {
        question: 'Can you rewrite our existing website copy without redesigning the site?',
        answer: 'Yes. We frequently conduct comprehensive copy audits and rewrites to sharpen positioning and boost conversion on existing platforms.',
      },
    ],
  },
  {
    slug: 'growth-marketing',
    title: 'Marketing Management & Growth',
    tagline: 'Strategic campaign management and content-led growth that connect brands with buyers.',
    isPrimary: false,
    businessProblem:
      'Siloed marketing tactics without cohesive creative direction lead to wasted spend and disconnected brand perception.',
    overview:
      'We orchestrate digital marketing strategy, campaign planning, and creative management. We align your brand aesthetics with commercial channels to ensure your marketing actively drives pipeline and long-term brand equity.',
    capabilities: [
      {
        name: 'Marketing Strategy & Positioning',
        description: 'Customer journey mapping, channel selection, competitive whitespace analysis, and growth roadmap design.',
      },
      {
        name: 'Creative Campaign Planning',
        description: 'Conceptualizing thematic product drops, seasonal pushes, and brand awareness campaigns with unified visuals.',
      },
      {
        name: 'Conversion-Focused Landing Pages',
        description: 'Dedicated post-click experiences tailored specifically to incoming traffic sources for optimal conversion.',
      },
      {
        name: 'Performance Review & Optimization',
        description: 'Transparent campaign reviews tracking engagement, inbound inquiries, and iterative creative improvements.',
      },
    ],
    process: [
      { step: '01', title: 'Audience & Channel Audit', description: 'Assessing historical performance, acquisition channels, and target buyer triggers.' },
      { step: '02', title: 'Campaign Architecture', description: 'Developing campaign themes, messaging angles, visual assets, and landing page wireframes.' },
      { step: '03', title: 'Asset Production & Distribution', description: 'Coordinating ad creative, copywriting, email sequences, and platform deployment.' },
      { step: '04', title: 'Review & Refinement', description: 'Analyzing conversion data and doubling down on winning creative angles.' },
    ],
    deliverables: [
      'Multi-Channel Growth Strategy Roadmap',
      'Campaign Creative Suites (Static & Motion)',
      'Optimized Inbound Landing Page Frameworks',
      'Monthly Campaign Performance Review Briefs',
    ],
    faqs: [
      {
        question: 'Do you guarantee specific conversion rates or revenue increases?',
        answer: 'No. As an honest studio, we do not make unsubstantiated or guaranteed performance claims. We focus on rigorous strategic execution, high-caliber creative assets, and disciplined testing.',
      },
      {
        question: 'How do you coordinate with our internal marketing team?',
        answer: 'We can act as an autonomous creative strike-team or seamlessly collaborate with your internal managers and agencies via structured review milestones.',
      },
    ],
  },
  {
    slug: 'influencer-ugc',
    title: 'Influencer Collaborations & UGC Campaigns',
    tagline: 'Authentic creator-led storytelling and strategic partnerships that build genuine affinity.',
    isPrimary: false,
    businessProblem:
      'Modern consumers ignore generic corporate advertisements. Scaling attention requires authentic creator advocacy paired with disciplined art direction.',
    overview:
      'We source, brief, and coordinate high-performing content creators and influencers. From conceptualizing user-generated content (UGC) ad variations to managing creator partnerships, we ensure content feels authentic while maintaining your brand’s visual standards.',
    capabilities: [
      {
        name: 'Creator Discovery & Vetting',
        description: 'Identifying and screening creators based on camera presence, authentic audience demographics, and brand alignment.',
      },
      {
        name: 'UGC Campaign Concepts & Hooks',
        description: 'Developing high-retention video formulas, opening hook scripts, demonstration angles, and lifestyle setups.',
      },
      {
        name: 'Creator Briefs & Direction',
        description: 'Providing creators with detailed creative guidelines, do-and-don’ts, product handling guides, and key talking points.',
      },
      {
        name: 'Content Post-Production & Formatting',
        description: 'Editing raw creator footage into dynamic 9:16 vertical videos with bespoke subtitles, music, and brand end-cards.',
      },
      {
        name: 'Influencer Partnership Coordination',
        description: 'Managing outreach, collaboration agreements, usage licensing terms, and content delivery timelines.',
      },
    ],
    process: [
      { step: '01', title: 'Campaign Concept & Creator Profile', description: 'Defining campaign angles, audience desires, and ideal creator traits.' },
      { step: '02', title: 'Creator Sourcing & Outreach', description: 'Curating a tailored creator roster and finalizing collaboration terms.' },
      { step: '03', title: 'Briefing & Production', description: 'Dispatching detailed briefs and coordinating product delivery for shooting.' },
      { step: '04', title: 'Editing & Asset Delivery', description: 'Reviewing raw footage, editing multiple hook variations, and delivering ready-to-deploy assets.' },
    ],
    deliverables: [
      'Comprehensive Creator Briefs & Script Frameworks',
      'Creator Rights & Commercial Licensing Documentation',
      'Library of Polished Vertical Video Assets (9:16 Format)',
      'Hook Variation Testing Suite & Performance Guidelines',
    ],
    faqs: [
      {
        question: 'How do you vet creators for our brand?',
        answer: 'We analyze creator delivery authenticity, production lighting, vocal clarity, and demographic resonance with your target audience, rather than relying on vanity follower counts.',
      },
      {
        question: 'Who owns the rights to the created content?',
        answer: 'All collaboration agreements include commercial usage rights structured specifically for your brand’s paid and organic channels.',
      },
    ],
  },
];
