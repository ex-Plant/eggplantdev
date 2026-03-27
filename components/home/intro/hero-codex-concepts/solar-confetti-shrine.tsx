import { cn } from "@/helpers/cn";
import { HeroConcept } from "./shared";

export function CodexSolarConfettiShrine() {
  return (
    <HeroConcept
      eyebrow="Concept / 31"
      title={["Solar", "Confetti Shrine"]}
      text="A playful version where the supernova palette becomes floating chips, dots, and celebratory fragments around a central shrine object."
      className="bg-[radial-gradient(circle_at_18%_18%,rgba(251,113,133,0.22),transparent_18%),radial-gradient(circle_at_46%_14%,rgba(250,204,21,0.2),transparent_16%),radial-gradient(circle_at_82%_18%,rgba(249,115,22,0.2),transparent_18%),radial-gradient(circle_at_66%_78%,rgba(192,132,252,0.22),transparent_22%),#09050b]"
    >
        <div className="640:col-span-8 1280:col-span-10 col-span-full 1280:col-start-7 mt-12 min-h-[32rem] overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(24,10,18,0.9),rgba(10,8,12,0.96))] xl:mt-0">
          <div className="relative grid min-h-[32rem] place-items-center overflow-hidden">
            <div className="absolute h-[22rem] w-[22rem] rounded-full bg-[radial-gradient(circle,rgba(250,204,21,0.18),rgba(251,113,133,0.14)_34%,rgba(192,132,252,0.12)_62%,transparent_74%)]" />
            <img src="/logos/eggplant-logo-smooth.apng" alt="Solar confetti shrine centerpiece" className="hero-pulse relative z-10 h-50 w-50 rotate-[12deg] object-contain md:h-62 md:w-62" />
            {[
              "left-[14%] top-[18%] bg-[#fb7185]/80",
              "left-[24%] top-[62%] bg-[#facc15]/80",
              "right-[16%] top-[20%] bg-[#c084fc]/80",
              "right-[22%] bottom-[18%] bg-[#f97316]/80",
              "left-[48%] top-[12%] bg-white/80",
              "left-[70%] top-[48%] bg-[#fb7185]/70",
              "left-[34%] bottom-[18%] bg-[#fde68a]/80",
            ].map((chip, index) => (
              <div key={chip} className={cn("absolute h-4 w-4 rotate-[18deg] rounded-[0.25rem]", chip, index % 2 === 0 ? "hero-float" : "hero-drift-x")} />
            ))}
            <div className="absolute bottom-8 left-1/2 w-[min(92%,32rem)] -translate-x-1/2 rounded-[1.55rem] border border-white/10 bg-[linear-gradient(180deg,rgba(30,12,22,0.88),rgba(10,8,12,0.95))] p-6 text-center">
              <p className="font-mono text-sm uppercase tracking-[0.18em] text-lightgray/62">Mood / celebratory worship</p>
              <p className="pt-4 text-16 text-lightgray">Still in the supernova palette, but lighter and more playful. Less explosion, more glittering devotional festival.</p>
            </div>
          </div>
        </div>
      </HeroConcept>
  );
}
