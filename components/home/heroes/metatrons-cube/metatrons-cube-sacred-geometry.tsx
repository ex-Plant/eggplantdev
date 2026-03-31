import {
  ALL_POINTS,
  INNER_R,
  CONTAINMENT,
  SACRED_SYMBOLS,
  CENTER,
  OUTER_DASHED_CIRCLES,
  RADIAL_GUIDES,
  CORNER_BRACKETS,
  SVG_VIEWBOX,
} from "./config";

const STROKES = ["var(--color-gold)", "var(--color-gold-dark)", "var(--color-gold-warm)"] as const;

const LINES: readonly [number, number, number, number][] = (() => {
  const result: [number, number, number, number][] = [];
  for (let i = 0; i < ALL_POINTS.length; i++) {
    for (let j = i + 1; j < ALL_POINTS.length; j++) {
      result.push([ALL_POINTS[i][0], ALL_POINTS[i][1], ALL_POINTS[j][0], ALL_POINTS[j][1]]);
    }
  }
  return result;
})();

export function MetatronsCubeSacredGeometry() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox={SVG_VIEWBOX}
      preserveAspectRatio="xMidYMid slice"
    >
      {/* Connecting lines between all 13 centers */}
      {LINES.map(([x1, y1, x2, y2], i) => (
        <line
          key={`l-${i}`}
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          stroke={STROKES[i % 3]}
          strokeWidth="0.5"
          opacity={0.08 + (i % 3) * 0.04}
        />
      ))}
      {/* 13 circles */}
      {ALL_POINTS.map(([cx, cy], i) => (
        <circle
          key={`c-${i}`}
          cx={cx}
          cy={cy}
          r={i === 0 ? INNER_R : INNER_R * 0.65}
          fill="none"
          stroke={STROKES[i % 3]}
          strokeWidth={i === 0 ? 0.8 : 0.5}
          opacity={i === 0 ? 0.2 : 0.12}
        />
      ))}
      {/* Outer containment circle */}
      <circle
        cx={CONTAINMENT.cx}
        cy={CONTAINMENT.cy}
        r={CONTAINMENT.r}
        fill="none"
        stroke="var(--color-gold)"
        strokeWidth="0.3"
        opacity="0.06"
        strokeDasharray={CONTAINMENT.dasharray}
      />
      {OUTER_DASHED_CIRCLES.map((circle) => (
        <circle
          key={circle.r}
          cx={CENTER[0]}
          cy={CENTER[1]}
          r={circle.r}
          fill="none"
          stroke={circle.stroke}
          strokeWidth="0.35"
          opacity={circle.opacity}
          strokeDasharray={circle.dasharray}
        />
      ))}
      {RADIAL_GUIDES.map(({ x2, y2 }, i) => (
        <line
          key={`guide-${i}`}
          x1={CENTER[0]}
          y1={CENTER[1]}
          x2={x2}
          y2={y2}
          stroke={STROKES[i % STROKES.length]}
          strokeWidth="0.45"
          opacity="0.08"
        />
      ))}
      {CORNER_BRACKETS.map(({ x, y, dx, dy }, i) => (
        <g key={`corner-${i}`} opacity="0.08" stroke={STROKES[i % STROKES.length]} fill="none">
          <path d={`M${x},${y} L${x + dx * 120},${y} M${x},${y} L${x},${y + dy * 120}`} strokeWidth="0.7" />
          <path
            d={`M${x + dx * 12},${y + dy * 12} L${x + dx * 72},${y + dy * 12} M${x + dx * 12},${y + dy * 12} L${x + dx * 12},${y + dy * 72}`}
            strokeWidth="0.45"
          />
        </g>
      ))}
      {/* Scattered sacred symbols */}
      <polygon
        points={SACRED_SYMBOLS.triangleTop.points}
        fill="none"
        stroke="var(--color-gold-warm)"
        strokeWidth="0.4"
        opacity="0.1"
      />
      <polygon
        points={SACRED_SYMBOLS.triangleBottom.points}
        fill="none"
        stroke="var(--color-gold-dark)"
        strokeWidth="0.4"
        opacity="0.08"
      />
      <rect
        x={SACRED_SYMBOLS.diamondLeft.x}
        y={SACRED_SYMBOLS.diamondLeft.y}
        width={SACRED_SYMBOLS.diamondLeft.width}
        height={SACRED_SYMBOLS.diamondLeft.height}
        fill="none"
        stroke="var(--color-gold)"
        strokeWidth="0.4"
        opacity="0.08"
        transform={SACRED_SYMBOLS.diamondLeft.transform}
      />
      <rect
        x={SACRED_SYMBOLS.diamondRight.x}
        y={SACRED_SYMBOLS.diamondRight.y}
        width={SACRED_SYMBOLS.diamondRight.width}
        height={SACRED_SYMBOLS.diamondRight.height}
        fill="none"
        stroke="var(--color-gold-warm)"
        strokeWidth="0.4"
        opacity="0.08"
        transform={SACRED_SYMBOLS.diamondRight.transform}
      />
    </svg>
  );
}
