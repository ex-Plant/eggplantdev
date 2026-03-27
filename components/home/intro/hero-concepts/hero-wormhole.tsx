export function HeroWormhole() {
  return (
    <div id="hero-wormhole" className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#010102]">
      {/* Wormhole tunnel rings */}
      <svg className="pointer-events-none absolute inset-0 h-full w-full overflow-hidden" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
        {Array.from({ length: 20 }, (_, i) => {
          const r = 30 + i * 25;
          const opacity = 0.2 - i * 0.008;
          const color = i % 3 === 0 ? "#10ffaa" : i % 3 === 1 ? "#d946ef" : "#39ff14";
          return (
            <circle key={i} cx="600" cy="400" r={r} fill="none" stroke={color} strokeWidth={i < 5 ? 1 : 0.4} opacity={Math.max(opacity, 0.01)} />
          );
        })}
        {/* Speed lines radiating outward */}
        {Array.from({ length: 24 }, (_, i) => {
          const angle = (Math.PI * 2 * i) / 24;
          const innerR = 200;
          const outerR = 500;
          return (
            <line
              key={`ray-${i}`}
              x1={600 + innerR * Math.cos(angle)}
              y1={400 + innerR * Math.sin(angle)}
              x2={600 + outerR * Math.cos(angle)}
              y2={400 + outerR * Math.sin(angle)}
              stroke="#10ffaa"
              strokeWidth="0.3"
              opacity="0.05"
            />
          );
        })}
      </svg>

      {/* Central void with eggplant emerging */}
      <div className="relative z-10 flex flex-col items-center">
        <div className="relative">
          {/* Glow burst */}
          <div className="absolute -inset-16 rounded-full bg-[radial-gradient(circle,rgba(217,70,239,0.15)_0%,rgba(16,255,170,0.06)_40%,transparent_70%)]" />
          <img src="/logos/eggplant-logo-smooth.apng" alt="" className="relative h-44 w-44 object-contain" />
        </div>

        <div className="mt-8 text-center">
          <p className="font-mono text-sm uppercase tracking-[0.5em] text-[#d946ef]/50">Entering Hyperspace</p>
          <h1 className="mt-4 font-mono text-48 uppercase text-white md:text-72">
            Warp<br />Aubergine
          </h1>
          <p className="mt-6 max-w-md text-16 text-white/25 mx-auto">
            When you npm deploy so hard the eggplant breaks through spacetime. Estimated arrival: after the next sprint.
          </p>
        </div>
      </div>
    </div>
  );
}
