"use client";

import { SimpleSection } from "@/components/home/sections/simple-section";
import { ProjectsSection } from "@/components/home/sections/projects-section";
import { FullSection } from "@/components/home/sections/full-section";
import { useLocalizedData } from "@/hooks/use-localized-data";
import { HeroSoleilAubergine } from "@/components/home/heroes/soleil-aubergine";
import { MetatronsCube } from "@/components/home/heroes/metatrons-cube";
import { HeroGlamCosmicBillboard } from "@/components/home/heroes/glam-cosmic-billboard";
import { HeroCosmicFlower } from "@/components/home/heroes/cosmic-flower";
import { HeroCosmicCultFlyer } from "@/components/test/hero-concepts/cosmic-cult-flyer";
import { HeroHexLatticeShrineGold } from "@/components/test/hero-concepts/hex-lattice-shrine/hero-hex-lattice-shrine-gold";
import type { ProjectsSectionT, FullSectionT, SimpleSectionT } from "@/types/home-page-types";
import { GritPulseOverlay } from "@/components/animations/grit-pulse-overlay";
import { AnimatedLettersMask } from "@/components/home/intro/animated-letters/animated-letters";

export default function HomePage() {
  const { introTxt = "", backgroundDesktop = "", backgroundMobile = "", sections } = useLocalizedData("home");

  const commercialWork = sections[0] as ProjectsSectionT;
  const freelanceWork = sections[1] as ProjectsSectionT;
  const about = sections[2] as FullSectionT;
  const values = sections[3] as FullSectionT;
  const howIWork = sections[4] as SimpleSectionT;

  return (
    <div className="bg-bgc text-primary pb-40">
      <GritPulseOverlay />
      {/* Fixed edge gradient masks — fade top/bottom to page bg */}
      <div className="to-bgc pointer-events-none fixed top-0 right-0 left-0 z-100 h-[15vh] bg-linear-to-t from-transparent" />
      <div className="to-bgc pointer-events-none fixed right-0 bottom-0 left-0 z-100 h-[15vh] bg-linear-to-b from-transparent" />

      <HeroSoleilAubergine />

      <AnimatedLettersMask text={introTxt} />

      <HeroCosmicCultFlyer />

      <ProjectsSection data={commercialWork} className="fest-container py-20 md:py-40" />

      <MetatronsCube theme="gold" />

      <ProjectsSection data={freelanceWork} className="fest-container py-20 md:py-40" />

      <HeroHexLatticeShrineGold />

      <FullSection data={about} className="fest-container py-20 md:py-40" />

      <HeroGlamCosmicBillboard />

      <FullSection data={values} className="fest-container py-20 md:py-40" />

      {/* <SimpleSection
        id={howIWork.id}
        titleLine={howIWork.titleLine}
        text={howIWork.text}
        paragraphs={howIWork.paragraphs}
        buttons={howIWork.buttons}
        className="fest-container py-20 md:py-60"
        aside={<EggplantImage sizeClass="size-[24rem] md:size-[30rem] xl:size-[36rem]" glowPreset="fuchsia" />}
      /> */}

      <HeroCosmicFlower />

      {/* <GetInTouchButton /> */}

      {/* Spacing before footer */}
    </div>
  );
}
