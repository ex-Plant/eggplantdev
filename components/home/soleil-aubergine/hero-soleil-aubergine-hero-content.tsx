/* Agent: Claude — Soleil Aubergine / Central Text + Eggplant Image */

import { EggplantImage } from "@/components/general/eggplant-image";
import { HeroDescription } from "@/components/home/hero-description";
import { HeroSubtitle } from "@/components/home/hero-subtitle";
import { HeroTitle } from "@/components/home/hero-title";
import { COPY } from "./config";

export function SoleilHeroContent() {
  return (
    <div className="relative z-10 flex flex-col items-center gap-6 text-center">
      <EggplantImage
        floatMode="tumble"
        preset="warm-gold-glow"
        glowPreset="gold"
      />

      <HeroSubtitle>{COPY.subtitle}</HeroSubtitle>
      <HeroTitle
        line1={COPY.titleLine1}
        line2={COPY.titleLine2}
        className="pt-1 tracking-tight"
      />
      <HeroDescription>{COPY.description}</HeroDescription>
    </div>
  );
}
