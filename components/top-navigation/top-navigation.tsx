"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { EggplantLogo } from "@/components/top-navigation/eggplant-logo";
import { MenuButton } from "@/components/top-navigation/menu-button/menu-button";
import { SnakeBorder } from "@/components/top-navigation/snake-border/snake-border";
import { AccessibilityMenu } from "@/components/accessibility/accessibility-menu";
import { MobileMenu } from "@/components/accessibility/mobile-menu";
import { useClickOutside } from "@/hooks/use-click-outside";
import { useMinMD } from "@/hooks/use-media-query";
import { GradientMask } from "@/components/general/gradient-mask/gradient-mask";
import { RoundedSeparator } from "@/components/general/rounded-separator";
import { AnimationToggles } from "@/components/accessibility/animation-toggles";
import { useTranslation } from "@/lib/i18n/hooks/use-translation";

export function TopNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const isDesktop = useMinMD();
  const { t } = useTranslation("accessibility");
  useClickOutside([menuRef, buttonRef], () => {
    if (isDesktop) setIsOpen(false);
  });

  // Reopen menu after language-switch reload — deferred to next frame
  // so framer-motion sees a false→true transition and plays the open animation
  useEffect(() => {
    const shouldReopen = sessionStorage.getItem("menuOpenAfterReload") === "true";
    if (!shouldReopen) return;
    sessionStorage.removeItem("menuOpenAfterReload");
    requestAnimationFrame(() => {
      setIsOpen(true);
      if (!isDesktop) {
        // Prevent scrolling when menu is open on mobile
        document.documentElement.style.overflow = "hidden";
      }
    });
  }, [isDesktop]);

  const handleToggle = () => {
    const willOpen = !isOpen;
    setIsOpen(willOpen);
    if (!isDesktop) {
      document.documentElement.style.overflow = willOpen ? "hidden" : "";
    }
  };

  return (
    <>
      <GradientMask top={true} />
      <GradientMask top={true} />
      {/* Logo — no blend mode, stays normal */}
      <div className="pointer-events-none fixed top-0 right-0 left-0 z-99999">
        <div className="fest-container flex w-full items-start">
          <EggplantLogo />
        </div>
      </div>

      {/* Hamburger — own layer with mix-blend-difference so it auto-inverts on any background */}
      <div className="pointer-events-none fixed top-0 right-0 left-0 z-99999 mix-blend-difference">
        <div className="fest-container flex w-full items-start justify-end">
          <MenuButton ref={buttonRef} className="pointer-events-auto" onClick={handleToggle} isOpen={isOpen} />
        </div>
      </div>

      {/* Desktop dropdown — separate layer, no blend mode */}
      {isDesktop && (
        <div className="pointer-events-none fixed top-0 right-0 left-0 z-99998">
          <div className="fest-container flex w-full items-start justify-end">
            <div ref={menuRef} className="pointer-events-auto relative mt-[60px] flex flex-col items-end">
              <SnakeBorder
                isVisible={isOpen}
                borderRadius={6}
                strokeWidth={2.5}
                duration={1}
                delay={0.6}
                className="rounded-md text-white"
              >
                <motion.div
                  initial={false}
                  animate={{
                    opacity: isOpen ? 1 : 0,
                    y: isOpen ? 0 : -10,
                  }}
                  transition={{
                    opacity: isOpen ? { duration: 0.4, ease: "easeOut", delay: 0.7 } : { duration: 0.4, delay: 0.7 },
                    y: isOpen ? { duration: 0.4, ease: "easeOut", delay: 0.7 } : { duration: 0.4, delay: 0.7 },
                  }}
                  data-slot="nav-dropdown"
                  inert={!isOpen ? true : undefined}
                  style={{ pointerEvents: isOpen ? "auto" : "none" }}
                  className="p-[2px]"
                >
                  <div className={`bg-bgc rounded-md`}>
                    <div className="grit grid max-w-[400px] grid-cols-1 p-8">
                      <AccessibilityMenu className="uppercase" />
                      <RoundedSeparator className="my-6" />
                      <p className="text-14 text-lightgray scalable pb-6 text-balance">{t("animationNotice")}</p>
                      <AnimationToggles className="uppercase" />
                    </div>
                  </div>
                </motion.div>
              </SnakeBorder>
            </div>
          </div>
        </div>
      )}

      {/* Mobile: full drawer */}
      {!isDesktop && <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />}
    </>
  );
}
