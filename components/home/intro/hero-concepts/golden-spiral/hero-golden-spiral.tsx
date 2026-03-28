/* Agent: Claude — Golden Spiral */

import {
  PALETTE,
  STARS,
  FIBONACCI_RECTS,
  SPIRAL_PATH_PRIMARY,
  SPIRAL_PATH_SECONDARY,
  CRESCENT_MOON,
  RINGED_PLANET,
  DISTANT_PLANET,
  EGGPLANT,
  COPY,
} from "./config";


export function HeroGoldenSpiral() {
  return (
    <div id="hero-golden-spiral" className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0c0a08]">
      {/* Star field */}
      {STARS.map((s, i) => (
        <div
          key={`star-${i}`}
          className="pointer-events-none absolute rounded-full"
          style={{ left: s.x, top: s.y, width: s.size, height: s.size, backgroundColor: s.color, opacity: s.opacity }}
        />
      ))}

      {/* Sacred geometry SVG — golden spiral with Fibonacci rectangles */}
      <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
        {/* Fibonacci rectangles */}
        {FIBONACCI_RECTS.map((r, i) => (
          <rect key={`rect-${i}`} x={r.x} y={r.y} width={r.w} height={r.h} fill="none" stroke={PALETTE.darkGold} strokeWidth={0.6 - i * 0.06} opacity={0.12 - i * 0.01} />
        ))}

        {/* Golden spiral — quarter-circle arcs */}
        <path
          d={SPIRAL_PATH_PRIMARY}
          fill="none" stroke={PALETTE.gold} strokeWidth="1.2" opacity="0.18"
        />
        <path
          d={SPIRAL_PATH_SECONDARY}
          fill="none" stroke={PALETTE.softGold} strokeWidth="0.6" opacity="0.1"
        />

        {/* Crescent moon */}
        <g transform={`translate(${CRESCENT_MOON.x}, ${CRESCENT_MOON.y})`} opacity="0.15">
          <circle cx="0" cy="0" r="18" fill="none" stroke={PALETTE.gold} strokeWidth="0.8" />
          <circle cx="6" cy="-4" r="14" fill={PALETTE.bgColor} stroke="none" />
        </g>

        {/* Planet with ring */}
        <g transform={`translate(${RINGED_PLANET.x}, ${RINGED_PLANET.y})`} opacity="0.12">
          <ellipse cx="0" cy="0" rx="30" ry="8" fill="none" stroke={PALETTE.darkGold} strokeWidth="0.7" />
          <circle cx="0" cy="0" r="12" fill="none" stroke={PALETTE.gold} strokeWidth="0.8" />
        </g>

        {/* Small distant planet */}
        <g transform={`translate(${DISTANT_PLANET.x}, ${DISTANT_PLANET.y})`} opacity="0.1">
          <circle cx="0" cy="0" r="6" fill="none" stroke={PALETTE.softGold} strokeWidth="0.6" />
          <ellipse cx="0" cy="0" rx="12" ry="3" fill="none" stroke={PALETTE.gold} strokeWidth="0.4" />
        </g>
      </svg>

      {/* Radial glow behind eggplant */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(218,165,32,0.12)_0%,rgba(200,134,14,0.04)_40%,transparent_70%)]" />

      {/* Central content */}
      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Eggplant at spiral focal point */}
        <img
          src={EGGPLANT.src}
          alt="Eggplant logo"
          className={EGGPLANT.className}
        />

        {/* Eyebrow */}
        <p className="mb-4 font-mono text-xs uppercase tracking-widest text-[#daa520]/40">
          {COPY.eyebrow}
        </p>

        {/* Title */}
        <h1 className="font-mono text-5xl font-bold uppercase leading-none tracking-tight text-[#f5e6c0] md:text-7xl">
          <span className="text-[#daa520]">{COPY.titleLine1}</span>
          <br />
          {COPY.titleLine2}
        </h1>

        {/* Subtitle */}
        <p className="mt-6 max-w-md font-mono text-sm uppercase tracking-wide text-[#c8b080]/50">
          {COPY.description}
        </p>
      </div>
    </div>
  );
}
