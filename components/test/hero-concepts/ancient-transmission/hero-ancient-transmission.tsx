/* Agent: Claude — Ancient Transmission */

import { TRANSMISSION_LINES, ARTIFACT_SVG, EGGPLANT, COPY } from "./config";

export function HeroAncientTransmission() {
  return (
    <div id="hero-ancient-transmission" className="relative flex min-h-screen overflow-hidden bg-[#020204]">
      <div className="fest-container relative z-10 flex min-h-screen items-center">
        <div className="grid gap-16 md:grid-cols-[1fr_1fr] md:items-center">
          {/* Left: ancient tablet */}
          <div className="relative rounded-2xl border border-[#10ffaa]/10 bg-[#060808] p-8 md:p-12">
            <p className="font-mono text-sm uppercase tracking-[0.4em] text-[#10ffaa]/30 mb-8">{COPY.eyebrow}</p>
            <div className="space-y-6">
              {TRANSMISSION_LINES.map((line, i) => (
                <div key={i} className="border-b border-[#10ffaa]/5 pb-4">
                  <p className="font-mono text-20 text-[#10ffaa]/50 tracking-wider">{line.glyph}</p>
                  <p className="mt-2 text-16 text-white/30 italic">{line.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: eggplant artifact */}
          <div className="flex flex-col items-center text-center overflow-hidden">
            <svg className="absolute h-[400px] w-[400px] overflow-hidden opacity-[0.05]" viewBox={ARTIFACT_SVG.viewBox}>
              {Array.from({ length: ARTIFACT_SVG.lineCount }, (_, i) => {
                const angle = (Math.PI * 2 * i) / ARTIFACT_SVG.lineCount;
                return <line key={i} x1={ARTIFACT_SVG.center.x + ARTIFACT_SVG.lineLength * Math.cos(angle)} y1={ARTIFACT_SVG.center.y + ARTIFACT_SVG.lineLength * Math.sin(angle)} x2={ARTIFACT_SVG.center.x - ARTIFACT_SVG.lineLength * Math.cos(angle)} y2={ARTIFACT_SVG.center.y - ARTIFACT_SVG.lineLength * Math.sin(angle)} stroke="#10ffaa" strokeWidth="0.5" />;
              })}
              {ARTIFACT_SVG.circles.map((circle, i) => (
                <circle key={`c-${i}`} cx={ARTIFACT_SVG.center.x} cy={ARTIFACT_SVG.center.y} r={circle.r} fill="none" stroke={circle.color} strokeWidth="0.5" />
              ))}
            </svg>
            <img src={EGGPLANT.src} alt="" className="relative h-52 w-52 object-contain" />
            <h1 className="mt-8 font-mono text-40 uppercase text-white md:text-56">
              {COPY.titleLine1}<br /><span className="bg-gradient-to-r from-[#10ffaa] to-[#d946ef] bg-clip-text text-transparent">{COPY.titleLine2}</span>
            </h1>
            <p className="mt-4 text-16 text-white/25 max-w-sm">
              {COPY.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
