"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ReactNode } from "react";

type FadeSlidePropsT = {
  children: ReactNode;
  animationKey: string;
  mode?: "wait" | "sync" | "popLayout";
  duration?: number;
  y?: number;
};

export function FadeSlide({ children, animationKey, mode, duration = 0.5, y = 50 }: FadeSlidePropsT) {
  return (
    <AnimatePresence mode={mode}>
      <motion.div
        key={animationKey}
        initial={{ opacity: 0, y }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -y }}
        transition={{ duration }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
