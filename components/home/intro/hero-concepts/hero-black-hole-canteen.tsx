export function HeroBlackHoleCanteen() {
  return (
    <div id="hero-blackhole-canteen" className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#010103]">
      {/* Accretion disk */}
      <svg className="pointer-events-none absolute inset-0 h-full w-full overflow-hidden" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
        {Array.from({ length: 8 }, (_, i) => (
          <ellipse key={i} cx="600" cy="400" rx={80 + i * 40} ry={20 + i * 8} fill="none" stroke={i % 2 === 0 ? "#10ffaa" : "#d946ef"} strokeWidth={2 - i * 0.2} opacity={0.2 - i * 0.02} transform={`rotate(${-15 + i * 2} 600 400)`} />
        ))}
        <circle cx="600" cy="400" r="45" fill="#000" stroke="#10ffaa" strokeWidth="1.5" opacity="0.2" />
        <circle cx="600" cy="400" r="15" fill="#10ffaa" opacity="0.08" />
      </svg>
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(16,255,170,0.06)_0%,rgba(217,70,239,0.04)_40%,transparent_70%)] blur-xl" />

      <div className="relative z-10 flex flex-col items-center text-center">
        <img src="/logos/eggplant-logo-smooth.apng" alt="" className="h-36 w-36 object-contain" />
        <h1 className="mt-10 font-mono text-48 uppercase text-white md:text-64">
          Black Hole<br /><span className="text-[#10ffaa]">Canteen</span>
        </h1>
        <p className="mt-6 max-w-lg text-16 text-white/25 mx-auto">
          Where vegetables go after git push --force. The eggplant has been spaghettified but the code still compiles. Menu: event horizon soup, singularity risotto, and dark matter on tap.
        </p>
        <div className="mt-8 font-mono text-sm uppercase tracking-[0.3em] text-[#d946ef]/40">
          — No refunds past the event horizon —
        </div>
      </div>
    </div>
  );
}
