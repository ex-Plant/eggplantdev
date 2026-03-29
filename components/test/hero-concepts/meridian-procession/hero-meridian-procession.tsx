/* Agent: Codex — Meridian Procession */

import {
  PALETTE,
  PROCESSION_STARS,
  MEDALLIONS,
  MERIDIAN_CURVES,
  DECORATIVE,
  EGGPLANT,
  COPY,
  SVG_VIEWBOX,
} from "./config";

export function HeroMeridianProcession() {
  return (
    <div id="hero-meridian-procession" className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0b0907]">
      {PROCESSION_STARS.map((star, i) => (
        <div
          key={`star-${i}`}
          className="pointer-events-none absolute rounded-full bg-[#f5e6c0]"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: star.size,
            height: star.size,
            opacity: star.opacity,
          }}
        />
      ))}

      <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox={SVG_VIEWBOX} preserveAspectRatio="xMidYMid slice">
        <line x1="600" y1="40" x2="600" y2="760" stroke="#daa520" strokeWidth="1" opacity="0.14" />
        <line x1="564" y1="40" x2="564" y2="760" stroke="#c8860e" strokeWidth="0.45" opacity="0.1" />
        <line x1="636" y1="40" x2="636" y2="760" stroke="#c8860e" strokeWidth="0.45" opacity="0.1" />

        {MEDALLIONS.map((medallion, i) => (
          <g key={`medallion-${i}`}>
            <circle cx="600" cy={medallion.cy} r={medallion.r} fill="none" stroke={medallion.stroke} strokeWidth={i === 2 ? 1.2 : 0.9} opacity={medallion.opacity} />
            <circle cx="600" cy={medallion.cy} r={medallion.r * 0.62} fill="none" stroke="#daa520" strokeWidth="0.5" opacity={medallion.opacity * 0.75} />
          </g>
        ))}

        {MERIDIAN_CURVES.map((d, i) => (
          <path key={`curve-${i}`} d={d} fill="none" stroke={i < 2 ? "#f0c040" : "#daa520"} strokeWidth="0.7" opacity={i < 2 ? 0.12 : 0.1} />
        ))}

        <circle cx={DECORATIVE.planet.cx} cy={DECORATIVE.planet.cy} r={DECORATIVE.planet.r} fill="none" stroke="#8fa6b0" strokeWidth="0.9" opacity="0.18" />
        <ellipse cx={DECORATIVE.planet.cx} cy={DECORATIVE.planet.cy} rx={DECORATIVE.planet.ringRx} ry={DECORATIVE.planet.ringRy} fill="none" stroke="#8fa6b0" strokeWidth="0.45" opacity="0.12" />
        <circle cx={DECORATIVE.moon.cx} cy={DECORATIVE.moon.cy} r={DECORATIVE.moon.r} fill="none" stroke="#f5e6c0" strokeWidth="0.8" opacity="0.16" />
        <circle cx={DECORATIVE.moon.shadowCx} cy={DECORATIVE.moon.shadowCy} r={DECORATIVE.moon.shadowR} fill={PALETTE.bgColor} />

        <polygon points={DECORATIVE.arrowTop} fill="none" stroke="#f0c040" strokeWidth="0.7" opacity="0.18" />
        <polygon points={DECORATIVE.arrowBottom} fill="none" stroke="#f0c040" strokeWidth="0.7" opacity="0.18" />
        <polygon points={DECORATIVE.diamondLeft} fill="none" stroke="#c8860e" strokeWidth="0.7" opacity="0.1" />
        <polygon points={DECORATIVE.diamondRight} fill="none" stroke="#c8860e" strokeWidth="0.7" opacity="0.1" />
      </svg>

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[560px] w-[260px] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(ellipse,rgba(218,165,32,0.12)_0%,rgba(240,192,64,0.06)_38%,transparent_74%)]" />

      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        <p className="font-mono text-[11px] uppercase tracking-[0.5em] text-[#daa520]/36">{COPY.eyebrow}</p>
        <div className="relative my-8">
          <div className="absolute -inset-12 rounded-full bg-[radial-gradient(circle,rgba(245,230,192,0.08)_0%,transparent_68%)]" />
          <img src={EGGPLANT.src} alt="" className="relative h-52 w-52 object-contain" style={{ filter: EGGPLANT.filter }} />
        </div>
        <h1 className="font-mono text-48 uppercase leading-none text-[#f5e6c0] md:text-72">
          {COPY.titleLine1}
          <br />
          <span className="text-[#daa520]">{COPY.titleLine2}</span>
        </h1>
        <p className="mt-6 max-w-lg text-16 text-[#c8b080]/48">
          {COPY.description}
        </p>
      </div>
    </div>
  );
}
