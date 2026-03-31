import { FLOWER_CIRCLES, GEOMETRY, INTERSECTION_POINTS } from "./config";
import { BurstDots } from "@/components/animations/burst-dots/burst-dots";
import { ScatteredStars } from "@/components/animations/central-star/scattered-stars";
import { CentralStar } from "@/components/animations/central-star/central-star";

export function CosmicFlowerSacredGeometry() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox="0 0 420 420"
      preserveAspectRatio="xMidYMid meet"
    >
      {/* Flower of life fragment */}
      {FLOWER_CIRCLES.map(([cx, cy], i) => (
        <circle
          key={i}
          cx={cx}
          cy={cy}
          r={70}
          fill="none"
          stroke="var(--color-gold-warm)"
          strokeWidth="0.5"
          opacity="0.12"
        />
      ))}
      {/* Outer ring */}
      <circle
        cx={GEOMETRY.outerRing.cx}
        cy={GEOMETRY.outerRing.cy}
        r={GEOMETRY.outerRing.r}
        fill="none"
        stroke="var(--color-gold)"
        strokeWidth="0.6"
        opacity="0.1"
        strokeDasharray="6 10"
      />
      {/* Triangle */}
      <polygon points={GEOMETRY.triangleUp} fill="none" stroke="var(--color-gold)" strokeWidth="0.4" opacity="0.06" />
      <polygon
        points={GEOMETRY.triangleDown}
        fill="none"
        stroke="var(--color-gold-warm)"
        strokeWidth="0.4"
        opacity="0.05"
      />

      <BurstDots points={INTERSECTION_POINTS} radius={14} idPrefix="cosmicBurst" />
      <ScatteredStars cx={210} cy={210} count={5} radius={160} seed={55} scale={0.5} />

      <CentralStar cx={210} cy={210} coreR={0.5} innerR={0.7} outerR={1.75} />
    </svg>
  );
}
