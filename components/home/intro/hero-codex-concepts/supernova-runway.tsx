import { HeroConcept } from "./shared";

export function CodexSupernovaRunway() {
  return (
    <HeroConcept
      eyebrow="Concept / 28"
      title={["Supernova", "Runway"]}
      text="A long, glossy cosmic runway with the eggplant posed like a ridiculous luxury artifact at the end of the universe."
      className="bg-[radial-gradient(circle_at_14%_18%,rgba(251,113,133,0.22),transparent_18%),radial-gradient(circle_at_46%_14%,rgba(250,204,21,0.2),transparent_16%),radial-gradient(circle_at_82%_18%,rgba(249,115,22,0.2),transparent_18%),radial-gradient(circle_at_66%_78%,rgba(192,132,252,0.22),transparent_22%),#0a040b]"
    >
        <div className="640:col-span-8 1280:col-span-10 col-span-full 1280:col-start-7 mt-12 min-h-[32rem] overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(26,10,18,0.9),rgba(10,8,12,0.96))] xl:mt-0">
          <div className="relative min-h-[32rem] overflow-hidden">
            <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 1100 560" preserveAspectRatio="none">
              <path d="M220 520 L460 170" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1.2" />
              <path d="M880 520 L640 170" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1.2" />
              <path d="M330 520 L505 170" fill="none" stroke="rgba(251,113,133,0.12)" strokeWidth="1.2" />
              <path d="M770 520 L595 170" fill="none" stroke="rgba(192,132,252,0.12)" strokeWidth="1.2" />
              <path d="M460 170 H640" fill="none" stroke="rgba(250,204,21,0.14)" strokeWidth="1.2" />
            </svg>
            <div className="absolute left-1/2 top-[38%] h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(250,204,21,0.18),rgba(251,113,133,0.16)_34%,rgba(192,132,252,0.12)_62%,transparent_74%)]" />
            <img src="/logos/eggplant-logo-smooth.apng" alt="Supernova runway centerpiece" className="hero-float absolute left-1/2 top-[38%] z-10 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rotate-[14deg] object-contain md:h-60 md:w-60" />
            <div className="absolute inset-x-[14%] bottom-[16%] h-px bg-linear-to-r from-transparent via-white/16 to-transparent" />
            <div className="absolute left-[8%] top-[10%] max-w-[20rem] rounded-[1.55rem] border border-white/10 bg-[linear-gradient(180deg,rgba(31,12,22,0.88),rgba(10,8,12,0.95))] p-5">
              <p className="font-mono text-sm uppercase tracking-[0.18em] text-lightgray/62">Scene / celestial catwalk</p>
              <p className="pt-4 text-16 text-lightgray">Same supernova palette, but more editorial and stage-like. It feels posed instead of exploded.</p>
            </div>
          </div>
        </div>
      </HeroConcept>
  );
}
