import {
  PALETTE,
  NEBULA_CLOUDS,
  FLOWER_CIRCLES,
  GEOMETRY,
  EGGPLANT,
  COPY,
} from "./config";

export function HeroCosmicAubergine() {
  return (
    <div id="hero-cosmic-aubergine" className="relative flex min-h-screen items-center overflow-hidden bg-[#030108]">
      {/* Deep space nebula */}
      <div className="pointer-events-none absolute inset-0">
        {NEBULA_CLOUDS.map((cloud, i) => (
          <div key={i} className={`absolute ${cloud.position} ${cloud.size} rounded-full blur-3xl`} style={{ backgroundImage: cloud.gradient }} />
        ))}
      </div>

      <div className="fest-container relative z-10 grid gap-16 md:grid-cols-2 md:items-center">
        {/* Left: text */}
        <div>
          <p className="font-mono text-16 uppercase tracking-[0.3em] text-[#10ffaa]/50">{COPY.subtitle}</p>
          <h1 className="mt-6 font-mono text-64 uppercase leading-none text-white md:text-[5.5rem]">
            {COPY.titleLine1}<br />
            <span className="text-[#d946ef]">{COPY.titleLine2}</span><br />
            {COPY.titleLine3}
          </h1>
          <p className="mt-8 max-w-md text-20 text-white/35 leading-relaxed">
            {COPY.description}
          </p>
          <div className="mt-10 flex gap-4">
            <span className="rounded-full border border-[#10ffaa]/30 px-5 py-2.5 font-mono text-sm uppercase tracking-wider text-[#10ffaa]/60">{COPY.buttons[0]}</span>
            <span className="rounded-full border border-[#d946ef]/30 px-5 py-2.5 font-mono text-sm uppercase tracking-wider text-[#d946ef]/60">{COPY.buttons[1]}</span>
          </div>
        </div>

        {/* Right: eggplant with geometry */}
        <div className="relative flex items-center justify-center overflow-hidden">
          <svg className="absolute h-[420px] w-[420px] overflow-hidden" viewBox="0 0 420 420">
            {/* Flower of life fragment */}
            {FLOWER_CIRCLES.map(([cx, cy], i) => (
              <circle key={i} cx={cx} cy={cy} r={70} fill="none" stroke={PALETTE.purple} strokeWidth="0.5" opacity="0.12" />
            ))}
            {/* Outer ring */}
            <circle cx={GEOMETRY.outerRing.cx} cy={GEOMETRY.outerRing.cy} r={GEOMETRY.outerRing.r} fill="none" stroke={PALETTE.neonGreen} strokeWidth="0.6" opacity="0.1" strokeDasharray="6 10" />
            {/* Triangle */}
            <polygon points={GEOMETRY.triangleUp} fill="none" stroke={PALETTE.neonGreen} strokeWidth="0.4" opacity="0.06" />
            <polygon points={GEOMETRY.triangleDown} fill="none" stroke={PALETTE.purple} strokeWidth="0.4" opacity="0.05" />
          </svg>

          <img src={EGGPLANT.src} alt="" className="relative z-10 h-56 w-56 object-contain" />
        </div>
      </div>
    </div>
  );
}
