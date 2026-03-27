export function HeroVoidLiturgy() {
  return (
    <div id="hero-void-liturgy" className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#000000]">
      <svg className="pointer-events-none absolute inset-0 h-full w-full overflow-hidden" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
        {Array.from({ length: 24 }, (_, i) => {
          const r = 20 + i * 16;
          const colors = ["#10ffaa", "#d946ef", "#39ff14", "#00e5ff", "#ff1493", "#daa520"];
          const hasDecoration = i % 4 === 0;
          return (
            <g key={`ring-${i}`}>
              <circle
                cx="600"
                cy="400"
                r={r}
                fill="none"
                stroke={colors[i % colors.length]}
                strokeWidth={i < 6 ? 1.2 : i < 12 ? 0.8 : 0.4}
                opacity={0.25 - i * 0.008}
                strokeDasharray={i % 3 === 2 ? "3 6" : "none"}
              />
              {hasDecoration && Array.from({ length: 12 }, (_, j) => {
                const a = (Math.PI * 2 * j) / 12;
                return (
                  <circle
                    key={`dot-${i}-${j}`}
                    cx={600 + r * Math.cos(a)}
                    cy={400 + r * Math.sin(a)}
                    r="2"
                    fill={colors[i % colors.length]}
                    opacity="0.15"
                  />
                );
              })}
            </g>
          );
        })}
        {Array.from({ length: 24 }, (_, i) => {
          const a = (Math.PI * 2 * i) / 24;
          return (
            <line
              key={`rib-${i}`}
              x1={600 + 60 * Math.cos(a)}
              y1={400 + 60 * Math.sin(a)}
              x2={600 + 400 * Math.cos(a)}
              y2={400 + 400 * Math.sin(a)}
              stroke="#10ffaa"
              strokeWidth="0.2"
              opacity="0.04"
            />
          );
        })}
      </svg>

      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden">
        {Array.from({ length: 8 }, (_, i) => {
          const a = (360 / 8) * i;
          return (
            <div
              key={`ray-${i}`}
              className="absolute left-1/2 top-1/2 h-[600px] w-[3px] origin-top -translate-x-1/2"
              style={{
                transform: `rotate(${a}deg)`,
                background: "linear-gradient(180deg, rgba(16,255,170,0.08) 0%, transparent 60%)",
              }}
            />
          );
        })}
      </div>

      <div className="relative z-10 flex flex-col items-center">
        <div className="relative">
          <img src="/logos/eggplant-logo-smooth.apng" alt="" className="h-40 w-40 object-contain" style={{ filter: "drop-shadow(0 0 30px rgba(16,255,170,0.3)) drop-shadow(0 0 60px rgba(217,70,239,0.15))" }} />
          <div className="absolute -inset-10 rounded-full bg-[radial-gradient(circle,rgba(16,255,170,0.1)_0%,rgba(217,70,239,0.05)_40%,transparent_70%)]" />
        </div>

        <div className="mt-16 flex items-center gap-4">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#10ffaa]/20" />
          <span className="font-mono text-sm uppercase tracking-[0.8em] text-[#10ffaa]/40">Konrad Antonik</span>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#10ffaa]/20" />
        </div>

        <h1 className="mt-6 font-mono text-48 uppercase text-white md:text-72">
          Void<br /><span className="bg-gradient-to-r from-[#10ffaa] via-[#d946ef] to-[#ff1493] bg-clip-text text-transparent">Liturgy</span>
        </h1>
        <p className="mt-6 max-w-md text-16 text-white/20 mx-auto text-center">
          Pure black. A single neon circle appears. Then another. Then another. Concentric rings building a mandala. At the center, the eggplant materializes, casting light through the geometry like stained glass. A summoning ritual that actually worked.
        </p>
      </div>
    </div>
  );
}
