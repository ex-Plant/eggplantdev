/* Agent: Claude — Grid of Life */

"use client";

import EggplantRadialWrapper from "@/components/animations/eggplant-radial-wrapper/eggplant-radial-wrapper";
import { StarField } from "@/components/animations/star-field/star-field";
import { GridOfLifeGeometry } from "./grid-of-life-geometry";
import { GridOfLifeGlow } from "./grid-of-life-glow";
import { GridOfLifeHeroContent } from "./grid-of-life-hero-content";
import { RadialGlow } from "@/components/animations/radial-glow/radial-glow";
import type { HeroCopyKeyT } from "@/data/hero-copy";

const STARS = Array.from({ length: 45 }, (_, i) => ({
  x: `${(i * 29 + 5) % 100}%`,
  y: `${(i * 41 + 17) % 100}%`,
  size: i % 6 === 0 ? 3 : i % 3 === 0 ? 2 : 1,
  opacity: 0.05 + (i % 5) * 0.03,
  color: i % 4 === 0 ? "var(--color-gold)" : "var(--color-cream)",
}));

export function GridOfLife({ copyKey }: { copyKey?: HeroCopyKeyT }) {
  return (
    <EggplantRadialWrapper>
      <StarField stars={STARS} />
      <GridOfLifeGeometry />
      <GridOfLifeGlow />
      <RadialGlow />
      <GridOfLifeHeroContent copyKey={copyKey} />
    </EggplantRadialWrapper>
  );
}
