import React from 'react';
import { MAP_NODES, MAP_PATHS } from '../../constants/hero';

export default function WorldMap() {
  return (
    <svg
      className="w-full h-full"
      viewBox="75 15 310 292"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Animated map showing global tax compliance data syncing between regions"
    >
      {/* Simplified continent silhouettes — soft, low-contrast backdrop */}
      <g className="fill-white/5" opacity="0.65">
        {/* North America silhouette */}
        <path d="M 80,75 C 120,45 200,40 240,60 C 250,70 255,95 265,105 C 275,115 280,85 290,75 C 310,55 330,85 350,105 C 365,115 375,140 355,160 C 335,180 315,215 325,250 C 330,260 335,270 325,275 C 305,275 285,250 265,255 C 255,260 250,280 260,290 C 250,300 240,310 235,305 C 220,280 200,260 190,250 C 180,240 175,210 185,200 C 175,180 165,140 160,110 C 155,90 140,75 120,80 Z" />
        {/* Greenland */}
        <path d="M 320,35 C 340,25 370,15 380,25 C 390,35 360,65 350,75 C 340,85 320,65 315,55 Z" />
      </g>

      {/* Connection paths — animated draw-in via dash offset */}
      <g
        className="fill-none stroke-white/10 stroke-[1.5] stroke-linecap-round"
      >
        {MAP_PATHS.map((p, i) => (
          <path
            key={i}
            d={p.d}
            className="animate-dash-flow stroke-[var(--color-accent-green)] opacity-60"
            style={{ animationDelay: p.delay }}
          />
        ))}
      </g>

      {/* Nodes — static dot + pulsing ring */}
      <g>
        {MAP_NODES.map((n) => (
          <g key={n.id} transform={`translate(${n.cx}, ${n.cy})`}>
            <circle
              className="animate-ping-glow stroke-[var(--color-accent-green-bright)] stroke-[1.5] fill-none"
              r="4"
              style={{ animationDelay: n.delay }}
            />
            <circle r="3.5" className="fill-[var(--color-accent-green-bright)]" />
          </g>
        ))}
      </g>
    </svg>
  );
}
