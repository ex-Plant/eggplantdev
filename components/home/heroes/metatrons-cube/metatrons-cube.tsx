/* Agent: Claude — Metatron's Cube */

"use client";

import { SVG_VIEWBOX, THEME_OVERRIDES, type ThemeT } from "./config";
import { MetatronsSacredGeometry } from "./metatrons-cube-sacred-geometry";
import { MetatronsVertexAnimations } from "./metatrons-cube-vertex-animations";
import { RadialGlow } from "@/components/animations/radial-glow/radial-glow";
import { MetatronsHeroContent } from "./metatrons-cube-hero-content";
import { HeroSectionWrapper } from "@/components/home/heroes/hero-section-wrapper";

export function MetatronsCube({ theme = "gold" }: { theme?: ThemeT }) {
  return (
    <HeroSectionWrapper id={`hero-metatrons-cube-${theme}`} style={THEME_OVERRIDES[theme]}>
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox={SVG_VIEWBOX}
        preserveAspectRatio="xMidYMid slice"
      >
        <MetatronsSacredGeometry />
        <MetatronsVertexAnimations />
      </svg>

      <RadialGlow />
      <MetatronsHeroContent theme={theme} />
    </HeroSectionWrapper>
  );
}
