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
        "ml-8 flex h-5 w-8 shrink-0 cursor-pointer items-center rounded-full transition-[background-color] duration-300 ease-in-out disabled:cursor-not-allowed disabled:opacity-40",
        checked ? "bg-white" : "bg-white/15",
      )}
    >
      <div
        className={cn(
          "h-3.5 w-3.5 rounded-full transition-all duration-300 ease-in-out",
          checked ? "translate-x-4 bg-black" : "translate-x-0.5 bg-white",
        )}
      />
    </button>
  );
}
