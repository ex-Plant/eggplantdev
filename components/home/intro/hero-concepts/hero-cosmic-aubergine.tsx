export function HeroCosmicAubergine() {
  return (
    <div id="hero-cosmic-aubergine" className="relative flex min-h-screen items-center overflow-hidden bg-[#030108]">
      {/* Deep space nebula */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[10%] top-[20%] h-[60%] w-[40%] rounded-full bg-[radial-gradient(ellipse,rgba(89,20,162,0.15),transparent_60%)] blur-3xl" />
        <div className="absolute right-[5%] top-[10%] h-[50%] w-[35%] rounded-full bg-[radial-gradient(ellipse,rgba(16,255,170,0.06),transparent_60%)] blur-3xl" />
        <div className="absolute bottom-[10%] left-[30%] h-[40%] w-[45%] rounded-full bg-[radial-gradient(ellipse,rgba(217,70,239,0.08),transparent_60%)] blur-3xl" />
      </div>

      <div className="fest-container relative z-10 grid gap-16 md:grid-cols-2 md:items-center">
        {/* Left: text */}
        <div>
          <p className="font-mono text-16 uppercase tracking-[0.3em] text-[#10ffaa]/50">Mission Control</p>
          <h1 className="mt-6 font-mono text-64 uppercase leading-none text-white md:text-[5.5rem]">
            Eggplant<br />
            <span className="text-[#d946ef]">in</span><br />
            Space
          </h1>
          <p className="mt-8 max-w-md text-20 text-white/35 leading-relaxed">
            One aubergine&apos;s journey through the cosmos of frontend development, sacred geometry, and questionable deployment decisions.
          </p>
          <div className="mt-10 flex gap-4">
            <span className="rounded-full border border-[#10ffaa]/30 px-5 py-2.5 font-mono text-sm uppercase tracking-wider text-[#10ffaa]/60">Launch Sequence</span>
            <span className="rounded-full border border-[#d946ef]/30 px-5 py-2.5 font-mono text-sm uppercase tracking-wider text-[#d946ef]/60">Abort Mission</span>
          </div>
        </div>

        {/* Right: eggplant with geometry */}
        <div className="relative flex items-center justify-center overflow-hidden">
          <svg className="absolute h-[420px] w-[420px] overflow-hidden" viewBox="0 0 420 420">
            {/* Flower of life fragment */}
            {[
              [210, 210], [210, 140], [210, 280],
              [270, 175], [150, 175], [270, 245], [150, 245],
            ].map(([cx, cy], i) => (
              <circle key={i} cx={cx} cy={cy} r={70} fill="none" stroke="#d946ef" strokeWidth="0.5" opacity="0.12" />
            ))}
            {/* Outer ring */}
            <circle cx="210" cy="210" r="190" fill="none" stroke="#10ffaa" strokeWidth="0.6" opacity="0.1" strokeDasharray="6 10" />
            {/* Triangle */}
            <polygon points="210,50 370,330 50,330" fill="none" stroke="#10ffaa" strokeWidth="0.4" opacity="0.06" />
            <polygon points="210,370 370,90 50,90" fill="none" stroke="#d946ef" strokeWidth="0.4" opacity="0.05" />
          </svg>

          <img src="/logos/eggplant-logo-smooth.apng" alt="" className="relative z-10 h-56 w-56 object-contain" />
        </div>
      </div>
    </div>
  );
}
