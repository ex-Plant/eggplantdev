"use client";

import EggplantRadialWrapper from "@/components/animations/eggplant-radial-wrapper";
import { EggplantImage } from "@/components/general/eggplant-image";
import {
  PALETTE,
  SVG_CENTER,
  MEASUREMENT_RINGS,
  CARDINAL_LABELS,
  CELESTIAL_OBJECTS,
  SCAN_LINE,
  BG_STARS,
  COPY,
} from "./config";

export function HeroRitualObservatory() {
  /* Observatory / signal map — technical devotional diagram with
     concentric measurement rings, annotated celestial positions,
     and eggplant at the center of the observation field. */
  return (
    <EggplantRadialWrapper>
    <div id="hero-ritual-observatory" className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <svg className="pointer-events-none absolute inset-0 h-full w-full overflow-hidden" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
        {/* Measurement rings with degree marks */}
        {MEASUREMENT_RINGS.map((ring, i) => (
          <g key={`ring-${i}`}>
            <circle cx={SVG_CENTER.x} cy={SVG_CENTER.y} r={ring.r} fill="none" stroke={PALETTE.gold} strokeWidth={ring.strokeWidth} opacity={0.15 - i * 0.02} strokeDasharray={ring.dasharray} />
            {/* Degree ticks */}
            {Array.from({ length: ring.tickCount }, (_, j) => {
              const a = (Math.PI * 2 * j) / ring.tickCount;
              const inner = ring.r - (i === 0 ? 6 : 4);
              const outer = ring.r + (i === 0 ? 6 : 4);
              return <line key={`tick-${i}-${j}`} x1={SVG_CENTER.x + inner * Math.cos(a)} y1={SVG_CENTER.y + inner * Math.sin(a)} x2={SVG_CENTER.x + outer * Math.cos(a)} y2={SVG_CENTER.y + outer * Math.sin(a)} stroke={PALETTE.gold} strokeWidth={i === 0 && j % 6 === 0 ? 1 : 0.3} opacity={0.15} />;
            })}
          </g>
        ))}

        {/* Cardinal labels */}
        {CARDINAL_LABELS.map((label) => (
          <text key={label.text} x={label.x} y={label.y} textAnchor="middle" fill={PALETTE.gold} fontSize="9" fontFamily="monospace" opacity="0.25">{label.text}</text>
        ))}

        {/* Crosshair */}
        <line x1={SVG_CENTER.x} y1={SVG_CENTER.y - 100} x2={SVG_CENTER.x} y2={SVG_CENTER.y + 100} stroke={PALETTE.gold} strokeWidth="0.4" opacity="0.1" />
        <line x1={SVG_CENTER.x - 100} y1={SVG_CENTER.y} x2={SVG_CENTER.x + 100} y2={SVG_CENTER.y} stroke={PALETTE.gold} strokeWidth="0.4" opacity="0.1" />

        {/* Annotated celestial objects with leader lines */}
        {CELESTIAL_OBJECTS.map((obj) => (
          <g key={`obj-${obj.id}`}>
            <circle cx={obj.cx} cy={obj.cy} r={obj.r} fill={obj.color} opacity={obj.id === "C" ? 0.1 : obj.id === "B" ? 0.08 : 0.1} />
            {obj.outerR > 0 && <circle cx={obj.cx} cy={obj.cy} r={obj.outerR} fill="none" stroke={obj.color} strokeWidth="0.5" opacity={obj.id === "B" ? 0.12 : 0.15} />}
            <line x1={obj.leaderLine.x1} y1={obj.leaderLine.y1} x2={obj.leaderLine.x2} y2={obj.leaderLine.y2} stroke={obj.color} strokeWidth="0.3" opacity={obj.id === "A" ? 0.12 : 0.1} />
            <text x={obj.label.x} y={obj.label.y} fill={obj.color} fontSize="8" fontFamily="monospace" opacity={obj.id === "A" ? 0.2 : 0.18}>{obj.label.text}</text>
          </g>
        ))}

        {/* Scan line / sweep */}
        <line x1={SCAN_LINE.x1} y1={SCAN_LINE.y1} x2={SCAN_LINE.x2} y2={SCAN_LINE.y2} stroke={PALETTE.softGold} strokeWidth="1" opacity="0.06" />

        {/* Stars */}
        {BG_STARS.map((s, i) => (
          <circle key={`bgstar-${i}`} cx={s.cx} cy={s.cy} r={s.r} fill={PALETTE.cream} opacity={s.opacity} />
        ))}
      </svg>

      <div className="relative z-10 flex flex-col items-center text-center">
        <EggplantImage sizeClass="h-36 w-36" preset="amber-sepia" float />
        <div className="mt-6 flex items-center gap-3">
          <div className="h-px w-12 bg-[#daa520]/15" />
          <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-[#daa520]/30">{COPY.signalLabel}</span>
          <div className="h-px w-12 bg-[#daa520]/15" />
        </div>
        <h1 className="mt-4 font-mono text-48 uppercase text-[#f5e6c0] md:text-64">
          {COPY.titleLine1}<br /><span className="text-[#daa520]">{COPY.titleLine2}</span>
        </h1>
        <p className="mt-6 max-w-lg text-16 text-[#c8b080]/40">
          {COPY.description}
        </p>
        <div className="mt-8 grid grid-cols-3 gap-4 font-mono text-[10px] uppercase text-[#daa520]/30">
          {COPY.statusCards.map((card) => (
            <div key={card.label} className="rounded border border-[#daa520]/10 px-3 py-2">
              <div className="text-[#daa520]/50">{card.label}</div>
              <div className="mt-1 text-[#f0c040]/40">{card.value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </EggplantRadialWrapper>
  );
}
