"use client";

/* ═══════════════════════════════════════════════
   Eggplant Color Palette — all CSS-filter variants
   applied to the base eggplant-logo-smooth.apng
   ═══════════════════════════════════════════════ */

import { useState } from "react";
import { cn } from "@/helpers/cn";

const SRC = "/logos/eggplant-logo-smooth.apng";

type VariantT = {
  id: string;
  label: string;
  filter: string;
  bg: string;
  origin?: string;
};

/* ── Existing treatments found across heroes ── */
const EXISTING: VariantT[] = [
  {
    id: "raw",
    label: "Raw / Untreated",
    filter: "none",
    bg: "#0c0a08",
    origin: "Sacred Ascension, Mission Briefing, Orbital Launch",
  },
  {
    id: "warm-gold-sepia",
    label: "Warm Gold Sepia",
    filter: "sepia(0.3) saturate(1.5) brightness(0.9)",
    bg: "#0c0a08",
    origin: "Echoes of Djembeya, Meridian Procession",
  },
  {
    id: "light-sepia",
    label: "Light Sepia",
    filter: "sepia(0.2) saturate(1.3)",
    bg: "#0a0808",
    origin: "Cosmic Cult Flyer",
  },
  {
    id: "rich-gold",
    label: "Rich Gold",
    filter: "sepia(0.4) saturate(1.8) brightness(0.85)",
    bg: "#080604",
    origin: "Reliquary d'Or",
  },
  {
    id: "bright-gold",
    label: "Bright Gold",
    filter: "sepia(0.3) saturate(1.6) brightness(1.1)",
    bg: "#0c0a08",
    origin: "Versailles Orbital, Glam Cosmic Billboard",
  },
  {
    id: "amber-sepia",
    label: "Amber Sepia",
    filter: "sepia(0.35) saturate(1.5)",
    bg: "#0a0806",
    origin: "Zodiac Astrolabe, Ritual Observatory",
  },
  {
    id: "chrome-silver",
    label: "Chrome Silver",
    filter:
      "sepia(1) saturate(0.5) drop-shadow(0 0 40px rgba(218,165,32,0.3))",
    bg: "#0c0a08",
    origin: "Metatron's Cube",
  },
  {
    id: "neon-green-glow",
    label: "Neon Green Glow",
    filter: "drop-shadow(0 0 8px rgba(16,255,170,0.3))",
    bg: "#020204",
    origin: "Akashic Terminal",
  },
  {
    id: "neon-double-glow",
    label: "Neon Double Glow",
    filter:
      "drop-shadow(0 0 30px rgba(16,255,170,0.3)) drop-shadow(0 0 60px rgba(217,70,239,0.15))",
    bg: "#020204",
    origin: "Void Liturgy",
  },
  {
    id: "gold-desat-glow",
    label: "Gold Desaturated + Glow",
    filter:
      "saturate(0.7) sepia(0.25) drop-shadow(0 0 32px rgba(218,165,32,0.3)) drop-shadow(0 0 64px rgba(217,70,239,0.1))",
    bg: "#08060a",
    origin: "Vesica Piscis Neon",
  },
  {
    id: "hue-magenta",
    label: "Hue-Rotated Magenta",
    filter: "hue-rotate(320deg) brightness(1.5)",
    bg: "#0a0410",
    origin: "Fractal Sermon (orbiting)",
  },
];

