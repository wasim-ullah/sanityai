import React from 'react';

// Custom computer icon (monitor + tower) matching the reference image using clean vector strokes
export default function CustomCalculatorIcon({ size = 28, strokeWidth = 1.2, fill = 'none', className = '', ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* Monitor Stand */}
      <path d="M4 20h7" />
      {/* Monitor screen frame (open on the right side next to the tower) */}
      <path d="M13 5H5a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h8" />
      {/* Desktop Tower (filled green when active) */}
      <rect
        x="15"
        y="5"
        width="7"
        height="15"
        rx="2"
        fill={fill}
        className="transition-colors duration-300"
      />
      {/* Tower interior details (lines and power button) */}
      <path d="M17 8h3" />
      <path d="M17 11h3" />
      <circle cx="18.5" cy="16" r="0.75" fill="currentColor" stroke="none" />
    </svg>
  );
}
