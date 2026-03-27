import { cn } from "@/helpers/cn";
import { HeroConcept } from "./shared";

export function CodexCosmicGreenhouse() {
  return (
    <HeroConcept
      eyebrow="Concept / 15"
      title={["Cosmic", "Greenhouse"]}
      text="The oddest one in a softer way: a greenhouse promenade drifting through space, where eggplants grow like sacred planets under a geometric dome."
      className="bg-[radial-gradient(circle_at_18%_18%,rgba(16,255,170,0.14),transparent_16%),radial-gradient(circle_at_84%_20%,rgba(247,199,68,0.12),transparent_16%),radial-gradient(circle_at_60%_74%,rgba(132,26,76,0.18),transparent_22%),#040607]"
    >
        <div className="640:col-span-8 1280:col-span-10 col-span-full 1280:col-start-7 mt-12 min-h-[32rem] overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(5,9,9,0.84),rgba(6,7,8,0.96))] xl:mt-0">
          <div className="relative min-h-[32rem] overflow-hidden">
            <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 1100 520" preserveAspectRatio="none">
              <path d="M110 410 Q550 40 990 410" fill="none" stroke="rgba(16,255,170,0.16)" strokeWidth="1.4" />
              <path d="M180 410 Q550 96 920 410" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1.1" />
              <path d="M250 410 Q550 150 850 410" fill="none" stroke="rgba(247,199,68,0.12)" strokeWidth="1.1" />
              <path d="M110 410 L990 410" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
              {Array.from({ length: 7 }, (_, i) => {
                const x = 220 + i * 110;
                return <line key={x} x1={x} y1="410" x2="550" y2="78" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />;
              })}
            </svg>
            <div className="absolute inset-x-[8%] bottom-[18%] h-px bg-linear-to-r from-transparent via-white/16 to-transparent" />
            <div className="absolute inset-x-[12%] bottom-[12%] flex items-end justify-between">
              {[
                "h-16 w-16 rotate-[-12deg]",
                "h-20 w-20 rotate-[6deg]",
                "h-24 w-24 rotate-[-8deg]",
                "h-32 w-32 rotate-[10deg]",
                "h-22 w-22 rotate-[-6deg]",
                "h-18 w-18 rotate-[12deg]",
              ].map((size, index) => (
                <img
                  key={size}
                  src="/logos/eggplant-logo-smooth.apng"
                  alt={`Cosmic greenhouse fruit ${index + 1}`}
                  className={cn("hero-float object-contain opacity-75", size)}
                />
              ))}
            </div>
            <div className="absolute left-[8%] top-[10%] max-w-[22rem] rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(10,15,14,0.92),rgba(8,8,10,0.94))] p-6">
              <p className="font-mono text-sm uppercase tracking-[0.18em] text-[#10ffaa]/60">Habitat / orbital conservatory</p>
              <p className="pt-4 text-16 text-lightgray">
                This is the more poetic route. Still surreal, still cosmic, but instead of pure ritual it becomes a space garden built from arches, symmetry, and strange agricultural devotion.
              </p>
            </div>
            <div className="absolute right-[10%] top-[14%] h-28 w-28 rounded-full border border-[#f7c744]/16 bg-[radial-gradient(circle,rgba(247,199,68,0.16),transparent_62%)]" />
          </div>
        </div>
      </HeroConcept>
  );
}
