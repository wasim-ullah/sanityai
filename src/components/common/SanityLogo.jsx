import React from 'react';

/**
 * SanityAI wordmark, rendered as an SVG so it scales crisply and inherits
 * the page's Instrument Sans font. `color` sets the fill; `height` sizes it
 * while preserving the wordmark's aspect ratio.
 */
export default function SanityLogo({ height = 13, color = '#0a0a0a', className, style }) {
  return (
    <svg
      role="img"
      aria-label="SanityAI"
      viewBox="0 0 709 104"
      height={height}
      style={{ display: 'block', ...style }}
      className={className}
    >
      <text
        x="0"
        y="82"
        fill={color}
        fontFamily="'Instrument Sans', 'Helvetica Neue', sans-serif"
        fontSize="104"
        fontWeight="600"
        letterSpacing="-4"
      >
        sanityai
      </text>
    </svg>
  );
}
