"use client";

import { GridVisualHelper } from "@/components/debug-tools/grid-visual-helper";
import { DebugToolsTriggers } from "@/components/debug-tools/debug-tools-triggers";
import { DebugScreens } from "@/components/debug-tools/debug-screens";
import { cn } from "@/helpers/cn";
import { useDebugTools } from "@/components/debug-tools/use-debug-tools";
import { ReactNode } from "react";

export const DebugWrapper = ({ children }: { children: ReactNode }) => {
  const gridVisible = useDebugTools((s) => s.gridVisible);
  const outlinesVisible = useDebugTools((s) => s.outlinesVisible);
  const layersVisible = useDebugTools((s) => s.layersVisible);

  // const isDev = process.env.NODE_ENV !== "development";
  const isDev = process.env.NODE_ENV === "development";

  return (
    <>
      {isDev && gridVisible && <GridVisualHelper />}
      <div
        id="debug_wrapper"
        className={cn(
          `relative flex min-h-0 flex-1 flex-col`,
          outlinesVisible && `**:outline **:outline-lime-300`,
          layersVisible && `**:bg-[hsla(0,11%,2%,0)]`,
        )}
      >
        {children}
        {isDev && <DebugToolsTriggers />}
        {isDev && <DebugScreens />}
      </div>
    </>
  );
};
