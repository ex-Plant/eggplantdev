import { HeroConcept, SacredGeometryFrame } from "./shared";

export function CodexSacredConstellation() {
  return (
    <HeroConcept
      eyebrow="Concept / 10"
      title={["Sacred", "Constellation"]}
      text="Pushes the geometry into a genuine symbolic map. Less object-in-space, more diagram that has somehow become devotional."
      className="bg-[radial-gradient(circle_at_50%_26%,rgba(217,70,239,0.16),transparent_16%),radial-gradient(circle_at_78%_66%,rgba(247,199,68,0.1),transparent_14%),radial-gradient(circle_at_24%_72%,rgba(59,130,246,0.06),transparent_14%),#050507]"
    >
        <div className="640:col-span-8 1280:col-span-10 col-span-full 1280:col-start-7 mt-12 min-h-[30rem] overflow-hidden rounded-[2rem] border border-white/10 xl:mt-0">
          <div className="relative h-full min-h-[30rem]">
            <SacredGeometryFrame className="opacity-90" />
            <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 1000 700" preserveAspectRatio="none">
              <path d="M180 520 L500 140 L820 520 Z" fill="none" stroke="rgba(255,255,255,0.14)" strokeWidth="1.5" />
              <path d="M180 240 L500 560 L820 240 Z" fill="none" stroke="rgba(217,70,239,0.16)" strokeWidth="1.5" />
              <path d="M500 120 L500 580" fill="none" stroke="rgba(247,199,68,0.18)" strokeWidth="1.5" strokeDasharray="8 10" />
            </svg>
            <img src="/logos/eggplant-logo-smooth.apng" alt="Sacred constellation core" className="hero-pulse absolute left-1/2 top-1/2 z-10 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rotate-[10deg] object-contain md:h-52 md:w-52" />
            <img src="/logos/eggplant-logo-smooth.apng" alt="Sacred constellation north" className="hero-float absolute left-1/2 top-[14%] h-16 w-16 -translate-x-1/2 object-contain opacity-78 md:h-20 md:w-20" />
            <img src="/logos/eggplant-logo-smooth.apng" alt="Sacred constellation west" className="hero-drift-x absolute left-[18%] bottom-[18%] h-16 w-16 object-contain opacity-72 md:h-20 md:w-20" />
            <img src="/logos/eggplant-logo-smooth.apng" alt="Sacred constellation east" className="hero-drift-x absolute right-[18%] bottom-[18%] h-16 w-16 object-contain opacity-72 md:h-20 md:w-20" />
          </div>
        </div>
      </HeroConcept>
  );
}
