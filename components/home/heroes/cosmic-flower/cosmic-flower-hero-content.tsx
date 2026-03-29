import { HeroDescription } from "@/components/home/heroes/hero-description";
import { HeroEggplant } from "@/components/home/heroes/hero-eggplant";
import { HeroSubtitle } from "@/components/home/heroes/hero-subtitle";
import { HeroTitle } from "@/components/home/heroes/hero-title";
import { Button } from "@/components/ui/button";
import { COPY } from "./config";

export function CosmicFlowerHeroContent() {
  return (
    <div className="relative z-10 mx-auto flex w-full max-w-[26rem] flex-col items-center px-6 text-center md:max-w-none md:px-0">
      <HeroSubtitle>{COPY.subtitle}</HeroSubtitle>

      <HeroEggplant preset="warm-gold-glow" floatMode="orbital" />

      <HeroTitle
        line1={COPY.titleLine1}
        line2={COPY.titleLine2}
        line3={COPY.titleLine3}
      />

      <HeroDescription className="mt-8 md:mt-6">{COPY.description}</HeroDescription>

      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <Button variant="heroCosmicPrimary" size="hero">
          {COPY.buttons[0]}
        </Button>
        <Button variant="heroCosmicSecondary" size="hero">
          {COPY.buttons[1]}
        </Button>
      </div>
    </div>
  );
}
