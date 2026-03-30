import { CentralStar } from "@/components/animations/central-star";
import { BurstDots } from "@/components/animations/burst-dots";
import {
  HEX_R,
  hexCorners,
  HEX_CENTERS,
  VERTEX_LIST,
  RADIAL_LINES,
  OUTER_DASHED_CIRCLE,
  SVG_CENTER,
  SVG_VIEWBOX,
  BURST_POINTS,
} from "./config";

export function HexLatticeSacredGeometry() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox={SVG_VIEWBOX}
      preserveAspectRatio="xMidYMid slice"
    >
      {HEX_CENTERS.map(([cx, cy], i) => (
        <polygon
          key={`h-${i}`}
          points={hexCorners(cx, cy, HEX_R)}
          fill="none"
          stroke={i % 2 === 0 ? "var(--color-gold)" : "var(--color-gold-dark)"}
          strokeWidth="0.6"
          opacity={0.1 + (i === 0 ? 0.06 : 0)}
        />
      ))}
      {VERTEX_LIST.map(([vx, vy], i) => (
        <circle key={`v-${i}`} cx={vx} cy={vy} r="1.8" fill={"var(--color-gold)"} opacity="0.1" />
      ))}
      {RADIAL_LINES.map((d, i) => (
        <path key={`r-${i}`} d={d} stroke={"var(--color-gold)"} strokeWidth="0.5" opacity="0.08" />
      ))}
      <polygon
        points={hexCorners(SVG_CENTER.x, SVG_CENTER.y, 340)}
        fill="none"
        stroke={"var(--color-gold-dark)"}
        strokeWidth="0.5"
        opacity="0.06"
      />
      <circle
        cx={SVG_CENTER.x}
        cy={SVG_CENTER.y}
        r={HEX_R * 3.2}
        fill="none"
        stroke={"var(--color-gold)"}
        strokeWidth="0.4"
        opacity="0.06"
        strokeDasharray="4 8"
      />
      <circle
        cx={SVG_CENTER.x}
        cy={SVG_CENTER.y}
        r={HEX_R * 5.8}
        fill="none"
        stroke={"var(--color-gold-dark)"}
        strokeWidth="0.3"
        opacity="0.06"
      />
      <circle
        cx={SVG_CENTER.x}
        cy={SVG_CENTER.y}
        r={OUTER_DASHED_CIRCLE.r}
        fill="none"
        stroke={"var(--color-gold)"}
        strokeWidth="0.35"
        opacity="0.05"
        strokeDasharray={OUTER_DASHED_CIRCLE.dasharray}
      />

      <CentralStar cx={600} cy={400} />
      <BurstDots points={BURST_POINTS} idPrefix="hexBurst" />
    </svg>
  );
}
