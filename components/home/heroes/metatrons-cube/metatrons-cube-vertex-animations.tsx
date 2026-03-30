import { CENTER, BURST_POINTS } from "./config";
import { BurstDots } from "@/components/animations/burst-dots/burst-dots";
import { CentralStar } from "@/components/animations/central-star/central-star";

export function MetatronsVertexAnimations() {
  return (
    <>
      <CentralStar cx={CENTER[0]} cy={CENTER[1]} />
      <BurstDots points={BURST_POINTS} idPrefix="burstGlow" />
    </>
  );
}
