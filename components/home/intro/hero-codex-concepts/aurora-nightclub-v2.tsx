/* Agent: Claude — Aurora Nightclub v2 */
import { HeroConcept } from "./shared";

const EGGPLANT_FILTER = "sepia(0.3) saturate(1.5) brightness(0.9)";
const WAVE_COLORS = [
  "rgba(218,165,32,0.28)",
  "rgba(255,215,0,0.22)",
  "rgba(240,192,64,0.18)",
  "rgba(200,134,14,0.16)",
  "rgba(218,165,32,0.12)",
];

export function CodexAuroraNightclubV2() {
  return (
    <HeroConcept
      eyebrow="Concept / 17b"
      title={["Aurora", "Nightclub"]}
      text="Golden aurora bands sweep across the void. The afterhours mood persists, now rendered in warm amber waves instead of toxic neon."
      className="bg-[radial-gradient(circle_at_20%_20%,rgba(218,165,32,0.22),transparent_18%),radial-gradient(circle_at_50%_14%,rgba(255,215,0,0.16),transparent_16%),radial-gradient(circle_at_80%_24%,rgba(240,192,64,0.18),transparent_18%),radial-gradient(circle_at_60%_76%,rgba(200,134,14,0.14),transparent_22%),#0a0806]"
    >
      <div className="640:col-span-8 1280:col-span-10 col-span-full 1280:col-start-7 mt-12 min-h-[33rem] overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(10,8,6,0.9),rgba(8,6,4,0.96))] xl:mt-0">
        <div className="relative grid min-h-[33rem] place-items-center overflow-hidden">
          <div className="absolute left-1/2 top-1/2 h-[24rem] w-[24rem] -translate-x-1/2 -translate-y-1/2 rounded-full" style={{ background: "radial-gradient(circle, rgba(255,215,0,0.15) 0%, rgba(218,165,32,0.08) 40%, transparent 70%)" }} />
          <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 1000 600" preserveAspectRatio="none">
            {WAVE_COLORS.map((color, i) => (
              <path key={i} d={`M0 ${240 + i * 36} Q250 ${200 + i * 30},500 ${250 + i * 34} T1000 ${220 + i * 38}`} fill="none" stroke={color} strokeWidth={2.4 - i * 0.3} />
            ))}
            <circle cx="500" cy="300" r="160" fill="none" stroke="rgba(218,165,32,0.08)" strokeWidth="1.2" />
            <circle cx="500" cy="300" r="100" fill="none" stroke="rgba(255,215,0,0.06)" strokeWidth="1" strokeDasharray="6 10" />
          </svg>
          <img src="/logos/eggplant-logo-smooth.apng" alt="Central aurora eggplant" className="hero-float relative z-10 h-52 w-52 rotate-[6deg] object-contain md:h-64 md:w-64" style={{ filter: EGGPLANT_FILTER }} />
          {[{ l: "12%", t: "18%" }, { l: "82%", t: "22%" }, { l: "16%", t: "72%" }, { l: "78%", t: "68%" }].map((pos, i) => (
            <img key={i} src="/logos/eggplant-logo-smooth.apng" alt="" className="hero-float absolute z-10 h-9 w-9 object-contain" style={{ left: pos.l, top: pos.t, filter: EGGPLANT_FILTER, animationDelay: `${i * 0.5}s` }} />
          ))}
          <div className="absolute bottom-8 right-6 max-w-[20rem] rounded-[1.65rem] border border-white/10 bg-[linear-gradient(180deg,rgba(10,8,6,0.92),rgba(8,6,4,0.96))] p-6">
            <p className="font-mono text-sm uppercase tracking-[0.18em] text-lightgray/65">Atmosphere / golden aurora</p>
            <p className="pt-4 text-16 text-lightgray">Amber wave paths replace toxic cyan. The afterhours frequency shifts warm.</p>
          </div>
        </div>
      </div>
    </HeroConcept>
  );
}
