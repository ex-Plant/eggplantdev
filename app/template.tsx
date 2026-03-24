"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePreferencesStore } from "@/stores/preferences-store";

export default function Template({ children }: { children: React.ReactNode }) {
  const allAnimations = usePreferencesStore((s) => s.allAnimations);

  if (!allAnimations) return <div className="min-h-svh">{children}</div>;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        className="min-h-svh"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
