"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { EggplantLogo } from "@/components/top-navigation/eggplant-logo";
import { MenuButton } from "@/components/top-navigation/menu-button/menu-button";
import { SnakeBorder } from "@/components/top-navigation/snake-border/snake-border";
import { AccessibilityMenu } from "@/components/accessibility/accessibility-menu";
import { useTranslation } from "@/lib/i18n/hooks/use-translation";
import { useClickOutside } from "@/hooks/use-click-outside";
import { GradientMask } from "../general/gradient-mask/gradient-mask";
import { GlowWrapper } from "../general/glow-wrapper";

export function TopNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation("nav");

  useClickOutside(menuRef, () => setIsOpen(false));

  return (
    <>
      <GradientMask top={true} />
      <GradientMask top={true} />
      {/* Logo — no blend mode, stays normal */}
      <div className="pointer-events-none fixed top-0 right-0 left-0 z-999939">
        <div className="fest-container flex w-full items-start">
          <EggplantLogo className="" />
        </div>
      </div>

      {/* Hamburger + dropdown */}
      <div className="pointer-events-none fixed top-0 right-0 left-0 z-99999 mix-blend-difference">
        <div className="fest-container flex w-full items-start justify-end">
          <GlowWrapper>
            <div ref={menuRef} className="pointer-events-auto relative flex flex-col items-center">
              <MenuButton onClick={() => setIsOpen(!isOpen)} isOpen={isOpen} />

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
                  <AccessibilityMenu className="flex-col items-start p-4" />
                </motion.div>
              </SnakeBorder>
            </div>
          </GlowWrapper>
        </div>
      </div>
    </>
  );
}
