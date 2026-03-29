/* Agent: Claude — Neon Rift Garden v2 */
import { HeroConcept } from "./shared";

const EGGPLANT_FILTER = "sepia(0.3) saturate(1.5) brightness(0.9)";

export function CodexNeonRiftGardenV2() {
  return (
    <HeroConcept
      eyebrow="Concept / 20b"
      title={["Neon", "Rift Garden"]}
      text="A golden rift tears across the cosmic void. Geometric crack lines in gold and amber replace the neon blur, keeping the rupture concept warm."
      className="bg-[radial-gradient(circle_at_20%_20%,rgba(218,165,32,0.22),transparent_18%),radial-gradient(circle_at_50%_14%,rgba(255,215,0,0.16),transparent_16%),radial-gradient(circle_at_80%_24%,rgba(240,192,64,0.18),transparent_18%),radial-gradient(circle_at_60%_76%,rgba(200,134,14,0.14),transparent_22%),#0a0806]"
    >
      <div className="640:col-span-8 1280:col-span-10 col-span-full 1280:col-start-7 mt-12 min-h-[33rem] overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(10,8,6,0.9),rgba(8,6,4,0.96))] xl:mt-0">
        <div className="relative grid min-h-[33rem] place-items-center overflow-hidden">
          <div className="absolute left-1/2 top-1/2 h-[24rem] w-[24rem] -translate-x-1/2 -translate-y-1/2 rounded-full" style={{ background: "radial-gradient(circle, rgba(255,215,0,0.15) 0%, rgba(218,165,32,0.08) 40%, transparent 70%)" }} />
          <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 1000 600" preserveAspectRatio="none">
            {/* Rift crack lines */}
            <path d="M440 0 L460 180 L500 300 L480 420 L460 600" stroke="rgba(218,165,32,0.2)" strokeWidth="2" fill="none" />
            <path d="M500 300 L580 260 L680 220" stroke="rgba(255,215,0,0.16)" strokeWidth="1.6" fill="none" />
            <path d="M500 300 L420 360 L340 400" stroke="rgba(240,192,64,0.14)" strokeWidth="1.4" fill="none" />
            <path d="M500 300 L560 380 L620 440" stroke="rgba(200,134,14,0.12)" strokeWidth="1.2" fill="none" />
            {/* Sacred triangles */}
            <polygon points="500,140 620,380 380,380" fill="none" stroke="rgba(218,165,32,0.1)" strokeWidth="1.2" />
            <polygon points="500,420 380,200 620,200" fill="none" stroke="rgba(255,215,0,0.08)" strokeWidth="1" />
            {/* Amber circle */}
            <circle cx="500" cy="300" r="140" fill="none" stroke="rgba(240,192,64,0.1)" strokeWidth="1.2" strokeDasharray="8 12" />
          </svg>
          {[{ l: "24%", t: "20%", s: 40 }, { l: "50%", t: "50%", s: 56 }, { l: "68%", t: "70%", s: 36 }].map((p, i) => (
            <img key={i} src="/logos/eggplant-logo-smooth.apng" alt={i === 1 ? "Rift garden eggplant" : ""} className={`hero-float absolute z-10 object-contain ${i === 1 ? "md:h-64 md:w-64" : ""}`} style={{ left: p.l, top: p.t, height: `${p.s * 4}px`, width: `${p.s * 4}px`, transform: "translate(-50%,-50%)", filter: EGGPLANT_FILTER, animationDelay: `${i * 0.3}s` }} />
          ))}
          <div className="absolute bottom-8 left-6 max-w-[20rem] rounded-[1.65rem] border border-white/10 bg-[linear-gradient(180deg,rgba(10,8,6,0.92),rgba(8,6,4,0.96))] p-6">
            <p className="font-mono text-sm uppercase tracking-[0.18em] text-lightgray/65">Rupture / golden rift</p>
            <p className="pt-4 text-16 text-lightgray">Gold crack lines and sacred triangles split the void. The rupture glows warm, not neon.</p>
          </div>
        </div>
      </div>
    </HeroConcept>
  );
}
