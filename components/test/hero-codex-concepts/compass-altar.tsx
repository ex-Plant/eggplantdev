import { HeroConcept } from "./shared";

const COMPASS_POINTS = Array.from({ length: 8 }, (_, i) => {
  const angle = (Math.PI * 2 * i) / 8 - Math.PI / 2;
  return {
    x: Number((500 + 210 * Math.cos(angle)).toFixed(2)),
    y: Number((370 + 210 * Math.sin(angle)).toFixed(2)),
    x2: Number((500 + 286 * Math.cos(angle)).toFixed(2)),
    y2: Number((370 + 286 * Math.sin(angle)).toFixed(2)),
  };
});

export function CodexCompassAltar() {
  return (
    <HeroConcept
      eyebrow="Concept / 36 / Agent: Codex"
      title={["Compass", "Altar"]}
      text="An octagonal navigation diagram with a calmer surface. This one is closer to a celestial instrument panel: cleaner hierarchy, ceremonial labels, and a strong center of gravity."
      className="bg-[radial-gradient(circle_at_18%_20%,rgba(245,230,192,0.12),transparent_18%),radial-gradient(circle_at_76%_18%,rgba(240,192,64,0.18),transparent_18%),radial-gradient(circle_at_62%_76%,rgba(218,165,32,0.14),transparent_20%),#090809]"
    >
      <div className="col-span-full mt-12 min-h-[35rem] overflow-hidden rounded-[2rem] border border-[#f5e6c0]/10 bg-[linear-gradient(180deg,rgba(15,11,12,0.95),rgba(9,7,7,0.98))] xl:col-span-10 xl:col-start-7 xl:mt-0">
        <div className="relative grid min-h-[35rem] place-items-center overflow-hidden px-6 py-10">
          <svg
            className="pointer-events-none absolute inset-0 h-full w-full"
            viewBox="0 0 1000 760"
            preserveAspectRatio="none"
          >
            <circle cx="500" cy="370" r="232" fill="none" stroke="rgba(245,230,192,0.12)" strokeWidth="1.2" />
            <circle cx="500" cy="370" r="170" fill="none" stroke="rgba(240,192,64,0.14)" strokeWidth="1.1" />
            <polygon
              points="500,102 690,180 768,370 690,560 500,638 310,560 232,370 310,180"
              fill="none"
              stroke="rgba(218,165,32,0.16)"
              strokeWidth="1.3"
            />
            <polygon
              points="500,182 632,238 688,370 632,502 500,558 368,502 312,370 368,238"
              fill="none"
              stroke="rgba(200,134,14,0.14)"
              strokeWidth="1.1"
            />
            {COMPASS_POINTS.map((point, i) => (
              <g key={i}>
                <line x1="500" y1="370" x2={point.x2} y2={point.y2} stroke="rgba(245,230,192,0.1)" strokeWidth="1" />
                <circle cx={point.x} cy={point.y} r="14" fill="none" stroke="rgba(240,192,64,0.16)" strokeWidth="1" />
              </g>
            ))}
            <path d="M184 370 H816" fill="none" stroke="rgba(245,230,192,0.08)" strokeWidth="1" />
            <path d="M500 72 V668" fill="none" stroke="rgba(245,230,192,0.08)" strokeWidth="1" />
          </svg>

          <div className="relative z-10 flex w-full max-w-[36rem] flex-col items-center gap-6 text-center">
            <div className="grid w-full gap-3 font-mono text-[10px] tracking-[0.28em] text-[#c8b080] uppercase sm:grid-cols-3">
              <div className="rounded-full border border-[#f5e6c0]/12 px-4 py-2">North: Signal</div>
              <div className="rounded-full border border-[#f5e6c0]/12 px-4 py-2">Agent: Codex</div>
              <div className="rounded-full border border-[#f5e6c0]/12 px-4 py-2">South: Devotion</div>
            </div>

            <div className="relative">
              <div className="absolute top-1/2 left-1/2 h-[18rem] w-[18rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(245,230,192,0.14),rgba(240,192,64,0.1)_36%,transparent_72%)]" />
              <img
                src="/logos/eggplant-logo-smooth.apng"
                alt="Compass Altar centerpiece"
                className="hero-pulse relative h-40 w-40 rotate-[6deg] object-contain sm:h-48 sm:w-48 md:h-56 md:w-56"
                style={{ filter: "sepia(0.18) saturate(1.15) brightness(1.02)" }}
              />
            </div>

            <div className="grid w-full gap-4 md:grid-cols-[1fr_auto_1fr] md:items-center">
              <div className="h-px bg-linear-to-r from-transparent via-[#daa520]/35 to-transparent" />
              <p className="font-mono text-[11px] tracking-[0.26em] text-[#daa520]/70 uppercase">
                Sacred navigation board
              </p>
              <div className="h-px bg-linear-to-r from-transparent via-[#daa520]/35 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </HeroConcept>
  );
}
