import {
  PALETTE,
  RINGS,
  VENN_CIRCLES,
  FLOWER_OF_LIFE_CENTER,
  FLOWER_OF_LIFE_PETALS,
  TRIANGLE_POINTS,
  HEXAGON_POINTS,
  DEBRIS,
  COPY,
  SVG_CENTER,
  SVG_VIEWBOX,
} from "./config";

export function HeroSupernovaFarmersMarket() {
  return (
    <div id="hero-supernova-farmers-market" className="relative flex min-h-screen items-center justify-center overflow-hidden" style={{ backgroundColor: PALETTE.bg }}>
      <svg className="pointer-events-none absolute inset-0 h-full w-full overflow-hidden" viewBox={SVG_VIEWBOX} preserveAspectRatio="xMidYMid slice">
        {RINGS.map((ring, i) => (
          <circle
            key={`ring-${i}`}
            cx={SVG_CENTER.x}
            cy={SVG_CENTER.y}
            r={ring.r}
            fill="none"
            stroke={ring.stroke}
            strokeWidth={ring.strokeWidth}
            opacity={ring.opacity}
            strokeDasharray={ring.strokeDasharray}
          />
        ))}
        {VENN_CIRCLES.map((c, i) => (
          <circle key={`venn-${i}`} cx={c.cx} cy={c.cy} r={c.r} fill="none" stroke={PALETTE.neonGreen} strokeWidth="0.8" opacity="0.15" />
        ))}
        {FLOWER_OF_LIFE_PETALS.map((p, i) => (
          <circle key={`seed-${i}`} cx={p.cx} cy={p.cy} r={FLOWER_OF_LIFE_CENTER.r} fill="none" stroke={PALETTE.fuchsia} strokeWidth="0.6" opacity="0.12" />
        ))}
        <circle cx={FLOWER_OF_LIFE_CENTER.cx} cy={FLOWER_OF_LIFE_CENTER.cy} r={FLOWER_OF_LIFE_CENTER.r} fill="none" stroke={PALETTE.fuchsia} strokeWidth="0.6" opacity="0.12" />
        <polygon points={TRIANGLE_POINTS} fill="none" stroke={PALETTE.gold} strokeWidth="0.8" opacity="0.15" />
        <polygon points={HEXAGON_POINTS} fill="none" stroke={PALETTE.limeGreen} strokeWidth="0.5" opacity="0.1" />
        {DEBRIS.map((d, i) => (
          <circle
            key={`debris-${i}`}
            cx={d.cx}
            cy={d.cy}
            r={d.r}
            fill={d.fill}
            opacity={d.opacity}
          />
        ))}
      </svg>

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,20,147,0.12)_0%,rgba(16,255,170,0.06)_30%,rgba(218,165,32,0.03)_50%,transparent_70%)]" />

      <div className="relative z-10 flex flex-col items-center text-center">
        <h1 className="font-mono text-64 uppercase leading-none text-white/90 md:text-[7rem]">
          {COPY.titleName}
        </h1>
        <p className="mt-2 font-mono text-20 uppercase tracking-[0.6em]" style={{ color: `${PALETTE.neonGreen}80` }}>
          {COPY.subtitleName}
        </p>
        <p className="mt-8 max-w-lg text-16 text-white/20">
          {COPY.description}
        </p>
      </div>
    </div>
  );
}
