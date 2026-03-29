import { ALL_POINTS, INNER_R, CONTAINMENT, SACRED_SYMBOLS } from "./config";

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

export function MetatronsSacredGeometry() {
  return (
    <>
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
    </>
  );
}
