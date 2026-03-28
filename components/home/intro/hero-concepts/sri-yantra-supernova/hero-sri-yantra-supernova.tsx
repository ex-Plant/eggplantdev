/* Agent: Claude — Sri Yantra Supernova */

import {
  STARS,
  UP_SCALES,
  DOWN_SCALES,
  upTriangle,
  downTriangle,
  PETALS,
  GATE_FRAME,
  GATE_TABS,
  EGGPLANT,
  COPY,
  SVG_CENTER,
  SVG_VIEWBOX,
} from "./config";

const CX = SVG_CENTER.x;
const CY = SVG_CENTER.y;

export function HeroSriYantraSupernova() {
  return (
    <div id="hero-sri-yantra-supernova" className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#080610]">
      {/* Star field */}
      {STARS.map(([x, y, c], i) => (
        <div
          key={`s-${i}`}
          className="pointer-events-none absolute rounded-full"
          style={{ left: `${x}%`, top: `${y}%`, width: i % 6 === 0 ? 2.5 : 1.5, height: i % 6 === 0 ? 2.5 : 1.5, backgroundColor: c, opacity: 0.1 + (i % 5) * 0.04 }}
        />
      ))}

      {/* Sacred geometry — Sri Yantra */}
      <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox={SVG_VIEWBOX} preserveAspectRatio="xMidYMid slice">
        {/* Bhupura gate frame */}
        <path d={GATE_FRAME} fill="none" stroke="#00e5ff" strokeWidth="0.8" opacity="0.08" />
        {GATE_TABS.map((d, i) => <path key={`gt-${i}`} d={d} fill="none" stroke="#00e5ff" strokeWidth="0.8" opacity="0.08" />)}
        {/* Lotus petals */}
        {PETALS.map((d, i) => <path key={`lp-${i}`} d={d} fill="none" stroke="#10ffaa" strokeWidth="0.5" opacity="0.1" />)}
        {/* Concentric lotus circles */}
        <circle cx={CX} cy={CY} r={175} fill="none" stroke="#ffd700" strokeWidth="0.5" opacity="0.1" />
        <circle cx={CX} cy={CY} r={210} fill="none" stroke="#ffd700" strokeWidth="0.4" opacity="0.07" />
        {/* Upward triangles — gold */}
        {UP_SCALES.map((s, i) => <path key={`up-${i}`} d={upTriangle(s)} fill="none" stroke="#daa520" strokeWidth="0.7" opacity="0.18" />)}
        {/* Downward triangles — magenta */}
        {DOWN_SCALES.map((s, i) => <path key={`dn-${i}`} d={downTriangle(s)} fill="none" stroke="#d946ef" strokeWidth="0.7" opacity="0.12" />)}
        {/* Bindu */}
        <circle cx={CX} cy={CY} r={3} fill="#ffd700" opacity="0.3" />
      </svg>

      {/* Radial glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,215,0,0.1)_0%,rgba(217,70,239,0.05)_40%,transparent_70%)]" />

      {/* Central content */}
      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Eggplant */}
        <img
          src={EGGPLANT.src}
          alt=""
          className="h-40 w-40 object-contain saturate-[0.7] sepia-[0.25] drop-shadow-[0_0_30px_rgba(255,215,0,0.3)] drop-shadow-[0_0_60px_rgba(217,70,239,0.2)]"
        />

        {/* Eyebrow */}
        <p className="mt-10 font-mono text-12 uppercase tracking-widest text-[#10ffaa]/25">
          {COPY.eyebrow}
        </p>

        {/* Title */}
        <h1 className="mt-4 font-mono text-48 uppercase leading-none md:text-72">
          <span className="text-[#ffd700]">{COPY.titleLine1}</span>
          <br />
          <span className="text-[#d946ef]/60">{COPY.titleLine2}</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 max-w-sm font-mono text-14 text-[#c8b080]/45">
          {COPY.description}
        </p>
      </div>
    </div>
  );
}
