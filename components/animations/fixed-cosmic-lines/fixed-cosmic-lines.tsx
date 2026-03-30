"use client";

/* Fixed full-viewport SVG: diagonal stripes, sparkles, and traveling dots.
   Sits behind all content as an ambient animation layer visible on scroll. */

import { GLAM_STRIPES, SPARKLES } from "./config";
import { SvgFiltersAndGradients } from "./svg-filters-and-gradients";
import { TravelingDots } from "./traveling-dots";

export function FixedCosmicLines() {
  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-150 h-lvh mix-blend-screen" aria-hidden="true">
      <svg viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice" className="h-full w-full">
        <SvgFiltersAndGradients />

        {/* Diagonal stripes */}
        {GLAM_STRIPES.map((stripe, i) => (
          <line
            key={`stripe-${i}`}
            x1="0"
            y1={stripe.y1}
            x2="1200"
            y2={stripe.y2}
            stroke={stripe.stroke}
            strokeWidth={stripe.strokeWidth}
            opacity={stripe.opacity}
          />
        ))}

        {/* Sparkle crosses */}
        {SPARKLES.map((s, i) => (
          <g key={`sparkle-${i}`} opacity={s.opacity}>
            <line x1={s.x - 3} y1={s.y} x2={s.x + 3} y2={s.y} stroke={s.color} strokeWidth="0.8" />
            <line x1={s.x} y1={s.y - 3} x2={s.x} y2={s.y + 3} stroke={s.color} strokeWidth="0.8" />
          </g>
        ))}

        {/* Traveling dots along stripes */}
        <TravelingDots stripes={GLAM_STRIPES} />
      </svg>
    </div>
  );
}
