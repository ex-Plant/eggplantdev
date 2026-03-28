"use client";

/**
 * Test page: shared ScrollBackdrop prototype
 * Uses SoleilAubergineContent (no wrapper) + plain content sections.
 */

import { SimpleSection } from "@/components/home/sections/simple-section";
import { ProjectsSection } from "@/components/home/sections/projects-section";
import { FullSection } from "@/components/home/sections/full-section";
import { GetInTouchButton } from "@/components/home/intro/get-in-touch-btn/get-in-touch-button";
import { useLocalizedData } from "@/hooks/use-localized-data";
import { ScrollBackdropProvider, ScrollScene } from "@/components/animations/scroll-backdrop";
import { SoleilAubergineContent } from "@/components/home/intro/hero-concepts/soleil-aubergine/hero-soleil-aubergine";
import { PALETTE as SOLEIL_PALETTE } from "@/components/home/intro/hero-concepts/soleil-aubergine/config";
import { FadeSlide } from "@/components/general/animations-wrappers/fade-slide";
import { AnimatedLettersMask } from "@/components/home/intro/animated-letters/animated-letters";
import type { ProjectsSectionT, FullSectionT, SimpleSectionT } from "@/types/home-page-types";

export default function BackdropTestPage() {
  const { introTxt = "", sections } = useLocalizedData("home");

  const commercialWork = sections[0] as ProjectsSectionT;
  const freelanceWork = sections[1] as ProjectsSectionT;
  const about = sections[2] as FullSectionT;
  const values = sections[3] as FullSectionT;
  const howIWork = sections[4] as SimpleSectionT;

  return (
    <ScrollBackdropProvider>

      {/* ── Scene 1: Soleil Aubergine hero — golden dark ── */}
      <ScrollScene
        config={{ color: SOLEIL_PALETTE.bgColor }}
        className="min-h-screen"
      >
        <SoleilAubergineContent />
      </ScrollScene>

      {/* ── Scene 2: Intro text with animated letters ── */}
      <ScrollScene config={{}}>
        <div className="fest-container relative flex flex-col">
          <FadeSlide>
            <AnimatedLettersMask text={introTxt} />
          </FadeSlide>
        </div>
      </ScrollScene>

      {/* ── Scene 3: Commercial Work ── */}
      <ScrollScene config={{}}>
        <ProjectsSection data={commercialWork} className="fest-container py-20 md:py-40" />
      </ScrollScene>

      {/* ── Scene 4: Freelance Work ── */}
      <ScrollScene config={{}}>
        <ProjectsSection data={freelanceWork} className="fest-container py-20 md:py-40" />
      </ScrollScene>

      {/* ── Scene 5: About ── */}
      <ScrollScene config={{}}>
        <FullSection data={about} className="fest-container py-20 md:py-40" />
      </ScrollScene>

      {/* ── Scene 6: Values ── */}
      <ScrollScene config={{}}>
        <FullSection data={values} className="fest-container py-20 md:py-40" />
      </ScrollScene>

      {/* ── Scene 7: How I Work ── */}
      <ScrollScene config={{}}>
        <SimpleSection
          id={howIWork.id}
          titleLine={howIWork.titleLine}
          text={howIWork.text}
          paragraphs={howIWork.paragraphs}
          buttons={howIWork.buttons}
          className="fest-container py-20 md:py-60"
        />
      </ScrollScene>

      <GetInTouchButton />
    </ScrollBackdropProvider>
  );
}
