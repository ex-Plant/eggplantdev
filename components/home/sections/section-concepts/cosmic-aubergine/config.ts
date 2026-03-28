/* ═══════════════════════════════════════════════
   Cosmic Aubergine — Hero Configuration
   ═══════════════════════════════════════════════ */

/* ── Palette ── */
export type CosmicPaletteT = {
  accent1: string;
  accent2: string;
  nebulaA: string;
  nebulaB: string;
  nebulaC: string;
  bgColor: string;
  eggplantPreset: "natural" | "cosmic-gold";
};

export const PALETTE: CosmicPaletteT = {
  accent1: "#10ffaa",
  accent2: "#d946ef",
  nebulaA: "rgba(89,20,162,0.15)",
  nebulaB: "rgba(16,255,170,0.06)",
  nebulaC: "rgba(217,70,239,0.08)",
  bgColor: "#030108",
  eggplantPreset: "natural",
} as const;

export const PALETTE_GOLD: CosmicPaletteT = {
  accent1: "#daa520",
  accent2: "#f0c040",
  nebulaA: "rgba(218,165,32,0.12)",
  nebulaB: "rgba(200,134,14,0.06)",
  nebulaC: "rgba(240,192,64,0.06)",
  bgColor: "#0c0a08",
  eggplantPreset: "cosmic-gold",
} as const;

/* ── Nebula clouds ── */
export function buildNebulaClouds(p: CosmicPaletteT) {
  return [
    { position: "left-[10%] top-[20%]", size: "h-[70%] w-[50%]", gradient: `radial-gradient(ellipse,${p.nebulaA},transparent_75%)` },
    { position: "right-[5%] top-[10%]", size: "h-[60%] w-[45%]", gradient: `radial-gradient(ellipse,${p.nebulaB},transparent_75%)` },
    { position: "bottom-[10%] left-[30%]", size: "h-[50%] w-[55%]", gradient: `radial-gradient(ellipse,${p.nebulaC},transparent_75%)` },
  ];
}

export const NEBULA_CLOUDS = buildNebulaClouds(PALETTE);

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
