import React, { useState } from 'react';
import { InquiryFormData } from '../../types';
import { CheckCircle2, ArrowRight, Calendar, AlertCircle, Sparkles } from 'lucide-react';

interface ProjectInquiryFormProps {
  onSuccess?: () => void;
  className?: string;
}

const AVAILABLE_SERVICES = [
  'Website Design & Development',
  'E-Commerce & Digital Commerce',
  'Brand Identity & Creative Design',
  'Social Media Management',
  'Content Writing & Copywriting',
  'Growth Marketing Strategy',
  'Influencer & UGC Campaigns',
  'Multiple Services / Full Suite',
  'Not Sure Yet (Need Advisory)',
];

const BUDGET_RANGES = [
  '$5,000 — $10,000',
  '$10,000 — $25,000',
  '$25,000 — $50,000',
  '$50,000+',
];

const TIMELINES = [
  'Within 30 Days (Immediate)',
  '1 — 2 Months',
  '3+ Months',
  'Flexible / Exploring',
];

export const ProjectInquiryForm: React.FC<ProjectInquiryFormProps> = ({
  onSuccess,
  className = '',
}) => {
  const [formData, setFormData] = useState<InquiryFormData>({
    fullName: '',
    businessEmail: '',
    companyName: '',
    websiteUrl: '',
    selectedServices: ['Website Design & Development'],
    budgetRange: '$10,000 — $25,000',
    timeline: '1 — 2 Months',
    projectOverview: '',
    consentContact: true,
  });

  const [errors, setErrors] = useState<Partial<Record<keyof InquiryFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [showCalendarModal, setShowCalendarModal] = useState<boolean>(false);

  const toggleService = (service: string) => {
    setFormData((prev) => {
      const exists = prev.selectedServices.includes(service);
      if (exists) {
        if (prev.selectedServices.length === 1) return prev; // Keep at least one
        return {
          ...prev,
          selectedServices: prev.selectedServices.filter((s) => s !== service),
        };
      } else {
        return {
          ...prev,
          selectedServices: [...prev.selectedServices, service],
        };
      }
    });
  };

  const validate = (): boolean => {
    const errs: Partial<Record<keyof InquiryFormData, string>> = {};

    if (!formData.fullName.trim()) {
      errs.fullName = 'Full name is required.';
    }

    if (!formData.businessEmail.trim()) {
      errs.businessEmail = 'Business email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.businessEmail)) {
      errs.businessEmail = 'Please provide a valid email address.';
    }

    if (!formData.companyName.trim()) {
      errs.companyName = 'Company or brand name is required.';
    }

    if (!formData.projectOverview.trim() || formData.projectOverview.length < 15) {
      errs.projectOverview = 'Please provide at least a brief summary of your project (min. 15 characters).';
    }

    if (!formData.consentContact) {
      errs.consentContact = 'Please confirm consent to be contacted regarding this inquiry.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate submission with realistic latency
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      if (onSuccess) onSuccess();
    }, 800);
  };

  if (isSubmitted) {
    return (
      <div className={`p-8 sm:p-12 rounded-3xl bg-[#101016] border border-[#B65CFF]/30 text-center relative overflow-hidden ${className}`}>
        <div 
          className="absolute -top-24 -right-24 w-72 h-72 rounded-full pointer-events-none opacity-30 blur-3xl"
          style={{ background: 'radial-gradient(circle, #B65CFF 0%, transparent 70%)' }}
        />

        <div className="w-16 h-16 rounded-2xl bg-[#B65CFF]/10 border border-[#B65CFF]/40 text-[#B65CFF] flex items-center justify-center mx-auto mb-6 shadow-xl">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#F5F3F8] mb-3">
          Inquiry Received
        </h3>

        <p className="text-sm sm:text-base text-[#A5A2B2] max-w-lg mx-auto leading-relaxed mb-6">
          Thank you, <span className="text-[#F5F3F8] font-medium">{formData.fullName}</span>. A Formora creative director will review your brief for <span className="text-[#F5F3F8] font-medium">{formData.companyName}</span> and reply within 24 business hours to <span className="text-[#B65CFF]">{formData.businessEmail}</span>.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 border-t border-[#F5F3F8]/10 max-w-md mx-auto">
          <button
            type="button"
            onClick={() => setShowCalendarModal(true)}
            className="w-full sm:w-auto px-5 py-3 text-xs font-semibold tracking-wider text-black bg-[#F5F3F8] hover:bg-[#B65CFF] rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
          >
            <Calendar className="w-4 h-4" />
            <span>BOOK A 20-MIN DISCOVERY CALL</span>
          </button>
          <button
            type="button"
            onClick={() => {
              setIsSubmitted(false);
              setFormData({
                fullName: '',
                businessEmail: '',
                companyName: '',
                websiteUrl: '',
                selectedServices: ['Website Design & Development'],
                budgetRange: '$10,000 — $25,000',
                timeline: '1 — 2 Months',
                projectOverview: '',
                consentContact: true,
              });
            }}
            className="w-full sm:w-auto px-4 py-3 text-xs font-mono tracking-wider text-[#A5A2B2] hover:text-[#F5F3F8] transition-colors"
          >
            Submit Another Inquiry
          </button>
        </div>

        {/* Discovery Call Scheduler Modal */}
        {showCalendarModal && (
          <div 
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 text-left"
            onClick={() => setShowCalendarModal(false)}
            role="dialog"
            aria-modal="true"
          >
            <div 
              className="bg-[#101016] border border-[#F5F3F8]/10 rounded-2xl max-w-lg w-full p-6 sm:p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between pb-4 border-b border-[#F5F3F8]/10 mb-4">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-[#B65CFF]" />
                  <h4 className="text-base font-bold text-[#F5F3F8]">Discovery Call Scheduling</h4>
                </div>
                <button 
                  onClick={() => setShowCalendarModal(false)}
                  className="text-xs font-mono text-[#A5A2B2] hover:text-[#F5F3F8]"
                >
                  [CLOSE]
                </button>
              </div>

              <p className="text-xs text-[#A5A2B2] leading-relaxed mb-4">
                Direct calendar booking is synchronized with Formora's creative directors. Select a preliminary consultation window to review technical requirements and initial positioning.
              </p>

              <div className="space-y-3 mb-6">
                <div className="p-3 rounded-lg bg-[#171720] border border-[#F5F3F8]/10 flex items-center justify-between text-xs">
                  <span className="text-[#F5F3F8]">Tomorrow · 10:00 AM — 10:30 AM EST</span>
                  <span className="text-[#B65CFF] font-mono">Available</span>
                </div>
                <div className="p-3 rounded-lg bg-[#171720] border border-[#F5F3F8]/10 flex items-center justify-between text-xs">
                  <span className="text-[#F5F3F8]">Friday · 2:00 PM — 2:30 PM EST</span>
                  <span className="text-[#B65CFF] font-mono">Available</span>
                </div>
                <div className="p-3 rounded-lg bg-[#171720] border border-[#F5F3F8]/10 flex items-center justify-between text-xs">
                  <span className="text-[#F5F3F8]">Monday · 11:30 AM — 12:00 PM EST</span>
                  <span className="text-[#B65CFF] font-mono">Available</span>
                </div>
              </div>

              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => {
                    alert(`Discovery call request recorded for ${formData.businessEmail}. A calendar invite has been dispatched.`);
                    setShowCalendarModal(false);
                  }}
                  className="w-full py-2.5 text-xs font-semibold tracking-wider text-black bg-[#B65CFF] hover:bg-[#D0A0FF] rounded-lg transition-colors text-center"
                >
                  CONFIRM CONSULTATION
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`space-y-8 ${className}`} noValidate>
      
      {/* 1. Services Selector (Interactive segmented tabs) */}
      <div className="space-y-3">
        <label className="block text-xs font-mono tracking-widest text-[#F5F3F8] uppercase">
          01. Services Required (Select all that apply)
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
          {AVAILABLE_SERVICES.map((service) => {
            const isSelected = formData.selectedServices.includes(service);
            return (
              <button
                key={service}
                type="button"
                onClick={() => toggleService(service)}
                className={`px-3.5 py-2.5 text-xs font-medium rounded-xl text-left border transition-all flex items-center justify-between gap-2 cursor-pointer ${
                  isSelected
                    ? 'bg-[#171720] border-[#B65CFF] text-[#F5F3F8] shadow-sm'
                    : 'bg-[#101016] border-[#F5F3F8]/10 text-[#A5A2B2] hover:border-[#F5F3F8]/30 hover:text-[#F5F3F8]'
                }`}
              >
                <span className="truncate">{service}</span>
                <span
                  className={`w-3.5 h-3.5 rounded-full border shrink-0 flex items-center justify-center ${
                    isSelected ? 'border-[#B65CFF] bg-[#B65CFF]' : 'border-neutral-600'
                  }`}
                >
                  {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-black" />}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. Client & Organization Details */}
      <div className="space-y-4">
        <label className="block text-xs font-mono tracking-widest text-[#F5F3F8] uppercase">
          02. Contact & Brand Information
        </label>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="fullName" className="block text-xs text-[#A5A2B2] mb-1.5">
              Your Name *
            </label>
            <input
              id="fullName"
              type="text"
              placeholder="e.g. Julian Vance"
              value={formData.fullName}
              onChange={(e) => {
                setFormData({ ...formData, fullName: e.target.value });
                if (errors.fullName) setErrors({ ...errors, fullName: undefined });
              }}
              className={`w-full px-4 py-3 rounded-xl bg-[#101016] border text-sm text-[#F5F3F8] placeholder-neutral-600 focus:outline-none focus:ring-2 focus:ring-[#B65CFF] transition-all ${
                errors.fullName ? 'border-red-500/80' : 'border-[#F5F3F8]/10'
              }`}
            />
            {errors.fullName && (
              <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>{errors.fullName}</span>
              </p>
            )}
          </div>

          <div>
            <label htmlFor="businessEmail" className="block text-xs text-[#A5A2B2] mb-1.5">
              Business Email *
            </label>
            <input
              id="businessEmail"
              type="email"
              placeholder="julian@company.com"
              value={formData.businessEmail}
              onChange={(e) => {
                setFormData({ ...formData, businessEmail: e.target.value });
                if (errors.businessEmail) setErrors({ ...errors, businessEmail: undefined });
              }}
              className={`w-full px-4 py-3 rounded-xl bg-[#101016] border text-sm text-[#F5F3F8] placeholder-neutral-600 focus:outline-none focus:ring-2 focus:ring-[#B65CFF] transition-all ${
                errors.businessEmail ? 'border-red-500/80' : 'border-[#F5F3F8]/10'
              }`}
            />
            {errors.businessEmail && (
              <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>{errors.businessEmail}</span>
              </p>
            )}
          </div>

          <div>
            <label htmlFor="companyName" className="block text-xs text-[#A5A2B2] mb-1.5">
              Company / Brand Name *
            </label>
            <input
              id="companyName"
              type="text"
              placeholder="e.g. Lumina Technologies"
              value={formData.companyName}
              onChange={(e) => {
                setFormData({ ...formData, companyName: e.target.value });
                if (errors.companyName) setErrors({ ...errors, companyName: undefined });
              }}
              className={`w-full px-4 py-3 rounded-xl bg-[#101016] border text-sm text-[#F5F3F8] placeholder-neutral-600 focus:outline-none focus:ring-2 focus:ring-[#B65CFF] transition-all ${
                errors.companyName ? 'border-red-500/80' : 'border-[#F5F3F8]/10'
              }`}
            />
            {errors.companyName && (
              <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>{errors.companyName}</span>
              </p>
            )}
          </div>

          <div>
            <label htmlFor="websiteUrl" className="block text-xs text-[#A5A2B2] mb-1.5">
              Current Website (Optional)
            </label>
            <input
              id="websiteUrl"
              type="url"
              placeholder="https://company.com"
              value={formData.websiteUrl}
              onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-[#101016] border border-[#F5F3F8]/10 text-sm text-[#F5F3F8] placeholder-neutral-600 focus:outline-none focus:ring-2 focus:ring-[#B65CFF] transition-all"
            />
          </div>
        </div>
      </div>

      {/* 3. Budget & Timeline */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="block text-xs font-mono tracking-widest text-[#F5F3F8] uppercase">
            03. Estimated Budget
          </label>
          <div className="grid grid-cols-2 gap-2">
            {BUDGET_RANGES.map((b) => (
              <button
                key={b}
                type="button"
                onClick={() => setFormData({ ...formData, budgetRange: b })}
                className={`px-3 py-2 text-xs font-medium rounded-lg text-center border transition-all ${
                  formData.budgetRange === b
                    ? 'bg-[#171720] border-[#B65CFF] text-[#F5F3F8]'
                    : 'bg-[#101016] border-[#F5F3F8]/10 text-[#A5A2B2] hover:border-[#F5F3F8]/30'
                }`}
              >
                {b}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-xs font-mono tracking-widest text-[#F5F3F8] uppercase">
            04. Desired Timeline
          </label>
          <div className="grid grid-cols-2 gap-2">
            {TIMELINES.map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setFormData({ ...formData, timeline: t })}
                className={`px-3 py-2 text-xs font-medium rounded-lg text-center border transition-all ${
                  formData.timeline === t
                    ? 'bg-[#171720] border-[#B65CFF] text-[#F5F3F8]'
                    : 'bg-[#101016] border-[#F5F3F8]/10 text-[#A5A2B2] hover:border-[#F5F3F8]/30'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 4. Project Overview */}
      <div className="space-y-2">
        <label htmlFor="projectOverview" className="block text-xs font-mono tracking-widest text-[#F5F3F8] uppercase">
          05. Project Challenge & Goals *
        </label>
        <textarea
          id="projectOverview"
          rows={4}
          placeholder="Briefly describe what your business does, your objectives, key deliverables, and any aesthetic references..."
          value={formData.projectOverview}
          onChange={(e) => {
            setFormData({ ...formData, projectOverview: e.target.value });
            if (errors.projectOverview) setErrors({ ...errors, projectOverview: undefined });
          }}
          className={`w-full px-4 py-3 rounded-xl bg-[#101016] border text-sm text-[#F5F3F8] placeholder-neutral-600 focus:outline-none focus:ring-2 focus:ring-[#B65CFF] transition-all ${
            errors.projectOverview ? 'border-red-500/80' : 'border-[#F5F3F8]/10'
          }`}
        />
        {errors.projectOverview && (
          <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
            <AlertCircle className="w-3.5 h-3.5" />
            <span>{errors.projectOverview}</span>
          </p>
        )}
      </div>

      {/* 5. Consent & Privacy */}
      <div className="flex items-start gap-3">
        <input
          id="consentContact"
          type="checkbox"
          checked={formData.consentContact}
          onChange={(e) => {
            setFormData({ ...formData, consentContact: e.target.checked });
            if (errors.consentContact) setErrors({ ...errors, consentContact: undefined });
          }}
          className="mt-1 w-4 h-4 rounded bg-[#101016] border-[#F5F3F8]/20 text-[#B65CFF] focus:ring-[#B65CFF]"
        />
        <label htmlFor="consentContact" className="text-xs text-[#A5A2B2] leading-relaxed">
          I agree to allow Formora to process this information to evaluate project scope and communicate regarding this inquiry.
        </label>
      </div>
      {errors.consentContact && (
        <p className="text-xs text-red-400 flex items-center gap-1">
          <AlertCircle className="w-3.5 h-3.5" />
          <span>{errors.consentContact}</span>
        </p>
      )}

      {/* Submission Actions */}
      <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#F5F3F8]/10">
        <div className="flex items-center gap-2 text-xs font-mono text-[#A5A2B2]">
          <span className="w-2 h-2 rounded-full bg-[#B65CFF]" />
          <span>Direct Studio Review · 24h Response</span>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto px-8 py-3.5 text-xs font-semibold tracking-wider text-black bg-[#F5F3F8] hover:bg-[#B65CFF] hover:text-black rounded-xl transition-all shadow-xl flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
        >
          <span>{isSubmitting ? 'TRANSMITTING BRIEF...' : 'SUBMIT PROJECT INQUIRY'}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </form>
  );
};
