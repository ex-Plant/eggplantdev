/* Agent: Claude — Eggplants in Space / Sacred Geometry SVG */

import { SVG_CENTER, METATRON_CIRCLES, METATRON_LINES, OUTER_CIRCLES_GOLD, CENTRAL_STAR_RAYS } from "./config";

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
          r={100}
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
          strokeDasharray={"dasharray" in circle ? circle.dasharray : undefined}
        />
      ))}

      {/* Central star — matching Metatron's Cube pattern */}
      <g>
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
      </g>
    </svg>
  );
}
