/* Agent: Claude — Flower of Life */

import {
  PALETTE,
  STROKES,
  R,
  CX,
  CY,
  ALL_CIRCLES,
  STAR_FIELD,
  TINY_STARS,
  EGGPLANT_SRC,
  COPY,
} from "./config";

export function HeroFlowerOfLife() {
  return (
    <div id="hero-flower-of-life" className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0c0a08]">
      {/* Star field */}
      {STAR_FIELD.map(([x, y], i) => (
        <div
          key={`s-${i}`}
          className="pointer-events-none absolute rounded-full"
          style={{
            left: `${x}%`,
            top: `${y}%`,
            width: i % 5 === 0 ? 2.5 : 1.5,
            height: i % 5 === 0 ? 2.5 : 1.5,
            backgroundColor: i % 3 === 0 ? PALETTE.gold : PALETTE.starBase,
            opacity: 0.12 + (i % 5) * 0.06,
          }}
        />
      ))}

      {/* Sacred geometry — Flower of Life */}
      <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
        {/* 19 overlapping circles */}
        {ALL_CIRCLES.map(([cx, cy], i) => (
          <circle key={`c-${i}`} cx={cx} cy={cy} r={R} fill="none" stroke={STROKES[i % 3]} strokeWidth="0.6" opacity={0.08 + (i % 3) * 0.05} />
        ))}
        {/* Bounding circles */}
        <circle cx={CX} cy={CY} r={R * 2.8} fill="none" stroke={PALETTE.gold} strokeWidth="0.4" opacity="0.1" />
        <circle cx={CX} cy={CY} r={R * 3.2} fill="none" stroke={PALETTE.darkGold} strokeWidth="0.3" opacity="0.06" strokeDasharray="6 10" />
        {/* Tiny 4-point stars */}
        {TINY_STARS.map(([sx, sy], i) => (
          <path key={`ts-${i}`} d={`M${sx},${sy - 6}L${sx + 1.5},${sy}L${sx},${sy + 6}L${sx - 1.5},${sy}Z M${sx - 6},${sy}L${sx},${sy + 1.5}L${sx + 6},${sy}L${sx},${sy - 1.5}Z`} fill={PALETTE.softGold} opacity={0.1 + (i % 3) * 0.04} />
        ))}
      </svg>

      {/* Radial glow behind eggplant */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(218,165,32,0.14)_0%,rgba(200,134,14,0.05)_40%,transparent_70%)]" />

      {/* Central content */}
      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Eggplant */}
        <img
          src={EGGPLANT_SRC}
          alt=""
          className="h-48 w-48 object-contain saturate-[0.6] sepia-[0.3]"
        />

        {/* Eyebrow */}
        <p className="mt-10 font-mono text-12 uppercase tracking-widest text-[#daa520]/40">
          {COPY.eyebrow}
        </p>

        {/* Title */}
        <h1 className="mt-4 font-mono text-48 uppercase leading-none text-[#f5e6c0] md:text-72">
          <span className="text-[#daa520]">{COPY.titleLine1}</span>
          <br />
          {COPY.titleLine2}
        </h1>

        {/* Subtitle */}
        <p className="mt-6 max-w-sm font-mono text-14 text-[#c8b080]/50">
          {COPY.description}
        </p>
      </div>
    </div>
  );
}
