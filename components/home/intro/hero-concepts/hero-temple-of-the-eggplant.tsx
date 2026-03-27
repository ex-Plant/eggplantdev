export function HeroTempleOfTheEggplant() {
  return (
    <div id="hero-temple" className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#020206]">
      {/* Sacred temple geometry */}
      <svg className="pointer-events-none absolute inset-0 h-full w-full overflow-hidden" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
        {/* Sri Yantra inspired */}
        <rect x="250" y="100" width="700" height="600" fill="none" stroke="#10ffaa" strokeWidth="0.4" opacity="0.05" />
        <rect x="280" y="130" width="640" height="540" fill="none" stroke="#10ffaa" strokeWidth="0.3" opacity="0.04" />
        {/* Interlocking triangles */}
        <polygon points="600,120 900,620 300,620" fill="none" stroke="#10ffaa" strokeWidth="0.6" opacity="0.08" />
        <polygon points="600,680 900,180 300,180" fill="none" stroke="#d946ef" strokeWidth="0.6" opacity="0.06" />
        <polygon points="600,200 800,560 400,560" fill="none" stroke="#39ff14" strokeWidth="0.5" opacity="0.05" />
        <polygon points="600,600 800,240 400,240" fill="none" stroke="#00e676" strokeWidth="0.5" opacity="0.04" />
        {/* Central bindu */}
        <circle cx="600" cy="400" r="8" fill="#10ffaa" opacity="0.15" />
        <circle cx="600" cy="400" r="3" fill="#10ffaa" opacity="0.3" />
        {/* Lotus petals hint */}
        {Array.from({ length: 8 }, (_, i) => {
          const angle = (Math.PI * 2 * i) / 8;
          const r = 60;
          return (
            <ellipse
              key={i}
              cx={600 + r * Math.cos(angle)}
              cy={400 + r * Math.sin(angle)}
              rx="35"
              ry="15"
              fill="none"
              stroke="#10ffaa"
              strokeWidth="0.4"
              opacity="0.06"
              transform={`rotate(${(360 / 8) * i} ${600 + r * Math.cos(angle)} ${400 + r * Math.sin(angle)})`}
            />
          );
        })}
      </svg>

      <div className="relative z-10 flex flex-col items-center text-center">
        <p className="font-mono text-sm uppercase tracking-[0.6em] text-[#10ffaa]/40">Est. 2022 CE</p>

        <div className="relative my-10">
          <div className="absolute -inset-20 rounded-full bg-[radial-gradient(circle,rgba(16,255,170,0.06)_0%,rgba(217,70,239,0.03)_50%,transparent_70%)]" />
          <img src="/logos/eggplant-logo-smooth.apng" alt="" className="relative h-52 w-52 object-contain" />
        </div>

        <h1 className="font-mono text-40 uppercase tracking-wider text-white md:text-56">
          Temple of the<br />
          <span className="bg-gradient-to-r from-[#10ffaa] via-[#d946ef] to-[#39ff14] bg-clip-text text-transparent">Holy Aubergine</span>
        </h1>
        <p className="mt-8 max-w-lg text-16 text-white/25 leading-relaxed">
          In the beginning there was a div. And the div was without class, and void. And the Spirit of the Eggplant moved upon the face of the viewport. And it was deployed. And it was good.
        </p>
        <div className="mt-10 flex gap-3">
          <span className="rounded-full border border-[#10ffaa]/20 px-5 py-2 font-mono text-sm uppercase text-[#10ffaa]/40">Enter the Temple</span>
          <span className="rounded-full border border-[#d946ef]/20 px-5 py-2 font-mono text-sm uppercase text-[#d946ef]/40">Read the Scriptures</span>
        </div>
      </div>
    </div>
  );
}
