export function HeroEchoesOfDjembeya() {
  /* Interlocking figure-8 sacred circles with celestial bodies orbiting.
     Warm amber/gold palette. Central eggplant as luminous deity figure. */
  return (
    <div id="hero-echoes-djembeya" className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0c0a08]">
      {/* Star field — warm tone */}
      {Array.from({ length: 60 }, (_, i) => (
        <div key={`star-${i}`} className="pointer-events-none absolute rounded-full" style={{ left: `${(i * 29 + 11) % 100}%`, top: `${(i * 43 + 7) % 100}%`, width: i % 8 === 0 ? 3 : i % 3 === 0 ? 2 : 1, height: i % 8 === 0 ? 3 : i % 3 === 0 ? 2 : 1, backgroundColor: i % 5 === 0 ? "#daa520" : "#f5f0e0", opacity: 0.08 + (i % 6) * 0.04 }} />
      ))}

      {/* Art deco corner frames */}
      <svg className="pointer-events-none absolute inset-0 h-full w-full overflow-hidden" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
        {/* Corners */}
        <path d="M40,40 L40,120 M40,40 L120,40" fill="none" stroke="#daa520" strokeWidth="1" opacity="0.15" />
        <path d="M1160,40 L1160,120 M1160,40 L1080,40" fill="none" stroke="#daa520" strokeWidth="1" opacity="0.15" />
        <path d="M40,760 L40,680 M40,760 L120,760" fill="none" stroke="#daa520" strokeWidth="1" opacity="0.15" />
        <path d="M1160,760 L1160,680 M1160,760 L1080,760" fill="none" stroke="#daa520" strokeWidth="1" opacity="0.15" />
        {/* Double corner inset */}
        <path d="M55,55 L55,105 M55,55 L105,55" fill="none" stroke="#daa520" strokeWidth="0.5" opacity="0.08" />
        <path d="M1145,55 L1145,105 M1145,55 L1095,55" fill="none" stroke="#daa520" strokeWidth="0.5" opacity="0.08" />
        <path d="M55,745 L55,695 M55,745 L105,745" fill="none" stroke="#daa520" strokeWidth="0.5" opacity="0.08" />
        <path d="M1145,745 L1145,695 M1145,745 L1095,745" fill="none" stroke="#daa520" strokeWidth="0.5" opacity="0.08" />

        {/* Figure-8 / infinity interlocking circles */}
        <circle cx="510" cy="400" r="160" fill="none" stroke="#daa520" strokeWidth="2" opacity="0.2" />
        <circle cx="690" cy="400" r="160" fill="none" stroke="#daa520" strokeWidth="2" opacity="0.2" />
        {/* Inner circles */}
        <circle cx="510" cy="400" r="100" fill="none" stroke="#c8860e" strokeWidth="1" opacity="0.12" />
        <circle cx="690" cy="400" r="100" fill="none" stroke="#c8860e" strokeWidth="1" opacity="0.12" />
        {/* Center vesica piscis highlight */}
        <ellipse cx="600" cy="400" rx="50" ry="130" fill="none" stroke="#f0c040" strokeWidth="1.5" opacity="0.15" />

        {/* Orbiting celestial bodies — moons & planets */}
        {/* Saturn-like */}
        <circle cx="280" cy="550" r="18" fill="none" stroke="#8fa6b0" strokeWidth="1" opacity="0.2" />
        <ellipse cx="280" cy="550" rx="30" ry="8" fill="none" stroke="#8fa6b0" strokeWidth="0.5" opacity="0.15" />
        {/* Crescent moon */}
        <circle cx="900" cy="250" r="14" fill="none" stroke="#f5e6c0" strokeWidth="1" opacity="0.2" />
        <circle cx="905" cy="247" r="12" fill="#0c0a08" />
        {/* Half moon */}
        <circle cx="350" cy="220" r="12" fill="none" stroke="#c8b080" strokeWidth="1" opacity="0.18" />
        <rect x="350" y="208" width="12" height="24" fill="#0c0a08" />
        {/* Full planet */}
        <circle cx="850" cy="580" r="20" fill="none" stroke="#daa520" strokeWidth="0.8" opacity="0.15" />
        <circle cx="850" cy="580" r="12" fill="#daa520" opacity="0.04" />
        {/* Eclipse */}
        <circle cx="180" cy="400" r="10" fill="#daa520" opacity="0.08" />
        <circle cx="180" cy="400" r="16" fill="none" stroke="#daa520" strokeWidth="0.5" opacity="0.12" />
        {/* Concentric target */}
        <circle cx="1020" cy="400" r="20" fill="none" stroke="#daa520" strokeWidth="1" opacity="0.12" />
        <circle cx="1020" cy="400" r="12" fill="none" stroke="#daa520" strokeWidth="0.5" opacity="0.1" />
        <circle cx="1020" cy="400" r="4" fill="#daa520" opacity="0.15" />

        {/* Scattered sacred symbols */}
        {/* Upward triangle */}
        <polygon points="440,180 460,210 420,210" fill="none" stroke="#daa520" strokeWidth="0.8" opacity="0.12" />
        {/* Downward triangle */}
        <polygon points="760,600 780,630 740,630" fill="none" stroke="#c8860e" strokeWidth="0.8" opacity="0.1" />
        {/* Diamond */}
        <polygon points="950,150 965,170 950,190 935,170" fill="none" stroke="#f0c040" strokeWidth="0.6" opacity="0.1" />
        {/* Tiny 4-point stars */}
        {[[300, 350], [750, 250], [500, 600], [850, 400], [400, 500]].map(([x, y], i) => (
          <g key={`tstar-${i}`} opacity={0.15 - i * 0.02}>
            <line x1={x - 5} y1={y} x2={x + 5} y2={y} stroke="#f5e6c0" strokeWidth="0.8" />
            <line x1={x} y1={y - 5} x2={x} y2={y + 5} stroke="#f5e6c0" strokeWidth="0.8" />
          </g>
        ))}
      </svg>

      {/* Warm radial glow at center */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(218,165,32,0.08)_0%,rgba(200,134,14,0.04)_40%,transparent_70%)]" />

      <div className="relative z-10 flex flex-col items-center text-center">
        <p className="font-mono text-sm uppercase tracking-[0.5em] text-[#daa520]/40">Echoes from the cosmic market</p>
        <div className="relative my-8">
          <img src="/logos/eggplant-logo-smooth.apng" alt="" className="h-52 w-52 object-contain" style={{ filter: "sepia(0.3) saturate(1.5) brightness(0.9)" }} />
          {/* Radiating sunburst lines behind */}
          <div className="absolute -inset-16 rounded-full bg-[radial-gradient(circle,rgba(240,192,64,0.08)_0%,transparent_60%)]" />
        </div>
        <h1 className="font-mono text-48 uppercase text-[#f5e6c0] md:text-72">
          Echoes of<br /><span className="text-[#daa520]">Djembéya</span>
        </h1>
        <p className="mt-6 max-w-lg text-16 text-[#c8b080]/50">
          Where the eggplant becomes a celestial artifact, orbiting through warm amber space between interlocking sacred circles. A devotional poster from a universe that worships produce.
        </p>
      </div>
    </div>
  );
}
