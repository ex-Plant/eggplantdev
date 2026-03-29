import { EggplantImage } from "@/components/general/eggplant-image";
import { HeroSubtitle } from "@/components/home/hero-subtitle";
import { HeroTitle } from "@/components/home/hero-title";
import { HeroDescription } from "@/components/home/hero-description";
import { COPY } from "./config";

export function CosmicFlowerHeroContent() {
  return (
    <div className="relative z-10 flex flex-col items-center text-center">
      <HeroSubtitle>{COPY.subtitle}</HeroSubtitle>

      <EggplantImage preset="warm-gold-glow" sizeClass="h-48 w-48 mb-8" glowPreset="gold" />

      <HeroTitle
        line1={COPY.titleLine1}
        line2={COPY.titleLine2}
        line3={COPY.titleLine3}
        className="pt-1 tracking-tight"
      />

      <HeroDescription className="mt-6">{COPY.description}</HeroDescription>

      <div className="mt-10 flex gap-4">
        <span className="rounded-full border border-gold/30 px-5 py-2.5 font-mono text-sm tracking-wider text-gold/60 uppercase">
          {COPY.buttons[0]}
        </span>
        <span className="rounded-full border border-gold-cream/30 px-5 py-2.5 font-mono text-sm tracking-wider text-gold-cream/60 uppercase">
          {COPY.buttons[1]}
        </span>
      </div>
    </div>
  );
}
