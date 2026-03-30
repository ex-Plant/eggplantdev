/* Agent: Claude — Soleil Aubergine */

"use client";

import EggplantRadialWrapper from "@/components/animations/eggplant-radial-wrapper/eggplant-radial-wrapper";
import { StarField } from "@/components/animations/star-field/star-field";
import { STARS } from "./config";
import { SoleilSacredGeometry } from "./hero-soleil-aubergine-sacred-geometry";
import { SoleilGlowAnimations } from "./hero-soleil-aubergine-glow-animations";
import { SoleilHeroContent } from "./hero-soleil-aubergine-hero-content";
import { RadialGlow } from "@/components/animations/radial-glow/radial-glow";
import { HeroSectionWrapper } from "@/components/home/heroes/hero-section-wrapper";

export function HeroSoleilAubergine() {
  return (
    <EggplantRadialWrapper>
      <HeroSectionWrapper id="hero-soleil-aubergine">
        <StarField stars={STARS} />
        <SoleilSacredGeometry />
        <SoleilGlowAnimations />
        <RadialGlow />
        <SoleilHeroContent />
      </HeroSectionWrapper>
    </EggplantRadialWrapper>
  );
}
