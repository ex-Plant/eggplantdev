import { cn } from "../../../../helpers/cn";
import { HeroConcept } from "./shared";

export function CodexEclipseChoir() {
  return (
    <HeroConcept
      eyebrow="Concept / 13"
      title={["Eclipse", "Choir"]}
      text="A full ritual scene: seven smaller eggplants orbit a central eclipse like a cosmic choir. It should feel grand, strange, and slightly unhinged."
      className="bg-[radial-gradient(circle_at_50%_20%,rgba(16,255,170,0.12),transparent_16%),radial-gradient(circle_at_50%_48%,rgba(217,70,239,0.18),transparent_26%),radial-gradient(circle_at_82%_68%,rgba(247,199,68,0.08),transparent_18%),#030305]"
    >
      <div className="640:col-span-8 1280:col-span-10 1280:col-start-7 col-span-full mt-12 min-h-[34rem] overflow-hidden rounded-[2rem] border border-white/10 xl:mt-0">
        <div className="relative grid min-h-[34rem] place-items-center">
          <svg
            className="pointer-events-none absolute inset-0 h-full w-full"
            viewBox="0 0 1000 760"
            preserveAspectRatio="none"
          >
            <circle cx="500" cy="380" r="210" fill="none" stroke="rgba(255,255,255,0.09)" strokeWidth="1.2" />
            <circle
              cx="500"
              cy="380"
              r="268"
              fill="none"
              stroke="rgba(16,255,170,0.12)"
              strokeWidth="1.2"
              strokeDasharray="7 12"
            />
            <circle cx="500" cy="380" r="324" fill="none" stroke="rgba(217,70,239,0.1)" strokeWidth="1" />
            <polygon points="500,112 760,584 240,584" fill="none" stroke="rgba(247,199,68,0.12)" strokeWidth="1.2" />
            <polygon points="500,650 760,176 240,176" fill="none" stroke="rgba(16,255,170,0.1)" strokeWidth="1.2" />
            {Array.from({ length: 7 }, (_, i) => {
              const angle = -Math.PI / 2 + (Math.PI * 2 * i) / 7;
              const x = 500 + 262 * Math.cos(angle);
              const y = 380 + 262 * Math.sin(angle);
              return (
                <circle key={i} cx={x} cy={y} r="28" fill="none" stroke="rgba(255,255,255,0.09)" strokeWidth="1" />
              );
            })}
          </svg>
          <div className="absolute h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(247,199,68,0.12),rgba(217,70,239,0.08)_34%,transparent_66%)] blur-sm" />
          <div className="absolute h-44 w-44 rounded-full border border-[#f7c744]/16 bg-black/80 shadow-[0_0_60px_rgba(0,0,0,0.75)]" />
          <img
            src="/logos/eggplant-logo-smooth.apng"
            alt="Eclipse choir central eggplant"
            className="hero-pulse relative z-10 h-44 w-44 rotate-[10deg] object-contain md:h-56 md:w-56"
          />
          {[
            "top-[10%] left-1/2 -translate-x-1/2",
            "right-[18%] top-[22%]",
            "right-[12%] bottom-[24%]",
            "left-1/2 bottom-[8%] -translate-x-1/2",
            "left-[12%] bottom-[24%]",
            "left-[18%] top-[22%]",
            "left-[50%] top-[18%] translate-x-[11rem] md:translate-x-[14rem]",
          ].map((pos, index) => (
            <img
              key={pos}
              src="/logos/eggplant-logo-smooth.apng"
              alt={`Eclipse choir satellite ${index + 1}`}
              className={cn("hero-float absolute h-14 w-14 object-contain opacity-72 md:h-18 md:w-18", pos)}
            />
          ))}
          <div className="absolute bottom-8 left-1/2 w-[min(90%,30rem)] -translate-x-1/2 rounded-[1.5rem] border border-white/10 bg-[linear-gradient(180deg,rgba(12,14,18,0.9),rgba(7,7,9,0.95))] p-5 text-center md:bottom-10">
            <p className="text-lightgray/62 font-mono text-sm tracking-[0.18em] uppercase">Ritual / orbital recital</p>
            <p className="text-16 text-lightgray pt-4">
              This one turns the hero into a full event rather than a single logo pose. More myth. More theater. More
              “why are there seven of them?”
            </p>
          </div>
        </div>
      </div>
    </HeroConcept>
  );
}
