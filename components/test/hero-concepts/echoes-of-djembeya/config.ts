/* ═══════════════════════════════════════════════
   Echoes of Djembeya — Hero Configuration
   ═══════════════════════════════════════════════ */

/* ── Palette ── */
export const PALETTE = {
  gold: "#daa520",
  darkGold: "#c8860e",
  softGold: "#f0c040",
  cream: "#f5e6c0",
  warmCaption: "#c8b080",
  coolBlue: "#8fa6b0",
  bgColor: "#0c0a08",
} as const;

/* ── Stars ── */
export const STAR_COUNT = 60;
export const STARS = Array.from({ length: STAR_COUNT }, (_, i) => ({
  x: `${(i * 29 + 11) % 100}%`,
  y: `${(i * 43 + 7) % 100}%`,
  size: i % 8 === 0 ? 3 : i % 3 === 0 ? 2 : 1,
  backgroundColor: i % 5 === 0 ? PALETTE.gold : PALETTE.cream,
  opacity: 0.08 + (i % 6) * 0.04,
}));

/* ── Art deco corner frames ── */
export const CORNERS = {
  outer: [
    { d: "M40,40 L40,120 M40,40 L120,40" },
    { d: "M1160,40 L1160,120 M1160,40 L1080,40" },
    { d: "M40,760 L40,680 M40,760 L120,760" },
    { d: "M1160,760 L1160,680 M1160,760 L1080,760" },
  ],
  inner: [
    { d: "M55,55 L55,105 M55,55 L105,55" },
    { d: "M1145,55 L1145,105 M1145,55 L1095,55" },
    { d: "M55,745 L55,695 M55,745 L105,745" },
    { d: "M1145,745 L1145,695 M1145,745 L1095,745" },
  ],
} as const;

/* ── Figure-8 / infinity circles ── */
export const INFINITY_CIRCLES = {
  outer: [
    { cx: 510, cy: 400, r: 160 },
    { cx: 690, cy: 400, r: 160 },
  ],
  inner: [
    { cx: 510, cy: 400, r: 100 },
    { cx: 690, cy: 400, r: 100 },
  ],
  vesica: { cx: 600, cy: 400, rx: 50, ry: 130 },
} as const;

/* ── Celestial bodies ── */
export const CELESTIAL_BODIES = {
  saturn: { cx: 280, cy: 550, r: 18, ringRx: 30, ringRy: 8, color: PALETTE.coolBlue },
  crescentMoon: { cx: 900, cy: 250, r: 14, maskCx: 905, maskCy: 247, maskR: 12, color: PALETTE.cream },
  halfMoon: { cx: 350, cy: 220, r: 12, color: PALETTE.warmCaption },
  fullPlanet: { cx: 850, cy: 580, r: 20, innerR: 12, color: PALETTE.gold },
  eclipse: { cx: 180, cy: 400, r: 10, outerR: 16, color: PALETTE.gold },
  concentricTarget: { cx: 1020, cy: 400, radii: [20, 12, 4] as readonly number[], color: PALETTE.gold },
} as const;

/* ── Sacred symbols ── */
export const SYMBOLS = {
  upTriangle: "440,180 460,210 420,210",
  downTriangle: "760,600 780,630 740,630",
  diamond: "950,150 965,170 950,190 935,170",
  fourPointStars: [[300, 350], [750, 250], [500, 600], [850, 400], [400, 500]] as readonly (readonly number[])[],
} as const;

/* ── Eggplant treatment ── */
export const EGGPLANT = {
  src: "/logos/eggplant-logo-smooth.apng",
  filter: "sepia(0.3) saturate(1.5) brightness(0.9)",
} as const;

/* ── Typography / Copy ── */
export const COPY = {
  subtitle: "Echoes from the cosmic market",
  titleLine1: "Echoes of",
  titleLine2: "Djembeya",
  description:
    "Where the eggplant becomes a celestial artifact, orbiting through warm amber space between interlocking sacred circles. A devotional poster from a universe that worships produce.",
} as const;
