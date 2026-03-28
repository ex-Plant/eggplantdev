/* Agent: Codex — Rose Window Reliquary */

import {
  PALETTE,
  ROSE_PETALS,
  ROSE_STARS,
  CORNER_PATHS,
  DECORATIVE,
  EGGPLANT,
  COPY,
  SVG_VIEWBOX,
} from "./config";

export function HeroRoseWindowReliquary() {
  return (
    <div id="hero-rose-window-reliquary" className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0c0a08]">
      {ROSE_STARS.map((star, i) => (
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
          <path key={`corner-${i}`} d={d} fill="none" stroke="#daa520" strokeWidth="1" opacity="0.14" />
        ))}

        <circle cx="600" cy="400" r="220" fill="none" stroke="#daa520" strokeWidth="1.2" opacity="0.16" />
        <circle cx="600" cy="400" r="170" fill="none" stroke="#c8860e" strokeWidth="0.8" opacity="0.12" />
        <circle cx="600" cy="400" r="94" fill="none" stroke="#f0c040" strokeWidth="1" opacity="0.16" />

        {ROSE_PETALS.map((petal, i) => (
          <g key={`petal-${i}`}>
            <circle cx={petal.cx} cy={petal.cy} r="74" fill="none" stroke={i % 2 === 0 ? "#daa520" : "#c8860e"} strokeWidth="0.9" opacity="0.12" />
            <line x1="600" y1="400" x2={petal.cx} y2={petal.cy} stroke="#f5e6c0" strokeWidth="0.35" opacity="0.08" />
          </g>
        ))}

        {Array.from({ length: 8 }, (_, i) => {
          const angle = (Math.PI * 2 * i) / 8 - Math.PI / 2;
          const x1 = 600 + 28 * Math.cos(angle);
          const y1 = 400 + 28 * Math.sin(angle);
          const x2 = 600 + 300 * Math.cos(angle);
          const y2 = 400 + 300 * Math.sin(angle);
          return <line key={`ray-${i}`} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#daa520" strokeWidth="0.6" opacity="0.08" />;
        })}

        <circle cx={DECORATIVE.planet.cx} cy={DECORATIVE.planet.cy} r={DECORATIVE.planet.r} fill="none" stroke="#8fa6b0" strokeWidth="1" opacity="0.18" />
        <ellipse cx={DECORATIVE.planet.cx} cy={DECORATIVE.planet.cy} rx={DECORATIVE.planet.ringRx} ry={DECORATIVE.planet.ringRy} fill="none" stroke="#8fa6b0" strokeWidth="0.5" opacity="0.14" />
        <circle cx={DECORATIVE.moon.cx} cy={DECORATIVE.moon.cy} r={DECORATIVE.moon.r} fill="none" stroke="#f5e6c0" strokeWidth="1" opacity="0.16" />
        <circle cx={DECORATIVE.moon.shadowCx} cy={DECORATIVE.moon.shadowCy} r={DECORATIVE.moon.shadowR} fill={PALETTE.bgColor} />
        <polygon points={DECORATIVE.starDecor} fill="none" stroke="#f0c040" strokeWidth="0.7" opacity="0.12" />
        <polygon points={DECORATIVE.diamond} fill="none" stroke="#c8860e" strokeWidth="0.8" opacity="0.1" />
      </svg>

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(240,192,64,0.08)_0%,rgba(218,165,32,0.06)_36%,transparent_70%)]" />

      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        <p className="font-mono text-[11px] uppercase tracking-[0.48em] text-[#daa520]/38">{COPY.eyebrow}</p>
        <div className="relative my-8">
          <div className="absolute -inset-16 rounded-full bg-[radial-gradient(circle,rgba(245,230,192,0.08)_0%,transparent_65%)]" />
          <img src={EGGPLANT.src} alt="" className="relative h-52 w-52 object-contain" style={{ filter: EGGPLANT.filter }} />
        </div>
        <h1 className="font-mono text-48 uppercase leading-none text-[#f5e6c0] md:text-72">
          {COPY.titleLine1}
          <br />
          <span className="text-[#daa520]">{COPY.titleLine2}</span>
        </h1>
        <p className="mt-6 max-w-xl text-16 text-[#c8b080]/50">
          {COPY.description}
        </p>
      </div>
    </div>
  );
}
