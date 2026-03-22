import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";
import { useRef } from "react";
import useWindowSize from "@/hooks/use-window-size";
import { useMinMD } from "@/hooks/use-media-query";
import { cn } from "@/helpers/cn";

gsap.registerPlugin(ScrollTrigger);

export const AnimatedLetters = ({ text = "" }) => {
  const lettersRef = useRef<HTMLDivElement>(null);
  const { clientWidth } = useWindowSize();
  const splitRef = useRef<SplitType | null>(null);

  const md = useMinMD();

  useGSAP(
    () => {
      splitRef.current = new SplitType("#target", { types: "lines" });

      gsap.utils.toArray<Element>(".line").forEach((line) => {
        gsap.to(line, {
          backgroundSize: "100% 100%",
          ease: !md ? "" : "power3.out",
          scrollTrigger: {
            trigger: line,
            start: !md ? "top 50%" : `top 60%`,
            end: !md ? `bottom 50%` : "bottom 60%",
            scrub: !md ? 0.6 : 1,
            // markers: true,
          },
        });
      });

      const timeoutId = setTimeout(() => {
        ScrollTrigger.refresh();
      }, 100);

      return () => {
        clearTimeout(timeoutId);
        splitRef.current?.revert();
      };
    },
    { scope: lettersRef, dependencies: [clientWidth, md], revertOnUpdate: true },
  );

  return (
    <div
      ref={lettersRef}
      className={cn(
        `no-scrollbar z-2 flex flex-col overflow-x-hidden overflow-y-scroll pt-20 pr-12 pb-40 sm:w-[calc(340/360*100vw)] md:w-[calc(590/768*100vw)] md:pt-[120px] md:pr-0 lg:w-[calc(740/1024*100vw)] lg:max-w-[940px]`,
      )}
    >
      <div
        id="target"
        className="wrap-break-words text-24 450:text-34 md:text-64 lg:text-80 xl:text-96 font-mono uppercase"
      >
        {text}
      </div>
    </div>
  );
};
