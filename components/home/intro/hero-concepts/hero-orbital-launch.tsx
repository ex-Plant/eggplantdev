export function HeroOrbitalLaunch() {
  return (
    <div id="hero-orbital-launch" className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#010204]">
      {/* Orbital rings */}
      <svg className="pointer-events-none absolute inset-0 h-full w-full overflow-hidden" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
        {[
          { rx: 180, ry: 80, rot: -20, color: "#10ffaa", w: 1.5 },
          { rx: 280, ry: 110, rot: 15, color: "#39ff14", w: 1 },
          { rx: 380, ry: 150, rot: -8, color: "#d946ef", w: 0.6 },
          { rx: 480, ry: 180, rot: 25, color: "#8c99f1", w: 0.4 },
          { rx: 560, ry: 200, rot: -12, color: "#00e676", w: 0.3 },
        ].map((o, i) => (
          <ellipse key={i} cx="600" cy="400" rx={o.rx} ry={o.ry} fill="none" stroke={o.color} strokeWidth={o.w} opacity={0.15 - i * 0.02} transform={`rotate(${o.rot} 600 400)`} />
        ))}
        {/* Orbiting planet dots */}
        <circle cx="780" cy="380" r="4" fill="#10ffaa" opacity="0.6" />
        <circle cx="780" cy="380" r="10" fill="none" stroke="#10ffaa" strokeWidth="0.5" opacity="0.3" />
        <circle cx="380" cy="310" r="3" fill="#d946ef" opacity="0.5" />
        <circle cx="950" cy="450" r="2" fill="#39ff14" opacity="0.4" />
        <circle cx="250" cy="500" r="2.5" fill="#8c99f1" opacity="0.4" />
      </svg>

      {/* Central eggplant as the sun */}
      <div className="relative z-10">
        <div className="relative">
          <img src="/logos/eggplant-logo-smooth.apng" alt="" className="h-64 w-64 object-contain" />
          {/* Corona glow */}
          <div className="absolute -inset-12 rounded-full bg-[radial-gradient(circle,rgba(16,255,170,0.12),transparent_70%)]" />
        </div>
      </div>

      <div className="relative z-10 mt-10 text-center">
        <h1 className="font-mono text-48 uppercase tracking-wider text-white md:text-64">
          The Solar<br /><span className="text-[#10ffaa]">Aubergine</span>
        </h1>
        <p className="mt-6 max-w-lg text-16 text-white/30 mx-auto">
          At the center of every good deployment is a vegetable nobody asked for but everyone needed. Five orbiting principles. One cosmic produce.
        </p>
      </div>

      {/* Star field */}
      {Array.from({ length: 30 }, (_, i) => (
        <div
          key={i}
          className="pointer-events-none absolute rounded-full bg-white"
          style={{
            left: `${(i * 37 + 13) % 100}%`,
            top: `${(i * 53 + 7) % 100}%`,
            width: i % 5 === 0 ? 2.5 : 1,
            height: i % 5 === 0 ? 2.5 : 1,
            opacity: 0.08 + (i % 4) * 0.08,
          }}
        />
      ))}
    </div>
  );
}
