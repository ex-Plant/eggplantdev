/* Agent: Claude — Eggplants in Space / Central Text + Eggplant Image */

import { EggplantImage } from "@/components/general/eggplant-image";
import { HeroDescription } from "@/components/home/hero-description";
import { HeroSubtitle } from "@/components/home/hero-subtitle";
import { HeroTitle } from "@/components/home/hero-title";
import { COPY } from "./config";

export function EggplantsInSpaceHeroContent() {
  return (
    <div className="relative z-10 flex flex-col items-center text-center">
      <div className="relative">
        <EggplantImage sizeClass="h-48 w-48" preset="golden-metallic" floatMode="tumble" glowPreset="gold" />
        {/* Halo rings — gold */}
        <div className="border-gold/15 absolute -inset-8 rounded-full border" />
        <div className="border-gold/8 absolute -inset-16 rounded-full border" />
        <div className="border-gold-dark/6 absolute -inset-24 rounded-full border border-dashed" />
      </div>

      <HeroSubtitle className="mt-12">{COPY.subtitle}</HeroSubtitle>
      <HeroTitle line1={COPY.titleLine1} line2={COPY.titleLine2} className="mt-4 pt-1 tracking-tight" />
      <HeroDescription className="mt-4">{COPY.description}</HeroDescription>
    </div>
  );
}
