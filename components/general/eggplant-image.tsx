"use client";

import { CSSProperties, useRef } from "react";
import Image from "next/image";
import { useYoyo } from "@/hooks/use-yoyo";
import { cn } from "@/helpers/cn";

const DEFAULT_SRC = "/logos/eggplant-logo-smooth.apng";

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
  /** CSS filter string (sepia, saturate, hue-rotate, drop-shadow, etc.) */
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

  const imgStyle: CSSProperties = {
    ...style,
    ...(filter ? { filter } : {}),
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
