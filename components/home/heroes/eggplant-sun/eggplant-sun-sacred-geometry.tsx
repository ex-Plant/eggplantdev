/* Agent: Claude — Soleil Aubergine / Sacred Geometry SVG */

import {
  CORONA_RINGS,
  ZIGZAG_POINTS,
  RAYS,
  CORNERS,
  BURST_POINTS,
  INNER_BURST_POINTS,
  SVG_CENTER,
  SVG_VIEWBOX,
} from "./config";
import { BurstDots } from "@/components/animations/burst-dots/burst-dots";

export function EggplantSunSacredGeometry() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 size-full"
      viewBox={SVG_VIEWBOX}
      preserveAspectRatio="xMidYMid slice"
    >
      {CORONA_RINGS.map((ring) => (
        <circle
          key={ring.r}
          cx={SVG_CENTER.x}
          cy={SVG_CENTER.y}
          r={ring.r}
          fill="none"
          stroke={ring.stroke}
          strokeWidth={ring.strokeWidth}
          opacity={ring.opacity}
        />
      ))}

      <polyline points={ZIGZAG_POINTS} fill="none" stroke="var(--color-gold-dark)" strokeWidth="0.6" opacity="0.12" />

      {RAYS.map((r, i) => (
        <g key={i}>
          <line
            x1={SVG_CENTER.x}
            y1={SVG_CENTER.y}
            x2={r.x2}
            y2={r.y2}
            stroke="var(--color-gold)"
            strokeWidth={r.width}
            opacity={r.opacity}
          />
          {r.hasDot && (
            <circle
              cx={r.dotX}
              cy={r.dotY}
              r="3"
              fill="none"
              stroke="var(--color-gold-warm)"
              strokeWidth="0.8"
              opacity="0.2"
            />
          )}
        </g>
      ))}

      {CORNERS.map((corner, i) => (
        <g key={i}>
          <path d={corner.primary} fill="none" stroke="var(--color-gold-dark)" strokeWidth="1.2" opacity="0.15" />
          <path d={corner.secondary} fill="none" stroke="var(--color-gold)" strokeWidth="0.5" opacity="0.1" />
        </g>
      ))}

      <BurstDots points={BURST_POINTS} idPrefix="soleilBurst" />
      <BurstDots points={INNER_BURST_POINTS} radius={28} idPrefix="soleilInnerBurst" />
    </svg>
  );
}
