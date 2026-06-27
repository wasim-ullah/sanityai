import React from 'react';

// Custom bulb icon with a dollar sign inside matching the reference image using clean vector strokes
export default function CustomBulbIcon({ size = 28, strokeWidth = 1.2, fill = 'none', className = '', ...props }) {
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
      {/* Main Bulb Body (filled green when active) */}
      <path
        d="M14 14C15.5 11.5 16 9.6 16 8A4 4 0 0 0 8 8C8 9.6 8.5 11.5 10 14Z"
        fill={fill}
        className="transition-colors duration-300"
      />
      {/* Dollar Sign inside the bulb */}
      <path d="M14 6.5h-3.5a1.25 1.25 0 0 0 0 2.5h3a1.25 1.25 0 0 1 0 2.5H9.5" />
      <path d="M11.75 5.25v7.5" />
      {/* Horizontal neck line */}
      <path d="M10 14h4" />
      {/* Bottom U-shaped cap */}
      <path d="M10 14v1a2 2 0 0 0 4 0v-1" />
    </svg>
  );
}
