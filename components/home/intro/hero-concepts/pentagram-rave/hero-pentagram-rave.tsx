/* Agent: Claude — Pentagram Rave */

import {
  PALETTE,
  OUTER_PTS,
  INNER_PTS,
  INNER2,
  starLine,
  pentagon,
  STARS,
  RADIATE,
  RITUAL_MARKS,
  EGGPLANT,
  COPY,
  SVG_VIEWBOX,
} from "./config";

export function HeroPentagramRave() {
  return (
    <div id="hero-pentagram-rave" className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#080610]">
      {/* Star field */}
      {STARS.map(([x, y, c], i) => (
        <div key={`s-${i}`} className="pointer-events-none absolute rounded-full" style={{
          left: `${x}%`, top: `${y}%`, width: i % 5 === 0 ? 2.5 : 1.5, height: i % 5 === 0 ? 2.5 : 1.5,
          backgroundColor: c, opacity: 0.08 + (i % 7) * 0.03,
        }} />
      ))}

      {/* Sacred geometry — Pentagram */}
      <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox={SVG_VIEWBOX} preserveAspectRatio="xMidYMid slice">
        {/* Outer circle */}
        <circle cx="600" cy="400" r="280" fill="none" stroke="#00e5ff" strokeWidth="0.7" opacity="0.08" />
        {/* Concentric circles */}
        <circle cx="600" cy="400" r="220" fill="none" stroke="#daa520" strokeWidth="0.5" opacity="0.1" />
        <circle cx="600" cy="400" r="160" fill="none" stroke="#ffd700" strokeWidth="0.4" opacity="0.08" strokeDasharray="4 8" />
        <circle cx="600" cy="400" r="107" fill="none" stroke="#daa520" strokeWidth="0.4" opacity="0.07" />
        {/* Outer pentagram */}
        <path d={starLine(OUTER_PTS)} fill="none" stroke="#ffd700" strokeWidth="0.8" opacity="0.14" />
        {/* Inner pentagon */}
        <path d={pentagon(INNER_PTS)} fill="none" stroke="#daa520" strokeWidth="0.5" opacity="0.1" />
        {/* Inner pentagram rotated 36° */}
        <path d={starLine(INNER2)} fill="none" stroke="#d946ef" strokeWidth="0.6" opacity="0.15" />
        {/* 5 small circles at pentagram points */}
        {OUTER_PTS.map(([cx, cy], i) => (
          <circle key={`pc-${i}`} cx={cx} cy={cy} r="6" fill="none" stroke="#ffd700" strokeWidth="0.6" opacity="0.18" />
        ))}
        {/* Radiating lines */}
        <path d={RADIATE.join(" ")} fill="none" stroke="#10ffaa" strokeWidth="0.4" opacity="0.1" />
        {/* Ritual marks — dots and crosses */}
        {RITUAL_MARKS.map(([rx, ry], i) => i % 2 === 0
          ? <circle key={`rm-${i}`} cx={rx} cy={ry} r="1.5" fill="#daa520" opacity="0.1" />
          : <path key={`rm-${i}`} d={`M${rx - 4},${ry}L${rx + 4},${ry}M${rx},${ry - 4}L${rx},${ry + 4}`} stroke="#ffd700" strokeWidth="0.4" opacity="0.08" />
        )}
      </svg>

      {/* Radial glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[460px] w-[460px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(217,70,239,0.1)_0%,rgba(218,165,32,0.06)_40%,transparent_70%)]" />

      {/* Central content */}
      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Eggplant */}
        <img src={EGGPLANT.src} alt="" className="h-44 w-44 object-contain saturate-[0.7] sepia-[0.2] drop-shadow-[0_0_30px_rgba(217,70,239,0.25)]" />

        {/* Eyebrow */}
        <p className="mt-10 font-mono text-12 uppercase tracking-widest text-[#d946ef]/30">
          {COPY.eyebrow}
        </p>

        {/* Title */}
        <h1 className="mt-4 font-mono text-48 uppercase leading-none md:text-72">
          <span className="text-[#ffd700]">{COPY.titleLine1}</span>
          <br />
          <span className="text-[#d946ef]/70">{COPY.titleLine2}</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 max-w-sm font-mono text-14 text-[#c8b080]/45">
          {COPY.description}
        </p>
      </div>
    </div>
  );
}
