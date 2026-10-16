import React from 'react';
import { SERVICES } from '../data/services';
import { ServiceDetail } from '../types';
import { ArrowRight, CheckCircle2, HelpCircle, Code2, Sparkles, Megaphone, Palette, FileText, Users } from 'lucide-react';

interface ServicesViewProps {
  onOpenService: (slug: string) => void;
  onStartProject: () => void;
}

export const ServicesView: React.FC<ServicesViewProps> = ({
  onOpenService,
  onStartProject,
}) => {
  const getServiceIcon = (slug: string) => {
    switch (slug) {
      case 'web-design':
        return <Code2 className="w-5 h-5 text-[#B65CFF]" />;
      case 'branding':
        return <Palette className="w-5 h-5 text-[#B65CFF]" />;
      case 'social-media':
        return <Sparkles className="w-5 h-5 text-[#B65CFF]" />;
      case 'content-writing':
        return <FileText className="w-5 h-5 text-[#B65CFF]" />;
      case 'growth-marketing':
        return <Megaphone className="w-5 h-5 text-[#B65CFF]" />;
      case 'influencer-ugc':
        return <Users className="w-5 h-5 text-[#B65CFF]" />;
      default:
        return <Code2 className="w-5 h-5 text-[#B65CFF]" />;
    }
  };

  return (
    <div className="pt-24 sm:pt-28 pb-28 sm:pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="border-b border-[#F5F3F8]/10 pb-10 mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B65CFF]" />
            <span className="text-xs font-mono tracking-widest text-[#B65CFF] uppercase font-semibold">
              CAPABILITIES & PRACTICES
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#F5F3F8] tracking-tight mb-6">
            Bespoke Engineering. <br />
            Holistic Growth.
          </h1>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <p className="text-base text-[#A5A2B2] max-w-2xl leading-relaxed">
              We lead with world-class website design and development, supported by brand identity, copywriting, and creator-led marketing. Every engagement is structured around your business stage and commercial objectives.
            </p>

            <div className="p-3.5 rounded-2xl bg-[#101016] border border-[#F5F3F8]/10 text-xs text-[#A5A2B2] max-w-xs shrink-0 font-mono">
              <span className="text-[#B65CFF] font-semibold block mb-1">TAILORED SCOPE</span>
              Every engagement is tailored to the project. Scope and deliverables are defined during discovery.
            </div>
          </div>
        </div>

        {/* Services List with Deep Dive Previews */}
        <div className="space-y-12">
          {SERVICES.map((service, idx) => (
            <div
              key={service.slug}
              className={`p-7 sm:p-10 rounded-3xl border transition-all duration-300 relative overflow-hidden ${
                service.isPrimary
                  ? 'bg-[#12121A] border-[#B65CFF]/40 shadow-xl'
                  : 'bg-[#101016] border-[#F5F3F8]/10 hover:border-[#F5F3F8]/25'
              }`}
            >
              {service.isPrimary && (
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#B65CFF]/15 border border-[#B65CFF]/40 text-xs font-mono text-[#B65CFF] mb-6">
                  <span>PRIMARY AGENCY DISCIPLINE</span>
                </div>
              )}

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left Overview */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="flex items-center gap-3">
                    {getServiceIcon(service.slug)}
                    <span className="text-xs font-mono text-[#A5A2B2] uppercase">
                      DISCIPLINE 0{idx + 1}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-bold text-[#F5F3F8] tracking-tight">
                    {service.title}
                  </h2>

                  <p className="text-sm text-[#A5A2B2] leading-relaxed">
                    {service.tagline}
                  </p>

                  <div className="p-4 rounded-xl bg-[#08080B]/60 border border-white/5 space-y-1.5">
                    <span className="text-[10px] font-mono text-[#B65CFF] tracking-widest uppercase block font-semibold">
                      COMMERCIAL FRICTION WE SOLVE
                    </span>
                    <p className="text-xs text-[#A5A2B2] leading-relaxed">
                      {service.businessProblem}
                    </p>
                  </div>

                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => onOpenService(service.slug)}
                      className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#F5F3F8] hover:text-[#B65CFF] transition-colors group cursor-pointer"
                    >
                      <span>VIEW PRACTICE SPECIFICATIONS</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>

                {/* Right Capabilities & Deliverables */}
                <div className="lg:col-span-7 space-y-6">
                  <div>
                    <span className="text-xs font-mono text-[#F5F3F8] uppercase block mb-3 font-semibold">
                      Core Scope & Capabilities
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.capabilities.map((cap) => (
                        <div key={cap.name} className="p-3.5 rounded-xl bg-[#171720]/60 border border-white/5 text-xs">
                          <span className="font-semibold text-[#F5F3F8] block mb-1">{cap.name}</span>
                          <span className="text-[#A5A2B2] text-[11px] leading-relaxed">{cap.description}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#F5F3F8]/10 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
                      <span>KEY DELIVERABLES:</span>
                      <span className="text-[#F5F3F8]">{service.deliverables.length} Defined Milestones</span>
                    </div>

                    <button
                      type="button"
                      onClick={onStartProject}
                      className="px-4 py-2 text-xs font-semibold rounded-lg bg-[#F5F3F8] text-black hover:bg-[#B65CFF] transition-colors cursor-pointer"
                    >
                      Inquire on this Practice
                    </button>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
