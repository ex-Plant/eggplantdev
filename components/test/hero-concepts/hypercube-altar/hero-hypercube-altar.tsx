"use client";

/* Agent: Claude — Hypercube Altar */

import EggplantRadialWrapper from "@/components/animations/eggplant-radial-wrapper";
import { EggplantImage } from "@/components/general/eggplant-image";
import {
  PALETTE,
  STARS,
  C,
  outerA,
  innerA,
  outerB,
  innerB,
  polyStr,
  triAt,
  CIRCLE_RADII,
  EGGPLANT_SRC,
  COPY,
} from "./config";

export function HeroHypercubeAltar() {
  return (
    <EggplantRadialWrapper>
      <div id="hero-hypercube-altar" className="relative flex min-h-screen items-center justify-center overflow-hidden">
        {/* Star field */}
        {STARS.map((s, i) => (
          <div key={`s-${i}`} className="pointer-events-none absolute rounded-full" style={{ left: s.x, top: s.y, width: s.size, height: s.size, backgroundColor: s.color, opacity: s.opacity }} />
        ))}

        {/* Dense sacred geometry */}
        <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
          {/* Concentric circles */}
          {CIRCLE_RADII.map((r, i) => (
            <circle key={`cr-${i}`} cx={C[0]} cy={C[1]} r={r} fill="none" stroke={PALETTE.gold} strokeWidth="0.4" opacity={0.06 + i * 0.02} strokeDasharray={i === 0 ? "8 12" : "none"} />
          ))}
          {/* Diagonal cross lines */}
          <line x1={C[0] - 340} y1={C[1] - 340} x2={C[0] + 340} y2={C[1] + 340} stroke={PALETTE.gold} strokeWidth="0.3" opacity="0.05" />
          <line x1={C[0] + 340} y1={C[1] - 340} x2={C[0] - 340} y2={C[1] + 340} stroke={PALETTE.gold} strokeWidth="0.3" opacity="0.05" />
          {/* Outer cube pair */}
          <polygon points={polyStr(outerA)} fill="none" stroke={PALETTE.brightGold} strokeWidth="0.8" opacity="0.18" />
          <polygon points={polyStr(innerA)} fill="none" stroke={PALETTE.gold} strokeWidth="0.7" opacity="0.16" />
          {/* Tesseract connecting lines — outer pair */}
          {outerA.map(([x1, y1], i) => (
            <line key={`tA-${i}`} x1={x1} y1={y1} x2={innerA[i][0]} y2={innerA[i][1]} stroke={PALETTE.brightGold} strokeWidth="0.5" opacity="0.12" />
          ))}
          {/* Inner cube pair */}
          <polygon points={polyStr(outerB)} fill="none" stroke={PALETTE.neonGreen} strokeWidth="0.5" opacity="0.12" />
          <polygon points={polyStr(innerB)} fill="none" stroke={PALETTE.neonPink} strokeWidth="0.4" opacity="0.1" />
          {/* Tesseract connecting lines — inner pair */}
          {outerB.map(([x1, y1], i) => (
            <line key={`tB-${i}`} x1={x1} y1={y1} x2={innerB[i][0]} y2={innerB[i][1]} stroke={PALETTE.neonCyan} strokeWidth="0.4" opacity="0.08" />
          ))}
          {/* Corner triangles on outer cube */}
          {outerA.map((pt, i) => (
            <polygon key={`tri-${i}`} points={triAt(pt)} fill="none" stroke={PALETTE.brightGold} strokeWidth="0.4" opacity="0.1" />
          ))}
          {/* Vertex dots */}
          {[...outerA, ...innerA, ...outerB, ...innerB].map(([cx, cy], i) => (
            <circle key={`d-${i}`} cx={cx} cy={cy} r={1.5} fill={i < 8 ? PALETTE.brightGold : PALETTE.neonGreen} opacity={i < 8 ? 0.25 : 0.15} />
          ))}
        </svg>

        {/* Radial glow — gold + neon fringe */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(218,165,32,0.14)_0%,rgba(16,255,170,0.04)_35%,rgba(217,70,239,0.02)_55%,transparent_70%)]" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center">
          <p className="mb-6 font-mono text-xs uppercase tracking-widest text-[#10ffaa]/30">
            {COPY.eyebrow}
          </p>

          <EggplantImage
            src={EGGPLANT_SRC}
            alt="Eggplant logo"
            sizeClass="h-48 w-48"
            className="mb-8"
            preset="sepia-hue15"
            float
          />

          <h1 className="font-mono text-48 uppercase leading-none tracking-tight md:text-72">
            <span className="block text-[#ffd700]">{COPY.titleLine1}</span>
            <span className="block text-[#f5e6c0]">{COPY.titleLine2}</span>
          </h1>

          <p className="mt-6 max-w-md font-mono text-sm text-[#c8b080]/45">
            {COPY.description}
          </p>
        </div>
      </div>
    </EggplantRadialWrapper>
  );
}
