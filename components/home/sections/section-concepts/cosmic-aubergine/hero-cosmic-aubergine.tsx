"use client";

import EggplantRadialWrapper from "@/components/animations/eggplant-radial-wrapper";
import { buildNebulaClouds } from "./config";
import { CosmicAubergineHeroContent } from "./cosmic-aubergine-hero-content";
import { CosmicAubergineSacredGeometry } from "./cosmic-aubergine-sacred-geometry";

/** Wrapped version with per-section bg animation (used on home page) */
export function HeroCosmicAubergine() {
  return (
    <EggplantRadialWrapper>
      <CosmicAubergineContent />
    </EggplantRadialWrapper>
  );
}

/** Raw content — no bg wrapper, usable inside ScrollBackdropProvider */
export function CosmicAubergineContent() {
  const clouds = buildNebulaClouds();

  return (
    <div id="hero-cosmic-aubergine" className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Deep space nebula */}
      <div className="pointer-events-none absolute inset-0">
        {clouds.map((cloud, i) => (
          <div
            key={i}
            className={`absolute ${cloud.position} ${cloud.size} rounded-full`}
            style={{ backgroundImage: cloud.gradient }}
          />
        ))}
      </div>

      <CosmicAubergineSacredGeometry />
      <CosmicAubergineHeroContent />
    </div>
  );
}
