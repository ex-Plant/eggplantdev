import { EggplantImage } from "@/components/general/eggplant-image";
import { HeroDescription } from "@/components/home/hero-description";
import { HeroSubtitle } from "@/components/home/hero-subtitle";
import { COPY } from "./config";

export function GlamTextAndImage() {
  return (
    <div className="fest-container relative z-10 grid gap-12 md:grid-cols-[1fr_auto] md:items-center">
      <div>
        <HeroSubtitle className="text-hot-pink/40">{COPY.subtitle}</HeroSubtitle>
        <h1
          className="text-gold-cream mt-4 text-[4rem] leading-[0.9] font-bold uppercase md:text-[6rem]"
          style={{ fontFamily: "monospace" }}
        >
          {COPY.titleLine1}
          <br />
          <span className="text-gold">{COPY.titleLine2}</span>
        </h1>
        <HeroDescription className="mt-6">{COPY.description}</HeroDescription>
        <div className="mt-8 flex gap-4">
          <span className="bg-gold/10 border-gold/25 text-gold/70 rounded-full border px-6 py-2.5 font-mono text-sm tracking-wider uppercase">
            {COPY.buttons[0]}
          </span>
          <span className="border-hot-pink/20 text-hot-pink/50 rounded-full border px-6 py-2.5 font-mono text-sm tracking-wider uppercase">
            {COPY.buttons[1]}
          </span>
        </div>
      </div>

      <div className="relative flex items-center justify-center">
        <EggplantImage sizeClass="h-56 w-56" preset="glam-gold" glowPreset="gold-pink" />
      </div>
    </div>
  );
}
