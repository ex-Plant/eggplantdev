import { Intro } from "@/components/home/intro/intro";
import { HomePagePropsT } from "@/types/home-page-types";
import { RenderSections } from "@/components/home/sections/render-sections";
import { GetInTouchButton } from "@/components/home/intro/get-in-touch-btn/get-in-touch-button";
import homeData from "@/data/home.json";

export default function TestPage() {
  const { introTxt = "", backgroundDesktop, backgroundMobile, sections } = homeData as HomePagePropsT["data"];

  return (
    <section className="bg-bgc test-overrides relative">
      <Intro txt={introTxt} backgroundDesktop={backgroundDesktop} backgroundMobile={backgroundMobile} />
      {sections.map((el, index) => (
        <RenderSections home={true} key={el?.type + index} data={el} isLast={index === sections.length - 1} />
      ))}
      <GetInTouchButton />
    </section>
  );
}
