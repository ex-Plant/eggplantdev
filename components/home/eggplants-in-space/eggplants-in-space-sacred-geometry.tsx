/* Agent: Claude — Eggplants in Space / Sacred Geometry SVG */

import { SVG_CENTER, METATRON_CIRCLES, METATRON_CIRCLE_R, METATRON_LINES, OUTER_CIRCLES_GOLD, CENTRAL_STAR_RAYS, BURST_POINTS } from "./config";
import { BurstDots } from "@/components/animations/burst-dots";

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
        <path key={`line-${i}`} d={d} fill="none" stroke="var(--color-gold-warm)" strokeWidth="0.5" opacity="0.1" />
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

      <BurstDots points={BURST_POINTS} idPrefix="eggplantBurst" />

      <circle cx={SVG_CENTER.x} cy={SVG_CENTER.y} r={1.5} fill="var(--color-gold-warm)" opacity="0.9" />
      {CENTRAL_STAR_RAYS.map((ray, i) => (
          <line
            key={`star-${i}`}
            x1={ray.x1}
            y1={ray.y1}
            x2={ray.x2}
            y2={ray.y2}
            stroke="var(--color-gold-warm)"
            strokeWidth={0.15}
            opacity={0.35}
          />
        ))}
    </svg>
  );
}
