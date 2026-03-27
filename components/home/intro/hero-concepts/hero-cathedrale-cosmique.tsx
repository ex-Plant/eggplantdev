/* Agent: Claude — Cathédrale Cosmique */

export function HeroCathedralCosmique() {
  const petals = Array.from({ length: 12 }, (_, i) => i * 30);
  const stars = Array.from({ length: 55 }, (_, i) => ({
    x: `${(i * 37 + 13) % 100}%`,
    y: `${(i * 53 + 7) % 100}%`,
    size: 1 + (i % 3),
    color: ["#daa520", "#ffd700", "#f5e6c0"][i % 3],
    opacity: 0.08 + (i % 5) * 0.04,
  }));

  return (
    <div id="hero-cathedrale-cosmique" className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0a0806]">
      {/* Star field */}
      {stars.map((s, i) => (
        <div key={`s-${i}`} className="absolute rounded-full" style={{ left: s.x, top: s.y, width: s.size, height: s.size, backgroundColor: s.color, opacity: s.opacity }} />
      ))}

      <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
        {/* Gothic pointed arch frame */}
        <path d="M400,700 L400,350 Q400,100 600,80 Q800,100 800,350 L800,700" fill="none" stroke="#c8860e" strokeWidth="1.2" opacity="0.12" />
        <path d="M420,690 L420,360 Q420,130 600,110 Q780,130 780,360 L780,690" fill="none" stroke="#ffd700" strokeWidth="0.6" opacity="0.08" />

        {/* Outer rose window circle */}
        <circle cx="600" cy="380" r="220" fill="none" stroke="#ffd700" strokeWidth="1.5" opacity="0.15" />
        <circle cx="600" cy="380" r="225" fill="none" stroke="#c8860e" strokeWidth="0.5" opacity="0.08" />

        {/* Concentric tracery rings */}
        <circle cx="600" cy="380" r="160" fill="none" stroke="#daa520" strokeWidth="0.8" opacity="0.12" />
        <circle cx="600" cy="380" r="110" fill="none" stroke="#ffd700" strokeWidth="0.6" opacity="0.1" />
        <circle cx="600" cy="380" r="65" fill="none" stroke="#c8860e" strokeWidth="0.5" opacity="0.08" />

        {/* 12 radiating petals */}
        {petals.map((deg, i) => {
          const rad = (deg * Math.PI) / 180;
          const cos = Math.cos(rad);
          const sin = Math.sin(rad);
          const color = i % 3 === 0 ? "#e8a0c0" : i % 2 === 0 ? "#ffd700" : "#daa520";
          const op = i % 3 === 0 ? 0.08 : 0.14;
          return (
            <g key={`p-${i}`}>
              {/* Petal ellipse */}
              <ellipse cx={600 + 130 * cos} cy={380 + 130 * sin} rx="40" ry="14" fill="none" stroke={color} strokeWidth="0.8" opacity={op} transform={`rotate(${deg},${600 + 130 * cos},${380 + 130 * sin})`} />
              {/* Radial spoke */}
              <line x1={600 + 65 * cos} y1={380 + 65 * sin} x2={600 + 220 * cos} y2={380 + 220 * sin} stroke="#daa520" strokeWidth="0.5" opacity="0.1" />
              {/* Trefoil at petal intersection with outer ring */}
              <circle cx={600 + 190 * cos} cy={380 + 190 * sin} r="6" fill="none" stroke="#ffd700" strokeWidth="0.6" opacity="0.1" />
              <circle cx={600 + 190 * cos + 5} cy={380 + 190 * sin} r="3" fill="none" stroke="#c8860e" strokeWidth="0.4" opacity="0.08" />
              <circle cx={600 + 190 * cos - 5} cy={380 + 190 * sin} r="3" fill="none" stroke="#c8860e" strokeWidth="0.4" opacity="0.08" />
            </g>
          );
        })}

        {/* Small decorative segments between petals on middle ring */}
        {petals.map((deg, i) => {
          const mid = ((deg + 15) * Math.PI) / 180;
          return <circle key={`d-${i}`} cx={600 + 160 * Math.cos(mid)} cy={380 + 160 * Math.sin(mid)} r="4" fill="none" stroke="#f5e6c0" strokeWidth="0.5" opacity="0.08" />;
        })}
      </svg>

      {/* Golden radial glow */}
      <div className="pointer-events-none absolute left-1/2 top-[47%] h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(218,165,32,0.07)_0%,transparent_65%)]" />

      <div className="relative z-10 flex flex-col items-center text-center">
        <p className="font-mono text-12 uppercase tracking-[0.5em] text-[#ffd700]/35">Vitrail de l&apos;univers</p>
        <img src="/logos/eggplant-logo-smooth.apng" alt="" className="mt-6 h-48 w-48 object-contain" style={{ filter: "sepia(0.3) saturate(1.6) brightness(0.9) hue-rotate(-10deg)" }} />
        <h1 className="mt-8 font-mono text-48 uppercase leading-tight text-[#f5e6c0] md:text-72">
          Cathédrale<br /><span className="text-[#ffd700]">Cosmique</span>
        </h1>
        <p className="mt-5 max-w-md text-16 text-[#c8b080]/45">
          The eggplant sits enthroned within a rose window of cosmic light — gilded tracery radiating outward like a cathedral built by stars.
        </p>
      </div>
    </div>
  );
}
