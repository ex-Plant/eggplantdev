"use client";

/* Backdrop test — hero interstitials between content sections */

import { SimpleSection } from "@/components/home/sections/simple-section";
import { ProjectsSection } from "@/components/home/sections/projects-section";
import { FullSection } from "@/components/home/sections/full-section";
import { GetInTouchButton } from "@/components/home/intro/get-in-touch-btn/get-in-touch-button";
import { useLocalizedData } from "@/hooks/use-localized-data";
import { HeroSoleilAubergine } from "@/components/home/intro/hero-concepts/soleil-aubergine";
import { Intro } from "@/components/home/intro/intro";
import { MetatronsCubeCore } from "@/components/home/intro/hero-concepts/metatrons-cube/hero-metatrons-cube";
import { SacredAscensionGoldContent } from "@/components/home/intro/hero-concepts/sacred-ascension/hero-sacred-ascension-gold";
import { GlamCosmicBillboardContent } from "@/components/home/intro/hero-concepts/glam-cosmic-billboard";
import { ReliquaryDorContent } from "@/components/home/intro/hero-concepts/reliquary-dor";
import { CosmicAubergineContent } from "@/components/home/sections/section-concepts/cosmic-aubergine";
import { PALETTE_GOLD } from "@/components/home/sections/section-concepts/cosmic-aubergine/config";
import type { ProjectsSectionT, FullSectionT, SimpleSectionT } from "@/types/home-page-types";

export default function BackdropTestPage() {
  const { introTxt = "", sections } = useLocalizedData("home");

  const commercialWork = sections[0] as ProjectsSectionT;
  const freelanceWork = sections[1] as ProjectsSectionT;
  const about = sections[2] as FullSectionT;
  const values = sections[3] as FullSectionT;
  const howIWork = sections[4] as SimpleSectionT;

  return (
    <div className="bg-bgc text-white">
      {/* Fixed edge gradient masks — fade top/bottom to page bg */}
      <div className="to-bgc pointer-events-none fixed top-0 right-0 left-0 z-100 h-[15vh] bg-linear-to-t from-transparent" />
      <div className="to-bgc pointer-events-none fixed right-0 bottom-0 left-0 z-100 h-[15vh] bg-linear-to-b from-transparent" />

      <HeroSoleilAubergine variant="muted" />

      <Intro backgroundDesktop="" backgroundMobile="" txt={introTxt} />

      <MetatronsCubeCore theme="silver" />

      <ProjectsSection data={commercialWork} className="fest-container py-20 md:py-40" />

      <MetatronsCubeCore theme="gold" />

      <ProjectsSection data={freelanceWork} className="fest-container py-20 md:py-40" />

      <SacredAscensionGoldContent />

      <FullSection data={about} className="fest-container py-20 md:py-40" />

      <GlamCosmicBillboardContent />

      <FullSection data={values} className="fest-container py-20 md:py-40" />

      <ReliquaryDorContent />

      {/* ── Eggplant in Space (gold) ── */}
      <CosmicAubergineContent palette={PALETTE_GOLD} />

      {/* ── How I Work ── */}
      <SimpleSection
        id={howIWork.id}
        titleLine={howIWork.titleLine}
        text={howIWork.text}
        paragraphs={howIWork.paragraphs}
        buttons={howIWork.buttons}
        className="fest-container py-20 md:py-60"
      />

      <GetInTouchButton />
    </div>
  );
}
