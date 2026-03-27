"use client";
import { useState } from "react";

type ThemeTogglePropsT = {
  label: string;
  index: number;
  children: (colorful: boolean) => React.ReactNode;
};

export function ThemeToggle({ label, index, children }: ThemeTogglePropsT) {
  const [colorful, setColorful] = useState(false);
  return (
    <div>
      <div className="fest-container sticky top-0 z-[130] bg-bgc/90 backdrop-blur-sm pt-2">
        <div className="mb-4 flex items-center gap-3 border-b border-white/10 pb-3">
          <span className="font-mono text-14 uppercase tracking-widest text-orange-500">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="font-mono text-16 uppercase text-white/80">{label}</span>
          <button
            onClick={() => setColorful((c) => !c)}
            className="ml-auto rounded-full border px-4 py-1.5 font-mono text-xs uppercase tracking-widest transition-colors"
            style={{
              borderColor: colorful ? "rgba(218,165,32,0.4)" : "rgba(255,255,255,0.15)",
              color: colorful ? "rgba(218,165,32,0.8)" : "rgba(255,255,255,0.4)",
            }}
          >
            {colorful ? "Colorful" : "Standard"}
          </button>
        </div>
      </div>
      {children(colorful)}
    </div>
  );
}
