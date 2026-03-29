import { CentralStar } from "@/components/animations/central-star";
import { BurstDots } from "@/components/animations/burst-dots";
import {
  PALETTE,
  HEX_R,
  hexCorners,
  HEX_CENTERS,
  VERTEX_LIST,
  RADIAL_LINES,
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
          stroke={i % 2 === 0 ? PALETTE.gold : PALETTE.darkBrown}
          strokeWidth="0.6"
          opacity={0.1 + (i === 0 ? 0.06 : 0)}
        />
      ))}
      {VERTEX_LIST.map(([vx, vy], i) => (
        <circle key={`v-${i}`} cx={vx} cy={vy} r="1.8" fill={PALETTE.gold} opacity="0.1" />
      ))}
      {RADIAL_LINES.map((d, i) => (
        <path key={`r-${i}`} d={d} stroke={PALETTE.gold} strokeWidth="0.5" opacity="0.08" />
      ))}
      <polygon
        points={hexCorners(SVG_CENTER.x, SVG_CENTER.y, 340)}
        fill="none"
        stroke={PALETTE.darkBrown}
        strokeWidth="0.5"
        opacity="0.06"
      />
      <circle
        cx={SVG_CENTER.x}
        cy={SVG_CENTER.y}
        r={HEX_R * 3.2}
        fill="none"
        stroke={PALETTE.gold}
        strokeWidth="0.4"
        opacity="0.06"
        strokeDasharray="4 8"
      />
      <circle
        cx={SVG_CENTER.x}
        cy={SVG_CENTER.y}
        r={HEX_R * 5.8}
        fill="none"
        stroke={PALETTE.darkBrown}
        strokeWidth="0.3"
        opacity="0.06"
      />

      <CentralStar cx={600} cy={400} />
      <BurstDots points={BURST_POINTS} idPrefix="hexBurst" />
    </svg>
  );
}
