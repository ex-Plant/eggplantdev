"use client";

import { Fragment } from "react";
import { RenderSections } from "@/components/home/sections/render-sections";
import { GetInTouchButton } from "@/components/home/intro/get-in-touch-btn/get-in-touch-button";
import { useLocalizedData } from "@/hooks/use-localized-data";
import { Intro } from "../components/home/intro/intro";
import { HeroMetatronsCubeMonoScroll } from "../components/home/intro/hero-concepts/hero-metatrons-cube-scroll";
import { HeroSoleilAubergine } from "../components/home/intro/hero-concepts/soleil-aubergine";

export default function HomePage() {
  const { introTxt = "", backgroundDesktop, backgroundMobile, sections } = useLocalizedData("home");

  return (
    <div className={`relative mx-auto w-full`}>
      {/* <HeroSoleilAubergine /> */}
      {/* <div className={`py-[100vh]`}> */}
      <HeroSoleilAubergine />
      {/* </div> */}

      {/* <HeroMetatronsCubeMonoScroll /> */}

      <Intro txt={introTxt} backgroundDesktop={backgroundDesktop} backgroundMobile={backgroundMobile} />
      {sections.map((el, index) => (
        <Fragment key={el?.type + index}>
          <RenderSections home={true} data={el} isLast={index === sections.length - 1} />
          {index === 0 && <HeroSoleilAubergine />}
        </Fragment>
      ))}
      <GetInTouchButton />
      <HeroMetatronsCubeMonoScroll />
    </div>
  );
}
