/* Agent: Claude — Pentagram Rave */

const A = (i: number, offset = 0) => ((2 * Math.PI * i) / 5 - Math.PI / 2 + offset);
const PX = (r: number, i: number, off = 0) => 600 + r * Math.cos(A(i, off));
const PY = (r: number, i: number, off = 0) => 400 + r * Math.sin(A(i, off));

const OUTER_PTS = Array.from({ length: 5 }, (_, i) => [PX(280, i), PY(280, i)] as const);
const INNER_PTS = Array.from({ length: 5 }, (_, i) => [PX(280, i, Math.PI / 5), PY(280, i, Math.PI / 5)] as const);
const INNER2 = Array.from({ length: 5 }, (_, i) => [PX(107, i, Math.PI / 5), PY(107, i, Math.PI / 5)] as const);

const starLine = (pts: readonly (readonly [number, number])[]) =>
  Array.from({ length: 5 }, (_, i) => `M${pts[i][0]},${pts[i][1]}L${pts[(i + 2) % 5][0]},${pts[(i + 2) % 5][1]}`).join(" ");

const pentagon = (pts: readonly (readonly [number, number])[]) =>
  "M" + pts.map(([x, y]) => `${x},${y}`).join("L") + "Z";

const STARS: readonly [number, number, string][] = [
  [8, 12, "#daa520"], [22, 6, "#d946ef"], [37, 18, "#ffd700"], [52, 8, "#10ffaa"], [68, 14, "#daa520"],
  [83, 5, "#ffd700"], [93, 22, "#d946ef"], [5, 35, "#daa520"], [18, 42, "#00e5ff"], [33, 30, "#ffd700"],
  [47, 38, "#daa520"], [62, 28, "#d946ef"], [78, 36, "#ffd700"], [91, 44, "#10ffaa"], [12, 55, "#daa520"],
  [27, 62, "#ffd700"], [42, 50, "#d946ef"], [57, 58, "#daa520"], [72, 48, "#00e5ff"], [87, 60, "#ffd700"],
  [95, 52, "#daa520"], [3, 72, "#10ffaa"], [16, 78, "#daa520"], [31, 68, "#ffd700"], [46, 76, "#d946ef"],
  [61, 70, "#daa520"], [76, 82, "#ffd700"], [90, 74, "#daa520"], [10, 88, "#00e5ff"], [25, 92, "#ffd700"],
  [40, 85, "#daa520"], [55, 90, "#d946ef"], [70, 94, "#ffd700"], [85, 88, "#10ffaa"], [96, 80, "#daa520"],
  [14, 25, "#ffd700"], [29, 16, "#daa520"], [44, 22, "#d946ef"], [59, 15, "#ffd700"], [74, 20, "#daa520"],
  [88, 30, "#00e5ff"], [7, 48, "#ffd700"], [23, 54, "#daa520"], [38, 46, "#10ffaa"], [53, 64, "#ffd700"],
  [67, 56, "#daa520"], [82, 66, "#d946ef"], [4, 82, "#ffd700"], [19, 68, "#daa520"], [34, 78, "#ffd700"],
  [49, 84, "#daa520"], [64, 88, "#00e5ff"], [79, 92, "#ffd700"], [94, 62, "#daa520"], [11, 4, "#d946ef"],
  [50, 3, "#ffd700"], [75, 7, "#10ffaa"], [20, 95, "#daa520"], [60, 96, "#d946ef"], [88, 95, "#ffd700"],
];

const RADIATE = OUTER_PTS.flatMap(([x, y], i) => {
  const angle = A(i);
  return Array.from({ length: 10 }, (_, j) => {
    const spread = ((j - 4.5) / 4.5) * 0.5;
    const a = angle + spread;
    return `M${x},${y}L${x + 28 * Math.cos(a)},${y + 28 * Math.sin(a)}`;
  });
});

const RITUAL_MARKS = [
  [520, 320], [680, 320], [520, 480], [680, 480], [600, 280],
  [600, 520], [490, 370], [710, 370], [490, 430], [710, 430],
  [550, 300], [650, 300], [550, 500], [650, 500],
] as const;

