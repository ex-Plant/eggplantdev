"use client";

/* FixedTravelingDots — ambient animation layer
   Fixed-position full-viewport overlay with traveling dots.
   Sits behind all page content in layout.tsx.

   Paths and gradients are configured in ./config.ts.
   The TravelingDots component is reusable — import it with your own
   config for different colors, paths, and timing. */

import { GRADIENTS, DOT_PATHS } from "./config";
import { TravelingDots } from "./traveling-dots";

export function FixedTravelingDots() {
  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-50 h-lvh mix-blend-screen" aria-hidden="true">
      <svg
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
        className="pointer-events-none absolute inset-0 h-full w-full"
      >
        <TravelingDots gradients={GRADIENTS} paths={DOT_PATHS} />
      </svg>
    </div>
  );
}
