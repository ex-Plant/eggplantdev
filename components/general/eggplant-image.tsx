"use client";

import { CSSProperties, useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useYoyo } from "@/hooks/use-yoyo";
import { useZeroGravity, type ZeroGravityModeT } from "@/hooks/use-zero-gravity";
import { cn } from "@/helpers/cn";

const STATIC_SRC = "/logos/eggplant-logo.png"; // 131 KB — instant placeholder
// --- Swap animated source below for testing ---
const ANIMATED_DESKTOP_SRC = "/logos/eggplant-logo-smooth.webp"; // 1.9 MB, 480×480, 68 frames (WebP)
// const ANIMATED_DESKTOP_SRC = "/logos/eggplant-logo-smooth.apng"; // 8.5 MB, 480×480, 68 frames (APNG original)
const ANIMATED_MOBILE_SRC = "/logos/eggplant-logo-smooth-mobile.webp"; // 533 KB, 240×240, 68 frames (WebP)
// const ANIMATED_MOBILE_SRC = "/logos/eggplant-logo-smooth-mobile.apng"; // 3.0 MB, 240×240, 68 frames (APNG)
const MOBILE_BREAKPOINT = 768;

export const EGGPLANT_PRESETS = {
  natural: undefined,
  silver: "saturate(0) brightness(1.4) contrast(1.2) drop-shadow(0 0 40px rgba(192,192,192,0.25))",
  "silver-subtle": "saturate(0) brightness(1.2) contrast(1.1) drop-shadow(0 0 30px rgba(204,204,204,0.15))",
  "warm-gold-sepia": "sepia(0.3) saturate(1.5) brightness(0.9)",
  "warm-gold-glow": "sepia(0.3) saturate(1.5) brightness(0.9) drop-shadow(0 0 40px rgba(218,165,32,0.3))",
  "rich-gold": "sepia(0.4) saturate(1.8) brightness(0.85)",
  "bright-gold": "sepia(0.3) saturate(1.6) brightness(1.1)",
  "soft-gold": "sepia(0.25) saturate(1.4) brightness(0.95)",
  "amber-sepia": "sepia(0.3) saturate(1.4)",
  "glam-gold": "sepia(0.15) saturate(1.6) brightness(1.05)",
  "cathedrale-gold": "sepia(0.3) saturate(1.6) brightness(0.9) hue-rotate(-10deg)",
  "soleil-gold":
    "sepia(0.3) saturate(1.6) hue-rotate(-10deg) brightness(1.15) drop-shadow(0 0 40px rgba(255,215,0,0.4))",
  "chrome-silver": "sepia(1) saturate(0.5) drop-shadow(0 0 40px rgba(218,165,32,0.3))",
  "ritual-gold": "sepia(0.45) saturate(2.2) brightness(0.95) drop-shadow(0 0 20px rgba(218,165,32,0.25))",
  "eclipse-gold":
    "sepia(0.5) saturate(2.5) brightness(0.7) drop-shadow(0 0 40px rgba(218,165,32,0.4)) drop-shadow(0 0 80px rgba(200,134,14,0.2))",
  "chrome-relic": "saturate(0.3) brightness(1.4) contrast(1.3)",
  "gold-desat-glow": "saturate(0.5) sepia(1) drop-shadow(0 0 40px rgba(218,165,32,0.3))",
  "cyan-glow": "saturate(0.7) sepia(0.2) drop-shadow(0 0 30px rgba(0,229,255,0.25))",
  "sepia-hue15": "sepia(1) saturate(0.5) hue-rotate(15deg) drop-shadow(0 0 50px rgba(218,165,32,0.35))",
  "cosmic-gold": "saturate(0.15) brightness(1.4) contrast(0.9)",
  "golden-metallic":
    "sepia(1) saturate(3) hue-rotate(5deg) brightness(1.15) contrast(1.1) drop-shadow(0 0 40px rgba(218,165,32,0.3))",
} as const;

export type EggplantPresetT = keyof typeof EGGPLANT_PRESETS;

export const GLOW_PRESETS = {
  gold: {
    gradient: "radial-gradient(circle, rgba(255,215,0,0.15) 0%, rgba(218,165,32,0.08) 40%, transparent 70%)",
    size: "400px",
  },
  "gold-soft": {
    gradient: "radial-gradient(circle, rgba(240,192,64,0.08) 0%, transparent 60%)",
    size: "calc(100% + 8rem)",
  },
  "gold-wide": {
    gradient: "radial-gradient(circle, rgba(218,165,32,0.12) 0%, rgba(240,192,64,0.05) 40%, transparent 70%)",
    size: "500px",
  },
  "gold-ellipse": {
    gradient: "radial-gradient(ellipse, rgba(218,165,32,0.1) 0%, rgba(255,215,0,0.03) 40%, transparent 70%)",
    size: "420px",
  },
  "gold-subtle": { gradient: "radial-gradient(ellipse, rgba(240,192,64,0.06) 0%, transparent 70%)", size: "300px" },
  "gold-cathedral": { gradient: "radial-gradient(ellipse, rgba(218,165,32,0.07) 0%, transparent 65%)", size: "500px" },
  "gold-pink": {
    gradient: "radial-gradient(circle, rgba(218,165,32,0.1) 0%, rgba(255,20,147,0.04) 50%, transparent 70%)",
    size: "350px",
  },
  fuchsia: {
    gradient:
      "radial-gradient(circle, oklch(from var(--color-glow-fuchsia) l c h / 18%) 0%, oklch(from var(--color-glow-fuchsia) l c h / 8%) 30%, transparent 60%)",
    size: "100%",
  },
} as const;

