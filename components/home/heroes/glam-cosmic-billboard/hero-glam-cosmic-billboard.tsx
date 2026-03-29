"use client";

import { ORBIT_PATH, ORBITAL_ARCS } from "./config";
import { GlamBackground } from "./hero-glam-cosmic-billboard-nebula-wash";
import { GlamSvgFiltersAndGradients } from "./hero-glam-cosmic-billboard-svg-defs";
import { GlamOrbitingDot } from "./hero-glam-cosmic-billboard-orbit-dot-animation";
import { GlamTextAndImage } from "./hero-glam-cosmic-billboard-hero-content";

export function HeroGlamCosmicBillboard() {
  return (
    <div
      id="hero-glam-cosmic-billboard"
      className="min-h-100svh relative flex items-start py-20 md:min-h-screen md:items-center md:py-[18vh]"
    >
      {/* Gold/pink radial gradient background — fades to transparent at top & bottom edges */}
      <GlamBackground />

      <svg
        className="pointer-events-none absolute inset-0 h-full w-full overflow-hidden"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Stripes, sparkles, and traveling dots handled by FixedCosmicLines in layout */}
        <GlamSvgFiltersAndGradients />

        {/* Orbital arcs — billboard-specific */}
        {ORBITAL_ARCS.map((arc, i) => (
          <ellipse
            key={`arc-${i}`}
            cx={arc.cx}
            cy={arc.cy}
            rx={arc.rx}
            ry={arc.ry}
            fill="none"
            stroke={arc.stroke}
            strokeWidth={arc.strokeWidth}
            opacity={arc.opacity}
            transform={`rotate(${arc.rotate} ${arc.cx} ${arc.cy})`}
          />
        ))}

        {/* Orbiting dot traveling along the gold arc */}
        <GlamOrbitingDot path={ORBIT_PATH} />
      </svg>

      {/* Title, subtitle, description, CTA buttons, and floating eggplant image */}
      <GlamTextAndImage />
    </div>
  );
}
