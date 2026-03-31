import { CentralStar } from "@/components/animations/central-star/central-star";
import { BurstDots } from "@/components/animations/burst-dots/burst-dots";
import { ScatteredStars } from "@/components/animations/central-star/scattered-stars";
import { SVG_CENTER, RAYS, RITUAL_RINGS, INSCRIPTIONS, HEXAGRAMS, BORDERS, BURST_POINTS } from "./config";

export function CosmicCultFlyerSacredGeometry() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full overflow-hidden"
      viewBox="0 0 1200 800"
      preserveAspectRatio="xMidYMid slice"
    >
      {RAYS.map((ray, i) => (
        <line
          key={`ray-${i}`}
          x1={SVG_CENTER.x}
          y1={SVG_CENTER.y}
          x2={ray.x2}
          y2={ray.y2}
          stroke={ray.stroke}
          strokeWidth={ray.strokeWidth}
          opacity={ray.opacity}
        />
      ))}

      {RITUAL_RINGS.map((ring) => (
        <circle
          key={ring.r}
          cx={SVG_CENTER.x}
          cy={SVG_CENTER.y}
          r={ring.r}
          fill="none"
          stroke={ring.color}
          strokeWidth={ring.strokeWidth}
          opacity={ring.opacity}
          strokeDasharray={ring.dasharray}
        />
      ))}

      {INSCRIPTIONS.map((mark, i) => (
        <g key={`mark-${i}`}>
          <line
            x1={mark.x1}
            y1={mark.y1}
            x2={mark.x2}
            y2={mark.y2}
            stroke={"var(--color-gold)"}
            strokeWidth="1"
            opacity="0.2"
          />
          {mark.hasDot && <circle cx={mark.dotCx} cy={mark.dotCy} r="3" fill={"var(--color-gold)"} opacity="0.12" />}
        </g>
      ))}

      <polygon points={HEXAGRAMS.outer} fill="none" stroke={"var(--color-gold-warm)"} strokeWidth="1" opacity="0.1" />
      <polygon points={HEXAGRAMS.inner} fill="none" stroke={"var(--color-gold)"} strokeWidth="0.5" opacity="0.06" />

      <rect
        x={BORDERS.outer.x}
        y={BORDERS.outer.y}
        width={BORDERS.outer.width}
        height={BORDERS.outer.height}
        fill="none"
        stroke={"var(--color-gold)"}
        strokeWidth="1"
        opacity={BORDERS.outer.opacity}
      />
      <rect
        x={BORDERS.inner.x}
        y={BORDERS.inner.y}
        width={BORDERS.inner.width}
        height={BORDERS.inner.height}
        fill="none"
        stroke={"var(--color-gold)"}
        strokeWidth="0.5"
        opacity={BORDERS.inner.opacity}
      />

      <CentralStar cx={SVG_CENTER.x} cy={SVG_CENTER.y} />
      <BurstDots points={BURST_POINTS} idPrefix="cultBurst" />
      <ScatteredStars cx={SVG_CENTER.x} cy={SVG_CENTER.y} count={6} radius={230} seed={99} />
    </svg>
  );
}
