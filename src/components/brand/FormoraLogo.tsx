import React from 'react';

interface FormoraLogoProps {
  variant?: 'full' | 'mark' | 'horizontal' | 'compact';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  showStudioLabel?: boolean;
}

export const FormoraMark: React.FC<{ className?: string; size?: number }> = ({ 
  className = '', 
  size = 40 
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${className}`}
      aria-label="Formora Monogram"
    >
      <defs>
        <linearGradient id="formoraMarkGrad" x1="20" y1="20" x2="105" y2="105" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="45%" stopColor="#E4E2EB" />
          <stop offset="85%" stopColor="#C8C6D6" />
          <stop offset="100%" stopColor="#9C99AE" />
        </linearGradient>
        <linearGradient id="formoraGlowGrad" x1="0" y1="0" x2="120" y2="120" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#B65CFF" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Aerodynamic Formora Geometric 'F' Mark faithfully modeled from brand reference */}
      <path
        d="M 28 102 
           L 28 36 
           C 28 26, 36 22, 50 22 
           C 68 22, 88 20, 104 22 
           C 98 28, 86 34, 72 36 
           C 52 38, 44 41, 44 50 
           L 84 50 
           C 78 57, 68 64, 52 65 
           L 44 65 
           L 44 88 
           C 44 96, 38 100, 28 102 Z"
        fill="url(#formoraMarkGrad)"
      />
    </svg>
  );
};

export const FormoraWordmark: React.FC<{ className?: string; sizeClass?: string }> = ({
  className = '',
  sizeClass = 'text-xl'
}) => {
  return (
    <span
      className={`font-semibold tracking-[0.28em] text-[#F5F3F8] uppercase inline-flex items-center select-none ${sizeClass} ${className}`}
      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
    >
      <span>FORMOR</span>
      {/* Custom stylized A without crossbar as in brand reference: Λ */}
      <span className="inline-block relative text-[#F5F3F8] -ml-[0.04em]">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="inline-block h-[0.78em] w-[0.78em] mb-[0.08em]"
        >
          <polyline points="3 22 12 3 21 22" />
        </svg>
      </span>
    </span>
  );
};

export const FormoraLogo: React.FC<FormoraLogoProps> = ({
  variant = 'horizontal',
  size = 'md',
  className = '',
  showStudioLabel = true
}) => {
  const markSizeMap = {
    sm: 24,
    md: 32,
    lg: 48,
    xl: 72,
  };

  const wordmarkSizeMap = {
    sm: 'text-sm tracking-[0.24em]',
    md: 'text-base tracking-[0.28em]',
    lg: 'text-2xl tracking-[0.32em]',
    xl: 'text-4xl tracking-[0.36em]',
  };

  if (variant === 'mark') {
    return <FormoraMark size={markSizeMap[size]} className={className} />;
  }

  if (variant === 'full') {
    return (
      <div className={`flex flex-col items-center text-center gap-4 ${className}`}>
        {showStudioLabel && (
          <span 
            className="text-[11px] font-mono tracking-[0.32em] text-[#B65CFF] uppercase"
          >
            CREATIVE STUDIO
          </span>
        )}
        <FormoraMark size={markSizeMap[size] * 1.5} />
        <div className="flex flex-col items-center gap-1.5">
          <FormoraWordmark sizeClass={wordmarkSizeMap[size]} />
          <span className="text-[10px] tracking-[0.24em] text-[#A5A2B2] uppercase">
            BUILT TO MAKE AN IMPRESSION
          </span>
        </div>
      </div>
    );
  }

  // Horizontal variant (Ideal for top bar contract)
  return (
    <div className={`inline-flex items-center gap-3 shrink-0 ${className}`}>
      <FormoraMark size={markSizeMap[size]} />
      <div className="flex flex-col">
        <FormoraWordmark sizeClass={wordmarkSizeMap[size]} />
        {showStudioLabel && (
          <span className="text-[9px] font-mono tracking-[0.24em] text-[#B65CFF] uppercase leading-none -mt-0.5">
            CREATIVE STUDIO
          </span>
        )}
      </div>
    </div>
  );
};
