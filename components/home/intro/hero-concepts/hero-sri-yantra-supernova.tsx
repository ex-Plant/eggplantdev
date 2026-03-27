/* Agent: Claude — Sri Yantra Supernova */

const CX = 600;
const CY = 400;

const STARS: readonly [number, number, string][] = [
  [3, 8, "#daa520"], [12, 4, "#d946ef"], [21, 15, "#ffd700"], [30, 6, "#10ffaa"], [38, 19, "#daa520"],
  [46, 3, "#ffd700"], [55, 12, "#d946ef"], [63, 7, "#daa520"], [72, 16, "#10ffaa"], [81, 4, "#ffd700"],
  [89, 11, "#d946ef"], [95, 20, "#daa520"], [7, 28, "#ffd700"], [16, 35, "#10ffaa"], [24, 42, "#daa520"],
  [33, 30, "#d946ef"], [41, 38, "#ffd700"], [50, 26, "#daa520"], [58, 44, "#10ffaa"], [67, 32, "#d946ef"],
  [75, 40, "#ffd700"], [84, 28, "#daa520"], [92, 36, "#10ffaa"], [4, 52, "#d946ef"], [13, 58, "#ffd700"],
  [22, 48, "#daa520"], [31, 56, "#10ffaa"], [39, 64, "#d946ef"], [48, 50, "#ffd700"], [56, 62, "#daa520"],
  [65, 54, "#10ffaa"], [73, 66, "#d946ef"], [82, 52, "#ffd700"], [90, 60, "#daa520"], [6, 72, "#10ffaa"],
  [15, 78, "#d946ef"], [23, 68, "#ffd700"], [32, 76, "#daa520"], [40, 82, "#10ffaa"], [49, 70, "#d946ef"],
  [57, 84, "#ffd700"], [66, 74, "#daa520"], [74, 86, "#10ffaa"], [83, 72, "#d946ef"], [91, 80, "#ffd700"],
  [9, 90, "#daa520"], [18, 94, "#10ffaa"], [27, 88, "#d946ef"], [36, 92, "#ffd700"], [44, 86, "#daa520"],
  [53, 96, "#10ffaa"], [61, 90, "#d946ef"], [70, 94, "#ffd700"], [78, 88, "#daa520"], [87, 96, "#10ffaa"],
  [96, 92, "#d946ef"], [2, 18, "#ffd700"], [35, 14, "#daa520"], [64, 22, "#10ffaa"], [79, 10, "#d946ef"],
  [11, 46, "#ffd700"], [44, 58, "#daa520"], [77, 48, "#10ffaa"], [94, 44, "#d946ef"], [28, 80, "#ffd700"],
];

const UP_SCALES = [1, 0.72, 0.48, 0.28] as const;
const DOWN_SCALES = [0.92, 0.68, 0.52, 0.36, 0.18] as const;
const TRI_H = 160;

const upTriangle = (s: number) =>
  `M${CX},${CY - TRI_H * s * 0.6}L${CX + TRI_H * s * 0.7},${CY + TRI_H * s * 0.4}L${CX - TRI_H * s * 0.7},${CY + TRI_H * s * 0.4}Z`;
const downTriangle = (s: number) =>
  `M${CX},${CY + TRI_H * s * 0.6}L${CX + TRI_H * s * 0.7},${CY - TRI_H * s * 0.4}L${CX - TRI_H * s * 0.7},${CY - TRI_H * s * 0.4}Z`;

const PETAL_COUNT = 16;
const PETAL_R = 195;
const petals = Array.from({ length: PETAL_COUNT }, (_, i) => {
  const a = ((Math.PI * 2) / PETAL_COUNT) * i;
  const px = CX + PETAL_R * Math.cos(a);
  const py = CY + PETAL_R * Math.sin(a);
  const tip = 18;
  const w = 8;
  return `M${px + tip * Math.cos(a)},${py + tip * Math.sin(a)}Q${px + w * Math.cos(a + 0.5)},${py + w * Math.sin(a + 0.5)} ${px - tip * Math.cos(a)},${py - tip * Math.sin(a)}Q${px + w * Math.cos(a - 0.5)},${py + w * Math.sin(a - 0.5)} ${px + tip * Math.cos(a)},${py + tip * Math.sin(a)}Z`;
});

