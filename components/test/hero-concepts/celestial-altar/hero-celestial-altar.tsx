"use client";

import EggplantRadialWrapper from "@/components/animations/eggplant-radial-wrapper";
import { EggplantImage } from "@/components/general/eggplant-image";
import {
  PALETTE,
  ALTAR,
  MANDORLA,
  PLANETS_LEFT,
  CRESCENT_LEFT,
  PLANETS_RIGHT,
  CONCENTRIC_TARGET,
  CONSTELLATION_LINES,
  CROWN_RAY_COUNT,
  CROWN_ORIGIN,
  CROWN_RADIUS,
  FOUR_POINT_STARS,
  COPY,
} from "./config";

export function HeroCelestialAltar() {
  /* Central shrine/altar composition. Eggplant on a golden pedestal
     with planets arranged symmetrically like religious iconography. */
  return (
    <EggplantRadialWrapper>
    <div id="hero-celestial-altar" className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <svg className="pointer-events-none absolute inset-0 h-full w-full overflow-hidden" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
        {/* Altar pedestal / pyramid base */}
        <polygon points={ALTAR.outerPoints} fill="none" stroke={PALETTE.gold} strokeWidth="1.5" opacity="0.15" />
        <polygon points={ALTAR.innerPoints} fill="none" stroke={PALETTE.softGold} strokeWidth="0.5" opacity="0.08" />
        {/* Altar steps */}
        {ALTAR.steps.map((step) => (
          <line key={step.y} x1={step.x1} y1={step.y} x2={step.x2} y2={step.y} stroke={PALETTE.gold} strokeWidth="0.5" opacity={step.opacity} />
        ))}

        {/* Sacred mandorla / vesica around eggplant */}
        <ellipse cx={MANDORLA.inner.cx} cy={MANDORLA.inner.cy} rx={MANDORLA.inner.rx} ry={MANDORLA.inner.ry} fill="none" stroke={PALETTE.gold} strokeWidth="2" opacity="0.15" />
        <ellipse cx={MANDORLA.outer.cx} cy={MANDORLA.outer.cy} rx={MANDORLA.outer.rx} ry={MANDORLA.outer.ry} fill="none" stroke={PALETTE.darkGold} strokeWidth="0.8" opacity="0.08" />

        {/* Symmetrical planets — left side */}
        {PLANETS_LEFT.map((p, i) => (
          <g key={`left-${i}`}>
            <circle cx={p.cx} cy={p.cy} r={p.r} fill="none" stroke={p.color} strokeWidth={p.r > 15 ? 1 : 0.8} opacity={p.r > 15 ? 0.2 : p.r > 13 ? 0.15 : 0.12} />
            {p.hasInner && <circle cx={p.cx} cy={p.cy} r={p.innerR} fill={p.color} opacity="0.05" />}
          </g>
        ))}
        {/* Crescent */}
        <circle cx={CRESCENT_LEFT.cx} cy={CRESCENT_LEFT.cy} r={CRESCENT_LEFT.r} fill="none" stroke={PALETTE.cream} strokeWidth="0.8" opacity="0.15" />
        <circle cx={CRESCENT_LEFT.maskCx} cy={CRESCENT_LEFT.maskCy} r={CRESCENT_LEFT.maskR} fill={PALETTE.bgColor} />

        {/* Symmetrical planets — right side */}
        {PLANETS_RIGHT.map((p, i) => (
          <g key={`right-${i}`}>
            <circle cx={p.cx} cy={p.cy} r={p.r} fill="none" stroke={p.color} strokeWidth={p.r > 15 ? 1 : 0.8} opacity={p.r > 15 ? 0.2 : p.r > 13 ? 0.15 : 0.12} />
            {p.hasInner && <circle cx={p.cx} cy={p.cy} r={p.innerR} fill={p.color} opacity="0.05" />}
          </g>
        ))}
        {/* Concentric target */}
        <circle cx={CONCENTRIC_TARGET.cx} cy={CONCENTRIC_TARGET.cy} r={CONCENTRIC_TARGET.radii[0]} fill="none" stroke={PALETTE.gold} strokeWidth="1" opacity="0.12" />
        <circle cx={CONCENTRIC_TARGET.cx} cy={CONCENTRIC_TARGET.cy} r={CONCENTRIC_TARGET.radii[1]} fill="none" stroke={PALETTE.gold} strokeWidth="0.5" opacity="0.08" />
        <circle cx={CONCENTRIC_TARGET.cx} cy={CONCENTRIC_TARGET.cy} r={CONCENTRIC_TARGET.radii[2]} fill={PALETTE.gold} opacity="0.1" />

        {/* Connecting constellation lines */}
        {CONSTELLATION_LINES.map((line, i) => (
          <line key={`const-${i}`} x1={line.x1} y1={line.y1} x2={line.x2} y2={line.y2} stroke={PALETTE.gold} strokeWidth="0.3" opacity="0.06" />
        ))}

        {/* Top crown — three-pointed radiance */}
        {Array.from({ length: CROWN_RAY_COUNT }, (_, i) => {
          const a = Math.PI + (Math.PI * i) / 6 - Math.PI / 2;
          return <line key={`crown-${i}`} x1={CROWN_ORIGIN.x} y1={CROWN_ORIGIN.y} x2={CROWN_ORIGIN.x + CROWN_RADIUS * Math.cos(a)} y2={CROWN_ORIGIN.y + CROWN_RADIUS * Math.sin(a)} stroke={PALETTE.softGold} strokeWidth="0.8" opacity={0.12 - Math.abs(i - 3) * 0.02} />;
        })}

        {/* Scattered 4-point stars */}
        {FOUR_POINT_STARS.map(([x, y], i) => (
          <g key={`star4-${i}`} opacity={0.12}>
            <line x1={x - 4} y1={y} x2={x + 4} y2={y} stroke={PALETTE.cream} strokeWidth="0.8" />
            <line x1={x} y1={y - 4} x2={x} y2={y + 4} stroke={PALETTE.cream} strokeWidth="0.8" />
          </g>
        ))}
      </svg>

      <div className="relative z-10 flex flex-col items-center text-center">
        <EggplantImage
          sizeClass="h-48 w-48"
          preset="soft-gold"
          glowPreset="gold-subtle"
        />
        <h1 className="mt-8 font-mono text-48 uppercase text-[#f5e6c0] md:text-64">
          {COPY.titleLine1}<br /><span className="text-[#daa520]">{COPY.titleLine2}</span>
        </h1>
        <p className="mt-6 max-w-md text-16 text-[#c8b080]/40">
          {COPY.description}
        </p>
      </div>
    </div>
    </EggplantRadialWrapper>
  );
}
