import { EggplantImage } from "@/components/general/eggplant-image";
import { HeroDescription } from "@/components/home/hero-description";
import { HeroSubtitle } from "@/components/home/hero-subtitle";
import { HeroTitle } from "@/components/home/hero-title";
import { COPY, EGGPLANT_PRESETS, type ThemeT } from "./config";

export function MetatronsHeroContent({ theme }: { theme: ThemeT }) {
  return (
    <div className="relative z-10 flex flex-col items-center text-center">
      <HeroSubtitle className="mb-3">{COPY.subtitle}</HeroSubtitle>

      <EggplantImage preset={EGGPLANT_PRESETS[theme]} sizeClass="h-48 w-48 mb-8" glowPreset="gold" />

      <HeroTitle line1={COPY.titleLine1} line2={COPY.titleLine2} className="pt-1 tracking-tight" />

      <HeroDescription className="mt-6">{COPY.description}</HeroDescription>
    </div>
  );
}
