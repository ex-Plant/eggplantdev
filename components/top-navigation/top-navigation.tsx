"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { EggplantLogo } from "@/components/top-navigation/eggplant-logo";
import { MenuButton } from "@/components/top-navigation/menu-button/menu-button";
import { SnakeBorder } from "@/components/top-navigation/snake-border/snake-border";
import { AccessibilityMenu } from "@/components/accessibility/accessibility-menu";
import { AnimationDrawer } from "@/components/accessibility/animation-drawer";
import { useClickOutside } from "@/hooks/use-click-outside";
import { useMinMD } from "@/hooks/use-media-query";
import { GradientMask } from "../general/gradient-mask/gradient-mask";

export function TopNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const isDesktop = useMinMD();

  useClickOutside(menuRef, () => {
    if (isDesktop) setIsOpen(false);
  });

  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <>
      <GradientMask top={true} />
      <GradientMask top={true} />
      {/* Logo — no blend mode, stays normal */}
      <div className="pointer-events-none fixed top-0 right-0 left-0 z-999939">
        <div className="fest-container flex w-full items-start">
          <EggplantLogo />
        </div>
      </div>

      {/* Hamburger + desktop dropdown */}
      <div className="pointer-events-none fixed top-0 right-0 left-0 z-99999">
        <div className="fest-container flex w-full items-start justify-end">
          <div ref={menuRef} className="pointer-events-auto relative flex flex-col items-end">
            <MenuButton onClick={handleToggle} isOpen={isOpen} className="mix-blend-difference" />

            {/* Desktop: inline dropdown with snake border */}
            {isDesktop && (
              <SnakeBorder
                isVisible={isOpen}
                borderRadius={6}
                strokeWidth={2.5}
                duration={1}
                delay={0.6}
                eraseColor="var(--color-bgc)"
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
                >
                  <AccessibilityMenu />
                </motion.div>
              </SnakeBorder>
            )}
          </div>
        </div>
      </div>

      {/* Mobile: full drawer */}
      {!isDesktop && <AnimationDrawer externalOpen={isOpen} onExternalOpenChange={setIsOpen} />}
    </>
  );
}
