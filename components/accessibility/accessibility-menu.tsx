"use client";

import { ThemeToggle } from "./theme-toggle";
import { LanguageSwitcher } from "./language-switcher";
import { AnimationToggles } from "./animation-toggles";
import { useTranslation } from "@/lib/i18n/hooks/use-translation";
import { cn } from "@/helpers/cn";

export function AccessibilityMenu({ className }: { className?: string }) {
  return (
    <div
      className={cn("bg-bgc grid grid-cols-1 content-start gap-3 p-4 font-mono uppercase", className)}
      data-slot="accessibility-menu"
    >
      <LanguageSwitcher />
      <ThemeToggle />
      <AnimationToggles />
    </div>
  );
}
