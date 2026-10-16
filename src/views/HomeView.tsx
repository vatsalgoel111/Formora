import React, { useState, useEffect } from 'react';
import { FormoraSculpture3D } from '../components/3d/FormoraSculpture3D';
import { FormoraMark } from '../components/brand/FormoraLogo';
import { ProjectMockupFrame } from '../components/portfolio/ProjectMockupFrame';
import { ScrollReveal } from '../components/common/ScrollReveal';
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
  const [heroMounted, setHeroMounted] = useState<boolean>(false);

  useEffect(() => {
    // Quick, elegant hero entrance
    const timer = setTimeout(() => setHeroMounted(true), 50);
    return () => clearTimeout(timer);
  }, []);

  const pillars = [
    {
      index: '01',
      title: 'CREATIVE',
      heading: 'Distinctive visual identities and storytelling that give brands an unmistakable voice.',
      description:
        'We design visual architectures that command respect through precision and restraint. From surgical typography and custom monograms to comprehensive brand guidelines, every aesthetic decision is rooted in commercial differentiation.',
      deliverables: ['Brand Identity Systems', 'Typography & Color Frameworks', 'Packaging & Monograph Design', 'Creative Direction'],
      accentColor: '#B65CFF',
    },
    {
      index: '02',
      title: 'DIGITAL',
      heading: 'Thoughtfully engineered websites and digital experiences built around real business objectives.',
      description:
        'Our primary discipline: high-velocity digital flagships engineered with modern TypeScript, accessible semantics, and cinematic restraint. Built for real conversion, effortless navigation, and intuitive responsiveness.',
      deliverables: ['Custom Web Flagships', 'Headless Commerce Experiences', 'Interactive 3D WebGL', 'High-Converting Landing Pages'],
      accentColor: '#D0A0FF',
    },
    {
      index: '03',
      title: 'GROWTH',
      heading: 'Content and marketing systems that help brands connect with their audiences.',
      description:
        'We orchestrate digital marketing, content writing, and creator-led campaigns that bridge genuine human advocacy and commercial rigor. Sourcing aligned creators, producing high-retention video creative, and testing multi-channel funnels.',
      deliverables: ['Creator-Led UGC Campaigns', 'Social Media Management', 'Strategic Copywriting', 'Multi-Channel Ad Creative'],
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
      title: 'Clear Scope & Deliverables',
      description: 'Scope, timelines, and milestones are transparently established upfront through collaborative discovery, ensuring clear expectations without ambiguity.',
    },
    {
      number: '06',
      title: 'Thoughtful Ongoing Support',
      description: 'We don’t abandon you after launch. We offer continuous technical stewardship, security updates, and performance tuning.',
    },
  ];

  return (
    <div className="relative overflow-hidden">
      
      {/* ================================================== */}
      {/* SECTION 1: CINEMATIC HERO                          */}
      {/* ================================================== */}
      <section className="relative min-h-[88vh] flex flex-col justify-between pt-24 sm:pt-28 pb-12 overflow-hidden border-b border-[#F5F3F8]/10">
        
        {/* Subtle Architectural Grid Lines */}
        <div className="absolute inset-0 bg-grid-subtle opacity-30 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full my-auto">
          
          {/* Top Live Studio Status Strip */}
          <div 
            className={`flex flex-wrap items-center justify-between pb-6 mb-8 border-b border-[#F5F3F8]/10 text-xs font-mono text-[#A5A2B2] gap-4 transition-all duration-700 ${
              heroMounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
            }`}
          >
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-[#B65CFF]" />
              <span className="text-[#F5F3F8] tracking-widest uppercase font-medium">
                INDEPENDENT DIGITAL & CREATIVE STUDIO
              </span>
            </div>
            <div className="hidden sm:flex items-center gap-6">
              <span>WORLDWIDE DIGITAL PRACTICE</span>
              <span className="text-neutral-600">·</span>
              <span className="text-[#B65CFF]">BUILT TO MAKE AN IMPRESSION</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column: Bold Headline & Editorial Copy */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              
              {/* Bold Headline with Restrained Violet Accent */}
              <h1 
                className={`text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F5F3F8] leading-[1.08] text-balance transition-all duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] delay-75 ${
                  heroMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3.5'
                }`}
              >
                WE BUILD DIGITAL <br className="hidden sm:inline" />
                EXPERIENCES THAT <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5F3F8] via-[#D0A0FF] to-[#B65CFF]">
                  MAKE AN IMPRESSION.
                </span>
              </h1>

              {/* Supporting Copy */}
              <p 
                className={`text-base sm:text-lg text-[#A5A2B2] max-w-xl leading-relaxed transition-all duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] delay-150 ${
                  heroMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
                }`}
              >
                Formora creates distinctive websites, compelling brand experiences, and creative marketing systems that help ambitious businesses move forward.
              </p>

              {/* Primary & Secondary CTAs */}
              <div 
                className={`pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 transition-all duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] delay-250 ${
                  heroMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                }`}
              >
                <button
                  type="button"
                  onClick={() => onNavigate('/contact')}
                  className="px-7 py-4 text-xs font-semibold tracking-wider text-black bg-[#F5F3F8] hover:bg-[#B65CFF] hover:text-black hover:scale-[1.02] active:scale-[0.98] active:translate-y-0.5 rounded-xl transition-all duration-200 shadow-xl flex items-center justify-center gap-2 group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B65CFF]"
                >
                  <span>LET’S BUILD SOMETHING</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </button>

                <button
                  type="button"
                  onClick={() => onNavigate('/work')}
                  className="px-6 py-4 text-xs font-semibold tracking-wider text-[#F5F3F8] hover:text-[#B65CFF] bg-[#101016] hover:bg-[#171720] hover:scale-[1.02] active:scale-[0.98] active:translate-y-0.5 border border-[#F5F3F8]/10 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <span>EXPLORE OUR WORK</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>

              {/* Core Disciplines Metadata Strip */}
              <div 
                className={`pt-6 border-t border-[#F5F3F8]/10 flex flex-wrap items-center gap-6 text-xs font-mono text-[#A5A2B2] transition-all duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] delay-350 ${
                  heroMounted ? 'opacity-100 translate-y-0' : 'opacity-0'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="text-[#B65CFF] font-semibold">01</span>
                  <span>CREATIVE / Brand Identity</span>
                </div>
                <span className="text-neutral-700">·</span>
                <div className="flex items-center gap-2">
                  <span className="text-[#B65CFF] font-semibold">02</span>
                  <span>DIGITAL / Flagship Websites</span>
                </div>
                <span className="text-neutral-700">·</span>
                <div className="flex items-center gap-2">
                  <span className="text-[#B65CFF] font-semibold">03</span>
                  <span>GROWTH / Creator Campaigns</span>
                </div>
              </div>
            </div>

            {/* Right Column: Signature 3D Brand Sculpture */}
            <div 
              className={`lg:col-span-5 relative flex items-center justify-center transition-all duration-800 ease-[cubic-bezier(0.16,1,0.3,1)] delay-200 ${
                heroMounted ? 'opacity-100 scale-100' : 'opacity-0 scale-[0.98]'
              }`}
            >
              <div className="w-full h-[460px] sm:h-[520px] lg:h-[580px] relative rounded-3xl bg-gradient-to-b from-[#101018]/60 to-[#0A0A0F]/80 border border-[#F5F3F8]/[0.08] shadow-[0_20px_50px_rgba(0,0,0,0.6)] backdrop-blur-md overflow-hidden flex items-center justify-center group">
                {/* Subtle corner registration marks for architectural precision */}
                <span className="absolute top-4 left-4 text-[10px] font-mono text-[#A5A2B2]/30 select-none pointer-events-none">+</span>
                <span className="absolute top-4 right-4 text-[10px] font-mono text-[#A5A2B2]/30 select-none pointer-events-none">+</span>
                <span className="absolute bottom-4 left-4 text-[10px] font-mono text-[#A5A2B2]/30 select-none pointer-events-none">+</span>
                <span className="absolute bottom-4 right-4 text-[10px] font-mono text-[#A5A2B2]/30 select-none pointer-events-none">+</span>

                <FormoraSculpture3D enableInteraction={true} />
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Hero Anchor Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-10 pt-6 border-t border-[#F5F3F8]/5 flex flex-wrap items-center justify-between text-xs font-mono text-neutral-500 gap-4">
          <span>GLOBAL PRACTICE · AMERICAS & EMEA</span>
          <span className="text-neutral-400">SCROLL TO EXPLORE ↓</span>
          <span>EST. 2026</span>
        </div>
      </section>

      {/* ================================================== */}
      {/* SECTION 2: BRAND STATEMENT                         */}
      {/* ================================================== */}
      <section className="py-20 sm:py-28 border-b border-[#F5F3F8]/10 bg-[#0A0A0E] relative overflow-hidden">
        <ScrollReveal className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="text-xs font-mono tracking-[0.25em] text-[#B65CFF] uppercase font-medium">
              CORE STUDIO PHILOSOPHY
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
        </ScrollReveal>
      </section>

      {/* ================================================== */}
      {/* SECTION 3: THE THREE PILLARS                       */}
      {/* ================================================== */}
      <section className="py-20 sm:py-28 relative border-b border-[#F5F3F8]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <ScrollReveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-[#F5F3F8]/10">
            <div>
              <span className="text-xs font-mono tracking-widest text-[#B65CFF] uppercase block mb-2 font-medium">
                FOUNDATIONAL ARCHITECTURE
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#F5F3F8] tracking-tight">
                The Three Pillars of Formora
              </h2>
            </div>
            <p className="text-sm text-[#A5A2B2] max-w-md">
              Bridging the gap between aesthetic elevation and commercial growth under one disciplined roof.
            </p>
          </ScrollReveal>

          {/* Interactive Three Pillars System */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Pillar Selector Column */}
            <div className="lg:col-span-5 flex flex-col gap-3.5">
              {pillars.map((pillar, idx) => {
                const isActive = activePillar === idx;
                return (
                  <button
                    key={pillar.title}
                    type="button"
                    onClick={() => setActivePillar(idx)}
                    className={`p-6 rounded-2xl text-left border transition-all duration-300 cursor-pointer flex flex-col gap-2.5 hover:translate-x-1 active:scale-[0.99] ${
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
            <div className="lg:col-span-7 bg-[#101016] border border-[#F5F3F8]/10 rounded-3xl p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden transition-all duration-300">
              <div className="space-y-6 relative z-10 transition-opacity duration-300">
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
                  className="inline-flex items-center gap-2 text-xs font-semibold text-[#F5F3F8] hover:text-[#B65CFF] hover:translate-x-1 transition-all cursor-pointer group"
                >
                  <span>VIEW ALL SERVICES</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* SECTION 4: SELECTED BUSINESS WEBSITES               */}
      {/* ================================================== */}
      <section className="py-20 sm:py-28 bg-[#0A0A0E] border-b border-[#F5F3F8]/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header as specified */}
          <ScrollReveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-[#F5F3F8]/10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B65CFF]" />
                <span className="text-xs font-mono tracking-widest text-[#B65CFF] uppercase font-semibold">
                  SELECTED BUSINESS WEBSITES
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F5F3F8] tracking-tight leading-tight">
                Digital Experiences Built for Businesses.
              </h2>
              <p className="mt-4 text-sm sm:text-base text-[#A5A2B2] leading-relaxed max-w-2xl">
                Explore business-focused website concepts created for brands across personal branding, interior design, celebrations, and hospitality. Each project demonstrates how thoughtful digital design can present a business professionally and make it easier for customers to connect.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 shrink-0">
              <button
                type="button"
                onClick={() => onNavigate('/work')}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#171720] hover:bg-[#20202E] hover:scale-[1.02] active:scale-[0.98] active:translate-y-0.5 border border-white/10 text-xs font-semibold text-[#F5F3F8] hover:text-[#B65CFF] transition-all whitespace-nowrap cursor-pointer shadow-lg group"
              >
                <span>VIEW ALL 5 WEBSITES</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </div>
          </ScrollReveal>

          {/* Editorial Portfolio Showcase */}
          <div className="space-y-20 sm:space-y-24">
            
            {/* FEATURED LEAD PROJECT (CRÜ Communications) */}
            {PROJECTS.slice(0, 1).map((project) => (
              <ScrollReveal key={project.id} delay={100}>
                <div 
                  className="p-6 sm:p-10 rounded-3xl bg-gradient-to-b from-[#12121A] to-[#0A0A0E] border border-[#FF4D00]/20 hover:border-[#FF4D00]/40 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(255,77,0,0.08)] transition-all duration-300 ease-out shadow-2xl relative overflow-hidden group"
                >
                  {/* Subtle Amber Glow Accent with breathing pulse */}
                  <div 
                    className="absolute -top-32 -right-32 w-80 h-80 rounded-full opacity-15 blur-3xl pointer-events-none animate-pulse-slow"
                    style={{ background: '#FF4D00' }}
                  />

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    {/* Left Column: Interactive Mockup Preview */}
                    <div className="lg:col-span-7">
                      <ProjectMockupFrame project={project} />
                    </div>

                    {/* Right Column: Lead Metadata & Real Capabilities */}
                    <div className="lg:col-span-5 flex flex-col gap-5">
                      <div className="flex flex-wrap items-center gap-2.5">
                        <span className="px-2.5 py-1 rounded-full bg-[#FF4D00]/15 border border-[#FF4D00]/30 text-[11px] font-mono text-[#FF4D00] font-semibold uppercase">
                          {project.conceptLabel}
                        </span>
                        <span className="text-neutral-600">·</span>
                        <span className="text-xs font-mono text-[#A5A2B2]">
                          {project.businessCategory}
                        </span>
                      </div>

                      <div>
                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#F5F3F8] tracking-tight">
                          {project.title}
                        </h3>
                        <span className="text-xs font-mono text-[#A5A2B2] block mt-1">
                          {project.clientSubtitle}
                        </span>
                      </div>

                      <p className="text-sm text-[#A5A2B2] leading-relaxed">
                        {project.description}
                      </p>

                      {/* Verified Website Capabilities */}
                      <div className="space-y-2 pt-2 border-t border-[#F5F3F8]/10">
                        <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest block">
                          Verified Website Highlights
                        </span>
                        {project.verifiedFeatures.slice(0, 3).map((feat) => (
                          <div key={feat} className="flex items-center gap-2 text-xs text-[#E5E0D8]">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#FF4D00] shrink-0" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>

                      {/* Primary Actions */}
                      <div className="pt-3 flex flex-wrap items-center gap-4">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-5 py-2.5 rounded-xl bg-[#FF4D00] hover:bg-[#E04400] text-black font-bold text-xs tracking-wider inline-flex items-center gap-2 transition-all duration-200 shadow-lg hover:shadow-[#FF4D00]/25 hover:scale-[1.02] active:scale-[0.98] active:translate-y-0.5 cursor-pointer group/btn"
                        >
                          <span>VIEW LIVE WEBSITE</span>
                          <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                        </a>

                        <button
                          type="button"
                          onClick={() => onOpenProject(project.slug)}
                          className="px-4 py-2.5 rounded-xl bg-[#171720] hover:bg-[#20202E] border border-white/10 text-xs font-medium text-[#F5F3F8] hover:text-[#FF4D00] hover:scale-[1.02] active:scale-[0.98] inline-flex items-center gap-1.5 transition-all duration-200 cursor-pointer group/btn"
                        >
                          <span>Project Overview</span>
                          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-1" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}

            {/* SUPPORTING PROJECTS (2 & 3: Interior Design Disciplines) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
              {PROJECTS.slice(1, 3).map((project, idx) => (
                <ScrollReveal key={project.id} delay={100 + idx * 100}>
                  <div 
                    className="p-6 sm:p-8 rounded-3xl bg-[#101016] border border-[#F5F3F8]/10 hover:border-[#B65CFF]/40 hover:-translate-y-1.5 hover:shadow-[0_12px_36px_rgba(182,92,255,0.06)] transition-all duration-300 ease-out shadow-xl flex flex-col justify-between group h-full"
                  >
                    <div className="space-y-5">
                      <ProjectMockupFrame project={project} />

                      <div className="flex flex-wrap items-center gap-2 text-xs">
                        <span className="px-2.5 py-0.5 rounded-full bg-[#B65CFF]/10 border border-[#B65CFF]/20 text-[10px] font-mono text-[#B65CFF] font-semibold uppercase">
                          {project.conceptLabel}
                        </span>
                        <span className="text-neutral-600">·</span>
                        <span className="text-[11px] font-mono text-[#A5A2B2]">
                          {project.businessCategory}
                        </span>
                      </div>

                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-[#F5F3F8] tracking-tight group-hover:text-[#B65CFF] transition-colors">
                          {project.title}
                        </h3>
                        <span className="text-xs font-mono text-neutral-400 block mt-0.5">
                          {project.location}
                        </span>
                      </div>

                      <p className="text-xs sm:text-sm text-[#A5A2B2] leading-relaxed line-clamp-3">
                        {project.description}
                      </p>

                      <div className="space-y-1.5 pt-2 border-t border-[#F5F3F8]/10">
                        {project.verifiedFeatures.slice(0, 2).map((feat) => (
                          <div key={feat} className="flex items-center gap-2 text-xs text-[#E5E0D8]">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#B65CFF] shrink-0" />
                            <span className="line-clamp-1">{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-6 mt-6 border-t border-[#F5F3F8]/10 flex items-center justify-between">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#F5F3F8] hover:text-[#B65CFF] transition-colors group/link"
                      >
                        <span>View Live Website</span>
                        <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                      </a>

                      <button
                        type="button"
                        onClick={() => onOpenProject(project.slug)}
                        className="text-xs font-mono text-[#A5A2B2] hover:text-[#F5F3F8] hover:translate-x-0.5 transition-all cursor-pointer"
                      >
                        Explore Case Study →
                      </button>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* SUPPORTING PROJECTS (4 & 5: Celebrations & Hospitality) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
              {PROJECTS.slice(3, 5).map((project, idx) => (
                <ScrollReveal key={project.id} delay={100 + idx * 100}>
                  <div 
                    className="p-6 sm:p-8 rounded-3xl bg-[#101016] border border-[#F5F3F8]/10 hover:border-[#B65CFF]/40 hover:-translate-y-1.5 hover:shadow-[0_12px_36px_rgba(182,92,255,0.06)] transition-all duration-300 ease-out shadow-xl flex flex-col justify-between group h-full"
                  >
                    <div className="space-y-5">
                      <ProjectMockupFrame project={project} />

                      <div className="flex flex-wrap items-center gap-2 text-xs">
                        <span className="px-2.5 py-0.5 rounded-full bg-[#B65CFF]/10 border border-[#B65CFF]/20 text-[10px] font-mono text-[#B65CFF] font-semibold uppercase">
                          {project.conceptLabel}
                        </span>
                        <span className="text-neutral-600">·</span>
                        <span className="text-[11px] font-mono text-[#A5A2B2]">
                          {project.businessCategory}
                        </span>
                      </div>

                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-[#F5F3F8] tracking-tight group-hover:text-[#B65CFF] transition-colors">
                          {project.title}
                        </h3>
                        <span className="text-xs font-mono text-neutral-400 block mt-0.5">
                          {project.location}
                        </span>
                      </div>

                      <p className="text-xs sm:text-sm text-[#A5A2B2] leading-relaxed line-clamp-3">
                        {project.description}
                      </p>

                      <div className="space-y-1.5 pt-2 border-t border-[#F5F3F8]/10">
                        {project.verifiedFeatures.slice(0, 2).map((feat) => (
                          <div key={feat} className="flex items-center gap-2 text-xs text-[#E5E0D8]">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#B65CFF] shrink-0" />
                            <span className="line-clamp-1">{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-6 mt-6 border-t border-[#F5F3F8]/10 flex items-center justify-between">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#F5F3F8] hover:text-[#B65CFF] transition-colors group/link"
                      >
                        <span>View Live Website</span>
                        <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                      </a>

                      <button
                        type="button"
                        onClick={() => onOpenProject(project.slug)}
                        className="text-xs font-mono text-[#A5A2B2] hover:text-[#F5F3F8] hover:translate-x-0.5 transition-all cursor-pointer"
                      >
                        Explore Case Study →
                      </button>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

          </div>

          {/* ================================================== */}
          {/* SECTION CTA: PROJECT INQUIRY AREA                  */}
          {/* ================================================== */}
          <ScrollReveal>
            <div className="mt-20 sm:mt-24 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#12121A] via-[#161224] to-[#12121A] border border-[#B65CFF]/30 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-8 group">
              {/* Subtle Violet Backlight with breathing pulse */}
              <div 
                className="absolute -top-24 -left-24 w-72 h-72 rounded-full opacity-20 blur-3xl pointer-events-none animate-pulse-slow"
                style={{ background: '#B65CFF' }}
              />

              <div className="max-w-2xl relative z-10">
                <span className="text-xs font-mono tracking-widest text-[#B65CFF] uppercase font-semibold block mb-2">
                  TAILORED DIGITAL SHOWCASES
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#F5F3F8] tracking-tight">
                  Have a business in mind? Let’s build its digital presence.
                </h3>
                <p className="mt-2.5 text-sm sm:text-base text-[#A5A2B2] leading-relaxed">
                  From a distinctive brand website to a complete business showcase, let’s create a digital experience tailored to your goals.
                </p>
              </div>

              <div className="relative z-10 shrink-0">
                <button
                  type="button"
                  onClick={() => onNavigate('/contact')}
                  className="px-8 py-4 rounded-xl bg-[#F5F3F8] hover:bg-[#B65CFF] text-black font-bold text-xs tracking-wider inline-flex items-center gap-2.5 transition-all duration-200 shadow-xl hover:shadow-[#B65CFF]/20 hover:scale-[1.02] active:scale-[0.98] active:translate-y-0.5 cursor-pointer group/cta"
                >
                  <span>LET’S TALK</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5" />
                </button>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* ================================================== */}
      {/* SECTION 5: SERVICES OVERVIEW (All 6 Disciplines)   */}
      {/* ================================================== */}
      <section className="py-20 sm:py-28 relative border-b border-[#F5F3F8]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <ScrollReveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-[#F5F3F8]/10">
            <div>
              <span className="text-xs font-mono tracking-widest text-[#B65CFF] uppercase block mb-2 font-medium">
                PRACTICE AREAS
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#F5F3F8] tracking-tight">
                Interconnected Digital Services
              </h2>
            </div>
            <p className="text-sm text-[#A5A2B2] max-w-md">
              Led by bespoke website design and engineering, supported by brand identity, copywriting, and creator campaigns.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service, idx) => (
              <ScrollReveal key={service.slug} delay={idx * 60}>
                <div
                  className={`p-7 rounded-3xl border flex flex-col justify-between transition-all duration-300 relative overflow-hidden group hover:-translate-y-1 h-full ${
                    service.isPrimary
                      ? 'bg-[#12121A] border-[#B65CFF]/40 shadow-xl'
                      : 'bg-[#101016] border-[#F5F3F8]/10 hover:border-[#B65CFF]/30'
                  }`}
                >
                  {service.isPrimary && (
                    <div className="absolute top-5 right-5">
                      <span className="text-[9px] font-mono tracking-wider px-2.5 py-0.5 rounded-full bg-[#B65CFF]/15 border border-[#B65CFF]/40 text-[#B65CFF] uppercase font-semibold">
                        PRIMARY
                      </span>
                    </div>
                  )}

                  <div className="space-y-3.5">
                    <span className="text-xs font-mono text-[#B65CFF] tracking-wider uppercase">
                      0{idx + 1}
                    </span>

                    <h3 className="text-xl font-bold text-[#F5F3F8] tracking-tight">
                      {service.title}
                    </h3>

                    <p className="text-xs text-[#A5A2B2] leading-relaxed line-clamp-2">
                      {service.tagline}
                    </p>

                    <div className="pt-3 border-t border-[#F5F3F8]/10 space-y-1.5">
                      <span className="text-[10px] font-mono text-neutral-400 uppercase block mb-1">
                        Key Deliverables
                      </span>
                      <ul className="space-y-1">
                        {service.deliverables.slice(0, 3).map((item) => (
                          <li key={item} className="flex items-start gap-1.5 text-[11px] text-[#A5A2B2]">
                            <span className="w-1 h-1 rounded-full bg-[#B65CFF] mt-1.5 shrink-0" />
                            <span className="line-clamp-1">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-[#F5F3F8]/10 flex items-center justify-between mt-6">
                    <button
                      type="button"
                      onClick={() => onOpenService(service.slug)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#F5F3F8] hover:text-[#B65CFF] transition-colors group cursor-pointer"
                    >
                      <span>PRACTICE SPECS</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </button>

                    <button
                      type="button"
                      onClick={() => onNavigate('/contact')}
                      className="text-xs font-mono text-[#A5A2B2] hover:text-[#F5F3F8] transition-colors cursor-pointer"
                    >
                      INQUIRE →
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

      {/* ================================================== */}
      {/* SECTION 6: PROCESS (4-Stage Sequence)              */}
      {/* ================================================== */}
      <section className="py-20 sm:py-28 bg-[#0A0A0E] border-b border-[#F5F3F8]/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono tracking-widest text-[#B65CFF] uppercase block mb-2 font-medium">
              METHODOLOGY
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#F5F3F8] tracking-tight">
              A Four-Stage Production Sequence
            </h2>
            <p className="mt-4 text-sm text-[#A5A2B2] leading-relaxed">
              Transparent, milestone-governed workflow eliminating guesswork and ensuring rigorous execution from day one.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
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
              <ScrollReveal key={st.step} delay={i * 80}>
                <div 
                  className="p-6 rounded-2xl bg-[#101016] border border-[#F5F3F8]/5 flex flex-col justify-between relative group hover:border-[#B65CFF]/30 transition-all duration-300 h-full"
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
                    Milestone Review Gate
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

      {/* ================================================== */}
      {/* SECTION 7: WHY FORMORA (Operating Ethos)           */}
      {/* ================================================== */}
      <section className="py-20 sm:py-28 relative border-b border-[#F5F3F8]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <ScrollReveal className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
            <div className="lg:col-span-5">
              <span className="text-xs font-mono tracking-widest text-[#B65CFF] uppercase block mb-2 font-medium">
                OPERATING PRINCIPLES
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#F5F3F8] tracking-tight">
                Why Ambitious Brands Partner With Us
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="text-base text-[#A5A2B2] leading-relaxed">
                We are an independent studio building our reputation on precision and results. No inflated team overhead, no fabricated vanity metrics, and no boilerplate templates. Just dedicated creative and technical craft.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {operatingPrinciples.map((op, idx) => (
              <ScrollReveal key={op.number} delay={(idx % 3) * 60}>
                <div 
                  className="p-6 rounded-2xl bg-[#101016] border border-[#F5F3F8]/5 hover:border-[#B65CFF]/20 transition-all duration-300 h-full"
                >
                  <span className="text-xs font-mono text-[#B65CFF] block mb-3 font-medium">
                    PRINCIPLE // {op.number}
                  </span>
                  <h4 className="text-lg font-bold text-[#F5F3F8] mb-2">
                    {op.title}
                  </h4>
                  <p className="text-xs text-[#A5A2B2] leading-relaxed">
                    {op.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

      {/* ================================================== */}
      {/* SECTION 8: STUDIO STATEMENT                        */}
      {/* ================================================== */}
      <section className="py-20 sm:py-28 bg-[#0C0C12] border-b border-[#F5F3F8]/10 text-center relative overflow-hidden">
        <ScrollReveal className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
              className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#F5F3F8] hover:text-[#B65CFF] hover:translate-x-1 transition-all"
            >
              <span>DISCOVER OUR STUDIO ETHOS</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </ScrollReveal>
      </section>

      {/* ================================================== */}
      {/* SECTION 9: FINAL CONVERSION CTA                    */}
      {/* ================================================== */}
      <section className="py-20 sm:py-28 relative bg-[#08080B] overflow-hidden">
        <ScrollReveal className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-xs font-mono tracking-widest text-[#B65CFF] uppercase block mb-3 font-medium">
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
              className="w-full sm:w-auto px-8 py-4 text-xs font-semibold tracking-wider text-black bg-[#F5F3F8] hover:bg-[#B65CFF] hover:text-black hover:scale-[1.02] active:scale-[0.98] active:translate-y-0.5 rounded-xl transition-all shadow-xl flex items-center justify-center gap-2 group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B65CFF]"
            >
              <span>START A PROJECT</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              type="button"
              onClick={() => onNavigate('/contact')}
              className="w-full sm:w-auto px-7 py-4 text-xs font-semibold tracking-wider text-[#A5A2B2] hover:text-[#F5F3F8] hover:scale-[1.02] active:scale-[0.98] active:translate-y-0.5 bg-[#101016] border border-[#F5F3F8]/10 rounded-xl transition-all cursor-pointer"
            >
              CONTACT THE STUDIO
            </button>
          </div>
        </ScrollReveal>
      </section>

    </div>
  );
};
