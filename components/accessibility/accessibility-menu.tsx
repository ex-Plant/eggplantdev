"use client";

import { ThemeToggle } from "./theme-toggle";
import { LanguageSwitcher } from "./language-switcher";
import { cn } from "@/helpers/cn";

export function AccessibilityMenu({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-3 font-mono uppercase", className)} data-slot="accessibility-menu">
      <ThemeToggle />
      <LanguageSwitcher />
    </div>
  );
}
