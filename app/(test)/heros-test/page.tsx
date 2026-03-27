"use client";
/* Hero concept experiments — eggplant in space × sacred geometry */
/* Uses dynamic imports + TanStack Virtual so only visible heroes load */

import { useRef, lazy, Suspense } from "react";
import { useVirtualizer } from "@tanstack/react-virtual";
import { useLocalizedData } from "@/hooks/use-localized-data";

/* ═══════════════════════════════════════
   HERO REGISTRY — lazy-loaded components
   ═══════════════════════════════════════ */

type HeroEntryT = {
  id: string;
  label: string;
  load: () => Promise<{ default: React.ComponentType<{ txt?: string }> }>;
  needsTxt?: boolean;
  group?: string;
};

function lazyHero(path: string, exportName: string) {
  return () =>
    import(/* webpackMode: "lazy" */ `@/components/home/intro/hero-concepts/${path}`).then(
      (m) => ({ default: m[exportName] }),
    );
}

function lazyCodex(path: string, exportName: string) {
  return () =>
    import(/* webpackMode: "lazy" */ `@/components/home/intro/hero-codex-concepts/${path}`).then(
      (m) => ({ default: m[exportName] }),
    );
}

const HERO_REGISTRY: HeroEntryT[] = [
  /* ── Batch 6 — Djembeya descendants ── */
  { id: "rose-window-reliquary", label: "Rose Window Reliquary", load: lazyHero("hero-rose-window-reliquary", "HeroRoseWindowReliquary") },
  { id: "meridian-procession", label: "Meridian Procession", load: lazyHero("hero-meridian-procession", "HeroMeridianProcession") },
  { id: "compass-sanctum", label: "Compass Sanctum", load: lazyHero("hero-compass-sanctum", "HeroCompassSanctum") },

  /* ── Batch 5 — Geometry Overload ── */
  { id: "hypercube-altar", label: "Hypercube Altar", load: lazyHero("hero-hypercube-altar", "HeroHypercubeAltar") },
  { id: "pentagram-rave", label: "Pentagram Rave", load: lazyHero("hero-pentagram-rave", "HeroPentagramRave") },
  { id: "hex-lattice-shrine", label: "Hex Lattice Shrine", load: lazyHero("hero-hex-lattice-shrine", "HeroHexLatticeShrine") },
  { id: "vesica-piscis-neon", label: "Vesica Piscis Neon", load: lazyHero("hero-vesica-piscis-neon", "HeroVesicaPiscisNeon") },
  { id: "sri-yantra-supernova", label: "Sri Yantra Supernova", load: lazyHero("hero-sri-yantra-supernova", "HeroSriYantraSupernova") },

  /* ── Batch 4 — Aubergine d'Or ── */
  { id: "reliquary-dor", label: "Reliquary d'Or", load: lazyHero("hero-reliquary-dor", "HeroReliquaryDor") },
  { id: "cathedrale-cosmique", label: "Cathédrale Cosmique", load: lazyHero("hero-cathedrale-cosmique", "HeroCathedralCosmique") },
  { id: "soleil-aubergine", label: "Soleil Aubergine", load: lazyHero("hero-soleil-aubergine", "HeroSoleilAubergine") },
  { id: "versailles-orbital", label: "Versailles Orbital", load: lazyHero("hero-versailles-orbital", "HeroVersaillesOrbital") },
  { id: "tabernacle-dore", label: "Tabernacle Doré", load: lazyHero("hero-tabernacle-dore", "HeroTabernacleDore") },

  /* ── Batch 3 — Sacred geometry deep cuts ── */
  { id: "metatrons-cube", label: "Metatron's Cube", load: lazyHero("hero-metatrons-cube", "HeroMetatronsCube") },
  { id: "golden-spiral", label: "Golden Spiral", load: lazyHero("hero-golden-spiral", "HeroGoldenSpiral") },
  { id: "flower-of-life", label: "Flower of Life", load: lazyHero("hero-flower-of-life", "HeroFlowerOfLife") },
  { id: "zodiac-astrolabe", label: "Zodiac Astrolabe", load: lazyHero("hero-zodiac-astrolabe", "HeroZodiacAstrolabe") },
  { id: "sacred-mandala", label: "Sacred Mandala", load: lazyHero("hero-sacred-mandala", "HeroSacredMandala") },

  /* ── Batch 2 — Djembéya / warm gold ── */
  { id: "echoes-djembeya", label: "Echoes of Djembéya", load: lazyHero("hero-echoes-of-djembeya", "HeroEchoesOfDjembeya") },
  { id: "cosmic-cult-flyer", label: "Cosmic Cult Flyer", load: lazyHero("hero-cosmic-cult-flyer", "HeroCosmicCultFlyer") },
  { id: "celestial-altar", label: "Celestial Altar", load: lazyHero("hero-celestial-altar", "HeroCelestialAltar") },
  { id: "glam-cosmic-billboard", label: "Glam Cosmic Billboard", load: lazyHero("hero-glam-cosmic-billboard", "HeroGlamCosmicBillboard") },
  { id: "ritual-observatory", label: "Ritual Observatory", load: lazyHero("hero-ritual-observatory", "HeroRitualObservatory") },

  /* ── Batch 1 — neon / cyan / magenta ── */
  { id: "sacred-ascension", label: "Sacred Ascension", load: lazyHero("hero-sacred-ascension", "HeroSacredAscension") },
  { id: "cosmic-aubergine", label: "Cosmic Aubergine", load: lazyHero("hero-cosmic-aubergine", "HeroCosmicAubergine") },
  { id: "orbital-launch", label: "Orbital Launch / Solar Aubergine", load: lazyHero("hero-orbital-launch", "HeroOrbitalLaunch") },
  { id: "wormhole", label: "Warp Aubergine", load: lazyHero("hero-wormhole", "HeroWormhole") },
  { id: "mission-briefing", label: "Mission Briefing / Eggplant Zero", load: lazyHero("hero-mission-briefing", "HeroMissionBriefing") },
];

