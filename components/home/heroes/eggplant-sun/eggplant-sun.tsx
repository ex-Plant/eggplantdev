/* Agent: Claude — Soleil Aubergine */

"use client";

import HeroSectionWrapper from "@/components/animations/hero-section-wrapper/hero-section-wrapper";
import { StarField } from "@/components/animations/star-field/star-field";
import { STARS } from "./config";
import { EggplantSunSacredGeometry } from "./eggplant-sun-sacred-geometry";
import { EggplantSunGlowAnimations } from "./eggplant-sun-glow-animations";
import { EggplantSunHeroContent } from "./eggplant-sun-hero-content";
import { RadialGlow } from "@/components/animations/radial-glow/radial-glow";

export function EggplantSun() {
  return (
    <HeroSectionWrapper>
      <StarField stars={STARS} />
      <EggplantSunSacredGeometry />
      <EggplantSunGlowAnimations />
      <RadialGlow />
      <EggplantSunHeroContent />
    </HeroSectionWrapper>
  );
}
