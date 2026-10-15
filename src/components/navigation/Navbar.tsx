import React, { useState, useEffect } from 'react';
import { FormoraLogo } from '../brand/FormoraLogo';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onStartProject: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPath,
  onNavigate,
  onStartProject,
}) => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Work', path: '/work' },
    { label: 'Services', path: '/services' },
    { label: 'Studio', path: '/studio' },
    { label: 'Contact', path: '/contact' },
  ];

  const handleLinkClick = (path: string) => {
    onNavigate(path);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isActive = (path: string) => {
    if (path === '/' && currentPath === '/') return true;
    if (path !== '/' && currentPath.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#08080B]/90 backdrop-blur-md border-b border-[#F5F3F8]/10 py-3 shadow-2xl'
            : 'bg-transparent py-5 border-b border-transparent'
        }`}
      >
        {/* Strict 3-zone Top Bar Contract: Brand | Links | Primary Action */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-8">
          
          {/* Zone 1: Single element brand mark & wordmark */}
          <button
            type="button"
            onClick={() => handleLinkClick('/')}
            className="group flex items-center gap-3 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B65CFF] rounded-md transition-opacity hover:opacity-90"
            aria-label="Formora Home"
          >
            <FormoraLogo variant="horizontal" size="sm" showStudioLabel={false} />
          </button>

          {/* Zone 2: 4-5 concise single-line nav links with hover underlines */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <button
                  key={link.path}
                  type="button"
                  onClick={() => handleLinkClick(link.path)}
                  className={`relative py-1 text-sm tracking-wide transition-colors whitespace-nowrap shrink-0 ${
                    active
                      ? 'text-[#F5F3F8] font-semibold'
                      : 'text-[#A5A2B2] hover:text-[#F5F3F8]'
                  }`}
                >
                  {link.label}
                  {active && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#B65CFF] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={onStartProject}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold tracking-wider text-black bg-[#F5F3F8] hover:bg-[#B65CFF] hover:text-black rounded-lg transition-all duration-200 shadow-md whitespace-nowrap shrink-0 group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B65CFF]"
            >
              <span>START A PROJECT</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            {/* Mobile menu toggle button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#A5A2B2] hover:text-[#F5F3F8] rounded-lg border border-[#F5F3F8]/10 bg-[#101016]/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B65CFF]"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Accessible Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 z-40 bg-[#08080B]/98 backdrop-blur-xl md:hidden pt-24 px-6 pb-8 flex flex-col justify-between"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between pb-4 border-b border-[#F5F3F8]/10">
              <span className="text-xs font-mono text-[#B65CFF] tracking-widest uppercase">
                NAVIGATION
              </span>
              <span className="text-xs text-[#A5A2B2]">
                CREATIVE · DIGITAL · GROWTH
              </span>
            </div>

            <nav className="flex flex-col gap-4">
              <button
                type="button"
                onClick={() => handleLinkClick('/')}
                className="text-left text-2xl font-bold tracking-tight text-[#F5F3F8] hover:text-[#B65CFF] transition-colors py-2"
              >
                Home
              </button>
              {navLinks.map((link) => (
                <button
                  key={link.path}
                  type="button"
                  onClick={() => handleLinkClick(link.path)}
                  className={`text-left text-2xl font-bold tracking-tight transition-colors py-2 flex items-center justify-between ${
                    isActive(link.path) ? 'text-[#B65CFF]' : 'text-[#F5F3F8] hover:text-[#B65CFF]'
                  }`}
                >
                  <span>{link.label}</span>
                  <span className="text-sm font-mono text-[#A5A2B2]">→</span>
                </button>
              ))}
            </nav>
          </div>

          <div className="pt-6 border-t border-[#F5F3F8]/10 flex flex-col gap-4">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onStartProject();
              }}
              className="w-full py-3.5 text-center text-sm font-semibold tracking-wider text-black bg-[#B65CFF] hover:bg-[#D0A0FF] rounded-xl transition-all shadow-lg"
            >
              START A PROJECT
            </button>
            <p className="text-center text-xs text-[#A5A2B2] font-mono tracking-widest">
              BUILT TO MAKE AN IMPRESSION
            </p>
          </div>
        </div>
      )}
    </>
  );
};
