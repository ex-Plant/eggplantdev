/* Agent: Claude — Soleil Aubergine */

"use client";

import EggplantRadialWrapper from "@/components/animations/eggplant-radial-wrapper";
import { EggplantImage } from "@/components/general/eggplant-image";
import { HeroDescription } from "@/components/home/intro/hero-concepts/hero-description";
import { HeroTitle } from "@/components/home/intro/hero-concepts/hero-title";
import styles from "./soleil-aubergine.module.css";
import {
  STARS,
  RAYS,
  RAY_PULSE_TRAVEL,
  ZIGZAG_POINTS,
  CORNERS,
  COPY,
  SVG_CENTER,
  SVG_VIEWBOX,
  CORONA_RINGS,
} from "./config";

type VariantT = "default" | "muted";

export function HeroSoleilAubergine({ variant = "muted" }: { variant?: VariantT } = {}) {
  /* For "default" variant, override --color-gold to the bright value */
  const variantStyle = variant === "default" ? { "--color-gold": "var(--color-gold-bright)" } as React.CSSProperties : undefined;

  return (
    <EggplantRadialWrapper>
      <div className="py-20" style={variantStyle}>
        <div className="relative flex min-h-screen items-center justify-center">
          {/* Star field */}
          {STARS.map((s, i) => (
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
            {CORONA_RINGS.map((ring) => (
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
            <polyline points={ZIGZAG_POINTS} fill="none" stroke="var(--color-gold-dark)" strokeWidth="0.6" opacity="0.12" />

            {/* Radiating sun rays */}
            {RAYS.map((r, i) => (
              <g key={i}>
                <line
                  x1={SVG_CENTER.x}
                  y1={SVG_CENTER.y}
                  x2={r.x2}
                  y2={r.y2}
                  stroke="var(--color-gold)"
                  strokeWidth={r.width}
                  opacity={r.opacity}
                />
                {r.hasDot && (
                  <circle
                    cx={r.dotX}
                    cy={r.dotY}
                    r="3"
                    fill="none"
                    stroke="var(--color-gold-warm)"
                    strokeWidth="0.8"
                    opacity="0.2"
                  />
                )}
              </g>
            ))}

            {/* Art deco corner brackets */}
            {CORNERS.map((corner, i) => (
              <g key={i}>
                <path d={corner.primary} fill="none" stroke="var(--color-gold-dark)" strokeWidth="1.2" opacity="0.15" />
                <path d={corner.secondary} fill="none" stroke="var(--color-gold)" strokeWidth="0.5" opacity="0.1" />
              </g>
            ))}
          </svg>
          {/* Pulsating glow dots — HTML radial gradients traveling along long rays */}
          {RAYS.filter((r) => r.hasDot).map((r, i) => (
            <div
              key={`pulse-${i}`}
              className={`pointer-events-none absolute ${styles.glowDot}`}
              style={{
                /* Position at center of the container */
                left: "50%",
                top: "50%",
                /* Glow orb size — controls the visible radial gradient radius */
                width: "6rem",
                height: "6rem",
                marginLeft: "-3rem",
                marginTop: "-3rem",
                borderRadius: "50%",
                background: `radial-gradient(circle, color-mix(in srgb, var(--color-gold) 25%, transparent) 0%, color-mix(in srgb, var(--color-gold-dark) 10%, transparent) 30%, transparent 70%)`,
                ["--ray-angle" as string]: `${r.angleDeg}deg`,
                /* Travel distance in viewport-relative units (long ray = 340 SVG units ≈ 28vw) */
                ["--ray-travel" as string]: RAY_PULSE_TRAVEL,
              }}
            />
          ))}

          {/* Central pulsing glow — breathes when dots depart */}
          <div
            className={`pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full ${styles.centerPulse}`}
            style={{
              width: "5rem",
              height: "5rem",
              background: `radial-gradient(circle, color-mix(in srgb, var(--color-gold) 20%, transparent) 0%, color-mix(in srgb, var(--color-gold-dark) 8%, transparent) 40%, transparent 70%)`,
            }}
          />

          {/* Central content */}
          <div className="relative z-10 flex flex-col items-center gap-6 text-center">
            {/* Eggplant with golden sun glow */}
            <EggplantImage
              floatMode="tumble"
              // floatMode="orbital"
              // floatMode="jelly"
              float
              preset="warm-gold-glow"
              glowPreset="gold"
            />

            {/* Typography */}
            <p className="font-mono text-xs tracking-[0.5em] uppercase text-gold/35">
              {COPY.subtitle}
            </p>
            <HeroTitle
              line1={COPY.titleLine1}
              line2={COPY.titleLine2}
              className="pt-1 tracking-tight"
            />
            <HeroDescription>{COPY.description}</HeroDescription>
          </div>
        </div>
      </div>
    </EggplantRadialWrapper>
  );
}
