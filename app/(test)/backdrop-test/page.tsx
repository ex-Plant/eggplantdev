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
import { MetatronsCubeCore } from "@/components/home/intro/hero-concepts/metatrons-cube/hero-metatrons-cube";
import { HeroSacredAscensionGold } from "@/components/home/intro/hero-concepts/sacred-ascension/hero-sacred-ascension-gold";
import { HeroGlamCosmicBillboard } from "@/components/home/intro/hero-concepts/glam-cosmic-billboard/hero-glam-cosmic-billboard";
import { ReliquaryDorContent } from "@/components/home/intro/hero-concepts/reliquary-dor";
import { CathedraleCosmiquContent } from "@/components/home/intro/hero-concepts/cathedrale-cosmique";
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
    <ScrollBackdropProvider>
      {/* ── Scene 1: Soleil Aubergine hero — golden dark ── */}
      <ScrollScene config={{ color: SOLEIL_PALETTE.bgColor, showLogo: false }} className="mb-20 min-h-screen">
        <SoleilAubergineContent />
      </ScrollScene>

      {/* ── Scene 2: Intro text with animated letters ── */}
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

      {/* ── Scene 4: Commercial Work — silver metallic logo ── */}
      <ScrollScene config={{ logoFilter: "saturate(0) brightness(1.4) contrast(1.2) drop-shadow(0 0 40px rgba(192,192,192,0.25))" }}>
        <ProjectsSection data={commercialWork} className="fest-container py-20 md:py-40" />
      </ScrollScene>

      {/* ── Scene 5: Metatron's Cube — gold (default) ── */}
      <ScrollScene>
        <MetatronsCubeCore theme="gold" />
      </ScrollScene>

      {/* ── Scene 6: Freelance Work ── */}
      <ScrollScene>
        <ProjectsSection data={freelanceWork} className="fest-container py-20 md:py-40" />
      </ScrollScene>

      {/* ── Scene 7: Sacred Ascension Gold interstitial ── */}
      <ScrollScene>
        <HeroSacredAscensionGold />
      </ScrollScene>

      {/* ── Scene 8: About ── */}
      <ScrollScene>
        <FullSection data={about} className="fest-container py-20 md:py-40" />
      </ScrollScene>

      {/* ── Scene 9: Glam Cosmic Billboard interstitial ── */}
      <ScrollScene>
        <HeroGlamCosmicBillboard />
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
