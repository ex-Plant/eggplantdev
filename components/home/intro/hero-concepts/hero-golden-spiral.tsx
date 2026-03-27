/* Agent: Claude — Golden Spiral */

const STARS = Array.from({ length: 55 }, (_, i) => ({
  x: `${(i * 17 + 3) % 100}%`,
  y: `${(i * 23 + 7) % 100}%`,
  size: i % 3 === 0 ? 3 : i % 2 === 0 ? 2 : 1,
  color: i % 3 === 0 ? '#daa520' : '#f5f0e0',
  opacity: 0.15 + (i % 5) * 0.12,
}));


export function HeroGoldenSpiral() {
  return (
    <div id="hero-golden-spiral" className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0c0a08]">
      {/* Star field */}
      {STARS.map((s, i) => (
        <div
          key={`star-${i}`}
          className="pointer-events-none absolute rounded-full"
          style={{ left: s.x, top: s.y, width: s.size, height: s.size, backgroundColor: s.color, opacity: s.opacity }}
        />
      ))}

      {/* Sacred geometry SVG — golden spiral with Fibonacci rectangles */}
      <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
        {/* Fibonacci rectangles */}
        {[
          { x: 100, y: 80, w: 500, h: 500 },
          { x: 600, y: 80, w: 309, h: 500 },
          { x: 600, y: 389, w: 309, h: 191 },
          { x: 600, y: 389, w: 191, h: 191 },
          { x: 600, y: 389, w: 118, h: 118 },
          { x: 600, y: 434, w: 73, h: 73 },
        ].map((r, i) => (
          <rect key={`rect-${i}`} x={r.x} y={r.y} width={r.w} height={r.h} fill="none" stroke="#c8860e" strokeWidth={0.6 - i * 0.06} opacity={0.12 - i * 0.01} />
        ))}

        {/* Golden spiral — quarter-circle arcs */}
        <path
          d="M 100 580 A 500 500 0 0 1 600 80
             A 309 309 0 0 1 909 389
             A 191 191 0 0 1 718 580
             A 118 118 0 0 1 600 462
             A 73 73 0 0 1 673 389
             A 45 45 0 0 1 628 434"
          fill="none" stroke="#daa520" strokeWidth="1.2" opacity="0.18"
        />
        <path
          d="M 100 580 A 500 500 0 0 1 600 80
             A 309 309 0 0 1 909 389
             A 191 191 0 0 1 718 580
             A 118 118 0 0 1 600 462"
          fill="none" stroke="#f0c040" strokeWidth="0.6" opacity="0.1"
        />

        {/* Crescent moon */}
        <g transform="translate(200, 180)" opacity="0.15">
          <circle cx="0" cy="0" r="18" fill="none" stroke="#daa520" strokeWidth="0.8" />
          <circle cx="6" cy="-4" r="14" fill="#0c0a08" stroke="none" />
        </g>

        {/* Planet with ring */}
        <g transform="translate(950, 250)" opacity="0.12">
          <ellipse cx="0" cy="0" rx="30" ry="8" fill="none" stroke="#c8860e" strokeWidth="0.7" />
          <circle cx="0" cy="0" r="12" fill="none" stroke="#daa520" strokeWidth="0.8" />
        </g>

        {/* Small distant planet */}
        <g transform="translate(850, 620)" opacity="0.1">
          <circle cx="0" cy="0" r="6" fill="none" stroke="#f0c040" strokeWidth="0.6" />
          <ellipse cx="0" cy="0" rx="12" ry="3" fill="none" stroke="#daa520" strokeWidth="0.4" />
        </g>
      </svg>

      {/* Radial glow behind eggplant */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(218,165,32,0.12)_0%,rgba(200,134,14,0.04)_40%,transparent_70%)]" />

      {/* Central content */}
      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Eggplant at spiral focal point */}
        <img
          src="/logos/eggplant-logo-smooth.apng"
          alt="Eggplant logo"
          className="mb-8 h-48 w-48 drop-shadow-[0_0_40px_rgba(218,165,32,0.3)] [filter:sepia(0.4)_saturate(1.2)]"
        />

        {/* Eyebrow */}
        <p className="mb-4 font-mono text-xs uppercase tracking-widest text-[#daa520]/40">
          φ = 1.618033...
        </p>

        {/* Title */}
        <h1 className="font-mono text-5xl font-bold uppercase leading-none tracking-tight text-[#f5e6c0] md:text-7xl">
          <span className="text-[#daa520]">Golden</span>
          <br />
          Spiral
        </h1>

        {/* Subtitle */}
        <p className="mt-6 max-w-md font-mono text-sm uppercase tracking-wide text-[#c8b080]/50">
          The eggplant follows the universe&apos;s most perfect curve
        </p>
      </div>
    </div>
  );
}
