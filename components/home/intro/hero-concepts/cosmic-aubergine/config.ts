/* ═══════════════════════════════════════════════
   Cosmic Aubergine — Hero Configuration
   ═══════════════════════════════════════════════ */

/* ── Palette ── */
export const PALETTE = {
  neonGreen: "#10ffaa",
  purple: "#d946ef",
  deepPurple: "rgba(89,20,162,0.15)",
  softPurple: "rgba(217,70,239,0.08)",
  bgColor: "#030108",
} as const;

/* ── Nebula clouds ── */
export const NEBULA_CLOUDS = [
  { position: "left-[10%] top-[20%]", size: "h-[60%] w-[40%]", gradient: `radial-gradient(ellipse,${PALETTE.deepPurple},transparent_60%)` },
  { position: "right-[5%] top-[10%]", size: "h-[50%] w-[35%]", gradient: "radial-gradient(ellipse,rgba(16,255,170,0.06),transparent_60%)" },
  { position: "bottom-[10%] left-[30%]", size: "h-[40%] w-[45%]", gradient: `radial-gradient(ellipse,${PALETTE.softPurple},transparent_60%)` },
] as const;

/* ── Flower of life circles (right side geometry) ── */
export const FLOWER_CIRCLES: readonly (readonly [number, number])[] = [
  [210, 210], [210, 140], [210, 280],
  [270, 175], [150, 175], [270, 245], [150, 245],
] as const;

/* ── Geometry SVG ── */
export const GEOMETRY = {
  outerRing: { cx: 210, cy: 210, r: 190 },
  triangleUp: "210,50 370,330 50,330",
  triangleDown: "210,370 370,90 50,90",
} as const;

/* ── Eggplant treatment ── */
export const EGGPLANT = {
  src: "/logos/eggplant-logo-smooth.apng",
} as const;

/* ── Typography / Copy ── */
export const COPY = {
  subtitle: "Mission Control",
  titleLine1: "Eggplant",
  titleLine2: "in",
  titleLine3: "Space",
  description:
    "One aubergine's journey through the cosmos of frontend development, sacred geometry, and questionable deployment decisions.",
  buttons: ["Launch Sequence", "Abort Mission"],
} as const;
