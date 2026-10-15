import React, { useState } from 'react';
import { Project, ServiceCategory } from '../types';
import { PROJECTS } from '../data/projects';
import { ProjectMockupFrame } from '../components/portfolio/ProjectMockupFrame';
import { ArrowRight, ArrowUpRight, Filter } from 'lucide-react';

interface WorkViewProps {
  onOpenProject: (slug: string) => void;
  onStartProject: () => void;
}

export const WorkView: React.FC<WorkViewProps> = ({
  onOpenProject,
  onStartProject,
}) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const filterOptions = [
    { label: 'All Projects', value: 'all' },
    { label: 'Web Design & Dev', value: 'web-design' },
    { label: 'Brand Identity', value: 'branding' },
    { label: 'Growth & Social', value: 'growth-marketing' },
  ];

  const filteredProjects = selectedFilter === 'all'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === selectedFilter);

  return (
    <div className="pt-28 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header / Intro */}
        <div className="border-b border-[#F5F3F8]/10 pb-12 mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B65CFF]" />
            <span className="text-xs font-mono tracking-widest text-[#B65CFF] uppercase font-semibold">
              SELECTED WORKS & STUDIES
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#F5F3F8] tracking-tight mb-6">
            Architectural Precision. <br />
            Commercial Velocity.
          </h1>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <p className="text-base text-[#A5A2B2] max-w-2xl leading-relaxed">
              Explore our curated portfolio of concept flagships, brand identities, and creator-led marketing frameworks. Each project demonstrates our standards for typography, interaction speed, and conversion.
            </p>

            <div className="p-3 rounded-xl bg-[#101016] border border-[#F5F3F8]/10 text-xs text-[#A5A2B2] max-w-xs shrink-0 font-mono">
              <span className="text-[#B65CFF] font-semibold block mb-1">TRANSPARENCY NOTE</span>
              All works featured are unsolicited concept explorations or design system studies authored by Formora.
            </div>
          </div>
        </div>

        {/* Filter Bar (Compliant segmented buttons with handlers) */}
        <div className="flex flex-wrap items-center gap-2 mb-12 pb-4 border-b border-[#F5F3F8]/5">
          <span className="text-xs font-mono text-[#A5A2B2] mr-2 flex items-center gap-1.5">
            <Filter className="w-3.5 h-3.5 text-[#B65CFF]" />
            <span>DISCIPLINE:</span>
          </span>
          {filterOptions.map((opt) => (
            <button
              key={opt.value}
              type="button"
              onClick={() => setSelectedFilter(opt.value)}
              className={`px-4 py-2 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                selectedFilter === opt.value
                  ? 'bg-[#F5F3F8] text-black font-semibold shadow-md'
                  : 'bg-[#101016] text-[#A5A2B2] hover:text-[#F5F3F8] border border-[#F5F3F8]/5'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>

        {/* Varied Portfolio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              className="flex flex-col gap-6 group cursor-pointer"
              onClick={() => onOpenProject(project.slug)}
            >
              <ProjectMockupFrame project={project} />

              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-[#B65CFF] tracking-wider uppercase font-semibold">
                      {project.categoryLabel}
                    </span>
                    <span className="text-neutral-600">·</span>
                    <span className="text-[11px] font-mono text-[#A5A2B2]">
                      {project.conceptLabel}
                    </span>
                  </div>
                  <span className="text-xs font-mono text-neutral-500">{project.year}</span>
                </div>

                <h3 className="text-2xl font-bold text-[#F5F3F8] group-hover:text-[#B65CFF] transition-colors tracking-tight flex items-center justify-between">
                  <span>{project.title}</span>
                  <ArrowUpRight className="w-5 h-5 text-neutral-500 group-hover:text-[#B65CFF] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </h3>

                <p className="text-sm text-[#A5A2B2] leading-relaxed line-clamp-2">
                  {project.tagline}
                </p>

                {/* Services Tags (Clean typography with separators) */}
                <div className="flex flex-wrap items-center gap-2 text-xs text-neutral-400 pt-2 border-t border-[#F5F3F8]/10">
                  {project.services.slice(0, 3).map((s, i) => (
                    <React.Fragment key={s}>
                      <span>{s}</span>
                      {i < 2 && <span className="text-neutral-700">·</span>}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Portfolio CTA */}
        <div className="mt-24 p-8 sm:p-12 rounded-3xl bg-[#101016] border border-[#F5F3F8]/10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <span className="text-xs font-mono text-[#B65CFF] tracking-widest uppercase block mb-1">
              HAVE A CUSTOM BRIEF?
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#F5F3F8] tracking-tight">
              Let's engineer your brand flagship.
            </h3>
            <p className="text-xs text-[#A5A2B2] mt-2 max-w-lg">
              We translate ambitious business models into cohesive digital experiences and measurable customer acquisition.
            </p>
          </div>

          <button
            type="button"
            onClick={onStartProject}
            className="px-6 py-3.5 text-xs font-semibold tracking-wider text-black bg-[#F5F3F8] hover:bg-[#B65CFF] hover:text-black rounded-xl transition-all shadow-lg whitespace-nowrap shrink-0 flex items-center gap-2"
          >
            <span>START A PROJECT</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
