/* Agent: Claude — Zodiac Astrolabe */

import {
  PALETTE,
  ZODIAC_SIGNS,
  SVG_CENTER,
  STAR_COUNT,
  RING_RADII,
  CARDINAL_DEGREES,
  SATURN,
  ECLIPSE,
  CRESCENT_PATH,
  EGGPLANT,
  COPY,
} from "./config";

export function HeroZodiacAstrolabe() {
  return (
    <div id="hero-zodiac-astrolabe" className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0c0a08]">
      {/* Star field */}
      <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
        {Array.from({ length: STAR_COUNT }, (_, i) => (
          <circle key={`star-${i}`} cx={(i * 23 + 11) % 1200} cy={(i * 41 + 7) % 800} r={i % 8 === 0 ? 1.4 : 0.6} fill={i % 3 === 0 ? PALETTE.gold : PALETTE.starBase} opacity={0.03 + (i % 6) * 0.015} />
        ))}

        {/* Concentric graduated rings */}
        {RING_RADII.map((r, i) => (
          <g key={`ring-${i}`}>
            <circle cx={SVG_CENTER.x} cy={SVG_CENTER.y} r={r} fill="none" stroke={i % 2 === 0 ? PALETTE.gold : PALETTE.darkGold} strokeWidth={i === 0 ? 1.2 : 0.5} opacity={0.15 - i * 0.025} strokeDasharray={i === 3 ? "1 5" : "none"} />
            {/* Degree tick marks */}
            {Array.from({ length: i === 0 ? 36 : i === 1 ? 24 : 12 }, (_, j) => {
              const count = i === 0 ? 36 : i === 1 ? 24 : 12;
              const a = (Math.PI * 2 * j) / count;
              const len = j % (count / 4) === 0 ? 8 : 4;
              return <line key={`t-${i}-${j}`} x1={SVG_CENTER.x + (r - len) * Math.cos(a)} y1={SVG_CENTER.y + (r - len) * Math.sin(a)} x2={SVG_CENTER.x + (r + len) * Math.cos(a)} y2={SVG_CENTER.y + (r + len) * Math.sin(a)} stroke={PALETTE.gold} strokeWidth={j % (count / 4) === 0 ? 0.8 : 0.3} opacity={0.12} />;
            })}
          </g>
        ))}

        {/* 12 radial zodiac house lines */}
        {Array.from({ length: 12 }, (_, i) => {
          const a = (Math.PI * 2 * i) / 12;
          return (
            <g key={`house-${i}`}>
              <line x1={SVG_CENTER.x + 90 * Math.cos(a)} y1={SVG_CENTER.y + 90 * Math.sin(a)} x2={SVG_CENTER.x + 300 * Math.cos(a)} y2={SVG_CENTER.y + 300 * Math.sin(a)} stroke={PALETTE.darkGold} strokeWidth="0.4" opacity="0.1" />
              {/* Zodiac sign labels */}
              <text x={SVG_CENTER.x + 260 * Math.cos(a + Math.PI / 12)} y={SVG_CENTER.y + 260 * Math.sin(a + Math.PI / 12)} textAnchor="middle" dominantBaseline="central" fill={PALETTE.gold} fontSize="11" opacity="0.12">{ZODIAC_SIGNS[i]}</text>
            </g>
          );
        })}

        {/* Cardinal decorative marks */}
        {CARDINAL_DEGREES.map((deg) => {
          const a = (deg * Math.PI) / 180;
          return <circle key={`card-${deg}`} cx={SVG_CENTER.x + 150 * Math.cos(a)} cy={SVG_CENTER.y + 150 * Math.sin(a)} r="3" fill="none" stroke={PALETTE.softGold} strokeWidth="0.8" opacity="0.15" />;
        })}

        {/* Saturn — ringed planet, top-right */}
        <circle cx={SATURN.cx} cy={SATURN.cy} r={SATURN.r} fill={PALETTE.gold} opacity="0.08" />
        <ellipse cx={SATURN.cx} cy={SATURN.cy} rx={SATURN.ringRx} ry={SATURN.ringRy} fill="none" stroke={PALETTE.gold} strokeWidth="0.6" opacity="0.12" />

        {/* Eclipse — overlapping circles, bottom-left */}
        <circle cx={ECLIPSE.cx1} cy={ECLIPSE.cy} r={ECLIPSE.r} fill={PALETTE.bgColor} stroke={PALETTE.softGold} strokeWidth="0.6" opacity="0.15" />
        <circle cx={ECLIPSE.cx2} cy={ECLIPSE.cy} r={ECLIPSE.r} fill="none" stroke={PALETTE.darkGold} strokeWidth="0.5" opacity="0.1" />

        {/* Crescent moon, left edge */}
        <path d={CRESCENT_PATH} fill={PALETTE.gold} opacity="0.1" />
      </svg>

      {/* Central content */}
      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Radial glow behind eggplant */}
        <div className="absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#daa520]/5 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f0c040]/8 blur-2xl" />

        <img src={EGGPLANT.src} alt="" className="relative h-48 w-48 object-contain" style={{ filter: EGGPLANT.filter }} />

        {/* Eyebrow */}
        <div className="mt-6 flex items-center gap-3">
          <div className="h-px w-10 bg-[#daa520]/15" />
          <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-[#daa520]/40">{COPY.eyebrow}</span>
          <div className="h-px w-10 bg-[#daa520]/15" />
        </div>

        {/* Title */}
        <h1 className="mt-4 font-mono text-48 uppercase text-[#f5e6c0] md:text-72">
          {COPY.titleLine1}<br /><span className="text-[#daa520]">{COPY.titleLine2}</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 max-w-md font-mono text-14 text-[#c8b080]/50">
          {COPY.description}
        </p>
      </div>
    </div>
  );
}
