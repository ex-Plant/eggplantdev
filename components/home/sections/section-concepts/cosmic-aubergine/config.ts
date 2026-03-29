/* ═══════════════════════════════════════════════
   Cosmic Aubergine — Hero Configuration
   ═══════════════════════════════════════════════ */

/* ── Nebula clouds ── */
export function buildNebulaClouds() {
  return [
    { position: "left-[10%] top-[20%]", size: "h-[70%] w-[50%]", gradient: "radial-gradient(ellipse,rgba(218,165,32,0.12),transparent_75%)" },
    { position: "right-[5%] top-[10%]", size: "h-[60%] w-[45%]", gradient: "radial-gradient(ellipse,rgba(200,134,14,0.06),transparent_75%)" },
    { position: "bottom-[10%] left-[30%]", size: "h-[50%] w-[55%]", gradient: "radial-gradient(ellipse,rgba(240,192,64,0.06),transparent_75%)" },
  ];
}

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
