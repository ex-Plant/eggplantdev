/* ═══════════════════════════════════════════════
   Cosmic Flower — Hero Configuration
   ═══════════════════════════════════════════════ */

/* ── Nebula clouds ── */
export const NEBULA_CLOUDS = [
  { position: "left-[10%] top-[20%]", size: "h-[70%] w-[50%]", gradient: "radial-gradient(ellipse,rgba(218,165,32,0.12),transparent_75%)" },
  { position: "right-[5%] top-[10%]", size: "h-[60%] w-[45%]", gradient: "radial-gradient(ellipse,rgba(200,134,14,0.06),transparent_75%)" },
  { position: "bottom-[10%] left-[30%]", size: "h-[50%] w-[55%]", gradient: "radial-gradient(ellipse,rgba(240,192,64,0.06),transparent_75%)" },
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

/* ── Intersection points (where circle arcs cross each other) ── */
/* Delay order is shuffled so bursts appear random, not sequential around the ring */
export const INTERSECTION_POINTS: readonly { pos: readonly [number, number]; delay: number }[] = [
  /* Inner ring */
  { pos: [210, 140], delay: 0 },      // top
  { pos: [270, 175], delay: 17.5 },   // top-right
  { pos: [270, 245], delay: 7 },      // bottom-right
  { pos: [210, 280], delay: 24.5 },   // bottom
  { pos: [150, 245], delay: 10.5 },   // bottom-left
  { pos: [150, 175], delay: 31.5 },   // top-left
  /* Outer ring */
  { pos: [271, 105], delay: 21 },     // between top & top-right
  { pos: [331, 210], delay: 3.5 },    // between top-right & bottom-right
  { pos: [271, 315], delay: 28 },     // between bottom-right & bottom
  { pos: [149, 315], delay: 14 },     // between bottom & bottom-left
  { pos: [89, 210], delay: 35 },      // between bottom-left & top-left
  { pos: [149, 105], delay: 38.5 },   // between top-left & top
] as const;

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
