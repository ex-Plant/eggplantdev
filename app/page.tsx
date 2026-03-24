"use client";

import { RenderSections } from "@/components/home/sections/render-sections";
import { GetInTouchButton } from "@/components/home/intro/get-in-touch-btn/get-in-touch-button";
import { useLocalizedData } from "@/hooks/use-localized-data";
import { Intro } from "../components/home/intro/intro";

export default function HomePage() {
  const { introTxt = "", backgroundDesktop, backgroundMobile, sections } = useLocalizedData("home");

  return (
    <div className={`relative mx-auto w-full`}>
      <Intro txt={introTxt} backgroundDesktop={backgroundDesktop} backgroundMobile={backgroundMobile} />
      {sections.map((el, index) => (
        <RenderSections home={true} key={el?.type + index} data={el} isLast={index === sections.length - 1} />
      ))}
      <GetInTouchButton />
    </div>
  );
}
