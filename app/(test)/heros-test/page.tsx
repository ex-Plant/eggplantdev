"use client";

import { ConceptShowcase, ShowcaseItem } from "@/components/test/concept-showcase";
import { MetatronsCube } from "@/components/home/heroes/metatrons-cube";
import { HeroGlamCosmicBillboard } from "@/components/home/heroes/glam-cosmic-billboard";
import { HeroEggplantsInSpace } from "@/components/home/heroes/eggplants-in-space";
import { HeroHexLatticeShrineGold } from "@/components/test/hero-concepts/hex-lattice-shrine/hero-hex-lattice-shrine-gold";
import { HeroCosmicCultFlyer } from "@/components/test/hero-concepts/cosmic-cult-flyer";
import { HeroSoleilAubergine } from "@/components/home/heroes/soleil-aubergine";

const HEROES = [
  { id: "soleil-aubergine", label: "Soleil Aubergine", component: <HeroSoleilAubergine /> },
  { id: "metatrons-cube", label: "Metatron's Cube", component: <MetatronsCube theme="gold" /> },
  { id: "eggplants-in-space", label: "EggplantsInSpace", component: <HeroEggplantsInSpace /> },
  { id: "hex-lattice-shrine-gold", label: "Hex Lattice Shrine Gold", component: <HeroHexLatticeShrineGold /> },
  { id: "cosmic-cult-flyer", label: "Cosmic Cult Flyer", component: <HeroCosmicCultFlyer /> },
  { id: "glam-cosmic-billboard", label: "Glam Cosmic Billboard", component: <HeroGlamCosmicBillboard /> },
];

export default function HerosTestPage() {
  return (
    <ConceptShowcase title="Hero Concepts" count={HEROES.length}>
      {HEROES.map(({ id, label, component }, i) => (
        <ShowcaseItem key={id} index={i} label={label}>
          {component}
        </ShowcaseItem>
      ))}
    </ConceptShowcase>
  );
}
