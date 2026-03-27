/* Agent: Claude — Signal Sanctuary v2 */
import { HeroConcept } from "./shared";

export function CodexSignalSanctuaryV2() {
  return (
    <HeroConcept
      eyebrow="Concept / 22b"
      title={["Signal", "Sanctuary"]}
      text="Golden sanctuary — concentric signal waves in gold and amber radiate outward. A triangle antenna channels the broadcast. Rose accent as secondary warmth."
      className="bg-[radial-gradient(circle_at_20%_20%,rgba(218,165,32,0.22),transparent_18%),radial-gradient(circle_at_50%_14%,rgba(255,215,0,0.16),transparent_16%),radial-gradient(circle_at_80%_24%,rgba(240,192,64,0.18),transparent_18%),radial-gradient(circle_at_60%_76%,rgba(200,134,14,0.14),transparent_22%),#0a0806]"
    >
      <div className="640:col-span-8 1280:col-span-10 col-span-full 1280:col-start-7 mt-12 min-h-[32rem] overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(10,8,6,0.9),rgba(8,6,4,0.96))] xl:mt-0">
        <div className="relative grid min-h-[32rem] place-items-center overflow-hidden">
          <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 1000 720" preserveAspectRatio="none">
            {/* Concentric gold signal waves */}
            <circle cx="500" cy="360" r="210" fill="none" stroke="rgba(218,165,32,0.14)" strokeWidth="1.5" />
            <circle cx="500" cy="360" r="278" fill="none" stroke="rgba(255,215,0,0.1)" strokeWidth="1.2" strokeDasharray="8 12" />
            <circle cx="500" cy="360" r="128" fill="none" stroke="rgba(240,192,64,0.16)" strokeWidth="1.2" />
            <circle cx="500" cy="360" r="68" fill="none" stroke="rgba(200,134,14,0.18)" strokeWidth="1.1" />
            {/* Upward triangle antenna */}
            <path d="M340 520 L500 160 L660 520 Z" fill="none" stroke="rgba(218,165,32,0.14)" strokeWidth="1.3" />
            {/* Vertical axis */}
            <path d="M500 88 L500 632" fill="none" stroke="rgba(255,215,0,0.08)" strokeWidth="1.1" strokeDasharray="10 12" />
            {/* Rose accent — secondary cross lines */}
            <path d="M200 360 H800" fill="none" stroke="rgba(251,113,133,0.06)" strokeWidth="1" />
          </svg>
          {/* Golden glow — NO blur */}
          <div className="absolute left-1/2 top-1/2 h-[24rem] w-[24rem] -translate-x-1/2 -translate-y-1/2 rounded-full" style={{ background: "radial-gradient(circle, rgba(255,215,0,0.15) 0%, rgba(218,165,32,0.08) 40%, transparent 70%)" }} />
          <img src="/logos/eggplant-logo-smooth.apng" alt="Signal sanctuary eggplant" className="hero-pulse relative z-10 h-48 w-48 rotate-[10deg] object-contain md:h-60 md:w-60" style={{ filter: "sepia(0.3) saturate(1.5) brightness(0.9)" }} />
          <div className="absolute left-8 top-8 rounded-full border border-[#daa520]/20 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-[#ffd700]/70">Frequency / devotional</div>
          <div className="absolute bottom-8 right-8 max-w-[20rem] rounded-[1.5rem] border border-white/10 bg-[linear-gradient(180deg,rgba(10,8,6,0.9),rgba(8,6,4,0.94))] p-5">
            <p className="font-mono text-sm uppercase tracking-[0.18em] text-lightgray/62">Mode / golden broadcast</p>
            <p className="pt-4 text-16 text-lightgray">Signal waves in gold and amber frame a sacred receiver. The triangle channels devotion upward — the eggplant absorbs it all.</p>
          </div>
        </div>
      </div>
    </HeroConcept>
  );
}
