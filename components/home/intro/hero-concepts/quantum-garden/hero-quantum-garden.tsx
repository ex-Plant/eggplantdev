import { PALETTE, VINE_PATHS, FLOWER_NODES, EGGPLANT, COPY, SVG_VIEWBOX } from "./config";

export function HeroQuantumGarden() {
  return (
    <div id="hero-quantum-garden" className="relative flex min-h-screen items-center justify-center overflow-hidden" style={{ backgroundColor: PALETTE.bg }}>
      {/* Growing vines made of geometry */}
      <svg className="pointer-events-none absolute inset-0 h-full w-full overflow-hidden" viewBox={SVG_VIEWBOX} preserveAspectRatio="xMidYMid slice">
        {VINE_PATHS.map((vine, i) => (
          <path key={i} d={vine.d} fill="none" stroke={vine.stroke} strokeWidth={vine.strokeWidth} opacity={vine.opacity} />
        ))}
        {FLOWER_NODES.map(([cx, cy], i) => (
          <g key={i}>
            {Array.from({ length: 6 }, (_, j) => {
              const a = (Math.PI * 2 * j) / 6;
              return <ellipse key={j} cx={cx + 20 * Math.cos(a)} cy={cy + 20 * Math.sin(a)} rx="12" ry="6" fill="none" stroke={PALETTE.neonGreen} strokeWidth="0.4" opacity="0.08" transform={`rotate(${60 * j} ${cx + 20 * Math.cos(a)} ${cy + 20 * Math.sin(a)})`} />;
            })}
            <circle cx={cx} cy={cy} r="3" fill={PALETTE.neonGreen} opacity="0.15" />
          </g>
        ))}
      </svg>

      <div className="relative z-10 flex flex-col items-center text-center px-4">
        <p className="font-mono text-sm uppercase tracking-[0.5em]" style={{ color: `${PALETTE.neonGreen}4D` }}>{COPY.subtitle}</p>
        <div className="relative my-8">
          <img src={EGGPLANT.src} alt="" className="h-48 w-48 object-contain" />
          <div className="absolute -inset-6 rounded-full border border-dashed" style={{ borderColor: `${PALETTE.neonGreen}1A` }} />
        </div>
        <h1 className="font-mono text-48 uppercase text-white md:text-72">
          {COPY.titleLine1}<br /><span style={{ color: PALETTE.limeGreen }}>{COPY.titleLine2}</span>
        </h1>
        <p className="mt-6 max-w-lg text-16 text-white/25">
          {COPY.description}
        </p>
        <p className="mt-4 font-mono text-sm tracking-wider" style={{ color: `${PALETTE.neonGreen}4D` }}>
          {COPY.tagline}
        </p>
      </div>
    </div>
  );
}
