"use client";

/* Agent: Claude — Hex Lattice Shrine Gold */

import EggplantRadialWrapper from "@/components/animations/eggplant-radial-wrapper";
import { StarField } from "@/components/animations/star-field";
import { RadialGlow } from "@/components/animations/radial-glow";
import { STARS } from "./config";
import { HexLatticeSacredGeometry } from "./hex-lattice-shrine-sacred-geometry";
import { HexLatticeHeroContent } from "./hex-lattice-shrine-hero-content";

export function HeroHexLatticeShrineGold() {
  return (
    <EggplantRadialWrapper>
      <div
        id="hero-hex-lattice-shrine-gold"
        className="relative flex min-h-screen items-center justify-center overflow-x-hidden py-16 md:py-20"
      >
        <StarField stars={STARS} />
        <HexLatticeSacredGeometry />
        <RadialGlow />
        <HexLatticeHeroContent />
      </div>
    </EggplantRadialWrapper>
  );
}
