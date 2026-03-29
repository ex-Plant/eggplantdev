/* ═══════════════════════════════════════════════
   Mission Briefing — Hero Configuration
   ═══════════════════════════════════════════════ */

/* ── Palette ── */
export const PALETTE = {
  neonGreen: "#10ffaa",
  limeGreen: "#39ff14",
  greenAccent: "#00e676",
  yellow: "#f7c744",
  red: "#ff7575",
  purple: "#d946ef",
  bgColor: "#020204",
} as const;

/* ── Hex grid ── */
export const HEX_GRID = {
  rows: 10,
  cols: 12,
  cellWidth: 65,
  cellHeight: 56,
  hexRadius: 28,
} as const;

/* ── Mission data ── */
export const MISSION_DATA = [
  { label: "Coordinates", value: "52.23\u00b0N, 19.91\u00b0E" },
  { label: "Altitude", value: "\u221e (in orbit)" },
  { label: "Fuel", value: "Coffee & TypeScript" },
  { label: "ETA", value: "After the next refactor" },
] as const;

/* ── Hexagon geometry radii ── */
export const HEX_RADII = [80, 110, 140] as const;

/* ── System status items ── */
export const SYSTEM_STATUS = [
  { status: "active", label: "Sacred Geometry Engine", color: PALETTE.neonGreen },
  { status: "active", label: "Void Containment Field", color: PALETTE.limeGreen },
  { status: "warning", label: "Deploy Pipeline", color: PALETTE.yellow },
  { status: "active", label: "Cosmic Ray Shield", color: PALETTE.greenAccent },
  { status: "error", label: "Common Sense Module", color: PALETTE.red },
] as const;

/* ── Eggplant treatment ── */
export const EGGPLANT = {
  src: "/logos/eggplant-logo-smooth.apng",
} as const;

/* ── Typography / Copy ── */
export const COPY = {
  header: "Mission Briefing",
  titleLine1: "Eggplant",
  titleLine2: "Zero",
  description:
    "Codename: AUBERGINE. Classification: Absurd. Status: Perpetually deploying.",
} as const;
