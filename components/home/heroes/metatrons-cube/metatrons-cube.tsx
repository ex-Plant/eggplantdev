/* Agent: Claude — Metatron's Cube */

"use client";

import { SVG_VIEWBOX, THEME_OVERRIDES, type ThemeT } from "./config";
import { MetatronsCubeSacredGeometry } from "./metatrons-cube-sacred-geometry";
import { MetatronsCubeVertexAnimations } from "./metatrons-cube-vertex-animations";
import { RadialGlow } from "@/components/animations/radial-glow/radial-glow";
import { MetatronsCubeHeroContent } from "./metatrons-cube-hero-content";

export function MetatronsCube({ theme = "gold" }: { theme?: ThemeT }) {
  return (
    <div
      id={`hero-metatrons-cube-${theme}`}
      className="relative flex min-h-screen flex-col py-20"
      style={THEME_OVERRIDES[theme]}
    >
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox={SVG_VIEWBOX}
        preserveAspectRatio="xMidYMid slice"
      >
        <MetatronsCubeSacredGeometry />
        <MetatronsCubeVertexAnimations />
      </svg>

      <RadialGlow />
      <MetatronsCubeHeroContent theme={theme} />
    </div>
  );
}
