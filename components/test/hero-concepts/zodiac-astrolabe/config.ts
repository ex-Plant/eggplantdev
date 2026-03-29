/* ═══════════════════════════════════════════════
   Zodiac Astrolabe — Hero Configuration
   ═══════════════════════════════════════════════ */

/* ── Palette ── */
export const PALETTE = {
  gold: "#daa520",
  darkGold: "#c8860e",
  softGold: "#f0c040",
  starBase: "#f5f0e0",
  bgColor: "#0c0a08",
} as const;

/* ── Zodiac signs ── */
export const ZODIAC_SIGNS = ["\u2648", "\u2649", "\u264A", "\u264B", "\u264C", "\u264D", "\u264E", "\u264F", "\u2650", "\u2651", "\u2652", "\u2653"];

/* ── SVG shared ── */
export const SVG_CENTER = { x: 600, y: 400 } as const;

/* ── Star field ── */
export const STAR_COUNT = 55;

/* ── Graduated rings ── */
export const RING_RADII = [90, 150, 220, 300] as const;

/* ── Cardinal degree marks ── */
export const CARDINAL_DEGREES = [0, 90, 180, 270] as const;

/* ── Celestial bodies ── */
export const SATURN = { cx: 870, cy: 200, r: 7, ringRx: 14, ringRy: 4 } as const;
export const ECLIPSE = { cx1: 330, cy: 600, cx2: 336, r: 9 } as const;
export const CRESCENT_PATH = "M 200 350 A 8 8 0 1 1 200 366 A 6 6 0 1 0 200 350";

/* ── Eggplant ── */
export const EGGPLANT = {
  src: "/logos/eggplant-logo-smooth.apng",
  filter: "sepia(0.35) saturate(1.5)",
} as const;

/* ── Typography ── */
export const COPY = {
  eyebrow: "Celestial navigation since the first harvest",
  titleLine1: "Zodiac",
  titleLine2: "Astrolabe",
  description:
    "The eggplant charts its course through all twelve houses of the cosmos, reading the angles of forgotten stars and calibrating its passage by golden light alone.",
} as const;
