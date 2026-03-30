import { GLAM_STRIPES, ORBITAL_ARCS } from "./config";

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
    </>
  );
}
