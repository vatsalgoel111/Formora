import React from 'react';
import { Project } from '../../types';
import { Sparkles, ArrowRight, Laptop, Smartphone, Layers, CheckCircle2 } from 'lucide-react';

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
  // Render bespoke editorial compositions tailored specifically to each concept project
  const renderVisualComposition = () => {
    switch (project.id) {
      case 'aurorae-skincare':
        return (
          <div className="relative w-full h-full min-h-[280px] sm:min-h-[380px] bg-[#0B0B0F] flex flex-col justify-between p-6 sm:p-8 overflow-hidden group">
            {/* Deep violet background glow */}
            <div 
              className="absolute -top-20 -right-20 w-72 h-72 rounded-full pointer-events-none opacity-40 blur-3xl transition-transform duration-700 group-hover:scale-125"
              style={{ background: 'radial-gradient(circle, #B65CFF 0%, transparent 70%)' }}
            />

            {/* Top Browser Bar / Status */}
            <div className="flex items-center justify-between border-b border-[#F5F3F8]/10 pb-4 relative z-10">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
                <div className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
                <div className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
                <span className="text-[11px] font-mono text-[#A5A2B2] ml-2">auroraebotanicals.com</span>
              </div>
              <span className="text-[10px] font-mono text-[#B65CFF] tracking-wider uppercase">
                COMMERCE FLAGSHIP
              </span>
            </div>

            {/* Monolithic Visual Centerpiece */}
            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-12 gap-6 items-center my-6">
              <div className="sm:col-span-7 flex flex-col gap-2">
                <span className="text-[10px] font-mono text-[#A5A2B2] tracking-widest uppercase">
                  ACTIVE EXTRACTION · N° 04
                </span>
                <h4 className="text-xl sm:text-2xl font-bold tracking-tight text-[#F5F3F8]">
                  Bio-Enzymatic Cellular Serum
                </h4>
                <p className="text-xs text-[#A5A2B2] leading-relaxed max-w-sm">
                  Cold-pressed alpine edelweiss stem cells suspended in fermented squalane matrix.
                </p>
                <div className="flex items-center gap-3 mt-2 text-xs font-mono text-[#B65CFF]">
                  <span>50ML / 1.7 FL. OZ.</span>
                  <span>·</span>
                  <span className="text-[#F5F3F8] font-semibold">$145.00</span>
                </div>
              </div>

              {/* Bespoke Graphical Obsidian Bottle Mockup */}
              <div className="sm:col-span-5 flex justify-center">
                <div className="relative w-28 h-44 rounded-xl bg-gradient-to-b from-[#222230] via-[#12121A] to-[#0A0A0E] border border-white/20 shadow-2xl flex flex-col items-center justify-between p-3 transition-transform duration-500 group-hover:-translate-y-2">
                  <div className="w-8 h-8 rounded-full border border-[#B65CFF]/60 flex items-center justify-center">
                    <span className="text-[9px] font-mono text-[#B65CFF]">A</span>
                  </div>
                  <div className="w-full text-center">
                    <div className="w-8 h-[1px] bg-white/40 mx-auto mb-1" />
                    <span className="text-[8px] font-mono tracking-widest text-[#F5F3F8]">AURAE</span>
                    <span className="block text-[6px] font-mono text-[#A5A2B2]">01 // SERUM</span>
                  </div>
                  <div className="w-12 h-1 bg-[#B65CFF]/80 rounded-full" />
                </div>
              </div>
            </div>

            {/* Bottom Meta */}
            <div className="flex items-center justify-between border-t border-[#F5F3F8]/10 pt-3 relative z-10 text-[11px] text-[#A5A2B2]">
              <span>Cart Velocity: 1-Click Apple Pay</span>
              <span className="font-mono text-[#F5F3F8]">320ms Page Load</span>
            </div>
          </div>
        );

      case 'kanso-hospitality':
        return (
          <div className="relative w-full h-full min-h-[280px] sm:min-h-[380px] bg-[#0E0F14] flex flex-col justify-between p-6 sm:p-8 overflow-hidden group">
            {/* Ambient dusk gradient */}
            <div 
              className="absolute -bottom-10 -left-10 w-80 h-80 rounded-full pointer-events-none opacity-30 blur-3xl transition-transform duration-700 group-hover:scale-125"
              style={{ background: 'radial-gradient(circle, #D0A0FF 0%, transparent 70%)' }}
            />

            <div className="flex items-center justify-between border-b border-[#F5F3F8]/10 pb-4 relative z-10">
              <span className="text-[11px] font-mono text-[#A5A2B2]">VALAIS ALPS · ELEVATION 2,400M</span>
              <span className="text-[10px] font-mono text-[#D0A0FF] tracking-wider uppercase">
                SANCTUARY EXPERIENCE
              </span>
            </div>

            {/* Architectural Layout Representation */}
            <div className="relative z-10 my-4 flex flex-col gap-3">
              <div className="border border-white/10 rounded-xl p-5 bg-[#14151E]/80 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono text-[#A5A2B2]">SUITE 02 — THE CLIFF RETREAT</span>
                  <span className="text-xs font-semibold text-[#D0A0FF]">AUTUMN SEASON</span>
                </div>
                <div className="h-28 w-full bg-gradient-to-r from-[#171822] via-[#20212E] to-[#12131A] rounded-lg border border-white/5 relative flex items-center justify-center overflow-hidden">
                  {/* Architectural Wireframe Lines */}
                  <div className="absolute inset-0 opacity-20 bg-grid-subtle" />
                  <div className="relative text-center">
                    <p className="text-sm font-semibold text-[#F5F3F8] tracking-wider">
                      FLOOR-TO-CEILING ALPINE VISTA
                    </p>
                    <span className="text-[10px] text-[#A5A2B2] font-mono">
                      NATURAL GRANITE · PRIVATE THERMAL BASIN
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between border-t border-[#F5F3F8]/10 pt-3 relative z-10 text-[11px] text-[#A5A2B2]">
              <span>Direct Sanctuary Reservations</span>
              <span className="font-mono text-[#D0A0FF]">LIMITED 8 PAVILIONS</span>
            </div>
          </div>
        );

      case 'verve-studios':
        return (
          <div className="relative w-full h-full min-h-[280px] sm:min-h-[380px] bg-[#070709] flex flex-col justify-between p-6 sm:p-8 overflow-hidden group">
            <div className="flex items-center justify-between border-b border-[#F5F3F8]/10 pb-4 relative z-10">
              <span className="text-[11px] font-mono text-[#A5A2B2]">SPATIAL PRACTICE & MONOGRAPH</span>
              <span className="text-[10px] font-mono text-[#B65CFF] tracking-wider uppercase">
                BRAND SYSTEM
              </span>
            </div>

            {/* Typographic Archive & Grid Showcase */}
            <div className="relative z-10 my-4 grid grid-cols-2 gap-4">
              <div className="border border-white/10 rounded-lg p-4 bg-[#111118]">
                <span className="text-[10px] font-mono text-[#A5A2B2] block mb-2">TYPOGRAPHY / DISPLAY</span>
                <h5 className="text-lg font-bold text-[#F5F3F8] leading-tight">
                  VERVE GROTESK
                </h5>
                <span className="text-xs text-[#A5A2B2] font-mono mt-1 block">
                  WEIGHT 700 · TRACKING -0.03
                </span>
                <div className="mt-4 flex gap-1">
                  <div className="h-6 w-6 rounded bg-[#F5F3F8]" />
                  <div className="h-6 w-6 rounded bg-[#16161F]" />
                  <div className="h-6 w-6 rounded bg-[#B65CFF]" />
                </div>
              </div>

              <div className="border border-white/10 rounded-lg p-4 bg-[#111118] flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono text-[#A5A2B2] block mb-2">INDEX COORDINATES</span>
                  <span className="text-xs font-mono text-[#F5F3F8] block">
                    LAT 47.3769° N
                  </span>
                  <span className="text-xs font-mono text-[#A5A2B2] block">
                    LON 8.5417° E
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-mono text-[#B65CFF]">MONOGRAPH 2026</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between border-t border-[#F5F3F8]/10 pt-3 relative z-10 text-[11px] text-[#A5A2B2]">
              <span>Comprehensive Identity Guidelines</span>
              <span className="font-mono text-[#F5F3F8]">480-PAGE ARCHIVE</span>
            </div>
          </div>
        );

      case 'solace-beverage':
        return (
          <div className="relative w-full h-full min-h-[280px] sm:min-h-[380px] bg-[#0A0A0E] flex flex-col justify-between p-6 sm:p-8 overflow-hidden group">
            {/* Electric Lilac Ambient */}
            <div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full pointer-events-none opacity-25 blur-3xl transition-transform duration-700 group-hover:scale-125"
              style={{ background: 'radial-gradient(circle, #D0A0FF 0%, transparent 70%)' }}
            />

            <div className="flex items-center justify-between border-b border-[#F5F3F8]/10 pb-4 relative z-10">
              <span className="text-[11px] font-mono text-[#A5A2B2]">UGC & PERFORMANCE CAMPAIGN</span>
              <span className="text-[10px] font-mono text-[#D0A0FF] tracking-wider uppercase">
                GROWTH SYSTEM
              </span>
            </div>

            {/* Social Ad Multi-Format Cards */}
            <div className="relative z-10 my-4 grid grid-cols-3 gap-3">
              <div className="aspect-[9/16] bg-[#161424] rounded-lg border border-white/10 p-2 flex flex-col justify-between">
                <span className="text-[8px] font-mono text-[#D0A0FF]">HOOK A // 0:03</span>
                <div className="text-center">
                  <span className="text-[9px] font-bold text-[#F5F3F8] block">“3 O'CLOCK CRASH?”</span>
                </div>
                <span className="text-[7px] text-[#A5A2B2] text-center">CREATOR 01</span>
              </div>

              <div className="aspect-[9/16] bg-[#1C172E] rounded-lg border border-[#B65CFF]/30 p-2 flex flex-col justify-between shadow-lg">
                <span className="text-[8px] font-mono text-[#B65CFF]">HOOK B // 0:02</span>
                <div className="text-center">
                  <span className="text-[9px] font-bold text-[#F5F3F8] block">“ZERO SUGAR SPIKE”</span>
                </div>
                <span className="text-[7px] text-[#B65CFF] text-center font-semibold">TOP ROAS</span>
              </div>

              <div className="aspect-[9/16] bg-[#161424] rounded-lg border border-white/10 p-2 flex flex-col justify-between">
                <span className="text-[8px] font-mono text-[#D0A0FF]">HOOK C // 0:04</span>
                <div className="text-center">
                  <span className="text-[9px] font-bold text-[#F5F3F8] block">“UNBOXING THE 12-PACK”</span>
                </div>
                <span className="text-[7px] text-[#A5A2B2] text-center">CREATOR 03</span>
              </div>
            </div>

            <div className="flex items-center justify-between border-t border-[#F5F3F8]/10 pt-3 relative z-10 text-[11px] text-[#A5A2B2]">
              <span>Creator-Led Funnel Architecture</span>
              <span className="font-mono text-[#D0A0FF]">12 TEST VARIATIONS</span>
            </div>
          </div>
        );

      default:
        return (
          <div className="w-full h-full min-h-[280px] bg-[#101016] flex items-center justify-center p-8">
            <span className="text-sm font-mono text-[#A5A2B2]">{project.title}</span>
          </div>
        );
    }
  };

  return (
    <div className={`relative rounded-2xl overflow-hidden border border-[#F5F3F8]/10 bg-[#101016] transition-all duration-300 hover:border-[#B65CFF]/40 ${className}`}>
      {renderVisualComposition()}
    </div>
  );
};
