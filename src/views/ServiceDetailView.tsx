import React, { useState } from 'react';
import { ServiceDetail } from '../types';
import { ArrowLeft, ArrowRight, CheckCircle2, ChevronDown, ChevronUp, Code2, ShieldCheck, Zap } from 'lucide-react';

interface ServiceDetailViewProps {
  service: ServiceDetail;
  onNavigate: (path: string) => void;
  onStartProject: () => void;
}

export const ServiceDetailView: React.FC<ServiceDetailViewProps> = ({
  service,
  onNavigate,
  onStartProject,
}) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="pt-28 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <div className="mb-8">
          <button
            type="button"
            onClick={() => onNavigate('/services')}
            className="inline-flex items-center gap-2 text-xs font-mono text-[#A5A2B2] hover:text-[#B65CFF] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>BACK TO ALL SERVICES</span>
          </button>
        </div>

        {/* Hero Header */}
        <div className="border-b border-[#F5F3F8]/10 pb-12 mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono text-[#B65CFF] tracking-widest uppercase font-semibold">
              SERVICE SPECIFICATION
            </span>
            {service.isPrimary && (
              <>
                <span className="text-neutral-600">·</span>
                <span className="text-xs font-mono text-[#F5F3F8] uppercase bg-[#B65CFF]/20 px-2.5 py-0.5 rounded-full border border-[#B65CFF]/40">
                  PRIMARY AGENCY FOCUS
                </span>
              </>
            )}
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#F5F3F8] tracking-tight mb-6">
            {service.title}
          </h1>

          <p className="text-lg sm:text-xl text-[#A5A2B2] max-w-3xl leading-relaxed mb-8">
            {service.tagline}
          </p>

          <div className="p-6 rounded-2xl bg-[#101016] border border-[#F5F3F8]/10 max-w-3xl">
            <span className="text-xs font-mono text-[#B65CFF] tracking-widest uppercase block mb-2 font-semibold">
              THE COMMERCIAL PROBLEM
            </span>
            <p className="text-sm text-[#A5A2B2] leading-relaxed">
              {service.businessProblem}
            </p>
          </div>
        </div>

        {/* Practice Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 py-12 border-b border-[#F5F3F8]/10 items-start">
          <div className="lg:col-span-4">
            <span className="text-xs font-mono tracking-widest text-[#B65CFF] uppercase block mb-2">
              01 // APPROACH
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#F5F3F8] tracking-tight">
              Our Practice Philosophy
            </h2>
          </div>
          <div className="lg:col-span-8">
            <p className="text-base text-[#A5A2B2] leading-relaxed">
              {service.overview}
            </p>
          </div>
        </div>

        {/* Full Capabilities Breakdown */}
        <div className="py-16 border-b border-[#F5F3F8]/10">
          <div className="mb-12">
            <span className="text-xs font-mono tracking-widest text-[#B65CFF] uppercase block mb-2">
              02 // CAPABILITIES
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#F5F3F8] tracking-tight">
              What Is Included In This Discipline
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.capabilities.map((cap, i) => (
              <div 
                key={cap.name}
                className="p-6 rounded-2xl bg-[#101016] border border-[#F5F3F8]/5 hover:border-[#B65CFF]/25 transition-all duration-300"
              >
                <span className="text-xs font-mono text-[#B65CFF] block mb-2">
                  MODULE 0{i + 1}
                </span>
                <h4 className="text-base font-bold text-[#F5F3F8] mb-2">
                  {cap.name}
                </h4>
                <p className="text-xs text-[#A5A2B2] leading-relaxed">
                  {cap.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Process & Milestone Sequence */}
        <div className="py-16 border-b border-[#F5F3F8]/10">
          <div className="mb-12">
            <span className="text-xs font-mono tracking-widest text-[#B65CFF] uppercase block mb-2">
              03 // WORKFLOW
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#F5F3F8] tracking-tight">
              Delivery Sequence & Gates
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.process.map((st) => (
              <div key={st.step} className="p-6 rounded-2xl bg-[#101016] border border-[#F5F3F8]/5">
                <span className="text-base font-mono text-[#B65CFF] font-bold block mb-2">
                  {st.step}
                </span>
                <h4 className="text-sm font-bold text-[#F5F3F8] mb-2">
                  {st.title}
                </h4>
                <p className="text-xs text-[#A5A2B2] leading-relaxed">
                  {st.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Deliverables Checklist */}
        <div className="py-16 border-b border-[#F5F3F8]/10">
          <div className="mb-8">
            <span className="text-xs font-mono tracking-widest text-[#B65CFF] uppercase block mb-2">
              04 // DELIVERABLES
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#F5F3F8] tracking-tight">
              Standard Deliverables Checklist
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {service.deliverables.map((del) => (
              <div key={del} className="p-4 rounded-xl bg-[#101016] border border-[#F5F3F8]/5 flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#B65CFF] shrink-0" />
                <span className="text-xs sm:text-sm text-[#F5F3F8]">{del}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Frequently Asked Questions Accordion */}
        <div className="py-16 border-b border-[#F5F3F8]/10">
          <div className="mb-12">
            <span className="text-xs font-mono tracking-widest text-[#B65CFF] uppercase block mb-2">
              05 // FAQS
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#F5F3F8] tracking-tight">
              Common Questions Regarding This Service
            </h2>
          </div>

          <div className="space-y-4 max-w-3xl">
            {service.faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div 
                  key={faq.question}
                  className="rounded-2xl border border-[#F5F3F8]/10 bg-[#101016] overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#171720]/50 transition-colors"
                  >
                    <span className="text-sm sm:text-base font-semibold text-[#F5F3F8]">
                      {faq.question}
                    </span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-[#B65CFF] shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-neutral-500 shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-[#A5A2B2] leading-relaxed border-t border-[#F5F3F8]/5 pt-4">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Conversion CTA */}
        <div className="pt-16 p-8 sm:p-12 rounded-3xl bg-[#12121A] border border-[#B65CFF]/30 flex flex-col md:flex-row items-center justify-between gap-8 mt-12">
          <div>
            <span className="text-xs font-mono text-[#B65CFF] tracking-widest uppercase block mb-1 font-semibold">
              PROJECT INQUIRY
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#F5F3F8] tracking-tight">
              Ready to begin with {service.title}?
            </h3>
            <p className="text-xs sm:text-sm text-[#A5A2B2] mt-2 max-w-lg leading-relaxed">
              Every collaboration proposal is tailored directly to your technical requirements and business objectives. We respond within 24 hours.
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
