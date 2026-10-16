import { Project } from '../types';

export const PROJECTS: Project[] = [
  {
    id: 'aurorae-skincare',
    slug: 'aurorae-skincare',
    title: 'Aurae Botanical Skincare',
    clientSubtitle: 'Concept Botanical Formulations & E-Commerce Flagship',
    category: 'web-design',
    categoryLabel: 'Website & Digital Commerce',
    year: '2026',
    isConcept: true,
    conceptLabel: 'CONCEPT STUDY',
    tagline: 'An obsidian-toned, fluid digital commerce experience for high-potency botanicals.',
    challenge:
      'Most luxury skincare platforms rely on generic white-space minimal templates that blur brands together. The challenge was crafting an art-directed digital flagship that communicates cellular biological extraction and tactile sensory indulgence through deliberate dark typography and fluid transitions.',
    solution:
      'Engineered a monolithic obsidian design architecture accented by luminous bioluminescent violet cues, macroscopic ingredient inspection cards, and an asynchronous headless checkout architecture designed for effortless conversion.',
    services: [
      'Digital Flagship Architecture',
      'Art-Directed UI/UX Design',
      'Interactive Ingredient Taxonomy',
      'Design Token Specification',
    ],
    deliverables: [
      'Interactive Web Experience (Desktop & Mobile)',
      'Design Token Specification Sheet',
      'Custom Product Interaction Micro-States',
      'Cart Drawer & Reservation Flow',
    ],
    colorPalette: [
      { hex: '#0B0B0F', name: 'Volcanic Obsidian' },
      { hex: '#1C1B26', name: 'Raw Basalt' },
      { hex: '#B65CFF', name: 'Bio-Luminescent Violet' },
      { hex: '#F5F3F8', name: 'Pure Chalk' },
    ],
    typography: [
      { role: 'Display Headlines', family: 'Space Grotesk', description: 'Engineered geometric authority with tight line tracking' },
      { role: 'Editorial Accents', family: 'Instrument Serif', description: 'Graceful botanical nuance on hero phrases' },
      { role: 'Body & Microcopy', family: 'Inter', description: 'Maximum legibility for formulation data' },
    ],
    visualHighlights: [
      {
        title: 'Tactile Formula Dossier',
        description: 'Macroscopic breakdown of active alpine plant enzymes and cellular hydration matrices.',
        mockupType: 'desktop-browser',
        accentColor: '#B65CFF',
      },
      {
        title: 'Single-Stage Mobile Flow',
        description: 'Streamlined checkout journey optimized for one-thumb completion on mobile devices.',
        mockupType: 'mobile-device',
        accentColor: '#D0A0FF',
      },
      {
        title: 'Monochrome Packaging Identity',
        description: 'Matte black fluted glass bottles with blind embossed typographic labels and violet safety seals.',
        mockupType: 'brand-collateral',
        accentColor: '#8B5CF6',
      },
    ],
    heroMockup: {
      title: 'AURAE BOTANICAL // SYSTEM 01',
      subtitle: 'Cellular Restoration Botanical Serum',
      designFocusLabel: 'Monochrome Obsidian Aesthetic · Fluid Micro-Interactions',
      accentHex: '#B65CFF',
    },
  },
  {
    id: 'kanso-hospitality',
    slug: 'kanso-hospitality',
    title: 'Kanso Alpine Pavilion',
    clientSubtitle: 'Concept Architectural Sanctuary & Booking Experience',
    category: 'web-design',
    categoryLabel: 'Hospitality & Spatial Web',
    year: '2026',
    isConcept: true,
    conceptLabel: 'CONCEPT STUDY',
    tagline: 'Silent luxury: a digital architectural journey through brutalist alpine serenity.',
    challenge:
      'High-end retreat websites often overwhelm visitors with complex booking engines and cluttered widgets. Kanso needed a digital environment reflecting its architectural ethos: deep silence, stone textures, and unhurried intentionality.',
    solution:
      'We designed an editorial narrative site featuring full-bleed spatial transitions, atmospheric ambient light grading, and a custom multi-step reservation drawer that feels like an invitation rather than a transactional booking engine.',
    services: [
      'Editorial Web Experience',
      'Digital Reservation UX',
      'Motion Choreography',
      'Spatial Visual Hierarchy',
    ],
    deliverables: [
      'Curated Room & Sanctuary Catalog',
      'Interactive Seasonal Availability Matrix',
      'Mobile Guest Concierge Interface',
      'Design System Guidelines',
    ],
    colorPalette: [
      { hex: '#08080B', name: 'Alpine Midnight' },
      { hex: '#171720', name: 'Chiseled Granite' },
      { hex: '#D0A0FF', name: 'Alpenglow Lavender' },
      { hex: '#A5A2B2', name: 'Morning Mist' },
    ],
    typography: [
      { role: 'Display Titles', family: 'Space Grotesk', description: 'Architectural clarity and geometric confidence' },
      { role: 'Body Copy', family: 'Inter', description: 'Quiet, balanced editorial narrative' },
    ],
    visualHighlights: [
      {
        title: 'Atmospheric Sanctuary Viewer',
        description: 'Dynamic daylight progression preview showcasing rooms at dawn, noon, and twilight.',
        mockupType: 'desktop-browser',
        accentColor: '#D0A0FF',
      },
      {
        title: 'Curated Itinerary Planner',
        description: 'Minimalist guest sequence planner coordinating thermal baths, guided ascents, and dining.',
        mockupType: 'mobile-device',
        accentColor: '#B65CFF',
      },
    ],
    heroMockup: {
      title: 'KANSO ARCHITECTURAL PAVILION',
      subtitle: 'Sanctuary 2,400m Above the Valais Alps',
      designFocusLabel: 'Brutalist Stone Palette · Editorial Spatial Flow',
      accentHex: '#D0A0FF',
    },
  },
  {
    id: 'verve-studios',
    slug: 'verve-studios',
    title: 'Verve Spatial Practice',
    clientSubtitle: 'Concept Portfolio & Archival System for International Architects',
    category: 'branding',
    categoryLabel: 'Brand Identity & Visual System',
    year: '2026',
    isConcept: true,
    conceptLabel: 'CONCEPT STUDY',
    tagline: 'Monochrome precision and asymmetric grid systems for a contemporary practice.',
    challenge:
      'Modern architectural practices require digital archives capable of showcasing massive master plans alongside delicate material swatches without visual clutter or clunky navigation.',
    solution:
      'Crafted a high-contrast typographic identity system anchored by custom monospace data tags, horizontal architectural panning, and modular case-study layout blocks that adapt seamlessly to portrait blueprints and panoramic renders.',
    services: [
      'Visual Identity System',
      'Brand Collateral & Typography',
      'Archival Index Layout',
      'Interactive Project Viewer',
    ],
    deliverables: [
      'Comprehensive Brand Guideline Manual',
      'Monograph & Presentation Templates',
      'Responsive Architectural Index',
      'Custom Iconography Set',
    ],
    colorPalette: [
      { hex: '#070709', name: 'Deep Space' },
      { hex: '#16161F', name: 'Architectural Slate' },
      { hex: '#B65CFF', name: 'Signal Violet' },
      { hex: '#F5F3F8', name: 'Engineered White' },
    ],
    typography: [
      { role: 'Brand Display', family: 'Space Grotesk', description: 'Sharp architectural presence' },
      { role: 'Technical Index', family: 'Space Mono', description: 'Coordinates, scale markers, and material specs' },
    ],
    visualHighlights: [
      {
        title: 'Master Plan Dynamic Split Grid',
        description: 'Scale comparison view showing structural framing alongside finished architectural photography.',
        mockupType: 'desktop-browser',
        accentColor: '#B65CFF',
      },
      {
        title: 'Exhibition Lookbook & Monograph',
        description: 'Linen-bound monograph typography layout with foil-stamped coordinates.',
        mockupType: 'brand-collateral',
        accentColor: '#8B5CF6',
      },
    ],
    heroMockup: {
      title: 'VERVE ARCHITECTURAL ARCHIVE',
      subtitle: 'Built Structures & Spatial Research',
      designFocusLabel: 'Swiss Grid Architecture · Typographic Discipline',
      accentHex: '#B65CFF',
    },
  },
  {
    id: 'solace-beverage',
    slug: 'solace-beverage',
    title: 'Solace Botanical Elixir',
    clientSubtitle: 'Concept Omnichannel Launch, UGC System & Digital Campaign',
    category: 'growth-marketing',
    categoryLabel: 'Growth & Social Campaign',
    year: '2026',
    isConcept: true,
    conceptLabel: 'CONCEPT STUDY',
    tagline: 'A creator-led visual marketing system built for authentic resonance and retention.',
    challenge:
      'Beverage brands launching in crowded retail and D2C spaces struggle with creative fatigue and low engagement. Solace needed an evergreen content framework combining creator authenticity with luxury brand polish.',
    solution:
      'Developed a modular UGC campaign playbook with distinct creator hooks, high-retention video templates, and a dynamic mobile landing page tailored for frictionless multi-pack delivery.',
    services: [
      'UGC Strategy & Creator Briefing Engine',
      'Short-Form Content System',
      'Conversion-Optimized Landing Page',
      'Paid Social Campaign Creative Suite',
    ],
    deliverables: [
      'Creator Sourcing & Production Guidelines',
      'Modular Video Creative Formats',
      'Mobile First Subscription Funnel',
      'Creative Testing Framework',
    ],
    colorPalette: [
      { hex: '#0A0A0E', name: 'Midnight Berry' },
      { hex: '#1D1A2B', name: 'Deep Indigo' },
      { hex: '#D0A0FF', name: 'Electric Lilac' },
      { hex: '#B65CFF', name: 'Spark Violet' },
    ],
    typography: [
      { role: 'Campaign Display', family: 'Space Grotesk', description: 'High-energy contemporary punch' },
      { role: 'Interface Prose', family: 'Inter', description: 'Clear nutritional breakdowns and subscription benefits' },
    ],
    visualHighlights: [
      {
        title: 'Vertical Creator Storyboard Engine',
        description: 'Hook formulas paired with stylized ingredient splash macro videography.',
        mockupType: 'mobile-device',
        accentColor: '#D0A0FF',
      },
      {
        title: 'Mobile D2C Subscription Funnel',
        description: 'Interactive flavor bundle builder with delivery frequency customization.',
        mockupType: 'desktop-browser',
        accentColor: '#B65CFF',
      },
    ],
    heroMockup: {
      title: 'SOLACE ADAPTOGENIC ELIXIR',
      subtitle: 'Creator-Led Launch Engine & Multi-Pack Funnel',
      designFocusLabel: 'Creator-First Video System · Frictionless D2C',
      accentHex: '#D0A0FF',
    },
  },
];
