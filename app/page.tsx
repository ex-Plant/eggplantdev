"use client";

// TODO: Add a loading state that hides the entire page until all components
// and animations are ready. Show a blank/loading screen, then reveal everything
// at once so the user never sees partially loaded content or janky animation starts.

import { SimpleSection } from "@/components/home/sections/simple-section";
import { ProjectsSection } from "@/components/home/sections/projects-section";
import { FullSection } from "@/components/home/sections/full-section";
import { GetInTouchButton } from "@/components/home/intro/get-in-touch-btn/get-in-touch-button";
import { useLocalizedData } from "@/hooks/use-localized-data";
import { HeroSoleilAubergine } from "@/components/home/intro/hero-concepts/soleil-aubergine";
import { MetatronsCubeCore } from "@/components/home/intro/hero-concepts/metatrons-cube/hero-metatrons-cube";
import { HeroGlamCosmicBillboard } from "@/components/home/intro/hero-concepts/glam-cosmic-billboard";
import { EggplantImage } from "@/components/general/eggplant-image";
import { CosmicAubergineContent } from "@/components/home/sections/section-concepts/cosmic-aubergine";
import { PALETTE_GOLD } from "@/components/home/sections/section-concepts/cosmic-aubergine/config";
import type { ProjectsSectionT, FullSectionT, SimpleSectionT } from "@/types/home-page-types";
import { AnimatedLettersMask } from "@/components/home/intro/animated-letters/animated-letters";
import { GritPulseOverlay } from "@/components/animations/grit-pulse-overlay";

export default function HomePage() {
  const { introTxt = "", sections } = useLocalizedData("home");

  const commercialWork = sections[0] as ProjectsSectionT;
  const freelanceWork = sections[1] as ProjectsSectionT;
  const about = sections[2] as FullSectionT;
  const values = sections[3] as FullSectionT;
  const howIWork = sections[4] as SimpleSectionT;

  return (
    <div className="bg-bgc text-white">
      <GritPulseOverlay />
      {/* Fixed edge gradient masks — fade top/bottom to page bg */}
      <div className="to-bgc pointer-events-none fixed top-0 right-0 left-0 z-100 h-[15vh] bg-linear-to-t from-transparent" />
      <div className="to-bgc pointer-events-none fixed right-0 bottom-0 left-0 z-100 h-[15vh] bg-linear-to-b from-transparent" />

      <HeroSoleilAubergine variant="muted" />

      <AnimatedLettersMask text={introTxt} />

      <ProjectsSection data={commercialWork} className="fest-container py-20 md:py-40" />

      <MetatronsCubeCore theme="gold" />

      <ProjectsSection data={freelanceWork} className="fest-container py-20 md:py-40" />

      <FullSection data={about} className="fest-container py-20 md:py-40" />

      <HeroGlamCosmicBillboard />

      <FullSection data={values} className="fest-container py-20 md:py-40" />

      <CosmicAubergineContent palette={PALETTE_GOLD} />

      <SimpleSection
        id={howIWork.id}
        titleLine={howIWork.titleLine}
        text={howIWork.text}
        paragraphs={howIWork.paragraphs}
        buttons={howIWork.buttons}
        className="fest-container py-20 md:py-60"
        aside={
          <EggplantImage
            sizeClass="h-[24rem] w-[24rem] md:h-[30rem] md:w-[30rem] xl:h-[36rem] xl:w-[36rem]"
            className="rotate-[18deg]"
            float
            glow={{
              gradient: "radial-gradient(circle, oklch(from var(--color-glow-fuchsia) l c h / 18%) 0%, oklch(from var(--color-glow-fuchsia) l c h / 8%) 30%, transparent 60%)",
              size: "100%",
            }}
          />
        }
      />

      <GetInTouchButton />
    </div>
  );
}