/* ── 20 new treatments matching the design spec palette ── */
const NEW: VariantT[] = [
  /* — Gold / Amber family (primary palette per spec) — */
  {
    id: "molten-amber",
    label: "Molten Amber",
    filter: "sepia(0.5) saturate(2.0) brightness(0.8) hue-rotate(-5deg)",
    bg: "#0a0804",
  },
  {
    id: "aged-poster",
    label: "Aged Poster",
    filter: "sepia(0.6) saturate(1.2) brightness(0.75) contrast(1.1)",
    bg: "#0c0a06",
  },
  {
    id: "ritual-gold",
    label: "Ritual Gold",
    filter:
      "sepia(0.45) saturate(2.2) brightness(0.95) drop-shadow(0 0 20px rgba(218,165,32,0.25))",
    bg: "#080604",
  },
  {
    id: "golden-hour",
    label: "Golden Hour",
    filter: "sepia(0.35) saturate(1.8) brightness(1.15) hue-rotate(-8deg)",
    bg: "#0c0806",
  },
  {
    id: "burnt-umber",
    label: "Burnt Umber",
    filter: "sepia(0.7) saturate(1.4) brightness(0.6) contrast(1.15)",
    bg: "#060402",
  },
  /* — Neon / Cosmic accent family — */
  {
    id: "cyan-signal",
    label: "Cyan Signal",
    filter:
      "hue-rotate(160deg) saturate(1.6) brightness(1.1) drop-shadow(0 0 16px rgba(0,229,255,0.3))",
    bg: "#020608",
  },
  {
    id: "fuchsia-devotion",
    label: "Fuchsia Devotion",
    filter:
      "hue-rotate(290deg) saturate(1.8) brightness(1.2) drop-shadow(0 0 20px rgba(217,70,239,0.35))",
    bg: "#0a0410",
  },
  {
    id: "neon-mint",
    label: "Neon Mint",
    filter:
      "hue-rotate(120deg) saturate(2.0) brightness(1.3) drop-shadow(0 0 12px rgba(16,255,170,0.4))",
    bg: "#020806",
  },
  {
    id: "ultraviolet",
    label: "Ultraviolet",
    filter:
      "hue-rotate(260deg) saturate(1.5) brightness(0.9) drop-shadow(0 0 24px rgba(139,92,246,0.3))",
    bg: "#06020c",
  },
  {
    id: "plasma-orange",
    label: "Plasma Orange",
    filter:
      "hue-rotate(15deg) saturate(2.2) brightness(1.1) drop-shadow(0 0 16px rgba(249,115,22,0.35))",
    bg: "#0a0604",
  },
  /* — Retro / Theatrical treatments — */
  {
    id: "chrome-relic",
    label: "Chrome Relic",
    filter: "saturate(0.3) brightness(1.4) contrast(1.3)",
    bg: "#0a0a0a",
  },
  {
    id: "holographic",
    label: "Holographic",
    filter:
      "contrast(1.2) saturate(1.8) brightness(1.1) drop-shadow(0 0 8px rgba(255,215,0,0.3)) drop-shadow(0 0 16px rgba(0,229,255,0.2)) drop-shadow(0 0 24px rgba(217,70,239,0.15))",
    bg: "#060408",
  },
  {
    id: "risograph-pink",
    label: "Risograph Pink",
    filter: "hue-rotate(330deg) saturate(2.5) brightness(1.0) contrast(1.2)",
    bg: "#0c060a",
  },
  {
    id: "scanline-ghost",
    label: "Scanline Ghost",
    filter: "saturate(0.5) brightness(0.7) contrast(1.4) sepia(0.15)",
    bg: "#060606",
  },
  /* — Sacred / Symbolic treatments — */
  {
    id: "eclipse-gold",
    label: "Eclipse Gold",
    filter:
      "sepia(0.5) saturate(2.5) brightness(0.7) drop-shadow(0 0 40px rgba(218,165,32,0.4)) drop-shadow(0 0 80px rgba(200,134,14,0.2))",
    bg: "#040302",
  },
  {
    id: "astral-blue",
    label: "Astral Blue",
    filter:
      "hue-rotate(200deg) saturate(1.3) brightness(1.05) drop-shadow(0 0 20px rgba(59,130,246,0.3))",
    bg: "#020408",
  },
  {
    id: "blood-moon",
    label: "Blood Moon",
    filter:
      "hue-rotate(350deg) saturate(2.0) brightness(0.8) drop-shadow(0 0 24px rgba(220,38,38,0.3))",
    bg: "#0a0204",
  },
  {
    id: "emerald-temple",
    label: "Emerald Temple",
    filter:
      "hue-rotate(90deg) saturate(1.6) brightness(1.0) drop-shadow(0 0 16px rgba(16,185,129,0.3))",
    bg: "#020804",
  },
  {
    id: "candy-supernova",
    label: "Candy Supernova",
    filter:
      "saturate(2.0) brightness(1.2) contrast(1.1) drop-shadow(0 0 12px rgba(251,113,133,0.3)) drop-shadow(0 0 24px rgba(250,204,21,0.2))",
    bg: "#08050a",
  },
];

