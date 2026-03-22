"use client";

import { useRef } from "react";
import { DebugToolsCheckbox } from "@/components/debug-tools/debug-tools-checkbox";
import { useDebugTools } from "@/components/debug-tools/use-debug-tools";

export const DebugToolsTriggers = () => {
  const gridInputRef = useRef<HTMLInputElement | null>(null);
  const layersInputRef = useRef<HTMLInputElement | null>(null);
  const outlinesInputRef = useRef<HTMLInputElement | null>(null);
  const screensInputRef = useRef<HTMLInputElement | null>(null);

  const gridVisible = useDebugTools((s) => s.gridVisible);
  const outlinesVisible = useDebugTools((s) => s.outlinesVisible);
  const layersVisible = useDebugTools((s) => s.layersVisible);
  const screensVisible = useDebugTools((s) => s.screensVisible);
  const toggleGrid = useDebugTools((s) => s.toggleGrid);
  const toggleOutlines = useDebugTools((s) => s.toggleOutlines);
  const toggleLayers = useDebugTools((s) => s.toggleLayers);
  const toggleScreens = useDebugTools((s) => s.toggleScreens);

  return (
    <div className={`fixed bottom-4 right-4 z-[10001] flex gap-4 rounded px-3 py-2`}>
      <DebugToolsCheckbox toggleFunc={toggleGrid} currentVal={gridVisible} label={`grid`} ref={gridInputRef} />
      <DebugToolsCheckbox
        toggleFunc={toggleOutlines}
        currentVal={outlinesVisible}
        label={`outlines`}
        ref={outlinesInputRef}
      />
      <DebugToolsCheckbox toggleFunc={toggleLayers} currentVal={layersVisible} label={`layers`} ref={layersInputRef} />
      <DebugToolsCheckbox
        toggleFunc={toggleScreens}
        currentVal={screensVisible}
        label={`screens`}
        ref={screensInputRef}
      />
    </div>
  );
};
