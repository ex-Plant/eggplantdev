import { HeroConcept } from "./shared";

export function CodexNeonRiftGarden() {
  return (
    <HeroConcept
      eyebrow="Concept / 20"
      title={["Neon", "Rift Garden"]}
      text="A strange space garden opened by a geometric rift. More living color, more cyan-green vapor, more magenta cracks across the void."
      className="bg-[radial-gradient(circle_at_20%_22%,rgba(16,255,170,0.2),transparent_18%),radial-gradient(circle_at_50%_14%,rgba(59,130,246,0.14),transparent_16%),radial-gradient(circle_at_80%_18%,rgba(217,70,239,0.22),transparent_18%),radial-gradient(circle_at_62%_76%,rgba(57,255,20,0.12),transparent_20%),#020408]"
    >
        <div className="640:col-span-8 1280:col-span-10 col-span-full 1280:col-start-7 mt-12 min-h-[33rem] overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(4,10,10,0.9),rgba(5,5,9,0.96))] xl:mt-0">
          <div className="relative min-h-[33rem] overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_24%,rgba(16,255,170,0.12),transparent_26%),radial-gradient(circle_at_72%_24%,rgba(217,70,239,0.14),transparent_28%),radial-gradient(circle_at_56%_70%,rgba(59,130,246,0.1),transparent_30%)]" />
            <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 1100 560" preserveAspectRatio="none">
              <path d="M120 420 Q340 120 550 320 T980 150" fill="none" stroke="rgba(16,255,170,0.16)" strokeWidth="1.6" />
              <path d="M120 440 Q320 200 550 360 T1000 240" fill="none" stroke="rgba(59,130,246,0.12)" strokeWidth="1.4" />
              <path d="M240 108 L550 280 L860 116" fill="none" stroke="rgba(217,70,239,0.14)" strokeWidth="1.4" />
              <path d="M240 450 L550 280 L860 444" fill="none" stroke="rgba(16,255,170,0.12)" strokeWidth="1.2" />
              <circle cx="550" cy="280" r="144" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1.1" />
            </svg>
            <img src="/logos/eggplant-logo-smooth.apng" alt="Neon rift garden core" className="hero-float absolute left-1/2 top-1/2 z-10 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rotate-[14deg] object-contain md:h-60 md:w-60" />
            <img src="/logos/eggplant-logo-smooth.apng" alt="Neon rift garden left" className="hero-float absolute left-[14%] bottom-[14%] h-20 w-20 -rotate-[18deg] object-contain opacity-74 md:h-24 md:w-24" />
            <img src="/logos/eggplant-logo-smooth.apng" alt="Neon rift garden right" className="hero-float absolute right-[12%] top-[16%] h-18 w-18 rotate-[22deg] object-contain opacity-70 md:h-22 md:w-22" />
            <div className="absolute left-[8%] top-[10%] max-w-[20rem] rounded-[1.6rem] border border-white/10 bg-[linear-gradient(180deg,rgba(9,16,18,0.9),rgba(7,7,9,0.95))] p-6">
              <p className="font-mono text-sm uppercase tracking-[0.18em] text-[#10ffaa]/64">Habitat / unstable</p>
              <p className="pt-4 text-16 text-lightgray">This pushes the palette into a more organic neon field: less temple, more rupture, with geometry acting like a crack in space rather than a perfect diagram.</p>
            </div>
          </div>
        </div>
      </HeroConcept>
  );
}
