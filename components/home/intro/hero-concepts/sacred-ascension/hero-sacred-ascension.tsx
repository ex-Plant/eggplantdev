import {
  PALETTE,
  SVG_CENTER,
  METATRON_CIRCLES,
  METATRON_LINES,
  OUTER_CIRCLES,
  STAR_PARTICLES,
  EGGPLANT,
  COPY,
} from "./config";

export function HeroSacredAscension() {
  return (
    <div id="hero-sacred-ascension" className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#020204]">
      {/* Sacred geometry background */}
      <svg className="pointer-events-none absolute inset-0 h-full w-full overflow-hidden" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
        {/* Metatron's cube */}
        {METATRON_CIRCLES.map(([cx, cy], i) => (
          <circle key={`mc-${i}`} cx={cx} cy={cy} r={100} fill="none" stroke={PALETTE.neonGreen} strokeWidth="0.4" opacity="0.12" />
        ))}
        {/* Connecting lines */}
        {METATRON_LINES.map((d, i) => (
          <path key={`line-${i}`} d={d} fill="none" stroke={PALETTE.neonGreen} strokeWidth="0.5" opacity="0.08" />
        ))}
        {/* Outer containing circles */}
        {OUTER_CIRCLES.map((circle) => (
          <circle key={circle.r} cx={SVG_CENTER.x} cy={SVG_CENTER.y} r={circle.r} fill="none" stroke={circle.stroke} strokeWidth={circle.strokeWidth} opacity={circle.opacity} strokeDasharray={circle.dasharray} />
        ))}
      </svg>

      {/* Radial glow behind eggplant */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(16,255,170,0.1)_0%,rgba(57,255,20,0.04)_40%,transparent_70%)]" />

      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Eggplant */}
        <div className="relative">
          <img src={EGGPLANT.src} alt="" className="h-48 w-48 object-contain" />
          {/* Halo ring */}
          <div className="absolute -inset-8 rounded-full border border-[#10ffaa]/15" />
          <div className="absolute -inset-16 rounded-full border border-[#10ffaa]/8" />
          <div className="absolute -inset-24 rounded-full border border-[#10ffaa]/4 border-dashed" />
        </div>

        <h1 className="mt-12 font-mono text-20 uppercase tracking-[0.4em] text-[#10ffaa]/60">
          {COPY.title}
        </h1>
        <p className="mt-4 max-w-md text-16 text-white/30">
          {COPY.description}
        </p>
      </div>

      {/* Star particles */}
      {STAR_PARTICLES.map(([x, y], i) => (
        <div
          key={i}
          className="pointer-events-none absolute rounded-full bg-white"
          style={{
            left: `${x}%`,
            top: `${y}%`,
            width: i % 3 === 0 ? 3 : 1.5,
            height: i % 3 === 0 ? 3 : 1.5,
            opacity: 0.15 + (i % 4) * 0.1,
          }}
        />
      ))}
    </div>
  );
}
