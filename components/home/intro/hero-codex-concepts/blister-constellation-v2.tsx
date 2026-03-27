/* Agent: Claude — Blister Constellation v2 */
import { HeroConcept } from "./shared";

export function CodexBlisterConstellationV2() {
  return (
    <HeroConcept
      eyebrow="Concept / 23b"
      title={["Blister", "Constellation"]}
      text="Constellation of golden cells — each containing a small eggplant, connected by gold lines forming a star map. The central cell holds the main specimen."
      className="bg-[radial-gradient(circle_at_20%_20%,rgba(218,165,32,0.22),transparent_18%),radial-gradient(circle_at_50%_14%,rgba(255,215,0,0.16),transparent_16%),radial-gradient(circle_at_80%_24%,rgba(240,192,64,0.18),transparent_18%),radial-gradient(circle_at_60%_76%,rgba(200,134,14,0.14),transparent_22%),#0a0806]"
    >
      <div className="640:col-span-8 1280:col-span-10 col-span-full 1280:col-start-7 mt-12 min-h-[32rem] overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(10,8,6,0.9),rgba(8,6,4,0.96))] xl:mt-0">
        <div className="relative grid min-h-[32rem] gap-4 p-6 md:grid-cols-[1.08fr_0.92fr] md:p-8">
          {/* Star map panel */}
          <div className="relative overflow-hidden rounded-[1.9rem] border border-white/10 bg-[linear-gradient(180deg,rgba(10,8,6,0.7),rgba(8,6,4,0.95))]">
            {/* Warm glow behind center */}
            <div className="absolute left-1/2 top-1/2 h-[18rem] w-[18rem] -translate-x-1/2 -translate-y-1/2 rounded-full" style={{ background: "radial-gradient(circle, rgba(255,215,0,0.12) 0%, rgba(218,165,32,0.06) 50%, transparent 72%)" }} />
            {/* Constellation lines and cells */}
            <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 480 440" preserveAspectRatio="xMidYMid meet">
              {/* Constellation connection lines */}
              <line x1="240" y1="220" x2="100" y2="100" stroke="rgba(218,165,32,0.12)" strokeWidth="1" />
              <line x1="240" y1="220" x2="380" y2="100" stroke="rgba(255,215,0,0.1)" strokeWidth="1" />
              <line x1="240" y1="220" x2="90" y2="340" stroke="rgba(240,192,64,0.1)" strokeWidth="1" />
              <line x1="240" y1="220" x2="390" y2="340" stroke="rgba(200,134,14,0.1)" strokeWidth="1" />
              <line x1="100" y1="100" x2="380" y2="100" stroke="rgba(218,165,32,0.06)" strokeWidth="1" strokeDasharray="6 8" />
              <line x1="90" y1="340" x2="390" y2="340" stroke="rgba(218,165,32,0.06)" strokeWidth="1" strokeDasharray="6 8" />
              {/* Satellite cells */}
              <circle cx="100" cy="100" r="24" fill="none" stroke="rgba(218,165,32,0.16)" strokeWidth="1.2" />
              <circle cx="380" cy="100" r="20" fill="none" stroke="rgba(255,215,0,0.14)" strokeWidth="1.1" />
              <circle cx="90" cy="340" r="22" fill="none" stroke="rgba(240,192,64,0.14)" strokeWidth="1.1" />
              <circle cx="390" cy="340" r="18" fill="none" stroke="rgba(200,134,14,0.14)" strokeWidth="1.1" />
              {/* Central cell */}
              <circle cx="240" cy="220" r="62" fill="none" stroke="rgba(218,165,32,0.2)" strokeWidth="1.4" />
              <circle cx="240" cy="220" r="48" fill="none" stroke="rgba(255,215,0,0.12)" strokeWidth="1" strokeDasharray="4 6" />
            </svg>
            {/* Satellite eggplants */}
            <img src="/logos/eggplant-logo-smooth.apng" alt="Satellite NW" className="absolute left-[14%] top-[16%] h-10 w-10 object-contain opacity-60" style={{ filter: "sepia(0.3) saturate(1.5) brightness(0.9)" }} />
            <img src="/logos/eggplant-logo-smooth.apng" alt="Satellite NE" className="absolute right-[14%] top-[16%] h-8 w-8 object-contain opacity-50" style={{ filter: "sepia(0.3) saturate(1.5) brightness(0.9)" }} />
            <img src="/logos/eggplant-logo-smooth.apng" alt="Satellite SW" className="absolute bottom-[18%] left-[12%] h-9 w-9 object-contain opacity-55" style={{ filter: "sepia(0.3) saturate(1.5) brightness(0.9)" }} />
            <img src="/logos/eggplant-logo-smooth.apng" alt="Satellite SE" className="absolute bottom-[18%] right-[12%] h-7 w-7 object-contain opacity-50" style={{ filter: "sepia(0.3) saturate(1.5) brightness(0.9)" }} />
            {/* Central eggplant */}
            <img src="/logos/eggplant-logo-smooth.apng" alt="Blister constellation centerpiece" className="hero-float absolute left-1/2 top-1/2 z-10 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rotate-[12deg] object-contain md:h-60 md:w-60" style={{ filter: "sepia(0.3) saturate(1.5) brightness(0.9)" }} />
          </div>
          {/* Info panel */}
          <div className="flex flex-col justify-between rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(10,8,6,0.88),rgba(8,6,4,0.95))] p-6">
            <div>
              <p className="font-mono text-sm uppercase tracking-[0.18em] text-lightgray/62">Format / stellar cartography</p>
              <p className="pt-4 text-16 text-lightgray">The collection reimagined as a constellation chart — golden cells connected by lines of devotion, each specimen catalogued in amber light.</p>
            </div>
            <div className="grid gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-lightgray/56">
              <span>Edition / golden cartograph</span>
              <span>Handling / observe with reverence</span>
              <span>Hazard / transcendent</span>
            </div>
          </div>
        </div>
      </div>
    </HeroConcept>
  );
}
