/* ═══════════════════════════════════════════════
   Cosmic Cult Flyer — Hero Configuration
   ═══════════════════════════════════════════════ */

/* ── Palette ── */
export const PALETTE = {
  gold: "#daa520",
  softGold: "#f0c040",
  darkGold: "#c8860e",
  cream: "#f5e6c0",
  warmCaption: "#c8b080",
  bgColor: "#0a0806",
} as const;

/* ── SVG shared ── */
export const SVG_CENTER = { x: 600, y: 400 } as const;

/* ── Sunburst rays ── */
export const RAY_COUNT = 36;
export const RAYS = Array.from({ length: RAY_COUNT }, (_, i) => {
  const a = (Math.PI * 2 * i) / RAY_COUNT;
  return {
    x2: SVG_CENTER.x + 500 * Math.cos(a),
    y2: SVG_CENTER.y + 500 * Math.sin(a),
    stroke: i % 2 === 0 ? PALETTE.gold : PALETTE.darkGold,
    strokeWidth: i % 6 === 0 ? 1.5 : 0.5,
    opacity: i % 6 === 0 ? 0.08 : 0.03,
  };
});

/* ── Ritual diagram rings ── */
export const RITUAL_RINGS = [
  { r: 80, strokeWidth: 2.5, opacity: 0.2, color: PALETTE.gold, dasharray: undefined },
  { r: 120, strokeWidth: 1, opacity: 0.1, color: PALETTE.softGold, dasharray: "6 4" },
  { r: 180, strokeWidth: 1.5, opacity: 0.12, color: PALETTE.gold, dasharray: undefined },
  { r: 250, strokeWidth: 0.8, opacity: 0.06, color: PALETTE.darkGold, dasharray: "3 8" },
  { r: 320, strokeWidth: 0.5, opacity: 0.04, color: PALETTE.gold, dasharray: undefined },
] as const;

/* ── Inscription marks on middle ring ── */
export const INSCRIPTION_COUNT = 12;
export const INSCRIPTION_RING_R = 180;
export const INSCRIPTIONS = Array.from({ length: INSCRIPTION_COUNT }, (_, i) => {
  const a = (Math.PI * 2 * i) / INSCRIPTION_COUNT;
  return {
    x1: SVG_CENTER.x + (INSCRIPTION_RING_R - 8) * Math.cos(a),
    y1: SVG_CENTER.y + (INSCRIPTION_RING_R - 8) * Math.sin(a),
    x2: SVG_CENTER.x + (INSCRIPTION_RING_R + 8) * Math.cos(a),
    y2: SVG_CENTER.y + (INSCRIPTION_RING_R + 8) * Math.sin(a),
    hasDot: i % 3 === 0,
    dotCx: SVG_CENTER.x + (INSCRIPTION_RING_R + 20) * Math.cos(a),
    dotCy: SVG_CENTER.y + (INSCRIPTION_RING_R + 20) * Math.sin(a),
  };
});

/* ── Hexagram points ── */
export const HEXAGRAMS = {
  outer: "600,340 652,370 652,430 600,460 548,430 548,370",
  inner: "600,350 642,375 642,425 600,450 558,425 558,375",
} as const;

/* ── Art deco border ── */
export const BORDERS = {
  outer: { x: 30, y: 30, width: 1140, height: 740, opacity: 0.08 },
  inner: { x: 45, y: 45, width: 1110, height: 710, opacity: 0.05 },
} as const;

/* ── Grain overlay SVG data URI ── */
export const GRAIN_BG_IMAGE = "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")";

/* ── Eggplant treatment ── */
export const EGGPLANT = {
  src: "/logos/eggplant-logo-smooth.apng",
  filter: "sepia(0.2) saturate(1.3)",
} as const;

/* ── Typography / Copy ── */
export const COPY = {
  subtitle: "\u27e1 The Sacred Order of the Aubergine \u27e1",
  titleLine1: "Cosmic",
  titleLine2: "Cult",
  titleLine3: "Flyer",
  description:
    "You have been chosen. The eggplant sees all. Bring your offerings of TypeScript and deploy with devotion. Meetings are held at every sprint retrospective.",
  buttons: [
    { label: "Join the Order", borderColor: `${PALETTE.gold}/25`, textColor: `${PALETTE.gold}/50` },
    { label: "Read the Scrolls", borderColor: `${PALETTE.darkGold}/20`, textColor: `${PALETTE.darkGold}/40` },
  ],
} as const;
