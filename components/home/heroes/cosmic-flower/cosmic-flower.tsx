"use client";

import HeroSectionWrapper from "@/components/animations/hero-section-wrapper/hero-section-wrapper";
import { NEBULA_CLOUDS } from "./config";
import { CosmicFlowerHeroContent } from "./cosmic-flower-hero-content";
import { CosmicFlowerSacredGeometry } from "./cosmic-flower-sacred-geometry";
import { RadialGlow } from "@/components/animations/radial-glow/radial-glow";

export function CosmicFlower() {
  return (
    <HeroSectionWrapper>
      {/* Deep space nebula */}
      <div className="pointer-events-none absolute inset-0">
        {NEBULA_CLOUDS.map((cloud, i) => (
          <div
            key={i}
            className={`absolute ${cloud.position} ${cloud.size} rounded-full`}
            style={{ backgroundImage: cloud.gradient }}
          />
        ))}
      </div>
      <CosmicFlowerSacredGeometry />
      <RadialGlow />
      <CosmicFlowerHeroContent />
    </HeroSectionWrapper>
  );
}
