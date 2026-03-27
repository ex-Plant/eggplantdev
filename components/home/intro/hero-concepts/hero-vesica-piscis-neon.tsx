/* Agent: Claude — Vesica Piscis Neon */

const STARS: readonly [number, number][] = [
  [8, 12], [22, 6], [37, 18], [52, 8], [68, 14], [83, 5], [93, 22],
  [5, 35], [18, 42], [33, 30], [47, 38], [62, 28], [78, 36], [91, 44],
  [12, 55], [27, 62], [42, 50], [57, 58], [72, 48], [87, 60], [95, 52],
  [3, 72], [16, 78], [31, 68], [46, 76], [61, 70], [76, 82], [90, 74],
  [10, 88], [25, 92], [40, 85], [55, 90], [70, 94], [85, 88], [96, 80],
  [14, 25], [29, 16], [44, 22], [59, 15], [74, 20], [88, 30], [7, 48],
  [23, 54], [38, 46], [53, 64], [67, 56], [82, 66], [4, 82], [19, 68],
  [34, 78], [49, 84], [64, 88], [79, 92], [94, 62], [11, 4],
];

const CX = 600;
const CY = 400;
const R = 180;
const OFF = 100;
const NEON = ["#daa520", "#d946ef", "#10ffaa"] as const;
const ANGLES = [0, Math.PI / 3, (2 * Math.PI) / 3] as const;

const PAIRS = ANGLES.map((a, i) => ({
  c1: [CX + OFF * Math.cos(a), CY + OFF * Math.sin(a)] as const,
  c2: [CX - OFF * Math.cos(a), CY - OFF * Math.sin(a)] as const,
  color: NEON[i],
  opacity: i === 0 ? 0.14 : 0.12,
  vesicaAngle: a + Math.PI / 2,
}));

const CENTERS = PAIRS.flatMap((p) => [p.c1, p.c2]);

export function HeroVesicaPiscisNeon() {
  return (
    <div id="hero-vesica-piscis-neon" className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#080610]">
      {/* Star field */}
      {STARS.map(([x, y], i) => (
        <div
          key={`s-${i}`}
          className="pointer-events-none absolute rounded-full"
          style={{
            left: `${x}%`,
            top: `${y}%`,
            width: i % 5 === 0 ? 2.5 : 1.5,
            height: i % 5 === 0 ? 2.5 : 1.5,
            backgroundColor: i % 4 === 0 ? "#daa520" : i % 7 === 0 ? "#d946ef" : i % 6 === 0 ? "#10ffaa" : "#f5f0e0",
            opacity: 0.1 + (i % 5) * 0.06,
          }}
        />
      ))}

      {/* Sacred geometry — Multi-layered Vesica Piscis */}
      <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
        {/* 3 pairs of circles */}
        {PAIRS.map((p, i) => (
          <g key={`pair-${i}`}>
            <circle cx={p.c1[0]} cy={p.c1[1]} r={R} fill="none" stroke={p.color} strokeWidth="0.7" opacity={p.opacity} />
            <circle cx={p.c2[0]} cy={p.c2[1]} r={R} fill="none" stroke={p.color} strokeWidth="0.7" opacity={p.opacity} />
            {/* Vesica piscis outline */}
            <ellipse cx={CX} cy={CY} rx={42} ry={R * 0.82} fill="none" stroke="#00e5ff" strokeWidth="0.5" opacity="0.08"
              transform={`rotate(${(p.vesicaAngle * 180) / Math.PI}, ${CX}, ${CY})`} />
          </g>
        ))}
        {/* Radial lines from center to each circle center */}
        {CENTERS.map(([cx, cy], i) => (
          <line key={`r-${i}`} x1={CX} y1={CY} x2={cx} y2={cy} stroke="#ffd700" strokeWidth="0.3" opacity="0.1" />
        ))}
        {/* Concentric rings at each circle center */}
        {CENTERS.map(([cx, cy], i) => (
          <g key={`ring-${i}`}>
            <circle cx={cx} cy={cy} r={6} fill="none" stroke="#ffd700" strokeWidth="0.4" opacity="0.15" />
            <circle cx={cx} cy={cy} r={12} fill="none" stroke="#ffd700" strokeWidth="0.3" opacity="0.08" />
          </g>
        ))}
        {/* Sacred symbols at outer intersection points */}
        {CENTERS.map(([cx, cy], i) => (
          <g key={`sym-${i}`}>
            <circle cx={cx} cy={cy} r={2} fill="#ffd700" opacity="0.12" />
            {i % 2 === 0 && (
              <polygon points={`${cx},${cy - 8} ${cx - 5},${cy + 4} ${cx + 5},${cy + 4}`} fill="none" stroke="#00e5ff" strokeWidth="0.4" opacity="0.08" />
            )}
          </g>
        ))}
        {/* Inner circle at center convergence */}
        <circle cx={CX} cy={CY} r={24} fill="none" stroke="#ffd700" strokeWidth="0.6" opacity="0.18" />
        <circle cx={CX} cy={CY} r={16} fill="none" stroke="#ffd700" strokeWidth="0.4" opacity="0.12" />
      </svg>

      {/* Radial glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(218,165,32,0.12)_0%,rgba(217,70,239,0.04)_35%,rgba(16,255,170,0.02)_55%,transparent_70%)]" />

      {/* Central content */}
      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Eggplant */}
        <img src="/logos/eggplant-logo-smooth.apng" alt="" className="h-44 w-44 object-contain saturate-[0.7] sepia-[0.25] drop-shadow-[0_0_32px_rgba(218,165,32,0.3)] drop-shadow-[0_0_64px_rgba(217,70,239,0.1)]" />

        {/* Eyebrow */}
        <p className="mt-10 font-mono text-12 uppercase tracking-widest text-[#d946ef]/25">
          Where all circles converge
        </p>

        {/* Title */}
        <h1 className="mt-4 font-mono text-48 uppercase leading-none md:text-72">
          <span className="text-[#ffd700]">Vesica</span>
          <br />
          <span className="text-[#10ffaa]/50">Piscis</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 max-w-sm font-mono text-14 text-[#c8b080]/45">
          An eggplant born at the intersection of all sacred circles, where three vesicae align and geometry collapses into origin.
        </p>
      </div>
    </div>
  );
}
