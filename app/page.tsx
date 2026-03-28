"use client";

import { SimpleSection } from "@/components/home/sections/simple-section";
import { ProjectsSection } from "@/components/home/sections/projects-section";
import { FullSection } from "@/components/home/sections/full-section";
import { GetInTouchButton } from "@/components/home/intro/get-in-touch-btn/get-in-touch-button";
import { useLocalizedData } from "@/hooks/use-localized-data";
import { Intro } from "../components/home/intro/intro";
import { HeroMetatronsCubeMonoScroll } from "../components/home/intro/hero-concepts/hero-metatrons-cube-scroll";
import { HeroSoleilAubergine } from "../components/home/intro/hero-concepts/soleil-aubergine";
import type { ProjectsSectionT, FullSectionT, SimpleSectionT } from "@/types/home-page-types";

export default function HomePage() {
  const { introTxt = "", backgroundDesktop, backgroundMobile, sections } = useLocalizedData("home");

  const commercialWork = sections[0] as ProjectsSectionT;
  const freelanceWork = sections[1] as ProjectsSectionT;
  const about = sections[2] as FullSectionT;
  const values = sections[3] as FullSectionT;
  const howIWork = sections[4] as SimpleSectionT;

  return (
    <div className="relative mx-auto w-full">
      <HeroSoleilAubergine />

      <Intro txt={introTxt} backgroundDesktop={backgroundDesktop} backgroundMobile={backgroundMobile} />

      {/* Commercial Work */}
      <ProjectsSection data={commercialWork} className="fest-container py-20 md:py-40" />

      <HeroSoleilAubergine />

      {/* Freelance Work */}
      <ProjectsSection data={freelanceWork} className="fest-container py-20 md:py-40" />

      {/* About Me */}
      <FullSection data={about} className="fest-container py-20 md:py-40" />

      {/* What I Value */}
      <FullSection data={values} className="fest-container py-20 md:py-40" />

      {/* How I Work */}
      <SimpleSection
        id={howIWork.id}
        titleLine={howIWork.titleLine}
        text={howIWork.text}
        paragraphs={howIWork.paragraphs}
        buttons={howIWork.buttons}
        className="fest-container py-20 md:py-60"
      />

      <GetInTouchButton />
      <HeroMetatronsCubeMonoScroll />
    </div>
  );
}
