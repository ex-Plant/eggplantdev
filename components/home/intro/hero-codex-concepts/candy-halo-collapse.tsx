import { HeroConcept } from "./shared";

export function CodexCandyHaloCollapse() {
  return (
    <HeroConcept
      eyebrow="Concept / 22"
      title={["Candy", "Halo Collapse"]}
      text="Same maximal pop energy as Candy Supernova, but pulled into a giant concentric halo system, like the eggplant triggered a glamorous cosmic alarm."
      className="bg-[radial-gradient(circle_at_18%_20%,rgba(251,113,133,0.24),transparent_18%),radial-gradient(circle_at_48%_14%,rgba(250,204,21,0.22),transparent_18%),radial-gradient(circle_at_82%_22%,rgba(249,115,22,0.22),transparent_18%),radial-gradient(circle_at_68%_78%,rgba(192,132,252,0.22),transparent_22%),#09050b]"
    >
        <div className="640:col-span-8 1280:col-span-10 col-span-full 1280:col-start-7 mt-12 min-h-[33rem] overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(24,10,18,0.9),rgba(10,8,13,0.96))] xl:mt-0">
          <div className="relative grid min-h-[33rem] place-items-center overflow-hidden">
            <div className="absolute h-[30rem] w-[30rem] rounded-full border border-[#fb7185]/16" />
            <div className="absolute h-[24rem] w-[24rem] rounded-full border border-[#facc15]/18" />
            <div className="absolute h-[18rem] w-[18rem] rounded-full border border-[#f97316]/18" />
            <div className="absolute h-[12rem] w-[12rem] rounded-full border border-[#c084fc]/18" />
            <div className="absolute h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,rgba(250,204,21,0.18),rgba(251,113,133,0.16)_28%,rgba(249,115,22,0.14)_48%,rgba(192,132,252,0.12)_62%,transparent_74%)]" />
            <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 1000 760" preserveAspectRatio="none">
              <path d="M120 380 H880" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1.1" />
              <path d="M500 80 V680" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1.1" />
              <path d="M220 160 L780 600" fill="none" stroke="rgba(251,113,133,0.1)" strokeWidth="1.1" />
              <path d="M780 160 L220 600" fill="none" stroke="rgba(192,132,252,0.1)" strokeWidth="1.1" />
            </svg>
            <img src="/logos/eggplant-logo-smooth.apng" alt="Candy halo collapse centerpiece" className="hero-pulse relative z-10 h-52 w-52 rotate-[12deg] object-contain md:h-64 md:w-64" />
            <div className="absolute bottom-8 left-1/2 w-[min(92%,32rem)] -translate-x-1/2 rounded-[1.65rem] border border-white/10 bg-[linear-gradient(180deg,rgba(30,12,22,0.88),rgba(10,8,12,0.95))] p-6 text-center">
              <p className="font-mono text-sm uppercase tracking-[0.18em] text-lightgray/62">Event / pop detonation halo</p>
              <p className="pt-4 text-16 text-lightgray">This keeps the same sugary violence of Candy Supernova, but organizes it into circles and axes so it still feels designed, not random.</p>
            </div>
          </div>
        </div>
      </HeroConcept>
  );
}
