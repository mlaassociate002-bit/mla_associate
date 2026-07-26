import React from 'react';

interface LogoIconProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const LogoIcon: React.FC<LogoIconProps> = ({ className = '', size = 'md' }) => {
  const sizeMap = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-20 h-20',
  };

  const dimensions = sizeMap[size] || sizeMap.md;

  return (
    <div className={`relative inline-flex items-center justify-center shrink-0 ${dimensions} ${className}`}>
      <svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-[0_4px_12px_rgba(245,158,11,0.35)]"
      >
        <defs>
          {/* Outer Gold Ring Metallic Gradient */}
          <linearGradient id="goldMetallic" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FCD34D" />
            <stop offset="30%" stopColor="#F59E0B" />
            <stop offset="50%" stopColor="#FEF08A" />
            <stop offset="75%" stopColor="#D97706" />
            <stop offset="100%" stopColor="#78350F" />
          </linearGradient>

          {/* Inner Obsidian Navy Gradient */}
          <linearGradient id="obsidianBg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0F172A" />
            <stop offset="50%" stopColor="#0B192C" />
            <stop offset="100%" stopColor="#020617" />
          </linearGradient>

          {/* Eagle Wing Gold Glow */}
          <linearGradient id="eagleGold" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFBEB" />
            <stop offset="20%" stopColor="#FDE047" />
            <stop offset="60%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#B45309" />
          </linearGradient>

          {/* Shield Inner Gradient */}
          <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1E293B" />
            <stop offset="100%" stopColor="#0F172A" />
          </linearGradient>
        </defs>

        {/* Base Background Circle with Gold Border */}
        <rect x="6" y="6" width="188" height="188" rx="42" fill="url(#obsidianBg)" stroke="url(#goldMetallic)" strokeWidth="6" />
        <rect x="14" y="14" width="172" height="172" rx="34" fill="none" stroke="#F59E0B" strokeWidth="1.5" strokeOpacity="0.4" strokeDasharray="6 4" />

        {/* Outer Decorative Gold Stars */}
        <path d="M100 22 L103 29 L110 30 L105 35 L106 42 L100 38 L94 42 L95 35 L90 30 L97 29 Z" fill="url(#goldMetallic)" />

        {/* Heraldic Shield */}
        <path
          d="M100 48 L142 62 C142 110 122 142 100 156 C78 142 58 110 58 62 L100 48 Z"
          fill="url(#shieldGrad)"
          stroke="url(#goldMetallic)"
          strokeWidth="4"
          strokeLinejoin="round"
        />

        {/* Eagle Wings Spread Left */}
        <path
          d="M100 88 C85 70 65 68 45 74 C40 88 48 112 70 120 C82 124 94 116 100 102 Z"
          fill="url(#eagleGold)"
          opacity="0.9"
        />
        {/* Feather Details Left */}
        <path d="M52 78 C65 82 82 90 92 102 M58 88 C70 92 84 98 94 108" stroke="#78350F" strokeWidth="2" strokeLinecap="round" />

        {/* Eagle Wings Spread Right */}
        <path
          d="M100 88 C115 70 135 68 155 74 C160 88 152 112 130 120 C118 124 106 116 100 102 Z"
          fill="url(#eagleGold)"
          opacity="0.9"
        />
        {/* Feather Details Right */}
        <path d="M148 78 C135 82 118 90 108 102 M142 88 C130 92 116 98 106 108" stroke="#78350F" strokeWidth="2" strokeLinecap="round" />

        {/* Eagle Head & Sharp Beak */}
        <path d="M100 66 L108 78 L116 80 L108 86 L104 96 L100 102 L96 96 L92 86 L84 80 L92 78 Z" fill="url(#goldMetallic)" />
        <path d="M100 66 L105 78 L100 88 L95 78 Z" fill="#FFFBEB" />
        <path d="M100 78 L109 81 L100 85 Z" fill="#F59E0B" />

        {/* Central MLA Banner Badge */}
        <path d="M55 130 L145 130 L135 152 L100 158 L65 152 Z" fill="url(#goldMetallic)" stroke="#FEF08A" strokeWidth="1.5" />
        
        {/* Text MLA inside Badge */}
        <text
          x="100"
          y="147"
          fontFamily="Georgia, serif"
          fontSize="18"
          fontWeight="900"
          fill="#0F172A"
          textAnchor="middle"
          letterSpacing="2.5"
        >
          MLA
        </text>

        {/* Subtext ASSOCIATE at Bottom */}
        <text
          x="100"
          y="172"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontSize="10"
          fontWeight="800"
          fill="#FDE047"
          textAnchor="middle"
          letterSpacing="3"
        >
          ASSOCIATE
        </text>
      </svg>
    </div>
  );
};
