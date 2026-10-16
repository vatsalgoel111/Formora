import React from 'react';
import { FormoraLogo, FormoraMark } from '../components/brand/FormoraLogo';
import { ArrowRight, Globe, Layers, ShieldCheck, Target, Zap, CheckCircle2 } from 'lucide-react';

interface StudioViewProps {
  onStartProject: () => void;
}

export const StudioView: React.FC<StudioViewProps> = ({ onStartProject }) => {
  return (
    <div className="pt-28 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="border-b border-[#F5F3F8]/10 pb-12 mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B65CFF]" />
            <span className="text-xs font-mono tracking-widest text-[#B65CFF] uppercase font-semibold">
              ABOUT THE STUDIO
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#F5F3F8] tracking-tight mb-6">
            Built to Make <br />
            An Impression.
          </h1>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <p className="text-base text-[#A5A2B2] max-w-2xl leading-relaxed">
              Formora is an independent digital agency and creative studio. We combine world-class website design and development, distinctive brand identity, and growth-oriented marketing systems under one roof.
            </p>

            <div className="p-3 rounded-xl bg-[#101016] border border-[#F5F3F8]/10 text-xs text-[#A5A2B2] max-w-xs shrink-0 font-mono">
              <span className="text-[#B65CFF] font-semibold block mb-1">FOUNDATIONAL IDENTITY</span>
              CREATIVE · DIGITAL · GROWTH
            </div>
          </div>
        </div>

        {/* Studio Manifesto Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 py-16 border-b border-[#F5F3F8]/10 items-center">
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-mono tracking-widest text-[#B65CFF] uppercase block">
              STUDIO MANIFESTO
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#F5F3F8] tracking-tight leading-tight">
              “We believe a brand should feel as good as it looks.”
            </h2>
            <p className="text-sm text-[#A5A2B2] leading-relaxed">
              A visually stunning website that loads slowly or confuses visitors is a failed commercial tool. Conversely, a high-converting site stripped of taste and brand identity leaves zero emotional imprint.
            </p>
            <p className="text-sm text-[#A5A2B2] leading-relaxed">
              Formora eliminates this false trade-off. We synthesize cinematic aesthetic rigor with modern frontend engineering and conversion strategy.
            </p>
          </div>

          <div className="lg:col-span-7 bg-[#101016] border border-[#F5F3F8]/10 rounded-3xl p-8 sm:p-12 relative overflow-hidden">
            <div 
              className="absolute top-0 right-0 w-72 h-72 rounded-full pointer-events-none opacity-20 blur-3xl"
              style={{ background: 'radial-gradient(circle, #B65CFF 0%, transparent 70%)' }}
            />

            <h3 className="text-xl font-bold text-[#F5F3F8] tracking-tight mb-4">
              Our Core Commitments
            </h3>

            <div className="space-y-4 text-xs sm:text-sm text-[#A5A2B2]">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#B65CFF] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#F5F3F8] block mb-0.5">We create excellent digital experiences.</strong>
                  Fast, accessible, beautifully choreographed websites built for modern international audiences.
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#B65CFF] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#F5F3F8] block mb-0.5">We make brands look distinctive and communicate clearly.</strong>
                  Precision typography, bespoke geometry, and clear value propositions that set you apart from template-driven competitors.
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#B65CFF] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#F5F3F8] block mb-0.5">We help businesses build a stronger online presence.</strong>
                  Sustainable growth systems, creator-led social campaigns, and high-converting marketing funnels.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Working Model & International Reach */}
        <div className="py-16 border-b border-[#F5F3F8]/10">
          <div className="mb-12">
            <span className="text-xs font-mono tracking-widest text-[#B65CFF] uppercase block mb-2">
              OPERATING MODEL
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#F5F3F8] tracking-tight">
              An Agile, Senior Studio Practice
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-[#101016] border border-[#F5F3F8]/5">
              <Globe className="w-6 h-6 text-[#B65CFF] mb-4" />
              <h4 className="text-lg font-bold text-[#F5F3F8] mb-2">
                Global & Remote-First
              </h4>
              <p className="text-xs text-[#A5A2B2] leading-relaxed">
                Operating internationally across North America, Europe, and Asia-Pacific. We communicate asynchronously with high responsiveness.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#101016] border border-[#F5F3F8]/5">
              <Zap className="w-6 h-6 text-[#B65CFF] mb-4" />
              <h4 className="text-lg font-bold text-[#F5F3F8] mb-2">
                Direct Principal Execution
              </h4>
              <p className="text-xs text-[#A5A2B2] leading-relaxed">
                Every client works directly with senior creative directors and full-stack engineers. No junior trainees or outsourced layers.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#101016] border border-[#F5F3F8]/5">
              <ShieldCheck className="w-6 h-6 text-[#B65CFF] mb-4" />
              <h4 className="text-lg font-bold text-[#F5F3F8] mb-2">
                Honest Transparency
              </h4>
              <p className="text-xs text-[#A5A2B2] leading-relaxed">
                As a new studio, we compete on the undeniable quality of our work and upfront clarity in deliverables, scope, and timing.
              </p>
            </div>
          </div>
        </div>

        {/* The Brand Monogram & Visual Signature */}
        <div className="py-16 border-b border-[#F5F3F8]/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-56 h-56 rounded-3xl bg-[#101016] border border-[#F5F3F8]/10 flex items-center justify-center p-8 shadow-2xl relative">
                <FormoraLogo variant="full" size="lg" />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-mono tracking-widest text-[#B65CFF] uppercase block">
                VISUAL IDENTITY HERITAGE
              </span>
              <h3 className="text-2xl font-bold text-[#F5F3F8] tracking-tight">
                The Formora Monogram: Aerodynamic Precision
              </h3>
              <p className="text-sm text-[#A5A2B2] leading-relaxed">
                The Formora "F" symbol represents digital velocity, sculptural poise, and architectural order. Its beveled wings and aerodynamic curves inform our interactive 3D sculpture, layout grids, and motion choreography.
              </p>
              <div className="pt-2 flex items-center gap-4 text-xs font-mono text-[#A5A2B2]">
                <span>TAGLINE: “BUILT TO MAKE AN IMPRESSION”</span>
              </div>
            </div>
          </div>
        </div>

        {/* Conversion CTA */}
        <div className="mt-16 p-8 sm:p-12 rounded-3xl bg-[#12121A] border border-[#B65CFF]/30 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <span className="text-xs font-mono text-[#B65CFF] tracking-widest uppercase block mb-1 font-semibold">
              PARTNER WITH FORMORA
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#F5F3F8] tracking-tight">
              Ready to create something memorable?
            </h3>
            <p className="text-xs sm:text-sm text-[#A5A2B2] mt-2 max-w-lg leading-relaxed">
              We are currently accepting new client projects. Tell us about your brand and let's craft an exceptional digital presence.
            </p>
          </div>

          <button
            type="button"
            onClick={onStartProject}
            className="px-8 py-4 text-xs font-semibold tracking-wider text-black bg-[#F5F3F8] hover:bg-[#B65CFF] rounded-xl transition-all shadow-xl whitespace-nowrap shrink-0 flex items-center gap-2"
          >
            <span>START A PROJECT</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
