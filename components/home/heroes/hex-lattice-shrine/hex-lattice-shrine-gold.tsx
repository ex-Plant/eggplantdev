"use client";

/* Agent: Claude — Hex Lattice Shrine Gold */

import EggplantRadialWrapper from "@/components/animations/eggplant-radial-wrapper/eggplant-radial-wrapper";
import { StarField } from "@/components/animations/star-field/star-field";
import { RadialGlow } from "@/components/animations/radial-glow/radial-glow";
import { STARS } from "./config";
import { HexLatticeShrineGeometry } from "./hex-lattice-shrine-sacred-geometry";
import { HexLatticeShrineHeroContent } from "./hex-lattice-shrine-hero-content";

export function HexLatticeShrineGold() {
  return (
    <EggplantRadialWrapper>
      <StarField stars={STARS} />
      <HexLatticeShrineGeometry />
      <RadialGlow />
      <HexLatticeShrineHeroContent />
    </EggplantRadialWrapper>
  );
}