const ALL_VARIANTS = [
  { group: "Existing (from heroes)", variants: EXISTING },
  { group: "New treatments", variants: NEW },
];

/* ═══════════════════════════════════════════════
   Backdrop Palette — gradient glows, overlays,
   and frosted-glass effects from heroes & sections
   ═══════════════════════════════════════════════ */

type BackdropVariantT = {
  id: string;
  label: string;
  /** Tailwind classes or inline style to preview the effect */
  className?: string;
  style?: React.CSSProperties;
  /** The copyable CSS value */
  css: string;
  origin?: string;
};

/* ── Radial glow backdrops ── */
const RADIAL_GLOWS: BackdropVariantT[] = [
  {
    id: "gold-glow",
    label: "Gold Glow",
    style: { background: "radial-gradient(circle, rgba(218,165,32,0.12) 0%, rgba(200,134,14,0.04) 40%, transparent 70%)" },
    css: "radial-gradient(circle, rgba(218,165,32,0.12) 0%, rgba(200,134,14,0.04) 40%, transparent 70%)",
    origin: "Golden Spiral, Sacred Mandala, Flower of Life",
  },
  {
    id: "bright-gold-glow",
    label: "Bright Gold Glow",
    style: { background: "radial-gradient(circle, rgba(255,215,0,0.15) 0%, rgba(218,165,32,0.08) 40%, transparent 70%)" },
    css: "radial-gradient(circle, rgba(255,215,0,0.15) 0%, rgba(218,165,32,0.08) 40%, transparent 70%)",
    origin: "Soleil Aubergine",
  },
  {
    id: "soft-gold-ellipse",
    label: "Soft Gold Ellipse",
    style: { background: "radial-gradient(ellipse, rgba(218,165,32,0.1) 0%, rgba(255,215,0,0.03) 40%, transparent 70%)" },
    css: "radial-gradient(ellipse, rgba(218,165,32,0.1) 0%, rgba(255,215,0,0.03) 40%, transparent 70%)",
    origin: "Reliquary d'Or",
  },
  {
    id: "eclipse-gold-glow",
    label: "Eclipse Gold",
    style: { background: "radial-gradient(circle, rgba(218,165,32,0.14) 0%, rgba(200,134,14,0.05) 40%, transparent 70%)" },
    css: "radial-gradient(circle, rgba(218,165,32,0.14) 0%, rgba(200,134,14,0.05) 40%, transparent 70%)",
    origin: "Hypercube Altar, Vesica Piscis",
  },
  {
    id: "warm-gold-ellipse",
    label: "Warm Gold Ellipse",
    style: { background: "radial-gradient(ellipse, rgba(218,165,32,0.12) 0%, rgba(240,192,64,0.06) 38%, transparent 74%)" },
    css: "radial-gradient(ellipse, rgba(218,165,32,0.12) 0%, rgba(240,192,64,0.06) 38%, transparent 74%)",
    origin: "Meridian Procession",
  },
  {
    id: "neon-green-glow",
    label: "Neon Green Glow",
    style: { background: "radial-gradient(circle, rgba(16,255,170,0.12), transparent 70%)" },
    css: "radial-gradient(circle, rgba(16,255,170,0.12), transparent 70%)",
    origin: "Orbital Launch",
  },
  {
    id: "neon-sacred-glow",
    label: "Neon Sacred Glow",
    style: { background: "radial-gradient(circle, rgba(16,255,170,0.1) 0%, rgba(57,255,20,0.04) 40%, transparent 70%)" },
    css: "radial-gradient(circle, rgba(16,255,170,0.1) 0%, rgba(57,255,20,0.04) 40%, transparent 70%)",
    origin: "Sacred Ascension",
  },
  {
    id: "magenta-portal-glow",
    label: "Magenta Portal Glow",
    style: { background: "radial-gradient(circle, rgba(217,70,239,0.15) 0%, rgba(16,255,170,0.06) 40%, transparent 70%)" },
    css: "radial-gradient(circle, rgba(217,70,239,0.15) 0%, rgba(16,255,170,0.06) 40%, transparent 70%)",
    origin: "Wormhole",
  },
  {
    id: "magenta-gold-blend",
    label: "Magenta + Gold Blend",
    style: { background: "radial-gradient(circle, rgba(217,70,239,0.1) 0%, rgba(218,165,32,0.06) 40%, transparent 70%)" },
    css: "radial-gradient(circle, rgba(217,70,239,0.1) 0%, rgba(218,165,32,0.06) 40%, transparent 70%)",
    origin: "Pentagram Rave",
  },
  {
    id: "cyan-gold-blend",
    label: "Cyan + Gold Blend",
    style: { background: "radial-gradient(circle, rgba(0,229,255,0.1) 0%, rgba(218,165,32,0.06) 40%, transparent 70%)" },
    css: "radial-gradient(circle, rgba(0,229,255,0.1) 0%, rgba(218,165,32,0.06) 40%, transparent 70%)",
    origin: "Hex Lattice Shrine",
  },
  {
    id: "gold-magenta-neon-triple",
    label: "Gold → Magenta → Neon",
    style: { background: "radial-gradient(circle, rgba(218,165,32,0.14) 0%, rgba(16,255,170,0.04) 35%, rgba(217,70,239,0.02) 55%, transparent 70%)" },
    css: "radial-gradient(circle, rgba(218,165,32,0.14) 0%, rgba(16,255,170,0.04) 35%, rgba(217,70,239,0.02) 55%, transparent 70%)",
    origin: "Hypercube Altar",
  },
  {
    id: "hot-pink-neon-gold-triple",
    label: "Pink → Neon → Gold",
    style: { background: "radial-gradient(circle, rgba(255,20,147,0.12) 0%, rgba(16,255,170,0.06) 30%, rgba(218,165,32,0.03) 50%, transparent 70%)" },
    css: "radial-gradient(circle, rgba(255,20,147,0.12) 0%, rgba(16,255,170,0.06) 30%, rgba(218,165,32,0.03) 50%, transparent 70%)",
    origin: "Supernova Farmers Market",
  },
  {
    id: "hot-pink-glow",
    label: "Hot Pink Glow",
    style: { background: "radial-gradient(circle, rgba(255,20,147,0.08) 0%, transparent 60%)" },
    css: "radial-gradient(circle, rgba(255,20,147,0.08) 0%, transparent 60%)",
    origin: "Fractal Sermon",
  },
  {
    id: "pale-cream-glow",
    label: "Pale Cream Glow",
    style: { background: "radial-gradient(circle, rgba(245,230,192,0.08) 0%, transparent 65%)" },
    css: "radial-gradient(circle, rgba(245,230,192,0.08) 0%, transparent 65%)",
    origin: "Rose Window, Meridian Procession",
  },
];

