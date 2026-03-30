"use client";

import EggplantRadialWrapper from "@/components/animations/eggplant-radial-wrapper";
import { RadialGlow } from "@/components/animations/radial-glow";
import { CosmicCultFlyerSacredGeometry } from "./cosmic-cult-flyer-sacred-geometry";
import { CosmicCultFlyerHeroContent } from "./cosmic-cult-flyer-hero-content";
import { GRAIN_BG_IMAGE } from "./config";

export function HeroCosmicCultFlyer() {
  /* Retro cosmic cult flyer energy — art deco borders, sunburst pattern,
     eggplant as the central deity in a ritual diagram. */
  return (
    <EggplantRadialWrapper>
      <div
        id="hero-cosmic-cult-flyer"
        className="relative flex min-h-screen items-center justify-center overflow-x-hidden py-16 md:py-20"
      >
        <CosmicCultFlyerSacredGeometry />
        <RadialGlow />

        {/* Grain overlay */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: GRAIN_BG_IMAGE }}
        />

        <CosmicCultFlyerHeroContent />
      </div>
    </EggplantRadialWrapper>
  );
}
