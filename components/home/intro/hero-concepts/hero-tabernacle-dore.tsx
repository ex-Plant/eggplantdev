/* Agent: Claude — Tabernacle Doré */
const SEPHIROT = [
  { name: "Keter", cx: 400, cy: 60 },
  { name: "Chokmah", cx: 520, cy: 160 },
  { name: "Binah", cx: 280, cy: 160 },
  { name: "Chesed", cx: 520, cy: 300 },
  { name: "Geburah", cx: 280, cy: 300 },
  { name: "Tiferet", cx: 400, cy: 380 },
  { name: "Netzach", cx: 520, cy: 480 },
  { name: "Hod", cx: 280, cy: 480 },
  { name: "Yesod", cx: 400, cy: 560 },
  { name: "Malkuth", cx: 400, cy: 660 },
] as const;

const PATHS: readonly [number, number][] = [
  [0, 1], [0, 2], [1, 2], [1, 3], [1, 5], [2, 4], [2, 5], [3, 4], [3, 5],
  [3, 6], [4, 5], [4, 7], [5, 6], [5, 7], [5, 8], [6, 7], [6, 8], [7, 8], [8, 9],
  [0, 5], [6, 9], [7, 9],
];

const STARS = Array.from({ length: 50 }, (_, i) => ({
  x: `${(i * 41 + 17) % 100}%`,
  y: `${(i * 59 + 11) % 100}%`,
  color: ["#daa520", "#ffd700", "#f5e6c0"][i % 3],
  opacity: 0.06 + (i % 5) * 0.035,
  size: 1 + (i % 3),
}));

const PILLAR_STARS: readonly [number, number][] = [[280, 130], [400, 30], [520, 130]];

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
        <path d="M240,700 L240,280 Q240,40 400,10 Q560,40 560,280 L560,700 Z" fill="none" stroke="#daa520" strokeWidth="1" opacity="0.14" />
        <path d="M250,695 L250,285 Q250,55 400,25 Q550,55 550,285 L550,695 Z" fill="none" stroke="#ffd700" strokeWidth="0.5" opacity="0.08" />

        {/* 22 paths */}
        {PATHS.map(([a, b], i) => (
          <line key={`p-${i}`} x1={SEPHIROT[a].cx} y1={SEPHIROT[a].cy} x2={SEPHIROT[b].cx} y2={SEPHIROT[b].cy} stroke={["#ffd700", "#daa520", "#c8860e"][i % 3]} strokeWidth="0.6" opacity={0.1 + (i % 3) * 0.04} />
        ))}

        {/* 10 sephirot circles */}
        {SEPHIROT.map((s, i) => (
          <g key={s.name}>
            <circle cx={s.cx} cy={s.cy} r={i === 0 ? 22 : 14} fill="none" stroke="#ffd700" strokeWidth={i === 0 ? 1.2 : 0.8} opacity={i === 0 ? 0.22 : 0.15} />
            {i !== 0 && <circle cx={s.cx} cy={s.cy} r={8} fill="none" stroke="#daa520" strokeWidth="0.4" opacity="0.1" />}
          </g>
        ))}

        {/* Pillar-top stars */}
        {PILLAR_STARS.map(([cx, cy], i) => (
          <polygon key={`star-${i}`} points={`${cx},${cy - 7} ${cx + 2.5},${cy - 2} ${cx + 7},${cy - 2} ${cx + 3.5},${cy + 2} ${cx + 5},${cy + 7} ${cx},${cy + 4} ${cx - 5},${cy + 7} ${cx - 3.5},${cy + 2} ${cx - 7},${cy - 2} ${cx - 2.5},${cy - 2}`} fill="none" stroke="#ffd700" strokeWidth="0.6" opacity="0.18" />
        ))}
      </svg>

      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Eggplant at Keter */}
        <img src="/logos/eggplant-logo-smooth.apng" alt="" className="h-40 w-40 object-contain" style={{ filter: "sepia(0.35) saturate(1.6) brightness(0.9)" }} />

        <p className="mt-16 font-mono text-12 uppercase tracking-[0.5em] text-[#ffd700]/35">
          L&apos;arbre de la connaissance
        </p>

        <h1 className="mt-4 font-mono text-48 uppercase leading-tight text-[#ffd700] md:text-72">
          Tabernacle<br />
          <span className="text-[#f5e6c0]">Doré</span>
        </h1>

        <p className="mt-6 max-w-md text-16 text-[#c8b080]/45">
          The eggplant crowned at the summit of the Tree of Life — the golden tabernacle of all cosmic knowledge, radiating through ten sephirot of eternal wisdom.
        </p>
      </div>
    </div>
  );
}
