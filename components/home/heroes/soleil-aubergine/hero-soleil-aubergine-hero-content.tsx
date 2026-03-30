/* Agent: Claude — Soleil Aubergine / Central Text + Eggplant Image */

import { HeroContentWrapper } from "@/components/home/heroes/hero-content-wrapper";
import { HeroDescription } from "@/components/home/heroes/hero-description";
import { HeroEggplant } from "@/components/home/heroes/hero-eggplant";
import { HeroSubtitle } from "@/components/home/heroes/hero-subtitle";
import { HeroTitle } from "@/components/home/heroes/hero-title";
import { COPY } from "./config";

export function SoleilHeroContent() {
  return (
    <HeroContentWrapper
      above={
        <>
          <HeroSubtitle>{COPY.subtitle}</HeroSubtitle>
          <HeroEggplant floatMode="orbital" />
        </>
      }
    >
      <HeroTitle line1={COPY.titleLine1} line2={COPY.titleLine2} />
      <HeroDescription>{COPY.description}</HeroDescription>
    </HeroContentWrapper>
  );
}
