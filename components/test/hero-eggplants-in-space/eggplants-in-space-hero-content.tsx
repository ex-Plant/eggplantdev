/* Agent: Claude — Eggplants in Space / Central Text + Eggplant Image */

import { HeroContentWrapper } from "@/components/home/heroes/hero-content-wrapper";
import { HeroDescription } from "@/components/home/heroes/hero-description";
import { HeroEggplant } from "@/components/home/heroes/hero-eggplant";
import { HeroSubtitle } from "@/components/home/heroes/hero-subtitle";
import { HeroTitle } from "@/components/home/heroes/hero-title";
import { COPY } from "./config";

export function EggplantsInSpaceHeroContent() {
  return (
    <HeroContentWrapper>
      <HeroSubtitle>{COPY.subtitle}</HeroSubtitle>

      <HeroEggplant preset="warm-gold-glow" floatMode="tumble">
        {/* Halo rings — gold */}
        <div className="border-gold/15 absolute -inset-8 rounded-full border" />
        <div className="border-gold/8 absolute -inset-16 rounded-full border" />
        <div className="border-gold-dark/6 absolute -inset-24 rounded-full border border-dashed" />
      </HeroEggplant>

      <HeroTitle line1={COPY.titleLine1} line2={COPY.titleLine2} />
      <HeroDescription>{COPY.description}</HeroDescription>
    </HeroContentWrapper>
  );
}
