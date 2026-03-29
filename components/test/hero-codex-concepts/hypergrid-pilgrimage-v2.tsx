/* Agent: Claude — Hypergrid Pilgrimage v2 */
import { HeroConcept } from "./shared";

export function CodexHypergridPilgrimageV2() {
  return (
    <HeroConcept
      eyebrow="Concept / 21b"
      title={["Hypergrid", "Pilgrimage"]}
      text="Sacred grid — orthogonal gold lines forming a ritualistic map. Diamond shapes mark intersections as waypoints. The eggplant sits at the destination."
      className="bg-[radial-gradient(circle_at_20%_20%,rgba(218,165,32,0.22),transparent_18%),radial-gradient(circle_at_50%_14%,rgba(255,215,0,0.16),transparent_16%),radial-gradient(circle_at_80%_24%,rgba(240,192,64,0.18),transparent_18%),radial-gradient(circle_at_60%_76%,rgba(200,134,14,0.14),transparent_22%),#0a0806]"
    >
      <div className="640:col-span-8 1280:col-span-10 col-span-full 1280:col-start-7 mt-12 min-h-[32rem] overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(10,8,6,0.9),rgba(8,6,4,0.96))] xl:mt-0">
        <div className="relative grid min-h-[32rem] gap-6 p-6 md:grid-cols-[1fr_0.96fr] md:p-8">
          {/* Sacred map panel */}
          <div className="relative overflow-hidden rounded-[1.8rem] border border-[#daa520]/14 bg-[linear-gradient(180deg,rgba(10,8,6,0.92),rgba(8,6,4,0.96))] p-6">
            {/* Gold grid lines */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(218,165,32,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(218,165,32,0.05)_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-50" />
            <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 560 460" preserveAspectRatio="none">
              <path d="M70 230 H490" fill="none" stroke="rgba(218,165,32,0.12)" strokeWidth="1.2" />
              <path d="M280 60 V400" fill="none" stroke="rgba(255,215,0,0.12)" strokeWidth="1.2" />
              <path d="M110 100 L450 360" fill="none" stroke="rgba(240,192,64,0.1)" strokeWidth="1.1" />
              <path d="M110 360 L450 100" fill="none" stroke="rgba(200,134,14,0.1)" strokeWidth="1.1" />
              {/* Diamond waypoints at intersections */}
              <polygon points="280,215 295,230 280,245 265,230" fill="none" stroke="rgba(255,215,0,0.2)" strokeWidth="1.2" />
              <polygon points="180,160 190,170 180,180 170,170" fill="none" stroke="rgba(218,165,32,0.16)" strokeWidth="1" />
              <polygon points="380,300 390,310 380,320 370,310" fill="none" stroke="rgba(218,165,32,0.16)" strokeWidth="1" />
              <polygon points="380,160 390,170 380,180 370,170" fill="none" stroke="rgba(240,192,64,0.14)" strokeWidth="1" />
              <polygon points="180,300 190,310 180,320 170,310" fill="none" stroke="rgba(240,192,64,0.14)" strokeWidth="1" />
            </svg>
            <img src="/logos/eggplant-logo-smooth.apng" alt="Hypergrid pilgrimage center" className="hero-pulse absolute left-1/2 top-1/2 z-10 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rotate-[12deg] object-contain md:h-56 md:w-56" style={{ filter: "sepia(0.3) saturate(1.5) brightness(0.9)" }} />
            <div className="relative z-10 flex h-full items-start justify-between font-mono text-[11px] uppercase tracking-[0.2em] text-lightgray/58">
              <span>Node / sanctum-09</span>
              <span>Route / golden</span>
            </div>
          </div>
          {/* Info cards */}
          <div className="grid gap-4">
            <div className="rounded-[1.7rem] border border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(218,165,32,0.1),transparent_28%),linear-gradient(180deg,rgba(10,8,6,0.92),rgba(8,6,4,0.96))] p-5">
              <p className="font-mono text-sm uppercase tracking-[0.18em] text-lightgray/64">Navigation / sacred cartography</p>
              <p className="pt-4 text-16 text-lightgray">Grid logic reimagined as a ritualistic map — gold lines mark paths of pilgrimage, diamonds mark waypoints of devotion.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ["Wayfinding", "A golden coordinate system for impossible pilgrimages across the void."],
                ["Tone", "Sacred, authored, cartographic — the eggplant as destination, not decoration."],
              ].map(([label, copy]) => (
                <div key={label} className="rounded-[1.45rem] border border-white/10 bg-black/20 p-5">
                  <p className="font-mono text-sm uppercase tracking-[0.18em] text-lightgray/58">{label}</p>
                  <p className="pt-4 text-16 text-lightgray/88">{copy}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </HeroConcept>
  );
}
