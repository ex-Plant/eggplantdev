/* Agent: Claude — Metatron's Cube */

"use client";

import { SVG_VIEWBOX, THEME_OVERRIDES, type ThemeT } from "./config";
import { MetatronsSacredGeometry } from "./metatrons-cube-sacred-geometry";
import { MetatronsVertexAnimations } from "./metatrons-cube-vertex-animations";
import { RadialGlow } from "@/components/animations/radial-glow/radial-glow";
import { MetatronsHeroContent } from "./metatrons-cube-hero-content";

export function MetatronsCube({ theme = "gold" }: { theme?: ThemeT }) {
  return (
    <div
      id={`hero-metatrons-cube-${theme}`}
      className="relative flex min-h-screen items-center justify-center py-16 md:py-20"
      style={THEME_OVERRIDES[theme]}
    >
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
    </div>
  );
}