const GATE = 230;
const G_NOTCH = 18;
const gateFrame = `M${CX - GATE},${CY - GATE}H${CX + GATE}V${CY + GATE}H${CX - GATE}Z`;
const gateTabs = [
  `M${CX - G_NOTCH},${CY - GATE}V${CY - GATE - G_NOTCH}H${CX + G_NOTCH}V${CY - GATE}`,
  `M${CX - G_NOTCH},${CY + GATE}V${CY + GATE + G_NOTCH}H${CX + G_NOTCH}V${CY + GATE}`,
  `M${CX - GATE},${CY - G_NOTCH}H${CX - GATE - G_NOTCH}V${CY + G_NOTCH}H${CX - GATE}`,
  `M${CX + GATE},${CY - G_NOTCH}H${CX + GATE + G_NOTCH}V${CY + G_NOTCH}H${CX + GATE}`,
];

export function HeroSriYantraSupernova() {
  return (
    <div id="hero-sri-yantra-supernova" className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#080610]">
      {/* Star field */}
      {STARS.map(([x, y, c], i) => (
        <div
          key={`s-${i}`}
          className="pointer-events-none absolute rounded-full"
          style={{ left: `${x}%`, top: `${y}%`, width: i % 6 === 0 ? 2.5 : 1.5, height: i % 6 === 0 ? 2.5 : 1.5, backgroundColor: c, opacity: 0.1 + (i % 5) * 0.04 }}
        />
      ))}

      {/* Sacred geometry — Sri Yantra */}
      <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
        {/* Bhupura gate frame */}
        <path d={gateFrame} fill="none" stroke="#00e5ff" strokeWidth="0.8" opacity="0.08" />
        {gateTabs.map((d, i) => <path key={`gt-${i}`} d={d} fill="none" stroke="#00e5ff" strokeWidth="0.8" opacity="0.08" />)}
        {/* Lotus petals */}
        {petals.map((d, i) => <path key={`lp-${i}`} d={d} fill="none" stroke="#10ffaa" strokeWidth="0.5" opacity="0.1" />)}
        {/* Concentric lotus circles */}
        <circle cx={CX} cy={CY} r={175} fill="none" stroke="#ffd700" strokeWidth="0.5" opacity="0.1" />
        <circle cx={CX} cy={CY} r={210} fill="none" stroke="#ffd700" strokeWidth="0.4" opacity="0.07" />
        {/* Upward triangles — gold */}
        {UP_SCALES.map((s, i) => <path key={`up-${i}`} d={upTriangle(s)} fill="none" stroke="#daa520" strokeWidth="0.7" opacity="0.18" />)}
        {/* Downward triangles — magenta */}
        {DOWN_SCALES.map((s, i) => <path key={`dn-${i}`} d={downTriangle(s)} fill="none" stroke="#d946ef" strokeWidth="0.7" opacity="0.12" />)}
        {/* Bindu */}
        <circle cx={CX} cy={CY} r={3} fill="#ffd700" opacity="0.3" />
      </svg>

      {/* Radial glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,215,0,0.1)_0%,rgba(217,70,239,0.05)_40%,transparent_70%)]" />

      {/* Central content */}
      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Eggplant */}
        <img
          src="/logos/eggplant-logo-smooth.apng"
          alt=""
          className="h-40 w-40 object-contain saturate-[0.7] sepia-[0.25] drop-shadow-[0_0_30px_rgba(255,215,0,0.3)] drop-shadow-[0_0_60px_rgba(217,70,239,0.2)]"
        />

        {/* Eyebrow */}
        <p className="mt-10 font-mono text-12 uppercase tracking-widest text-[#10ffaa]/25">
          Nine triangles, forty-three fragments, one truth
        </p>

        {/* Title */}
        <h1 className="mt-4 font-mono text-48 uppercase leading-none md:text-72">
          <span className="text-[#ffd700]">Sri Yantra</span>
          <br />
          <span className="text-[#d946ef]/60">Supernova</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 max-w-sm font-mono text-14 text-[#c8b080]/45">
          An eggplant rests at the bindu point — the silent center of the universe&apos;s most complex sacred diagram.
        </p>
      </div>
    </div>
  );
}
