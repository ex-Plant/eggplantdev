import {
  PALETTE,
  RING_COLORS,
  RINGS,
  RIBS,
  LIGHT_RAYS,
  EGGPLANT,
  COPY,
  SVG_CENTER,
  SVG_VIEWBOX,
} from "./config";

export function HeroVoidLiturgy() {
  return (
    <div id="hero-void-liturgy" className="relative flex min-h-screen items-center justify-center overflow-hidden" style={{ backgroundColor: PALETTE.bg }}>
      <svg className="pointer-events-none absolute inset-0 h-full w-full overflow-hidden" viewBox={SVG_VIEWBOX} preserveAspectRatio="xMidYMid slice">
        {RINGS.map((ring, i) => (
          <g key={`ring-${i}`}>
            <circle
              cx={SVG_CENTER.x}
              cy={SVG_CENTER.y}
              r={ring.r}
              fill="none"
              stroke={ring.stroke}
              strokeWidth={ring.strokeWidth}
              opacity={ring.opacity}
              strokeDasharray={ring.strokeDasharray}
            />
            {ring.hasDecoration && ring.decorationDots.map((dot, j) => (
              <circle
                key={`dot-${i}-${j}`}
                cx={dot.cx}
                cy={dot.cy}
                r="2"
                fill={RING_COLORS[i % RING_COLORS.length]}
                opacity="0.15"
              />
            ))}
          </g>
        ))}
        {RIBS.map((rib, i) => (
          <line
            key={`rib-${i}`}
            x1={rib.x1}
            y1={rib.y1}
            x2={rib.x2}
            y2={rib.y2}
            stroke={PALETTE.neonGreen}
            strokeWidth="0.2"
            opacity="0.04"
          />
        ))}
      </svg>

      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden">
        {LIGHT_RAYS.map((ray, i) => (
          <div
            key={`ray-${i}`}
            className="absolute left-1/2 top-1/2 h-[600px] w-[3px] origin-top -translate-x-1/2"
            style={{
              transform: `rotate(${ray.angle}deg)`,
              background: "linear-gradient(180deg, rgba(16,255,170,0.08) 0%, transparent 60%)",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center">
        <div className="relative">
          <img src={EGGPLANT.src} alt="" className="h-40 w-40 object-contain" style={{ filter: EGGPLANT.filter }} />
          <div className="absolute -inset-10 rounded-full bg-[radial-gradient(circle,rgba(16,255,170,0.1)_0%,rgba(217,70,239,0.05)_40%,transparent_70%)]" />
        </div>

        <div className="mt-16 flex items-center gap-4">
          <div className="h-px w-16" style={{ background: `linear-gradient(to right, transparent, ${PALETTE.neonGreen}33)` }} />
          <span className="font-mono text-sm uppercase tracking-[0.8em]" style={{ color: `${PALETTE.neonGreen}66` }}>{COPY.authorName}</span>
          <div className="h-px w-16" style={{ background: `linear-gradient(to left, transparent, ${PALETTE.neonGreen}33)` }} />
        </div>

        <h1 className="mt-6 font-mono text-48 uppercase text-white md:text-72">
          {COPY.titleLine1}<br /><span className="bg-gradient-to-r from-[#10ffaa] via-[#d946ef] to-[#ff1493] bg-clip-text text-transparent">{COPY.titleLine2}</span>
        </h1>
        <p className="mt-6 max-w-md text-16 text-white/20 mx-auto text-center">
          {COPY.description}
        </p>
      </div>
    </div>
  );
}
