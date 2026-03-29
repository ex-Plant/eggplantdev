/* ═══════════════════════════════════════════════
   Ancient Transmission — Hero Configuration
   ═══════════════════════════════════════════════ */

/* ── Palette ── */
export const PALETTE = {
  mint: "#10ffaa",
  magenta: "#d946ef",
  lime: "#39ff14",
  bgColor: "#020204",
  tabletBg: "#060808",
} as const;

/* ── Transmission lines ── */
export const TRANSMISSION_LINES = [
  { glyph: "🍆→☁️→🚀→✨", text: "The Aubergine ascends through the cloud layer into orbit" },
  { glyph: "△▽◇○◎", text: "Sacred forms contain the deployment pipeline" },
  { glyph: "λ→fn→()⇒{}", text: "The functions are pure. The side effects, divine" },
  { glyph: "∞ ÷ 0 = 🍆", text: "Infinity divided by nothing yields eggplant" },
] as const;

/* ── SVG geometry (right side artifact) ── */
export const ARTIFACT_SVG = {
  viewBox: "0 0 400 400",
  center: { x: 200, y: 200 },
  circles: [
    { r: 180, color: "#10ffaa" },
    { r: 120, color: "#d946ef" },
    { r: 60, color: "#39ff14" },
  ],
  lineCount: 6,
  lineLength: 180,
} as const;

/* ── Eggplant treatment ── */
export const EGGPLANT = {
  src: "/logos/eggplant-logo-smooth.apng",
} as const;

/* ── Typography ── */
export const COPY = {
  eyebrow: "Recovered Transmission // Epoch Unknown",
  titleLine1: "Ancient",
  titleLine2: "Transmission",
  description:
    "Archaeologists found this in a lost Kubernetes cluster. The inscriptions suggest a civilization that worshipped a single vegetable. They had excellent uptime.",
} as const;
