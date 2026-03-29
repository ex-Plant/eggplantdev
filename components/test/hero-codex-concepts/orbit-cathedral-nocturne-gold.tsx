import { HeroConcept, SacredGeometryFrame } from "./shared";

export function CodexOrbitCathedralNocturneGold() {
  return (
    <HeroConcept
      eyebrow="Palette / C"
      title={["Orbit Cathedral", "Nocturne Gold"]}
      text="Same cathedral logic, but nearly all color is stripped back into black, old gold, and a faint bruised-plum undertone."
      className="bg-[radial-gradient(circle_at_50%_18%,rgba(247,199,68,0.1),transparent_12%),radial-gradient(circle_at_64%_34%,rgba(132,26,76,0.14),transparent_18%),#040405]"
    >
        <div className="640:col-span-8 1280:col-span-10 col-span-full 1280:col-start-7 mt-12 min-h-[30rem] overflow-hidden rounded-[2rem] border border-white/10 xl:mt-0">
          <div className="relative grid h-full min-h-[30rem] place-items-center">
            <SacredGeometryFrame className="opacity-75" />
            <div className="absolute inset-x-[10%] top-[12%] h-px bg-linear-to-r from-transparent via-[#f7c744]/26 to-transparent" />
            <div className="absolute inset-x-[10%] bottom-[12%] h-px bg-linear-to-r from-transparent via-white/16 to-transparent" />
            <img src="/logos/eggplant-logo-smooth.apng" alt="Orbit cathedral nocturne gold" className="hero-pulse relative z-10 h-44 w-44 rotate-[8deg] object-contain md:h-56 md:w-56" />
            <img src="/logos/eggplant-logo-smooth.apng" alt="Orbit cathedral nocturne gold upper left" className="hero-float absolute left-[26%] top-[22%] h-14 w-14 -rotate-[18deg] object-contain opacity-68 md:h-18 md:w-18" />
            <img src="/logos/eggplant-logo-smooth.apng" alt="Orbit cathedral nocturne gold upper right" className="hero-float absolute right-[26%] top-[22%] h-14 w-14 rotate-[18deg] object-contain opacity-68 md:h-18 md:w-18" />
          </div>
        </div>
      </HeroConcept>
  );
}
