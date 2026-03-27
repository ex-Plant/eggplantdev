/* Agent: Claude — Reliquary d'Or */
export function HeroReliquaryDor() {
  const stars = Array.from({ length: 50 }, (_, i) => ({
    x: `${(i * 37 + 13) % 100}%`,
    y: `${(i * 53 + 7) % 100}%`,
    color: ["#daa520", "#ffd700", "#f5e6c0"][i % 3],
    opacity: 0.08 + (i % 5) * 0.04,
    size: 1 + (i % 3),
  }));

  return (
    <div id="hero-reliquary-dor" className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0a0806]">
      {/* Star field */}
      {stars.map((s, i) => (
        <div key={i} className="absolute rounded-full" style={{ left: s.x, top: s.y, width: s.size, height: s.size, backgroundColor: s.color, opacity: s.opacity }} />
      ))}

      <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
        {/* Outer ornate rectangular frame */}
        <rect x="150" y="60" width="900" height="680" fill="none" stroke="#daa520" strokeWidth="1.2" opacity="0.15" />
        <rect x="165" y="75" width="870" height="650" fill="none" stroke="#ffd700" strokeWidth="0.5" opacity="0.08" />
        {/* Corner circles */}
        {[[150, 60], [1050, 60], [150, 740], [1050, 740]].map(([cx, cy], i) => (
          <circle key={`corner-${i}`} cx={cx} cy={cy} r="6" fill="none" stroke="#ffd700" strokeWidth="1" opacity="0.2" />
        ))}
        {/* L-shaped corner brackets */}
        {[
          "M160,85 L160,70 L185,70", "M1040,85 L1040,70 L1015,70",
          "M160,715 L160,730 L185,730", "M1040,715 L1040,730 L1015,730",
        ].map((d, i) => (
          <path key={`bracket-${i}`} d={d} fill="none" stroke="#ffd700" strokeWidth="1.5" opacity="0.18" />
        ))}

        {/* Inner gothic/pointed arch */}
        <path d="M480,580 L480,300 Q480,180 600,140 Q720,180 720,300 L720,580" fill="none" stroke="#c8860e" strokeWidth="1" opacity="0.12" />
        <path d="M495,570 L495,310 Q495,200 600,165 Q705,200 705,310 L705,570" fill="none" stroke="#ffd700" strokeWidth="0.5" opacity="0.07" />

        {/* Radiating sunburst lines from center */}
        {Array.from({ length: 24 }, (_, i) => {
          const a = (Math.PI * 2 * i) / 24;
          return <line key={`ray-${i}`} x1="600" y1="370" x2={600 + 280 * Math.cos(a)} y2={370 + 280 * Math.sin(a)} stroke="#daa520" strokeWidth="0.4" opacity={0.06 + (i % 2) * 0.03} />;
        })}

        {/* Trefoil shapes at cardinal points */}
        {[[600, 120], [600, 620], [300, 370], [900, 370]].map(([cx, cy], i) => (
          <g key={`trefoil-${i}`} opacity="0.15">
            <circle cx={cx} cy={cy - 6} r="4" fill="none" stroke="#ffd700" strokeWidth="0.8" />
            <circle cx={cx - 5} cy={cy + 3} r="4" fill="none" stroke="#ffd700" strokeWidth="0.8" />
            <circle cx={cx + 5} cy={cy + 3} r="4" fill="none" stroke="#ffd700" strokeWidth="0.8" />
          </g>
        ))}

        {/* Horizontal ruled lines above and below title area */}
        <line x1="400" y1="480" x2="800" y2="480" stroke="#ffd700" strokeWidth="0.5" opacity="0.1" />
        <line x1="420" y1="485" x2="780" y2="485" stroke="#c8860e" strokeWidth="0.3" opacity="0.06" />
        <line x1="400" y1="640" x2="800" y2="640" stroke="#ffd700" strokeWidth="0.5" opacity="0.1" />
        <line x1="420" y1="645" x2="780" y2="645" stroke="#c8860e" strokeWidth="0.3" opacity="0.06" />
      </svg>

      {/* Golden radial glow behind eggplant */}
      <div className="pointer-events-none absolute left-1/2 top-[42%] h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(218,165,32,0.1)_0%,rgba(255,215,0,0.03)_40%,transparent_70%)]" />

      <div className="relative z-10 flex flex-col items-center text-center">
        <p className="font-mono text-12 uppercase tracking-[0.5em] text-[#ffd700]/35">Reliquaire sacré</p>

        <img src="/logos/eggplant-logo-smooth.apng" alt="" className="mt-6 h-52 w-52 object-contain" style={{ filter: "sepia(0.4) saturate(1.8) brightness(0.85)" }} />

        <h1 className="mt-8 font-mono text-48 uppercase leading-tight text-[#ffd700] md:text-72">
          Reliquary<br />
          <span className="text-[#f5e6c0]">d&apos;Or</span>
        </h1>

        <p className="mt-6 max-w-md text-16 text-[#c8b080]/45">
          The most precious vegetable, preserved in gilded geometry for eternity — enshrined behind ornate frames as a holy relic of impeccable taste.
        </p>
      </div>
    </div>
  );
}
