/* Soleil Aubergine background — stars, sacred geometry, glow, text. No eggplant. */

const STARS = Array.from({ length: 50 }, (_, i) => ({
  x: `${(i * 37 + 13) % 100}%`,
  y: `${(i * 53 + 7) % 100}%`,
  size: i % 3 === 0 ? 3 : i % 2 === 0 ? 2 : 1.5,
  opacity: 0.08 + (i % 5) * 0.04,
  color: i % 3 === 0 ? "#ffd700" : i % 3 === 1 ? "#daa520" : "#f0c040",
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
}).join(" ");

export function SoleilBackground() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0a0806]">
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

        {/* Zigzag decorative band */}
        <polyline points={ZIGZAG_POINTS} fill="none" stroke="#daa520" strokeWidth="0.6" opacity="0.12" />

        {/* Radiating sun rays */}
        {RAYS.map((r, i) => (
          <g key={i}>
            <line x1="600" y1="400" x2={r.x2} y2={r.y2} stroke="#ffd700" strokeWidth={r.width} opacity={r.opacity} />
            {r.hasDot && <circle cx={r.dotX} cy={r.dotY} r="3" fill="none" stroke="#f0c040" strokeWidth="0.8" opacity="0.2" />}
          </g>
        ))}

        {/* Art deco corner brackets */}
        <path d="M40,40 L40,120 M40,40 L120,40" fill="none" stroke="#daa520" strokeWidth="1.2" opacity="0.15" />
        <path d="M50,50 L50,100 M50,50 L100,50" fill="none" stroke="#ffd700" strokeWidth="0.5" opacity="0.1" />
        <path d="M1160,40 L1160,120 M1160,40 L1080,40" fill="none" stroke="#daa520" strokeWidth="1.2" opacity="0.15" />
        <path d="M1150,50 L1150,100 M1150,50 L1100,50" fill="none" stroke="#ffd700" strokeWidth="0.5" opacity="0.1" />
        <path d="M40,760 L40,680 M40,760 L120,760" fill="none" stroke="#daa520" strokeWidth="1.2" opacity="0.15" />
        <path d="M50,750 L50,700 M50,750 L100,750" fill="none" stroke="#ffd700" strokeWidth="0.5" opacity="0.1" />
        <path d="M1160,760 L1160,680 M1160,760 L1080,760" fill="none" stroke="#daa520" strokeWidth="1.2" opacity="0.15" />
        <path d="M1150,750 L1150,700 M1150,750 L1100,750" fill="none" stroke="#ffd700" strokeWidth="0.5" opacity="0.1" />
      </svg>

      {/* Central content — glow + text, no eggplant. All sizes clamped to viewport. */}
      <div className="relative z-10 flex flex-col items-center gap-[clamp(0.75rem,2vw,1.5rem)] text-center">
        {/* Golden glow — radial gradient, no blur filter */}
        <div
          className="relative"
          style={{
            width: "clamp(14rem, 40vw, 24rem)",
            height: "clamp(14rem, 40vw, 24rem)",
            background: "radial-gradient(circle, rgba(255,215,0,0.15) 0%, rgba(218,165,32,0.08) 40%, transparent 70%)",
          }}
        />

        <p
          className="font-mono uppercase text-[#ffd700]/35"
          style={{ fontSize: "clamp(0.55rem, 1.2vw, 0.75rem)", letterSpacing: "clamp(0.2em, 0.5vw, 0.5em)" }}
        >
          Astre sacré du potager
        </p>
        <h1
          className="font-mono uppercase leading-none tracking-wider text-[#ffd700]"
          style={{ fontSize: "clamp(2.5rem, 8vw, 4.5rem)" }}
        >
          Soleil
          <br />
          Aubergine
        </h1>
        <p
          className="font-mono leading-relaxed text-[#c8b080]/45"
          style={{ fontSize: "clamp(0.7rem, 1.4vw, 0.875rem)", maxWidth: "clamp(16rem, 35vw, 28rem)" }}
        >
          A golden ember suspended in the void — the aubergine radiates its divine light across the cosmos, an eternal beacon for those who dare to look upward.
        </p>
      </div>
    </div>
  );
}
