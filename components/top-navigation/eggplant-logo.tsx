"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { usePrefersReducedMotion } from "@/hooks/use-media-query";
import { useTranslation } from "@/lib/i18n/hooks/use-translation";
import Link from "next/link";
import { GlowWrapper } from "../general/glow-wrapper";

const SOURCES = [
  { src: "/logos/eggplant-logo.png", label: "png (rembg)" }, // not transparent
  { src: "/logos/eggplant-logo-nobg.apng", label: "apng (colorkey)" },
  { src: "/logos/eggplant-logo-smooth.apng", label: "apng (smooth 4.1s)" },
  { src: "/logos/eggplant-logo-slow.apng", label: "apng (slow 6.8s)" },
  { src: "/logos/eggplant-logo-long.apng", label: "apng (long 10.7s)" },
] as const;

// Change this index to swap the logo source
const ACTIVE_SOURCE = 2;

export function EggplantLogo({ className }: { className?: string }) {
  const logoRef = useRef<HTMLImageElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  const { t } = useTranslation("nav");

  useGSAP(() => {
    if (!logoRef.current || prefersReducedMotion) return;

    gsap.to(logoRef.current, {
      y: -16,
      duration: 1.8,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
    });
  }, [prefersReducedMotion]);

  return (
    <Link
      href="/"
      className={
        "-ml-3 rounded-md py-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      }
      onClick={(e) => {
        if (window.location.pathname === "/") {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }}
    >
      <Image
        ref={logoRef}
        src={SOURCES[ACTIVE_SOURCE].src}
        alt={t("logo")}
        width={80}
        height={80}
        sizes="(min-width: 1024px) 80px, (min-width: 640px) 60px, 40px"
        className="size-10 sm:size-15 lg:size-20"
        quality={100}
        priority
        // unoptimized
      />
    </Link>
  );
}
