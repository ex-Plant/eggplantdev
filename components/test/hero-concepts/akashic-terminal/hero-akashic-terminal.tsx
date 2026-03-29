/* Agent: Claude — Akashic Terminal */

import { GEOMETRY, TERMINAL_TEXT, EGGPLANT, COPY } from "./config";

export function HeroAkashicTerminal() {
  return (
    <div id="hero-akashic-terminal" className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#010204]">
      <svg className="pointer-events-none absolute inset-0 h-full w-full overflow-hidden" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
        <g opacity={GEOMETRY.triangle.opacity}>
          <polygon points={GEOMETRY.triangle.points} fill="none" stroke={GEOMETRY.triangle.color} strokeWidth="1" />
          {GEOMETRY.triangle.medians.map((l, i) => (
            <line key={`tri-${i}`} x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2} stroke={GEOMETRY.triangle.color} strokeWidth="0.5" />
          ))}
        </g>
        <g opacity={GEOMETRY.diamond.opacity}>
          <polygon points={GEOMETRY.diamond.points} fill="none" stroke={GEOMETRY.diamond.color} strokeWidth="1" />
          {GEOMETRY.diamond.lines.map((l, i) => (
            <line key={`dia-${i}`} x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2} stroke={GEOMETRY.diamond.color} strokeWidth="0.5" />
          ))}
        </g>
        <g opacity={GEOMETRY.cube.opacity}>
          {GEOMETRY.cube.rects.map((r, i) => (
            <rect key={`rect-${i}`} x={r.x} y={r.y} width={r.width} height={r.height} fill="none" stroke={GEOMETRY.cube.color} strokeWidth={r.strokeWidth} />
          ))}
          {GEOMETRY.cube.edges.map((l, i) => (
            <line key={`edge-${i}`} x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2} stroke={GEOMETRY.cube.color} strokeWidth="0.5" />
          ))}
        </g>
        <g opacity={GEOMETRY.pentagon.opacity}>
          <circle cx={GEOMETRY.pentagon.cx} cy={GEOMETRY.pentagon.cy} r={GEOMETRY.pentagon.r} fill="none" stroke={GEOMETRY.pentagon.color} strokeWidth="0.5" />
          {Array.from({ length: GEOMETRY.pentagon.sides }, (_, i) => {
            const a = (Math.PI * 2 * i) / GEOMETRY.pentagon.sides - Math.PI / 2;
            const a2 = (Math.PI * 2 * ((i + 1) % GEOMETRY.pentagon.sides)) / GEOMETRY.pentagon.sides - Math.PI / 2;
            return <line key={i} x1={GEOMETRY.pentagon.cx + GEOMETRY.pentagon.r * Math.cos(a)} y1={GEOMETRY.pentagon.cy + GEOMETRY.pentagon.r * Math.sin(a)} x2={GEOMETRY.pentagon.cx + GEOMETRY.pentagon.r * Math.cos(a2)} y2={GEOMETRY.pentagon.cy + GEOMETRY.pentagon.r * Math.sin(a2)} stroke={GEOMETRY.pentagon.color} strokeWidth="0.8" />;
          })}
          {Array.from({ length: GEOMETRY.pentagon.sides }, (_, i) => {
            const a = (Math.PI * 2 * i) / GEOMETRY.pentagon.sides - Math.PI / 2;
            return <line key={`r-${i}`} x1={GEOMETRY.pentagon.cx} y1={GEOMETRY.pentagon.cy} x2={GEOMETRY.pentagon.cx + GEOMETRY.pentagon.r * Math.cos(a)} y2={GEOMETRY.pentagon.cy + GEOMETRY.pentagon.r * Math.sin(a)} stroke={GEOMETRY.pentagon.color} strokeWidth="0.3" />;
          })}
        </g>
      </svg>

      <div className="relative z-10 flex flex-col items-center">
        <div className="relative">
          <div className="rounded-xl border-2 border-white/10 bg-[#0a0e0a] p-1 shadow-[0_0_60px_rgba(16,255,170,0.06)]">
            <div className="relative w-[420px] overflow-hidden rounded-lg bg-[#050a05] p-6 md:w-[520px]" style={{ boxShadow: "inset 0 0 80px rgba(16,255,170,0.04)" }}>
              <div className="pointer-events-none absolute inset-0" style={{ backgroundImage: "repeating-linear-gradient(0deg, rgba(16,255,170,0.03) 0px, transparent 1px, transparent 3px)", backgroundSize: "100% 3px" }} />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,255,170,0.04),transparent_70%)]" />

              <pre className="font-mono text-[11px] leading-[1.4] text-[#10ffaa]/70 md:text-[13px]">
{TERMINAL_TEXT}
              </pre>
            </div>
          </div>

          <div className="mx-auto h-6 w-24 rounded-b-lg bg-white/5" />
          <div className="mx-auto h-2 w-40 rounded-b-lg bg-white/[0.03]" />

          <img src={EGGPLANT.src} alt="" className="absolute -top-14 right-4 h-16 w-16 object-contain" style={{ filter: "drop-shadow(0 0 8px rgba(16,255,170,0.3))" }} />
        </div>

        <h1 className="mt-10 font-mono text-40 uppercase text-white md:text-56">
          {COPY.titleLine1}<br /><span className="text-[#10ffaa]">{COPY.titleLine2}</span>
        </h1>
        <p className="mt-4 max-w-md text-16 text-white/25 mx-auto text-center">
          {COPY.description}
        </p>
      </div>
    </div>
  );
}
