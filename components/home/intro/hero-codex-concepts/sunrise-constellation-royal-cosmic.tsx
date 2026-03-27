import { HeroConcept, SacredGeometryFrame } from "./shared";

export function CodexSunriseConstellationRoyalCosmic() {
  return (
    <HeroConcept
      eyebrow="Palette / B"
      title={["Sunrise Constellation", "Royal Cosmic"]}
      text="Same symbolic sunrise layout, but with a cleaner royal-cosmic split: aubergine core, magenta geometry, and a toned blue edge light."
      className="bg-[radial-gradient(circle_at_72%_26%,rgba(250,204,21,0.14),transparent_12%),radial-gradient(circle_at_64%_42%,rgba(251,113,133,0.22),transparent_18%),radial-gradient(circle_at_26%_72%,rgba(192,132,252,0.14),transparent_14%),radial-gradient(circle_at_84%_64%,rgba(249,115,22,0.1),transparent_16%),#070409]"
    >
        <div className="640:col-span-8 1280:col-span-10 col-span-full 1280:col-start-7 mt-12 min-h-[30rem] overflow-hidden rounded-[2rem] border border-white/10 xl:mt-0">
          <div className="relative h-full min-h-[30rem]">
            <SacredGeometryFrame className="opacity-90" />
            <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 1000 700" preserveAspectRatio="none">
              <path d="M180 520 L500 180 L820 520 Z" fill="none" stroke="rgba(250,204,21,0.15)" strokeWidth="1.5" />
              <path d="M500 120 L500 580" fill="none" stroke="rgba(255,255,255,0.14)" strokeWidth="1.5" strokeDasharray="8 10" />
              <path d="M240 520 Q500 360 760 520" fill="none" stroke="rgba(192,132,252,0.14)" strokeWidth="1.5" />
            </svg>
            <div className="absolute right-[12%] top-[16%] h-56 w-56 rounded-full border border-[#c084fc]/16 bg-[radial-gradient(circle,rgba(251,113,133,0.18),rgba(192,132,252,0.12)_42%,rgba(250,204,21,0.06)_56%,transparent_58%)] md:h-76 md:w-76" />
            <img src="/logos/eggplant-logo-smooth.apng" alt="Sunrise constellation royal cosmic" className="hero-pulse absolute right-[18%] top-[22%] z-10 h-40 w-40 rotate-[14deg] object-contain md:h-52 md:w-52" />
          </div>
        </div>
      </HeroConcept>
  );
}
