import { cn } from "@/helpers/cn";
import { HeroConcept } from "./shared";

export function CodexCandySupernova() {
  return (
    <HeroConcept
      eyebrow="Concept / 18"
      title={["Candy", "Supernova"]}
      text="The least restrained version: bubblegum pinks, citrus oranges, acid yellow, and a central blast like the eggplant just became a pop star sun."
      className="bg-[radial-gradient(circle_at_18%_18%,rgba(251,113,133,0.26),transparent_18%),radial-gradient(circle_at_48%_14%,rgba(250,204,21,0.22),transparent_18%),radial-gradient(circle_at_82%_26%,rgba(249,115,22,0.22),transparent_18%),radial-gradient(circle_at_60%_78%,rgba(192,132,252,0.22),transparent_22%),#08050a]"
    >
        <div className="640:col-span-8 1280:col-span-10 col-span-full 1280:col-start-7 mt-12 min-h-[33rem] overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(20,8,16,0.9),rgba(9,7,12,0.96))] xl:mt-0">
          <div className="relative grid min-h-[33rem] place-items-center overflow-hidden">
            <div className="absolute h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,rgba(250,204,21,0.22),rgba(251,113,133,0.2)_26%,rgba(249,115,22,0.16)_44%,rgba(192,132,252,0.14)_58%,transparent_72%)]" />
            <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 1000 760" preserveAspectRatio="none">
              {Array.from({ length: 16 }, (_, i) => {
                const angle = (Math.PI * 2 * i) / 16;
                const x2 = 500 + 360 * Math.cos(angle);
                const y2 = 380 + 360 * Math.sin(angle);
                return <line key={i} x1="500" y1="380" x2={x2} y2={y2} stroke="rgba(255,255,255,0.08)" strokeWidth="1.2" />;
              })}
              <circle cx="500" cy="380" r="184" fill="none" stroke="rgba(250,204,21,0.16)" strokeWidth="1.4" />
              <circle cx="500" cy="380" r="246" fill="none" stroke="rgba(251,113,133,0.14)" strokeWidth="1.2" strokeDasharray="10 14" />
            </svg>
            <img src="/logos/eggplant-logo-smooth.apng" alt="Candy supernova core" className="hero-pulse relative z-10 h-52 w-52 rotate-[14deg] object-contain md:h-64 md:w-64" />
            {[
              "left-[14%] top-[18%]",
              "right-[16%] top-[20%]",
              "left-[18%] bottom-[18%]",
              "right-[14%] bottom-[16%]",
            ].map((pos, index) => (
              <div key={pos} className={cn("absolute rounded-full border border-white/10 bg-white/6", pos, index % 2 === 0 ? "h-20 w-20" : "h-16 w-16")} />
            ))}
            <div className="absolute bottom-8 left-1/2 w-[min(92%,34rem)] -translate-x-1/2 rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(29,12,23,0.88),rgba(10,8,12,0.94))] p-6 text-center">
              <p className="font-mono text-sm uppercase tracking-[0.18em] text-lightgray/62">Event / glamorous detonation</p>
              <p className="pt-4 text-16 text-lightgray">This one should feel almost offensively alive. If you want “more colors” with zero apology, this is the benchmark.</p>
            </div>
          </div>
        </div>
      </HeroConcept>
  );
}
