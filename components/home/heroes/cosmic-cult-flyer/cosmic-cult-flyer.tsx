"use client";

import HeroSectionWrapper from "@/components/animations/hero-section-wrapper/hero-section-wrapper";
import { RadialGlow } from "@/components/animations/radial-glow/radial-glow";
import { CosmicCultFlyerSacredGeometry } from "./cosmic-cult-flyer-sacred-geometry";
import { CosmicCultFlyerHeroContent } from "./cosmic-cult-flyer-hero-content";

export function CosmicCultFlyer() {
  /* Retro cosmic cult flyer energy — art deco borders, sunburst pattern,
     eggplant as the central deity in a ritual diagram. */
  return (
    <HeroSectionWrapper>
      <CosmicCultFlyerSacredGeometry />
      <RadialGlow />
      <CosmicCultFlyerHeroContent />
    </HeroSectionWrapper>
  );
}
