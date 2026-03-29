/* ═══════════════════════════════════════════════
   Sacred Mandala — Hero Configuration
   ═══════════════════════════════════════════════ */

/* ── Palette ── */
export const PALETTE = {
  gold: "#daa520",
  starBase: "#f5f0e0",
} as const;

export const STROKES = ["#daa520", "#c8860e", "#f0c040"] as const;

/* ── Geometry ── */
export const CX = 600;
export const CY = 400;
export const RADII = [90, 140, 195, 250, 310] as const;
export const PETAL_ANGLES = [0, 45, 90, 135, 180, 225, 270, 315] as const;

/* ── Stars ── */
export const STARS = Array.from({ length: 55 }, (_, i) => ({
  x: `${(i * 19 + 3) % 100}%`,
  y: `${(i * 29 + 11) % 100}%`,
  size: i % 3 === 0 ? 3 : i % 2 === 0 ? 2 : 1,
  opacity: 0.12 + (i % 5) * 0.1,
  color: i % 4 === 0 ? PALETTE.gold : PALETTE.starBase,
}));

/* ── Art deco corner frames ── */
export const CORNER_PATHS = [
  "M 40,40 L 40,120 M 40,40 L 120,40",
  "M 1160,40 L 1160,120 M 1160,40 L 1080,40",
  "M 40,760 L 40,680 M 40,760 L 120,760",
  "M 1160,760 L 1160,680 M 1160,760 L 1080,760",
] as const;

/* ── Diamond accent positions (cardinal only) ── */
export const DIAMOND_ANGLES = [0, 90, 180, 270] as const;

/* ── Eggplant ── */
export const EGGPLANT_SRC = "/logos/eggplant-logo-smooth.apng" as const;

/* ── Typography ── */
export const COPY = {
  eyebrow: "Meditate upon the cosmic vegetable",
  titleLine1: "Sacred",
  titleLine2: "Mandala",
  description:
    "The eggplant radiates outward through infinite rings of devotion \u2014 each petal a prayer, each circle a cosmos unto itself",
} as const;
