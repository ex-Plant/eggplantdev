"use client";
import { useCallback, useRef, useState } from "react";
import { cn } from "@/helpers/cn";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ToggleIcon } from "@/components/home/intro/get-in-touch-btn/toggle-icon";
import { ButtonForm } from "@/components/home/intro/get-in-touch-btn/button-form";
import { useOnClickOutside } from "@/hooks/use-on-click-outside";
import { useTranslation } from "@/lib/i18n/hooks/use-translation";

export const GetInTouchButton = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const ref = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const [open, setOpen] = useState(false);
  const toggleModal = () => setOpen((p) => !p);
  const close = useCallback(() => setOpen(false), []);
  const { t } = useTranslation("footer");

  useOnClickOutside(containerRef, close);

  useGSAP(
    () => {
      if (open) {
        gsap.set(ref.current, { height: 0, opacity: 0 });
        gsap.to(ref.current, {
          height: ref?.current?.scrollHeight,
          opacity: 1,
          duration: 1,
          ease: "elastic.out(0.8, 0.2)",
        });
      } else {
        gsap.to(ref.current, {
          height: 0,
          duration: 0.5,
          opacity: 0,
          ease: "elastic.in(0.5, 0.3)",
        });
      }
    },
    { dependencies: [open], revertOnUpdate: true },
  );

  return (
    <div
      ref={containerRef}
      className={`fest-container pointer-events-none sticky bottom-[120px] mx-auto max-w-[1920px]`}
    >
      <div className="glow glow-strong 1280:flex 1280:pointer-events-auto z-201 mb-[120px] ml-auto hidden w-fit max-w-[940px] min-w-[270px] shrink-0 cursor-pointer rounded-[10px]">
        <div
          data-slot="get-in-touch"
          className={`relative z-10 w-full rounded-[10px] bg-white px-4 py-1 text-black lg:px-6 lg:py-4`}
        >
          <button
            aria-expanded={open ? "true" : "false"}
            onClick={toggleModal}
            className={cn(`flex w-full cursor-pointer justify-between`, open ? "items-start" : "items-center")}
          >
            <span ref={textRef} className={`flex gap-2 text-start font-mono uppercase`}>
              {t("getInTouch")
                .split(" ")
                .map((word) => (
                  <span key={word}>{word}</span>
                ))}
            </span>
            <ToggleIcon open={open} className={`h-full`} />
          </button>
          <div ref={ref} className={"no-scrollbar h-0 overflow-hidden"}>
            <ButtonForm closeBtn={toggleModal} open={open} />
          </div>
        </div>
      </div>
    </div>
  );
};
