/* Agent: Claude — Metatron's Cube */

const INNER_R = 100;
const OUTER_R = 200;
const CENTER: [number, number] = [600, 400];

const ringPoints = (r: number, count: number): [number, number][] =>
  Array.from({ length: count }, (_, i) => {
    const angle = (Math.PI / 3) * i - Math.PI / 2;
    return [CENTER[0] + r * Math.cos(angle), CENTER[1] + r * Math.sin(angle)];
  });

const ALL_POINTS: [number, number][] = [CENTER, ...ringPoints(INNER_R, 6), ...ringPoints(OUTER_R, 6)];

const STARS = Array.from({ length: 55 }, (_, i) => ({
  x: `${(i * 17 + 7) % 100}%`,
  y: `${(i * 23 + 13) % 100}%`,
  size: i % 3 === 0 ? 3 : i % 2 === 0 ? 2 : 1,
  opacity: 0.15 + (i % 5) * 0.12,
  color: i % 4 === 0 ? '#daa520' : '#f5f0e0',
}));

const STROKES = ['#daa520', '#c8860e', '#f0c040'] as const;

export function HeroMetatronsCube() {
  const lines: [number, number, number, number][] = [];
  for (let i = 0; i < ALL_POINTS.length; i++) {
    for (let j = i + 1; j < ALL_POINTS.length; j++) {
      lines.push([ALL_POINTS[i][0], ALL_POINTS[i][1], ALL_POINTS[j][0], ALL_POINTS[j][1]]);
    }
  }

  return (
    <div id="hero-metatrons-cube" className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0c0a08]">
      {/* Star field */}
      {STARS.map((s, i) => (
        <div key={`s-${i}`} className="pointer-events-none absolute rounded-full" style={{ left: s.x, top: s.y, width: s.size, height: s.size, backgroundColor: s.color, opacity: s.opacity }} />
      ))}

      {/* Sacred geometry SVG */}
      <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
        {/* Connecting lines between all 13 centers */}
        {lines.map(([x1, y1, x2, y2], i) => (
          <line key={`l-${i}`} x1={x1} y1={y1} x2={x2} y2={y2} stroke={STROKES[i % 3]} strokeWidth="0.5" opacity={0.08 + (i % 3) * 0.04} />
        ))}
        {/* 13 circles */}
        {ALL_POINTS.map(([cx, cy], i) => (
          <circle key={`c-${i}`} cx={cx} cy={cy} r={i === 0 ? INNER_R : i <= 6 ? INNER_R * 0.65 : INNER_R * 0.65} fill="none" stroke={STROKES[i % 3]} strokeWidth={i === 0 ? 0.8 : 0.5} opacity={i === 0 ? 0.2 : 0.12} />
        ))}
        {/* Outer containment circle */}
        <circle cx={600} cy={400} r={280} fill="none" stroke="#daa520" strokeWidth="0.3" opacity="0.06" strokeDasharray="6 10" />
        {/* Scattered sacred symbols */}
        <polygon points="600,260 620,300 580,300" fill="none" stroke="#f0c040" strokeWidth="0.4" opacity="0.1" />
        <polygon points="600,540 620,500 580,500" fill="none" stroke="#c8860e" strokeWidth="0.4" opacity="0.08" />
        <rect x="440" y="385" width="20" height="20" fill="none" stroke="#daa520" strokeWidth="0.4" opacity="0.08" transform="rotate(45 450 395)" />
        <rect x="740" y="385" width="20" height="20" fill="none" stroke="#f0c040" strokeWidth="0.4" opacity="0.08" transform="rotate(45 750 395)" />
      </svg>

      {/* Radial glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(218,165,32,0.12)_0%,rgba(200,134,14,0.05)_40%,transparent_70%)]" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center">
        <p className="mb-6 font-mono text-xs uppercase tracking-widest text-[#daa520]/40">
          The blueprint of all creation
        </p>

        <img
          src="/logos/eggplant-logo-smooth.apng"
          alt="Eggplant logo"
          className="mb-8 h-48 w-48 drop-shadow-[0_0_40px_rgba(218,165,32,0.3)] saturate-50 sepia"
        />

        <h1 className="font-mono text-48 uppercase leading-none tracking-tight md:text-72">
          <span className="block text-[#daa520]">Metatron&apos;s</span>
          <span className="block text-[#f5e6c0]">Cube</span>
        </h1>

        <p className="mt-6 max-w-md font-mono text-sm text-[#c8b080]/50">
          The eggplant exists within the geometric template of the universe — encoded in every vertex, every edge, every platonic form
        </p>
      </div>
    </div>
  );
}
