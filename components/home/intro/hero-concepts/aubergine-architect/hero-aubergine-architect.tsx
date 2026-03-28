/* Agent: Claude — Aubergine Architect */

import { GRID, COMPASS, NAV_TABS, EGGPLANT, COPY } from "./config";

export function HeroAubergineArchitect() {
  return (
    <div id="hero-aubergine-architect" className="relative min-h-screen overflow-hidden bg-[#020206]">
      {/* Blueprint grid */}
      <svg className="pointer-events-none absolute inset-0 h-full w-full overflow-hidden opacity-[0.04]" viewBox={GRID.svgViewBox} preserveAspectRatio="xMidYMid slice">
        {Array.from({ length: GRID.horizontalLines }, (_, i) => <line key={`h${i}`} x1="0" y1={i * GRID.spacing} x2="1200" y2={i * GRID.spacing} stroke="#10ffaa" strokeWidth="0.5" />)}
        {Array.from({ length: GRID.verticalLines }, (_, i) => <line key={`v${i}`} x1={i * GRID.spacing} y1="0" x2={i * GRID.spacing} y2="800" stroke="#10ffaa" strokeWidth="0.5" />)}
        <path d={GRID.spiralPath} fill="none" stroke="#d946ef" strokeWidth="1" opacity="0.5" />
      </svg>

      <div className="fest-container relative z-10 flex min-h-screen flex-col justify-center py-20">
        <div className="grid gap-12 md:grid-cols-[auto_1fr] md:items-center">
          <div className="relative overflow-hidden">
            <svg className="absolute -inset-8 h-[calc(100%+64px)] w-[calc(100%+64px)] overflow-hidden" viewBox={COMPASS.viewBox}>
              <circle cx={COMPASS.center.x} cy={COMPASS.center.y} r={COMPASS.outerR} fill="none" stroke="#10ffaa" strokeWidth="0.5" opacity="0.15" />
              {Array.from({ length: COMPASS.tickCount }, (_, i) => {
                const a = (Math.PI * 2 * i) / COMPASS.tickCount;
                const inner = i % COMPASS.majorEvery === 0 ? COMPASS.innerR : COMPASS.tickInnerR;
                return <line key={i} x1={COMPASS.center.x + inner * Math.cos(a)} y1={COMPASS.center.y + inner * Math.sin(a)} x2={COMPASS.center.x + COMPASS.outerR * Math.cos(a)} y2={COMPASS.center.y + COMPASS.outerR * Math.sin(a)} stroke="#10ffaa" strokeWidth={i % COMPASS.majorEvery === 0 ? 1 : 0.3} opacity={i % COMPASS.majorEvery === 0 ? 0.3 : 0.1} />;
              })}
              <text x={COMPASS.center.x} y="22" textAnchor="middle" fill="#10ffaa" fontSize="10" fontFamily="monospace" opacity="0.3">N</text>
              <text x="260" y={COMPASS.center.y + 5} textAnchor="middle" fill="#10ffaa" fontSize="10" fontFamily="monospace" opacity="0.3">E</text>
              <text x={COMPASS.center.x} y="268" textAnchor="middle" fill="#10ffaa" fontSize="10" fontFamily="monospace" opacity="0.3">S</text>
              <text x="20" y={COMPASS.center.y + 5} textAnchor="middle" fill="#10ffaa" fontSize="10" fontFamily="monospace" opacity="0.3">W</text>
            </svg>
            <img src={EGGPLANT.src} alt="" className="relative h-44 w-44 object-contain" />
          </div>

          <div>
            <p className="font-mono text-sm uppercase tracking-[0.4em] text-[#10ffaa]/40">{COPY.eyebrow}</p>
            <h1 className="mt-4 font-mono text-48 uppercase leading-none text-white md:text-72">
              {COPY.titleLine1}<br /><span className="text-[#10ffaa]">{COPY.titleLine2}</span>
            </h1>
            <p className="mt-6 max-w-xl text-20 text-white/30 leading-relaxed">
              {COPY.description}
            </p>
            <div className="mt-10 flex gap-6">
              {NAV_TABS.map((label) => (
                <span key={label} className="font-mono text-sm uppercase tracking-wider text-[#10ffaa]/30 border-b border-[#10ffaa]/10 pb-1">{label}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
