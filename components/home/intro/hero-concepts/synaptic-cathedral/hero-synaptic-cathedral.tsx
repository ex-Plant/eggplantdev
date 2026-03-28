import {
  PALETTE,
  STARS,
  NODES,
  CONNECTIONS,
  APEX_NODE_INDEX,
  APEX_FOL,
  EGGPLANT,
  COPY,
  SVG_VIEWBOX,
} from "./config";

export function HeroSynapticCathedral() {
  return (
    <div id="hero-synaptic-cathedral" className="relative flex min-h-screen items-center justify-center overflow-hidden" style={{ backgroundColor: PALETTE.bg }}>
      {STARS.map((star, i) => (
        <div key={`star-${i}`} className="pointer-events-none absolute rounded-full bg-white" style={{ left: star.left, top: star.top, width: star.size, height: star.size, opacity: star.opacity }} />
      ))}

      <svg className="pointer-events-none absolute inset-0 h-full w-full overflow-hidden" viewBox={SVG_VIEWBOX} preserveAspectRatio="xMidYMid slice">
        {CONNECTIONS.map(([from, to], i) => (
          <line key={`conn-${i}`} x1={NODES[from][0]} y1={NODES[from][1]} x2={NODES[to][0]} y2={NODES[to][1]} stroke={PALETTE.neonGreen} strokeWidth="0.6" opacity="0.08" />
        ))}
        {CONNECTIONS.filter((_, i) => i % 3 === 0).map(([from, to], i) => (
          <line key={`trail-${i}`} x1={NODES[from][0]} y1={NODES[from][1]} x2={NODES[to][0]} y2={NODES[to][1]} stroke={PALETTE.cyan} strokeWidth="1.5" opacity="0.12" strokeDasharray="4 12" />
        ))}
        {NODES.map(([cx, cy], i) => (
          <g key={`node-${i}`}>
            <circle cx={cx} cy={cy} r={i === APEX_NODE_INDEX ? 8 : 4} fill={PALETTE.neonGreen} opacity={i === APEX_NODE_INDEX ? 0.3 : 0.2} />
            <circle cx={cx} cy={cy} r={i === APEX_NODE_INDEX ? 16 : 8} fill="none" stroke={PALETTE.neonGreen} strokeWidth="0.3" opacity="0.08" />
          </g>
        ))}

        {Array.from({ length: APEX_FOL.petalCount }, (_, i) => {
          const a = (Math.PI * 2 * i) / APEX_FOL.petalCount;
          return <circle key={`fol-${i}`} cx={APEX_FOL.cx + APEX_FOL.r * Math.cos(a)} cy={APEX_FOL.cy + APEX_FOL.r * Math.sin(a)} r={APEX_FOL.r} fill="none" stroke={PALETTE.fuchsia} strokeWidth="0.6" opacity="0.15" />;
        })}
        <circle cx={APEX_FOL.cx} cy={APEX_FOL.cy} r={APEX_FOL.r} fill="none" stroke={PALETTE.fuchsia} strokeWidth="0.8" opacity="0.2" />
        {Array.from({ length: APEX_FOL.rayCount }, (_, i) => {
          const a = (Math.PI * 2 * i) / APEX_FOL.rayCount;
          return <line key={`ray-${i}`} x1={APEX_FOL.cx} y1={APEX_FOL.cy} x2={APEX_FOL.cx + APEX_FOL.rayLength * Math.cos(a)} y2={APEX_FOL.cy + APEX_FOL.rayLength * Math.sin(a)} stroke={PALETTE.fuchsia} strokeWidth="0.3" opacity="0.06" />;
        })}
      </svg>

      <div className="relative z-10 flex flex-col items-center text-center">
        <img src={EGGPLANT.src} alt="" className="h-32 w-32 object-contain" style={{ filter: EGGPLANT.filter }} />
        <h1 className="mt-8 font-mono text-48 uppercase text-white md:text-72">
          {COPY.titleLine1}<br /><span className="bg-gradient-to-r from-[#10ffaa] via-[#00e5ff] to-[#d946ef] bg-clip-text text-transparent">{COPY.titleLine2}</span>
        </h1>
        <p className="mt-6 max-w-lg text-16 text-white/25 mx-auto">
          {COPY.description}
        </p>
        <p className="mt-3 font-mono text-sm tracking-wider" style={{ color: `${PALETTE.neonGreen}40` }}>
          {COPY.tagline}
        </p>
      </div>
    </div>
  );
}
