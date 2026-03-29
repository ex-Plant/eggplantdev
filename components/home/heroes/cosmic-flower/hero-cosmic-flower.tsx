"use client";

import EggplantRadialWrapper from "@/components/animations/eggplant-radial-wrapper";
import { NEBULA_CLOUDS } from "./config";
import { CosmicFlowerHeroContent } from "./cosmic-flower-hero-content";
import { CosmicFlowerSacredGeometry } from "./cosmic-flower-sacred-geometry";
import { RadialGlow } from "@/components/animations/radial-glow";

/** Wrapped version with per-section bg animation (used on home page) */
export function HeroCosmicFlower() {
  return (
    <EggplantRadialWrapper>
      <CosmicFlowerContent />
    </EggplantRadialWrapper>
  );
}

/** Raw content — no bg wrapper, usable inside ScrollBackdropProvider */
export function CosmicFlowerContent() {
  return (
    <div id="hero-cosmic-flower" className="relative flex min-h-screen items-center justify-center overflow-x-hidden py-16 md:py-20">
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
    </div>
  );
}