export function HeroPentagramRave() {
  return (
    <div id="hero-pentagram-rave" className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#080610]">
      {/* Star field */}
      {STARS.map(([x, y, c], i) => (
        <div key={`s-${i}`} className="pointer-events-none absolute rounded-full" style={{
          left: `${x}%`, top: `${y}%`, width: i % 5 === 0 ? 2.5 : 1.5, height: i % 5 === 0 ? 2.5 : 1.5,
          backgroundColor: c, opacity: 0.08 + (i % 7) * 0.03,
        }} />
      ))}

      {/* Sacred geometry — Pentagram */}
      <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
        {/* Outer circle */}
        <circle cx="600" cy="400" r="280" fill="none" stroke="#00e5ff" strokeWidth="0.7" opacity="0.08" />
        {/* Concentric circles */}
        <circle cx="600" cy="400" r="220" fill="none" stroke="#daa520" strokeWidth="0.5" opacity="0.1" />
        <circle cx="600" cy="400" r="160" fill="none" stroke="#ffd700" strokeWidth="0.4" opacity="0.08" strokeDasharray="4 8" />
        <circle cx="600" cy="400" r="107" fill="none" stroke="#daa520" strokeWidth="0.4" opacity="0.07" />
        {/* Outer pentagram */}
        <path d={starLine(OUTER_PTS)} fill="none" stroke="#ffd700" strokeWidth="0.8" opacity="0.14" />
        {/* Inner pentagon */}
        <path d={pentagon(INNER_PTS)} fill="none" stroke="#daa520" strokeWidth="0.5" opacity="0.1" />
        {/* Inner pentagram rotated 36° */}
        <path d={starLine(INNER2)} fill="none" stroke="#d946ef" strokeWidth="0.6" opacity="0.15" />
        {/* 5 small circles at pentagram points */}
        {OUTER_PTS.map(([cx, cy], i) => (
          <circle key={`pc-${i}`} cx={cx} cy={cy} r="6" fill="none" stroke="#ffd700" strokeWidth="0.6" opacity="0.18" />
        ))}
        {/* Radiating lines */}
        <path d={RADIATE.join(" ")} fill="none" stroke="#10ffaa" strokeWidth="0.4" opacity="0.1" />
        {/* Ritual marks — dots and crosses */}
        {RITUAL_MARKS.map(([rx, ry], i) => i % 2 === 0
          ? <circle key={`rm-${i}`} cx={rx} cy={ry} r="1.5" fill="#daa520" opacity="0.1" />
          : <path key={`rm-${i}`} d={`M${rx - 4},${ry}L${rx + 4},${ry}M${rx},${ry - 4}L${rx},${ry + 4}`} stroke="#ffd700" strokeWidth="0.4" opacity="0.08" />
        )}
      </svg>

      {/* Radial glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[460px] w-[460px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(217,70,239,0.1)_0%,rgba(218,165,32,0.06)_40%,transparent_70%)]" />

      {/* Central content */}
      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Eggplant */}
        <img src="/logos/eggplant-logo-smooth.apng" alt="" className="h-44 w-44 object-contain saturate-[0.7] sepia-[0.2] drop-shadow-[0_0_30px_rgba(217,70,239,0.25)]" />

        {/* Eyebrow */}
        <p className="mt-10 font-mono text-12 uppercase tracking-widest text-[#d946ef]/30">
          Ritual frequency: 432 Hz
        </p>

        {/* Title */}
        <h1 className="mt-4 font-mono text-48 uppercase leading-none md:text-72">
          <span className="text-[#ffd700]">Pentagram</span>
          <br />
          <span className="text-[#d946ef]/70">Rave</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 max-w-sm font-mono text-14 text-[#c8b080]/45">
          The eggplant was summoned at the intersection of five cosmic lines, pulsing where sacred geometry meets the dance floor.
        </p>
      </div>
    </div>
  );
}
