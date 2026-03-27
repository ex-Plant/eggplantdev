/* Agent: Claude — Soleil Aubergine */

const STARS = Array.from({ length: 50 }, (_, i) => ({
  x: `${(i * 37 + 13) % 100}%`,
  y: `${(i * 53 + 7) % 100}%`,
  size: i % 3 === 0 ? 3 : i % 2 === 0 ? 2 : 1.5,
  opacity: 0.08 + (i % 5) * 0.04,
  color: i % 3 === 0 ? '#ffd700' : i % 3 === 1 ? '#daa520' : '#f0c040',
}));

const RAYS = Array.from({ length: 24 }, (_, i) => {
  const angle = (i * 15 * Math.PI) / 180;
  const isLong = i % 2 === 0;
  const len = isLong ? 340 : 220;
  return {
    x2: 600 + Math.cos(angle) * len,
    y2: 400 + Math.sin(angle) * len,
    width: isLong ? 1.8 : 0.6,
    opacity: isLong ? 0.18 : 0.1,
    hasDot: isLong,
    dotX: 600 + Math.cos(angle) * (len + 12),
    dotY: 400 + Math.sin(angle) * (len + 12),
  };
});

const ZIGZAG_POINTS = Array.from({ length: 48 }, (_, i) => {
  const angle = (i * 7.5 * Math.PI) / 180;
  const r = 105 + (i % 2 === 0 ? 6 : -6);
  return `${600 + Math.cos(angle) * r},${400 + Math.sin(angle) * r}`;
}).join(' ');

export function HeroSoleilAubergine() {
  return (
    <div id="hero-soleil-aubergine" className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0a0806]">
      {/* Star field */}
      {STARS.map((s, i) => (
        <div key={i} className="absolute rounded-full" style={{ left: s.x, top: s.y, width: s.size, height: s.size, backgroundColor: s.color, opacity: s.opacity }} />
      ))}

      {/* Sacred geometry */}
      <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
        {/* Concentric solar corona rings */}
        <circle cx="600" cy="400" r="150" fill="none" stroke="#ffd700" strokeWidth="1.5" opacity="0.18" />
        <circle cx="600" cy="400" r="120" fill="none" stroke="#daa520" strokeWidth="1" opacity="0.14" />
        <circle cx="600" cy="400" r="90" fill="none" stroke="#f0c040" strokeWidth="0.8" opacity="0.1" />

        {/* Zigzag decorative band between inner rings */}
        <polyline points={ZIGZAG_POINTS} fill="none" stroke="#daa520" strokeWidth="0.6" opacity="0.12" />

        {/* Radiating sun rays */}
        {RAYS.map((r, i) => (
          <g key={i}>
            <line x1="600" y1="400" x2={r.x2} y2={r.y2} stroke="#ffd700" strokeWidth={r.width} opacity={r.opacity} />
            {r.hasDot && <circle cx={r.dotX} cy={r.dotY} r="3" fill="none" stroke="#f0c040" strokeWidth="0.8" opacity="0.2" />}
          </g>
        ))}

        {/* Art deco corner brackets — top-left */}
        <path d="M40,40 L40,120 M40,40 L120,40" fill="none" stroke="#daa520" strokeWidth="1.2" opacity="0.15" />
        <path d="M50,50 L50,100 M50,50 L100,50" fill="none" stroke="#ffd700" strokeWidth="0.5" opacity="0.1" />
        {/* Top-right */}
        <path d="M1160,40 L1160,120 M1160,40 L1080,40" fill="none" stroke="#daa520" strokeWidth="1.2" opacity="0.15" />
        <path d="M1150,50 L1150,100 M1150,50 L1100,50" fill="none" stroke="#ffd700" strokeWidth="0.5" opacity="0.1" />
        {/* Bottom-left */}
        <path d="M40,760 L40,680 M40,760 L120,760" fill="none" stroke="#daa520" strokeWidth="1.2" opacity="0.15" />
        <path d="M50,750 L50,700 M50,750 L100,750" fill="none" stroke="#ffd700" strokeWidth="0.5" opacity="0.1" />
        {/* Bottom-right */}
        <path d="M1160,760 L1160,680 M1160,760 L1080,760" fill="none" stroke="#daa520" strokeWidth="1.2" opacity="0.15" />
        <path d="M1150,750 L1150,700 M1150,750 L1100,750" fill="none" stroke="#ffd700" strokeWidth="0.5" opacity="0.1" />
      </svg>

      {/* Central content */}
      <div className="relative z-10 flex flex-col items-center gap-6 text-center">
        {/* Eggplant with intense golden sun glow */}
        <div className="relative">
          <div className="absolute inset-0 -m-16 rounded-full bg-[#ffd700]/15 blur-3xl" />
          <div className="absolute inset-0 -m-8 rounded-full bg-[#daa520]/20 blur-xl" />
          <img src="/logos/eggplant-logo-smooth.apng" alt="Soleil Aubergine" className="relative h-52 w-52 drop-shadow-[0_0_40px_rgba(255,215,0,0.4)]" style={{ filter: 'sepia(0.3) saturate(1.6) hue-rotate(-10deg) brightness(1.15)' }} />
        </div>

        {/* Typography */}
        <p className="font-mono text-xs uppercase tracking-[0.5em] text-[#ffd700]/35">
          Astre sacré du potager
        </p>
        <h1 className="font-mono text-48 uppercase leading-none tracking-wider text-[#ffd700] md:text-72">
          Soleil
          <br />
          Aubergine
        </h1>
        <p className="max-w-md font-mono text-sm leading-relaxed text-[#c8b080]/45">
          A golden ember suspended in the void — the aubergine radiates its divine light across the cosmos, an eternal beacon for those who dare to look upward.
        </p>
      </div>
    </div>
  );
}
