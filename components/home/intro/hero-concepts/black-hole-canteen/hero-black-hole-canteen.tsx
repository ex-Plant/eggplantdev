import {
  PALETTE,
  DISK_ELLIPSES,
  CENTER_CIRCLES,
  EGGPLANT,
  COPY,
  SVG_CENTER,
  SVG_VIEWBOX,
} from "./config";

export function HeroBlackHoleCanteen() {
  return (
    <div id="hero-blackhole-canteen" className="relative flex min-h-screen items-center justify-center overflow-hidden" style={{ backgroundColor: PALETTE.bg }}>
      {/* Accretion disk */}
      <svg className="pointer-events-none absolute inset-0 h-full w-full overflow-hidden" viewBox={SVG_VIEWBOX} preserveAspectRatio="xMidYMid slice">
        {DISK_ELLIPSES.map((disk, i) => (
          <ellipse key={i} cx={SVG_CENTER.x} cy={SVG_CENTER.y} rx={disk.rx} ry={disk.ry} fill="none" stroke={disk.stroke} strokeWidth={disk.strokeWidth} opacity={disk.opacity} transform={`rotate(${disk.rotation} ${SVG_CENTER.x} ${SVG_CENTER.y})`} />
        ))}
        {CENTER_CIRCLES.map((c, i) => (
          <circle key={i} cx={SVG_CENTER.x} cy={SVG_CENTER.y} r={c.r} fill={c.fill} stroke={c.stroke} strokeWidth={c.strokeWidth} opacity={c.opacity} />
        ))}
      </svg>
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(16,255,170,0.06)_0%,rgba(217,70,239,0.04)_50%,transparent_80%)]" />

      <div className="relative z-10 flex flex-col items-center text-center">
        <img src={EGGPLANT.src} alt="" className="h-36 w-36 object-contain" />
        <h1 className="mt-10 font-mono text-48 uppercase text-white md:text-64">
          {COPY.titleLine1}<br /><span style={{ color: PALETTE.neonGreen }}>{COPY.titleLine2}</span>
        </h1>
        <p className="mt-6 max-w-lg text-16 text-white/25 mx-auto">
          {COPY.description}
        </p>
        <div className="mt-8 font-mono text-sm uppercase tracking-[0.3em]" style={{ color: `${PALETTE.fuchsia}66` }}>
          {COPY.tagline}
        </div>
      </div>
    </div>
  );
}
