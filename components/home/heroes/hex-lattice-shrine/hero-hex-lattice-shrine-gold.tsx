"use client";

/* Agent: Claude — Hex Lattice Shrine Gold */

import EggplantRadialWrapper from "@/components/animations/eggplant-radial-wrapper/eggplant-radial-wrapper";
import { StarField } from "@/components/animations/star-field/star-field";
import { RadialGlow } from "@/components/animations/radial-glow/radial-glow";
import { HeroSectionWrapper } from "@/components/home/heroes/hero-section-wrapper";
import { STARS } from "./config";
import { HexLatticeSacredGeometry } from "./hex-lattice-shrine-sacred-geometry";
import { HexLatticeHeroContent } from "./hex-lattice-shrine-hero-content";

export function HeroHexLatticeShrineGold() {
  return (
    <EggplantRadialWrapper>
      <HeroSectionWrapper id="hero-hex-lattice-shrine-gold">
        <StarField stars={STARS} />
        <HexLatticeSacredGeometry />
        <RadialGlow />
        <HexLatticeHeroContent />
      </HeroSectionWrapper>
    </EggplantRadialWrapper>
  );
}