/* ── Linear gradient overlays (card/panel backgrounds) ── */
const LINEAR_OVERLAYS: BackdropVariantT[] = [
  {
    id: "dark-burgundy",
    label: "Dark Burgundy",
    style: { background: "linear-gradient(180deg, rgba(28,8,18,0.92), rgba(9,7,12,0.96))" },
    css: "linear-gradient(180deg, rgba(28,8,18,0.92), rgba(9,7,12,0.96))",
    origin: "Velvet Detonation",
  },
  {
    id: "deep-plum",
    label: "Deep Plum",
    style: { background: "linear-gradient(180deg, rgba(20,8,16,0.9), rgba(9,7,12,0.96))" },
    css: "linear-gradient(180deg, rgba(20,8,16,0.9), rgba(9,7,12,0.96))",
    origin: "Candy Supernova",
  },
  {
    id: "cool-dark",
    label: "Cool Dark",
    style: { background: "linear-gradient(180deg, rgba(6,10,11,0.9), rgba(8,6,12,0.94))" },
    css: "linear-gradient(180deg, rgba(6,10,11,0.9), rgba(8,6,12,0.94))",
    origin: "Aurora Nightclub",
  },
  {
    id: "diagonal-cool",
    label: "Diagonal Cool",
    style: { background: "linear-gradient(135deg, rgba(11,9,18,0.96), rgba(6,6,10,0.96))" },
    css: "linear-gradient(135deg, rgba(11,9,18,0.96), rgba(6,6,10,0.96))",
    origin: "Prism Transmission",
  },
  {
    id: "warm-brown",
    label: "Warm Brown",
    style: { background: "linear-gradient(180deg, rgba(18,12,8,0.96), rgba(8,6,5,0.98))" },
    css: "linear-gradient(180deg, rgba(18,12,8,0.96), rgba(8,6,5,0.98))",
    origin: "Processional Gate",
  },
  {
    id: "warm-earth",
    label: "Warm Earth",
    style: { background: "linear-gradient(180deg, rgba(10,8,6,0.9), rgba(8,6,4,0.96))" },
    css: "linear-gradient(180deg, rgba(10,8,6,0.9), rgba(8,6,4,0.96))",
    origin: "Neon Rift Garden v2",
  },
  {
    id: "frosted-plum-panel",
    label: "Frosted Plum Panel",
    style: { background: "linear-gradient(180deg, rgba(28,14,31,0.84), rgba(10,8,12,0.95))" },
    css: "linear-gradient(180deg, rgba(28,14,31,0.84), rgba(10,8,12,0.95))",
    origin: "Chrome Bubble Shrine",
  },
  {
    id: "orbital-cluster-panel",
    label: "Orbital Cluster Panel",
    style: { background: "linear-gradient(180deg, rgba(27,16,34,0.82), rgba(5,5,7,0.72))" },
    css: "linear-gradient(180deg, rgba(27,16,34,0.82), rgba(5,5,7,0.72))",
    origin: "Orbital Cluster Notes",
  },
];

