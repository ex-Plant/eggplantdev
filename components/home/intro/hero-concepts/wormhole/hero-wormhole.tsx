import {
  PALETTE,
  SVG_CENTER,
  TUNNEL_RINGS,
  SPEED_LINE_COUNT,
  SPEED_LINE_INNER_R,
  SPEED_LINE_OUTER_R,
  EGGPLANT,
  COPY,
} from "./config";

export function HeroWormhole() {
  return (
    <div id="hero-wormhole" className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#010102]">
      {/* Wormhole tunnel rings */}
      <svg className="pointer-events-none absolute inset-0 h-full w-full overflow-hidden" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
        {TUNNEL_RINGS.map((ring, i) => (
          <circle key={i} cx={SVG_CENTER.x} cy={SVG_CENTER.y} r={ring.r} fill="none" stroke={ring.color} strokeWidth={ring.strokeWidth} opacity={ring.opacity} />
        ))}
        {/* Speed lines radiating outward */}
        {Array.from({ length: SPEED_LINE_COUNT }, (_, i) => {
          const angle = (Math.PI * 2 * i) / SPEED_LINE_COUNT;
          return (
            <line
              key={`ray-${i}`}
              x1={SVG_CENTER.x + SPEED_LINE_INNER_R * Math.cos(angle)}
              y1={SVG_CENTER.y + SPEED_LINE_INNER_R * Math.sin(angle)}
              x2={SVG_CENTER.x + SPEED_LINE_OUTER_R * Math.cos(angle)}
              y2={SVG_CENTER.y + SPEED_LINE_OUTER_R * Math.sin(angle)}
              stroke={PALETTE.neonGreen}
              strokeWidth="0.3"
              opacity="0.05"
            />
          );
        })}
      </svg>

      {/* Central void with eggplant emerging */}
      <div className="relative z-10 flex flex-col items-center">
        <div className="relative">
          {/* Glow burst */}
          <div className="absolute -inset-16 rounded-full bg-[radial-gradient(circle,rgba(217,70,239,0.15)_0%,rgba(16,255,170,0.06)_40%,transparent_70%)]" />
          <img src={EGGPLANT.src} alt="" className="relative h-44 w-44 object-contain" />
        </div>

        <div className="mt-8 text-center">
          <p className="font-mono text-sm uppercase tracking-[0.5em] text-[#d946ef]/50">{COPY.subtitle}</p>
          <h1 className="mt-4 font-mono text-48 uppercase text-white md:text-72">
            {COPY.titleLine1}<br />{COPY.titleLine2}
          </h1>
          <p className="mt-6 max-w-md text-16 text-white/25 mx-auto">
            {COPY.description}
          </p>
        </div>
      </div>
    </div>
  );
}
