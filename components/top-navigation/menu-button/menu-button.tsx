"use client";

import styles from "./menu-button.module.css";
import { cn } from "@/helpers/cn";

type MenuButtonPropsT = {
  onClick: () => void;
  isOpen: boolean;
  className?: string;
};

export function MenuButton({ className, onClick, isOpen }: MenuButtonPropsT) {
  return (
    <div className={cn("flex items-start", className)}>
      <button
        onClick={onClick}
        className={`${styles.navBtn} flex min-h-11 min-w-11 cursor-pointer items-center justify-center`}
        aria-label="menu"
        aria-controls="primary-navigation"
        aria-expanded={isOpen}
      >
        <svg stroke="currentColor" fill="none" className={`${styles.hamburger} text-white`} viewBox="-10 -10 120 120" width="44">
          <path
            className={styles.line}
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m 20 40 h 60 a 1 1 0 0 1 0 20 h -60 a 1 1 0 0 1 0 -40 h 30 v 70"
          />
        </svg>
      </button>
    </div>
  );
}
