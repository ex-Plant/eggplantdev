import { HeroConcept, SacredGeometryFrame } from "./shared";

export function CodexOrbitCathedral() {
  return (
    <HeroConcept
      eyebrow="Concept / 11"
      title={["Orbit", "Cathedral"]}
      text="The most committed eggplant-geometry hybrid so far: ritual symmetry, repeated bodies, and an architecture made from circles, axes, and orbit lines."
      className="bg-[radial-gradient(circle_at_50%_18%,rgba(247,199,68,0.08),transparent_12%),radial-gradient(circle_at_64%_34%,rgba(217,70,239,0.18),transparent_18%),radial-gradient(circle_at_32%_68%,rgba(59,130,246,0.05),transparent_14%),#050507]"
    >
        <div className="640:col-span-8 1280:col-span-10 col-span-full 1280:col-start-7 mt-12 min-h-[32rem] overflow-hidden rounded-[2rem] border border-white/10 xl:mt-0">
          <div className="relative grid h-full min-h-[32rem] place-items-center">
            <SacredGeometryFrame className="opacity-85" />
            <div className="absolute inset-x-[10%] top-[12%] h-px bg-linear-to-r from-transparent via-[#f7c744]/30 to-transparent" />
            <div className="absolute inset-x-[10%] bottom-[12%] h-px bg-linear-to-r from-transparent via-[#d946ef]/30 to-transparent" />
            <div className="absolute inset-y-[14%] left-[22%] w-px bg-linear-to-b from-transparent via-white/18 to-transparent" />
            <div className="absolute inset-y-[14%] right-[22%] w-px bg-linear-to-b from-transparent via-white/18 to-transparent" />
            <img src="/logos/eggplant-logo-smooth.apng" alt="Orbit cathedral center" className="hero-pulse relative z-10 h-44 w-44 rotate-[8deg] object-contain md:h-58 md:w-58" />
            <img src="/logos/eggplant-logo-smooth.apng" alt="Orbit cathedral upper left" className="hero-float absolute left-[26%] top-[22%] h-14 w-14 -rotate-[18deg] object-contain opacity-72 md:h-18 md:w-18" />
            <img src="/logos/eggplant-logo-smooth.apng" alt="Orbit cathedral upper right" className="hero-float absolute right-[26%] top-[22%] h-14 w-14 rotate-[18deg] object-contain opacity-72 md:h-18 md:w-18" />
            <img src="/logos/eggplant-logo-smooth.apng" alt="Orbit cathedral lower left" className="hero-drift-x absolute left-[22%] bottom-[18%] h-16 w-16 -rotate-[28deg] object-contain opacity-68 md:h-20 md:w-20" />
            <img src="/logos/eggplant-logo-smooth.apng" alt="Orbit cathedral lower right" className="hero-drift-x absolute right-[22%] bottom-[18%] h-16 w-16 rotate-[28deg] object-contain opacity-68 md:h-20 md:w-20" />
          </div>
        </div>
      </HeroConcept>
  );
}
