"use client";

import { ConceptShowcase, ShowcaseItem } from "@/components/test/concept-showcase";
import { MetatronsCubeCore } from "@/components/home/intro/hero-concepts/metatrons-cube/hero-metatrons-cube";
import { HeroGlamCosmicBillboard } from "@/components/home/intro/hero-concepts/glam-cosmic-billboard";
import { HeroEggplantsInSpace } from "@/components/home/intro/hero-concepts/eggplants-in-space";
import { HeroHexLatticeShrineGold } from "@/components/home/intro/hero-concepts/hex-lattice-shrine/hero-hex-lattice-shrine-gold";
import { HeroCosmicCultFlyer } from "@/components/home/intro/hero-concepts/cosmic-cult-flyer";
import { HeroSoleilAubergine } from "@/components/home/intro/hero-concepts/soleil-aubergine";

const HEROES = [
  { id: "soleil-aubergine", label: "Soleil Aubergine", component: <HeroSoleilAubergine variant="muted" /> },
  { id: "metatrons-cube", label: "Metatron's Cube", component: <MetatronsCubeCore theme="gold" /> },
  { id: "eggplants-in-space", label: "EggplantsInSpace", component: <HeroEggplantsInSpace /> },
  { id: "hex-lattice-shrine-gold", label: "Hex Lattice Shrine Gold", component: <HeroHexLatticeShrineGold /> },
  { id: "cosmic-cult-flyer", label: "Cosmic Cult Flyer", component: <HeroCosmicCultFlyer /> },
  { id: "glam-cosmic-billboard", label: "Glam Cosmic Billboard", component: <HeroGlamCosmicBillboard /> },
];

export default function HerosTestPage() {
  return (
    <ConceptShowcase title="Hero Concepts" count={HEROES.length} subtitle={`${HEROES.length} hero experiments.`}>
      {HEROES.map(({ id, label, component }, i) => (
        <ShowcaseItem key={id} index={i} label={label}>
          {component}
        </ShowcaseItem>
      ))}
    </ConceptShowcase>
  );
}