/* ── Diffused ambient glows (wide-gradient replacements for blur) ── */
const AMBIENT_GLOWS: BackdropVariantT[] = [
  {
    id: "gold-diffused",
    label: "Gold Diffused",
    className: "rounded-full",
    style: { background: "radial-gradient(circle, rgba(218,165,32,0.05), transparent 70%)" },
    css: "rounded-full bg-[radial-gradient(circle,rgba(218,165,32,0.05),transparent_70%)]",
    origin: "Versailles Orbital, Zodiac Astrolabe",
  },
  {
    id: "bright-gold-diffused",
    label: "Bright Gold Diffused",
    className: "rounded-full",
    style: { background: "radial-gradient(circle, rgba(255,215,0,0.08), transparent 70%)" },
    css: "rounded-full bg-[radial-gradient(circle,rgba(255,215,0,0.08),transparent_70%)]",
    origin: "Versailles Orbital, Zodiac Astrolabe",
  },
  {
    id: "neon-magenta-diffused",
    label: "Neon + Magenta Diffused",
    style: { background: "radial-gradient(ellipse, rgba(16,255,170,0.06) 0%, rgba(217,70,239,0.04) 50%, transparent 80%)" },
    css: "radial-gradient(ellipse, rgba(16,255,170,0.06) 0%, rgba(217,70,239,0.04) 50%, transparent 80%)",
    origin: "Black Hole Canteen",
  },
  {
    id: "aurora-multi-diffused",
    label: "Aurora Multi-Glow",
    style: { background: "radial-gradient(circle at 18% 20%, rgba(34,197,94,0.16), transparent 28%), radial-gradient(circle at 52% 14%, rgba(56,189,248,0.12), transparent 26%), radial-gradient(circle at 82% 24%, rgba(251,113,133,0.14), transparent 28%), radial-gradient(circle at 58% 78%, rgba(217,70,239,0.16), transparent 34%)" },
    css: "multi radial-gradient(...) widened stops",
    origin: "Aurora Nightclub",
  },
  {
    id: "neon-rift-diffused",
    label: "Neon Rift",
    style: { background: "radial-gradient(circle at 22% 24%, rgba(16,255,170,0.12), transparent 26%), radial-gradient(circle at 72% 24%, rgba(217,70,239,0.14), transparent 28%), radial-gradient(circle at 56% 70%, rgba(59,130,246,0.1), transparent 30%)" },
    css: "multi radial-gradient(...) widened stops",
    origin: "Neon Rift Garden",
  },
  {
    id: "cosmic-cloud-diffused",
    label: "Cosmic Cloud",
    className: "rounded-full",
    style: { background: "radial-gradient(circle, rgba(217,70,239,0.12), rgba(59,130,246,0.06) 40%, transparent 75%)" },
    css: "radial-gradient(circle, rgba(217,70,239,0.12), rgba(59,130,246,0.06) 40%, transparent 75%)",
    origin: "Cosmic Aubergine",
  },
  {
    id: "shared-gold-orb",
    label: "Gold Orb",
    className: "rounded-full",
    style: { background: "radial-gradient(circle, rgba(250,204,21,0.12), transparent 80%)" },
    css: "radial-gradient(circle, rgba(250,204,21,0.12), transparent 80%)",
    origin: "Shared (hero-codex)",
  },
  {
    id: "shared-pink-orb",
    label: "Pink Orb",
    className: "rounded-full",
    style: { background: "radial-gradient(circle, rgba(251,113,133,0.12), transparent 82%)" },
    css: "radial-gradient(circle, rgba(251,113,133,0.12), transparent 82%)",
    origin: "Shared (hero-codex)",
  },
];

