"use client";

/* ═══════════════════════════════════════════════
   Eggplant Color Palette — all CSS-filter variants
   applied to the base eggplant-logo-smooth.apng
   ═══════════════════════════════════════════════ */

import { useState } from "react";

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
    </div>
  );
}
