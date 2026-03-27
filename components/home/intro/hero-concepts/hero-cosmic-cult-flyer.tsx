export function HeroCosmicCultFlyer() {
  /* Retro cosmic cult flyer energy — art deco borders, sunburst pattern,
     eggplant as the central deity in a ritual diagram. */
  return (
    <div id="hero-cosmic-cult-flyer" className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0a0806]">
      <svg className="pointer-events-none absolute inset-0 h-full w-full overflow-hidden" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
        {/* Sunburst rays from center */}
        {Array.from({ length: 36 }, (_, i) => {
          const a = (Math.PI * 2 * i) / 36;
          return (
            <line key={`ray-${i}`} x1="600" y1="400" x2={600 + 500 * Math.cos(a)} y2={400 + 500 * Math.sin(a)} stroke={i % 2 === 0 ? "#daa520" : "#c8860e"} strokeWidth={i % 6 === 0 ? 1.5 : 0.5} opacity={i % 6 === 0 ? 0.08 : 0.03} />
          );
        })}

        {/* Ritual diagram rings */}
        <circle cx="600" cy="400" r="80" fill="none" stroke="#daa520" strokeWidth="2.5" opacity="0.2" />
        <circle cx="600" cy="400" r="120" fill="none" stroke="#f0c040" strokeWidth="1" opacity="0.1" strokeDasharray="6 4" />
        <circle cx="600" cy="400" r="180" fill="none" stroke="#daa520" strokeWidth="1.5" opacity="0.12" />
        <circle cx="600" cy="400" r="250" fill="none" stroke="#c8860e" strokeWidth="0.8" opacity="0.06" strokeDasharray="3 8" />
        <circle cx="600" cy="400" r="320" fill="none" stroke="#daa520" strokeWidth="0.5" opacity="0.04" />

        {/* Ritual inscription marks on middle ring */}
        {Array.from({ length: 12 }, (_, i) => {
          const a = (Math.PI * 2 * i) / 12;
          const r = 180;
          return (
            <g key={`mark-${i}`}>
              <line x1={600 + (r - 8) * Math.cos(a)} y1={400 + (r - 8) * Math.sin(a)} x2={600 + (r + 8) * Math.cos(a)} y2={400 + (r + 8) * Math.sin(a)} stroke="#daa520" strokeWidth="1" opacity="0.2" />
              {i % 3 === 0 && <circle cx={600 + (r + 20) * Math.cos(a)} cy={400 + (r + 20) * Math.sin(a)} r="3" fill="#daa520" opacity="0.12" />}
            </g>
          );
        })}

        {/* Hexagram at center behind eggplant */}
        <polygon points="600,340 652,370 652,430 600,460 548,430 548,370" fill="none" stroke="#f0c040" strokeWidth="1" opacity="0.1" />
        <polygon points="600,350 642,375 642,425 600,450 558,425 558,375" fill="none" stroke="#daa520" strokeWidth="0.5" opacity="0.06" />

        {/* Art deco full border */}
        <rect x="30" y="30" width="1140" height="740" fill="none" stroke="#daa520" strokeWidth="1" opacity="0.08" />
        <rect x="45" y="45" width="1110" height="710" fill="none" stroke="#daa520" strokeWidth="0.5" opacity="0.05" />
      </svg>

      {/* Grain overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")" }} />

      <div className="relative z-10 flex flex-col items-center text-center">
        <p className="text-sm uppercase tracking-[0.6em] text-[#daa520]/30" style={{ fontFamily: "monospace" }}>⟡ The Sacred Order of the Aubergine ⟡</p>
        <div className="relative my-6">
          <img src="/logos/eggplant-logo-smooth.apng" alt="" className="h-44 w-44 object-contain" style={{ filter: "sepia(0.2) saturate(1.3)" }} />
        </div>
        <h1 className="font-mono text-56 uppercase leading-none text-[#f5e6c0] md:text-[5rem]">
          Cosmic<br />Cult<br /><span className="text-[#daa520]">Flyer</span>
        </h1>
        <p className="mt-6 max-w-md text-16 text-[#c8b080]/40">
          You have been chosen. The eggplant sees all. Bring your offerings of TypeScript and deploy with devotion. Meetings are held at every sprint retrospective.
        </p>
        <div className="mt-8 flex gap-3">
          <span className="rounded-full border border-[#daa520]/25 px-5 py-2 font-mono text-sm uppercase text-[#daa520]/50">Join the Order</span>
          <span className="rounded-full border border-[#c8860e]/20 px-5 py-2 font-mono text-sm uppercase text-[#c8860e]/40">Read the Scrolls</span>
        </div>
      </div>
    </div>
  );
}