export type GlowPresetT = keyof typeof GLOW_PRESETS;

type GlowT = {
  /** Size of the glow div (default: "400px") */
  size?: string;
  /** CSS radial-gradient string */
  gradient: string;
};

type EggplantImagePropsT = {
  /** Explicit image source — bypasses the lazy static→animated swap */
  src?: string;
  /** Alt text (default: "Eggplant") */
  alt?: string;
  /** Tailwind size classes (default: "h-52 w-52") */
  sizeClass?: string;
  /** Additional classes on the img element */
  className?: string;
  /** Named filter preset — overridden by explicit `filter` prop */
  preset?: EggplantPresetT;
  /** CSS filter string — overrides preset if provided */
  filter?: string;
  /** Inline style overrides on the img element */
  style?: CSSProperties;
  /** Enable yoyo float animation (default: true) */
  float?: boolean;
  /** Yoyo vertical offset in px */
  floatY?: number;
  /** Yoyo duration in seconds */
  floatDuration?: number;
  /** Zero-gravity animation mode — replaces yoyo when set */
  floatMode?: ZeroGravityModeT;
  /** Intensity multiplier for zero-gravity mode (default: 1) */
  floatIntensity?: number;
  /** Named glow preset — overridden by explicit `glow` prop */
  glowPreset?: GlowPresetT;
  /** Radial gradient glow behind the eggplant — overrides glowPreset */
  glow?: GlowT;
  /** next/image priority flag */
  priority?: boolean;
};

/** Preloads the animated WebP in the background after the page is idle,
 *  then swaps it in once fully downloaded. Non-blocking — won't compete
 *  with critical resources like fonts, CSS, or above-the-fold images.
 *  Picks a smaller file for mobile viewports. */
function useAnimatedSrc() {
  const [src, setSrc] = useState(STATIC_SRC);

  const preload = useCallback(() => {
    const isMobile = window.innerWidth < MOBILE_BREAKPOINT;
    const animatedUrl = isMobile ? ANIMATED_MOBILE_SRC : ANIMATED_DESKTOP_SRC;
    const img = new window.Image();
    img.onload = () => setSrc(animatedUrl);
    img.src = animatedUrl;
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const w = window as Window & {
      requestIdleCallback?: (cb: () => void) => number;
      cancelIdleCallback?: (id: number) => void;
    };

    if (w.requestIdleCallback) {
      const id = w.requestIdleCallback(preload);
      return () => w.cancelIdleCallback?.(id);
    }

    // Safari fallback — requestIdleCallback not supported
    const id = setTimeout(preload, 200);
    return () => clearTimeout(id);
  }, [preload]);

  return src;
}

export function EggplantImage({
  src,
  alt = "Eggplant",
  sizeClass = "h-52 w-52",
  className,
  preset,
  filter,
  style,
  float = true,
  floatY,
  floatDuration,
  floatMode,
  floatIntensity,
  glowPreset,
  glow,
  priority,
}: EggplantImagePropsT) {
  const imgRef = useRef<HTMLImageElement>(null);

  // Always call the hook (rules of hooks), but ignore its result when src is explicit.
  const animatedSrc = useAnimatedSrc();
  const resolvedSrc = src ?? animatedSrc;

  const useBasicFloat = float && !floatMode;
  const useZeroG = float && !!floatMode;
  useYoyo({ y: floatY, duration: floatDuration, disabled: !useBasicFloat, ref: imgRef });
  useZeroGravity({ mode: floatMode, intensity: floatIntensity, disabled: !useZeroG, ref: imgRef });

  const resolvedFilter = filter ?? (preset ? EGGPLANT_PRESETS[preset] : undefined);
  const resolvedGlow = glow ?? (glowPreset ? GLOW_PRESETS[glowPreset] : undefined);
  const imgStyle: CSSProperties = {
    ...style,
    ...(resolvedFilter ? { filter: resolvedFilter } : {}),
  };

  return (
    <div className="relative">
      {resolvedGlow && (
        <div
          className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            width: resolvedGlow.size ?? "400px",
            height: resolvedGlow.size ?? "400px",
            background: resolvedGlow.gradient,
          }}
        />
      )}
      {/* `unoptimized` is intentional — the source is an animated APNG (68 frames).
         Next.js image optimization strips animation, producing a static PNG.
         See docs/eggplant-image-optimization-plan.md for size reduction strategies. */}
      <Image
        ref={imgRef}
        src={resolvedSrc}
        alt={"Eggplant image"}
        width={160}
        height={160}
        unoptimized
        priority={priority}
        className={cn("relative object-contain", sizeClass, className)}
        style={Object.keys(imgStyle).length > 0 ? imgStyle : undefined}
      />
    </div>
  );
}
