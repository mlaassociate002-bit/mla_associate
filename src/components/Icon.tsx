import React from 'react';
import * as LucideIcons from 'lucide-react';

interface IconProps {
  name: string;
  className?: string;
  size?: number;
}

export const Icon: React.FC<IconProps> = ({ name, className = 'w-5 h-5', size }) => {
  // @ts-ignore
  const IconComponent = LucideIcons[name] || LucideIcons.ShieldCheck;
  return <IconComponent className={className} size={size} />;
};
