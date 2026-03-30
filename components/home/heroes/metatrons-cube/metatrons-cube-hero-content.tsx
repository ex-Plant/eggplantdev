import { HeroContentWrapper } from "@/components/home/heroes/hero-content-wrapper";
import { HeroDescription } from "@/components/home/heroes/hero-description";
import { HeroEggplant } from "@/components/home/heroes/hero-eggplant";
import { HeroSubtitle } from "@/components/home/heroes/hero-subtitle";
import { HeroTitle } from "@/components/home/heroes/hero-title";
import { COPY, EGGPLANT_PRESETS, type ThemeT } from "./config";

export function MetatronsHeroContent({ theme }: { theme: ThemeT }) {
  return (
    <HeroContentWrapper>
      <HeroSubtitle>{COPY.subtitle}</HeroSubtitle>

      <HeroEggplant preset={EGGPLANT_PRESETS[theme]} floatMode="jelly" />

      <HeroTitle className={`mt-4 md:mt-8`} line1={COPY.titleLine1} line2={COPY.titleLine2} />

      <HeroDescription>{COPY.description}</HeroDescription>
    </HeroContentWrapper>
  );
}
