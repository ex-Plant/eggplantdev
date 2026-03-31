/* Agent: Claude — Cosmic Cartography */

"use client";

import HeroSectionWrapper from "@/components/animations/hero-section-wrapper/hero-section-wrapper";
import { StarField } from "@/components/animations/star-field/star-field";
import { CosmicCartographyGeometry } from "./cosmic-cartography-geometry";
import { CosmicCartographyHeroContent } from "./cosmic-cartography-hero-content";
import { RadialGlow } from "@/components/animations/radial-glow/radial-glow";

const STARS = Array.from({ length: 35 }, (_, i) => ({
  x: `${(i * 37 + 11) % 100}%`,
  y: `${(i * 53 + 19) % 100}%`,
  size: i % 8 === 0 ? 3 : i % 4 === 0 ? 2 : 1,
  opacity: 0.05 + (i % 6) * 0.025,
  color: i % 5 === 0 ? "var(--color-gold)" : "var(--color-cream)",
}));

export function CosmicCartography() {
  return (
    <HeroSectionWrapper>
      <StarField stars={STARS} />
      <CosmicCartographyGeometry />
      <RadialGlow />
      <CosmicCartographyHeroContent />
    </HeroSectionWrapper>
  );
}
