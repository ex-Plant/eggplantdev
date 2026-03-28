import {
  PALETTE,
  HEX_GRID,
  MISSION_DATA,
  HEX_RADII,
  SYSTEM_STATUS,
  EGGPLANT,
  COPY,
} from "./config";

export function HeroMissionBriefing() {
  return (
    <div id="hero-mission-briefing" className="relative min-h-screen overflow-hidden bg-[#020204]">
      {/* Hex grid background */}
      <svg className="pointer-events-none absolute inset-0 h-full w-full overflow-hidden opacity-[0.04]" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
        {Array.from({ length: HEX_GRID.rows }, (_, row) =>
          Array.from({ length: HEX_GRID.cols }, (_, col) => {
            const x = col * HEX_GRID.cellWidth + (row % 2 === 0 ? 0 : 32);
            const y = row * HEX_GRID.cellHeight;
            const pts = Array.from({ length: 6 }, (_, i) => {
              const a = (Math.PI / 3) * i - Math.PI / 6;
              return `${x + HEX_GRID.hexRadius * Math.cos(a)},${y + HEX_GRID.hexRadius * Math.sin(a)}`;
            }).join(" ");
            return <polygon key={`${row}-${col}`} points={pts} fill="none" stroke={PALETTE.neonGreen} strokeWidth="0.5" />;
          }),
        )}
      </svg>

      <div className="fest-container relative z-10 flex min-h-screen flex-col justify-center py-20">
        <div className="flex items-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#10ffaa]/20 to-transparent" />
          <span className="font-mono text-sm uppercase tracking-[0.4em] text-[#10ffaa]/40">{COPY.header}</span>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#10ffaa]/20 to-transparent" />
        </div>

        <div className="mt-16 grid gap-12 md:grid-cols-[1fr_auto_1fr] md:items-center">
          <div>
            <h1 className="font-mono text-48 uppercase leading-none text-white md:text-64">
              {COPY.titleLine1}<br />
              <span className="text-[#10ffaa]">{COPY.titleLine2}</span>
            </h1>
            <p className="mt-6 text-20 text-white/30 leading-relaxed max-w-md">
              {COPY.description}
            </p>

            <div className="mt-10 space-y-4">
              {MISSION_DATA.map((item) => (
                <div key={item.label} className="flex gap-4 font-mono text-sm">
                  <span className="uppercase tracking-wider text-[#10ffaa]/40 w-28">{item.label}</span>
                  <span className="text-white/50">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex items-center justify-center overflow-hidden">
            <svg className="absolute h-[320px] w-[320px] overflow-hidden" viewBox="0 0 320 320">
              {HEX_RADII.map((r, i) => {
                const pts = Array.from({ length: 6 }, (_, j) => {
                  const a = (Math.PI / 3) * j - Math.PI / 6;
                  return `${160 + r * Math.cos(a)},${160 + r * Math.sin(a)}`;
                }).join(" ");
                return (
                  <polygon
                    key={i}
                    points={pts}
                    fill="none"
                    stroke={PALETTE.neonGreen}
                    strokeWidth={i === 0 ? 1.5 : 0.5}
                    opacity={0.2 - i * 0.05}
                    strokeDasharray={i === 2 ? "4 8" : "none"}
                  />
                );
              })}
              <circle cx="160" cy="160" r="50" fill="none" stroke={PALETTE.purple} strokeWidth="0.5" opacity="0.1" />
            </svg>
            <img src={EGGPLANT.src} alt="" className="relative z-10 h-40 w-40 object-contain" />
          </div>

          <div className="space-y-3">
            {SYSTEM_STATUS.map((item) => (
              <div key={item.label} className="flex items-center gap-3 rounded-lg border border-white/5 bg-white/[0.02] px-4 py-3">
                <div className="h-2 w-2 rounded-full" style={{ backgroundColor: item.color, boxShadow: `0 0 8px ${item.color}60` }} />
                <span className="font-mono text-sm text-white/40">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
