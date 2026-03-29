import { HeroConcept, SacredGeometryFrame } from "./shared";

export function CodexSunriseConstellation() {
  return (
    <HeroConcept
      eyebrow="Candidate / 01"
      title={["Sunrise", "Constellation"]}
      text="The merged serious option: warmth and horizon-light from Aubergine Sunrise, symbolic mapping and repeated bodies from Sacred Constellation."
      className="bg-[radial-gradient(circle_at_72%_26%,rgba(250,204,21,0.18),transparent_12%),radial-gradient(circle_at_64%_42%,rgba(251,113,133,0.18),transparent_18%),radial-gradient(circle_at_26%_72%,rgba(192,132,252,0.12),transparent_14%),radial-gradient(circle_at_84%_72%,rgba(249,115,22,0.1),transparent_16%),#070409]"
    >
        <div className="640:col-span-8 1280:col-span-10 col-span-full 1280:col-start-7 mt-12 min-h-[32rem] overflow-hidden rounded-[2rem] border border-white/10 xl:mt-0">
          <div className="relative h-full min-h-[32rem]">
            <SacredGeometryFrame className="opacity-85" />
            <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 1000 700" preserveAspectRatio="none">
              <path d="M180 520 L500 180 L820 520 Z" fill="none" stroke="rgba(247,199,68,0.18)" strokeWidth="1.5" />
              <path d="M500 120 L500 580" fill="none" stroke="rgba(255,255,255,0.16)" strokeWidth="1.5" strokeDasharray="8 10" />
              <path d="M240 520 Q500 360 760 520" fill="none" stroke="rgba(251,113,133,0.16)" strokeWidth="1.5" />
            </svg>
            <div className="absolute right-[12%] top-[16%] h-56 w-56 rounded-full border border-[#facc15]/18 bg-[radial-gradient(circle,rgba(250,204,21,0.14),rgba(251,113,133,0.12)_34%,rgba(192,132,252,0.08)_48%,transparent_58%)] md:h-80 md:w-80" />
            <img src="/logos/eggplant-logo-smooth.apng" alt="Sunrise constellation center" className="hero-pulse absolute right-[18%] top-[22%] z-10 h-40 w-40 rotate-[14deg] object-contain md:h-54 md:w-54" />
            <img src="/logos/eggplant-logo-smooth.apng" alt="Sunrise constellation north" className="hero-float absolute left-1/2 top-[16%] h-16 w-16 -translate-x-1/2 object-contain opacity-78 md:h-20 md:w-20" />
            <img src="/logos/eggplant-logo-smooth.apng" alt="Sunrise constellation west" className="hero-drift-x absolute left-[18%] bottom-[18%] h-16 w-16 object-contain opacity-72 md:h-20 md:w-20" />
            <img src="/logos/eggplant-logo-smooth.apng" alt="Sunrise constellation east" className="hero-drift-x absolute right-[22%] bottom-[20%] h-16 w-16 object-contain opacity-72 md:h-20 md:w-20" />
            <div className="absolute left-[8%] bottom-[14%] max-w-[22rem] rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(34,16,34,0.9),rgba(8,7,9,0.9))] p-6">
              <p className="font-mono text-sm uppercase tracking-[0.18em] text-lightgray/70">Candidate / merged direction</p>
              <p className="pt-4 text-16 text-lightgray">
                Keeps the warmer emotional tone, but makes the whole scene feel intentional through a clear symbolic geometry instead of only a single hero object.
              </p>
            </div>
          </div>
        </div>
      </HeroConcept>
  );
}
