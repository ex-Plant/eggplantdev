import { CENTER, BURST_POINTS, SVG_VIEWBOX } from "./config";
import { BurstDots } from "@/components/animations/burst-dots/burst-dots";
import { CentralStar } from "@/components/animations/central-star/central-star";

export function MetatronsCubeVertexAnimations() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox={SVG_VIEWBOX}
      preserveAspectRatio="xMidYMid slice"
    >
      <CentralStar cx={CENTER[0]} cy={CENTER[1]} />
      <BurstDots points={BURST_POINTS} idPrefix="burstGlow" />
    </svg>
  );
}
