"use client";

import { useRef } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import { AnimatedLettersMask } from "@/components/home/intro/animated-letters/animated-letters";
import { AnimatedEggplant } from "@/components/home/intro/animated-letters/animated-eggplant";
import { useMinLG } from "@/hooks/use-media-query";
import { FadeSlide } from "@/components/general/animations-wrappers/fade-slide";

gsap.registerPlugin(ScrollTrigger);

type IntroPropsT = {
  backgroundDesktop: string;
  backgroundMobile: string;
  txt: string;
};

export const Intro = ({ backgroundDesktop, backgroundMobile, txt }: IntroPropsT) => {
  const bgcRef = useRef(null);
  const bgcContainer = useRef(null);

  useGSAP(
    () => {
      if (!bgcRef.current || !bgcContainer.current) return;

      // Fade out as the section exits the viewport
      gsap.fromTo(
        bgcRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          scrollTrigger: {
            trigger: bgcContainer.current,
            start: "top center",
            end: "top top",
            scrub: 1,
          },
        },
      );

      gsap.to(bgcRef.current, {
        opacity: 0,
        scrollTrigger: {
          trigger: bgcContainer.current,
          start: "bottom center",
          end: "bottom top",
          scrub: 1,
        },
      });
    },
    { scope: bgcContainer },
  );

  return (
    <>
      <div ref={bgcContainer} className={`fest-container relative flex flex-col`}>
        <div
          ref={bgcRef}
          className={`grit-medium-dense pointer-events-none fixed top-0 right-0 left-0 z-2 h-screen`}
        ></div>

        {/* <AnimatedEggplant /> */}
        <AnimatedLettersMask text={txt} />
      </div>
    </>
  );
};
