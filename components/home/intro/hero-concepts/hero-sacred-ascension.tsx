export function HeroSacredAscension() {
  return (
    <div id="hero-sacred-ascension" className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#020204]">
      {/* Sacred geometry background */}
      <svg className="pointer-events-none absolute inset-0 h-full w-full overflow-hidden" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
        {/* Metatron's cube */}
        {[
          [600, 400], [600, 300], [600, 500],
          [687, 350], [513, 350], [687, 450], [513, 450],
        ].map(([cx, cy], i) => (
          <circle key={`mc-${i}`} cx={cx} cy={cy} r={100} fill="none" stroke="#10ffaa" strokeWidth="0.4" opacity="0.12" />
        ))}
        {/* Connecting lines */}
        {[
          "M600,300 L687,350", "M600,300 L513,350", "M687,350 L687,450",
          "M513,350 L513,450", "M687,450 L600,500", "M513,450 L600,500",
          "M600,300 L600,500", "M513,350 L687,450", "M687,350 L513,450",
        ].map((d, i) => (
          <path key={`line-${i}`} d={d} fill="none" stroke="#10ffaa" strokeWidth="0.5" opacity="0.08" />
        ))}
        {/* Outer containing circles */}
        <circle cx="600" cy="400" r="200" fill="none" stroke="#39ff14" strokeWidth="0.3" opacity="0.06" strokeDasharray="8 12" />
        <circle cx="600" cy="400" r="300" fill="none" stroke="#00e676" strokeWidth="0.3" opacity="0.04" strokeDasharray="4 16" />
        <circle cx="600" cy="400" r="380" fill="none" stroke="#10ffaa" strokeWidth="0.2" opacity="0.03" />
      </svg>

      {/* Radial glow behind eggplant */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(16,255,170,0.1)_0%,rgba(57,255,20,0.04)_40%,transparent_70%)]" />

      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Eggplant */}
        <div className="relative">
          <img src="/logos/eggplant-logo-smooth.apng" alt="" className="h-48 w-48 object-contain" />
          {/* Halo ring */}
          <div className="absolute -inset-8 rounded-full border border-[#10ffaa]/15" />
          <div className="absolute -inset-16 rounded-full border border-[#10ffaa]/8" />
          <div className="absolute -inset-24 rounded-full border border-[#10ffaa]/4 border-dashed" />
        </div>

        <h1 className="mt-12 font-mono text-20 uppercase tracking-[0.4em] text-[#10ffaa]/60">
          Eggplants in Space
        </h1>
        <p className="mt-4 max-w-md text-16 text-white/30">
          Shipping produce to the void since the last deployment.
        </p>
      </div>

      {/* Star particles */}
      {[
        [15, 20], [85, 15], [10, 70], [90, 65], [50, 10], [30, 85], [70, 80],
        [20, 45], [80, 40], [45, 90], [60, 25], [35, 60], [75, 55],
      ].map(([x, y], i) => (
        <div
          key={i}
          className="pointer-events-none absolute rounded-full bg-white"
          style={{
            left: `${x}%`,
            top: `${y}%`,
            width: i % 3 === 0 ? 3 : 1.5,
            height: i % 3 === 0 ? 3 : 1.5,
            opacity: 0.15 + (i % 4) * 0.1,
          }}
        />
      ))}
    </div>
  );
}
