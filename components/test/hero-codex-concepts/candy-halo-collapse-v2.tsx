/* Agent: Claude — Candy Halo Collapse v2 */
import { HeroConcept } from "./shared";

export function CodexCandyHaloCollapseV2() {
  return (
    <HeroConcept
      eyebrow="Concept / 15b"
      title={["Candy", "Halo Collapse"]}
      text="Golden halo collapse — concentric gold rings imploding toward the center. The eggplant sits at the convergence point, bathed in warm amber light."
      className="bg-[radial-gradient(circle_at_20%_20%,rgba(218,165,32,0.22),transparent_18%),radial-gradient(circle_at_50%_14%,rgba(255,215,0,0.16),transparent_16%),radial-gradient(circle_at_80%_24%,rgba(240,192,64,0.18),transparent_18%),radial-gradient(circle_at_60%_76%,rgba(200,134,14,0.14),transparent_22%),#0a0806]"
    >
      <div className="640:col-span-8 1280:col-span-10 col-span-full 1280:col-start-7 mt-12 min-h-[33rem] overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(10,8,6,0.9),rgba(8,6,4,0.96))] xl:mt-0">
        <div className="relative grid min-h-[33rem] place-items-center overflow-hidden">
          {/* Concentric gold rings collapsing inward */}
          <div className="absolute h-[30rem] w-[30rem] rounded-full border border-[#daa520]/10" />
          <div className="absolute h-[24rem] w-[24rem] rounded-full border border-[#ffd700]/14" />
          <div className="absolute h-[18rem] w-[18rem] rounded-full border border-[#f0c040]/18" />
          <div className="absolute h-[12rem] w-[12rem] rounded-full border border-[#daa520]/20" />
          <div className="absolute h-[6rem] w-[6rem] rounded-full border border-[#ffd700]/16" />
          {/* Warm golden glow — NO blur */}
          <div className="absolute left-1/2 top-1/2 h-[24rem] w-[24rem] -translate-x-1/2 -translate-y-1/2 rounded-full" style={{ background: "radial-gradient(circle, rgba(255,215,0,0.15) 0%, rgba(218,165,32,0.08) 40%, transparent 70%)" }} />
          {/* Sacred geometry cross-hairs */}
          <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 1000 760" preserveAspectRatio="none">
            <path d="M120 380 H880" fill="none" stroke="rgba(218,165,32,0.1)" strokeWidth="1.1" />
            <path d="M500 80 V680" fill="none" stroke="rgba(218,165,32,0.1)" strokeWidth="1.1" />
            <path d="M220 160 L780 600" fill="none" stroke="rgba(255,215,0,0.08)" strokeWidth="1" />
            <path d="M780 160 L220 600" fill="none" stroke="rgba(240,192,64,0.08)" strokeWidth="1" />
          </svg>
          <img src="/logos/eggplant-logo-smooth.apng" alt="Golden halo collapse centerpiece" className="hero-pulse relative z-10 h-52 w-52 rotate-[12deg] object-contain md:h-64 md:w-64" style={{ filter: "sepia(0.3) saturate(1.5) brightness(0.9)" }} />
          <div className="absolute bottom-8 left-1/2 w-[min(92%,32rem)] -translate-x-1/2 rounded-[1.65rem] border border-white/10 bg-[linear-gradient(180deg,rgba(10,8,6,0.88),rgba(8,6,4,0.95))] p-6 text-center">
            <p className="font-mono text-sm uppercase tracking-[0.18em] text-lightgray/62">Event / golden implosion halo</p>
            <p className="pt-4 text-16 text-lightgray">Concentric gold rings converge inward — the collapse feels ceremonial, like a cosmic ritual sealing the eggplant at the focal point.</p>
          </div>
        </div>
      </div>
    </HeroConcept>
  );
}
