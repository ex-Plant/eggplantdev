"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import { EggplantImage, type EggplantPresetT } from "@/components/general/eggplant-image";

export function EggplantLogo({
  className,
  link = true,
}: {
  className?: string;
  link?: boolean;
  preset?: EggplantPresetT;
}) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Fade-in is logo-specific, not part of EggplantImage
  useGSAP(() => {
    if (!wrapperRef.current) return;

    gsap.to(wrapperRef.current, {
      opacity: 1,
      duration: 0.6,
      ease: "power2.out",
    });
  }, []);

  const eggplantLogo = (
    <div ref={wrapperRef} className="opacity-0">
      <EggplantImage
        sizeClass="size-10 sm:size-20 lg:size-32"
        sizes="(min-width: 1024px) 126px, (min-width: 640px) 120px, 60px"
        className={className}
        preset={"silver"}
        priority
      />
    </div>
  );

  if (!link) return eggplantLogo;

  return (
    <Link
      href="/"
      className="pointer-events-auto -ml-3 rounded-md py-5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
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
}
