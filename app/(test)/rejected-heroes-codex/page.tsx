"use client";
/* Rejected Codex hero concepts — archived for reference */

import { lazy, Suspense } from "react";
import { useLocalizedData } from "@/hooks/use-localized-data";

type HeroEntryT = {
  id: string;
  label: string;
  load: () => Promise<{ default: React.ComponentType<{ txt?: string }> }>;
  needsTxt?: boolean;
  group?: string;
};

function lazyCodex(path: string, exportName: string) {
  return () =>
    import(/* webpackMode: "lazy" */ `@/components/home/intro/hero-codex-concepts/${path}`).then((m) => ({
      default: m[exportName],
    }));
}

const REGISTRY: HeroEntryT[] = [
  { id: "codex-candy-supernova", label: "Codex / 18: Candy Supernova", load: lazyCodex("candy-supernova", "CodexCandySupernova") },
  { id: "codex-signal-sanctuary", label: "Codex / 19: Signal Sanctuary", load: lazyCodex("signal-sanctuary", "CodexSignalSanctuary") },
  { id: "codex-mega-candy-cathedral", label: "Codex / 32: Mega Candy Cathedral", load: lazyCodex("mega-candy-cathedral", "CodexMegaCandyCathedral") },
  { id: "codex-gilded-figure-eight", label: "Codex / 33: Gilded Figure Eight", load: lazyCodex("gilded-figure-eight", "CodexGildedFigureEight") },
  { id: "codex-rosette-engine", label: "Codex / 34: Rosette Engine", load: lazyCodex("rosette-engine", "CodexRosetteEngine") },
  { id: "codex-neon-rift-garden", label: "Codex / 20: Neon Rift Garden", load: lazyCodex("neon-rift-garden", "CodexNeonRiftGarden") },
  /* ── v2 redesigns ── */
  { id: "codex-neon-rift-garden-v2", label: "Codex / 20b: Neon Rift Garden v2", load: lazyCodex("neon-rift-garden-v2", "CodexNeonRiftGardenV2"), group: "v2" },
  { id: "codex-candy-halo-collapse", label: "Codex / 22: Candy Halo Collapse", load: lazyCodex("candy-halo-collapse", "CodexCandyHaloCollapse") },
  { id: "codex-candy-halo-collapse-v2", label: "Codex / 15b: Candy Halo Collapse v2", load: lazyCodex("candy-halo-collapse-v2", "CodexCandyHaloCollapseV2"), group: "v2" },
  { id: "codex-chrome-bubble-shrine-v2", label: "Codex / 16b: Chrome Bubble Shrine v2", load: lazyCodex("chrome-bubble-shrine-v2", "CodexChromeBubbleShrineV2"), group: "v2" },
  { id: "codex-aurora-nightclub", label: "Codex / 17: Aurora Nightclub", load: lazyCodex("aurora-nightclub", "CodexAuroraNightclub") },
  { id: "codex-aurora-nightclub-v2", label: "Codex / 17b: Aurora Nightclub v2", load: lazyCodex("aurora-nightclub-v2", "CodexAuroraNightclubV2"), group: "v2" },
  { id: "codex-prism-transmission-v2", label: "Codex / 19b: Prism Transmission v2", load: lazyCodex("prism-transmission-v2", "CodexPrismTransmissionV2"), group: "v2" },
  { id: "codex-compass-altar", label: "Codex / 36: Compass Altar", load: lazyCodex("compass-altar", "CodexCompassAltar") },
  { id: "codex-halo-procession-billboard", label: "Codex / 37: Halo Procession Billboard", load: lazyCodex("halo-procession-billboard", "CodexHaloProcessionBillboard") },
  { id: "codex-bubblegum-oracle", label: "Codex / 24: Bubblegum Oracle", load: lazyCodex("bubblegum-oracle", "CodexBubblegumOracle") },
  { id: "codex-sugar-comet-parade", label: "Codex / 23: Sugar Comet Parade", load: lazyCodex("sugar-comet-parade", "CodexSugarCometParade") },
  { id: "codex-velvet-detonation", label: "Codex / 29: Velvet Detonation", load: lazyCodex("velvet-detonation", "CodexVelvetDetonation") },
  { id: "codex-candy-supernova-v2", label: "Codex / 18b: Candy Supernova v2", load: lazyCodex("candy-supernova-v2", "CodexCandySupernovaV2"), group: "v2" },
  { id: "codex-hypergrid-pilgrimage-v2", label: "Codex / 21b: Hypergrid Pilgrimage v2", load: lazyCodex("hypergrid-pilgrimage-v2", "CodexHypergridPilgrimageV2"), group: "v2" },
  { id: "codex-signal-sanctuary-v2", label: "Codex / 22b: Signal Sanctuary v2", load: lazyCodex("signal-sanctuary-v2", "CodexSignalSanctuaryV2"), group: "v2" },
  { id: "codex-blister-constellation-v2", label: "Codex / 23b: Blister Constellation v2", load: lazyCodex("blister-constellation-v2", "CodexBlisterConstellationV2"), group: "v2" },
  { id: "codex-mega-candy-cathedral-v2", label: "Codex / 24b: Mega Candy Cathedral v2", load: lazyCodex("mega-candy-cathedral-v2", "CodexMegaCandyCathedralV2"), group: "v2" },
  { id: "codex-processional-gate", label: "Codex / 35: Processional Gate", load: lazyCodex("processional-gate", "CodexProcessionalGate") },
];

const heroCache = new Map<string, React.LazyExoticComponent<React.ComponentType<{ txt?: string }>>>();

function LazyHero({ entry, txt }: { entry: HeroEntryT; txt: string }) {
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
      <Component {...(entry.needsTxt ? { txt } : {})} />
    </Suspense>
  );
}

export default function RejectedHeroesCodexPage() {
  const { introTxt = "" } = useLocalizedData("home");

  const v2Start = REGISTRY.findIndex((h) => h.group === "v2");

  return (
    <div className="bg-bgc min-h-screen text-white">
      <div className="fest-container py-16">
        <h1 className="text-40 md:text-64 mb-4 font-mono text-[#daa520]/80 uppercase">Rejected Heroes — Codex</h1>
        <p className="text-20 mb-8 text-lightgray">
          {REGISTRY.length} rejected Codex hero concept{REGISTRY.length !== 1 ? "s" : ""}.
        </p>
      </div>

      {REGISTRY.length === 0 && (
        <div className="fest-container pb-20">
          <p className="font-mono text-lightgray/40">No rejected Codex heroes yet.</p>
        </div>
      )}

      <div className="flex flex-col gap-12">
        {REGISTRY.map((hero, i) => (
          <section key={hero.id} id={hero.id}>
            {i === v2Start && (
              <div className="fest-container mb-8 border-t border-[#daa520]/20 pt-12">
                <h2 className="text-24 md:text-40 mb-2 font-mono uppercase text-[#daa520]/40">V2 Redesigns</h2>
              </div>
            )}
            <div className="fest-container">
              <div className="mb-4 flex items-center gap-3 border-b border-[#daa520]/10 pb-3">
                <span className="text-14 font-mono uppercase tracking-widest text-[#daa520]/50">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-16 font-mono uppercase text-white/80">{hero.label}</span>
              </div>
            </div>
            <LazyHero entry={hero} txt={introTxt} />
          </section>
        ))}
      </div>
    </div>
  );
}
