/* Agent: Codex — Rose Window Reliquary */

const ROSE_PETALS = Array.from({ length: 12 }, (_, i) => {
  const angle = (Math.PI * 2 * i) / 12 - Math.PI / 2;
  return {
    cx: 600 + 128 * Math.cos(angle),
    cy: 400 + 128 * Math.sin(angle),
  };
});

const ROSE_STARS = Array.from({ length: 56 }, (_, i) => ({
  x: (i * 37 + 19) % 100,
  y: (i * 53 + 7) % 100,
  size: i % 9 === 0 ? 3 : i % 4 === 0 ? 2 : 1,
  color: i % 5 === 0 ? "#daa520" : "#f5e6c0",
  opacity: 0.05 + (i % 5) * 0.025,
}));

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

      <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
        <path d="M72 72 H180 M72 72 V180" fill="none" stroke="#daa520" strokeWidth="1" opacity="0.14" />
        <path d="M1128 72 H1020 M1128 72 V180" fill="none" stroke="#daa520" strokeWidth="1" opacity="0.14" />
        <path d="M72 728 H180 M72 728 V620" fill="none" stroke="#daa520" strokeWidth="1" opacity="0.14" />
        <path d="M1128 728 H1020 M1128 728 V620" fill="none" stroke="#daa520" strokeWidth="1" opacity="0.14" />

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

        <circle cx="292" cy="548" r="20" fill="none" stroke="#8fa6b0" strokeWidth="1" opacity="0.18" />
        <ellipse cx="292" cy="548" rx="34" ry="9" fill="none" stroke="#8fa6b0" strokeWidth="0.5" opacity="0.14" />
        <circle cx="908" cy="238" r="14" fill="none" stroke="#f5e6c0" strokeWidth="1" opacity="0.16" />
        <circle cx="913" cy="235" r="12" fill="#0c0a08" />
        <polygon points="242,230 252,244 268,248 256,260 258,278 242,270 226,278 228,260 216,248 232,244" fill="none" stroke="#f0c040" strokeWidth="0.7" opacity="0.12" />
        <polygon points="954,582 968,596 954,610 940,596" fill="none" stroke="#c8860e" strokeWidth="0.8" opacity="0.1" />
      </svg>

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(240,192,64,0.08)_0%,rgba(218,165,32,0.06)_36%,transparent_70%)]" />

      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        <p className="font-mono text-[11px] uppercase tracking-[0.48em] text-[#daa520]/38">Cathedral optics / devotional glazing</p>
        <div className="relative my-8">
          <div className="absolute -inset-16 rounded-full bg-[radial-gradient(circle,rgba(245,230,192,0.08)_0%,transparent_65%)]" />
          <img src="/logos/eggplant-logo-smooth.apng" alt="" className="relative h-52 w-52 object-contain" style={{ filter: "sepia(0.34) saturate(1.45) brightness(0.92)" }} />
        </div>
        <h1 className="font-mono text-48 uppercase leading-none text-[#f5e6c0] md:text-72">
          Rose Window
          <br />
          <span className="text-[#daa520]">Reliquary</span>
        </h1>
        <p className="mt-6 max-w-xl text-16 text-[#c8b080]/50">
          The eggplant set into a cosmic stained-glass rose: less diagram, more relic. Sacred geometry turns ornamental here, like a poster for a fake cathedral opening in deep space.
        </p>
      </div>
    </div>
  );
}
