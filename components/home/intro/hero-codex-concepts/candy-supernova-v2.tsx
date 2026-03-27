/* Agent: Claude — Candy Supernova v2 */
import { HeroConcept } from "./shared";

const EGGPLANT_FILTER = "sepia(0.3) saturate(1.5) brightness(0.9)";
const SATELLITES = [
  { cx: 160, cy: 100, r: 18 },
  { cx: 840, cy: 120, r: 14 },
  { cx: 200, cy: 460, r: 16 },
  { cx: 820, cy: 440, r: 12 },
];

export function CodexCandySupernovaV2() {
  return (
    <HeroConcept
      eyebrow="Concept / 18b"
      title={["Candy", "Supernova"]}
      text="Gold supernova blast with amber geometry. The pop-star sun energy stays, anchored in warm tones instead of neon candy."
      className="bg-[radial-gradient(circle_at_20%_20%,rgba(218,165,32,0.22),transparent_18%),radial-gradient(circle_at_50%_14%,rgba(255,215,0,0.16),transparent_16%),radial-gradient(circle_at_80%_24%,rgba(240,192,64,0.18),transparent_18%),radial-gradient(circle_at_60%_76%,rgba(200,134,14,0.14),transparent_22%),#0a0806]"
    >
      <div className="640:col-span-8 1280:col-span-10 col-span-full 1280:col-start-7 mt-12 min-h-[33rem] overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(10,8,6,0.9),rgba(8,6,4,0.96))] xl:mt-0">
        <div className="relative grid min-h-[33rem] place-items-center overflow-hidden">
          <div className="absolute left-1/2 top-1/2 h-[24rem] w-[24rem] -translate-x-1/2 -translate-y-1/2 rounded-full" style={{ background: "radial-gradient(circle, rgba(255,215,0,0.18) 0%, rgba(218,165,32,0.1) 40%, transparent 70%)" }} />
          <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 1000 600" preserveAspectRatio="none">
            {Array.from({ length: 12 }, (_, i) => {
              const angle = (i * 30 * Math.PI) / 180;
              return <line key={i} x1="500" y1="300" x2={500 + Math.cos(angle) * 420} y2={300 + Math.sin(angle) * 280} stroke="rgba(218,165,32,0.12)" strokeWidth="1.2" />;
            })}
            <circle cx="500" cy="300" r="180" fill="none" stroke="rgba(255,215,0,0.08)" strokeWidth="1.2" />
            <circle cx="500" cy="300" r="120" fill="none" stroke="rgba(240,192,64,0.1)" strokeWidth="1" strokeDasharray="8 12" />
            {SATELLITES.map((s, i) => (
              <circle key={i} cx={s.cx} cy={s.cy} r={s.r} fill="none" stroke="rgba(218,165,32,0.15)" strokeWidth="1" />
            ))}
          </svg>
          <img src="/logos/eggplant-logo-smooth.apng" alt="Central supernova eggplant" className="hero-float relative z-10 h-52 w-52 rotate-[8deg] object-contain md:h-64 md:w-64" style={{ filter: EGGPLANT_FILTER }} />
          {SATELLITES.map((s, i) => (
            <img key={i} src="/logos/eggplant-logo-smooth.apng" alt="" className="hero-float absolute z-10 h-10 w-10 object-contain" style={{ left: `${s.cx / 10}%`, top: `${s.cy / 6}%`, filter: EGGPLANT_FILTER, animationDelay: `${i * 0.4}s` }} />
          ))}
          <div className="absolute bottom-8 left-1/2 w-[min(92%,30rem)] -translate-x-1/2 rounded-[1.65rem] border border-white/10 bg-[linear-gradient(180deg,rgba(10,8,6,0.92),rgba(8,6,4,0.96))] p-6 text-center">
            <p className="font-mono text-sm uppercase tracking-[0.18em] text-lightgray/65">Energy / gold supernova</p>
            <p className="pt-4 text-16 text-lightgray">Radial gold rays replace neon candy. The blast stays loud, the palette stays warm.</p>
          </div>
        </div>
      </div>
    </HeroConcept>
  );
}
