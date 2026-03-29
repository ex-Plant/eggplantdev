"use client";

import { MetatronsCubeCore } from "@/components/home/intro/hero-concepts/metatrons-cube/hero-metatrons-cube";
import { HeroGlamCosmicBillboard } from "@/components/home/intro/hero-concepts/glam-cosmic-billboard";
import { HeroEggplantsInSpace } from "@/components/home/intro/hero-concepts/eggplants-in-space";
import { HeroHexLatticeShrineGold } from "@/components/home/intro/hero-concepts/hex-lattice-shrine/hero-hex-lattice-shrine-gold";
import { HeroCosmicCultFlyer } from "@/components/home/intro/hero-concepts/cosmic-cult-flyer";
import { HeroSoleilAubergine } from "@/components/home/intro/hero-concepts/soleil-aubergine";

const HEROES = [
  { id: "metatrons-cube", label: "Metatron's Cube", component: <MetatronsCubeCore theme="gold" /> },
  { id: "glam-cosmic-billboard", label: "Glam Cosmic Billboard", component: <HeroGlamCosmicBillboard /> },
  { id: "eggplants-in-space", label: "EggplantsInSpace", component: <HeroEggplantsInSpace /> },
  { id: "hex-lattice-shrine-gold", label: "Hex Lattice Shrine Gold", component: <HeroHexLatticeShrineGold /> },
  { id: "cosmic-cult-flyer", label: "Cosmic Cult Flyer", component: <HeroCosmicCultFlyer /> },
  { id: "soleil-aubergine", label: "Soleil Aubergine", component: <HeroSoleilAubergine variant="muted" /> },
];

export default function HerosTestPage() {
  return (
    <div className="bg-bgc text-white">
      <div className="fest-container py-16">
        <h1 className="text-40 md:text-64 mb-4 font-mono text-white uppercase">Hero Concepts</h1>
        <p className="text-20 text-lightgray mb-8">{HEROES.length} hero experiments.</p>
      </div>

      <div className="flex flex-col">
        {HEROES.map(({ id, label, component }, i) => (
          <section key={id} id={id} className="pb-12">
            <div className="fest-container">
              <div className="mb-4 flex items-center gap-3 border-b border-white/10 pb-3">
                <span className="text-14 font-mono tracking-widest text-fuchsia-500 uppercase">
                  {String(i + 1).padStart(2, "0")}
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
