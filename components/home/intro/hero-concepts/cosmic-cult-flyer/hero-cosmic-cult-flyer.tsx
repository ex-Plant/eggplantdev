import {
  PALETTE,
  SVG_CENTER,
  RAYS,
  RITUAL_RINGS,
  INSCRIPTIONS,
  HEXAGRAMS,
  BORDERS,
  GRAIN_BG_IMAGE,
  EGGPLANT,
  COPY,
} from "./config";

export function HeroCosmicCultFlyer() {
  /* Retro cosmic cult flyer energy — art deco borders, sunburst pattern,
     eggplant as the central deity in a ritual diagram. */
  return (
    <div id="hero-cosmic-cult-flyer" className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0a0806]">
      <svg className="pointer-events-none absolute inset-0 h-full w-full overflow-hidden" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
        {/* Sunburst rays from center */}
        {RAYS.map((ray, i) => (
          <line key={`ray-${i}`} x1={SVG_CENTER.x} y1={SVG_CENTER.y} x2={ray.x2} y2={ray.y2} stroke={ray.stroke} strokeWidth={ray.strokeWidth} opacity={ray.opacity} />
        ))}

        {/* Ritual diagram rings */}
        {RITUAL_RINGS.map((ring) => (
          <circle key={ring.r} cx={SVG_CENTER.x} cy={SVG_CENTER.y} r={ring.r} fill="none" stroke={ring.color} strokeWidth={ring.strokeWidth} opacity={ring.opacity} strokeDasharray={ring.dasharray} />
        ))}

        {/* Ritual inscription marks on middle ring */}
        {INSCRIPTIONS.map((mark, i) => (
          <g key={`mark-${i}`}>
            <line x1={mark.x1} y1={mark.y1} x2={mark.x2} y2={mark.y2} stroke={PALETTE.gold} strokeWidth="1" opacity="0.2" />
            {mark.hasDot && <circle cx={mark.dotCx} cy={mark.dotCy} r="3" fill={PALETTE.gold} opacity="0.12" />}
          </g>
        ))}

        {/* Hexagram at center behind eggplant */}
        <polygon points={HEXAGRAMS.outer} fill="none" stroke={PALETTE.softGold} strokeWidth="1" opacity="0.1" />
        <polygon points={HEXAGRAMS.inner} fill="none" stroke={PALETTE.gold} strokeWidth="0.5" opacity="0.06" />

        {/* Art deco full border */}
        <rect x={BORDERS.outer.x} y={BORDERS.outer.y} width={BORDERS.outer.width} height={BORDERS.outer.height} fill="none" stroke={PALETTE.gold} strokeWidth="1" opacity={BORDERS.outer.opacity} />
        <rect x={BORDERS.inner.x} y={BORDERS.inner.y} width={BORDERS.inner.width} height={BORDERS.inner.height} fill="none" stroke={PALETTE.gold} strokeWidth="0.5" opacity={BORDERS.inner.opacity} />
      </svg>

      {/* Grain overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.04]" style={{ backgroundImage: GRAIN_BG_IMAGE }} />

      <div className="relative z-10 flex flex-col items-center text-center">
        <p className="text-sm uppercase tracking-[0.6em] text-[#daa520]/30" style={{ fontFamily: "monospace" }}>{COPY.subtitle}</p>
        <div className="relative my-6">
          <img src={EGGPLANT.src} alt="" className="h-44 w-44 object-contain" style={{ filter: EGGPLANT.filter }} />
        </div>
        <h1 className="font-mono text-56 uppercase leading-none text-[#f5e6c0] md:text-[5rem]">
          {COPY.titleLine1}<br />{COPY.titleLine2}<br /><span className="text-[#daa520]">{COPY.titleLine3}</span>
        </h1>
        <p className="mt-6 max-w-md text-16 text-[#c8b080]/40">
          {COPY.description}
        </p>
        <div className="mt-8 flex gap-3">
          <span className="rounded-full border border-[#daa520]/25 px-5 py-2 font-mono text-sm uppercase text-[#daa520]/50">Join the Order</span>
          <span className="rounded-full border border-[#c8860e]/20 px-5 py-2 font-mono text-sm uppercase text-[#c8860e]/40">Read the Scrolls</span>
        </div>
      </div>
    </div>
  );
}
