"use client";

import { useEffect, useState, useCallback } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { motion } from "framer-motion";
import { SnakeBorder } from "@/components/top-navigation/snake-border/snake-border";
import { AccessibilityMenu } from "./accessibility-menu";
import { useTranslation } from "@/lib/i18n/hooks/use-translation";

const COOKIE_NAME = "animDrawerSeen";
const CLOSE_ANIMATION_MS = 1800;

function hasSeenDrawer(): boolean {
  if (typeof document === "undefined") return true;
  return document.cookie.includes(`${COOKIE_NAME}=1`);
}

function markDrawerSeen() {
  document.cookie = `${COOKIE_NAME}=1;path=/;max-age=${60 * 60 * 24 * 365}`;
}

/**
 * Keeps the portal mounted for the duration of the close animation, then unmounts.
 * `mount()` must be called from event handlers (not effects) to satisfy lint rules.
 * The hook auto-unmounts after `delayMs` when `isOpen` goes false.
 */
function useDelayedUnmount(isOpen: boolean, delayMs: number) {
  // Start mounted if already open (covers controlled components)
  const [mounted, setMounted] = useState(isOpen);

  const mount = useCallback(() => setMounted(true), []);

  useEffect(() => {
    if (!isOpen && mounted) {
      const id = setTimeout(() => setMounted(false), delayMs);
      return () => clearTimeout(id);
    }
  }, [isOpen, mounted, delayMs]);

  return { mounted: mounted || isOpen, mount };
}

type AnimationDrawerPropsT = {
  externalOpen?: boolean;
  onExternalOpenChange?: (open: boolean) => void;
};

export function AnimationDrawer({ externalOpen, onExternalOpenChange }: AnimationDrawerPropsT) {
  const [autoOpen, setAutoOpen] = useState(false);
  const { t } = useTranslation("accessibility");

  const isControlled = externalOpen !== undefined;
  const isOpen = isControlled ? externalOpen : autoOpen;

  const { mounted, mount } = useDelayedUnmount(isOpen, CLOSE_ANIMATION_MS);

  // Auto-open on first visit
  useEffect(() => {
    if (isControlled) return;
    if (!hasSeenDrawer()) {
      const id = setTimeout(() => {
        mount();
        setAutoOpen(true);
      }, 1500);
      return () => clearTimeout(id);
    }
  }, [isControlled, mount]);

  const handleOpenChange = (open: boolean) => {
    if (open) mount();
    if (!open) markDrawerSeen();
    if (isControlled) {
      onExternalOpenChange?.(open);
    } else {
      setAutoOpen(open);
    }
  };

  if (!mounted) return null;

  return (
    <DialogPrimitive.Root open={isOpen} onOpenChange={handleOpenChange}>
      <DialogPrimitive.Portal forceMount>
        <DialogPrimitive.Content
          forceMount
          className="grit-subtle fixed right-0 bottom-0 left-0 z-999999 font-mono transition-[visibility] duration-0"
          style={{
            visibility: isOpen ? "visible" : "hidden",
            transitionDelay: isOpen ? "0ms" : `${CLOSE_ANIMATION_MS}ms`,
          }}
        >
          <SnakeBorder
            isVisible={isOpen}
            borderRadius={6}
            strokeWidth={2.5}
            duration={1}
            delay={0.3}
            eraseColor="var(--color-bgc)"
            className="rounded-md text-white"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{
                opacity: isOpen ? 1 : 0,
                y: isOpen ? 0 : 10,
              }}
              transition={{
                opacity: isOpen ? { duration: 0.4, ease: "easeOut", delay: 0.7 } : { duration: 0.4, delay: 0.7 },
                y: isOpen ? { duration: 0.4, ease: "easeOut", delay: 0.7 } : { duration: 0.4, delay: 0.7 },
              }}
              className="bg-bgc rounded-md p-6"
              inert={!isOpen ? true : undefined}
              style={{ pointerEvents: isOpen ? "auto" : "none" }}
            >
              <DialogPrimitive.Title className="text-14 tracking-wide uppercase">
                {t("allAnimations")}
              </DialogPrimitive.Title>
              <DialogPrimitive.Description className="text-11 mt-2 leading-relaxed normal-case opacity-70">
                {t("animationNotice")}
              </DialogPrimitive.Description>

              <div className="mt-4">
                <AccessibilityMenu />
              </div>

              <DialogPrimitive.Close asChild>
                <button
                  type="button"
                  className="text-11 mt-5 w-full cursor-pointer rounded border border-white/20 py-2 text-center tracking-wider uppercase transition-colors hover:bg-white/10"
                >
                  {t("drawerDismiss")}
                </button>
              </DialogPrimitive.Close>
            </motion.div>
          </SnakeBorder>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}
