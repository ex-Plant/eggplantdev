"use client";

import { CSSProperties, useRef } from "react";
import Image from "next/image";
import { useYoyo } from "@/hooks/use-yoyo";
import { cn } from "@/helpers/cn";

const DEFAULT_SRC = "/logos/eggplant-logo-smooth.apng";

export const EGGPLANT_PRESETS = {
  natural: undefined,
  silver: "saturate(0) brightness(1.4) contrast(1.2) drop-shadow(0 0 40px rgba(192,192,192,0.25))",
  "warm-gold-sepia": "sepia(0.3) saturate(1.5) brightness(0.9)",
  "rich-gold": "sepia(0.4) saturate(1.8) brightness(0.85)",
  "bright-gold": "sepia(0.3) saturate(1.6) brightness(1.1)",
  "light-sepia": "sepia(0.2) saturate(1.3)",
  "soft-gold": "sepia(0.25) saturate(1.4) brightness(0.95)",
  "amber-sepia": "sepia(0.3) saturate(1.4)",
  "glam-gold": "sepia(0.15) saturate(1.6) brightness(1.05)",
  "cathedrale-gold": "sepia(0.3) saturate(1.6) brightness(0.9) hue-rotate(-10deg)",
  "soleil-gold": "sepia(0.3) saturate(1.6) hue-rotate(-10deg) brightness(1.15)",
  "chrome-silver": "sepia(1) saturate(0.5) drop-shadow(0 0 40px rgba(218,165,32,0.3))",
  "ritual-gold": "sepia(0.45) saturate(2.2) brightness(0.95) drop-shadow(0 0 20px rgba(218,165,32,0.25))",
  "eclipse-gold": "sepia(0.5) saturate(2.5) brightness(0.7) drop-shadow(0 0 40px rgba(218,165,32,0.4)) drop-shadow(0 0 80px rgba(200,134,14,0.2))",
  "chrome-relic": "saturate(0.3) brightness(1.4) contrast(1.3)",
  "gold-desat-glow": "saturate(0.5) sepia(1) drop-shadow(0 0 40px rgba(218,165,32,0.3))",
  "cyan-glow": "saturate(0.7) sepia(0.2) drop-shadow(0 0 30px rgba(0,229,255,0.25))",
  "sepia-hue15": "sepia(1) saturate(0.5) hue-rotate(15deg) drop-shadow(0 0 50px rgba(218,165,32,0.35))",
} as const;

export type EggplantPresetT = keyof typeof EGGPLANT_PRESETS;

type GlowT = {
  /** Size of the glow div (default: "400px") */
  size?: string;
  /** CSS radial-gradient string */
  gradient: string;
};

type EggplantImagePropsT = {
  /** Image source (default: smooth apng) */
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
  /** Enable yoyo float animation (default: false) */
  float?: boolean;
  /** Yoyo vertical offset in px */
  floatY?: number;
  /** Yoyo duration in seconds */
  floatDuration?: number;
  /** Radial gradient glow behind the eggplant */
  glow?: GlowT;
  /** next/image priority flag */
  priority?: boolean;
  /** next/image quality (default: 100) */
  quality?: number;
  /** next/image sizes attribute */
  sizes?: string;
};

export function EggplantImage({
  src = DEFAULT_SRC,
  alt = "Eggplant",
  sizeClass = "h-52 w-52",
  className,
  preset,
  filter,
  style,
  float = false,
  floatY,
  floatDuration,
  glow,
  priority,
  quality = 100,
  sizes,
}: EggplantImagePropsT) {
  const imgRef = useRef<HTMLImageElement>(null);

  useYoyo({ y: floatY, duration: floatDuration, disabled: !float, ref: imgRef });

  const resolvedFilter = filter ?? (preset ? EGGPLANT_PRESETS[preset] : undefined);
  const imgStyle: CSSProperties = {
    ...style,
    ...(resolvedFilter ? { filter: resolvedFilter } : {}),
  };

  return (
    <div className="relative">
      {glow && (
        <div
          className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            width: glow.size ?? "400px",
            height: glow.size ?? "400px",
            background: glow.gradient,
          }}
        />
      )}
      <Image
        ref={imgRef}
        src={src}
        alt={"Eggplan image"}
        width={160}
        height={160}
        quality={quality}
        priority={priority}
        sizes={sizes}
        className={cn("relative object-contain", sizeClass, className)}
        style={Object.keys(imgStyle).length > 0 ? imgStyle : undefined}
      />
    </div>
  );
}
