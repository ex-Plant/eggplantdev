import { HeroContentWrapper } from "@/components/home/heroes/hero-content-wrapper";
import { HeroDescription } from "@/components/home/heroes/hero-description";
import { HeroEggplant } from "@/components/home/heroes/hero-eggplant";
import { HeroSubtitle } from "@/components/home/heroes/hero-subtitle";
import { HeroTitle } from "@/components/home/heroes/hero-title";
import { useLocalizedHeroCopy } from "@/hooks/use-localized-hero-copy";

export function EggplantsInSpaceHeroContent() {
  const { subtitle, titleLine1, titleLine2, description } = useLocalizedHeroCopy("eggplantsInSpace");
  return (
    <HeroContentWrapper>
      <HeroSubtitle>{subtitle}</HeroSubtitle>

      <HeroEggplant preset="warm-gold-glow" floatMode="tumble">
        {/* Halo rings — gold */}
        <div className="border-gold/15 absolute -inset-8 rounded-full border" />
        <div className="border-gold/8 absolute -inset-16 rounded-full border" />
        <div className="border-gold-dark/6 absolute -inset-24 rounded-full border border-dashed" />
      </HeroEggplant>

      <HeroTitle line1={titleLine1} line2={titleLine2} />
      <HeroDescription>{description}</HeroDescription>
    </HeroContentWrapper>
  );
}
