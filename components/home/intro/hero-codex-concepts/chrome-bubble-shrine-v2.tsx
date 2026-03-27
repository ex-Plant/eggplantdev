/* Agent: Claude — Chrome Bubble Shrine v2 */
import { HeroConcept } from "./shared";

const EGGPLANT_FILTER = "sepia(0.3) saturate(1.5) brightness(0.9)";
const GOLD_DOTS = [
  { cx: 180, cy: 160 }, { cx: 820, cy: 140 }, { cx: 160, cy: 480 },
  { cx: 840, cy: 500 }, { cx: 300, cy: 100 }, { cx: 700, cy: 520 },
  { cx: 140, cy: 320 }, { cx: 860, cy: 340 },
];

export function CodexChromeBubbleShrineV2() {
  return (
    <HeroConcept
      eyebrow="Concept / 16b"
      title={["Chrome", "Bubble Shrine"]}
      text="Amber shrine with concentric gold rings and warm glow. The Y2K softness remains, rebuilt without blur or glass bubbles."
      className="bg-[radial-gradient(circle_at_20%_20%,rgba(218,165,32,0.22),transparent_18%),radial-gradient(circle_at_50%_14%,rgba(255,215,0,0.16),transparent_16%),radial-gradient(circle_at_80%_24%,rgba(240,192,64,0.18),transparent_18%),radial-gradient(circle_at_60%_76%,rgba(200,134,14,0.14),transparent_22%),#0a0806]"
    >
      <div className="640:col-span-8 1280:col-span-10 col-span-full 1280:col-start-7 mt-12 min-h-[33rem] overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(10,8,6,0.9),rgba(8,6,4,0.96))] xl:mt-0">
        <div className="relative grid min-h-[33rem] place-items-center overflow-hidden">
          <div className="absolute left-1/2 top-1/2 h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-full" style={{ background: "radial-gradient(circle, rgba(255,215,0,0.16) 0%, rgba(218,165,32,0.1) 30%, rgba(200,134,14,0.05) 55%, transparent 70%)" }} />
          <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 1000 660" preserveAspectRatio="none">
            {/* Concentric gold rings */}
            <circle cx="500" cy="330" r="240" fill="none" stroke="rgba(218,165,32,0.12)" strokeWidth="1.4" />
            <circle cx="500" cy="330" r="180" fill="none" stroke="rgba(255,215,0,0.1)" strokeWidth="1.2" />
            <circle cx="500" cy="330" r="120" fill="none" stroke="rgba(240,192,64,0.14)" strokeWidth="1.2" strokeDasharray="8 12" />
            <circle cx="500" cy="330" r="70" fill="none" stroke="rgba(200,134,14,0.16)" strokeWidth="1" />
            {/* Gold dots replacing glass bubbles */}
            {GOLD_DOTS.map((d, i) => (
              <circle key={i} cx={d.cx} cy={d.cy} r="3.5" fill="rgba(218,165,32,0.25)" />
            ))}
            {/* Cross lines */}
            <line x1="260" y1="330" x2="740" y2="330" stroke="rgba(255,215,0,0.06)" strokeWidth="1" />
            <line x1="500" y1="90" x2="500" y2="570" stroke="rgba(218,165,32,0.06)" strokeWidth="1" />
          </svg>
          <img src="/logos/eggplant-logo-smooth.apng" alt="Chrome shrine centerpiece" className="hero-float relative z-10 h-52 w-52 rotate-[10deg] object-contain drop-shadow-[0_0_48px_rgba(218,165,32,0.12)] md:h-64 md:w-64" style={{ filter: EGGPLANT_FILTER }} />
          <div className="absolute bottom-8 left-1/2 w-[min(92%,33rem)] -translate-x-1/2 rounded-[1.65rem] border border-white/10 bg-[linear-gradient(180deg,rgba(10,8,6,0.92),rgba(8,6,4,0.96))] p-6 text-center">
            <p className="font-mono text-sm uppercase tracking-[0.18em] text-lightgray/65">Finish / amber shrine</p>
            <p className="pt-4 text-16 text-lightgray">Concentric gold rings and warm radial glow replace glossy blur bubbles. The shrine worship stays, the palette goes warm.</p>
          </div>
        </div>
      </div>
    </HeroConcept>
  );
}
