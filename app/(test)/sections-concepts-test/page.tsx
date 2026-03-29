"use client";
/* All section experiments — content concepts + field notes variants */
/* To remove a section: delete/comment its line from the registries below */

import { ThemeToggle } from "@/components/home/sections/section-concepts/theme-toggle";
import { ShowcaseItem } from "@/components/test/concept-showcase";
/* ── Section Concept imports (Agent: Claude + Codex) ── */
import { HeroCosmicAubergineGold } from "@/components/home/sections/section-concepts/cosmic-aubergine";
import { MetallicTextTest } from "@/components/home/sections/section-concepts/metallic-text-test";

/* ═══════════════════════════════════════
   SECTION CONCEPT REGISTRY
   ═══════════════════════════════════════ */

const SECTION_REGISTRY: { id: string; label: string; component: (colorful: boolean) => React.ReactNode }[] = [
  { id: "metallic-text-test", label: "Metallic Text Test", component: (c) => <MetallicTextTest colorful={c} /> },
];

/* ═══════════════════════════════════════
   PAGE
   ═══════════════════════════════════════ */

export default function SectionsTestPage() {
  return (
    <div className="bg-bgc min-h-screen text-white">
      <div className="fest-container py-16">
        <h1 className="text-40 md:text-64 mb-4 font-mono text-white uppercase">All Sections</h1>
        <p className="text-20 text-lightgray mb-8">
          {SECTION_REGISTRY.length + 1} section experiments — content concepts with theme toggle + standalone sections.
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
      <ShowcaseItem index={SECTION_REGISTRY.length} label="Eggplant in Space (gold + silver eggplant)" accent="gold">
        <HeroCosmicAubergineGold />
      </ShowcaseItem>

    </div>
  );
}
