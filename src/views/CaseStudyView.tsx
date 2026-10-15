import React from 'react';
import { Project } from '../types';
import { PROJECTS } from '../data/projects';
import { ProjectMockupFrame } from '../components/portfolio/ProjectMockupFrame';
import { 
  ArrowLeft, 
  ArrowRight, 
  ArrowUpRight, 
  CheckCircle2, 
  Layers, 
  Palette, 
  Type, 
  Sparkles,
  Smartphone,
  Laptop
} from 'lucide-react';

interface CaseStudyViewProps {
  project: Project;
  onNavigate: (path: string) => void;
  onOpenProject: (slug: string) => void;
}

export const CaseStudyView: React.FC<CaseStudyViewProps> = ({
  project,
  onNavigate,
  onOpenProject,
}) => {
  // Find next project in circular order
  const currentIndex = PROJECTS.findIndex((p) => p.id === project.id);
  const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];

  return (
    <div className="pt-28 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back link */}
        <div className="mb-8">
          <button
            type="button"
            onClick={() => onNavigate('/work')}
            className="inline-flex items-center gap-2 text-xs font-mono text-[#A5A2B2] hover:text-[#B65CFF] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>BACK TO SELECTED WORK</span>
          </button>
        </div>

        {/* Hero Section of Case Study */}
        <div className="border-b border-[#F5F3F8]/10 pb-12 mb-16">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-xs font-mono text-[#B65CFF] tracking-widest uppercase font-semibold">
              {project.categoryLabel}
            </span>
            <span className="text-neutral-600">·</span>
            <span className="text-xs font-mono text-[#A5A2B2] uppercase">
              {project.conceptLabel}
            </span>
            <span className="text-neutral-600">·</span>
            <span className="text-xs font-mono text-neutral-500">
              STUDY YEAR {project.year}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#F5F3F8] tracking-tight mb-6">
            {project.title}
          </h1>

          <p className="text-lg sm:text-xl text-[#A5A2B2] max-w-3xl leading-relaxed mb-8">
            {project.tagline}
          </p>

          {/* Metadata Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-[#F5F3F8]/10 text-xs">
            <div>
              <span className="font-mono text-neutral-500 block mb-1 uppercase">Engagement Type</span>
              <span className="font-semibold text-[#F5F3F8]">{project.clientSubtitle}</span>
            </div>
            <div>
              <span className="font-mono text-neutral-500 block mb-1 uppercase">Services Provided</span>
              <span className="text-[#A5A2B2]">{project.services.slice(0, 2).join(', ')}</span>
            </div>
            <div>
              <span className="font-mono text-neutral-500 block mb-1 uppercase">Art Direction</span>
              <span className="text-[#A5A2B2]">Dark Futurism & Editorial</span>
            </div>
            <div>
              <span className="font-mono text-neutral-500 block mb-1 uppercase">Authenticity Status</span>
              <span className="text-[#B65CFF] font-semibold">{project.conceptLabel}</span>
            </div>
          </div>
        </div>

        {/* Primary Visual Hero Mockup */}
        <div className="mb-20">
          <ProjectMockupFrame project={project} />
        </div>

        {/* 1. Background & Creative Challenge */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 py-16 border-b border-[#F5F3F8]/10 items-start">
          <div className="lg:col-span-4">
            <span className="text-xs font-mono tracking-widest text-[#B65CFF] uppercase block mb-2">
              01 // THE CHALLENGE
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#F5F3F8] tracking-tight">
              Deconstructing the Category Friction
            </h2>
          </div>
          <div className="lg:col-span-8 space-y-4">
            <p className="text-base text-[#A5A2B2] leading-relaxed">
              {project.challenge}
            </p>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Our initial diagnostic revealed that competing brands in this sector relied heavily on cookie-cutter patterns and unoptimized scripts, introducing cognitive drag and high bounce rates during initial discovery.
            </p>
          </div>
        </div>

        {/* 2. Creative Direction & The Solution */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 py-16 border-b border-[#F5F3F8]/10 items-start">
          <div className="lg:col-span-4">
            <span className="text-xs font-mono tracking-widest text-[#B65CFF] uppercase block mb-2">
              02 // THE STRATEGY
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#F5F3F8] tracking-tight">
              Design Decisions & Architecture
            </h2>
          </div>
          <div className="lg:col-span-8 space-y-6">
            <p className="text-base text-[#A5A2B2] leading-relaxed">
              {project.solution}
            </p>

            <div className="pt-4">
              <span className="text-xs font-mono text-[#F5F3F8] uppercase block mb-3 font-semibold">
                Agreed Core Deliverables
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.deliverables.map((d) => (
                  <div key={d} className="flex items-center gap-2 text-xs text-[#A5A2B2]">
                    <CheckCircle2 className="w-4 h-4 text-[#B65CFF] shrink-0" />
                    <span>{d}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 3. Typography & Color Architecture */}
        <div className="py-16 border-b border-[#F5F3F8]/10">
          <div className="mb-12">
            <span className="text-xs font-mono tracking-widest text-[#B65CFF] uppercase block mb-2">
              03 // DESIGN SYSTEM
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#F5F3F8] tracking-tight">
              Chromatic & Typographic Tokens
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Color Palette Tokens */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#101016] border border-[#F5F3F8]/5">
              <div className="flex items-center gap-2 mb-6">
                <Palette className="w-4 h-4 text-[#B65CFF]" />
                <h3 className="text-sm font-bold text-[#F5F3F8] uppercase tracking-wider">
                  Curated Palette
                </h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {project.colorPalette.map((color) => (
                  <div key={color.hex} className="flex flex-col gap-2">
                    <div 
                      className="h-16 rounded-xl border border-white/10 shadow-inner"
                      style={{ backgroundColor: color.hex }}
                    />
                    <div>
                      <span className="text-xs font-mono text-[#F5F3F8] block font-semibold">{color.hex}</span>
                      <span className="text-[10px] text-[#A5A2B2]">{color.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Typography Tokens */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#101016] border border-[#F5F3F8]/5">
              <div className="flex items-center gap-2 mb-6">
                <Type className="w-4 h-4 text-[#B65CFF]" />
                <h3 className="text-sm font-bold text-[#F5F3F8] uppercase tracking-wider">
                  Typographic Hierarchy
                </h3>
              </div>
              <div className="space-y-4">
                {project.typography.map((t) => (
                  <div key={t.role} className="flex items-start justify-between border-b border-white/5 pb-3">
                    <div>
                      <span className="text-xs font-bold text-[#F5F3F8] block">{t.family}</span>
                      <span className="text-[11px] text-[#A5A2B2]">{t.description}</span>
                    </div>
                    <span className="text-[10px] font-mono text-[#B65CFF] uppercase shrink-0">
                      {t.role}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 4. Visual Highlights & Responsive Viewports */}
        <div className="py-16 border-b border-[#F5F3F8]/10">
          <div className="mb-12">
            <span className="text-xs font-mono tracking-widest text-[#B65CFF] uppercase block mb-2">
              04 // FEATURE DEEP DIVE
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#F5F3F8] tracking-tight">
              Interactive Viewports & Micro-States
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {project.visualHighlights.map((hl, i) => (
              <div 
                key={hl.title}
                className="p-6 rounded-2xl bg-[#101016] border border-[#F5F3F8]/5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono text-[#B65CFF]">
                      MODULE // 0{i + 1}
                    </span>
                    {hl.mockupType === 'mobile-device' ? (
                      <Smartphone className="w-4 h-4 text-neutral-400" />
                    ) : (
                      <Laptop className="w-4 h-4 text-neutral-400" />
                    )}
                  </div>
                  <h4 className="text-lg font-bold text-[#F5F3F8] mb-2">
                    {hl.title}
                  </h4>
                  <p className="text-xs text-[#A5A2B2] leading-relaxed">
                    {hl.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/5 text-[10px] font-mono text-neutral-500 uppercase">
                  Fully Responsive · 60 FPS
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 5. Next Project Navigation & Conversion CTA */}
        <div className="pt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-6 p-8 rounded-3xl bg-[#101016] border border-[#F5F3F8]/10 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono text-[#A5A2B2] block mb-1">
                NEXT CASE STUDY
              </span>
              <h3 className="text-2xl font-bold text-[#F5F3F8] tracking-tight mb-2">
                {nextProject.title}
              </h3>
              <p className="text-xs text-[#A5A2B2] line-clamp-2 mb-6">
                {nextProject.tagline}
              </p>
            </div>
            <button
              type="button"
              onClick={() => onOpenProject(nextProject.slug)}
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#B65CFF] hover:text-[#D0A0FF] transition-colors"
            >
              <span>EXPLORE CASE STUDY</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="lg:col-span-6 p-8 rounded-3xl bg-[#12121A] border border-[#B65CFF]/30 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono text-[#B65CFF] block mb-1 uppercase font-semibold">
                BUILD A SIMILAR EXPERIENCE
              </span>
              <h3 className="text-2xl font-bold text-[#F5F3F8] tracking-tight mb-2">
                Ready to elevate your digital presence?
              </h3>
              <p className="text-xs text-[#A5A2B2] mb-6">
                Let's discuss how Formora can architect a bespoke digital flagship or brand campaign for your company.
              </p>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('/contact')}
              className="px-6 py-3.5 text-xs font-semibold tracking-wider text-black bg-[#F5F3F8] hover:bg-[#B65CFF] rounded-xl transition-all shadow-md self-start flex items-center gap-2"
            >
              <span>INQUIRE ABOUT THIS DISCIPLINE</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
