/* Agent: Claude — Soleil Aubergine */

"use client";

import EggplantRadialWrapper from "@/components/animations/eggplant-radial-wrapper";
import { StarField } from "@/components/animations/star-field";
import { STARS } from "./config";
import { SoleilSacredGeometry } from "./hero-soleil-aubergine-sacred-geometry";
import { SoleilGlowAnimations } from "./hero-soleil-aubergine-glow-animations";
import { SoleilHeroContent } from "./hero-soleil-aubergine-hero-content";
import { RadialGlow } from "@/components/animations/radial-glow";

export function HeroSoleilAubergine() {
  return (
    <EggplantRadialWrapper>
      <div className="relative flex min-h-screen items-center justify-center py-20">
        <StarField stars={STARS} />
        <SoleilSacredGeometry />
        <SoleilGlowAnimations />
        <RadialGlow />
        <SoleilHeroContent />
      </div>
    </EggplantRadialWrapper>
  );
}
