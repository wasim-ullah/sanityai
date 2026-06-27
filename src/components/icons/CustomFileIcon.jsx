import React from 'react';

// Custom file/document icon matching the reference image using clean vector strokes
export default function CustomFileIcon({ size = 28, strokeWidth = 1.2, fill = 'none', className = '', ...props }) {
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
      {/* File Page Body (filled green when active) */}
      <path
        d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9L14 3z"
        fill={fill}
        className="transition-colors duration-300"
      />
      {/* Folded corner flap line */}
      <path d="M14 3v4a2 2 0 0 0 2 2h4" />
    </svg>
  );
}
