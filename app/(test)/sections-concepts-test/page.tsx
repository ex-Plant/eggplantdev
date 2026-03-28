"use client";
/* All section experiments — content concepts + field notes variants */
/* To remove a section: delete/comment its line from the registries below */

import { ThemeToggle } from "@/components/home/sections/section-concepts/theme-toggle";
import { useLocalizedData } from "@/hooks/use-localized-data";

/* ── Section Concept imports (Agent: Claude + Codex) ── */
import { SacredManifesto } from "@/components/home/sections/section-concepts/sacred-manifesto";
import { GildedTestimony } from "@/components/home/sections/section-concepts/gilded-testimony";
import { RitualTimeline } from "@/components/home/sections/section-concepts/ritual-timeline";
import { CosmicContact } from "@/components/home/sections/section-concepts/cosmic-contact";
import { VoidProcess } from "@/components/home/sections/section-concepts/void-process";
import { AubergineCodex } from "@/components/home/sections/section-concepts/aubergine-codex";
import { TomeColophon } from "@/components/home/sections/section-concepts/tome-colophon";
import { DriftingMonument } from "@/components/home/sections/section-concepts/drifting-monument";
import { HeroCosmicAubergineGold } from "@/components/home/sections/section-concepts/cosmic-aubergine";
import { CodexCloseEncounter } from "@/components/home/intro/hero-codex-concepts/close-encounter";
import { MetallicTextTest } from "@/components/home/sections/section-concepts/metallic-text-test";

/* ═══════════════════════════════════════
   SECTION CONCEPT REGISTRY
   ═══════════════════════════════════════ */

const SECTION_REGISTRY: { id: string; label: string; component: (colorful: boolean) => React.ReactNode }[] = [
  { id: "sacred-manifesto", label: "Sacred Manifesto", component: (c) => <SacredManifesto colorful={c} /> },
  { id: "gilded-testimony", label: "Gilded Testimony", component: (c) => <GildedTestimony colorful={c} /> },
  { id: "ritual-timeline", label: "Ritual Timeline", component: (c) => <RitualTimeline colorful={c} /> },
  { id: "cosmic-contact", label: "Cosmic Contact", component: (c) => <CosmicContact colorful={c} /> },
  { id: "void-process", label: "Void Process", component: (c) => <VoidProcess colorful={c} /> },
  { id: "aubergine-codex", label: "Aubergine Codex", component: (c) => <AubergineCodex colorful={c} /> },
  { id: "tome-colophon", label: "Tome Colophon", component: (c) => <TomeColophon colorful={c} /> },
  { id: "metallic-text-test", label: "Metallic Text Test", component: (c) => <MetallicTextTest colorful={c} /> },
];

/* ═══════════════════════════════════════
   PAGE
   ═══════════════════════════════════════ */

export default function SectionsTestPage() {
  const { introTxt = "" } = useLocalizedData("home");
  const totalCount = SECTION_REGISTRY.length + 3;

  return (
    <div className="bg-bgc min-h-screen text-white">
      <div className="fest-container py-16">
        <h1 className="text-40 md:text-64 mb-4 font-mono text-white uppercase">All Sections</h1>
        <p className="text-20 text-lightgray mb-8">
          {totalCount} section experiments — content concepts with theme toggle + standalone sections.
        </p>
      </div>

      {/* ── Section Concepts ── */}
      <div className="flex flex-col gap-0">
        {SECTION_REGISTRY.map(({ id, label, component }, i) => (
          <div key={id} id={id}>
            <ThemeToggle label={label} index={i}>
              {(colorful) => component(colorful)}
            </ThemeToggle>
          </div>
        ))}
      </div>

      {/* ── Standalone Sections (no theme toggle) ── */}
      <section id="cosmic-aubergine-gold" className="pb-12">
        <div className="fest-container">
          <div className="mb-4 flex items-center gap-3 border-b border-[#daa520]/10 pb-3">
            <span className="text-14 font-mono uppercase tracking-widest text-[#daa520]/50">
              {String(SECTION_REGISTRY.length + 1).padStart(2, "0")}
            </span>
            <span className="text-16 font-mono uppercase text-white/80">Eggplant in Space (gold + silver eggplant)</span>
          </div>
        </div>
        <HeroCosmicAubergineGold />
      </section>

      <section id="close-encounter" className="pb-12">
        <div className="fest-container">
          <div className="mb-4 flex items-center gap-3 border-b border-purple-500/10 pb-3">
            <span className="text-14 font-mono uppercase tracking-widest text-purple-500/50">
              {String(SECTION_REGISTRY.length + 2).padStart(2, "0")}
            </span>
            <span className="text-16 font-mono uppercase text-white/80">Close Encounter</span>
          </div>
        </div>
        <CodexCloseEncounter txt={introTxt} />
      </section>

      <section id="drifting-monument" className="pb-12">
        <div className="fest-container">
          <div className="mb-4 flex items-center gap-3 border-b border-purple-500/10 pb-3">
            <span className="text-14 font-mono uppercase tracking-widest text-purple-500/50">
              {String(SECTION_REGISTRY.length + 3).padStart(2, "0")}
            </span>
            <span className="text-16 font-mono uppercase text-white/80">Drifting Monument</span>
          </div>
        </div>
        <DriftingMonument txt={introTxt} />
      </section>

    </div>
  );
}
