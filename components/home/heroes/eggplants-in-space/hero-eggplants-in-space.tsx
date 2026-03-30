/* Agent: Claude — EggplantsInSpace */

"use client";

import EggplantRadialWrapper from "@/components/animations/eggplant-radial-wrapper/eggplant-radial-wrapper";
import { RadialGlow } from "@/components/animations/radial-glow/radial-glow";
import { EggplantsInSpaceSacredGeometry } from "./eggplants-in-space-sacred-geometry";
import { EggplantsInSpaceHeroContent } from "./eggplants-in-space-hero-content";
import { EggplantsInSpaceStarParticles } from "./eggplants-in-space-star-particles";

export function HeroEggplantsInSpace() {
  return (
    <EggplantRadialWrapper>
      <div
        id="hero-eggplants-in-space"
        className="relative flex min-h-screen items-center justify-center py-16 md:py-20"
      >
        <EggplantsInSpaceSacredGeometry />
        <RadialGlow />
        <EggplantsInSpaceHeroContent />
        <EggplantsInSpaceStarParticles />
      </div>
    </EggplantRadialWrapper>
  );
}
