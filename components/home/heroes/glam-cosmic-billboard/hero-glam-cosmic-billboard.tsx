"use client";

import { ORBIT_PATH, GLAM_STRIPES } from "./config";
import { GlamBackground } from "./hero-glam-cosmic-billboard-nebula-wash";
import { GlamSvgFiltersAndGradients } from "./hero-glam-cosmic-billboard-svg-defs";
import { GlamStripesArcsSparkles } from "./hero-glam-cosmic-billboard-static-geometry";
import { GlamOrbitingDot } from "./hero-glam-cosmic-billboard-orbit-dot-animation";
import { GlamTravelingDots } from "./hero-glam-cosmic-billboard-stripe-pulse-animations";
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
        {/* SVG geometry now handled by FixedCosmicLines in layout */}
        {/* <GlamSvgFiltersAndGradients /> */}
        {/* <GlamStripesArcsSparkles /> */}
        {/* <GlamOrbitingDot path={ORBIT_PATH} /> */}
        {/* <GlamTravelingDots stripes={GLAM_STRIPES} /> */}
      </svg>

      {/* Title, subtitle, description, CTA buttons, and floating eggplant image */}
      <GlamTextAndImage />
    </div>
  );
}
