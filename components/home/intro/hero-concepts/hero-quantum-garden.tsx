export function HeroQuantumGarden() {
  return (
    <div id="hero-quantum-garden" className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#010204]">
      {/* Growing vines made of geometry */}
      <svg className="pointer-events-none absolute inset-0 h-full w-full overflow-hidden" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
        <path d="M100,800 C200,600 150,400 300,300 S500,200 600,400" fill="none" stroke="#10ffaa" strokeWidth="0.8" opacity="0.1" />
        <path d="M1100,800 C1000,650 1050,450 900,350 S700,250 600,400" fill="none" stroke="#39ff14" strokeWidth="0.8" opacity="0.08" />
        <path d="M600,400 C600,300 650,200 600,100" fill="none" stroke="#00e676" strokeWidth="0.6" opacity="0.06" />
        {[[300, 300], [600, 400], [900, 350], [200, 550], [1000, 500], [600, 150]].map(([cx, cy], i) => (
          <g key={i}>
            {Array.from({ length: 6 }, (_, j) => {
              const a = (Math.PI * 2 * j) / 6;
              return <ellipse key={j} cx={cx + 20 * Math.cos(a)} cy={cy + 20 * Math.sin(a)} rx="12" ry="6" fill="none" stroke="#10ffaa" strokeWidth="0.4" opacity="0.08" transform={`rotate(${60 * j} ${cx + 20 * Math.cos(a)} ${cy + 20 * Math.sin(a)})`} />;
            })}
            <circle cx={cx} cy={cy} r="3" fill="#10ffaa" opacity="0.15" />
          </g>
        ))}
      </svg>

      <div className="relative z-10 flex flex-col items-center text-center px-4">
        <p className="font-mono text-sm uppercase tracking-[0.5em] text-[#10ffaa]/30">Superposition: planted & deployed</p>
        <div className="relative my-8">
          <img src="/logos/eggplant-logo-smooth.apng" alt="" className="h-48 w-48 object-contain" />
          <div className="absolute -inset-6 rounded-full border border-[#10ffaa]/10 border-dashed" />
        </div>
        <h1 className="font-mono text-48 uppercase text-white md:text-72">
          Quantum<br /><span className="text-[#39ff14]">Garden</span>
        </h1>
        <p className="mt-6 max-w-lg text-16 text-white/25">
          The eggplant exists in superposition: simultaneously a vegetable and a design system mascot. Observation collapses the state. Scrolling counts as observation.
        </p>
        <p className="mt-4 font-mono text-sm text-[#10ffaa]/30 tracking-wider">
          Schrödinger&apos;s deploy: it both works and doesn&apos;t until QA opens the box
        </p>
      </div>
    </div>
  );
}
