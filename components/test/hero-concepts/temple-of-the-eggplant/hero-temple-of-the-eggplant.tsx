import {
  PALETTE,
  OUTER_RECTS,
  TRIANGLES,
  BINDU,
  LOTUS_PETALS,
  LOTUS_RADIUS,
  EGGPLANT,
  COPY,
  SVG_CENTER,
  SVG_VIEWBOX,
} from "./config";

export function HeroTempleOfTheEggplant() {
  return (
    <div id="hero-temple" className="relative flex min-h-screen items-center justify-center overflow-hidden" style={{ backgroundColor: PALETTE.bg }}>
      {/* Sacred temple geometry */}
      <svg className="pointer-events-none absolute inset-0 h-full w-full overflow-hidden" viewBox={SVG_VIEWBOX} preserveAspectRatio="xMidYMid slice">
        {/* Sri Yantra inspired */}
        {OUTER_RECTS.map((rect, i) => (
          <rect key={i} x={rect.x} y={rect.y} width={rect.width} height={rect.height} fill="none" stroke={PALETTE.neonGreen} strokeWidth={rect.strokeWidth} opacity={rect.opacity} />
        ))}
        {/* Interlocking triangles */}
        {TRIANGLES.map((tri, i) => (
          <polygon key={i} points={tri.points} fill="none" stroke={tri.stroke} strokeWidth={tri.strokeWidth} opacity={tri.opacity} />
        ))}
        {/* Central bindu */}
        {BINDU.map((b, i) => (
          <circle key={i} cx={SVG_CENTER.x} cy={SVG_CENTER.y} r={b.r} fill={PALETTE.neonGreen} opacity={b.opacity} />
        ))}
        {/* Lotus petals hint */}
        {LOTUS_PETALS.map((petal, i) => (
          <ellipse
            key={i}
            cx={petal.cx}
            cy={petal.cy}
            rx="35"
            ry="15"
            fill="none"
            stroke={PALETTE.neonGreen}
            strokeWidth="0.4"
            opacity="0.06"
            transform={`rotate(${petal.rotation} ${petal.cx} ${petal.cy})`}
          />
        ))}
      </svg>

      <div className="relative z-10 flex flex-col items-center text-center">
        <p className="font-mono text-sm uppercase tracking-[0.6em]" style={{ color: `${PALETTE.neonGreen}66` }}>{COPY.subtitle}</p>

        <div className="relative my-10">
          <div className="absolute -inset-20 rounded-full bg-[radial-gradient(circle,rgba(16,255,170,0.06)_0%,rgba(217,70,239,0.03)_50%,transparent_70%)]" />
          <img src={EGGPLANT.src} alt="" className="relative h-52 w-52 object-contain" />
        </div>

        <h1 className="font-mono text-40 uppercase tracking-wider text-white md:text-56">
          {COPY.titleLine1}<br />
          <span className="bg-gradient-to-r from-[#10ffaa] via-[#d946ef] to-[#39ff14] bg-clip-text text-transparent">{COPY.titleLine2}</span>
        </h1>
        <p className="mt-8 max-w-lg text-16 text-white/25 leading-relaxed">
          {COPY.description}
        </p>
        <div className="mt-10 flex gap-3">
          <span className="rounded-full border px-5 py-2 font-mono text-sm uppercase" style={{ borderColor: `${PALETTE.neonGreen}33`, color: `${PALETTE.neonGreen}66` }}>{COPY.ctaLeft}</span>
          <span className="rounded-full border px-5 py-2 font-mono text-sm uppercase" style={{ borderColor: `${PALETTE.fuchsia}33`, color: `${PALETTE.fuchsia}66` }}>{COPY.ctaRight}</span>
        </div>
      </div>
    </div>
  );
}