/* ── Opaque panels (high-opacity replacements for frosted glass) ── */
const OPAQUE_PANELS: BackdropVariantT[] = [
  {
    id: "panel-dark-65",
    label: "Dark Panel (65%)",
    className: "rounded-lg border border-white/6 bg-black/65",
    css: "bg-black/65",
    origin: "Void Portal Notes",
  },
  {
    id: "panel-dark-70",
    label: "Dark Panel (70%)",
    className: "rounded-xl border border-white/10 bg-black/70",
    css: "bg-black/70",
    origin: "Astral Rings Notes",
  },
  {
    id: "panel-dark-75",
    label: "Dark Panel (75%)",
    className: "rounded-xl border-2 border-white/10 bg-black/75",
    css: "bg-black/75",
    origin: "Neon Lounge Notes",
  },
  {
    id: "panel-gradient-plum",
    label: "Plum Gradient Panel",
    className: "rounded-[1.75rem] border border-white/10",
    style: { background: "linear-gradient(180deg, rgba(27,16,34,0.9), rgba(5,5,7,0.85))" },
    css: "bg-[linear-gradient(180deg,rgba(27,16,34,0.9),rgba(5,5,7,0.85))]",
    origin: "Orbital Cluster Notes",
  },
  {
    id: "panel-gradient-magenta",
    label: "Magenta Gradient Panel",
    className: "rounded-[1.5rem] border border-white/12",
    style: { background: "linear-gradient(180deg, rgba(217,70,239,0.18), rgba(59,130,246,0.07) 18%, rgba(255,255,255,0.04))" },
    css: "bg-[linear-gradient(180deg,rgba(217,70,239,0.18),...)]",
    origin: "Magnetic Cards Notes",
  },
  {
    id: "panel-nav",
    label: "Nav Bar Panel",
    className: "rounded-lg bg-[#0c0a08]/95",
    css: "bg-bgc/95",
    origin: "Theme Toggle (sticky nav)",
  },
  {
    id: "panel-bubble-glass",
    label: "Glass Bubble",
    className: "rounded-full border border-white/18 bg-white/8",
    css: "bg-white/8 border-white/18",
    origin: "Chrome Bubble Shrine",
  },
  {
    id: "panel-orb-glass",
    label: "Glass Orb",
    className: "rounded-full border border-white/10 bg-white/6",
    css: "bg-white/6 border-white/10",
    origin: "Candy Supernova, Blister Constellation",
  },
];

