import React, { useState } from 'react';
import { FormoraSculpture3D } from '../components/3d/FormoraSculpture3D';
import { FormoraMark } from '../components/brand/FormoraLogo';
import { ProjectMockupFrame } from '../components/portfolio/ProjectMockupFrame';
import { ProjectInquiryForm } from '../components/forms/ProjectInquiryForm';
import { PROJECTS } from '../data/projects';
import { SERVICES } from '../data/services';
import { 
  ArrowUpRight, 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  Code2, 
  Sparkles, 
  Compass, 
  ChevronRight,
  ShieldCheck,
  Zap,
  Target
} from 'lucide-react';

interface HomeViewProps {
  onNavigate: (path: string) => void;
  onOpenProject: (slug: string) => void;
  onOpenService: (slug: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onNavigate,
  onOpenProject,
  onOpenService,
}) => {
  const [activePillar, setActivePillar] = useState<number>(0);

  const pillars = [
    {
      index: '01',
      title: 'CREATIVE',
      heading: 'Distinctive identities and visual content that give brands a recognizable voice.',
      description:
        'We design visual architectures that command respect without screaming. From surgical typography and custom logomarks to modular design tokens, every aesthetic decision is rooted in commercial differentiation.',
      deliverables: ['Brand Identity Systems', 'Typographic Frameworks', 'Packaging & Monograph Design', 'Art Direction'],
      accentColor: '#B65CFF',
    },
    {
      index: '02',
      title: 'DIGITAL',
      heading: 'Thoughtfully designed websites and digital experiences built around real business needs.',
      description:
        'Our primary discipline: high-velocity digital flagships engineered with clean TypeScript, seamless responsiveness, and cinematic restraint. Built for real conversion, effortless navigation, and sub-second load times.',
      deliverables: ['Custom Web Flagships', 'Headless E-Commerce', 'Interactive 3D WebGL', 'High-Converting Landing Pages'],
      accentColor: '#D0A0FF',
    },
    {
      index: '03',
      title: 'GROWTH',
      heading: 'Content and marketing systems that help brands connect with their audiences.',
      description:
        'We orchestrate digital marketing and creator-led campaigns that bridge genuine human advocacy and quantitative rigor. Sourcing top creators, producing high-retention video creative, and testing multi-channel funnels.',
      deliverables: ['Creator-Led UGC Campaigns', 'Influencer Partnerships', 'Short-Form Video Production', 'Paid Social Creatives'],
      accentColor: '#8B5CF6',
    },
  ];

  const operatingPrinciples = [
    {
      number: '01',
      title: 'Strategy Before Decoration',
      description: 'We do not begin styling until we understand your commercial model, customer friction points, and distinct competitive whitespace.',
    },
    {
      number: '02',
      title: 'Design With Clear Purpose',
      description: 'Every layout grid, contrast choice, and interaction must serve readability, engagement, or direct user conversion.',
    },
    {
      number: '03',
      title: 'Detail-Conscious Execution',
      description: 'We obsess over typographic hierarchy, micro-interactions, responsive balance, and performance optimization across all viewports.',
    },
    {
      number: '04',
      title: 'Direct, Honest Communication',
      description: 'You work directly with the creative directors and engineers building your project. No layers of account managers or delayed handoffs.',
    },
    {
      number: '05',
      title: 'Defined Deliverables & Pricing',
      description: 'Scope, timelines, and milestones are transparently established upfront with structured review gates and zero hidden surprises.',
    },
    {
      number: '06',
      title: 'Thoughtful Ongoing Support',
      description: 'We don’t abandon you after launch. We offer continuous technical stewardship, security updates, and performance tuning.',
    },
  ];

  return (
    <div className="relative">
      
      {/* ================================================== */}
      {/* SECTION 1: CINEMATIC HERO                          */}
      {/* ================================================== */}
      <section className="relative min-h-[92vh] flex items-center pt-24 pb-16 overflow-hidden">
        {/* Ambient atmospheric backdrop */}
        <div 
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] pointer-events-none opacity-25 blur-3xl z-0"
          style={{ background: 'radial-gradient(circle, #B65CFF 0%, rgba(8, 8, 11, 0) 70%)' }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Bold Headline & Editorial Copy */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              
              {/* Eyebrow Label */}
              <div className="inline-flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B65CFF]" />
                <span className="text-xs font-mono tracking-[0.25em] text-[#B65CFF] uppercase font-semibold">
                  INDEPENDENT DIGITAL & CREATIVE STUDIO
                </span>
              </div>

              {/* Bold Headline with Restrained Violet Emphasis */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F5F3F8] leading-[1.08] text-balance">
                WE BUILD DIGITAL <br className="hidden sm:inline" />
                EXPERIENCES THAT <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5F3F8] via-[#D0A0FF] to-[#B65CFF]">
                  MAKE AN IMPRESSION.
                </span>
              </h1>

              {/* Supporting Copy */}
              <p className="text-base sm:text-lg text-[#A5A2B2] max-w-xl leading-relaxed">
                Formora creates distinctive websites, compelling brand experiences, and creative marketing systems that help ambitious businesses move forward.
              </p>

              {/* Primary & Secondary CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  type="button"
                  onClick={() => onNavigate('/contact')}
                  className="px-7 py-4 text-xs font-semibold tracking-wider text-black bg-[#F5F3F8] hover:bg-[#B65CFF] hover:text-black rounded-xl transition-all duration-200 shadow-xl flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <span>LET’S BUILD SOMETHING</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>

                <button
                  type="button"
                  onClick={() => onNavigate('/work')}
                  className="px-6 py-4 text-xs font-semibold tracking-wider text-[#F5F3F8] hover:text-[#B65CFF] bg-[#101016] hover:bg-[#171720] border border-[#F5F3F8]/10 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <span>EXPLORE OUR WORK</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>

              {/* Brand Pillars Metadata Bar */}
              <div className="pt-8 border-t border-[#F5F3F8]/10 flex flex-wrap items-center gap-6 text-xs font-mono text-[#A5A2B2]">
                <div className="flex items-center gap-2">
                  <span className="text-[#B65CFF] font-semibold">01</span>
                  <span>CREATIVE</span>
                </div>
                <span className="text-neutral-700">/</span>
                <div className="flex items-center gap-2">
                  <span className="text-[#B65CFF] font-semibold">02</span>
                  <span>DIGITAL</span>
                </div>
                <span className="text-neutral-700">/</span>
                <div className="flex items-center gap-2">
                  <span className="text-[#B65CFF] font-semibold">03</span>
                  <span>GROWTH</span>
                </div>
              </div>
            </div>

            {/* Right Column: Signature 3D Brand Sculpture */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <div className="w-full max-w-[500px] h-[480px] sm:h-[540px] relative rounded-3xl bg-[#0B0B10]/60 border border-[#F5F3F8]/5 shadow-2xl backdrop-blur-sm overflow-hidden flex items-center justify-center">
                <FormoraSculpture3D enableInteraction={true} />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* SECTION 2: BRAND STATEMENT                         */}
      {/* ================================================== */}
      <section className="py-24 sm:py-32 border-y border-[#F5F3F8]/10 bg-[#0A0A0E] relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="text-xs font-mono tracking-[0.25em] text-[#B65CFF] uppercase">
              STUDIO PHILOSOPHY
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F5F3F8] leading-[1.2] text-balance">
            “GOOD DESIGN GETS ATTENTION. <br className="hidden sm:inline" />
            GREAT DIGITAL EXPERIENCES <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D0A0FF] to-[#B65CFF]">
              GIVE PEOPLE A REASON TO STAY.”
            </span>
          </h2>

          <p className="mt-8 text-base text-[#A5A2B2] max-w-2xl mx-auto leading-relaxed">
            In a digital environment saturated with forgettable templates and cookie-cutter layouts, true distinction is born from restraint, architectural balance, and uncompromising technical precision.
          </p>
        </div>
      </section>

      {/* ================================================== */}
      {/* SECTION 3: THE THREE PILLARS                       */}
      {/* ================================================== */}
      <section className="py-24 sm:py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-[#F5F3F8]/10">
            <div>
              <span className="text-xs font-mono tracking-widest text-[#B65CFF] uppercase block mb-2">
                FOUNDATIONAL ARCHITECTURE
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#F5F3F8] tracking-tight">
                The Three Pillars of Formora
              </h2>
            </div>
            <p className="text-sm text-[#A5A2B2] max-w-md">
              Bridging the gap between aesthetic elevation and commercial growth under one disciplined roof.
            </p>
          </div>

          {/* Interactive Three Pillars System */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Pillar Selector Column */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              {pillars.map((pillar, idx) => {
                const isActive = activePillar === idx;
                return (
                  <button
                    key={pillar.title}
                    type="button"
                    onClick={() => setActivePillar(idx)}
                    className={`p-6 rounded-2xl text-left border transition-all duration-300 cursor-pointer flex flex-col gap-3 ${
                      isActive
                        ? 'bg-[#171720] border-[#B65CFF]/60 shadow-xl'
                        : 'bg-[#101016] border-[#F5F3F8]/5 hover:border-[#F5F3F8]/20 text-[#A5A2B2]'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono tracking-widest text-[#B65CFF]">
                        PILLAR // {pillar.index}
                      </span>
                      <span className={`text-xs font-mono ${isActive ? 'text-[#F5F3F8]' : 'text-neutral-600'}`}>
                        {isActive ? 'ACTIVE VIEW' : 'EXPAND'}
                      </span>
                    </div>

                    <h3 className={`text-2xl font-bold tracking-tight ${isActive ? 'text-[#F5F3F8]' : 'text-neutral-400'}`}>
                      {pillar.title}
                    </h3>

                    <p className="text-xs text-[#A5A2B2] line-clamp-2 leading-relaxed">
                      {pillar.heading}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Active Pillar Deep Detail Showcase */}
            <div className="lg:col-span-7 bg-[#101016] border border-[#F5F3F8]/10 rounded-3xl p-8 sm:p-12 flex flex-col justify-between relative overflow-hidden">
              <div 
                className="absolute top-0 right-0 w-80 h-80 rounded-full pointer-events-none opacity-20 blur-3xl"
                style={{ background: `radial-gradient(circle, ${pillars[activePillar].accentColor} 0%, transparent 70%)` }}
              />

              <div className="space-y-6 relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#171720] border border-white/10 text-xs font-mono text-[#B65CFF]">
                  <span>FORMORA CORE CAPABILITY</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-[#F5F3F8] tracking-tight leading-snug">
                  {pillars[activePillar].heading}
                </h3>

                <p className="text-sm sm:text-base text-[#A5A2B2] leading-relaxed">
                  {pillars[activePillar].description}
                </p>

                <div className="pt-6 border-t border-[#F5F3F8]/10">
                  <span className="text-xs font-mono tracking-widest text-[#F5F3F8] uppercase block mb-4">
                    Core Deliverables & Standards
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {pillars[activePillar].deliverables.map((item) => (
                      <div key={item} className="flex items-center gap-2 text-xs text-[#A5A2B2]">
                        <CheckCircle2 className="w-4 h-4 text-[#B65CFF] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-[#F5F3F8]/10 flex items-center justify-between mt-8 relative z-10">
                <span className="text-xs font-mono text-[#A5A2B2]">
                  EXPLORE {pillars[activePillar].title} METHODOLOGY
                </span>
                <button
                  type="button"
                  onClick={() => onNavigate('/services')}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-[#F5F3F8] hover:text-[#B65CFF] transition-colors"
                >
                  <span>VIEW ALL SERVICES</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* SECTION 4: SELECTED WORK (Editorial Portfolio)     */}
      {/* ================================================== */}
      <section className="py-24 sm:py-32 bg-[#0A0A0E] border-t border-[#F5F3F8]/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-[#F5F3F8]/10">
            <div>
              <div className="inline-flex items-center gap-2 mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B65CFF]" />
                <span className="text-xs font-mono tracking-widest text-[#B65CFF] uppercase font-semibold">
                  PORTFOLIO & CASE STUDIES
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#F5F3F8] tracking-tight">
                Selected Work & Concepts
              </h2>
            </div>
            
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <span className="text-xs text-[#A5A2B2] max-w-xs">
                As a new studio, we showcase clearly labeled concept studies demonstrating our creative caliber and technical rigor.
              </span>
              <button
                type="button"
                onClick={() => onNavigate('/work')}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#171720] border border-white/10 text-xs font-medium text-[#F5F3F8] hover:text-[#B65CFF] transition-colors whitespace-nowrap self-start"
              >
                <span>VIEW WORK INDEX</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Alternating Editorial Portfolio Showcase */}
          <div className="space-y-20">
            {PROJECTS.map((project, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div 
                  key={project.id}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
                >
                  {/* Visual Preview Frame */}
                  <div className={`lg:col-span-7 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div 
                      onClick={() => onOpenProject(project.slug)}
                      className="cursor-pointer group"
                    >
                      <ProjectMockupFrame project={project} />
                    </div>
                  </div>

                  {/* Project Metadata & Brief */}
                  <div className={`lg:col-span-5 flex flex-col gap-4 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono text-[#B65CFF] tracking-wider uppercase font-semibold">
                        {project.categoryLabel}
                      </span>
                      <span className="text-neutral-600">·</span>
                      <span className="text-[11px] font-mono text-[#A5A2B2] uppercase">
                        {project.conceptLabel}
                      </span>
                    </div>

                    <h3 
                      onClick={() => onOpenProject(project.slug)}
                      className="text-2xl sm:text-3xl font-bold text-[#F5F3F8] hover:text-[#B65CFF] transition-colors tracking-tight cursor-pointer"
                    >
                      {project.title}
                    </h3>

                    <p className="text-sm text-[#A5A2B2] leading-relaxed">
                      {project.tagline}
                    </p>

                    <div className="py-2">
                      <span className="text-xs font-mono text-neutral-400 block mb-2 uppercase">
                        Creative Challenge
                      </span>
                      <p className="text-xs text-[#A5A2B2] leading-relaxed line-clamp-3">
                        {project.challenge}
                      </p>
                    </div>

                    {/* Services Tags (Clean typography with separators, compliant with Zero-Pill) */}
                    <div className="flex flex-wrap items-center gap-2 text-xs text-[#A5A2B2] pt-2 border-t border-[#F5F3F8]/10">
                      {project.services.slice(0, 3).map((s, i) => (
                        <React.Fragment key={s}>
                          <span>{s}</span>
                          {i < 2 && <span className="text-neutral-600">·</span>}
                        </React.Fragment>
                      ))}
                    </div>

                    <div className="pt-2">
                      <button
                        type="button"
                        onClick={() => onOpenProject(project.slug)}
                        className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#F5F3F8] hover:text-[#B65CFF] transition-colors group cursor-pointer"
                      >
                        <span>VIEW FULL CASE STUDY</span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ================================================== */}
      {/* SECTION 5: SERVICES OVERVIEW                       */}
      {/* ================================================== */}
      <section className="py-24 sm:py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-[#F5F3F8]/10">
            <div>
              <span className="text-xs font-mono tracking-widest text-[#B65CFF] uppercase block mb-2">
                WHAT WE DO
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#F5F3F8] tracking-tight">
                Interconnected Digital Services
              </h2>
            </div>
            <p className="text-sm text-[#A5A2B2] max-w-md">
              Led by bespoke website design and engineering, complemented by full-suite branding and growth marketing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SERVICES.map((service) => (
              <div
                key={service.slug}
                className={`p-8 sm:p-10 rounded-3xl border flex flex-col justify-between transition-all duration-300 relative overflow-hidden group ${
                  service.isPrimary
                    ? 'bg-[#12121A] border-[#B65CFF]/40 shadow-2xl'
                    : 'bg-[#101016] border-[#F5F3F8]/10 hover:border-[#F5F3F8]/30'
                }`}
              >
                {service.isPrimary && (
                  <div className="absolute top-6 right-6">
                    <span className="text-[10px] font-mono tracking-wider px-3 py-1 rounded-full bg-[#B65CFF]/15 border border-[#B65CFF]/40 text-[#B65CFF] uppercase font-semibold">
                      PRIMARY DISCIPLINE
                    </span>
                  </div>
                )}

                <div className="space-y-4">
                  <span className="text-xs font-mono text-[#B65CFF] tracking-wider uppercase">
                    SERVICE // 0{SERVICES.indexOf(service) + 1}
                  </span>

                  <h3 className="text-2xl font-bold text-[#F5F3F8] tracking-tight">
                    {service.title}
                  </h3>

                  <p className="text-sm text-[#A5A2B2] leading-relaxed">
                    {service.tagline}
                  </p>

                  <div className="pt-4 border-t border-[#F5F3F8]/10 space-y-2">
                    <span className="text-[11px] font-mono text-neutral-400 uppercase block mb-2">
                      Key Capabilities
                    </span>
                    <ul className="space-y-2">
                      {service.capabilities.slice(0, 3).map((cap) => (
                        <li key={cap.name} className="flex items-start gap-2 text-xs text-[#A5A2B2]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#B65CFF] mt-1 shrink-0" />
                          <span>
                            <strong className="text-[#F5F3F8] font-medium">{cap.name}:</strong> {cap.description}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-8 border-t border-[#F5F3F8]/10 flex items-center justify-between mt-8">
                  <button
                    type="button"
                    onClick={() => onOpenService(service.slug)}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-[#F5F3F8] hover:text-[#B65CFF] transition-colors group"
                  >
                    <span>SERVICE DETAILS & FAQS</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </button>

                  <button
                    type="button"
                    onClick={() => onNavigate('/contact')}
                    className="text-xs font-mono text-[#A5A2B2] hover:text-[#F5F3F8] transition-colors"
                  >
                    INQUIRE →
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================================================== */}
      {/* SECTION 6: PROCESS (4-Stage Sequence)              */}
      {/* ================================================== */}
      <section className="py-24 sm:py-32 bg-[#0A0A0E] border-y border-[#F5F3F8]/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-xs font-mono tracking-widest text-[#B65CFF] uppercase block mb-2">
              METHODOLOGY
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#F5F3F8] tracking-tight">
              A Four-Stage Production Sequence
            </h2>
            <p className="mt-4 text-sm text-[#A5A2B2] leading-relaxed">
              Transparent, milestone-governed workflow eliminating guesswork and ensuring rigorous execution from day one.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'DISCOVER',
                description: 'Understand the business, audience, objectives, and functional requirements through focused stakeholder interviews.',
              },
              {
                step: '02',
                title: 'DEFINE',
                description: 'Develop the technical architecture, content structure, visual art direction, and exact milestone scope.',
              },
              {
                step: '03',
                title: 'CREATE',
                description: 'Design, write, build, test, and coordinate deliverables across interactive prototypes and production code.',
              },
              {
                step: '04',
                title: 'LAUNCH & GROW',
                description: 'Deploy the work globally, transfer project assets, and initiate ongoing support and growth campaigns.',
              },
            ].map((st, i) => (
              <div 
                key={st.step}
                className="p-6 rounded-2xl bg-[#101016] border border-[#F5F3F8]/5 flex flex-col justify-between relative group hover:border-[#B65CFF]/30 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-lg font-mono text-[#B65CFF] font-bold">
                      {st.step}
                    </span>
                    <span className="text-[10px] font-mono text-neutral-600">
                      STAGE {i + 1} OF 4
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#F5F3F8] tracking-tight mb-3">
                    {st.title}
                  </h3>

                  <p className="text-xs text-[#A5A2B2] leading-relaxed">
                    {st.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#F5F3F8]/10 text-[11px] font-mono text-[#A5A2B2]">
                  Milestone Gate Review
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================================================== */}
      {/* SECTION 7: WHY FORMORA (Credible Operating Ethos)  */}
      {/* ================================================== */}
      <section className="py-24 sm:py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
            <div className="lg:col-span-5">
              <span className="text-xs font-mono tracking-widest text-[#B65CFF] uppercase block mb-2">
                OPERATING PRINCIPLES
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#F5F3F8] tracking-tight">
                Why Ambitious Brands Partner With Us
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="text-base text-[#A5A2B2] leading-relaxed">
                We are an independent studio building our legacy on precision and results. No inflated team overhead, no fabricated vanity metrics, and no boilerplate templates. Just dedicated creative and technical craft.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {operatingPrinciples.map((op) => (
              <div 
                key={op.number}
                className="p-6 rounded-2xl bg-[#101016] border border-[#F5F3F8]/5 hover:border-[#B65CFF]/20 transition-all duration-300"
              >
                <span className="text-xs font-mono text-[#B65CFF] block mb-3">
                  PRINCIPLE // {op.number}
                </span>
                <h4 className="text-lg font-bold text-[#F5F3F8] mb-2">
                  {op.title}
                </h4>
                <p className="text-xs text-[#A5A2B2] leading-relaxed">
                  {op.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================================================== */}
      {/* SECTION 8: STUDIO STATEMENT                        */}
      {/* ================================================== */}
      <section className="py-24 sm:py-32 bg-[#0E0E14] border-t border-[#F5F3F8]/10 text-center relative overflow-hidden">
        <div 
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            background: 'radial-gradient(circle at center, rgba(182, 92, 255, 0.2) 0%, transparent 70%)',
          }}
        />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="w-12 h-12 rounded-2xl bg-[#171720] border border-white/10 flex items-center justify-center mx-auto mb-8 shadow-xl">
            <FormoraMark size={24} />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F5F3F8] leading-tight text-balance">
            “WE BELIEVE A BRAND <br />
            SHOULD FEEL AS GOOD <br />
            <span className="text-[#B65CFF]">AS IT LOOKS.”</span>
          </h2>

          <p className="mt-8 text-base sm:text-lg text-[#A5A2B2] max-w-2xl mx-auto leading-relaxed">
            Formora brings creative thinking and digital execution together to help businesses show up with clarity, confidence, and consistency.
          </p>

          <div className="mt-8">
            <button
              type="button"
              onClick={() => onNavigate('/studio')}
              className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#F5F3F8] hover:text-[#B65CFF] transition-colors"
            >
              <span>DISCOVER OUR STUDIO ETHOS</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* SECTION 9: FINAL CONVERSION CTA                    */}
      {/* ================================================== */}
      <section className="py-24 sm:py-32 relative bg-[#08080B] border-t border-[#F5F3F8]/10 overflow-hidden">
        {/* Violet radial glow */}
        <div 
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] pointer-events-none opacity-20 blur-3xl z-0"
          style={{ background: 'radial-gradient(circle, #B65CFF 0%, transparent 70%)' }}
        />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-xs font-mono tracking-widest text-[#B65CFF] uppercase block mb-3 font-semibold">
            INITIATE PARTNERSHIP
          </span>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#F5F3F8] tracking-tight leading-[1.1] mb-6">
            YOUR NEXT CHAPTER <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5F3F8] via-[#D0A0FF] to-[#B65CFF]">
              STARTS HERE.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#A5A2B2] max-w-xl mx-auto leading-relaxed mb-10">
            Tell us what you're building. Let's explore how Formora can help you establish an unforgettable digital presence.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => onNavigate('/contact')}
              className="w-full sm:w-auto px-8 py-4 text-xs font-semibold tracking-wider text-black bg-[#F5F3F8] hover:bg-[#B65CFF] hover:text-black rounded-xl transition-all shadow-xl flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>START A PROJECT</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              type="button"
              onClick={() => onNavigate('/contact')}
              className="w-full sm:w-auto px-7 py-4 text-xs font-semibold tracking-wider text-[#A5A2B2] hover:text-[#F5F3F8] bg-[#101016] border border-[#F5F3F8]/10 rounded-xl transition-colors cursor-pointer"
            >
              CONTACT THE STUDIO
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
