/* Agent: Codex — Compass Sanctum */

import {
  PALETTE,
  COMPASS_STARS,
  compassPoint,
  COMPASS_ANGLES,
  CORNER_PATHS,
  DECORATIVE,
  EGGPLANT,
  COPY,
  SVG_VIEWBOX,
} from "./config";

export function HeroCompassSanctum() {
  return (
    <div id="hero-compass-sanctum" className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0c0a08]">
      {COMPASS_STARS.map((star, i) => (
        <div
          key={`star-${i}`}
          className="pointer-events-none absolute rounded-full"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: star.size,
            height: star.size,
            backgroundColor: star.color,
            opacity: star.opacity,
          }}
        />
      ))}

      <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox={SVG_VIEWBOX} preserveAspectRatio="xMidYMid slice">
        {CORNER_PATHS.map((d, i) => (
          <path key={`corner-${i}`} d={d} fill="none" stroke="#daa520" strokeWidth="0.9" opacity="0.14" />
        ))}

        <circle cx="600" cy="400" r="210" fill="none" stroke="#daa520" strokeWidth="1.2" opacity="0.14" />
        <circle cx="600" cy="400" r="152" fill="none" stroke="#c8860e" strokeWidth="0.8" opacity="0.12" />
        <circle cx="600" cy="400" r="96" fill="none" stroke="#f5e6c0" strokeWidth="0.7" opacity="0.1" />

        {COMPASS_ANGLES.map((angle, i) => (
          <polygon key={`point-${angle}`} points={compassPoint(i % 2 === 0 ? 198 : 160, i % 2 === 0 ? 92 : 76, angle - 90)} fill="none" stroke={i % 2 === 0 ? "#f0c040" : "#daa520"} strokeWidth={i % 2 === 0 ? 1 : 0.8} opacity={i % 2 === 0 ? 0.16 : 0.12} />
        ))}

        <line x1="600" y1="142" x2="600" y2="658" stroke="#daa520" strokeWidth="0.45" opacity="0.1" />
        <line x1="342" y1="400" x2="858" y2="400" stroke="#daa520" strokeWidth="0.45" opacity="0.1" />
        <line x1="418" y1="218" x2="782" y2="582" stroke="#c8860e" strokeWidth="0.35" opacity="0.08" />
        <line x1="418" y1="582" x2="782" y2="218" stroke="#c8860e" strokeWidth="0.35" opacity="0.08" />

        <text x="600" y="162" textAnchor="middle" fill="#daa520" fontSize="11" fontFamily="monospace" opacity="0.24">N</text>
        <text x="842" y="404" textAnchor="middle" fill="#daa520" fontSize="11" fontFamily="monospace" opacity="0.24">E</text>
        <text x="600" y="648" textAnchor="middle" fill="#daa520" fontSize="11" fontFamily="monospace" opacity="0.24">S</text>
        <text x="358" y="404" textAnchor="middle" fill="#daa520" fontSize="11" fontFamily="monospace" opacity="0.24">W</text>

        <circle cx={DECORATIVE.planet.cx} cy={DECORATIVE.planet.cy} r={DECORATIVE.planet.r} fill="none" stroke="#8fa6b0" strokeWidth="0.9" opacity="0.18" />
        <ellipse cx={DECORATIVE.planet.cx} cy={DECORATIVE.planet.cy} rx={DECORATIVE.planet.ringRx} ry={DECORATIVE.planet.ringRy} fill="none" stroke="#8fa6b0" strokeWidth="0.45" opacity="0.13" />
        <circle cx={DECORATIVE.moon.cx} cy={DECORATIVE.moon.cy} r={DECORATIVE.moon.r} fill="none" stroke="#f5e6c0" strokeWidth="0.9" opacity="0.16" />
        <circle cx={DECORATIVE.moon.shadowCx} cy={DECORATIVE.moon.shadowCy} r={DECORATIVE.moon.shadowR} fill={PALETTE.bgColor} />
      </svg>

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(218,165,32,0.08)_0%,rgba(200,134,14,0.05)_38%,transparent_72%)]" />

      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        <p className="font-mono text-[11px] uppercase tracking-[0.48em] text-[#daa520]/36">{COPY.eyebrow}</p>
        <div className="relative my-8">
          <div className="absolute -inset-14 rounded-full bg-[radial-gradient(circle,rgba(240,192,64,0.08)_0%,transparent_62%)]" />
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