const ALL_BACKDROPS = [
  { group: "Radial glows", variants: RADIAL_GLOWS },
  { group: "Linear overlays", variants: LINEAR_OVERLAYS },
  { group: "Diffused ambient glows", variants: AMBIENT_GLOWS },
  { group: "Opaque panels", variants: OPAQUE_PANELS },
];

function BackdropCard({ variant }: { variant: BackdropVariantT }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(variant.css);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

  return (
    <button
      onClick={handleCopy}
      className="group flex flex-col items-center gap-3 rounded-xl border border-white/8 bg-[#060506] p-4 text-left transition-colors hover:border-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#daa520]"
    >
      <div className="relative grid h-28 w-full place-items-center overflow-hidden rounded-lg bg-[#0a0a0c]">
        <div
          className={cn("absolute inset-2", variant.className)}
          style={variant.style}
        />
      </div>
      <div className="w-full space-y-1">
        <p className="text-sm font-mono leading-tight text-white/90">
          {variant.label}
        </p>
        <p className="line-clamp-2 text-xs font-mono leading-snug text-white/40 break-all">
          {variant.css}
        </p>
        {variant.origin && (
          <p className="text-xs text-[#daa520]/50">{variant.origin}</p>
        )}
        {copied && (
          <p className="text-xs font-mono text-[#10ffaa]">Copied!</p>
        )}
      </div>
    </button>
  );
}

function EggplantCard({ variant }: { variant: VariantT }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(variant.filter);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

  return (
    <button
      onClick={handleCopy}
      className="group flex flex-col items-center gap-3 rounded-xl border border-white/8 p-4 text-left transition-colors hover:border-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#daa520]"
      style={{ backgroundColor: variant.bg }}
    >
      <div className="relative grid h-28 w-28 place-items-center">
        <img
          src={SRC}
          alt={variant.label}
          className="h-24 w-24 object-contain"
          style={{ filter: variant.filter }}
        />
      </div>
      <div className="w-full space-y-1">
        <p className="text-sm font-mono leading-tight text-white/90">
          {variant.label}
        </p>
        <p className="line-clamp-2 text-xs font-mono leading-snug text-white/40 break-all">
          {variant.filter === "none" ? "no filter" : variant.filter}
        </p>
        {variant.origin && (
          <p className="text-xs text-[#daa520]/50">{variant.origin}</p>
        )}
        {copied && (
          <p className="text-xs font-mono text-[#10ffaa]">Copied!</p>
        )}
      </div>
    </button>
  );
}

export default function EggplantPalettePage() {
  return (
    <div className="fest-container py-12">
      <h1 className="mb-2 font-mono text-3xl text-white uppercase md:text-5xl">
        Eggplant Palette
      </h1>
      <p className="mb-10 font-mono text-sm text-white/40">
        {EXISTING.length + NEW.length} CSS filter treatments — click to copy
        filter value
      </p>

      {ALL_VARIANTS.map((section) => (
        <section key={section.group} className="mb-12">
          <h2 className="mb-6 border-b border-white/10 pb-3 font-mono text-lg text-[#daa520]/60 uppercase">
            {section.group}{" "}
            <span className="text-white/30">({section.variants.length})</span>
          </h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {section.variants.map((v) => (
              <EggplantCard key={v.id} variant={v} />
            ))}
          </div>
        </section>
      ))}

      {/* ── Backdrop Palette ── */}
      <div className="mt-20 border-t border-white/10 pt-12">
        <h1 className="mb-2 font-mono text-3xl text-white uppercase md:text-5xl">
          Backdrop Palette
        </h1>
        <p className="mb-10 font-mono text-sm text-white/40">
          {ALL_BACKDROPS.reduce((sum, s) => sum + s.variants.length, 0)} backdrop
          effects from heroes &amp; sections — click to copy CSS value
        </p>

        {ALL_BACKDROPS.map((section) => (
          <section key={section.group} className="mb-12">
            <h2 className="mb-6 border-b border-white/10 pb-3 font-mono text-lg text-[#daa520]/60 uppercase">
              {section.group}{" "}
              <span className="text-white/30">
                ({section.variants.length})
              </span>
            </h2>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {section.variants.map((v) => (
                <BackdropCard key={v.id} variant={v} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
