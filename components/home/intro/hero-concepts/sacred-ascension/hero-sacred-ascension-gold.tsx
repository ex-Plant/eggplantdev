/* Agent: Claude — Sacred Ascension Gold */

import {
  PALETTE_GOLD,
  SVG_CENTER,
  METATRON_CIRCLES,
  METATRON_LINES,
  OUTER_CIRCLES_GOLD,
  STAR_PARTICLES,
  EGGPLANT,
  COPY,
} from "./config-gold";

export function HeroSacredAscensionGold() {
  return (
    <div id="hero-sacred-ascension-gold" className="relative flex min-h-screen items-center justify-center overflow-hidden" style={{ backgroundColor: PALETTE_GOLD.bgColor }}>
      {/* Sacred geometry background */}
      <svg className="pointer-events-none absolute inset-0 h-full w-full overflow-hidden" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
        {/* Metatron's cube */}
        {METATRON_CIRCLES.map(([cx, cy], i) => (
          <circle key={`mc-${i}`} cx={cx} cy={cy} r={100} fill="none" stroke={PALETTE_GOLD.gold} strokeWidth="0.4" opacity="0.15" />
        ))}
        {/* Connecting lines */}
        {METATRON_LINES.map((d, i) => (
          <path key={`line-${i}`} d={d} fill="none" stroke={PALETTE_GOLD.warmGold} strokeWidth="0.5" opacity="0.1" />
        ))}
        {/* Outer containing circles */}
        {OUTER_CIRCLES_GOLD.map((circle) => (
          <circle key={circle.r} cx={SVG_CENTER.x} cy={SVG_CENTER.y} r={circle.r} fill="none" stroke={circle.stroke} strokeWidth={circle.strokeWidth} opacity={circle.opacity} strokeDasharray={circle.dasharray} />
        ))}
      </svg>

      {/* Radial glow behind eggplant — warm amber */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full" style={{ background: `radial-gradient(circle, rgba(218,165,32,0.12) 0%, rgba(240,192,64,0.05) 40%, transparent 70%)` }} />

      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Eggplant */}
        <div className="relative">
          <img src={EGGPLANT.src} alt="" className="h-48 w-48 object-contain" style={{ filter: EGGPLANT.filter }} />
          {/* Halo rings — gold */}
          <div className="absolute -inset-8 rounded-full" style={{ border: `1px solid rgba(218,165,32,0.15)` }} />
          <div className="absolute -inset-16 rounded-full" style={{ border: `1px solid rgba(218,165,32,0.08)` }} />
          <div className="absolute -inset-24 rounded-full border-dashed" style={{ border: `1px dashed rgba(200,134,14,0.06)` }} />
        </div>

        <h1 className="mt-12 font-mono text-20 uppercase tracking-[0.4em]" style={{ color: `${PALETTE_GOLD.cream}99` }}>
          {COPY.title}
        </h1>
        <p className="mt-4 max-w-md text-16" style={{ color: `${PALETTE_GOLD.mutedGold}66` }}>
          {COPY.description}
        </p>
      </div>

      {/* Star particles — warm tint */}
      {STAR_PARTICLES.map(([x, y], i) => (
        <div
          key={i}
          className="pointer-events-none absolute rounded-full"
          style={{
            left: `${x}%`,
            top: `${y}%`,
            width: i % 3 === 0 ? 3 : 1.5,
            height: i % 3 === 0 ? 3 : 1.5,
            opacity: 0.12 + (i % 4) * 0.08,
            backgroundColor: i % 2 === 0 ? PALETTE_GOLD.cream : PALETTE_GOLD.warmGold,
          }}
        />
      ))}
    </div>
  );
}
