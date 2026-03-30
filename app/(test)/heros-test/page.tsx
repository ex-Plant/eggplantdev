"use client";

import { ConceptShowcase, ShowcaseItem } from "@/components/test/concept-showcase";
import { MetatronsCube } from "@/components/home/heroes/metatrons-cube/metatrons-cube";
import { GlamCosmicBillboard } from "@/components/home/heroes/glam-cosmic-billboard/glam-cosmic-billboard";
import { HexLatticeShrineGold } from "@/components/home/heroes/hex-lattice-shrine/hex-lattice-shrine-gold";
import { CosmicCultFlyer } from "@/components/home/heroes/cosmic-cult-flyer/cosmic-cult-flyer";
import { EggplantSun } from "@/components/home/heroes/eggplant-sun/eggplant-sun";
import { CosmicFlower } from "@/components/home/heroes/cosmic-flower/cosmic-flower";
import { CosmicCartography } from "@/components/home/heroes/cosmic-cartography/cosmic-cartography";
import { GridOfLife } from "@/components/home/heroes/grid-of-life/grid-of-life";

const HEROES = [
  { id: "eggplant-sun", label: "Eggplant Sun", component: <EggplantSun /> },
  { id: "metatrons-cube", label: "Metatron's Cube", component: <MetatronsCube theme="gold" /> },
  { id: "hex-lattice-shrine-gold", label: "Hex Lattice Shrine Gold", component: <HexLatticeShrineGold /> },
  { id: "cosmic-cult-flyer", label: "Cosmic Cult Flyer", component: <CosmicCultFlyer /> },
  { id: "glam-cosmic-billboard", label: "Glam Cosmic Billboard", component: <GlamCosmicBillboard /> },
  { id: "cosmic-flower", label: "Cosmic Flower", component: <CosmicFlower /> },
  { id: "cosmic-cartography", label: "Cosmic Cartography", component: <CosmicCartography /> },
  { id: "grid-of-life", label: "Grid of Life", component: <GridOfLife /> },
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