function buildCodexRegistry(): HeroEntryT[] {
  return [
    { id: "codex-drifting-monument", label: "Codex / 01: Drifting Monument", load: lazyCodex("drifting-monument", "CodexDriftingMonument"), needsTxt: true },
    { id: "codex-close-encounter", label: "Codex / 03: Close Encounter", load: lazyCodex("close-encounter", "CodexCloseEncounter"), needsTxt: true },
    { id: "codex-aurora-nightclub", label: "Codex / 17: Aurora Nightclub", load: lazyCodex("aurora-nightclub", "CodexAuroraNightclub") },
    { id: "codex-candy-supernova", label: "Codex / 18: Candy Supernova", load: lazyCodex("candy-supernova", "CodexCandySupernova") },
    { id: "codex-signal-sanctuary", label: "Codex / 19: Signal Sanctuary", load: lazyCodex("signal-sanctuary", "CodexSignalSanctuary") },
    { id: "codex-neon-rift-garden", label: "Codex / 20: Neon Rift Garden", load: lazyCodex("neon-rift-garden", "CodexNeonRiftGarden") },
    { id: "codex-candy-halo-collapse", label: "Codex / 22: Candy Halo Collapse", load: lazyCodex("candy-halo-collapse", "CodexCandyHaloCollapse") },
    { id: "codex-sugar-comet-parade", label: "Codex / 23: Sugar Comet Parade", load: lazyCodex("sugar-comet-parade", "CodexSugarCometParade") },
    { id: "codex-bubblegum-oracle", label: "Codex / 24: Bubblegum Oracle", load: lazyCodex("bubblegum-oracle", "CodexBubblegumOracle") },
    { id: "codex-velvet-detonation", label: "Codex / 29: Velvet Detonation", load: lazyCodex("velvet-detonation", "CodexVelvetDetonation") },
    { id: "codex-mega-candy-cathedral", label: "Codex / 32: Mega Candy Cathedral", load: lazyCodex("mega-candy-cathedral", "CodexMegaCandyCathedral") },
    { id: "codex-gilded-figure-eight", label: "Codex / 33: Gilded Figure Eight", load: lazyCodex("gilded-figure-eight", "CodexGildedFigureEight") },
    { id: "codex-rosette-engine", label: "Codex / 34: Rosette Engine", load: lazyCodex("rosette-engine", "CodexRosetteEngine") },
    { id: "codex-processional-gate", label: "Codex / 35: Processional Gate", load: lazyCodex("processional-gate", "CodexProcessionalGate") },
    { id: "codex-compass-altar", label: "Codex / 36: Compass Altar", load: lazyCodex("compass-altar", "CodexCompassAltar") },
    { id: "codex-halo-procession-billboard", label: "Codex / 37: Halo Procession Billboard", load: lazyCodex("halo-procession-billboard", "CodexHaloProcessionBillboard") },
    /* ── v2 redesigns ── */
    { id: "codex-candy-supernova-v2", label: "Codex / 18b: Candy Supernova v2", load: lazyCodex("candy-supernova-v2", "CodexCandySupernovaV2"), group: "v2" },
    { id: "codex-aurora-nightclub-v2", label: "Codex / 17b: Aurora Nightclub v2", load: lazyCodex("aurora-nightclub-v2", "CodexAuroraNightclubV2"), group: "v2" },
    { id: "codex-neon-rift-garden-v2", label: "Codex / 20b: Neon Rift Garden v2", load: lazyCodex("neon-rift-garden-v2", "CodexNeonRiftGardenV2"), group: "v2" },
    { id: "codex-prism-transmission-v2", label: "Codex / 19b: Prism Transmission v2", load: lazyCodex("prism-transmission-v2", "CodexPrismTransmissionV2"), group: "v2" },
    { id: "codex-chrome-bubble-shrine-v2", label: "Codex / 16b: Chrome Bubble Shrine v2", load: lazyCodex("chrome-bubble-shrine-v2", "CodexChromeBubbleShrineV2"), group: "v2" },
    { id: "codex-candy-halo-collapse-v2", label: "Codex / 15b: Candy Halo Collapse v2", load: lazyCodex("candy-halo-collapse-v2", "CodexCandyHaloCollapseV2"), group: "v2" },
    { id: "codex-hypergrid-pilgrimage-v2", label: "Codex / 21b: Hypergrid Pilgrimage v2", load: lazyCodex("hypergrid-pilgrimage-v2", "CodexHypergridPilgrimageV2"), group: "v2" },
    { id: "codex-signal-sanctuary-v2", label: "Codex / 22b: Signal Sanctuary v2", load: lazyCodex("signal-sanctuary-v2", "CodexSignalSanctuaryV2"), group: "v2" },
    { id: "codex-blister-constellation-v2", label: "Codex / 23b: Blister Constellation v2", load: lazyCodex("blister-constellation-v2", "CodexBlisterConstellationV2"), group: "v2" },
    { id: "codex-mega-candy-cathedral-v2", label: "Codex / 24b: Mega Candy Cathedral v2", load: lazyCodex("mega-candy-cathedral-v2", "CodexMegaCandyCathedralV2"), group: "v2" },
  ];
}

