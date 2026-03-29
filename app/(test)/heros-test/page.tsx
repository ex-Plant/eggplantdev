"use client";
/* Hero concept experiments — eggplant in space × sacred geometry */
/* Uses dynamic imports + TanStack Virtual so only visible heroes load */

import { useRef, lazy, Suspense } from "react";
import { useWindowVirtualizer } from "@tanstack/react-virtual";
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
  /* ── Metatron's Cube (home hero) ── */
  { id: "metatrons-cube", label: "Metatron's Cube", load: lazyHero("metatrons-cube/hero-metatrons-cube", "HeroMetatronsCube") },
  { id: "metatrons-cube-silver", label: "Metatron's Cube Silver", load: lazyHero("metatrons-cube/hero-metatrons-cube", "HeroMetatronsCubeSilver") },

  /* ── Batch 5 — Geometry Overload ── */
  { id: "hypercube-altar", label: "Hypercube Altar", load: lazyHero("hypercube-altar/hero-hypercube-altar", "HeroHypercubeAltar") },
  { id: "hex-lattice-shrine-gold", label: "Hex Lattice Shrine Gold", load: lazyHero("hex-lattice-shrine/hero-hex-lattice-shrine-gold", "HeroHexLatticeShrineGold") },

  /* ── Batch 4 — Aubergine d'Or ── */
  { id: "reliquary-dor", label: "Reliquary d'Or", load: lazyHero("reliquary-dor/hero-reliquary-dor", "HeroReliquaryDor") },
  { id: "cathedrale-cosmique", label: "Cathédrale Cosmique", load: lazyHero("cathedrale-cosmique/hero-cathedrale-cosmique", "HeroCathedralCosmique") },
  { id: "soleil-aubergine", label: "Soleil Aubergine", load: lazyHero("soleil-aubergine/hero-soleil-aubergine", "HeroSoleilAubergine") },

  /* ── Batch 3 — Sacred geometry deep cuts ── */
  { id: "sacred-mandala", label: "Sacred Mandala", load: lazyHero("sacred-mandala/hero-sacred-mandala", "HeroSacredMandala") },

  /* ── Batch 2 — Djembéya / warm gold ── */
  { id: "echoes-djembeya", label: "Echoes of Djembéya", load: lazyHero("echoes-of-djembeya/hero-echoes-of-djembeya", "HeroEchoesOfDjembeya") },
  { id: "cosmic-cult-flyer", label: "Cosmic Cult Flyer", load: lazyHero("cosmic-cult-flyer/hero-cosmic-cult-flyer", "HeroCosmicCultFlyer") },
  { id: "glam-cosmic-billboard", label: "Glam Cosmic Billboard", load: lazyHero("glam-cosmic-billboard/hero-glam-cosmic-billboard", "HeroGlamCosmicBillboard") },
  { id: "ritual-observatory", label: "Ritual Observatory", load: lazyHero("ritual-observatory/hero-ritual-observatory", "HeroRitualObservatory") },

  /* ── Batch 1 — neon / cyan / magenta ── */
  { id: "sacred-ascension-gold", label: "EggplantsInSpace", load: lazyHero("sacred-ascension/hero-sacred-ascension-gold", "HeroEggplantsInSpace") },

  /* ── Rejected ── */
  // { id: "metatrons-cube-raw", label: "Metatron's Cube Raw", load: lazyHero("metatrons-cube/hero-metatrons-cube", "HeroMetatronsCubeRaw") },
  // { id: "metatrons-cube-mono", label: "Metatron's Cube Mono", load: lazyHero("metatrons-cube/hero-metatrons-cube", "HeroMetatronsCubeMono") },
  // { id: "hex-lattice-shrine", label: "Hex Lattice Shrine", load: lazyHero("hex-lattice-shrine/hero-hex-lattice-shrine", "HeroHexLatticeShrine") },
];

function buildCodexRegistry(): HeroEntryT[] {
  return [



    /* ── v2 redesigns ── */
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
  const listRef = useRef<HTMLDivElement>(null);

  const CODEX_REGISTRY = buildCodexRegistry();
  const ALL_HEROES = [...HERO_REGISTRY, ...CODEX_REGISTRY];
  const codexStart = HERO_REGISTRY.length;

  const virtualizer = useWindowVirtualizer({
    count: ALL_HEROES.length,
    estimateSize: () => 900,
    overscan: 1,
    scrollMargin: listRef.current?.offsetTop ?? 0,
  });

  return (
    <div className="bg-bgc text-white">
      <div className="fest-container py-16">
        <h1 className="text-40 md:text-64 mb-4 font-mono text-white uppercase">Hero Concepts</h1>
        <p className="text-20 text-lightgray mb-8">
          {ALL_HEROES.length} hero experiments — virtualized scroll, lazy-loaded.
        </p>
      </div>

      <div ref={listRef} className="relative" style={{ height: virtualizer.getTotalSize() }}>
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
              style={{ top: virtualRow.start - (listRef.current?.offsetTop ?? 0) }}
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
