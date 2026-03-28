import { PALETTE, SPOTLIGHT, EGGPLANT, COPY } from "./config";

export function HeroCosmicStandUp() {
  return (
    <div id="hero-cosmic-standup" className="relative flex min-h-screen items-center overflow-hidden" style={{ backgroundColor: PALETTE.bg }}>
      {/* Spotlight cone */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-full w-[600px] -translate-x-1/2 overflow-hidden" style={{ background: SPOTLIGHT.gradient, clipPath: SPOTLIGHT.clipPath }} />

      {/* Stage floor line */}
      <div className="pointer-events-none absolute bottom-[25%] left-0 right-0 h-px" style={{ background: `linear-gradient(to right, transparent, ${PALETTE.neonGreen}26, transparent)` }} />

      <div className="fest-container relative z-10">
        <div className="flex flex-col items-center text-center">
          <img src={EGGPLANT.src} alt="" className="h-44 w-44 object-contain" />

          <h1 className="mt-10 font-mono text-48 uppercase text-white md:text-72">
            {COPY.titleLine1}<br /><span style={{ color: PALETTE.neonGreen }}>{COPY.titleLine2}</span>
          </h1>

          <p className="mt-10 font-mono text-sm uppercase tracking-[0.3em] text-white/15">
            {COPY.tagline}
          </p>
        </div>
      </div>
    </div>
  );
}
