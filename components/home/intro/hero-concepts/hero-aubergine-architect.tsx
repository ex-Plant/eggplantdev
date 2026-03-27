export function HeroAubergineArchitect() {
  return (
    <div id="hero-aubergine-architect" className="relative min-h-screen overflow-hidden bg-[#020206]">
      {/* Blueprint grid */}
      <svg className="pointer-events-none absolute inset-0 h-full w-full overflow-hidden opacity-[0.04]" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
        {Array.from({ length: 25 }, (_, i) => <line key={`h${i}`} x1="0" y1={i * 32} x2="1200" y2={i * 32} stroke="#10ffaa" strokeWidth="0.5" />)}
        {Array.from({ length: 38 }, (_, i) => <line key={`v${i}`} x1={i * 32} y1="0" x2={i * 32} y2="800" stroke="#10ffaa" strokeWidth="0.5" />)}
        <path d="M600,400 Q650,350 700,400 Q750,500 600,550 Q400,600 350,400 Q300,150 600,100 Q950,50 1000,400" fill="none" stroke="#d946ef" strokeWidth="1" opacity="0.5" />
      </svg>

      <div className="fest-container relative z-10 flex min-h-screen flex-col justify-center py-20">
        <div className="grid gap-12 md:grid-cols-[auto_1fr] md:items-center">
          <div className="relative overflow-hidden">
            <svg className="absolute -inset-8 h-[calc(100%+64px)] w-[calc(100%+64px)] overflow-hidden" viewBox="0 0 280 280">
              <circle cx="140" cy="140" r="130" fill="none" stroke="#10ffaa" strokeWidth="0.5" opacity="0.15" />
              {Array.from({ length: 36 }, (_, i) => {
                const a = (Math.PI * 2 * i) / 36;
                const inner = i % 9 === 0 ? 110 : 120;
                return <line key={i} x1={140 + inner * Math.cos(a)} y1={140 + inner * Math.sin(a)} x2={140 + 130 * Math.cos(a)} y2={140 + 130 * Math.sin(a)} stroke="#10ffaa" strokeWidth={i % 9 === 0 ? 1 : 0.3} opacity={i % 9 === 0 ? 0.3 : 0.1} />;
              })}
              <text x="140" y="22" textAnchor="middle" fill="#10ffaa" fontSize="10" fontFamily="monospace" opacity="0.3">N</text>
              <text x="260" y="145" textAnchor="middle" fill="#10ffaa" fontSize="10" fontFamily="monospace" opacity="0.3">E</text>
              <text x="140" y="268" textAnchor="middle" fill="#10ffaa" fontSize="10" fontFamily="monospace" opacity="0.3">S</text>
              <text x="20" y="145" textAnchor="middle" fill="#10ffaa" fontSize="10" fontFamily="monospace" opacity="0.3">W</text>
            </svg>
            <img src="/logos/eggplant-logo-smooth.apng" alt="" className="relative h-44 w-44 object-contain" />
          </div>

          <div>
            <p className="font-mono text-sm uppercase tracking-[0.4em] text-[#10ffaa]/40">Blueprint Revision ∞.0</p>
            <h1 className="mt-4 font-mono text-48 uppercase leading-none text-white md:text-72">
              The Aubergine<br /><span className="text-[#10ffaa]">Architect</span>
            </h1>
            <p className="mt-6 max-w-xl text-20 text-white/30 leading-relaxed">
              Every great structure starts with a questionable vegetable and a grid nobody asked for. The golden ratio was discovered by an eggplant. This is not historically accurate but it feels right.
            </p>
            <div className="mt-10 flex gap-6">
              {["Blueprints", "Elevation", "Cross-section"].map((label) => (
                <span key={label} className="font-mono text-sm uppercase tracking-wider text-[#10ffaa]/30 border-b border-[#10ffaa]/10 pb-1">{label}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
