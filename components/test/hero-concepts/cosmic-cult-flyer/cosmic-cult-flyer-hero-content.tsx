import { HeroDescription } from "@/components/home/heroes/hero-description";
import { HeroEggplant } from "@/components/home/heroes/hero-eggplant";
import { HeroSubtitle } from "@/components/home/heroes/hero-subtitle";
import { HeroTitle } from "@/components/home/heroes/hero-title";
import { Button } from "@/components/ui/button";
import { COPY } from "./config";

export function CosmicCultFlyerHeroContent() {
  return (
    <div className="relative z-10 mx-auto flex w-full max-w-[26rem] flex-col items-center px-6 text-center md:max-w-none md:px-0">
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

      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button variant="heroGlamPrimary" size="hero" className="py-2">
          {COPY.buttonPrimary}
        </Button>
        <Button variant="heroGlamSecondary" size="hero" className="border-gold-dark/20 py-2 text-gold-dark/40">
          {COPY.buttonSecondary}
        </Button>
      </div>
    </div>
  );
}
