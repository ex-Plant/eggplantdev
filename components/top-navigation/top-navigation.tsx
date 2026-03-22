"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { EggplantLogo } from "@/components/top-navigation/eggplant-logo";
import { MenuButton } from "@/components/top-navigation/menu-button/menu-button";
import { AccessibilityMenu } from "@/components/accessibility/accessibility-menu";
import { useTranslation } from "@/lib/i18n/hooks/use-translation";
import { useClickOutside } from "@/hooks/use-click-outside";

export function TopNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation("nav");

  useClickOutside(menuRef, () => setIsOpen(false));

  return (
    <>
      {/* Logo — no blend mode, stays normal */}
      <div className="pointer-events-none fixed top-0 right-0 left-0 z-99999">
        <div className="fest-container pointer-events-auto flex w-full items-start">
          <EggplantLogo className="items-start py-4" />
        </div>
      </div>
      {/* Hamburger + dropdown */}
      <div className="pointer-events-none fixed top-0 right-0 left-0 z-99999 mix-blend-difference">
        <div className="fest-container pointer-events-auto flex w-full items-start justify-end">
          <div ref={menuRef} className="relative">
            <MenuButton className="py-2" onClick={() => setIsOpen(!isOpen)} isOpen={isOpen} />
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  data-slot="nav-dropdown"
                  className="border-gray5 bg-bgc absolute top-full right-0 w-fit rounded-md border p-4 mix-blend-normal shadow-md"
                >
                  <AccessibilityMenu className="flex-col items-start" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </>
  );
}
