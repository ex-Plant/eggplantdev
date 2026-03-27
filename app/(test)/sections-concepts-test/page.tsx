"use client";
/* All section experiments — content concepts + field notes variants */
/* To remove a section: delete/comment its line from the registries below */

import { cn } from "@/helpers/cn";
import { ThemeToggle } from "@/components/home/sections/section-concepts/theme-toggle";
import { FieldNotesSectionT, FieldNotesVariantT } from "@/types/home-page-types";

/* ── Section Concept imports (Agent: Claude + Codex) ── */
import { ConstellationBio } from "@/components/home/sections/section-concepts/constellation-bio";
import { OrbitalValues } from "@/components/home/sections/section-concepts/orbital-values";
import { SacredManifesto } from "@/components/home/sections/section-concepts/sacred-manifesto";
import { GildedTestimony } from "@/components/home/sections/section-concepts/gilded-testimony";
import { NeonStackDiagram } from "@/components/home/sections/section-concepts/neon-stack-diagram";
import { RitualTimeline } from "@/components/home/sections/section-concepts/ritual-timeline";
import { CosmicContact } from "@/components/home/sections/section-concepts/cosmic-contact";
import { HieroglyphServices } from "@/components/home/sections/section-concepts/hieroglyph-services";
import { VoidProcess } from "@/components/home/sections/section-concepts/void-process";
import { AubergineCodex } from "@/components/home/sections/section-concepts/aubergine-codex";
import { EclipticAvailability } from "@/components/home/sections/section-concepts/ecliptic-availability";
import { SigilExpertise } from "@/components/home/sections/section-concepts/sigil-expertise";
import { MonolithStatement } from "@/components/home/sections/section-concepts/monolith-statement";
import { GlyphMetrics } from "@/components/home/sections/section-concepts/glyph-metrics";
import { TomeColophon } from "@/components/home/sections/section-concepts/tome-colophon";

/* ── Field Notes imports (Agent: Codex) ── */
import { ConstellationMapNotes } from "@/components/home/sections/field-notes-propositions/constellation-map-notes";
import { NeonLoungeNotes } from "@/components/home/sections/field-notes-propositions/neon-lounge-notes";
import { TopoContourNotes } from "@/components/home/sections/field-notes-propositions/topo-contour-notes";
import { SacredNeonNotes } from "@/components/home/sections/field-notes-propositions/sacred-neon-notes";
import { HexGridNotes } from "@/components/home/sections/field-notes-propositions/hex-grid-notes";
import { CircuitTraceNotes } from "@/components/home/sections/field-notes-propositions/circuit-trace-notes";

/* ═══════════════════════════════════════
   SECTION CONCEPT REGISTRY
   ═══════════════════════════════════════ */

const SECTION_REGISTRY: { id: string; label: string; component: (colorful: boolean) => React.ReactNode }[] = [
  { id: "constellation-bio", label: "Constellation Bio", component: (c) => <ConstellationBio colorful={c} /> },
  { id: "orbital-values", label: "Orbital Values", component: (c) => <OrbitalValues colorful={c} /> },
  { id: "sacred-manifesto", label: "Sacred Manifesto", component: (c) => <SacredManifesto colorful={c} /> },
  { id: "gilded-testimony", label: "Gilded Testimony", component: (c) => <GildedTestimony colorful={c} /> },
  { id: "neon-stack-diagram", label: "Neon Stack Diagram", component: (c) => <NeonStackDiagram colorful={c} /> },
  { id: "ritual-timeline", label: "Ritual Timeline", component: (c) => <RitualTimeline colorful={c} /> },
  { id: "cosmic-contact", label: "Cosmic Contact", component: (c) => <CosmicContact colorful={c} /> },
  { id: "hieroglyph-services", label: "Hieroglyph Services", component: (c) => <HieroglyphServices colorful={c} /> },
  { id: "void-process", label: "Void Process", component: (c) => <VoidProcess colorful={c} /> },
  { id: "aubergine-codex", label: "Aubergine Codex", component: (c) => <AubergineCodex colorful={c} /> },
  { id: "ecliptic-availability", label: "Ecliptic Availability", component: (c) => <EclipticAvailability colorful={c} /> },
  { id: "sigil-expertise", label: "Sigil Expertise", component: (c) => <SigilExpertise colorful={c} /> },
  { id: "monolith-statement", label: "Monolith Statement", component: (c) => <MonolithStatement colorful={c} /> },
  { id: "glyph-metrics", label: "Glyph Metrics", component: (c) => <GlyphMetrics colorful={c} /> },
  { id: "tome-colophon", label: "Tome Colophon", component: (c) => <TomeColophon colorful={c} /> },
];

