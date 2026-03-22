"use client";

import { useRef } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import { AnimatedLetters } from "@/components/home/intro/animated-letters/animated-letters";
import { useMinLG } from "@/hooks/use-media-query";
import { FadeSlide } from "@/components/general/animations-wrappers/fade-slide";

gsap.registerPlugin(ScrollTrigger);

type IntroPropsT = {
  backgroundDesktop: string;
  backgroundMobile: string;
  txt: string;
};

export const Intro = ({ backgroundDesktop, backgroundMobile, txt }: IntroPropsT) => {
  const bg = useMinLG() ? backgroundDesktop : backgroundMobile;
  const bgcRef = useRef(null);
  const bgcContainer = useRef(null);

  useGSAP(
    () => {
      gsap.to(bgcRef.current, {
        opacity: "0",
        scrollTrigger: {
          trigger: bgcContainer.current,
          start: "bottom bottom",
          end: "bottom center",
          scrub: 1,
        },
      });
    },
    { scope: bgcContainer },
  );

  return (
    <>
      <div ref={bgcContainer} className={`fest-container relative flex flex-col`}>
        <div ref={bgcRef} className={`grit-medium-dense pointer-events-none fixed top-0 h-screen w-full`}></div>

        <FadeSlide animationKey={txt}>
          <AnimatedLetters text={txt} />
        </FadeSlide>
      </div>
    </>
  );
};
