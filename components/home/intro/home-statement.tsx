"use client";

import { useRef } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import { AnimatedLettersMask } from "@/components/home/intro/animated-letters/animated-letters";
import { FadeSlide } from "@/components/general/animations-wrappers/fade-slide";

gsap.registerPlugin(ScrollTrigger);

type IntroPropsT = {
  backgroundDesktop: string;
  backgroundMobile: string;
  txt: string;
};

export const HomeStatement = ({
  backgroundDesktop: _backgroundDesktop,
  backgroundMobile: _backgroundMobile,
  txt,
}: IntroPropsT) => {
  const gritRef = useRef<HTMLDivElement>(null);
  const lettersContainerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!gritRef.current || !lettersContainerRef.current) return;

      gsap.set(gritRef.current, { opacity: 0 });

      gsap.fromTo(
        gritRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: lettersContainerRef.current,
            start: "top bottom",
            end: "top center",
            scrub: 1,
          },
        },
      );

      gsap.to(gritRef.current, {
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: lettersContainerRef.current,
          start: "bottom bottom",
          end: "bottom center",
          scrub: 1,
        },
      });
    },
    { scope: lettersContainerRef },
  );

  return (
    <section className="fest-container relative">
      <div ref={gritRef} className="grit-medium-dense pointer-events-none fixed inset-x-0 top-0 z-210 h-screen" />

      <div ref={lettersContainerRef} className="relative min-h-screen">
        <div className="">
          <AnimatedLettersMask text={txt} />
        </div>
      </div>
    </section>
  );
};
