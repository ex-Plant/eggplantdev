import { HeroDescription } from "@/components/home/hero-description";
import { HeroEggplant } from "@/components/home/hero-eggplant";
import { HeroSubtitle } from "@/components/home/hero-subtitle";
import { HeroTitle } from "@/components/home/hero-title";
import { COPY } from "./config";

export function CosmicCultFlyerHeroContent() {
  return (
    <div className="relative z-10 flex flex-col items-center text-center">
      <HeroSubtitle>{COPY.subtitle}</HeroSubtitle>

      <HeroEggplant preset="warm-gold-glow" floatMode="tumble" />

      <HeroTitle
        line1={COPY.titleLine1}
        line2={COPY.titleLine2}
        line3={COPY.titleLine3}
        classLine1="text-gold-cream"
        classLine2="text-gold-cream"
        classLine3="text-gold"
      />

      <HeroDescription>{COPY.description}</HeroDescription>

      <div className="mt-8 flex gap-3">
        <span className="rounded-full border border-gold/25 px-5 py-2 font-mono text-sm uppercase text-gold/50">
          {COPY.buttonPrimary}
        </span>
        <span className="rounded-full border border-gold-dark/20 px-5 py-2 font-mono text-sm uppercase text-gold-dark/40">
          {COPY.buttonSecondary}
        </span>
      </div>
    </div>
  );
}
