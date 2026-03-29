import { HeroConcept } from "./shared";

export function CodexMegaCandyCathedral() {
  return (
    <HeroConcept
      eyebrow="Concept / 32"
      title={["Mega", "Candy Cathedral"]}
      text="The most overbuilt finale: giant layered geometry, repeated color halos, satellites, and a full candy-cathedral scene around the central eggplant."
      className="bg-[radial-gradient(circle_at_18%_18%,rgba(251,113,133,0.24),transparent_18%),radial-gradient(circle_at_46%_14%,rgba(250,204,21,0.22),transparent_16%),radial-gradient(circle_at_82%_18%,rgba(249,115,22,0.22),transparent_18%),radial-gradient(circle_at_66%_78%,rgba(192,132,252,0.24),transparent_22%),#0a040b]"
    >
        <div className="640:col-span-8 1280:col-span-10 col-span-full 1280:col-start-7 mt-12 min-h-[35rem] overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(27,10,20,0.92),rgba(10,8,12,0.96))] xl:mt-0">
          <div className="relative grid min-h-[35rem] place-items-center overflow-hidden">
            <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 1000 800" preserveAspectRatio="none">
              <circle cx="500" cy="400" r="248" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1.2" />
              <circle cx="500" cy="400" r="188" fill="none" stroke="rgba(251,113,133,0.14)" strokeWidth="1.2" />
              <circle cx="500" cy="400" r="126" fill="none" stroke="rgba(250,204,21,0.14)" strokeWidth="1.2" strokeDasharray="8 12" />
              <polygon points="500,114 758,572 242,572" fill="none" stroke="rgba(192,132,252,0.14)" strokeWidth="1.3" />
              <polygon points="500,686 758,228 242,228" fill="none" stroke="rgba(249,115,22,0.12)" strokeWidth="1.3" />
              <path d="M260 400 H740" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1.1" />
              <path d="M500 148 V652" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1.1" />
            </svg>
            <div className="absolute h-[27rem] w-[27rem] rounded-full bg-[radial-gradient(circle,rgba(250,204,21,0.18),rgba(251,113,133,0.16)_28%,rgba(249,115,22,0.14)_46%,rgba(192,132,252,0.14)_62%,transparent_76%)]" />
            <img src="/logos/eggplant-logo-smooth.apng" alt="Mega candy cathedral centerpiece" className="hero-pulse relative z-10 h-54 w-54 rotate-[12deg] object-contain md:h-68 md:w-68" />
            <img src="/logos/eggplant-logo-smooth.apng" alt="Mega candy cathedral north" className="hero-float absolute left-1/2 top-[10%] h-18 w-18 -translate-x-1/2 object-contain opacity-78 md:h-22 md:w-22" />
            <img src="/logos/eggplant-logo-smooth.apng" alt="Mega candy cathedral west" className="hero-float absolute left-[18%] bottom-[18%] h-18 w-18 object-contain opacity-74 md:h-22 md:w-22" />
            <img src="/logos/eggplant-logo-smooth.apng" alt="Mega candy cathedral east" className="hero-float absolute right-[18%] bottom-[18%] h-18 w-18 object-contain opacity-74 md:h-22 md:w-22" />
            <div className="absolute bottom-8 right-8 max-w-[21rem] rounded-[1.55rem] border border-white/10 bg-[linear-gradient(180deg,rgba(31,12,24,0.88),rgba(10,8,12,0.95))] p-5">
              <p className="font-mono text-sm uppercase tracking-[0.18em] text-lightgray/62">Finale / maximal sanctuary</p>
              <p className="pt-4 text-16 text-lightgray">This is the end-state of the whole candy-supernova logic: theatrical, symmetrical, glossy, and fully committed to the bit.</p>
            </div>
          </div>
        </div>
      </HeroConcept>
  );
}
