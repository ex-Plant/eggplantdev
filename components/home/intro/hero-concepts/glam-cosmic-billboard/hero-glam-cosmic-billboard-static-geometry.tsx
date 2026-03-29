import { GLAM_STRIPES, ORBITAL_ARCS, SPARKLES } from "./config";

export function GlamStripesArcsSparkles() {
  return (
    <>
      {GLAM_STRIPES.map((stripe, i) => (
        <line
          key={`stripe-${i}`}
          x1="0"
          y1={stripe.y1}
          x2="1200"
          y2={stripe.y2}
          stroke={stripe.stroke}
          strokeWidth={stripe.strokeWidth}
          opacity={stripe.opacity}
        />
      ))}

      {ORBITAL_ARCS.map((arc, i) => (
        <ellipse
          key={`arc-${i}`}
          cx={arc.cx}
          cy={arc.cy}
          rx={arc.rx}
          ry={arc.ry}
          fill="none"
          stroke={arc.stroke}
          strokeWidth={arc.strokeWidth}
          opacity={arc.opacity}
          transform={`rotate(${arc.rotate} ${arc.cx} ${arc.cy})`}
        />
      ))}

      {SPARKLES.map((s, i) => (
        <g key={`sparkle-${i}`} opacity={s.opacity}>
          <line x1={s.x - 3} y1={s.y} x2={s.x + 3} y2={s.y} stroke={s.color} strokeWidth="0.8" />
          <line x1={s.x} y1={s.y - 3} x2={s.x} y2={s.y + 3} stroke={s.color} strokeWidth="0.8" />
        </g>
      ))}
    </>
  );
}
