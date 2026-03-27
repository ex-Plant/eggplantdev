import { cn } from "@/helpers/cn";
import { HeroConcept } from "./shared";

export function CodexSugarCometParade() {
  return (
    <HeroConcept
      eyebrow="Concept / 23"
      title={["Sugar", "Comet Parade"]}
      text="Instead of one central blast, this becomes a diagonal parade of pop-colored eggplants crossing the screen like a tacky sacred comet procession."
      className="bg-[radial-gradient(circle_at_16%_18%,rgba(251,113,133,0.22),transparent_18%),radial-gradient(circle_at_44%_14%,rgba(250,204,21,0.2),transparent_16%),radial-gradient(circle_at_82%_24%,rgba(249,115,22,0.2),transparent_18%),radial-gradient(circle_at_60%_76%,rgba(192,132,252,0.2),transparent_22%),#0a050b]"
    >
        <div className="640:col-span-8 1280:col-span-10 col-span-full 1280:col-start-7 mt-12 min-h-[32rem] overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(20,9,17,0.92),rgba(10,8,12,0.96))] xl:mt-0">
          <div className="relative min-h-[32rem] overflow-hidden">
            <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 1100 560" preserveAspectRatio="none">
              <path d="M80 430 L1020 120" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1.2" />
              <path d="M140 480 L1080 170" fill="none" stroke="rgba(251,113,133,0.14)" strokeWidth="1.2" />
              <path d="M40 380 L980 70" fill="none" stroke="rgba(250,204,21,0.12)" strokeWidth="1.1" />
            </svg>
            {[
              "left-[8%] top-[58%] h-24 w-24 rotate-[-18deg]",
              "left-[24%] top-[44%] h-32 w-32 rotate-[10deg]",
              "left-[44%] top-[30%] h-44 w-44 rotate-[16deg]",
              "left-[68%] top-[18%] h-28 w-28 rotate-[28deg]",
              "right-[8%] top-[10%] h-20 w-20 rotate-[34deg]",
            ].map((pos, index) => (
              <div key={pos} className={cn("absolute", pos)}>
                <div className="absolute inset-[-18%] rounded-full bg-[radial-gradient(circle,rgba(250,204,21,0.16),rgba(251,113,133,0.14)_42%,transparent_72%)]" />
                <img
                  src="/logos/eggplant-logo-smooth.apng"
                  alt={`Sugar comet parade body ${index + 1}`}
                  className="hero-float relative z-10 h-full w-full object-contain"
                />
              </div>
            ))}
            <div className="absolute left-[8%] bottom-[10%] max-w-[21rem] rounded-[1.7rem] border border-white/10 bg-[linear-gradient(180deg,rgba(29,11,21,0.9),rgba(11,8,12,0.95))] p-6">
              <p className="font-mono text-sm uppercase tracking-[0.18em] text-lightgray/62">Trajectory / glam procession</p>
              <p className="pt-4 text-16 text-lightgray">This takes the Candy Supernova palette but breaks the symmetry. More movement, more procession, more loud celestial nonsense.</p>
            </div>
          </div>
        </div>
      </HeroConcept>
  );
}
