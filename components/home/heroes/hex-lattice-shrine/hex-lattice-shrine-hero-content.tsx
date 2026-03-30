import { HeroContentWrapper } from "@/components/home/heroes/hero-content-wrapper";
import { HeroDescription } from "@/components/home/heroes/hero-description";
import { HeroEggplant } from "@/components/home/heroes/hero-eggplant";
import { HeroSubtitle } from "@/components/home/heroes/hero-subtitle";
import { HeroTitle } from "@/components/home/heroes/hero-title";
import { COPY } from "./config";

export function HexLatticeHeroContent() {
  return (
    <HeroContentWrapper>
      <HeroSubtitle>{COPY.eyebrow}</HeroSubtitle>

      <HeroEggplant preset="warm-gold-sepia" floatMode="jelly" />

      <HeroTitle line1={COPY.titleLine1} line2={COPY.titleLine2} />
      <HeroDescription>{COPY.description}</HeroDescription>
    </HeroContentWrapper>
  );
}
