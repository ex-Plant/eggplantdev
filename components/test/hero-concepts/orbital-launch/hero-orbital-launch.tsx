import {
  PALETTE,
  SVG_CENTER,
  ORBITAL_RINGS,
  PLANET_DOTS,
  STARS,
  EGGPLANT,
  COPY,
} from "./config";

export function HeroOrbitalLaunch() {
  return (
    <div id="hero-orbital-launch" className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#010204]">
      {/* Orbital rings */}
      <svg className="pointer-events-none absolute inset-0 h-full w-full overflow-hidden" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
        {ORBITAL_RINGS.map((o, i) => (
          <ellipse key={i} cx={SVG_CENTER.x} cy={SVG_CENTER.y} rx={o.rx} ry={o.ry} fill="none" stroke={o.color} strokeWidth={o.w} opacity={0.15 - i * 0.02} transform={`rotate(${o.rot} ${SVG_CENTER.x} ${SVG_CENTER.y})`} />
        ))}
        {/* Orbiting planet dots */}
        {PLANET_DOTS.map((p, i) => (
          <g key={`planet-${i}`}>
            <circle cx={p.cx} cy={p.cy} r={p.r} fill={p.color} opacity={p.opacity} />
            {p.haloR > 0 && <circle cx={p.cx} cy={p.cy} r={p.haloR} fill="none" stroke={p.color} strokeWidth="0.5" opacity={p.haloOpacity} />}
          </g>
        ))}
      </svg>

      {/* Central eggplant as the sun */}
      <div className="relative z-10">
        <div className="relative">
          <img src={EGGPLANT.src} alt="" className="h-64 w-64 object-contain" />
          {/* Corona glow */}
          <div className="absolute -inset-12 rounded-full bg-[radial-gradient(circle,rgba(16,255,170,0.12),transparent_70%)]" />
        </div>
      </div>

      <div className="relative z-10 mt-10 text-center">
        <h1 className="font-mono text-48 uppercase tracking-wider text-white md:text-64">
          {COPY.titleLine1}<br /><span className="text-[#10ffaa]">{COPY.titleLine2}</span>
        </h1>
        <p className="mt-6 max-w-lg text-16 text-white/30 mx-auto">
          {COPY.description}
        </p>
      </div>

      {/* Star field */}
      {STARS.map((s, i) => (
        <div
          key={i}
          className="pointer-events-none absolute rounded-full bg-white"
          style={{
            left: s.x,
            top: s.y,
            width: s.size,
            height: s.size,
            opacity: s.opacity,
          }}
        />
      ))}
    </div>
  );
}
