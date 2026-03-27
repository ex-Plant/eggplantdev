import { HeroConcept } from "./shared";

export function CodexBlisterConstellation() {
  return (
    <HeroConcept
      eyebrow="Concept / 30"
      title={["Blister", "Constellation"]}
      text="The toy-package version. Multiple smaller orbs and compartments make the scene feel like a collectible supernova kit for dangerous space produce."
      className="bg-[radial-gradient(circle_at_16%_18%,rgba(251,113,133,0.22),transparent_18%),radial-gradient(circle_at_46%_14%,rgba(250,204,21,0.18),transparent_16%),radial-gradient(circle_at_82%_18%,rgba(249,115,22,0.2),transparent_18%),radial-gradient(circle_at_66%_78%,rgba(192,132,252,0.22),transparent_22%),#09040b]"
    >
        <div className="640:col-span-8 1280:col-span-10 col-span-full 1280:col-start-7 mt-12 min-h-[32rem] overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(24,10,18,0.9),rgba(10,8,12,0.96))] xl:mt-0">
          <div className="relative grid min-h-[32rem] gap-4 p-6 md:grid-cols-[1.08fr_0.92fr] md:p-8">
            <div className="relative overflow-hidden rounded-[1.9rem] border border-white/10 bg-[linear-gradient(180deg,rgba(32,12,24,0.7),rgba(11,8,13,0.95))]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(255,255,255,0.08),transparent_58%)]" />
              <div className="absolute left-[8%] top-[12%] h-20 w-20 rounded-[1.5rem] border border-white/10 bg-white/6 backdrop-blur-[2px]" />
              <div className="absolute right-[8%] top-[16%] h-16 w-16 rounded-full border border-[#facc15]/16 bg-[#facc15]/8" />
              <div className="absolute left-[12%] bottom-[14%] h-18 w-18 rounded-full border border-[#fb7185]/16 bg-[#fb7185]/8" />
              <div className="absolute right-[16%] bottom-[12%] h-24 w-24 rounded-[1.8rem] border border-[#c084fc]/16 bg-[#c084fc]/8" />
              <div className="absolute left-1/2 top-1/2 h-[18rem] w-[18rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/14 bg-[radial-gradient(circle,rgba(250,204,21,0.16),rgba(251,113,133,0.14)_34%,rgba(192,132,252,0.12)_62%,transparent_74%)]" />
              <img src="/logos/eggplant-logo-smooth.apng" alt="Blister constellation centerpiece" className="hero-float absolute left-1/2 top-1/2 z-10 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rotate-[12deg] object-contain md:h-60 md:w-60" />
            </div>
            <div className="flex flex-col justify-between rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(31,12,24,0.88),rgba(10,8,12,0.95))] p-6">
              <div>
                <p className="font-mono text-sm uppercase tracking-[0.18em] text-lightgray/62">Format / collectible burst</p>
                <p className="pt-4 text-16 text-lightgray">This is the packaged-object interpretation of the same palette. More compartments, more fetishized framing, more fake-product absurdity.</p>
              </div>
              <div className="grid gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-lightgray/56">
                <span>Edition / unstable deluxe</span>
                <span>Handling / admire only</span>
                <span>Hazard / fabulous</span>
              </div>
            </div>
          </div>
        </div>
      </HeroConcept>
  );
}
