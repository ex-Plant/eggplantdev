"use client";

/* Backdrop test — scroll-driven background + grit transitions prototype */

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
import { MetatronsCubeCore } from "@/components/home/intro/hero-concepts/metatrons-cube/hero-metatrons-cube";
import { SacredAscensionGoldContent } from "@/components/home/intro/hero-concepts/sacred-ascension/hero-sacred-ascension-gold";
import { GlamCosmicBillboardContent } from "@/components/home/intro/hero-concepts/glam-cosmic-billboard";
import { ReliquaryDorContent } from "@/components/home/intro/hero-concepts/reliquary-dor";
import { CathedraleCosmiquContent } from "@/components/home/intro/hero-concepts/cathedrale-cosmique";
import { CosmicAubergineContent } from "@/components/home/sections/section-concepts/cosmic-aubergine";
import { PALETTE_GOLD } from "@/components/home/sections/section-concepts/cosmic-aubergine/config";
import { PALETTES as METATRON_PALETTES } from "@/components/home/intro/hero-concepts/metatrons-cube/config";
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
      {/* ── Scene 1: Soleil Aubergine hero ── */}
      <ScrollScene config={{ color: SOLEIL_PALETTE.bgColor, showLogo: false }} className="mb-20 min-h-screen">
        <SoleilAubergineContent />
      </ScrollScene>

      {/* ── Scene 2: Intro text with animated letters — extra dense grit like home ── */}
      <ScrollScene config={{ textureClass: "grit-medium-dense", showLogo: true }}>
        <div className="fest-container relative flex flex-col">
          <FadeSlide>
            <AnimatedLettersMask text={introTxt} />
          </FadeSlide>
        </div>
      </ScrollScene>

      {/* ── Scene 3: Metatron's Cube interstitial ── */}
      <ScrollScene>
        <MetatronsCubeCore theme="silver" />
      </ScrollScene>

      {/* ── Scene 4: Commercial Work ── */}
      <ScrollScene config={{ logoFilter: METATRON_PALETTES.silver.eggplantFilter }}>
        <ProjectsSection data={commercialWork} className="fest-container py-20 md:py-40" />
      </ScrollScene>

      {/* ── Scene 5: Metatron's Cube — gold ── */}
      <ScrollScene>
        <MetatronsCubeCore theme="gold" />
      </ScrollScene>

      {/* ── Scene 6: Freelance Work ── */}
      <ScrollScene>
        <ProjectsSection data={freelanceWork} className="fest-container py-20 md:py-40" />
      </ScrollScene>

      {/* ── Scene 7: Sacred Ascension Gold interstitial ── */}
      <ScrollScene>
        <SacredAscensionGoldContent />
      </ScrollScene>

      {/* ── Scene 8: About ── */}
      <ScrollScene>
        <FullSection data={about} className="fest-container py-20 md:py-40" />
      </ScrollScene>

      {/* ── Scene 9: Glam Cosmic Billboard ── */}
      <ScrollScene config={{ showLogo: true }}>
        <GlamCosmicBillboardContent />
      </ScrollScene>

      {/* ── Scene 10: Values ── */}
      <ScrollScene>
        <FullSection data={values} className="fest-container py-20 md:py-40" />
      </ScrollScene>

      {/* ── Scene 11: Reliquary d'Or interstitial ── */}
      <ScrollScene>
        <ReliquaryDorContent />
      </ScrollScene>

      {/* ── Scene 12: Cathédrale Cosmique interstitial ── */}
      <ScrollScene>
        <CathedraleCosmiquContent />
      </ScrollScene>

      {/* ── Scene 13: Eggplant in Space (gold) interstitial ── */}
      <ScrollScene>
        <CosmicAubergineContent palette={PALETTE_GOLD} />
      </ScrollScene>

      {/* ── Scene 14: How I Work ── */}
      <ScrollScene>
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
