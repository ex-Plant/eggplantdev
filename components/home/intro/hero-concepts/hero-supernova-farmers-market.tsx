export function HeroSupernovaFarmersMarket() {
  return (
    <div id="hero-supernova-farmers-market" className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#020102]">
      <svg className="pointer-events-none absolute inset-0 h-full w-full overflow-hidden" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
        {Array.from({ length: 12 }, (_, i) => {
          const r = 40 + i * 38;
          const colors = ["#10ffaa", "#ff1493", "#daa520", "#39ff14", "#d946ef", "#00e5ff"];
          return (
            <circle
              key={`ring-${i}`}
              cx="600"
              cy="400"
              r={r}
              fill="none"
              stroke={colors[i % colors.length]}
              strokeWidth={3 - i * 0.2}
              opacity={0.25 - i * 0.018}
              strokeDasharray={i > 6 ? "8 12" : "none"}
            />
          );
        })}
        <circle cx="380" cy="280" r="25" fill="none" stroke="#10ffaa" strokeWidth="0.8" opacity="0.15" />
        <circle cx="400" cy="280" r="25" fill="none" stroke="#10ffaa" strokeWidth="0.8" opacity="0.15" />
        {Array.from({ length: 6 }, (_, i) => {
          const a = (Math.PI * 2 * i) / 6;
          return <circle key={`seed-${i}`} cx={820 + 15 * Math.cos(a)} cy={320 + 15 * Math.sin(a)} r="15" fill="none" stroke="#d946ef" strokeWidth="0.6" opacity="0.12" />;
        })}
        <circle cx="820" cy="320" r="15" fill="none" stroke="#d946ef" strokeWidth="0.6" opacity="0.12" />
        <polygon points="450,520 490,580 410,580" fill="none" stroke="#daa520" strokeWidth="0.8" opacity="0.15" />
        <polygon points="750,180 780,210 780,250 750,280 720,250 720,210" fill="none" stroke="#39ff14" strokeWidth="0.5" opacity="0.1" />
        {Array.from({ length: 40 }, (_, i) => {
          const angle = (Math.PI * 2 * i) / 40;
          const dist = 100 + (i * 37) % 350;
          return (
            <circle
              key={`debris-${i}`}
              cx={600 + dist * Math.cos(angle)}
              cy={400 + dist * Math.sin(angle)}
              r={i % 5 === 0 ? 2.5 : 1}
              fill={i % 3 === 0 ? "#10ffaa" : i % 3 === 1 ? "#ff1493" : "#daa520"}
              opacity={0.3 - (dist / 1500)}
            />
          );
        })}
      </svg>

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,20,147,0.12)_0%,rgba(16,255,170,0.06)_30%,rgba(218,165,32,0.03)_50%,transparent_70%)]" />

      <div className="relative z-10 flex flex-col items-center text-center">
        <h1 className="font-mono text-64 uppercase leading-none text-white/90 md:text-[7rem]">
          Konrad
        </h1>
        <p className="mt-2 font-mono text-20 uppercase tracking-[0.6em] text-[#10ffaa]/50">
          Antonik
        </p>
        <p className="mt-8 max-w-lg text-16 text-white/20">
          A massive eggplant detonated like a dying star. In the calm eye of the explosion: a frontend developer, perfectly still. The shockwave carries sacred geometry into the void.
        </p>
      </div>
    </div>
  );
}
