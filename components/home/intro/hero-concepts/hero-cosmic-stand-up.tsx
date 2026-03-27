export function HeroCosmicStandUp() {
  return (
    <div id="hero-cosmic-standup" className="relative flex min-h-screen items-center overflow-hidden bg-[#020204]">
      {/* Spotlight cone */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-full w-[600px] -translate-x-1/2 overflow-hidden bg-[linear-gradient(180deg,rgba(16,255,170,0.03)_0%,rgba(16,255,170,0.01)_40%,transparent_70%)]" style={{ clipPath: "polygon(40% 0%, 60% 0%, 80% 100%, 20% 100%)" }} />

      {/* Stage floor line */}
      <div className="pointer-events-none absolute bottom-[25%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#10ffaa]/15 to-transparent" />

      <div className="fest-container relative z-10">
        <div className="flex flex-col items-center text-center">
          <img src="/logos/eggplant-logo-smooth.apng" alt="" className="h-44 w-44 object-contain" />

          <h1 className="mt-10 font-mono text-48 uppercase text-white md:text-72">
            Cosmic<br /><span className="text-[#10ffaa]">Stand-Up</span>
          </h1>

          <p className="mt-10 font-mono text-sm uppercase tracking-[0.3em] text-white/15">
            * No vegetables were harmed during this deployment *
          </p>
        </div>
      </div>
    </div>
  );
}
