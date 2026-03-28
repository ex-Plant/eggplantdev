"use client";

/* Agent: Claude — Sacred Mandala */

import AnimatedBgWrapper from "@/components/animations/animated-bg-wrapper";
import { EggplantImage } from "@/components/general/eggplant-image";
import {
  STROKES,
  CX,
  CY,
  RADII,
  PETAL_ANGLES,
  STARS,
  CORNER_PATHS,
  DIAMOND_ANGLES,
  EGGPLANT_SRC,
  COPY,
} from "./config";

export function HeroSacredMandala() {
  return (
    <AnimatedBgWrapper maskStyle={{ backgroundColor: "#0c0a08" }}>
      <SacredMandalaContent />
    </AnimatedBgWrapper>
  );
}

export function SacredMandalaContent() {
  return (
    <div id="hero-sacred-mandala" className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Star field */}
      {STARS.map((s, i) => (
        <div key={`s-${i}`} className="pointer-events-none absolute rounded-full" style={{ left: s.x, top: s.y, width: s.size, height: s.size, backgroundColor: s.color, opacity: s.opacity }} />
      ))}

      {/* Sacred geometry SVG */}
      <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
        {/* Concentric rings */}
        {RADII.map((r, i) => (
          <circle key={`r-${i}`} cx={CX} cy={CY} r={r} fill="none" stroke={STROKES[i % 3]} strokeWidth={i === 0 ? 0.8 : 0.5} opacity={0.08 + i * 0.03} strokeDasharray={i % 2 === 0 ? 'none' : '4 8'} />
        ))}
        {/* 8 petal/leaf ellipses */}
        {PETAL_ANGLES.map((deg, i) => (
          <ellipse key={`p-${i}`} cx={CX} cy={CY - 115} rx={18} ry={70} fill="none" stroke={STROKES[i % 3]} strokeWidth="0.6" opacity={0.12} transform={`rotate(${deg} ${CX} ${CY})`} />
        ))}
        {/* Dots at petal tips */}
        {PETAL_ANGLES.map((deg, i) => {
          const rad = (deg * Math.PI) / 180;
          const tx = CX + 185 * Math.sin(rad);
          const ty = CY - 185 * Math.cos(rad);
          return <circle key={`d-${i}`} cx={tx} cy={ty} r="2.5" fill={STROKES[i % 3]} opacity="0.2" />;
        })}
        {/* Diamond accents between rings */}
        {DIAMOND_ANGLES.map((deg, i) => {
          const rad = (deg * Math.PI) / 180;
          const dx = CX + 168 * Math.sin(rad);
          const dy = CY - 168 * Math.cos(rad);
          return <rect key={`dm-${i}`} x={dx - 8} y={dy - 8} width={16} height={16} fill="none" stroke={STROKES[(i + 1) % 3]} strokeWidth="0.5" opacity="0.1" transform={`rotate(45 ${dx} ${dy})`} />;
        })}
        {/* Art deco corner frames */}
        {CORNER_PATHS.map((d, i) => (
          <path key={`cf-${i}`} d={d} fill="none" stroke="#daa520" strokeWidth="0.8" opacity="0.15" />
        ))}
      </svg>

      {/* Radial glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(218,165,32,0.14)_0%,rgba(200,134,14,0.05)_40%,transparent_70%)]" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center">
        <p className="mb-6 font-mono text-xs uppercase tracking-widest text-[#daa520]/40">
          {COPY.eyebrow}
        </p>

        <EggplantImage
          src={EGGPLANT_SRC}
          alt="Eggplant logo"
          sizeClass="h-48 w-48"
          className="mb-8 drop-shadow-[0_0_40px_rgba(218,165,32,0.3)] saturate-50 sepia"
          float
        />

        <h1 className="font-mono text-48 uppercase leading-none tracking-tight md:text-72">
          <span className="block text-[#daa520]">{COPY.titleLine1}</span>
          <span className="block text-[#f5e6c0]">{COPY.titleLine2}</span>
        </h1>

        <p className="mt-6 max-w-md font-mono text-sm text-[#c8b080]/50">
          {COPY.description}
        </p>
      </div>
    </div>
  );
}
