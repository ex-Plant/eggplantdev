/* Agent: Claude — Cosmic Cartography / Sacred Geometry */

const GOLD = "var(--color-gold)";
const GOLD_DARK = "var(--color-gold-dark)";
const GOLD_WARM = "var(--color-gold-warm)";

const GRID_X = [200, 400, 600, 800, 1000] as const;
const GRID_Y = [160, 320, 480, 640] as const;

const TARGETS = [
  { cx: 600, cy: 400, rings: [25, 16, 6], dot: 3 },
  { cx: 900, cy: 160, rings: [18, 10], dot: 2.5 },
  { cx: 200, cy: 640, rings: [20, 12], dot: 2.5 },
  { cx: 1000, cy: 400, rings: [14, 7], dot: 2 },
  { cx: 800, cy: 560, rings: [12, 6], dot: 1.5 },
] as const;

const DEGREE_LABELS = [
  { x: 600, y: 30, label: "0\u00B0" },
  { x: 1170, y: 405, label: "90\u00B0" },
  { x: 600, y: 785, label: "180\u00B0" },
  { x: 30, y: 405, label: "270\u00B0" },
] as const;

const BRACKET_SIZE = 30;
const BRACKET_OFFSET = 20;

const CORNERS = [
  { x: BRACKET_OFFSET, y: BRACKET_OFFSET, dx: 1, dy: 1 },
  { x: 1200 - BRACKET_OFFSET, y: BRACKET_OFFSET, dx: -1, dy: 1 },
  { x: BRACKET_OFFSET, y: 800 - BRACKET_OFFSET, dx: 1, dy: -1 },
  { x: 1200 - BRACKET_OFFSET, y: 800 - BRACKET_OFFSET, dx: -1, dy: -1 },
] as const;

const SYMBOLS = [
  { cx: 400, cy: 160, type: "star" },
  { cx: 1000, cy: 640, type: "diamond" },
  { cx: 200, cy: 320, type: "star" },
  { cx: 800, cy: 160, type: "diamond" },
] as const;

export function CosmicCartographyGeometry() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 size-full"
      viewBox="0 0 1200 800"
      preserveAspectRatio="xMidYMid slice"
    >
      {/* Coordinate grid */}
      {GRID_X.map((x) => (
        <line
          key={`gx-${x}`}
          x1={x}
          y1={0}
          x2={x}
          y2={800}
          stroke={GOLD}
          strokeWidth={0.5}
          opacity={x === 600 ? 0.06 : 0.04}
        />
      ))}
      {GRID_Y.map((y) => (
        <line
          key={`gy-${y}`}
          x1={0}
          y1={y}
          x2={1200}
          y2={y}
          stroke={GOLD}
          strokeWidth={0.5}
          opacity={y === 320 ? 0.06 : 0.04}
        />
      ))}

      {/* Diagonal chart lines */}
      <line x1={0} y1={0} x2={1200} y2={800} stroke={GOLD_DARK} strokeWidth={0.5} opacity={0.03} />
      <line x1={1200} y1={0} x2={0} y2={800} stroke={GOLD_DARK} strokeWidth={0.5} opacity={0.03} />

      {/* Dashed trajectory lines from center to each outer target */}
      {TARGETS.slice(1).map((t) => (
        <line
          key={`traj-${t.cx}-${t.cy}`}
          x1={600}
          y1={400}
          x2={t.cx}
          y2={t.cy}
          stroke={GOLD_WARM}
          strokeWidth={0.8}
          strokeDasharray="6 6"
          opacity={0.09}
        />
      ))}

      {/* Target planets — concentric ring clusters */}
      {TARGETS.map((t) => (
        <g key={`target-${t.cx}-${t.cy}`}>
          {t.rings.map((r) => (
            <circle
              key={`ring-${t.cx}-${r}`}
              cx={t.cx}
              cy={t.cy}
              r={r}
              fill="none"
              stroke={GOLD}
              strokeWidth={0.6}
              opacity={0.12}
            />
          ))}
          <circle cx={t.cx} cy={t.cy} r={t.dot} fill={GOLD_WARM} opacity={0.2} />
        </g>
      ))}

      {/* Degree labels */}
      {DEGREE_LABELS.map((d) => (
        <text
          key={d.label}
          x={d.x}
          y={d.y}
          textAnchor="middle"
          fontFamily="monospace"
          fontSize={8}
          fill={GOLD}
          opacity={0.12}
        >
          {d.label}
        </text>
      ))}

      {/* Corner brackets */}
      {CORNERS.map((c) => (
        <path
          key={`corner-${c.x}-${c.y}`}
          d={`M${c.x},${c.y + c.dy * BRACKET_SIZE} L${c.x},${c.y} L${c.x + c.dx * BRACKET_SIZE},${c.y}`}
          fill="none"
          stroke={GOLD}
          strokeWidth={0.8}
          opacity={0.1}
        />
      ))}

      {/* Scattered sacred symbols */}
      {SYMBOLS.map((s) =>
        s.type === "star" ? (
          <path
            key={`sym-${s.cx}-${s.cy}`}
            d={`M${s.cx},${s.cy - 4} L${s.cx},${s.cy + 4} M${s.cx - 4},${s.cy} L${s.cx + 4},${s.cy}`}
            stroke={GOLD_DARK}
            strokeWidth={0.6}
            opacity={0.08}
          />
        ) : (
          <rect
            key={`sym-${s.cx}-${s.cy}`}
            x={s.cx - 3}
            y={s.cy - 3}
            width={6}
            height={6}
            transform={`rotate(45 ${s.cx} ${s.cy})`}
            fill="none"
            stroke={GOLD_DARK}
            strokeWidth={0.6}
            opacity={0.08}
          />
        ),
      )}
    </svg>
  );
}
