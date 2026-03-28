/* Agent: Claude — Soleil Aubergine */

"use client";

import EggplantRadialWrapper from "@/components/animations/eggplant-radial-wrapper";
import { EggplantImage } from "@/components/general/eggplant-image";
import {
  PALETTE,
  PALETTE_MUTED,
  RAYS,
  ZIGZAG_POINTS,
  CORNERS,
  COPY,
  SVG_CENTER,
  SVG_VIEWBOX,
  buildStars,
  buildCoronaRings,
} from "./config";

const PALETTES = { default: PALETTE, muted: PALETTE_MUTED } as const;
type VariantT = keyof typeof PALETTES;

export function HeroSoleilAubergine({ variant = "muted" }: { variant?: VariantT } = {}) {
  const palette = PALETTES[variant];
  const stars = buildStars(palette);
  const coronaRings = buildCoronaRings(palette);

  return (
    <EggplantRadialWrapper>
      <div className="py-20">
        <div className="relative flex min-h-screen items-center justify-center">
          {/* Star field */}
          {stars.map((s, i) => (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                left: s.x,
                top: s.y,
                width: s.size,
                height: s.size,
                backgroundColor: s.color,
                opacity: s.opacity,
              }}
            />
          ))}
          {/* Sacred geometry */}
          <svg
            className="pointer-events-none absolute inset-0 h-full w-full"
            viewBox={SVG_VIEWBOX}
            preserveAspectRatio="xMidYMid slice"
          >
            {/* Concentric solar corona rings */}
            {coronaRings.map((ring) => (
              <circle
                key={ring.r}
                cx={SVG_CENTER.x}
                cy={SVG_CENTER.y}
                r={ring.r}
                fill="none"
                stroke={ring.stroke}
                strokeWidth={ring.strokeWidth}
                opacity={ring.opacity}
              />
            ))}

            {/* Zigzag decorative band */}
            <polyline points={ZIGZAG_POINTS} fill="none" stroke={palette.darkGold} strokeWidth="0.6" opacity="0.12" />

            {/* Radiating sun rays */}
            {RAYS.map((r, i) => (
              <g key={i}>
                <line
                  x1={SVG_CENTER.x}
                  y1={SVG_CENTER.y}
                  x2={r.x2}
                  y2={r.y2}
                  stroke={palette.gold}
                  strokeWidth={r.width}
                  opacity={r.opacity}
                />
                {r.hasDot && (
                  <circle
                    cx={r.dotX}
                    cy={r.dotY}
                    r="3"
                    fill="none"
                    stroke={palette.softGold}
                    strokeWidth="0.8"
                    opacity="0.2"
                  />
                )}
              </g>
            ))}

            {/* Art deco corner brackets */}
            {CORNERS.map((corner, i) => (
              <g key={i}>
                <path d={corner.primary} fill="none" stroke={palette.darkGold} strokeWidth="1.2" opacity="0.15" />
                <path d={corner.secondary} fill="none" stroke={palette.gold} strokeWidth="0.5" opacity="0.1" />
              </g>
            ))}
          </svg>
          {/* Central content */}
          <div className="relative z-10 flex flex-col items-center gap-6 text-center">
            {/* Eggplant with golden sun glow */}
            <EggplantImage float preset="soleil-gold" glowPreset="gold" />

            {/* Typography */}
            <p className="font-mono text-xs tracking-[0.5em] uppercase" style={{ color: `${palette.gold}59` }}>
              {COPY.subtitle}
            </p>
            <h1
              className="text-48 md:text-72 font-mono leading-none tracking-wider uppercase"
              style={{ color: palette.gold }}
            >
              {COPY.titleLine1}
              <br />
              {COPY.titleLine2}
            </h1>
            <p className="max-w-md font-mono text-sm leading-relaxed" style={{ color: `${palette.warmCaption}73` }}>
              {COPY.description}
            </p>
          </div>
        </div>
      </div>
    </EggplantRadialWrapper>
  );
}
