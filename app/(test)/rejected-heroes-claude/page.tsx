"use client";
/* Rejected Claude hero concepts — archived for reference */

import { lazy } from "react";
import { ConceptShowcase, ShowcaseItem } from "@/components/test/concept-showcase";
import { SoleilOrbit } from "@/components/test/soleil-orbit";

type HeroEntryT = {
  id: string;
  label: string;
  Component: React.LazyExoticComponent<React.ComponentType<{ txt?: string }>>;
};

function lazyHero(path: string, exportName: string) {
  return lazy(() =>
    import(/* webpackMode: "lazy" */ `@/components/home/intro/hero-concepts/${path}`).then((m) => ({
      default: m[exportName],
    })),
  );
}

/* Lazy components created at module level — not during render */
const REGISTRY: HeroEntryT[] = [
  { id: "rose-window-reliquary", label: "Rose Window Reliquary", Component: lazyHero("rose-window-reliquary/hero-rose-window-reliquary", "HeroRoseWindowReliquary") },
  { id: "meridian-procession", label: "Meridian Procession", Component: lazyHero("meridian-procession/hero-meridian-procession", "HeroMeridianProcession") },
  { id: "compass-sanctum", label: "Compass Sanctum", Component: lazyHero("compass-sanctum/hero-compass-sanctum", "HeroCompassSanctum") },
  { id: "pentagram-rave", label: "Pentagram Rave", Component: lazyHero("pentagram-rave/hero-pentagram-rave", "HeroPentagramRave") },
  { id: "vesica-piscis-neon", label: "Vesica Piscis Neon", Component: lazyHero("vesica-piscis-neon/hero-vesica-piscis-neon", "HeroVesicaPiscisNeon") },
  { id: "sri-yantra-supernova", label: "Sri Yantra Supernova", Component: lazyHero("sri-yantra-supernova/hero-sri-yantra-supernova", "HeroSriYantraSupernova") },
  { id: "versailles-orbital", label: "Versailles Orbital", Component: lazyHero("versailles-orbital/hero-versailles-orbital", "HeroVersaillesOrbital") },
  { id: "golden-spiral", label: "Golden Spiral", Component: lazyHero("golden-spiral/hero-golden-spiral", "HeroGoldenSpiral") },
  { id: "flower-of-life", label: "Flower of Life", Component: lazyHero("flower-of-life/hero-flower-of-life", "HeroFlowerOfLife") },
  { id: "zodiac-astrolabe", label: "Zodiac Astrolabe", Component: lazyHero("zodiac-astrolabe/hero-zodiac-astrolabe", "HeroZodiacAstrolabe") },
  { id: "orbital-launch", label: "Orbital Launch / Solar Aubergine", Component: lazyHero("orbital-launch/hero-orbital-launch", "HeroOrbitalLaunch") },
  { id: "wormhole", label: "Warp Aubergine", Component: lazyHero("wormhole/hero-wormhole", "HeroWormhole") },
  { id: "tabernacle-dore", label: "Tabernacle Doré", Component: lazyHero("tabernacle-dore/hero-tabernacle-dore", "HeroTabernacleDore") },
  { id: "mission-briefing", label: "Mission Briefing / Eggplant Zero", Component: lazyHero("mission-briefing/hero-mission-briefing", "HeroMissionBriefing") },
  { id: "celestial-altar", label: "Celestial Altar", Component: lazyHero("celestial-altar/hero-celestial-altar", "HeroCelestialAltar") },
  { id: "soleil-orbit", label: "Soleil Aubergine — Orbit", Component: lazy(() => Promise.resolve({ default: SoleilOrbit as React.ComponentType<{ txt?: string }> })) },
];

export default function RejectedHeroesClaudePage() {
  return (
    <ConceptShowcase title="Rejected Heroes — Claude" count={REGISTRY.length} accent="gold">
      {REGISTRY.map(({ id, label, Component }, i) => (
        <ShowcaseItem key={id} index={i} label={label} accent="gold" lazy className="min-h-screen">
          <Component />
        </ShowcaseItem>
      ))}
    </ConceptShowcase>
  );
}
