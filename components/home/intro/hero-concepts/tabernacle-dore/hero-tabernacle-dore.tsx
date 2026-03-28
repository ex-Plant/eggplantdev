/* Agent: Claude — Tabernacle Dore */

import {
  PALETTE,
  SEPHIROT,
  PATHS,
  STARS,
  PILLAR_STARS,
  ARCH_OUTER,
  ARCH_INNER,
  EGGPLANT,
  COPY,
} from "./config";

export function HeroTabernacleDore() {
  return (
    <div id="hero-tabernacle-dore" className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0a0806]">
      {/* Star field */}
      {STARS.map((s, i) => (
        <div key={i} className="absolute rounded-full" style={{ left: s.x, top: s.y, width: s.size, height: s.size, backgroundColor: s.color, opacity: s.opacity }} />
      ))}

      {/* Golden radial glow at Keter */}
      <div className="pointer-events-none absolute left-1/2 top-[18%] h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(255,215,0,0.12)_0%,rgba(218,165,32,0.04)_40%,transparent_70%)]" />

      <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 800 780" preserveAspectRatio="xMidYMid meet">
        {/* Pointed arch enclosure */}
        <path d={ARCH_OUTER} fill="none" stroke={PALETTE.gold} strokeWidth="1" opacity="0.14" />
        <path d={ARCH_INNER} fill="none" stroke={PALETTE.brightGold} strokeWidth="0.5" opacity="0.08" />

        {/* 22 paths */}
        {PATHS.map(([a, b], i) => (
          <line key={`p-${i}`} x1={SEPHIROT[a].cx} y1={SEPHIROT[a].cy} x2={SEPHIROT[b].cx} y2={SEPHIROT[b].cy} stroke={[PALETTE.brightGold, PALETTE.gold, PALETTE.darkGold][i % 3]} strokeWidth="0.6" opacity={0.1 + (i % 3) * 0.04} />
        ))}

        {/* 10 sephirot circles */}
        {SEPHIROT.map((s, i) => (
          <g key={s.name}>
            <circle cx={s.cx} cy={s.cy} r={i === 0 ? 22 : 14} fill="none" stroke={PALETTE.brightGold} strokeWidth={i === 0 ? 1.2 : 0.8} opacity={i === 0 ? 0.22 : 0.15} />
            {i !== 0 && <circle cx={s.cx} cy={s.cy} r={8} fill="none" stroke={PALETTE.gold} strokeWidth="0.4" opacity="0.1" />}
          </g>
        ))}

        {/* Pillar-top stars */}
        {PILLAR_STARS.map(([cx, cy], i) => (
          <polygon key={`star-${i}`} points={`${cx},${cy - 7} ${cx + 2.5},${cy - 2} ${cx + 7},${cy - 2} ${cx + 3.5},${cy + 2} ${cx + 5},${cy + 7} ${cx},${cy + 4} ${cx - 5},${cy + 7} ${cx - 3.5},${cy + 2} ${cx - 7},${cy - 2} ${cx - 2.5},${cy - 2}`} fill="none" stroke={PALETTE.brightGold} strokeWidth="0.6" opacity="0.18" />
        ))}
      </svg>

      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Eggplant at Keter */}
        <img src={EGGPLANT.src} alt="" className="h-40 w-40 object-contain" style={{ filter: EGGPLANT.filter }} />

        <p className="mt-16 font-mono text-12 uppercase tracking-[0.5em] text-[#ffd700]/35">
          {COPY.eyebrow}
        </p>

        <h1 className="mt-4 font-mono text-48 uppercase leading-tight text-[#ffd700] md:text-72">
          {COPY.titleLine1}<br />
          <span className="text-[#f5e6c0]">{COPY.titleLine2}</span>
        </h1>

        <p className="mt-6 max-w-md text-16 text-[#c8b080]/45">
          {COPY.description}
        </p>
      </div>
    </div>
  );
}
