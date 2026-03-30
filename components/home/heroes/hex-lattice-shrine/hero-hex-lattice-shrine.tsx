"use client";

/* Agent: Claude — Hex Lattice Shrine */

import EggplantRadialWrapper from "@/components/animations/eggplant-radial-wrapper/eggplant-radial-wrapper";
import { EggplantImage } from "@/components/general/eggplant-image";
import { HeroSectionWrapper } from "@/components/home/heroes/hero-section-wrapper";
import { HEX_R, hexCorners, HEX_CENTERS, VERTEX_LIST, RADIAL_LINES, COPY, SVG_CENTER, SVG_VIEWBOX } from "./config";

/* Stars as simple tuples — original cyan/neon palette */
const STARS: readonly [number, number][] = Array.from({ length: 55 }, (_, i) => [
  (7 + i * 17.3) % 100,
  (3 + i * 13.7) % 100,
]);

export function HeroHexLatticeShrine() {
  return (
    <EggplantRadialWrapper>
      <HeroSectionWrapper id="hero-hex-lattice-shrine">
        {/* Star field */}
        {STARS.map(([x, y], i) => (
          <div
            key={`s-${i}`}
            className="pointer-events-none absolute rounded-full"
            style={{
              left: `${x}%`,
              top: `${y}%`,
              width: i % 7 === 0 ? 2.5 : 1.5,
              height: i % 7 === 0 ? 2.5 : 1.5,
              backgroundColor: i % 3 === 0 ? "#daa520" : i % 5 === 0 ? "#00e5ff" : "#ffd700",
              opacity: 0.1 + (i % 6) * 0.04,
            }}
          />
        ))}

        {/* Sacred geometry — Hexagonal Crystal Lattice */}
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full"
          viewBox={SVG_VIEWBOX}
          preserveAspectRatio="xMidYMid slice"
        >
          {/* 19 hexagons */}
          {HEX_CENTERS.map(([cx, cy], i) => (
            <polygon
              key={`h-${i}`}
              points={hexCorners(cx, cy, HEX_R)}
              fill="none"
              stroke={i % 2 === 0 ? "#daa520" : "#c8860e"}
              strokeWidth="0.6"
              opacity={0.1 + (i === 0 ? 0.06 : 0)}
            />
          ))}
          {/* Vertex dots */}
          {VERTEX_LIST.map(([vx, vy], i) => (
            <circle key={`v-${i}`} cx={vx} cy={vy} r="1.8" fill="#00e5ff" opacity="0.1" />
          ))}
          {/* 6 radial crystal axes */}
          {RADIAL_LINES.map((d, i) => (
            <path key={`r-${i}`} d={d} stroke="#10ffaa" strokeWidth="0.5" opacity="0.08" />
          ))}
          {/* Bounding hexagon */}
          <polygon
            points={hexCorners(SVG_CENTER.x, SVG_CENTER.y, 340)}
            fill="none"
            stroke="#d946ef"
            strokeWidth="0.5"
            opacity="0.06"
          />
          {/* Inner + outer framing circles */}
          <circle
            cx={SVG_CENTER.x}
            cy={SVG_CENTER.y}
            r={HEX_R * 3.2}
            fill="none"
            stroke="#d946ef"
            strokeWidth="0.4"
            opacity="0.06"
            strokeDasharray="4 8"
          />
          <circle
            cx={SVG_CENTER.x}
            cy={SVG_CENTER.y}
            r={HEX_R * 5.8}
            fill="none"
            stroke="#d946ef"
            strokeWidth="0.3"
            opacity="0.06"
          />
        </svg>

        {/* Radial glow */}
        <div className="pointer-events-none absolute top-1/2 left-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(0,229,255,0.1)_0%,rgba(218,165,32,0.06)_40%,transparent_70%)]" />

        {/* Central content */}
        <div className="relative z-10 flex flex-col items-center text-center">
          <EggplantImage sizeClass="h-44 w-44" preset="cyan-glow" />
          <p className="text-12 mt-10 font-mono tracking-widest text-[#00e5ff]/30 uppercase">{COPY.eyebrow}</p>
          <h1 className="text-48 md:text-72 mt-4 font-mono leading-none uppercase">
            <span className="text-[#ffd700]">{COPY.titleLine1}</span>
            <br />
            <span className="text-[#f5e6c0]">{COPY.titleLine2}</span>
          </h1>
          <p className="text-14 mt-6 max-w-sm font-mono text-[#c8b080]/45">{COPY.description}</p>
        </div>
      </HeroSectionWrapper>
    </EggplantRadialWrapper>
  );
}
