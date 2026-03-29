/* Agent: Claude — Soleil Aubergine / Central Text + Eggplant Image */

import { HeroDescription } from "@/components/home/hero-description";
import { HeroEggplant } from "@/components/home/hero-eggplant";
import { HeroSubtitle } from "@/components/home/hero-subtitle";
import { HeroTitle } from "@/components/home/hero-title";
import { COPY } from "./config";

export function SoleilHeroContent() {
  return (
    <div className="relative z-10 mx-auto flex w-full max-w-[26rem] flex-col items-center px-6 text-center md:max-w-none md:px-0">
      <HeroSubtitle>{COPY.subtitle}</HeroSubtitle>

      <HeroEggplant preset="warm-gold-glow" floatMode="orbital" />

      <HeroTitle
        line1={COPY.titleLine1}
        line2={COPY.titleLine2}
      />
      <HeroDescription>{COPY.description}</HeroDescription>
    </div>
  );
}
