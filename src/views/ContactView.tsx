import React from 'react';
import { ProjectInquiryForm } from '../components/forms/ProjectInquiryForm';
import { Mail, Globe, Clock, ShieldCheck, Sparkles, MessageSquare } from 'lucide-react';

export const ContactView: React.FC = () => {
  return (
    <div className="pt-28 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="border-b border-[#F5F3F8]/10 pb-12 mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B65CFF]" />
            <span className="text-xs font-mono tracking-widest text-[#B65CFF] uppercase font-semibold">
              PROJECT INQUIRIES & PARTNERSHIPS
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#F5F3F8] tracking-tight mb-6">
            Let’s Build Something <br />
            Exceptional.
          </h1>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <p className="text-base text-[#A5A2B2] max-w-2xl leading-relaxed">
              Tell us about your company, your vision, and your timeline. We review every brief thoroughly and reply within 24 business hours.
            </p>

            <div className="p-3 rounded-xl bg-[#101016] border border-[#F5F3F8]/10 text-xs text-[#A5A2B2] max-w-xs shrink-0 font-mono">
              <span className="text-[#B65CFF] font-semibold block mb-1">CURRENT STATUS</span>
              Open for selective client onboarding across Q1/Q2.
            </div>
          </div>
        </div>

        {/* Main Form & Context Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Contact Form */}
          <div className="lg:col-span-8 bg-[#101016]/90 border border-[#F5F3F8]/10 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-md">
            <div className="mb-8 pb-4 border-b border-[#F5F3F8]/10 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-[#F5F3F8] tracking-tight">
                  Start a Project Brief
                </h2>
                <p className="text-xs text-[#A5A2B2] mt-1">
                  Fill in your project specifications below to initiate our discovery evaluation.
                </p>
              </div>
              <span className="text-[10px] font-mono text-[#B65CFF] border border-[#B65CFF]/30 px-2.5 py-1 rounded-full">
                CONFIDENTIAL
              </span>
            </div>

            <ProjectInquiryForm />
          </div>

          {/* Right: Studio Direct Channels & Working Ethos */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Direct Studio Channels */}
            <div className="p-6 rounded-3xl bg-[#101016] border border-[#F5F3F8]/10 space-y-4">
              <span className="text-xs font-mono tracking-widest text-[#B65CFF] uppercase block font-semibold">
                DIRECT STUDIO CHANNELS
              </span>

              <div className="space-y-3 text-xs text-[#A5A2B2]">
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#B65CFF] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#F5F3F8] block">General Inquiries & RFPs</span>
                    <a href="mailto:hello@formora.studio" className="hover:text-[#B65CFF] transition-colors">
                      hello@formora.studio
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-2 border-t border-white/5">
                  <Globe className="w-4 h-4 text-[#B65CFF] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#F5F3F8] block">Studio Location</span>
                    <span>Global Remote-First Practice (Americas / EMEA)</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-2 border-t border-white/5">
                  <Clock className="w-4 h-4 text-[#B65CFF] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#F5F3F8] block">Response Velocity</span>
                    <span>Within 24 business hours</span>
                  </div>
                </div>
              </div>
            </div>

            {/* What Happens Next */}
            <div className="p-6 rounded-3xl bg-[#101016] border border-[#F5F3F8]/10 space-y-4">
              <span className="text-xs font-mono tracking-widest text-[#F5F3F8] uppercase block font-semibold">
                WHAT HAPPENS NEXT
              </span>

              <ol className="space-y-3 text-xs text-[#A5A2B2]">
                <li className="flex items-start gap-2.5">
                  <span className="font-mono text-[#B65CFF] font-bold">01.</span>
                  <span>A creative director reviews your goals, existing assets, and timeline.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-mono text-[#B65CFF] font-bold">02.</span>
                  <span>We schedule an initial 20-minute video discovery call to align expectations.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-mono text-[#B65CFF] font-bold">03.</span>
                  <span>You receive a structured Statement of Work (SOW) with clear scope, milestones, and deliverables.</span>
                </li>
              </ol>
            </div>

            {/* Privacy Guarantee */}
            <div className="p-4 rounded-2xl bg-[#0B0B10] border border-white/5 flex items-center gap-3 text-xs text-[#A5A2B2]">
              <ShieldCheck className="w-5 h-5 text-[#B65CFF] shrink-0" />
              <span>We execute Non-Disclosure Agreements (NDA) upon request prior to confidential discussions.</span>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
