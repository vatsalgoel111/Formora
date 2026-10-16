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
      className={`shrink-0 transition-transform duration-300 ${className}`}
      aria-label="Formora Monogram"
    >
      <defs>
        {/* Subtle metallic chrome gradient matching Formora branding */}
        <linearGradient id="formoraMarkChrome" x1="24" y1="18" x2="108" y2="108" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="35%" stopColor="#F2F0F7" />
          <stop offset="70%" stopColor="#D5D3E0" />
          <stop offset="100%" stopColor="#A5A2B2" />
        </linearGradient>
        {/* Specular highlight edge */}
        <linearGradient id="formoraBevelHighlight" x1="28" y1="18" x2="28" y2="104" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
          <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#B65CFF" stopOpacity="0.3" />
        </linearGradient>
      </defs>

      {/* Aerodynamic Formora Geometric 'F' Mark faithfully modeled from brand reference */}
      <path
        d="M 26 104
           L 26 38
           C 26 26, 36 20, 52 19
           C 70 18, 92 18, 106 20
           C 101 27, 88 33, 74 35
           C 54 37, 44 41, 44 48
           L 86 48
           C 80 55, 70 63, 52 64
           L 44 64
           L 44 88
           C 44 98, 38 102, 26 104 Z"
        fill="url(#formoraMarkChrome)"
      />

      {/* Subtle interior precision highlight along the spine */}
      <path
        d="M 27 38 L 27 102 C 34 100, 42 94, 43 87 L 43 65 L 50 65 C 64 64, 73 57, 78 50 L 44 50 C 42 41, 52 38, 70 36 C 82 34, 94 29, 101 22 C 89 20, 68 20, 52 21 C 38 22, 29 27, 27 38 Z"
        fill="none"
        stroke="url(#formoraBevelHighlight)"
        strokeWidth="1.2"
        strokeOpacity="0.6"
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
      className={`font-semibold tracking-[0.32em] text-[#F5F3F8] uppercase inline-flex items-center select-none ${sizeClass} ${className}`}
      style={{ fontFamily: "'Space Grotesk', system-ui, -apple-system, sans-serif" }}
    >
      <span>FORMOR</span>
      {/* Custom stylized A without crossbar as in brand reference: inverted chevron Λ */}
      <span className="inline-block relative text-[#F5F3F8] -ml-[0.05em] align-baseline">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="inline-block h-[0.76em] w-[0.76em] mb-[0.1em]"
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
    sm: 'text-sm tracking-[0.26em]',
    md: 'text-base tracking-[0.30em]',
    lg: 'text-2xl tracking-[0.34em]',
    xl: 'text-4xl tracking-[0.38em]',
  };

  if (variant === 'mark') {
    return <FormoraMark size={markSizeMap[size]} className={className} />;
  }

  if (variant === 'full') {
    return (
      <div className={`flex flex-col items-center text-center gap-4 ${className}`}>
        {showStudioLabel && (
          <span 
            className="text-[10px] font-mono tracking-[0.36em] text-[#B65CFF] uppercase font-medium"
          >
            CREATIVE STUDIO
          </span>
        )}
        <FormoraMark size={markSizeMap[size] * 1.5} />
        <div className="flex flex-col items-center gap-1.5">
          <FormoraWordmark sizeClass={wordmarkSizeMap[size]} />
          <span className="text-[10px] tracking-[0.26em] text-[#A5A2B2] uppercase font-mono">
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
          <span className="text-[9px] font-mono tracking-[0.28em] text-[#B65CFF] uppercase leading-none -mt-0.5 font-medium">
            CREATIVE STUDIO
          </span>
        )}
      </div>
    </div>
  );
};
