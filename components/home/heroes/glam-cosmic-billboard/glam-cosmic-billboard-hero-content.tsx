import { HeroDescription } from "@/components/home/heroes/hero-description";
import { HeroEggplant } from "@/components/home/heroes/hero-eggplant";
import { HeroSubtitle } from "@/components/home/heroes/hero-subtitle";
import { HeroTitle } from "@/components/home/heroes/hero-title";
import { Button } from "@/components/ui/button";
import { useLocalizedHeroCopy } from "@/hooks/use-localized-hero-copy";

export function GlamCosmicBillboardHeroContent() {
  const { subtitle, titleLine1, titleLine2, description, buttons } = useLocalizedHeroCopy("glamCosmicBillboard");
  return (
    <div className="fest-container relative z-10 grid justify-items-center md:grid-cols-[1fr_auto] md:items-center md:justify-items-stretch">
      <div className="mx-auto w-full max-w-104 text-center md:max-w-none md:text-left">
        <HeroSubtitle className="text-hot-pink/40 text-left">{subtitle}</HeroSubtitle>
        <HeroTitle line1={titleLine1} line2={titleLine2} className="mt-4 text-left" />
        <HeroDescription className="mt-12 px-0 text-left md:mt-12 md:mr-auto md:ml-0">{description}</HeroDescription>
        {buttons && (
          <div className="mt-8 flex flex-wrap justify-start gap-4 md:justify-start">
            <Button variant="heroHotPinkPrimary" size="hero">
              {buttons[0]}
            </Button>
            <Button variant="heroHotPinkSecondary" size="hero">
              {buttons[1]}
            </Button>
          </div>
        )}
      </div>

      <div className="relative mt-8 flex items-center justify-center">
        <HeroEggplant className="mt-0 mb-0 lg:mt-0 lg:mb-0" preset="glam-gold" glowPreset="gold" />
      </div>
    </div>
  );
}
