import { HeroDescription } from "@/components/home/hero-description";
import { HeroEggplant } from "@/components/home/hero-eggplant";
import { HeroSubtitle } from "@/components/home/hero-subtitle";
import { HeroTitle } from "@/components/home/hero-title";
import { COPY } from "./config";

export function CosmicFlowerHeroContent() {
  return (
    <div className="relative z-10 flex flex-col items-center text-center">
      <HeroSubtitle>{COPY.subtitle}</HeroSubtitle>

      <HeroEggplant preset="warm-gold-glow" floatMode="orbital" />

      <HeroTitle
        line1={COPY.titleLine1}
        line2={COPY.titleLine2}
        line3={COPY.titleLine3}
      />

      <HeroDescription>{COPY.description}</HeroDescription>

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