/* ── Lazy hero wrapper ── */
const heroCache = new Map<string, React.LazyExoticComponent<React.ComponentType<{ txt?: string }>>>();

function LazyHero({ entry, txt }: { entry: HeroEntryT; txt: string }) {
  if (!heroCache.has(entry.id)) {
    heroCache.set(entry.id, lazy(entry.load));
  }
  const Component = heroCache.get(entry.id)!;
  return (
    <Suspense fallback={<div className="flex h-[33rem] items-center justify-center"><span className="text-14 font-mono text-lightgray/30 uppercase tracking-widest animate-pulse">Loading {entry.label}…</span></div>}>
      <Component {...(entry.needsTxt ? { txt } : {})} />
    </Suspense>
  );
}

/* ── Page ── */
export default function HerosTestPage() {
  const { introTxt = "" } = useLocalizedData("home");
  const scrollRef = useRef<HTMLDivElement>(null);

  const CODEX_REGISTRY = buildCodexRegistry();
  const ALL_HEROES = [...HERO_REGISTRY, ...CODEX_REGISTRY];
  const codexStart = HERO_REGISTRY.length;

  const virtualizer = useVirtualizer({
    count: ALL_HEROES.length,
    getScrollElement: () => scrollRef.current,
    estimateSize: () => 900,
    overscan: 1,
  });

  return (
    <div ref={scrollRef} className="bg-bgc h-screen overflow-auto text-white">
      <div className="fest-container py-16">
        <h1 className="text-40 md:text-64 mb-4 font-mono text-white uppercase">Hero Concepts</h1>
        <p className="text-20 text-lightgray mb-8">
          {ALL_HEROES.length} hero experiments — virtualized scroll, lazy-loaded.
        </p>
      </div>

      <div className="relative" style={{ height: virtualizer.getTotalSize() }}>
        {virtualizer.getVirtualItems().map((virtualRow) => {
          const hero = ALL_HEROES[virtualRow.index];
          const isCodexHeader = virtualRow.index === codexStart;
          const isV2Header = hero.group === "v2" && ALL_HEROES[virtualRow.index - 1]?.group !== "v2";

          return (
            <div
              key={hero.id}
              data-index={virtualRow.index}
              ref={virtualizer.measureElement}
              className="absolute left-0 w-full"
              style={{ top: virtualRow.start }}
            >
              {isCodexHeader && (
                <div className="fest-container border-t border-[#f97316]/20 pt-12 mb-8">
                  <h2 className="text-24 md:text-40 mb-2 font-mono text-[#f97316]/60 uppercase">Codex Heroes</h2>
                  <p className="text-16 text-lightgray/50">{CODEX_REGISTRY.length} concepts from the Codex exploration phase.</p>
                </div>
              )}
              {isV2Header && (
                <div className="fest-container border-t border-[#daa520]/20 pt-12 mb-8">
                  <h2 className="text-24 md:text-40 mb-2 font-mono text-[#daa520]/60 uppercase">V2 Redesigns</h2>
                  <p className="text-16 text-lightgray/50">Gold palette, no blur, design-system aligned.</p>
                </div>
              )}
              <section id={hero.id} className="pb-12">
                <div className="fest-container">
                  <div className="mb-4 flex items-center gap-3 border-b border-white/10 pb-3">
                    <span className="text-14 font-mono tracking-widest text-fuchsia-500 uppercase">
                      {String(virtualRow.index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-16 font-mono text-white/80 uppercase">{hero.label}</span>
                  </div>
                </div>
                <LazyHero entry={hero} txt={introTxt} />
              </section>
            </div>
          );
        })}
      </div>
    </div>
  );
}
