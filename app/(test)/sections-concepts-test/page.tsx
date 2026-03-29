"use client";

import { ConceptShowcase, ShowcaseItem } from "@/components/test/concept-showcase";
import { MetallicTextTest } from "@/components/home/sections/section-concepts/metallic-text-test";

const SECTIONS = [
  { id: "metallic-text-test", label: "Metallic Text Test", component: <MetallicTextTest colorful /> },
];

export default function SectionsTestPage() {
  return (
    <ConceptShowcase title="All Sections" count={SECTIONS.length} accent="gold">
      {SECTIONS.map(({ id, label, component }, i) => (
        <ShowcaseItem key={id} index={i} label={label} accent="gold">
          {component}
        </ShowcaseItem>
      ))}
    </ConceptShowcase>
  );
}
