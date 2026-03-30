import { HeroContentWrapper } from "@/components/home/heroes/hero-content-wrapper";
import { HeroDescription } from "@/components/home/heroes/hero-description";
import { HeroEggplant } from "@/components/home/heroes/hero-eggplant";
import { HeroSubtitle } from "@/components/home/heroes/hero-subtitle";
import { HeroTitle } from "@/components/home/heroes/hero-title";
import { Button } from "@/components/ui/button";
import { COPY } from "./config";

export function CosmicFlowerHeroContent() {
  return (
    <HeroContentWrapper
      above={
        <>
          <HeroSubtitle>{COPY.subtitle}</HeroSubtitle>
          <HeroEggplant preset="warm-gold-glow" floatMode="orbital" />
        </>
      }
    >
      <HeroTitle line1={COPY.titleLine1} line2={COPY.titleLine2} />
      <HeroDescription>{COPY.description}</HeroDescription>
      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <Button variant="heroHotPinkPrimary" size="hero">
          {COPY.buttons[0]}
        </Button>
        <Button variant="heroHotPinkSecondary" size="hero">
          {COPY.buttons[1]}
        </Button>
      </div>
    </HeroContentWrapper>
  );
}
