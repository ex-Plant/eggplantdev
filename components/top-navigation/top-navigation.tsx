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
import Link from "next/link";

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
      <div className="pointer-events-none fixed top-0 right-0 left-0 z-99999">
        <div className="fest-container pointer-events-auto flex w-full items-start">
          <Link href="/" className={"py-4"}>
            <EggplantLogo className="" />
          </Link>
        </div>
      </div>
      {/* Hamburger + dropdown */}
      <div className="pointer-events-none fixed top-0 right-0 left-0 z-99999 mix-blend-difference">
        <div className="fest-container flex w-full items-start justify-end">
          <div ref={menuRef} className="pointer-events-auto relative flex flex-col items-center">
            <MenuButton onClick={() => setIsOpen(!isOpen)} isOpen={isOpen} />
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  data-slot="nav-dropdown"
                  className="bg-bgc w-fit rounded-md mix-blend-normal"
                >
                  <SnakeBorder
                    isVisible={isOpen}
                    borderRadius={6}
                    strokeWidth={2.5}
                    duration={1}
                    className="rounded-md text-white"
                  >
                    <div className="p-4">
                      <AccessibilityMenu className="flex-col items-start" />
                    </div>
                  </SnakeBorder>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </>
  );
}
