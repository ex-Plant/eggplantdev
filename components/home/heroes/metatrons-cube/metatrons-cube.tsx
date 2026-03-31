/* Agent: Claude — Metatron's Cube */

"use client";

import { SVG_VIEWBOX, THEME_OVERRIDES, type ThemeT } from "./config";
import { MetatronsCubeSacredGeometry } from "./metatrons-cube-sacred-geometry";
import { MetatronsCubeVertexAnimations } from "./metatrons-cube-vertex-animations";
import { RadialGlow } from "@/components/animations/radial-glow/radial-glow";
import { MetatronsCubeHeroContent } from "./metatrons-cube-hero-content";
import HeroSectionWrapper from "@/components/animations/hero-section-wrapper/hero-section-wrapper";

export function MetatronsCube({ theme = "gold" }: { theme?: ThemeT }) {
  return (
    <HeroSectionWrapper style={THEME_OVERRIDES[theme]}>
      <MetatronsCubeSacredGeometry />
      <MetatronsCubeVertexAnimations />

      <RadialGlow />
      <MetatronsCubeHeroContent theme={theme} />
    </HeroSectionWrapper>
  );
}
