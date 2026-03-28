/* Agent: Claude — Versailles Orbital */

import {
  PALETTE,
  ORBITS,
  STAR_COUNT,
  CORNERS,
  TICK_COUNT,
  TICK_Y_START,
  TICK_Y_STEP,
  SVG_CENTER,
  EGGPLANT,
  COPY,
} from "./config";

export function HeroVersaillesOrbital() {
  return (
    <div id="hero-versailles-orbital" className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0a0806]">
      {/* Star field */}
      {Array.from({ length: STAR_COUNT }, (_, i) => (
        <div key={`s-${i}`} className="absolute rounded-full" style={{
          left: `${(i * 19 + 7) % 100}%`, top: `${(i * 37 + 13) % 100}%`,
          width: i % 7 === 0 ? 2.5 : 1, height: i % 7 === 0 ? 2.5 : 1,
          background: i % 3 === 0 ? PALETTE.brightGold : i % 3 === 1 ? PALETTE.gold : PALETTE.cream,
          opacity: 0.04 + (i % 5) * 0.018,
        }} />
      ))}

      {/* Sacred geometry SVG */}
      <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
        {/* Art deco double-line corner frames */}
        {CORNERS.map(([x, y, r]) => (
          <g key={`c-${r}`} transform={`translate(${x},${y}) rotate(${r})`}>
            <path d="M 0 40 L 0 0 L 40 0" fill="none" stroke={PALETTE.brightGold} strokeWidth="0.8" opacity="0.12" />
            <path d="M 0 50 L 0 -10 L 50 -10" fill="none" stroke={PALETTE.gold} strokeWidth="0.4" opacity="0.08" />
          </g>
        ))}

        {/* Bilateral symmetry axes */}
        <line x1={SVG_CENTER.x} y1="100" x2={SVG_CENTER.x} y2="700" stroke={PALETTE.darkGold} strokeWidth="0.4" opacity="0.1" />
        <line x1="200" y1={SVG_CENTER.y} x2="1000" y2={SVG_CENTER.y} stroke={PALETTE.darkGold} strokeWidth="0.4" opacity="0.1" />

        {/* Tick marks along vertical axis */}
        {Array.from({ length: TICK_COUNT }, (_, i) => {
          const y = TICK_Y_START + i * TICK_Y_STEP;
          const w = i % 5 === 0 ? 8 : 3;
          return <line key={`tk-${i}`} x1={SVG_CENTER.x - w} y1={y} x2={SVG_CENTER.x + w} y2={y} stroke={PALETTE.gold} strokeWidth={i % 5 === 0 ? 0.7 : 0.3} opacity="0.1" />;
        })}

        {/* Decorative scroll curves at axis intersection (Versailles ironwork) */}
        {[1, -1].map((sx) => [1, -1].map((sy) => (
          <path key={`sc-${sx}-${sy}`} d={`M ${SVG_CENTER.x + sx * 8} ${SVG_CENTER.y} Q ${SVG_CENTER.x + sx * 20} ${SVG_CENTER.y + sy * 20} ${SVG_CENTER.x} ${SVG_CENTER.y + sy * 8}`} fill="none" stroke={PALETTE.brightGold} strokeWidth="0.6" opacity="0.15" />
        )))}

        {/* Orbital ellipses with planetary bodies */}
        {ORBITS.map(({ rx, ry, stroke, bodies }, i) => (
          <g key={`orb-${i}`}>
            <ellipse cx={SVG_CENTER.x} cy={SVG_CENTER.y} rx={rx} ry={ry} fill="none" stroke={stroke} strokeWidth={0.5} opacity={0.12 - i * 0.02} />
            {bodies.map((a, j) => {
              const rad = a;
              return <circle key={`p-${i}-${j}`} cx={SVG_CENTER.x + rx * Math.cos(rad)} cy={SVG_CENTER.y + ry * Math.sin(rad)} r={j === 0 ? 3 : 2} fill={stroke} opacity={0.15} />;
            })}
          </g>
        ))}
      </svg>

      {/* Central content */}
      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Golden radial glow */}
        <div className="absolute top-1/2 left-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#daa520]/5 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ffd700]/8 blur-2xl" />

        {/* Central eggplant */}
        <img src={EGGPLANT.src} alt="" className="relative h-48 w-48 object-contain" style={{ filter: EGGPLANT.filter }} />

        {/* Eyebrow */}
        <div className="mt-6 flex items-center gap-3">
          <div className="h-px w-12 bg-[#ffd700]/15" />
          <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-[#ffd700]/35">{COPY.eyebrow}</span>
          <div className="h-px w-12 bg-[#ffd700]/15" />
        </div>

        {/* Title */}
        <h1 className="mt-4 font-mono text-48 uppercase text-[#f5e6c0] md:text-72">
          {COPY.titleLine1}<br /><span className="text-[#ffd700]">{COPY.titleLine2}</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 max-w-md font-mono text-14 text-[#c8b080]/45">
          {COPY.description}
        </p>
      </div>
    </div>
  );
}
