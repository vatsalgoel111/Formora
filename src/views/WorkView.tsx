import React, { useState } from 'react';
import { Project } from '../types';
import { PROJECTS } from '../data/projects';
import { ProjectMockupFrame } from '../components/portfolio/ProjectMockupFrame';
import { ScrollReveal } from '../components/common/ScrollReveal';
import { ArrowRight, ArrowUpRight, Filter, ExternalLink, CheckCircle2 } from 'lucide-react';

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
    { label: 'All Businesses (5)', value: 'all' },
    { label: 'Personal Branding', value: 'Personal Branding / Brand Strategy' },
    { label: 'Interior Design', value: 'Interior Design' },
    { label: 'Celebrations & Hospitality', value: 'hospitality-celebrations' },
  ];

  const filteredProjects = selectedFilter === 'all'
    ? PROJECTS
    : selectedFilter === 'hospitality-celebrations'
    ? PROJECTS.filter(
        (p) =>
          p.businessCategory.includes('Wedding') ||
          p.businessCategory.includes('Homestay')
      )
    : PROJECTS.filter((p) => p.businessCategory.includes(selectedFilter));

  return (
    <div className="pt-28 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header / Intro */}
        <ScrollReveal className="border-b border-[#F5F3F8]/10 pb-12 mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B65CFF]" />
            <span className="text-xs font-mono tracking-widest text-[#B65CFF] uppercase font-semibold">
              SELECTED BUSINESS WEBSITES
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#F5F3F8] tracking-tight mb-6">
            Digital Experiences <br />
            Built for Businesses.
          </h1>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <p className="text-base text-[#A5A2B2] max-w-2xl leading-relaxed">
              Explore business-focused website concepts created for brands across personal branding, interior design, celebrations, and hospitality. Each project demonstrates how thoughtful digital design can present a business professionally and make it easier for customers to connect.
            </p>

            <div className="p-3.5 rounded-xl bg-[#101016] border border-[#F5F3F8]/10 text-xs text-[#A5A2B2] max-w-xs shrink-0 font-mono">
              <span className="text-[#B65CFF] font-semibold block mb-1">PROJECT STATUS DISCLOSURE</span>
              Showcased projects are website design concepts and demos authored to illustrate digital capabilities for targeted industries.
            </div>
          </div>
        </ScrollReveal>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center gap-2 mb-12 pb-4 border-b border-[#F5F3F8]/5">
          <span className="text-xs font-mono text-[#A5A2B2] mr-2 flex items-center gap-1.5">
            <Filter className="w-3.5 h-3.5 text-[#B65CFF]" />
            <span>INDUSTRY:</span>
          </span>
          {filterOptions.map((opt) => (
            <button
              key={opt.value}
              type="button"
              onClick={() => setSelectedFilter(opt.value)}
              className={`px-4 py-2 text-xs font-medium rounded-lg transition-all duration-150 whitespace-nowrap cursor-pointer hover:scale-[1.02] active:scale-[0.98] ${
                selectedFilter === opt.value
                  ? 'bg-[#F5F3F8] text-black font-semibold shadow-md'
                  : 'bg-[#101016] text-[#A5A2B2] hover:text-[#F5F3F8] border border-[#F5F3F8]/5 hover:border-[#F5F3F8]/20'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>

        {/* Varied Portfolio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
          {filteredProjects.map((project, idx) => (
            <ScrollReveal key={project.id} delay={idx * 75}>
              <div
                className="p-5 sm:p-8 rounded-3xl bg-[#101016] border border-[#F5F3F8]/10 hover:border-[#B65CFF]/40 hover:-translate-y-1.5 hover:shadow-[0_16px_40px_rgba(182,92,255,0.06)] transition-all duration-300 ease-out shadow-xl flex flex-col justify-between group h-full min-w-0"
              >
                <div className="space-y-5">
                  <ProjectMockupFrame project={project} />

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <span className="px-2.5 py-0.5 rounded-full bg-[#B65CFF]/10 border border-[#B65CFF]/20 text-[10px] font-mono text-[#B65CFF] font-semibold uppercase">
                        {project.conceptLabel}
                      </span>
                      <span className="text-neutral-600">·</span>
                      <span className="text-xs font-mono text-[#A5A2B2]">
                        {project.businessCategory}
                      </span>
                    </div>
                    <span className="text-xs font-mono text-neutral-500">{project.year}</span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-[#F5F3F8] group-hover:text-[#B65CFF] transition-colors tracking-tight">
                      {project.title}
                    </h3>
                    <span className="text-xs font-mono text-[#A5A2B2] block mt-0.5">
                      {project.location ? `${project.location} · ` : ''}{project.clientSubtitle}
                    </span>
                  </div>

                  <p className="text-sm text-[#A5A2B2] leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Verified Capabilities */}
                  <div className="space-y-1.5 pt-3 border-t border-[#F5F3F8]/10">
                    <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest block">
                      Verified Capabilities
                    </span>
                    {project.verifiedFeatures.slice(0, 3).map((feat) => (
                      <div key={feat} className="flex items-center gap-2 text-xs text-[#E5E0D8]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#B65CFF] shrink-0" />
                        <span className="line-clamp-1">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions: Live Link + Case Study Details */}
                <div className="pt-6 mt-6 border-t border-[#F5F3F8]/10 flex flex-wrap items-center justify-between gap-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl bg-[#F5F3F8] hover:bg-[#B65CFF] text-black font-semibold text-xs tracking-wider inline-flex items-center gap-2 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] active:translate-y-0.5 shadow-md cursor-pointer group/btn"
                  >
                    <span>VIEW LIVE WEBSITE</span>
                    <ExternalLink className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </a>

                  <button
                    type="button"
                    onClick={() => onOpenProject(project.slug)}
                    className="px-3.5 py-2 text-xs font-mono text-[#A5A2B2] hover:text-[#F5F3F8] hover:translate-x-0.5 transition-all duration-200 cursor-pointer flex items-center gap-1.5 group/btn2"
                  >
                    <span>Explore Project</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn2:translate-x-1" />
                  </button>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom Portfolio CTA */}
        <ScrollReveal>
          <div className="mt-24 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#12121A] via-[#161224] to-[#12121A] border border-[#B65CFF]/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 shadow-2xl relative overflow-hidden group">
            <div className="max-w-xl">
              <span className="text-xs font-mono text-[#B65CFF] tracking-widest uppercase block mb-2 font-semibold">
                HAVE A BUSINESS IN MIND?
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#F5F3F8] tracking-tight">
                Have a business in mind? Let’s build its digital presence.
              </h3>
              <p className="text-xs sm:text-sm text-[#A5A2B2] mt-2.5 leading-relaxed">
                From a distinctive brand website to a complete business showcase, let’s create a digital experience tailored to your goals.
              </p>
            </div>

            <button
              type="button"
              onClick={onStartProject}
              className="px-8 py-4 text-xs font-bold tracking-wider text-black bg-[#F5F3F8] hover:bg-[#B65CFF] hover:text-black hover:scale-[1.02] active:scale-[0.98] active:translate-y-0.5 rounded-xl transition-all duration-200 shadow-xl whitespace-nowrap shrink-0 flex items-center gap-2 cursor-pointer group/cta"
            >
              <span>LET’S TALK</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5" />
            </button>
          </div>
        </ScrollReveal>

      </div>
    </div>
  );
};
