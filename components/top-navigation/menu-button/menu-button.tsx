"use client";

import { cn } from "@/helpers/cn";

type MenuButtonPropsT = {
  onClick: () => void;
  isOpen: boolean;
  className?: string;
};

export function MenuButton({ className, onClick, isOpen }: MenuButtonPropsT) {
  return (
    <button
      onClick={onClick}
      className={cn("flex cursor-pointer items-center justify-center pt-6", className)}
      aria-label="menu"
      aria-controls="primary-navigation"
      aria-expanded={isOpen}
    >
      <svg
        stroke="currentColor"
        fill="none"
        className={cn(
          "contrast:text-[var(--contrast-fg)] text-white transition-[translate,rotate] duration-1000",
          isOpen && "translate-[2px_-2px] rotate-45",
        )}
        viewBox="-10 -10 120 120"
        width="44"
      >
        <path
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m 20 40 h 60 a 1 1 0 0 1 0 20 h -60 a 1 1 0 0 1 0 -40 h 30 v 70"
          style={{
            transition: "1s",
            strokeDasharray: isOpen ? "60 105 60 300" : "60 31 60 300",
            strokeDashoffset: isOpen ? -90 : 0,
          }}
        />
      </svg>
    </button>
  );
}
