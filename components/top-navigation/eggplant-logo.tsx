"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { usePrefersReducedMotion } from "@/hooks/use-media-query";
import { useTranslation } from "@/lib/i18n/hooks/use-translation";

const BLEND_MODES = ["mix-blend-normal", "mix-blend-difference"] as const;

const SOURCES = [
  { src: "/logos/eggplant-logo.png", label: "png (rembg)" }, // not transparent
  { src: "/logos/eggplant-logo-nobg.apng", label: "apng (colorkey)" },
  { src: "/logos/eggplant-logo-smooth.apng", label: "apng (smooth 4.1s)" },
  { src: "/logos/eggplant-logo-slow.apng", label: "apng (slow 6.8s)" },
  { src: "/logos/eggplant-logo-long.apng", label: "apng (long 10.7s)" },
] as const;

// Change this index to swap the logo source
const ACTIVE_SOURCE = 2;
const ACTIVE_BLEND_MODE = 0;

export function EggplantLogo() {
  const logoRef = useRef<HTMLImageElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  const { t } = useTranslation("nav");

  useGSAP(() => {
    if (!logoRef.current || prefersReducedMotion) return;

    gsap.to(logoRef.current, {
      y: -20,
      duration: 1.8,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
    });
  }, [prefersReducedMotion]);

  return (
    <nav
      aria-label={t("homeNavigation")}
      className={`pointer-events-none fixed top-0 right-0 left-0 z-99999 ${BLEND_MODES[ACTIVE_BLEND_MODE]}`}
    >
      <div className="fest-container pointer-events-auto flex w-full justify-end py-8">
        <Link href="/" className="flex min-h-11 min-w-11 items-center justify-center">
          <Image
            ref={logoRef}
            src={SOURCES[ACTIVE_SOURCE].src}
            alt={t("logo")}
            width={80}
            height={80}
            sizes="(min-width: 1024px) 80px, (min-width: 640px) 60px, 40px"
            className="size-10 sm:size-15 lg:size-20"
            unoptimized
          />
        </Link>
      </div>
    </nav>
  );
}
