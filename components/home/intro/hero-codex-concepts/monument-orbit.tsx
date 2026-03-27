import { HeroConcept, SacredGeometryFrame } from "./shared";

export function CodexMonumentOrbit() {
  return (
    <HeroConcept
      eyebrow="Candidate / 00"
      title={["Monument", "Orbit"]}
      text="A more complete replacement candidate. Bigger object, clearer gravity, restrained color, and enough secondary bodies to make the scene feel authored rather than decorative."
      className="bg-[radial-gradient(circle_at_70%_30%,rgba(251,113,133,0.2),transparent_18%),radial-gradient(circle_at_82%_56%,rgba(192,132,252,0.14),transparent_18%),radial-gradient(circle_at_86%_20%,rgba(250,204,21,0.12),transparent_10%),radial-gradient(circle_at_58%_74%,rgba(249,115,22,0.1),transparent_18%),#070409]"
    >
        <div className="640:col-span-8 1280:col-span-10 col-span-full 1280:col-start-7 mt-12 min-h-[32rem] overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(0,0,0,0.12),rgba(0,0,0,0.35))] xl:mt-0">
          <div className="relative h-full min-h-[32rem]">
            <SacredGeometryFrame className="opacity-80" />
            <div className="hero-pulse absolute right-[16%] top-[16%] h-64 w-64 rounded-full border border-[#fb7185]/18 bg-[radial-gradient(circle,rgba(251,113,133,0.18),rgba(192,132,252,0.12)_36%,rgba(250,204,21,0.08)_52%,transparent_60%)] md:h-88 md:w-88" />
            <div className="absolute right-[22%] top-[10%] h-[24rem] w-[24rem] rounded-full border border-white/8 md:h-[32rem] md:w-[32rem]" />
            <div className="absolute right-[30%] top-[18%] h-[16rem] w-[16rem] rounded-full border border-[#f7c744]/14 md:h-[22rem] md:w-[22rem]" />
            <img
              src="/logos/eggplant-logo-smooth.apng"
              alt="Eggplant monument orbit candidate"
              className="hero-float absolute right-[16%] top-1/2 z-10 h-[15rem] w-[15rem] -translate-y-1/2 rotate-[16deg] object-contain md:h-[22rem] md:w-[22rem]"
            />
            <img
              src="/logos/eggplant-logo-smooth.apng"
              alt="Eggplant orbit companion left"
              className="hero-orbit absolute left-[18%] top-[20%] h-16 w-16 object-contain opacity-70 md:h-20 md:w-20"
            />
            <img
              src="/logos/eggplant-logo-smooth.apng"
              alt="Eggplant orbit companion bottom"
              className="hero-drift-x absolute left-[28%] bottom-[10%] h-18 w-18 object-contain opacity-65 md:h-24 md:w-24"
            />
            <div className="absolute left-[8%] bottom-[12%] max-w-[20rem] rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(28,16,34,0.9),rgba(8,7,9,0.9))] p-6">
              <p className="font-mono text-sm uppercase tracking-[0.18em] text-lightgray/70">Candidate / live replacement</p>
              <p className="pt-4 text-16 text-lightgray">
                This one is the most usable if you want to actually replace the current intro later. It keeps atmosphere but has a stronger object hierarchy immediately.
              </p>
            </div>
          </div>
        </div>
      </HeroConcept>
  );
}
