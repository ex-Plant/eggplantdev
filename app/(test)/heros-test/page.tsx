"use client";
/* Hero concept experiments — eggplant in space × sacred geometry */
/* Uses dynamic imports + TanStack Virtual so only visible heroes load */

import { useRef, useState, useEffect, useMemo, lazy, Suspense } from "react";
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
    import(/* webpackMode: "lazy" */ `@/components/home/intro/hero-concepts/${path}`).then((m) => ({
      default: m[exportName],
    }));
}

function lazyCodex(path: string, exportName: string) {
  return () =>
    import(/* webpackMode: "lazy" */ `@/components/home/intro/hero-codex-concepts/${path}`).then((m) => ({
      default: m[exportName],
    }));
}

const HERO_REGISTRY: HeroEntryT[] = [
  /* ── Used in backdrop-test (production candidates) ── */
  {
    id: "metatrons-cube",
    label: "Metatron's Cube",
    load: lazyHero("metatrons-cube/hero-metatrons-cube", "HeroMetatronsCube"),
  },
  {
    id: "glam-cosmic-billboard",
    label: "Glam Cosmic Billboard",
    load: lazyHero("glam-cosmic-billboard/hero-glam-cosmic-billboard", "HeroGlamCosmicBillboard"),
  },
  {
    id: "eggplants-in-space",
    label: "EggplantsInSpace",
    load: lazyHero("eggplants-in-space/hero-eggplants-in-space", "HeroEggplantsInSpace"),
  },

  /* ── Other active ── */
  {
    id: "hex-lattice-shrine-gold",
    label: "Hex Lattice Shrine Gold",
    load: lazyHero("hex-lattice-shrine/hero-hex-lattice-shrine-gold", "HeroHexLatticeShrineGold"),
  },
  {
    id: "cosmic-cult-flyer",
    label: "Cosmic Cult Flyer",
    load: lazyHero("cosmic-cult-flyer/hero-cosmic-cult-flyer", "HeroCosmicCultFlyer"),
  },

  /* ── Different layout — radial sun pattern ── */
  {
    id: "soleil-aubergine",
    label: "Soleil Aubergine",
    load: lazyHero("soleil-aubergine/hero-soleil-aubergine", "HeroSoleilAubergine"),
  },
];

function buildCodexRegistry(): HeroEntryT[] {
  return [
    /* ── v2 redesigns ── */
  ];
}

/* ── Lazy hero wrapper ── */
function LazyHero({ entry, txt }: { entry: HeroEntryT; txt: string }) {
  const Component = useMemo(() => lazy(entry.load), [entry.id]);
  return (
    <Suspense
      fallback={
        <div className="flex h-[33rem] items-center justify-center">
          <span className="text-14 text-lightgray/30 animate-pulse font-mono tracking-widest uppercase">
            Loading {entry.label}…
          </span>
        </div>
      }
    >
      <Component {...(entry.needsTxt ? { txt } : {})} />
    </Suspense>
  );
}

/* ── Page ── */
export default function HerosTestPage() {
  const { introTxt = "" } = useLocalizedData("home");
  const listRef = useRef<HTMLDivElement>(null);
  const [scrollMargin, setScrollMargin] = useState(0);

  useEffect(() => {
    if (listRef.current) setScrollMargin(listRef.current.offsetTop);
  }, []);

  const CODEX_REGISTRY = buildCodexRegistry();
  const ALL_HEROES = [...HERO_REGISTRY, ...CODEX_REGISTRY];
  const codexStart = HERO_REGISTRY.length;

  const virtualizer = useWindowVirtualizer({
    count: ALL_HEROES.length,
    estimateSize: () => 900,
    overscan: 1,
    scrollMargin,
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
              style={{ top: virtualRow.start - scrollMargin }}
            >
              {isCodexHeader && (
                <div className="fest-container mb-8 border-t border-[#f97316]/20 pt-12">
                  <h2 className="text-24 md:text-40 mb-2 font-mono text-[#f97316]/60 uppercase">Codex Heroes</h2>
                  <p className="text-16 text-lightgray/50">
                    {CODEX_REGISTRY.length} concepts from the Codex exploration phase.
                  </p>
                </div>
              )}
              {isV2Header && (
                <div className="fest-container mb-8 border-t border-[#daa520]/20 pt-12">
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
