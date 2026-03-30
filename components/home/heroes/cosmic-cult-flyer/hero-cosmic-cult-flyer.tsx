"use client";

import EggplantRadialWrapper from "@/components/animations/eggplant-radial-wrapper/eggplant-radial-wrapper";
import { RadialGlow } from "@/components/animations/radial-glow/radial-glow";
import { HeroSectionWrapper } from "@/components/home/heroes/hero-section-wrapper";
import { CosmicCultFlyerSacredGeometry } from "./cosmic-cult-flyer-sacred-geometry";
import { CosmicCultFlyerHeroContent } from "./cosmic-cult-flyer-hero-content";

export function HeroCosmicCultFlyer() {
  /* Retro cosmic cult flyer energy — art deco borders, sunburst pattern,
     eggplant as the central deity in a ritual diagram. */
  return (
    <EggplantRadialWrapper>
      <HeroSectionWrapper id="hero-cosmic-cult-flyer">
        <CosmicCultFlyerSacredGeometry />
        <RadialGlow />
        <CosmicCultFlyerHeroContent />
      </HeroSectionWrapper>
    </EggplantRadialWrapper>
  );
}
