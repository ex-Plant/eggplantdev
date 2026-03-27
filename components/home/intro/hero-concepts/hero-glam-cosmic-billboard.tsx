export function HeroGlamCosmicBillboard() {
  /* Candy supernova / glam cosmic billboard — hot pink + gold collision,
     theatrical, like a perfume ad for a vegetable from space. */
  return (
    <div id="hero-glam-cosmic-billboard" className="relative flex min-h-screen items-center overflow-hidden bg-[#0a0408]">
      {/* Dual-tone nebula wash */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-0 h-[70%] w-[50%] bg-[radial-gradient(ellipse_at_top_left,rgba(218,165,32,0.08),transparent_60%)]" />
        <div className="absolute bottom-0 right-0 h-[70%] w-[50%] bg-[radial-gradient(ellipse_at_bottom_right,rgba(255,20,147,0.06),transparent_60%)]" />
      </div>

      <svg className="pointer-events-none absolute inset-0 h-full w-full overflow-hidden" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
        {/* Diagonal glam stripe */}
        <line x1="0" y1="600" x2="1200" y2="200" stroke="#daa520" strokeWidth="60" opacity="0.03" />
        <line x1="0" y1="620" x2="1200" y2="220" stroke="#ff1493" strokeWidth="1" opacity="0.08" />
        <line x1="0" y1="580" x2="1200" y2="180" stroke="#daa520" strokeWidth="1" opacity="0.08" />

        {/* Orbital arcs — gold and pink */}
        <ellipse cx="400" cy="400" rx="300" ry="350" fill="none" stroke="#daa520" strokeWidth="1.5" opacity="0.08" transform="rotate(-15 400 400)" />
        <ellipse cx="800" cy="400" rx="280" ry="320" fill="none" stroke="#ff1493" strokeWidth="1" opacity="0.06" transform="rotate(10 800 400)" />

        {/* Sparkle cluster */}
        {Array.from({ length: 20 }, (_, i) => {
          const x = 200 + (i * 47) % 800;
          const y = 100 + (i * 61) % 600;
          return (
            <g key={`sparkle-${i}`} opacity={0.15 - (i % 4) * 0.03}>
              <line x1={x - 3} y1={y} x2={x + 3} y2={y} stroke={i % 2 === 0 ? "#daa520" : "#ff1493"} strokeWidth="0.8" />
              <line x1={x} y1={y - 3} x2={x} y2={y + 3} stroke={i % 2 === 0 ? "#daa520" : "#ff1493"} strokeWidth="0.8" />
            </g>
          );
        })}
      </svg>

      <div className="fest-container relative z-10 grid gap-12 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <p className="font-mono text-sm uppercase tracking-[0.4em] text-[#ff1493]/40">Limited Edition</p>
          <h1 className="mt-4 text-[4rem] font-bold uppercase leading-[0.9] text-[#f5e6c0] md:text-[6rem]" style={{ fontFamily: "monospace" }}>
            Aubergine<br />
            <span className="text-[#daa520]">d&apos;Or</span>
          </h1>
          <p className="mt-6 max-w-md text-20 text-[#c8b080]/40 leading-relaxed">
            A fragrance for the cosmos. Notes of sacred geometry, TypeScript, and freshly deployed produce. Bottled at the event horizon.
          </p>
          <div className="mt-8 flex gap-4">
            <span className="rounded-full bg-[#daa520]/10 border border-[#daa520]/25 px-6 py-2.5 font-mono text-sm uppercase tracking-wider text-[#daa520]/70">Pre-Order</span>
            <span className="rounded-full border border-[#ff1493]/20 px-6 py-2.5 font-mono text-sm uppercase tracking-wider text-[#ff1493]/50">Watch Film</span>
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="absolute h-[350px] w-[350px] rounded-full bg-[radial-gradient(circle,rgba(218,165,32,0.1)_0%,rgba(255,20,147,0.04)_50%,transparent_70%)]" />
          <img src="/logos/eggplant-logo-smooth.apng" alt="" className="relative h-56 w-56 object-contain" style={{ filter: "sepia(0.15) saturate(1.6) brightness(1.05)" }} />
        </div>
      </div>
    </div>
  );
}
