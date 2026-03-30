/* Agent: Claude — Soleil Aubergine / Central Text + Eggplant Image */

import { HeroContentWrapper } from "@/components/home/heroes/hero-content-wrapper";
import { HeroDescription } from "@/components/home/heroes/hero-description";
import { HeroEggplant } from "@/components/home/heroes/hero-eggplant";
import { HeroSubtitle } from "@/components/home/heroes/hero-subtitle";
import { HeroTitle } from "@/components/home/heroes/hero-title";
import { COPY } from "./config";

export function SoleilHeroContent() {
  return (
    <HeroContentWrapper>
      <HeroSubtitle>{COPY.subtitle}</HeroSubtitle>

      <HeroEggplant preset="warm-gold-glow" floatMode="orbital" />

      <HeroTitle line1={COPY.titleLine1} line2={COPY.titleLine2} className={`mt-4 md:mt-8`} />
      <HeroDescription>{COPY.description}</HeroDescription>
    </HeroContentWrapper>
  );
}
