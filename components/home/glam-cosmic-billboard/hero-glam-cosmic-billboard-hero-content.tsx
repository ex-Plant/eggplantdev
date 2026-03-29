import { HeroDescription } from "@/components/home/hero-description";
import { HeroEggplant } from "@/components/home/hero-eggplant";
import { HeroSubtitle } from "@/components/home/hero-subtitle";
import { Button } from "@/components/ui/button";
import { COPY } from "./config";

export function GlamTextAndImage() {
  return (
    <div className="fest-container relative z-10 grid justify-items-center gap-12 md:grid-cols-[1fr_auto] md:items-center md:justify-items-stretch">
      <div className="mx-auto w-full max-w-104 text-center md:max-w-none md:text-left">
        <HeroSubtitle className="text-hot-pink/40">{COPY.subtitle}</HeroSubtitle>
        <h1 className="text-gold-cream mt-4 text-center font-mono text-[3.25rem] leading-[0.9] font-bold uppercase sm:text-[4rem] md:text-left md:text-[6rem]">
          {COPY.titleLine1}
          <br />
          <span className="text-gold">{COPY.titleLine2}</span>
        </h1>
        <HeroDescription className="mt-10 px-0 text-left md:mt-8 md:mr-auto md:ml-0">
          {COPY.description}
        </HeroDescription>
        <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
          <Button variant="heroGlamPrimary" size="hero">
            {COPY.buttons[0]}
          </Button>
          <Button variant="heroGlamSecondary" size="hero">
            {COPY.buttons[1]}
          </Button>
        </div>
      </div>

      <div className="relative flex items-center justify-center">
        <HeroEggplant className="mt-0 mb-0 lg:mt-0 lg:mb-0" preset="glam-gold" glowPreset="gold-pink" />
      </div>
    </div>
  );
}
