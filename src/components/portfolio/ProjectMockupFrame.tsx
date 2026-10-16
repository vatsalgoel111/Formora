import React, { useState } from 'react';
import { Project } from '../../types';
import { 
  Laptop, 
  Smartphone, 
  Layers, 
  Check, 
  ShoppingBag, 
  Calendar, 
  Sliders, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface ProjectMockupFrameProps {
  project: Project;
  className?: string;
}

export const ProjectMockupFrame: React.FC<ProjectMockupFrameProps> = ({
  project,
  className = '',
}) => {
  const [activeTab, setActiveTab] = useState<string>('primary');
  const [reserved, setReserved] = useState<boolean>(false);
  const [selectedSeason, setSelectedSeason] = useState<string>('Autumn Twilight');
  const [activeUgcHook, setActiveUgcHook] = useState<number>(0);

  // Render bespoke editorial view based on project and activeTab
  const renderContent = () => {
    switch (project.id) {
      case 'aurorae-skincare':
        return (
          <div className="relative w-full h-full min-h-[380px] sm:min-h-[440px] bg-[#0A0A0E] flex flex-col justify-between p-6 sm:p-8 select-none">
            {/* Top Interactive Tabs Bar */}
            <div className="flex flex-wrap items-center justify-between border-b border-[#F5F3F8]/10 pb-4 gap-3">
              <div className="flex items-center gap-1.5 p-1 bg-[#14141E] rounded-lg border border-white/5">
                <button
                  type="button"
                  onClick={() => setActiveTab('primary')}
                  className={`px-2.5 py-1 text-[11px] font-mono rounded transition-colors ${
                    activeTab === 'primary' ? 'bg-[#222232] text-[#F5F3F8] font-semibold' : 'text-[#A5A2B2] hover:text-[#F5F3F8]'
                  }`}
                >
                  Flagship Store
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('mobile')}
                  className={`px-2.5 py-1 text-[11px] font-mono rounded transition-colors ${
                    activeTab === 'mobile' ? 'bg-[#222232] text-[#F5F3F8] font-semibold' : 'text-[#A5A2B2] hover:text-[#F5F3F8]'
                  }`}
                >
                  Mobile View
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('tokens')}
                  className={`px-2.5 py-1 text-[11px] font-mono rounded transition-colors ${
                    activeTab === 'tokens' ? 'bg-[#222232] text-[#F5F3F8] font-semibold' : 'text-[#A5A2B2] hover:text-[#F5F3F8]'
                  }`}
                >
                  Design Tokens
                </button>
              </div>

              <span className="text-[10px] font-mono text-[#B65CFF] tracking-wider uppercase">
                AURAE // SYSTEM 01
              </span>
            </div>

            {/* TAB: Flagship Store View */}
            {activeTab === 'primary' && (
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center my-6">
                <div className="sm:col-span-7 flex flex-col gap-2.5">
                  <span className="text-[10px] font-mono text-[#A5A2B2] tracking-widest uppercase">
                    ACTIVE CELLULAR EXTRACTION · BATCH № 04
                  </span>
                  <h4 className="text-xl sm:text-2xl font-bold tracking-tight text-[#F5F3F8]">
                    Bio-Enzymatic Cellular Serum
                  </h4>
                  <p className="text-xs text-[#A5A2B2] leading-relaxed max-w-sm">
                    Cold-pressed alpine edelweiss stem cells suspended in a fermented squalane matrix. Formulated for cellular barrier restoration.
                  </p>

                  <div className="flex items-center gap-3 mt-1 text-xs font-mono">
                    <span className="text-[#B65CFF]">50ML / 1.7 FL. OZ.</span>
                    <span className="text-neutral-600">·</span>
                    <span className="text-[#F5F3F8]">SINGLE ESTATE BOTANICALS</span>
                  </div>

                  <div className="pt-2 flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setReserved(!reserved)}
                      className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all flex items-center gap-2 cursor-pointer ${
                        reserved
                          ? 'bg-[#B65CFF] text-black shadow-lg'
                          : 'bg-[#181824] hover:bg-[#222232] text-[#F5F3F8] border border-white/10'
                      }`}
                    >
                      {reserved ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>ALLOCATION RESERVED</span>
                        </>
                      ) : (
                        <>
                          <ShoppingBag className="w-3.5 h-3.5 text-[#B65CFF]" />
                          <span>RESERVE ALLOCATION</span>
                        </>
                      )}
                    </button>
                    {reserved && (
                      <span className="text-[11px] font-mono text-[#A5A2B2]">
                        Single-Tap Checkout Flow
                      </span>
                    )}
                  </div>
                </div>

                {/* Obsidian Bottle Graphic */}
                <div className="sm:col-span-5 flex justify-center">
                  <div className="relative w-32 h-52 rounded-2xl bg-gradient-to-b from-[#242436] via-[#14141E] to-[#0A0A0E] border border-white/20 shadow-2xl flex flex-col items-center justify-between p-4 group-hover:-translate-y-1 transition-transform">
                    <div className="w-9 h-9 rounded-full border border-[#B65CFF]/70 flex items-center justify-center">
                      <span className="text-[10px] font-mono text-[#B65CFF] font-bold">A</span>
                    </div>
                    <div className="w-full text-center">
                      <div className="w-10 h-[1px] bg-white/40 mx-auto mb-1.5" />
                      <span className="text-[9px] font-mono tracking-widest text-[#F5F3F8] block font-bold">AURAE</span>
                      <span className="text-[7px] font-mono text-[#A5A2B2] tracking-wider">CELLULAR RESTORATION</span>
                    </div>
                    <div className="w-16 h-1 bg-[#B65CFF]/80 rounded-full" />
                  </div>
                </div>
              </div>
            )}

            {/* TAB: Mobile Viewport */}
            {activeTab === 'mobile' && (
              <div className="my-6 flex justify-center items-center">
                <div className="w-64 bg-[#14141E] rounded-2xl border border-white/15 p-4 shadow-xl flex flex-col gap-3">
                  <div className="flex items-center justify-between border-b border-white/10 pb-2 text-[10px] font-mono text-[#A5A2B2]">
                    <span>9:41 AM</span>
                    <span className="text-[#B65CFF]">AURAE STORE</span>
                  </div>
                  <div className="h-28 bg-[#0A0A0E] rounded-lg border border-white/5 p-3 flex items-center justify-between">
                    <div>
                      <span className="text-[11px] font-bold text-[#F5F3F8] block">Bio-Cellular Serum</span>
                      <span className="text-[9px] text-[#B65CFF] font-mono block">Volume: 50ML · In Stock</span>
                    </div>
                    <div className="w-10 h-16 rounded bg-[#1C1B28] border border-white/10" />
                  </div>
                  <button
                    type="button"
                    onClick={() => setReserved(!reserved)}
                    className="w-full py-2 bg-[#F5F3F8] text-black text-[11px] font-semibold rounded-lg text-center"
                  >
                    {reserved ? 'ALLOCATION CONFIRMED' : 'RESERVE PRODUCT'}
                  </button>
                </div>
              </div>
            )}

            {/* TAB: Design Tokens */}
            {activeTab === 'tokens' && (
              <div className="my-6 space-y-4">
                <div className="grid grid-cols-4 gap-2">
                  <div className="p-2.5 rounded-lg bg-[#0B0B0F] border border-white/10 text-center">
                    <span className="text-[9px] font-mono text-[#A5A2B2] block">OBSIDIAN</span>
                    <span className="text-[10px] font-mono text-[#F5F3F8]">#0B0B0F</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-[#1C1B26] border border-white/10 text-center">
                    <span className="text-[9px] font-mono text-[#A5A2B2] block">BASALT</span>
                    <span className="text-[10px] font-mono text-[#F5F3F8]">#1C1B26</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-[#B65CFF] text-black text-center">
                    <span className="text-[9px] font-mono opacity-80 block font-bold">VIOLET</span>
                    <span className="text-[10px] font-mono font-bold">#B65CFF</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-[#F5F3F8] text-black text-center">
                    <span className="text-[9px] font-mono opacity-80 block font-bold">CHALK</span>
                    <span className="text-[10px] font-mono font-bold">#F5F3F8</span>
                  </div>
                </div>

                <div className="p-3 bg-[#14141E] rounded-xl border border-white/5 space-y-2 text-xs">
                  <div className="flex justify-between items-center text-[#A5A2B2]">
                    <span className="font-mono">Display Face: Space Grotesk (700)</span>
                    <span className="text-[10px] font-mono text-[#B65CFF]">TRACKING -0.02</span>
                  </div>
                  <div className="flex justify-between items-center text-[#A5A2B2]">
                    <span className="font-mono">Body: Inter Regular (400)</span>
                    <span className="text-[10px] font-mono text-[#B65CFF]">LINE HEIGHT 1.6</span>
                  </div>
                </div>
              </div>
            )}

            {/* Bottom Specs Bar */}
            <div className="flex items-center justify-between border-t border-[#F5F3F8]/10 pt-3 text-[11px] text-[#A5A2B2]">
              <span>Headless Architecture · Custom Reservation Drawer</span>
              <span className="font-mono text-[#F5F3F8]">Art-Directed E-Commerce Flagship</span>
            </div>
          </div>
        );

      case 'kanso-hospitality':
        return (
          <div className="relative w-full h-full min-h-[380px] sm:min-h-[440px] bg-[#0C0D12] flex flex-col justify-between p-6 sm:p-8 select-none">
            {/* Top Interactive Tabs Bar */}
            <div className="flex flex-wrap items-center justify-between border-b border-[#F5F3F8]/10 pb-4 gap-3">
              <div className="flex items-center gap-1.5 p-1 bg-[#14151F] rounded-lg border border-white/5">
                <button
                  type="button"
                  onClick={() => setActiveTab('primary')}
                  className={`px-2.5 py-1 text-[11px] font-mono rounded transition-colors ${
                    activeTab === 'primary' ? 'bg-[#212332] text-[#F5F3F8] font-semibold' : 'text-[#A5A2B2] hover:text-[#F5F3F8]'
                  }`}
                >
                  Sanctuary Suite
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('reserve')}
                  className={`px-2.5 py-1 text-[11px] font-mono rounded transition-colors ${
                    activeTab === 'reserve' ? 'bg-[#212332] text-[#F5F3F8] font-semibold' : 'text-[#A5A2B2] hover:text-[#F5F3F8]'
                  }`}
                >
                  Availability Matrix
                </button>
              </div>

              <span className="text-[10px] font-mono text-[#D0A0FF] tracking-wider uppercase">
                VALAIS ALPS · ELEVATION 2,400M
              </span>
            </div>

            {/* TAB: Suite View */}
            {activeTab === 'primary' && (
              <div className="my-6 space-y-4">
                <div className="border border-white/10 rounded-2xl p-5 bg-[#141520]/80">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono text-[#A5A2B2]">PAVILION 04 — THE CLIFF SANCTUARY</span>
                    <span className="text-xs font-semibold text-[#D0A0FF] font-mono">SEASONAL ACCESS OPEN</span>
                  </div>

                  <div className="h-32 bg-gradient-to-r from-[#171824] via-[#222436] to-[#141520] rounded-xl border border-white/5 relative flex items-center justify-center p-4 text-center overflow-hidden">
                    <div className="absolute inset-0 bg-grid-subtle opacity-25" />
                    <div className="relative">
                      <p className="text-base font-bold text-[#F5F3F8] tracking-tight">
                        FULL-BLEED ALPINE PANORAMA
                      </p>
                      <span className="text-xs text-[#A5A2B2] mt-1 block">
                        CHISELED RAW GRANITE · PRIVATE THERMAL SPRING · FIRESIDE DECK
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB: Availability Matrix */}
            {activeTab === 'reserve' && (
              <div className="my-6 space-y-3">
                <div className="p-4 bg-[#141520] rounded-xl border border-white/10 space-y-3">
                  <span className="text-[10px] font-mono text-[#A5A2B2] block uppercase font-semibold">
                    SELECT SEASONAL EXPERIENCE
                  </span>
                  <div className="grid grid-cols-3 gap-2">
                    {['Autumn Twilight', 'Winter Frost', 'Spring Solstice'].map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => setSelectedSeason(s)}
                        className={`p-2 rounded-lg text-xs font-mono text-center transition-all cursor-pointer ${
                          selectedSeason === s
                            ? 'bg-[#222436] text-[#D0A0FF] border border-[#D0A0FF]/40 font-semibold'
                            : 'bg-[#0E0F16] text-[#A5A2B2] border border-white/5'
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                  <div className="pt-2 flex justify-between items-center text-xs">
                    <span className="text-[#A5A2B2]">Guest Capacity: 2 Guests · Private Pavilion</span>
                    <span className="text-[#D0A0FF] font-mono">Curated Inventory</span>
                  </div>
                </div>
              </div>
            )}

            {/* Bottom Meta */}
            <div className="flex items-center justify-between border-t border-[#F5F3F8]/10 pt-3 text-[11px] text-[#A5A2B2]">
              <span>Direct Sanctuary Reservation Architecture</span>
              <span className="font-mono text-[#D0A0FF]">8 EXCLUSIVE PAVILIONS</span>
            </div>
          </div>
        );

      case 'verve-studios':
        return (
          <div className="relative w-full h-full min-h-[380px] sm:min-h-[440px] bg-[#07070A] flex flex-col justify-between p-6 sm:p-8 select-none">
            {/* Top Interactive Tabs Bar */}
            <div className="flex flex-wrap items-center justify-between border-b border-[#F5F3F8]/10 pb-4 gap-3">
              <div className="flex items-center gap-1.5 p-1 bg-[#12121A] rounded-lg border border-white/5">
                <button
                  type="button"
                  onClick={() => setActiveTab('primary')}
                  className={`px-2.5 py-1 text-[11px] font-mono rounded transition-colors ${
                    activeTab === 'primary' ? 'bg-[#1C1C28] text-[#F5F3F8] font-semibold' : 'text-[#A5A2B2] hover:text-[#F5F3F8]'
                  }`}
                >
                  Identity Grid
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('type')}
                  className={`px-2.5 py-1 text-[11px] font-mono rounded transition-colors ${
                    activeTab === 'type' ? 'bg-[#1C1C28] text-[#F5F3F8] font-semibold' : 'text-[#A5A2B2] hover:text-[#F5F3F8]'
                  }`}
                >
                  Type Specimen
                </button>
              </div>

              <span className="text-[10px] font-mono text-[#B65CFF] tracking-wider uppercase">
                SWISS ARCHIVAL SYSTEM
              </span>
            </div>

            {/* TAB: Identity Grid */}
            {activeTab === 'primary' && (
              <div className="my-6 grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-[#111118] border border-white/10 space-y-2">
                  <span className="text-[10px] font-mono text-[#A5A2B2] block uppercase">
                    MONOGRAPH TYPOGRAPHY
                  </span>
                  <h5 className="text-xl font-bold text-[#F5F3F8] tracking-tight">
                    VERVE GROTESK
                  </h5>
                  <p className="text-xs text-[#A5A2B2]">
                    High-contrast structural letterforms designed for spatial publications and architectural archives.
                  </p>
                  <div className="pt-2 flex gap-1.5">
                    <div className="w-6 h-6 rounded bg-[#F5F3F8]" />
                    <div className="w-6 h-6 rounded bg-[#16161F]" />
                    <div className="w-6 h-6 rounded bg-[#B65CFF]" />
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#111118] border border-white/10 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-[#A5A2B2] block uppercase mb-1">
                      PROJECT COORDINATES
                    </span>
                    <span className="text-xs font-mono text-[#F5F3F8] block">LAT 47.3769° N</span>
                    <span className="text-xs font-mono text-[#A5A2B2] block">LON 8.5417° E</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] font-mono text-[#B65CFF] font-semibold">ZÜRICH ARCHIVE</span>
                  </div>
                </div>
              </div>
            )}

            {/* TAB: Type Specimen */}
            {activeTab === 'type' && (
              <div className="my-6 space-y-3 p-4 bg-[#111118] rounded-xl border border-white/10">
                <div className="border-b border-white/10 pb-2">
                  <span className="text-xs font-mono text-[#A5A2B2] block">DISPLAY 48PX</span>
                  <span className="text-xl font-bold text-[#F5F3F8]">ARCHITECTURAL FORM</span>
                </div>
                <div>
                  <span className="text-xs font-mono text-[#A5A2B2] block">BODY 14PX</span>
                  <p className="text-xs text-[#A5A2B2] leading-relaxed">
                    Precision spaces constructed with cast concrete, laminated spruce timber, and brushed aluminium hardware.
                  </p>
                </div>
              </div>
            )}

            <div className="flex items-center justify-between border-t border-[#F5F3F8]/10 pt-3 text-[11px] text-[#A5A2B2]">
              <span>Editorial Guidelines & Brand Collateral</span>
              <span className="font-mono text-[#F5F3F8]">Printed Monograph & Exhibition Archive</span>
            </div>
          </div>
        );

      case 'solace-beverage':
        return (
          <div className="relative w-full h-full min-h-[380px] sm:min-h-[440px] bg-[#0A0A0E] flex flex-col justify-between p-6 sm:p-8 select-none">
            {/* Top Interactive Tabs Bar */}
            <div className="flex flex-wrap items-center justify-between border-b border-[#F5F3F8]/10 pb-4 gap-3">
              <div className="flex items-center gap-1.5 p-1 bg-[#151322] rounded-lg border border-white/5">
                <button
                  type="button"
                  onClick={() => setActiveTab('primary')}
                  className={`px-2.5 py-1 text-[11px] font-mono rounded transition-colors ${
                    activeTab === 'primary' ? 'bg-[#221E38] text-[#F5F3F8] font-semibold' : 'text-[#A5A2B2] hover:text-[#F5F3F8]'
                  }`}
                >
                  Creator Hooks
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('funnel')}
                  className={`px-2.5 py-1 text-[11px] font-mono rounded transition-colors ${
                    activeTab === 'funnel' ? 'bg-[#221E38] text-[#F5F3F8] font-semibold' : 'text-[#A5A2B2] hover:text-[#F5F3F8]'
                  }`}
                >
                  Subscription Funnel
                </button>
              </div>

              <span className="text-[10px] font-mono text-[#D0A0FF] tracking-wider uppercase">
                UGC & CONVERSION ENGINE
              </span>
            </div>

            {/* TAB: Creator Hooks View */}
            {activeTab === 'primary' && (
              <div className="my-6 grid grid-cols-3 gap-3">
                {[
                  { hook: '“3 O’Clock Crash?”', time: '0:03', tag: 'High Retention' },
                  { hook: '“Zero Sugar Spike”', time: '0:02', tag: 'Core Hook' },
                  { hook: '“Unboxing Routine”', time: '0:04', tag: 'Social Proof' },
                ].map((item, idx) => (
                  <button
                    key={item.hook}
                    type="button"
                    onClick={() => setActiveUgcHook(idx)}
                    className={`aspect-[9/14] rounded-xl border p-2.5 flex flex-col justify-between text-left transition-all cursor-pointer ${
                      activeUgcHook === idx
                        ? 'bg-[#1F1932] border-[#B65CFF] shadow-lg scale-102'
                        : 'bg-[#141220] border-white/10 hover:border-white/20'
                    }`}
                  >
                    <div className="flex justify-between items-center text-[8px] font-mono">
                      <span className="text-[#D0A0FF]">HOOK 0{idx + 1}</span>
                      <span className="text-[#A5A2B2]">{item.time}</span>
                    </div>

                    <div className="text-center my-auto">
                      <span className="text-[11px] font-bold text-[#F5F3F8] leading-tight block">
                        {item.hook}
                      </span>
                    </div>

                    <span className="text-[8px] font-mono text-[#B65CFF] text-center font-semibold uppercase">
                      {item.tag}
                    </span>
                  </button>
                ))}
              </div>
            )}

            {/* TAB: Subscription Funnel */}
            {activeTab === 'funnel' && (
              <div className="my-6 p-4 bg-[#141220] rounded-xl border border-white/10 space-y-3">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-[#F5F3F8] font-bold">Multi-Pack Automated Delivery</span>
                  <span className="text-[#B65CFF] font-mono font-bold">Flexible Cadence</span>
                </div>
                <div className="text-[11px] text-[#A5A2B2] space-y-1">
                  <div>· Cold-Brewed Botanical Adaptogen Formulation</div>
                  <div>· Pause or reschedule delivery anytime</div>
                  <div>· Includes Formora UGC Unboxing Experience Design</div>
                </div>
              </div>
            )}

            <div className="flex items-center justify-between border-t border-[#F5F3F8]/10 pt-3 text-[11px] text-[#A5A2B2]">
              <span>Creator-Led Campaign Architecture</span>
              <span className="font-mono text-[#D0A0FF]">Multi-Format Creative Suite</span>
            </div>
          </div>
        );

      default:
        return (
          <div className="p-8 text-center text-sm font-mono text-[#A5A2B2]">
            {project.title}
          </div>
        );
    }
  };

  return (
    <div className={`rounded-3xl border border-[#F5F3F8]/10 bg-[#101016] overflow-hidden shadow-2xl transition-all duration-300 hover:border-[#B65CFF]/35 ${className}`}>
      {renderContent()}
    </div>
  );
};
