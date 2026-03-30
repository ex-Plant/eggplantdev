"use client";

import {
  ORBIT_PATH,
  ORBIT_PATH_PINK,
  ORBITAL_ARCS,
  GLAM_STRIPES,
  SPARKLES,
  STRIPE_PULSE_COUNT,
  STRIPE_DURATIONS,
  ID,
} from "./config";
import { TravelingDots } from "@/components/animations/fixed-cosmic-lines/traveling-dots";
import { GlamBackground } from "./hero-glam-cosmic-billboard-nebula-wash";
import { SvgFiltersAndGradients } from "@/components/animations/fixed-cosmic-lines/svg-filters-and-gradients";
import { GlamOrbitingDot } from "./hero-glam-cosmic-billboard-orbit-dot-animation";
import { GlamTextAndImage } from "./hero-glam-cosmic-billboard-hero-content";

export function HeroGlamCosmicBillboard() {
  return (
    <div id="hero-glam-cosmic-billboard" className="relative flex min-h-svh items-start py-20">
      {/* Gold/pink radial gradient background — fades to transparent at top & bottom edges */}
      <GlamBackground />

      <svg
        className="pointer-events-none absolute inset-0 h-full w-full overflow-hidden"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid meet"
      >
        <SvgFiltersAndGradients />

        {/* Diagonal glam stripes */}
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

        {/* Traveling dots along diagonal stripes */}
        <TravelingDots stripes={GLAM_STRIPES} pulseCount={STRIPE_PULSE_COUNT} durations={STRIPE_DURATIONS} />

        {/* Orbiting dot — gold arc */}
        <GlamOrbitingDot path={ORBIT_PATH} />
        {/* Orbiting dot — pink arc */}
        <GlamOrbitingDot path={ORBIT_PATH_PINK} gradientId={ID.orbitDotPink} durationS={38} delay={12} />
      </svg>

      {/* Title, subtitle, description, CTA buttons, and floating eggplant image */}
      <GlamTextAndImage />
    </div>
  );
}
