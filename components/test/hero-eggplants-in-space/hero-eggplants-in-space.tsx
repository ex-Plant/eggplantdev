/* Agent: Claude — EggplantsInSpace */

"use client";

import EggplantRadialWrapper from "@/components/animations/eggplant-radial-wrapper/eggplant-radial-wrapper";
import { RadialGlow } from "@/components/animations/radial-glow/radial-glow";
import { HeroSectionWrapper } from "@/components/home/heroes/hero-section-wrapper";
import { EggplantsInSpaceSacredGeometry } from "./eggplants-in-space-sacred-geometry";
import { EggplantsInSpaceHeroContent } from "./eggplants-in-space-hero-content";
import { EggplantsInSpaceStarParticles } from "./eggplants-in-space-star-particles";

export function HeroEggplantsInSpace() {
  return (
    <EggplantRadialWrapper>
      <HeroSectionWrapper id="hero-eggplants-in-space">
        <EggplantsInSpaceSacredGeometry />
        <RadialGlow />
        <EggplantsInSpaceHeroContent />
        <EggplantsInSpaceStarParticles />
      </HeroSectionWrapper>
    </EggplantRadialWrapper>
  );
}
