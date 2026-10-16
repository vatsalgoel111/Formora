import React, { useState } from 'react';
import { Project } from '../../types';
import { 
  Laptop, 
  Smartphone, 
  Layers, 
  Check, 
  ExternalLink,
  MapPin,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';

interface ProjectMockupFrameProps {
  project: Project;
  className?: string;
  isCompact?: boolean;
}

export const ProjectMockupFrame: React.FC<ProjectMockupFrameProps> = ({
  project,
  className = '',
  isCompact = false,
}) => {
  const [activeTab, setActiveTab] = useState<'primary' | 'secondary' | 'details'>('primary');

  // Render bespoke editorial view based on project and activeTab
  const renderContent = () => {
    switch (project.id) {
      case 'cru-communications':
        return (
          <div className="relative w-full h-full min-h-[380px] sm:min-h-[440px] bg-[#0E0E14] flex flex-col justify-between p-6 sm:p-8 select-none">
            {/* Top Interactive Tabs Bar */}
            <div className="flex flex-wrap items-center justify-between border-b border-[#F5F3F8]/10 pb-4 gap-3">
              <div className="flex items-center gap-1.5 p-1 bg-[#161622] rounded-lg border border-white/5">
                <button
                  type="button"
                  onClick={() => setActiveTab('primary')}
                  className={`px-3 py-1 text-[11px] font-mono rounded transition-colors cursor-pointer ${
                    activeTab === 'primary' ? 'bg-[#FF4D00] text-white font-semibold' : 'text-[#A5A2B2] hover:text-[#F5F3F8]'
                  }`}
                >
                  Executive Portal
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('secondary')}
                  className={`px-3 py-1 text-[11px] font-mono rounded transition-colors cursor-pointer ${
                    activeTab === 'secondary' ? 'bg-[#222234] text-[#F5F3F8] font-semibold' : 'text-[#A5A2B2] hover:text-[#F5F3F8]'
                  }`}
                >
                  Mobile View
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('details')}
                  className={`px-3 py-1 text-[11px] font-mono rounded transition-colors cursor-pointer ${
                    activeTab === 'details' ? 'bg-[#222234] text-[#F5F3F8] font-semibold' : 'text-[#A5A2B2] hover:text-[#F5F3F8]'
                  }`}
                >
                  Strategy Framework
                </button>
              </div>

              <span className="text-[10px] font-mono text-[#FF4D00] tracking-wider uppercase flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF4D00] animate-pulse" />
                FOUNDER & CXO BRANDING
              </span>
            </div>

            {/* TAB: Primary Executive Portal */}
            {activeTab === 'primary' && (
              <div className="my-auto py-6">
                <div className="max-w-md space-y-4">
                  {/* CRU Signature Orange Logo Badge */}
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#FF4D00] flex items-center justify-center shadow-lg shadow-[#FF4D00]/20">
                      <svg viewBox="0 0 100 100" className="w-6 h-6" fill="none">
                        <circle cx="38" cy="36" r="6" fill="#FFFFFF" />
                        <circle cx="62" cy="36" r="6" fill="#FFFFFF" />
                        <path d="M30 45 V 60 C 30 72 38 78 50 78 C 62 78 70 72 70 60 V 45" stroke="#FFFFFF" strokeWidth="10" strokeLinecap="round" />
                      </svg>
                    </div>
                    <div>
                      <span className="text-sm font-bold tracking-tight text-[#F5F3F8] block">CRÜ Communications</span>
                      <span className="text-[10px] font-mono text-[#FF4D00] uppercase tracking-wider">Kolkata, India · Founder Pragya Bagri</span>
                    </div>
                  </div>

                  <h4 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#F5F3F8] leading-tight">
                    Curate a lasting <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4D00] via-[#FF854D] to-[#FAF8F5]">
                      legacy.
                    </span>
                  </h4>

                  <p className="text-xs text-[#A5A2B2] leading-relaxed">
                    Helping founders, CXOs, and industry leaders curate a lasting legacy through strategic personal branding, executive LinkedIn presence, and thought leadership narratives.
                  </p>

                  <div className="grid grid-cols-2 gap-2 pt-2 text-[11px] font-mono">
                    <div className="p-2.5 rounded-lg bg-[#14141E] border border-white/5">
                      <span className="text-[#A5A2B2] block text-[9px]">FOCUS 01</span>
                      <span className="font-semibold text-[#F5F3F8]">Founder Presence</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-[#14141E] border border-white/5">
                      <span className="text-[#A5A2B2] block text-[9px]">FOCUS 02</span>
                      <span className="font-semibold text-[#FF4D00]">Legacy Moat</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB: Mobile View Simulation */}
            {activeTab === 'secondary' && (
              <div className="my-auto py-4 flex items-center justify-center">
                <div className="w-56 p-4 rounded-2xl bg-[#09090D] border border-white/10 shadow-2xl flex flex-col gap-3">
                  <div className="w-12 h-1 bg-white/20 rounded-full mx-auto" />
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-md bg-[#FF4D00] flex items-center justify-center text-[10px] font-bold text-white">Ü</div>
                    <span className="text-xs font-bold text-white">CRÜ</span>
                  </div>
                  <span className="text-xs font-bold text-white leading-snug">Executive Advisory for Founders & CXOs</span>
                  <p className="text-[10px] text-[#A5A2B2] leading-tight">Reputational capital, narrative strategy, and executive thought leadership.</p>
                  <div className="p-2 rounded bg-[#161622] text-[9px] font-mono text-[#FF4D00]">
                    Kolkata · Led by Pragya Bagri
                  </div>
                </div>
              </div>
            )}

            {/* TAB: Strategy Framework Details */}
            {activeTab === 'details' && (
              <div className="my-auto py-4 space-y-3">
                <span className="text-[10px] font-mono text-[#FF4D00] tracking-widest uppercase block">
                  EXECUTIVE POSITIONING PILLARS
                </span>
                <div className="space-y-2">
                  {project.verifiedFeatures.map((feat) => (
                    <div key={feat} className="flex items-center gap-2 p-2.5 rounded-lg bg-[#14141E] border border-white/5 text-xs text-[#F5F3F8]">
                      <Check className="w-3.5 h-3.5 text-[#FF4D00] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Bottom Bar: Live Link */}
            <div className="pt-4 border-t border-[#F5F3F8]/10 flex items-center justify-between">
              <span className="text-[11px] font-mono text-[#A5A2B2]">
                cru-comm.netlify.app
              </span>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#FF4D00] hover:text-white transition-colors"
              >
                <span>View Live Website</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        );

      case 'kritivity-interiors':
        return (
          <div className="relative w-full h-full min-h-[380px] sm:min-h-[440px] bg-[#14141A] flex flex-col justify-between p-6 sm:p-8 select-none">
            {/* Top Interactive Tabs Bar */}
            <div className="flex flex-wrap items-center justify-between border-b border-[#F5F3F8]/10 pb-4 gap-3">
              <div className="flex items-center gap-1.5 p-1 bg-[#1A1A24] rounded-lg border border-white/5">
                <button
                  type="button"
                  onClick={() => setActiveTab('primary')}
                  className={`px-3 py-1 text-[11px] font-mono rounded transition-colors cursor-pointer ${
                    activeTab === 'primary' ? 'bg-[#D4A373] text-black font-semibold' : 'text-[#A5A2B2] hover:text-[#F5F3F8]'
                  }`}
                >
                  Living Space
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('secondary')}
                  className={`px-3 py-1 text-[11px] font-mono rounded transition-colors cursor-pointer ${
                    activeTab === 'secondary' ? 'bg-[#262636] text-[#F5F3F8] font-semibold' : 'text-[#A5A2B2] hover:text-[#F5F3F8]'
                  }`}
                >
                  Master Suite
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('details')}
                  className={`px-3 py-1 text-[11px] font-mono rounded transition-colors cursor-pointer ${
                    activeTab === 'details' ? 'bg-[#262636] text-[#F5F3F8] font-semibold' : 'text-[#A5A2B2] hover:text-[#F5F3F8]'
                  }`}
                >
                  Design Specs
                </button>
              </div>

              <span className="text-[10px] font-mono text-[#D4A373] tracking-wider uppercase flex items-center gap-1.5">
                <MapPin className="w-3 h-3 text-[#D4A373]" />
                LUCKNOW, UP
              </span>
            </div>

            {/* TAB: Primary Real Interior Photo */}
            {activeTab === 'primary' && (
              <div className="relative my-4 rounded-xl overflow-hidden border border-white/10 group/img aspect-video sm:aspect-[16/9] max-h-[260px]">
                <img
                  src={project.heroImage || '/images/projects/kritivity_hero.jpg'}
                  alt="Kritivity Interiors Luxury Living Room Showcase"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-4">
                  <span className="text-[10px] font-mono text-[#D4A373] tracking-widest uppercase">
                    MODERN RESIDENTIAL INTERIOR
                  </span>
                  <h4 className="text-base sm:text-lg font-bold text-white">
                    Curated Open-Concept Living & Dining
                  </h4>
                  <span className="text-[11px] text-neutral-300">
                    Bespoke acoustic wood fluting, polished marble flooring, warm cove illumination
                  </span>
                </div>
              </div>
            )}

            {/* TAB: Secondary Bedroom Showcase */}
            {activeTab === 'secondary' && (
              <div className="relative my-4 rounded-xl overflow-hidden border border-white/10 group/img aspect-video sm:aspect-[16/9] max-h-[260px]">
                <img
                  src={project.secondaryImage || '/images/projects/kritivity_bedroom.jpg'}
                  alt="Kritivity Interiors Master Suite"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-4">
                  <span className="text-[10px] font-mono text-[#D4A373] tracking-widest uppercase">
                    MASTER SANCTUARY
                  </span>
                  <h4 className="text-base sm:text-lg font-bold text-white">
                    Earthy Minimalist Master Suite
                  </h4>
                  <span className="text-[11px] text-neutral-300">
                    Curated textures, soft upholstered headboard, integrated ambient reading lights
                  </span>
                </div>
              </div>
            )}

            {/* TAB: Spatial Specs */}
            {activeTab === 'details' && (
              <div className="my-auto py-4 space-y-3">
                <span className="text-[10px] font-mono text-[#D4A373] tracking-widest uppercase block">
                  INTERIOR CAPABILITIES & DELIVERABLES
                </span>
                <div className="space-y-2">
                  {project.verifiedFeatures.map((feat) => (
                    <div key={feat} className="flex items-center gap-2 p-2.5 rounded-lg bg-[#1A1A24] border border-white/5 text-xs text-[#F5F3F8]">
                      <Check className="w-3.5 h-3.5 text-[#D4A373] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Bottom Bar: Live Link */}
            <div className="pt-4 border-t border-[#F5F3F8]/10 flex items-center justify-between">
              <span className="text-[11px] font-mono text-[#A5A2B2]">
                kritivity-interiors.netlify.app
              </span>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#D4A373] hover:text-white transition-colors"
              >
                <span>View Live Website</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        );

      case 'interior-adda-05':
        return (
          <div className="relative w-full h-full min-h-[380px] sm:min-h-[440px] bg-[#0E1513] flex flex-col justify-between p-6 sm:p-8 select-none">
            {/* Top Interactive Tabs Bar */}
            <div className="flex flex-wrap items-center justify-between border-b border-[#F5F3F8]/10 pb-4 gap-3">
              <div className="flex items-center gap-1.5 p-1 bg-[#14201D] rounded-lg border border-white/5">
                <button
                  type="button"
                  onClick={() => setActiveTab('primary')}
                  className={`px-3 py-1 text-[11px] font-mono rounded transition-colors cursor-pointer ${
                    activeTab === 'primary' ? 'bg-[#C8A261] text-black font-semibold' : 'text-[#A5A2B2] hover:text-[#F5F3F8]'
                  }`}
                >
                  Turnkey Living
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('secondary')}
                  className={`px-3 py-1 text-[11px] font-mono rounded transition-colors cursor-pointer ${
                    activeTab === 'secondary' ? 'bg-[#1C2C28] text-[#F5F3F8] font-semibold' : 'text-[#A5A2B2] hover:text-[#F5F3F8]'
                  }`}
                >
                  Luxury Suite
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('details')}
                  className={`px-3 py-1 text-[11px] font-mono rounded transition-colors cursor-pointer ${
                    activeTab === 'details' ? 'bg-[#1C2C28] text-[#F5F3F8] font-semibold' : 'text-[#A5A2B2] hover:text-[#F5F3F8]'
                  }`}
                >
                  Modular Specs
                </button>
              </div>

              <span className="text-[10px] font-mono text-[#C8A261] tracking-wider uppercase flex items-center gap-1.5">
                <MapPin className="w-3 h-3 text-[#C8A261]" />
                GUWAHATI, ASSAM
              </span>
            </div>

            {/* TAB: Primary Real Interior Photo */}
            {activeTab === 'primary' && (
              <div className="relative my-4 rounded-xl overflow-hidden border border-white/10 group/img aspect-video sm:aspect-[16/9] max-h-[260px]">
                <img
                  src={project.heroImage || '/images/projects/interioradda_living.jpg'}
                  alt="Interior Adda 05 Turnkey Interior Design"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent flex flex-col justify-end p-4">
                  <span className="text-[10px] font-mono text-[#C8A261] tracking-widest uppercase">
                    TURNKEY RESIDENTIAL EXECUTION
                  </span>
                  <h4 className="text-base sm:text-lg font-bold text-white">
                    Luxury Turnkey Interior Design Studio
                  </h4>
                  <span className="text-[11px] text-neutral-300">
                    Bespoke false ceilings, modular wall paneling, and tailored lighting design
                  </span>
                </div>
              </div>
            )}

            {/* TAB: Secondary Bedroom Showcase */}
            {activeTab === 'secondary' && (
              <div className="relative my-4 rounded-xl overflow-hidden border border-white/10 group/img aspect-video sm:aspect-[16/9] max-h-[260px]">
                <img
                  src={project.secondaryImage || '/images/projects/interioradda_bedroom.jpg'}
                  alt="Interior Adda 05 Bedroom Design"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent flex flex-col justify-end p-4">
                  <span className="text-[10px] font-mono text-[#C8A261] tracking-widest uppercase">
                    MODULAR BEDROOM SYSTEMS
                  </span>
                  <h4 className="text-base sm:text-lg font-bold text-white">
                    Bespoke Wardrobes & Master Bedrooms
                  </h4>
                  <span className="text-[11px] text-neutral-300">
                    Floor-to-ceiling glass wardrobe modules and integrated architectural vanity
                  </span>
                </div>
              </div>
            )}

            {/* TAB: Modular Specs */}
            {activeTab === 'details' && (
              <div className="my-auto py-4 space-y-3">
                <span className="text-[10px] font-mono text-[#C8A261] tracking-widest uppercase block">
                  TURNKEY SCOPE & CAPABILITIES
                </span>
                <div className="space-y-2">
                  {project.verifiedFeatures.map((feat) => (
                    <div key={feat} className="flex items-center gap-2 p-2.5 rounded-lg bg-[#14201D] border border-white/5 text-xs text-[#F5F3F8]">
                      <Check className="w-3.5 h-3.5 text-[#C8A261] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Bottom Bar: Live Link */}
            <div className="pt-4 border-t border-[#F5F3F8]/10 flex items-center justify-between">
              <span className="text-[11px] font-mono text-[#A5A2B2]">
                interioradda.netlify.app
              </span>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#C8A261] hover:text-white transition-colors"
              >
                <span>View Live Website</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        );

      case 'chunks-of-heaven':
        return (
          <div className="relative w-full h-full min-h-[380px] sm:min-h-[440px] bg-[#161214] flex flex-col justify-between p-6 sm:p-8 select-none">
            {/* Top Interactive Tabs Bar */}
            <div className="flex flex-wrap items-center justify-between border-b border-[#F5F3F8]/10 pb-4 gap-3">
              <div className="flex items-center gap-1.5 p-1 bg-[#221C20] rounded-lg border border-white/5">
                <button
                  type="button"
                  onClick={() => setActiveTab('primary')}
                  className={`px-3 py-1 text-[11px] font-mono rounded transition-colors cursor-pointer ${
                    activeTab === 'primary' ? 'bg-[#C59B7D] text-black font-semibold' : 'text-[#A5A2B2] hover:text-[#F5F3F8]'
                  }`}
                >
                  Floral Wedding Cake
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('secondary')}
                  className={`px-3 py-1 text-[11px] font-mono rounded transition-colors cursor-pointer ${
                    activeTab === 'secondary' ? 'bg-[#2E262C] text-[#F5F3F8] font-semibold' : 'text-[#A5A2B2] hover:text-[#F5F3F8]'
                  }`}
                >
                  Chocolate Truffle
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('details')}
                  className={`px-3 py-1 text-[11px] font-mono rounded transition-colors cursor-pointer ${
                    activeTab === 'details' ? 'bg-[#2E262C] text-[#F5F3F8] font-semibold' : 'text-[#A5A2B2] hover:text-[#F5F3F8]'
                  }`}
                >
                  Studio Offerings
                </button>
              </div>

              <span className="text-[10px] font-mono text-[#C59B7D] tracking-wider uppercase flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-[#C59B7D]" />
                100% EGGLESS CELEBRATION STUDIO
              </span>
            </div>

            {/* TAB: Primary Real Cake Photo */}
            {activeTab === 'primary' && (
              <div className="relative my-4 rounded-xl overflow-hidden border border-white/10 group/img aspect-video sm:aspect-[16/9] max-h-[260px]">
                <img
                  src={project.heroImage || '/images/projects/coh_floral_cake.jpg'}
                  alt="Chunks of Heaven Tiered Floral Wedding Cake"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent flex flex-col justify-end p-4">
                  <span className="text-[10px] font-mono text-[#C59B7D] tracking-widest uppercase">
                    ARTISANAL WEDDING CAKE
                  </span>
                  <h4 className="text-base sm:text-lg font-bold text-white">
                    Multi-Tier Handcrafted Floral Celebration Cake
                  </h4>
                  <span className="text-[11px] text-neutral-300">
                    100% pure vegetarian & eggless formulations, handcrafted sugar flowers, gold leaf
                  </span>
                </div>
              </div>
            )}

            {/* TAB: Secondary Chocolate Truffle */}
            {activeTab === 'secondary' && (
              <div className="relative my-4 rounded-xl overflow-hidden border border-white/10 group/img aspect-video sm:aspect-[16/9] max-h-[260px]">
                <img
                  src={project.secondaryImage || '/images/projects/coh_chocolate.jpg'}
                  alt="Chunks of Heaven Chocolate Truffle Cake"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent flex flex-col justify-end p-4">
                  <span className="text-[10px] font-mono text-[#C59B7D] tracking-widest uppercase">
                    DECIDENT CHOCOLATE SIGNATURE
                  </span>
                  <h4 className="text-base sm:text-lg font-bold text-white">
                    Belgian Chocolate Truffle Gateau
                  </h4>
                  <span className="text-[11px] text-neutral-300">
                    Silky chocolate ganache layers, dark chocolate curls, and bespoke celebratory plaque
                  </span>
                </div>
              </div>
            )}

            {/* TAB: Studio Offerings */}
            {activeTab === 'details' && (
              <div className="my-auto py-4 space-y-3">
                <span className="text-[10px] font-mono text-[#C59B7D] tracking-widest uppercase block">
                  CELEBRATION CAPABILITIES
                </span>
                <div className="space-y-2">
                  {project.verifiedFeatures.map((feat) => (
                    <div key={feat} className="flex items-center gap-2 p-2.5 rounded-lg bg-[#221C20] border border-white/5 text-xs text-[#F5F3F8]">
                      <Check className="w-3.5 h-3.5 text-[#C59B7D] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Bottom Bar: Live Link */}
            <div className="pt-4 border-t border-[#F5F3F8]/10 flex items-center justify-between">
              <span className="text-[11px] font-mono text-[#A5A2B2]">
                chunks-of-heaven-coh.netlify.app
              </span>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#C59B7D] hover:text-white transition-colors"
              >
                <span>View Live Website</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        );

      case 'fairy-nest-homestay':
        return (
          <div className="relative w-full h-full min-h-[380px] sm:min-h-[440px] bg-[#111815] flex flex-col justify-between p-6 sm:p-8 select-none">
            {/* Top Interactive Tabs Bar */}
            <div className="flex flex-wrap items-center justify-between border-b border-[#F5F3F8]/10 pb-4 gap-3">
              <div className="flex items-center gap-1.5 p-1 bg-[#1A2621] rounded-lg border border-white/5">
                <button
                  type="button"
                  onClick={() => setActiveTab('primary')}
                  className={`px-3 py-1 text-[11px] font-mono rounded transition-colors cursor-pointer ${
                    activeTab === 'primary' ? 'bg-[#D97746] text-white font-semibold' : 'text-[#A5A2B2] hover:text-[#F5F3F8]'
                  }`}
                >
                  Hillside Retreat
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('secondary')}
                  className={`px-3 py-1 text-[11px] font-mono rounded transition-colors cursor-pointer ${
                    activeTab === 'secondary' ? 'bg-[#22332C] text-[#F5F3F8] font-semibold' : 'text-[#A5A2B2] hover:text-[#F5F3F8]'
                  }`}
                >
                  Breakfast Spread
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('details')}
                  className={`px-3 py-1 text-[11px] font-mono rounded transition-colors cursor-pointer ${
                    activeTab === 'details' ? 'bg-[#22332C] text-[#F5F3F8] font-semibold' : 'text-[#A5A2B2] hover:text-[#F5F3F8]'
                  }`}
                >
                  Amenities & Map
                </button>
              </div>

              <span className="text-[10px] font-mono text-[#D97746] tracking-wider uppercase flex items-center gap-1.5">
                <MapPin className="w-3 h-3 text-[#D97746]" />
                SARANIA HILLS, GUWAHATI
              </span>
            </div>

            {/* TAB: Primary Real Homestay Photo */}
            {activeTab === 'primary' && (
              <div className="relative my-4 rounded-xl overflow-hidden border border-white/10 group/img aspect-video sm:aspect-[16/9] max-h-[260px]">
                <img
                  src={project.heroImage || '/images/projects/fairynest_hero.jpg'}
                  alt="Fairy Nest Homestay Guwahati Bedroom"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent flex flex-col justify-end p-4">
                  <span className="text-[10px] font-mono text-[#D97746] tracking-widest uppercase">
                    COUPLE-FRIENDLY HILLSIDE SUITE
                  </span>
                  <h4 className="text-base sm:text-lg font-bold text-white">
                    1BHK, 2BHK & Penthouse Accommodations
                  </h4>
                  <span className="text-[11px] text-neutral-300">
                    Attached private kitchen, spotless modern bath, high-speed Wi-Fi & hilltop calm
                  </span>
                </div>
              </div>
            )}

            {/* TAB: Secondary Breakfast Spread Photo */}
            {activeTab === 'secondary' && (
              <div className="relative my-4 rounded-xl overflow-hidden border border-white/10 group/img aspect-video sm:aspect-[16/9] max-h-[260px]">
                <img
                  src={project.secondaryImage || '/images/projects/fairynest_breakfast.jpg'}
                  alt="Fairy Nest Homestay Complimentary Breakfast"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent flex flex-col justify-end p-4">
                  <span className="text-[10px] font-mono text-[#D97746] tracking-widest uppercase">
                    HOSPITALITY TOUCHES
                  </span>
                  <h4 className="text-base sm:text-lg font-bold text-white">
                    Complimentary Breakfast Spread
                  </h4>
                  <span className="text-[11px] text-neutral-300">
                    Fresh morning breakfast, authentic Assam tea, and serene mountain breeze
                  </span>
                </div>
              </div>
            )}

            {/* TAB: Amenities & Map Details */}
            {activeTab === 'details' && (
              <div className="my-auto py-4 space-y-3">
                <span className="text-[10px] font-mono text-[#D97746] tracking-widest uppercase block">
                  HOMESTAY AMENITIES & HIGHLIGHTS
                </span>
                <div className="space-y-2">
                  {project.verifiedFeatures.map((feat) => (
                    <div key={feat} className="flex items-center gap-2 p-2.5 rounded-lg bg-[#1A2621] border border-white/5 text-xs text-[#F5F3F8]">
                      <Check className="w-3.5 h-3.5 text-[#D97746] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Bottom Bar: Live Link */}
            <div className="pt-4 border-t border-[#F5F3F8]/10 flex items-center justify-between">
              <span className="text-[11px] font-mono text-[#A5A2B2]">
                fairy-nest-homestay.netlify.app
              </span>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#D97746] hover:text-white transition-colors"
              >
                <span>View Live Website</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div
      className={`relative rounded-2xl bg-[#09090D] border border-[#F5F3F8]/10 shadow-2xl overflow-hidden transition-all duration-300 hover:border-[#B65CFF]/30 ${className}`}
    >
      {/* Top Browser Window Header */}
      <div className="h-10 px-4 bg-[#101016] border-b border-[#F5F3F8]/10 flex items-center justify-between">
        {/* macOS Traffic Lights */}
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]/80" />
        </div>

        {/* URL Pill Display */}
        <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-[#09090D]/80 border border-white/5 text-[10px] font-mono text-[#A5A2B2] max-w-[260px] truncate">
          <span className="text-emerald-400">🔒</span>
          <span className="truncate">{project.liveUrl}</span>
        </div>

        {/* Direct External Link Trigger */}
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          title={`Visit live website: ${project.title}`}
          className="p-1 rounded text-[#A5A2B2] hover:text-[#B65CFF] hover:bg-white/5 transition-colors cursor-pointer"
        >
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Main Content Viewport */}
      {renderContent()}
    </div>
  );
};
