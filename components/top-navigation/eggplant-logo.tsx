"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { usePrefersReducedMotion } from "@/hooks/use-media-query";
import { useTranslation } from "@/lib/i18n/hooks/use-translation";
import Link from "next/link";
import { truncate } from "fs";

const SOURCES = [
  { src: "/logos/eggplant-logo.png", label: "png (rembg)" }, // not transparent
  { src: "/logos/eggplant-logo-nobg.apng", label: "apng (colorkey)" },
  { src: "/logos/eggplant-logo-smooth.apng", label: "apng (smooth 4.1s)" },
  { src: "/logos/eggplant-logo-slow.apng", label: "apng (slow 6.8s)" },
  { src: "/logos/eggplant-logo-long.apng", label: "apng (long 10.7s)" },
] as const;

// Change this index to swap the logo source
const ACTIVE_SOURCE = 2;

export function EggplantLogo({ className, link = true }: { className?: string; link?: boolean }) {
  const logoRef = useRef<HTMLImageElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  const { t } = useTranslation("nav");

  useGSAP(() => {
    if (!logoRef.current) return;

    // Always fade in, even with reduced motion
    gsap.to(logoRef.current, {
      opacity: 1,
      duration: 0.6,
      ease: "power2.out",
    });

    if (prefersReducedMotion) return;

    gsap.to(logoRef.current, {
      y: -16,
      duration: 1.8,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
    });
  }, [prefersReducedMotion]);

  const eggplantLogo = (
    <Image
      ref={logoRef}
      src={SOURCES[ACTIVE_SOURCE].src}
      alt={t("logo")}
      width={160}
      height={160}
      sizes="(min-width: 1024px) 126px, (min-width: 640px) 120px, 60px"
      className="size-10 opacity-0 sm:size-20 lg:size-32"
      quality={100}
      priority
      // unoptimized
    />
  );

  const linkComponent = (
    <Link
      href="/"
      className={
        "pointer-events-auto -ml-3 rounded-md py-5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      }
      onClick={(e) => {
        if (window.location.pathname === "/") {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }}
    >
      {eggplantLogo}
    </Link>
  );

  if (link) return linkComponent;

  return eggplantLogo;
}
