import { HeroConcept, SacredGeometryFrame } from "./shared";

export function CodexMonumentOrbitWarmAubergine() {
  return (
    <HeroConcept
      eyebrow="Palette / A"
      title={["Monument Orbit", "Warm Aubergine"]}
      text="Same monument-orbit structure, but pushed toward wine, plum, and warm amber. Blue is present only as a faint edge note."
      className="bg-[radial-gradient(circle_at_70%_30%,rgba(132,26,76,0.24),transparent_18%),radial-gradient(circle_at_82%_56%,rgba(217,70,239,0.12),transparent_18%),radial-gradient(circle_at_86%_20%,rgba(247,199,68,0.12),transparent_10%),#050507]"
    >
        <div className="640:col-span-8 1280:col-span-10 col-span-full 1280:col-start-7 mt-12 min-h-[30rem] overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(0,0,0,0.12),rgba(0,0,0,0.35))] xl:mt-0">
          <div className="relative h-full min-h-[30rem]">
            <SacredGeometryFrame className="opacity-78" />
            <div className="hero-pulse absolute right-[16%] top-[16%] h-64 w-64 rounded-full border border-[#f7c744]/16 bg-[radial-gradient(circle,rgba(132,26,76,0.22),rgba(217,70,239,0.12)_34%,rgba(247,199,68,0.08)_48%,transparent_60%)] md:h-80 md:w-80" />
            <img src="/logos/eggplant-logo-smooth.apng" alt="Monument orbit warm aubergine" className="hero-float absolute right-[18%] top-1/2 z-10 h-[14rem] w-[14rem] -translate-y-1/2 rotate-[16deg] object-contain md:h-[20rem] md:w-[20rem]" />
            <img src="/logos/eggplant-logo-smooth.apng" alt="Monument orbit warm aubergine companion" className="hero-orbit absolute left-[18%] top-[22%] h-16 w-16 object-contain opacity-70 md:h-20 md:w-20" />
          </div>
        </div>
      </HeroConcept>
  );
}
