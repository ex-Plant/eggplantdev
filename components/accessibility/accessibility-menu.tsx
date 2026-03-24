"use client";

import { ThemeToggle } from "./theme-toggle";
import { LanguageSwitcher } from "./language-switcher";
import { FontSizeControl } from "./font-size-control";
import { cn } from "@/helpers/cn";

export function AccessibilityMenu({ className }: { className?: string }) {
  return (
    <div
      className={cn("grid grid-cols-1 content-start gap-3 font-mono uppercase", className)}
      data-slot="accessibility-menu"
    >
      <LanguageSwitcher />
      <FontSizeControl />
      <ThemeToggle />
    </div>
  );
}
