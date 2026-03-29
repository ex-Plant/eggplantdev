import { HeroDescription } from "@/components/home/hero-description";
import { HeroEggplant } from "@/components/home/hero-eggplant";
import { HeroSubtitle } from "@/components/home/hero-subtitle";
import { HeroTitle } from "@/components/home/hero-title";
import { COPY, EGGPLANT_PRESETS, type ThemeT } from "./config";

export function MetatronsHeroContent({ theme }: { theme: ThemeT }) {
  return (
    <div className="relative z-10 mx-auto flex w-full max-w-[26rem] flex-col items-center px-6 text-center md:max-w-none md:px-0">
      <HeroSubtitle>{COPY.subtitle}</HeroSubtitle>

      <HeroEggplant preset={EGGPLANT_PRESETS[theme]} floatMode="jelly" />

      <HeroTitle line1={COPY.titleLine1} line2={COPY.titleLine2} />

      <HeroDescription>{COPY.description}</HeroDescription>
    </div>
  );
}
