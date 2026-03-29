"use client";
/* Rejected Claude hero concepts — archived for reference */

import { lazy, Suspense } from "react";
import { SoleilOrbit } from "@/components/test/soleil-orbit";

type HeroEntryT = {
  id: string;
  label: string;
  load: () => Promise<{ default: React.ComponentType<{ txt?: string }> }>;
};

function lazyHero(path: string, exportName: string) {
  return () =>
    import(/* webpackMode: "lazy" */ `@/components/home/intro/hero-concepts/${path}`).then((m) => ({
      default: m[exportName],
    }));
}

const REGISTRY: HeroEntryT[] = [
  { id: "rose-window-reliquary", label: "Rose Window Reliquary", load: lazyHero("rose-window-reliquary/hero-rose-window-reliquary", "HeroRoseWindowReliquary") },
  { id: "meridian-procession", label: "Meridian Procession", load: lazyHero("meridian-procession/hero-meridian-procession", "HeroMeridianProcession") },
  { id: "compass-sanctum", label: "Compass Sanctum", load: lazyHero("compass-sanctum/hero-compass-sanctum", "HeroCompassSanctum") },
  { id: "pentagram-rave", label: "Pentagram Rave", load: lazyHero("pentagram-rave/hero-pentagram-rave", "HeroPentagramRave") },
  { id: "vesica-piscis-neon", label: "Vesica Piscis Neon", load: lazyHero("vesica-piscis-neon/hero-vesica-piscis-neon", "HeroVesicaPiscisNeon") },
  { id: "sri-yantra-supernova", label: "Sri Yantra Supernova", load: lazyHero("sri-yantra-supernova/hero-sri-yantra-supernova", "HeroSriYantraSupernova") },
  { id: "versailles-orbital", label: "Versailles Orbital", load: lazyHero("versailles-orbital/hero-versailles-orbital", "HeroVersaillesOrbital") },
  { id: "golden-spiral", label: "Golden Spiral", load: lazyHero("golden-spiral/hero-golden-spiral", "HeroGoldenSpiral") },
  { id: "flower-of-life", label: "Flower of Life", load: lazyHero("flower-of-life/hero-flower-of-life", "HeroFlowerOfLife") },
  { id: "zodiac-astrolabe", label: "Zodiac Astrolabe", load: lazyHero("zodiac-astrolabe/hero-zodiac-astrolabe", "HeroZodiacAstrolabe") },
  { id: "orbital-launch", label: "Orbital Launch / Solar Aubergine", load: lazyHero("orbital-launch/hero-orbital-launch", "HeroOrbitalLaunch") },
  { id: "wormhole", label: "Warp Aubergine", load: lazyHero("wormhole/hero-wormhole", "HeroWormhole") },
  { id: "tabernacle-dore", label: "Tabernacle Doré", load: lazyHero("tabernacle-dore/hero-tabernacle-dore", "HeroTabernacleDore") },
  { id: "mission-briefing", label: "Mission Briefing / Eggplant Zero", load: lazyHero("mission-briefing/hero-mission-briefing", "HeroMissionBriefing") },
  { id: "celestial-altar", label: "Celestial Altar", load: lazyHero("celestial-altar/hero-celestial-altar", "HeroCelestialAltar") },
  { id: "soleil-orbit", label: "Soleil Aubergine — Orbit", load: () => Promise.resolve({ default: SoleilOrbit as React.ComponentType<{ txt?: string }> }) },
];

const heroCache = new Map<string, React.LazyExoticComponent<React.ComponentType<{ txt?: string }>>>();

function LazyHero({ entry }: { entry: HeroEntryT }) {
  if (!heroCache.has(entry.id)) {
    heroCache.set(entry.id, lazy(entry.load));
  }
  const Component = heroCache.get(entry.id)!;
  return (
    <Suspense
      fallback={
        <div className="flex h-[33rem] items-center justify-center">
          <span className="text-14 animate-pulse font-mono uppercase tracking-widest text-lightgray/30">
            Loading {entry.label}…
          </span>
        </div>
      }
    >
      <Component />
    </Suspense>
  );
}

export default function RejectedHeroesClaudePage() {
  return (
    <div className="bg-bgc min-h-screen text-white">
      <div className="fest-container py-16">
        <h1 className="text-40 md:text-64 mb-4 font-mono text-[#daa520]/80 uppercase">Rejected Heroes — Claude</h1>
        <p className="text-20 mb-8 text-lightgray">
          {REGISTRY.length} rejected Claude hero concept{REGISTRY.length !== 1 ? "s" : ""}.
        </p>
      </div>

      {REGISTRY.length === 0 && (
        <div className="fest-container pb-20">
          <p className="font-mono text-lightgray/40">No rejected Claude heroes yet.</p>
        </div>
      )}

      <div className="flex flex-col gap-12">
        {REGISTRY.map((hero, i) => (
          <section key={hero.id} id={hero.id}>
            <div className="fest-container">
              <div className="mb-4 flex items-center gap-3 border-b border-[#daa520]/10 pb-3">
                <span className="text-14 font-mono uppercase tracking-widest text-[#daa520]/50">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-16 font-mono uppercase text-white/80">{hero.label}</span>
              </div>
            </div>
            <LazyHero entry={hero} />
          </section>
        ))}
      </div>
    </div>
  );
}
