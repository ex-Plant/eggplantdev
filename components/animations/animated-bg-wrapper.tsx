import { CSSProperties, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { cn } from "@/helpers/cn";
gsap.registerPlugin(ScrollTrigger);

export default function AnimatedBgWrapper({
  wrapperClass,
  maskStyle,
  maskClass,
  children,
}: {
  wrapperClass?: string;
  maskStyle?: CSSProperties;
  children: React.ReactNode;
  maskClass?: string;
}) {
  const bgcRef = useRef(null);
  const bgcContainer = useRef(null);

  // DO NOT REMOVE THIS COMMENTED OUT SECTION !!!!
  // useGSAP(
  //   () => {
  //     if (!bgcRef.current || !bgcContainer.current) return;

  //     // Fade in: 0 → 1 as the section enters
  //     gsap.fromTo(
  //       bgcRef.current,
  //       { opacity: 0 },
  //       {
  //         opacity: 1,
  //         scrollTrigger: {
  //           trigger: bgcContainer.current,
  //           start: "top bottom", // top of the element at the bottom of the screen
  //           end: "top center", // fully visible when top of the element is in the center
  //           scrub: 1,
  //           // markers: true,
  //         },
  //       },
  //     );

  //     // Fade out: 1 → 0 as the section leaves
  //     gsap.to(bgcRef.current, {
  //       opacity: 0,
  //       scrollTrigger: {
  //         trigger: bgcContainer.current,
  //         start: "bottom center", // bottom of the element is in the center of the screen
  //         end: "bottom top",
  //         scrub: 1,
  //         markers: true,
  //       },
  //     });
  //   },
  //   { scope: bgcContainer },
  // );

  // useGSAP(
  //   () => {
  //     if (!bgcRef.current || !bgcContainer.current) return;

  //     const tl = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: bgcContainer.current,
  //         start: "top 20%", // start when top of the element enters the viewport
  //         end: "bottom 80%", // end when bottom of the element exits the viewport
  //         scrub: 1,
  //       },
  //     });

  //     // First half of scroll: fade in 0 → 1
  //     tl.fromTo(bgcRef.current, { opacity: 0 }, { opacity: 1, duration: 0.5 });
  //     // Second half of scroll: fade out 1 → 0
  //     tl.to(bgcRef.current, { opacity: 0, duration: 0.5 });
  //   },
  //   { scope: bgcContainer },
  // );

  return (
    <div ref={bgcContainer} className={cn("relative outline", wrapperClass)}>
      <div
        id="container-gradient-top"
        className={"to-bgc absolute top-0 right-0 left-0 h-[15vh] bg-linear-to-t from-transparent"}
      />

      <div
        id="bg-wrapper-mask"
        style={maskStyle}
        ref={bgcRef}
        className={cn(`pointer-events-none absolute inset-0`, maskClass)}
      />
      {children}
      <div
        id="container-gradient-bottom"
        className={"to-bgc absolute right-0 bottom-0 left-0 h-[15vh] bg-linear-to-b from-transparent"}
      />
    </div>
  );
}
