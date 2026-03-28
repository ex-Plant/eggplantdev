/* Agent: Claude — Reliquary d'Or */

"use client";

import AnimatedBgWrapper from "@/components/animations/animated-bg-wrapper";
import { EggplantImage } from "@/components/general/eggplant-image";
import {
  PALETTE,
  buildStars,
  OUTER_FRAME,
  INNER_FRAME,
  CORNER_CIRCLES,
  CORNER_BRACKETS,
  ARCH_OUTER,
  ARCH_INNER,
  RAY_COUNT,
  RAY_CENTER,
  RAY_LENGTH,
  TREFOIL_POSITIONS,
  RULES,
  EGGPLANT,
  COPY,
} from "./config";

/** Wrapped version with per-section bg animation (used on home page) */
export function HeroReliquaryDor() {
  return (
    <AnimatedBgWrapper maskStyle={{ backgroundColor: "#0a0806" }}>
      <ReliquaryDorContent />
    </AnimatedBgWrapper>
  );
}

/** Standalone content without background wrapper */
export function ReliquaryDorContent() {
  const stars = buildStars();

  return (
    <div id="hero-reliquary-dor" className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Star field */}
      {stars.map((s, i) => (
        <div key={i} className="absolute rounded-full" style={{ left: s.x, top: s.y, width: s.size, height: s.size, backgroundColor: s.color, opacity: s.opacity }} />
      ))}

      <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
        {/* Outer ornate rectangular frame */}
        <rect x={OUTER_FRAME.x} y={OUTER_FRAME.y} width={OUTER_FRAME.width} height={OUTER_FRAME.height} fill="none" stroke={PALETTE.gold} strokeWidth="1.2" opacity="0.15" />
        <rect x={INNER_FRAME.x} y={INNER_FRAME.y} width={INNER_FRAME.width} height={INNER_FRAME.height} fill="none" stroke={PALETTE.brightGold} strokeWidth="0.5" opacity="0.08" />
        {/* Corner circles */}
        {CORNER_CIRCLES.map(([cx, cy], i) => (
          <circle key={`corner-${i}`} cx={cx} cy={cy} r="6" fill="none" stroke={PALETTE.brightGold} strokeWidth="1" opacity="0.2" />
        ))}
        {/* L-shaped corner brackets */}
        {CORNER_BRACKETS.map((d, i) => (
          <path key={`bracket-${i}`} d={d} fill="none" stroke={PALETTE.brightGold} strokeWidth="1.5" opacity="0.18" />
        ))}

        {/* Inner gothic/pointed arch */}
        <path d={ARCH_OUTER} fill="none" stroke={PALETTE.darkGold} strokeWidth="1" opacity="0.12" />
        <path d={ARCH_INNER} fill="none" stroke={PALETTE.brightGold} strokeWidth="0.5" opacity="0.07" />

        {/* Radiating sunburst lines from center */}
        {Array.from({ length: RAY_COUNT }, (_, i) => {
          const a = (Math.PI * 2 * i) / RAY_COUNT;
          return <line key={`ray-${i}`} x1={RAY_CENTER.x} y1={RAY_CENTER.y} x2={RAY_CENTER.x + RAY_LENGTH * Math.cos(a)} y2={RAY_CENTER.y + RAY_LENGTH * Math.sin(a)} stroke={PALETTE.gold} strokeWidth="0.4" opacity={0.06 + (i % 2) * 0.03} />;
        })}

        {/* Trefoil shapes at cardinal points */}
        {TREFOIL_POSITIONS.map(([cx, cy], i) => (
          <g key={`trefoil-${i}`} opacity="0.15">
            <circle cx={cx} cy={cy - 6} r="4" fill="none" stroke={PALETTE.brightGold} strokeWidth="0.8" />
            <circle cx={cx - 5} cy={cy + 3} r="4" fill="none" stroke={PALETTE.brightGold} strokeWidth="0.8" />
            <circle cx={cx + 5} cy={cy + 3} r="4" fill="none" stroke={PALETTE.brightGold} strokeWidth="0.8" />
          </g>
        ))}

        {/* Horizontal ruled lines above and below title area */}
        {RULES.map((rule, i) => (
          <g key={`rule-${i}`}>
            <line x1={rule.x1} y1={rule.y} x2={rule.x2} y2={rule.y} stroke={PALETTE.brightGold} strokeWidth="0.5" opacity="0.1" />
            <line x1={rule.innerX1} y1={rule.innerY} x2={rule.innerX2} y2={rule.innerY} stroke={PALETTE.darkGold} strokeWidth="0.3" opacity="0.06" />
          </g>
        ))}
      </svg>

      <div className="relative z-10 flex flex-col items-center text-center">
        <p className="font-mono text-12 uppercase tracking-[0.5em] text-[#ffd700]/35">{COPY.eyebrow}</p>

        <EggplantImage
          sizeClass="h-52 w-52"
          className="mt-6"
          filter={EGGPLANT.filter}
          float
          glow={{
            size: "420px",
            gradient: "radial-gradient(ellipse, rgba(218,165,32,0.1) 0%, rgba(255,215,0,0.03) 40%, transparent 70%)",
          }}
        />

        <h1 className="mt-8 font-mono text-48 uppercase leading-tight text-[#ffd700] md:text-72">
          {COPY.titleLine1}<br />
          <span className="text-[#f5e6c0]">{COPY.titleLine2}</span>
        </h1>

        <p className="mt-6 max-w-md text-16 text-[#c8b080]/45">
          {COPY.description}
        </p>
      </div>
    </div>
  );
}
