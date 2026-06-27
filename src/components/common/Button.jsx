import React from 'react';
import { ArrowUpRight } from 'lucide-react';

/**
 * Reusable Button Component for Taxwire design system
 * Supports 'primary' (solid white, dark green text) and 'secondary' (translucent green-tinted background, white text)
 */
export default function Button({
  children,
  variant = 'primary',
  showIcon = false,
  className = '',
  ...props
}) {
  // Use Tailwind CSS utility classes for modular styling
  const btnClass = variant === 'primary' 
    ? "group inline-flex items-center gap-2 bg-white text-[#063322] font-['Roobert_TRIAL_Medium'] text-xs font-medium leading-[14px] uppercase tracking-[0.08em] px-3.5 py-2 rounded-none border border-white transition-all duration-200 hover:bg-[var(--color-accent-green-bright)] hover:border-[var(--color-accent-green-bright)] hover:text-[#063322] hover:-translate-y-0.5" 
    : "group inline-flex items-center gap-2 bg-[#244c3d] text-white font-['Roobert_TRIAL_Medium'] text-xs font-medium leading-[14px] uppercase tracking-[0.08em] px-3.5 py-2 rounded-none border border-white/15 transition-all duration-200 hover:bg-[#2c5c4a] hover:border-white/30";

  return (
    <button
      className={`${btnClass} ${className}`}
      {...props}
    >
      <span>{children}</span>
      {showIcon && (
        <ArrowUpRight className="w-[11px] h-[11px] shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={2.5} />
      )}
    </button>
  );
}
