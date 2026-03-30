/* Agent: Claude — Eggplants in Space / Sacred Geometry SVG */

import {
  SVG_CENTER,
  METATRON_CIRCLES,
  METATRON_CIRCLE_R,
  METATRON_LINES,
  OUTER_CIRCLES_GOLD,
  BURST_POINTS,
  RADIAL_GUIDES,
} from "./config";
import { BurstDots } from "@/components/animations/burst-dots/burst-dots";
import { CentralStar } from "@/components/animations/central-star/central-star";

export function EggplantsInSpaceSacredGeometry() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full overflow-hidden"
      viewBox="0 0 1200 800"
      preserveAspectRatio="xMidYMid slice"
    >
      {METATRON_CIRCLES.map(([cx, cy], i) => (
        <circle
          key={`mc-${i}`}
          cx={cx}
          cy={cy}
          r={METATRON_CIRCLE_R}
          fill="none"
          stroke="var(--color-gold)"
          strokeWidth="0.4"
          opacity="0.15"
        />
      ))}
      {METATRON_LINES.map((d, i) => (
        <path key={`line-${i}`} d={d} fill="none" stroke="var(--color-gold-warm)" strokeWidth="0.7" opacity="0.12" />
      ))}
      {OUTER_CIRCLES_GOLD.map((circle) => (
        <circle
          key={circle.r}
          cx={SVG_CENTER.x}
          cy={SVG_CENTER.y}
          r={circle.r}
          fill="none"
          stroke={circle.stroke}
          strokeWidth={circle.strokeWidth}
          opacity={circle.opacity}
          strokeDasharray={circle.dasharray}
        />
      ))}
      {RADIAL_GUIDES.map(({ x2, y2 }, i) => (
        <line
          key={`guide-${i}`}
          x1={SVG_CENTER.x}
          y1={SVG_CENTER.y}
          x2={x2}
          y2={y2}
          stroke={i % 2 === 0 ? "var(--color-gold)" : "var(--color-gold-dark)"}
          strokeWidth="0.35"
          opacity="0.07"
        />
      ))}

      <BurstDots points={BURST_POINTS} idPrefix="eggplantBurst" />

      <CentralStar cx={SVG_CENTER.x} cy={SVG_CENTER.y} />
    </svg>
  );
}
