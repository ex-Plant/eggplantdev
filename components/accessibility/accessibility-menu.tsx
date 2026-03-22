"use client";

import { FontSizeControl } from "./font-size-control";
import { ThemeToggle } from "./theme-toggle";
import { LanguageSwitcher } from "./language-switcher";
import { cn } from "@/helpers/cn";

export function AccessibilityMenu({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-3 font-mono uppercase text-black", className)} data-slot="accessibility-menu">
      <FontSizeControl />
      <span>|</span>
      <ThemeToggle />
      <span>|</span>
      <LanguageSwitcher />
    </div>
  );
}