/* ═══════════════════════════════════════
   FIELD NOTES VARIANT REGISTRY (Agent: Codex)
   ═══════════════════════════════════════ */

const BASE_DATA: Omit<FieldNotesSectionT, "variant" | "id"> = {
  type: "fieldNotes",
  titleLine: ["Field", "Notes"],
  intro: "A few things I keep coming back to when building products.",
  notes: [
    { eyebrow: "01", title: "Speed Is Felt", text: "Interfaces are judged before they are understood. Perceived responsiveness is part of the design, not a technical afterthought.", size: "tall" },
    { eyebrow: "02", title: "Clarity Wins", text: "If a feature needs a paragraph to justify itself, the UI probably still needs another pass.", size: "standard" },
    { eyebrow: "03", title: "Real Users Break Nice Systems", text: "The structure only proves itself when content is messy, priorities shift, and people use the product in ways nobody planned.", size: "wide" },
    { eyebrow: "04", title: "Leave Room", text: "Good systems are specific enough to guide the work and loose enough to survive iteration.", size: "standard" },
    { eyebrow: "05", title: "Polish Matters", text: "Tiny choices around spacing, motion, and copy tone often decide whether a product feels considered or generic.", size: "standard" },
  ],
  buttons: [
    { label: "About Me", href: "#about" },
    { label: "What I Value", href: "#values" },
  ],
};

type FieldNotesSectionPropsT = { data: FieldNotesSectionT; className?: string };

function FieldNotesSection({ data, className }: FieldNotesSectionPropsT) {
  switch (data.variant) {
    case "constellationMap": return <ConstellationMapNotes data={data} className={cn("", className)} />;
    case "neonLounge": return <NeonLoungeNotes data={data} className={cn("", className)} />;
    case "topoContour": return <TopoContourNotes data={data} className={cn("", className)} />;
    case "sacredNeon": return <SacredNeonNotes data={data} className={cn("", className)} />;
    case "hexGrid": return <HexGridNotes data={data} className={cn("", className)} />;
    case "circuitTrace": return <CircuitTraceNotes data={data} className={cn("", className)} />;
    default: return null;
  }
}

const VARIANT_REGISTRY: { key: FieldNotesVariantT; label: string }[] = [
  { key: "constellationMap", label: "Constellation Map" },
  { key: "neonLounge", label: "Neon Lounge" },
  { key: "topoContour", label: "Topo Contour" },
  { key: "sacredNeon", label: "Sacred Neon" },
  { key: "hexGrid", label: "Hex Grid" },
  { key: "circuitTrace", label: "Circuit Trace" },
];

const FIELD_NOTES_ITEMS = VARIANT_REGISTRY.map(({ key, label }) => ({
  id: key,
  label,
  component: <FieldNotesSection data={{ ...BASE_DATA, variant: key, id: `field-notes-${key}` }} className="py-12 md:py-20" />,
}));

/* ═══════════════════════════════════════
   PAGE
   ═══════════════════════════════════════ */

export default function SectionsTestPage() {
  const totalCount = SECTION_REGISTRY.length + FIELD_NOTES_ITEMS.length;

  return (
    <div className="min-h-screen bg-bgc text-white">
      <div className="fest-container py-16">
        <h1 className="font-mono text-40 md:text-64 uppercase text-white mb-4">
          All Sections
        </h1>
        <p className="text-20 text-lightgray mb-8">
          {totalCount} section experiments — content concepts with theme toggle + field notes variants.
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

      {/* ══════════════════════════════════════════════════
         FIELD NOTES VARIANTS (Agent: Codex)
         ══════════════════════════════════════════════════ */}
      <div className="fest-container border-t border-green-500/20 pt-12 mt-12">
        <h2 className="text-24 md:text-40 mb-2 font-mono text-green-500/60 uppercase">
          Field Notes Variants
        </h2>
        <p className="text-16 text-lightgray/50 mb-8">
          {FIELD_NOTES_ITEMS.length} layout variants rendered with the same data.
        </p>
      </div>

      <div className="flex flex-col gap-12">
        {FIELD_NOTES_ITEMS.map(({ id, label, component }, i) => (
          <section key={id} id={id}>
            <div className="fest-container">
              <div className="mb-4 flex items-center gap-3 border-b border-green-500/10 pb-3">
                <span className="text-14 font-mono tracking-widest text-green-500/50 uppercase">
                  {String(SECTION_REGISTRY.length + i + 1).padStart(2, "0")}
                </span>
                <span className="text-16 font-mono text-white/80 uppercase">{label}</span>
              </div>
            </div>
            {component}
          </section>
        ))}
      </div>
    </div>
  );
}
