"use client";

/* Metatron's Cube Mono with scroll-triggered background animation */

import { useScrollBg } from "@/hooks/use-scroll-bg";
import { HeroMetatronsCubeMono as MetatronMono } from "./metatrons-cube/hero-metatrons-cube";

export function HeroMetatronsCubeMonoScroll() {
  const { sectionRef } = useScrollBg({ color: "#0c0a08" });

  return (
    <div ref={sectionRef}>
      <MetatronMono />
    </div>
  );
}
