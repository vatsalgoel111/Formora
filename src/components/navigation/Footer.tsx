import React, { useState } from 'react';
import { FormoraLogo, FormoraMark } from '../brand/FormoraLogo';
import { ArrowUpRight, Mail, MapPin, Globe, Shield, FileText } from 'lucide-react';

interface FooterProps {
  onNavigate: (path: string) => void;
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenContact }) => {
  const [activeLegalModal, setActiveLegalModal] = useState<'privacy' | 'terms' | null>(null);
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="relative bg-[#08080B] border-t border-[#F5F3F8]/10 pt-16 sm:pt-20 pb-12 overflow-hidden">
        {/* Subtle background ambient glow */}
        <div 
          className="absolute bottom-0 right-1/4 w-[450px] h-[250px] pointer-events-none opacity-15 blur-3xl z-0"
          style={{
            background: 'radial-gradient(circle, rgba(182, 92, 255, 0.25) 0%, rgba(8, 8, 11, 0) 70%)',
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Top Footer Tier: Brand Lockup & Direct Inquiry Prompt */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 pb-16 border-b border-[#F5F3F8]/10">
            <div className="lg:col-span-5 flex flex-col gap-5">
              <FormoraLogo variant="horizontal" size="md" showStudioLabel={true} />
              
              <p className="text-sm sm:text-base text-[#A5A2B2] max-w-md leading-relaxed">
                Formora creates distinctive websites, compelling brand experiences, and creative marketing systems that help ambitious businesses move forward.
              </p>

              <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#B65CFF]">
                <span>BUILT TO MAKE AN IMPRESSION</span>
              </div>

              {/* Verified Direct Contact */}
              <div className="flex flex-col gap-2 pt-2 text-xs sm:text-sm text-[#A5A2B2]">
                <a 
                  href="mailto:hello@formora.studio"
                  className="inline-flex items-center gap-2 hover:text-[#F5F3F8] transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#B65CFF]" />
                  <span>hello@formora.studio</span>
                </a>
                <div className="inline-flex items-center gap-2">
                  <Globe className="w-4 h-4 text-[#B65CFF]" />
                  <span>Global Practice · Remote-First Studio</span>
                </div>
              </div>
            </div>

            {/* Navigation Columns */}
            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
              {/* Studio Index */}
              <div className="flex flex-col gap-3.5">
                <span className="text-xs font-mono tracking-widest text-[#F5F3F8] uppercase font-medium">
                  Studio
                </span>
                <ul className="flex flex-col gap-2 text-xs sm:text-sm text-[#A5A2B2]">
                  <li>
                    <button 
                      onClick={() => onNavigate('/')} 
                      className="hover:text-[#F5F3F8] transition-colors cursor-pointer"
                    >
                      Home
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => onNavigate('/work')} 
                      className="hover:text-[#F5F3F8] transition-colors cursor-pointer"
                    >
                      Selected Work
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => onNavigate('/studio')} 
                      className="hover:text-[#F5F3F8] transition-colors cursor-pointer"
                    >
                      About & Ethos
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => onNavigate('/contact')} 
                      className="hover:text-[#F5F3F8] transition-colors cursor-pointer"
                    >
                      Project Inquiries
                    </button>
                  </li>
                </ul>
              </div>

              {/* Services Breakdown */}
              <div className="flex flex-col gap-3.5">
                <span className="text-xs font-mono tracking-widest text-[#F5F3F8] uppercase font-medium">
                  Services
                </span>
                <ul className="flex flex-col gap-2 text-xs sm:text-sm text-[#A5A2B2]">
                  <li>
                    <button 
                      onClick={() => onNavigate('/services/web-design')} 
                      className="hover:text-[#F5F3F8] transition-colors text-left cursor-pointer"
                    >
                      Web Design & Dev
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => onNavigate('/services/branding')} 
                      className="hover:text-[#F5F3F8] transition-colors text-left cursor-pointer"
                    >
                      Brand Identity
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => onNavigate('/services/social-media')} 
                      className="hover:text-[#F5F3F8] transition-colors text-left cursor-pointer"
                    >
                      Social Media
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => onNavigate('/services/content-writing')} 
                      className="hover:text-[#F5F3F8] transition-colors text-left cursor-pointer"
                    >
                      Content Writing
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => onNavigate('/services/growth-marketing')} 
                      className="hover:text-[#F5F3F8] transition-colors text-left cursor-pointer"
                    >
                      Growth Marketing
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => onNavigate('/services/influencer-ugc')} 
                      className="hover:text-[#F5F3F8] transition-colors text-left cursor-pointer"
                    >
                      Influencer & UGC
                    </button>
                  </li>
                </ul>
              </div>

              {/* Evergreen Engagement & Call to Action */}
              <div className="col-span-2 sm:col-span-1 flex flex-col gap-3.5">
                <span className="text-xs font-mono tracking-widest text-[#F5F3F8] uppercase font-medium">
                  Engagement
                </span>
                <p className="text-xs text-[#A5A2B2] leading-relaxed">
                  Have a project in mind? Let's discuss what we can create together.
                </p>
                <button
                  type="button"
                  onClick={onOpenContact}
                  className="mt-2 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-semibold tracking-wider text-black bg-[#B65CFF] hover:bg-[#D0A0FF] rounded-xl transition-colors cursor-pointer"
                >
                  <span>START A PROJECT</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Middle Brand Pillars Bar */}
          <div className="py-7 border-b border-[#F5F3F8]/10 grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <span className="text-xs font-mono text-[#B65CFF] tracking-[0.2em] font-semibold">
                01. CREATIVE
              </span>
              <span className="hidden sm:inline text-xs text-[#A5A2B2]">· Distinctive identities</span>
            </div>

            <div className="flex items-center gap-3 justify-center">
              <span className="text-xs font-mono text-[#B65CFF] tracking-[0.2em] font-semibold">
                02. DIGITAL
              </span>
              <span className="hidden sm:inline text-xs text-[#A5A2B2]">· High-velocity web flagships</span>
            </div>

            <div className="flex items-center gap-3 justify-center md:justify-end">
              <span className="text-xs font-mono text-[#B65CFF] tracking-[0.2em] font-semibold">
                03. GROWTH
              </span>
              <span className="hidden sm:inline text-xs text-[#A5A2B2]">· Creator-led campaigns</span>
            </div>
          </div>

          {/* Bottom Legal & Copyright Tier */}
          <div className="pt-7 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A5A2B2]">
            <div className="flex items-center gap-2">
              <FormoraMark size={16} />
              <span>© {currentYear} FORMORA Studio. All rights reserved.</span>
            </div>

            <div className="flex items-center gap-6">
              <button
                type="button"
                onClick={() => setActiveLegalModal('privacy')}
                className="hover:text-[#F5F3F8] transition-colors cursor-pointer"
              >
                Privacy Policy
              </button>
              <button
                type="button"
                onClick={() => setActiveLegalModal('terms')}
                className="hover:text-[#F5F3F8] transition-colors cursor-pointer"
              >
                Terms of Engagement
              </button>
              <span className="text-neutral-600">·</span>
              <span className="text-neutral-500 font-mono">EST. 2026</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Accessible Modal: Privacy Policy */}
      {activeLegalModal === 'privacy' && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setActiveLegalModal(null)}
          role="dialog"
          aria-modal="true"
        >
          <div 
            className="bg-[#101016] border border-[#F5F3F8]/10 rounded-2xl max-w-xl w-full p-6 sm:p-8 max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-[#F5F3F8]/10 mb-6">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-[#B65CFF]" />
                <h3 className="text-lg font-bold text-[#F5F3F8]">Client Privacy Policy</h3>
              </div>
              <button 
                onClick={() => setActiveLegalModal(null)}
                className="text-sm font-mono text-[#A5A2B2] hover:text-[#F5F3F8] px-2 py-1 cursor-pointer"
              >
                CLOSE [ESC]
              </button>
            </div>
            <div className="text-sm text-[#A5A2B2] space-y-4 leading-relaxed">
              <p>
                At Formora, we respect confidentiality and intellectual property. Any information, product roadmaps, and business credentials shared during project inquiries or contracted engagements remain strictly private.
              </p>
              <p>
                We do not sell, license, or share prospective or active client data with third-party data brokers or marketing affiliates.
              </p>
              <p>
                All concept studies featured on this website are authored for creative exploration and design research. Inquiries regarding data processing may be addressed to <span className="text-[#F5F3F8]">hello@formora.studio</span>.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Accessible Modal: Terms of Engagement */}
      {activeLegalModal === 'terms' && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setActiveLegalModal(null)}
          role="dialog"
          aria-modal="true"
        >
          <div 
            className="bg-[#101016] border border-[#F5F3F8]/10 rounded-2xl max-w-xl w-full p-6 sm:p-8 max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-[#F5F3F8]/10 mb-6">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-[#B65CFF]" />
                <h3 className="text-lg font-bold text-[#F5F3F8]">Terms of Engagement</h3>
              </div>
              <button 
                onClick={() => setActiveLegalModal(null)}
                className="text-sm font-mono text-[#A5A2B2] hover:text-[#F5F3F8] px-2 py-1 cursor-pointer"
              >
                CLOSE [ESC]
              </button>
            </div>
            <div className="text-sm text-[#A5A2B2] space-y-4 leading-relaxed">
              <p>
                Formora operates under defined Master Services Agreements (MSA) and project Statements of Work (SOW). Project scopes, milestone reviews, and intellectual property transfers are formalized in writing prior to project kickoff.
              </p>
              <p>
                Client projects include dedicated review cycles, milestone approvals, and defined warranty periods following production deployment.
              </p>
              <p>
                All creative work is executed with rigorous attention to international accessibility, standards-compliant source code, and responsive performance.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
