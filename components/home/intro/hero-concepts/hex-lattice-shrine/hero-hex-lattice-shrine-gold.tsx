"use client";

/* Agent: Claude — Hex Lattice Shrine Gold */

import EggplantRadialWrapper from "@/components/animations/eggplant-radial-wrapper";
import { EggplantImage } from "@/components/general/eggplant-image";
import {
  HEX_R,
  hexCorners,
  HEX_CENTERS,
  VERTEX_LIST,
  STARS,
  RADIAL_LINES,
  EGGPLANT,
  COPY,
  SVG_CENTER,
  SVG_VIEWBOX,
} from "./config";

export function HeroHexLatticeShrineGold() {
  return (
    <EggplantRadialWrapper>
      <div id="hero-hex-lattice-shrine-gold" className="relative flex min-h-screen items-center justify-center overflow-hidden">
        {/* Star field — warm tones only */}
        {STARS.map(([x, y], i) => (
          <div
            key={`s-${i}`}
            className="pointer-events-none absolute rounded-full"
            style={{
              left: `${x}%`, top: `${y}%`,
              width: i % 7 === 0 ? 2.5 : 1.5, height: i % 7 === 0 ? 2.5 : 1.5,
              backgroundColor: i % 3 === 0 ? "#daa520" : i % 5 === 0 ? "#f0c040" : "#f5e6c0",
              opacity: 0.1 + (i % 6) * 0.04,
            }}
          />
        ))}

        {/* Sacred geometry — Hexagonal Crystal Lattice */}
        <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox={SVG_VIEWBOX} preserveAspectRatio="xMidYMid slice">
          {/* 19 hexagons */}
          {HEX_CENTERS.map(([cx, cy], i) => (
            <polygon key={`h-${i}`} points={hexCorners(cx, cy, HEX_R)} fill="none" stroke={i % 2 === 0 ? "#daa520" : "#c8860e"} strokeWidth="0.6" opacity={0.1 + (i === 0 ? 0.06 : 0)} />
          ))}
          {/* Vertex dots */}
          {VERTEX_LIST.map(([vx, vy], i) => (
            <circle key={`v-${i}`} cx={vx} cy={vy} r="1.8" fill="#f0c040" opacity="0.1" />
          ))}
          {/* 6 radial crystal axes */}
          {RADIAL_LINES.map((d, i) => (
            <path key={`r-${i}`} d={d} stroke="#daa520" strokeWidth="0.5" opacity="0.08" />
          ))}
          {/* Bounding hexagon */}
          <polygon points={hexCorners(SVG_CENTER.x, SVG_CENTER.y, 340)} fill="none" stroke="#c8860e" strokeWidth="0.5" opacity="0.06" />
          {/* Inner + outer framing circles */}
          <circle cx={SVG_CENTER.x} cy={SVG_CENTER.y} r={HEX_R * 3.2} fill="none" stroke="#daa520" strokeWidth="0.4" opacity="0.06" strokeDasharray="4 8" />
          <circle cx={SVG_CENTER.x} cy={SVG_CENTER.y} r={HEX_R * 5.8} fill="none" stroke="#c8860e" strokeWidth="0.3" opacity="0.06" />
        </svg>

        {/* Radial glow — warm amber */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full" style={{ background: "radial-gradient(circle, rgba(218,165,32,0.12) 0%, rgba(240,192,64,0.05) 40%, transparent 70%)" }} />

        {/* Central content */}
        <div className="relative z-10 flex flex-col items-center text-center">
          <EggplantImage
            src={EGGPLANT.src}
            sizeClass="h-44 w-44"
            filter="sepia(0.3) saturate(1.5) brightness(0.9)"
            float
            glow={{
              size: "400px",
              gradient: "radial-gradient(circle, rgba(218,165,32,0.15) 0%, rgba(200,134,14,0.06) 40%, transparent 70%)",
            }}
          />
          <p className="mt-10 font-mono text-12 uppercase tracking-widest text-[#daa520]/30">
            {COPY.eyebrow}
          </p>
          <h1 className="mt-4 font-mono text-48 uppercase leading-none md:text-72">
            <span className="text-[#daa520]">{COPY.titleLine1}</span>
            <br />
            <span className="text-[#f5e6c0]">{COPY.titleLine2}</span>
          </h1>
          <p className="mt-6 max-w-sm font-mono text-14 text-[#c8b080]/45">
            {COPY.description}
          </p>
        </div>
      </div>
    </EggplantRadialWrapper>
  );
}
