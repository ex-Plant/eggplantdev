/* Agent: Claude — Mega Candy Cathedral v2 */
import { HeroConcept } from "./shared";

export function CodexMegaCandyCathedralV2() {
  return (
    <HeroConcept
      eyebrow="Concept / 24b"
      title={["Mega Candy", "Cathedral"]}
      text="Golden cathedral — gothic arch geometry in gold SVG strokes frames the central altar. A rose window of concentric circles with radial divisions crowns the composition."
      className="bg-[radial-gradient(circle_at_20%_20%,rgba(218,165,32,0.22),transparent_18%),radial-gradient(circle_at_50%_14%,rgba(255,215,0,0.16),transparent_16%),radial-gradient(circle_at_80%_24%,rgba(240,192,64,0.18),transparent_18%),radial-gradient(circle_at_60%_76%,rgba(200,134,14,0.14),transparent_22%),#0a0806]"
    >
      <div className="640:col-span-8 1280:col-span-10 col-span-full 1280:col-start-7 mt-12 min-h-[35rem] overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(10,8,6,0.92),rgba(8,6,4,0.96))] xl:mt-0">
        <div className="relative grid min-h-[35rem] place-items-center overflow-hidden">
          <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 1000 800" preserveAspectRatio="none">
            {/* Rose window — concentric circles with radial divisions */}
            <circle cx="500" cy="400" r="248" fill="none" stroke="rgba(218,165,32,0.08)" strokeWidth="1.2" />
            <circle cx="500" cy="400" r="188" fill="none" stroke="rgba(255,215,0,0.12)" strokeWidth="1.2" />
            <circle cx="500" cy="400" r="126" fill="none" stroke="rgba(240,192,64,0.14)" strokeWidth="1.2" />
            <circle cx="500" cy="400" r="72" fill="none" stroke="rgba(200,134,14,0.16)" strokeWidth="1.1" />
            {/* Radial divisions (12 spokes) */}
            {[0, 30, 60, 90, 120, 150].map((angle) => (
              <line key={angle} x1={500 + 248 * Math.cos((angle * Math.PI) / 180)} y1={400 + 248 * Math.sin((angle * Math.PI) / 180)} x2={500 - 248 * Math.cos((angle * Math.PI) / 180)} y2={400 - 248 * Math.sin((angle * Math.PI) / 180)} stroke="rgba(218,165,32,0.06)" strokeWidth="1" />
            ))}
            {/* Gothic pointed arches — left and right */}
            <path d="M320 650 Q320 200 500 120 Q680 200 680 650" fill="none" stroke="rgba(255,215,0,0.12)" strokeWidth="1.4" />
            <path d="M370 650 Q370 240 500 170 Q630 240 630 650" fill="none" stroke="rgba(218,165,32,0.1)" strokeWidth="1.2" />
            {/* Vertical axis */}
            <path d="M500 100 V700" fill="none" stroke="rgba(240,192,64,0.06)" strokeWidth="1" />
            {/* Rose accent cross-bar */}
            <path d="M300 400 H700" fill="none" stroke="rgba(251,113,133,0.05)" strokeWidth="1" />
          </svg>
          {/* Golden altar glow — NO blur */}
          <div className="absolute left-1/2 top-1/2 h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-full" style={{ background: "radial-gradient(circle, rgba(255,215,0,0.14) 0%, rgba(218,165,32,0.07) 44%, transparent 72%)" }} />
          {/* Central altar eggplant */}
          <img src="/logos/eggplant-logo-smooth.apng" alt="Cathedral altar centerpiece" className="hero-pulse relative z-10 h-54 w-54 rotate-[12deg] object-contain md:h-68 md:w-68" style={{ filter: "sepia(0.3) saturate(1.5) brightness(0.9)" }} />
          {/* Flanking satellite eggplants */}
          <img src="/logos/eggplant-logo-smooth.apng" alt="Cathedral west acolyte" className="hero-float absolute left-[18%] bottom-[22%] h-18 w-18 object-contain opacity-65 md:h-22 md:w-22" style={{ filter: "sepia(0.3) saturate(1.5) brightness(0.9)" }} />
          <img src="/logos/eggplant-logo-smooth.apng" alt="Cathedral east acolyte" className="hero-float absolute right-[18%] bottom-[22%] h-18 w-18 object-contain opacity-65 md:h-22 md:w-22" style={{ filter: "sepia(0.3) saturate(1.5) brightness(0.9)" }} />
          <div className="absolute bottom-8 right-8 max-w-[21rem] rounded-[1.55rem] border border-white/10 bg-[linear-gradient(180deg,rgba(10,8,6,0.88),rgba(8,6,4,0.95))] p-5">
            <p className="font-mono text-sm uppercase tracking-[0.18em] text-lightgray/62">Finale / golden cathedral</p>
            <p className="pt-4 text-16 text-lightgray">Gothic arches and a rose window rendered in gold — the eggplant enthroned as altar piece, flanked by acolytes in amber light.</p>
          </div>
        </div>
      </div>
    </HeroConcept>
  );
}
