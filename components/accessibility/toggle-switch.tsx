"use client";

import { cn } from "@/helpers/cn";

type ToggleSwitchPropsT = {
  checked: boolean;
  onChange: (v: boolean) => void;
  label: string;
  disabled?: boolean;
};

export function ToggleSwitch({ checked, onChange, label, disabled }: ToggleSwitchPropsT) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      disabled={disabled}
      onClick={() => onChange(!checked)}
      data-checked={checked || undefined}
      className={cn(
        "ml-8 flex h-8 w-14 shrink-0 cursor-pointer items-center rounded-full transition-[background-color] duration-300 ease-in-out disabled:cursor-not-allowed disabled:opacity-40 md:h-6 md:w-10 md:ml-4",
        checked ? "bg-white" : "bg-white/15",
      )}
    >
      <div
        className={cn(
          "h-6 w-6 rounded-full transition-all duration-300 ease-in-out md:h-4 md:w-4",
          checked ? "translate-x-7 bg-black md:translate-x-5" : "translate-x-1 bg-white",
        )}
      />
    </button>
  );
}
