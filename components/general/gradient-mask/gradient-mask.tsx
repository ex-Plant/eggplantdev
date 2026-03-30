import { cn } from "@/helpers/cn";

export function GradientMask({ position = "top" }: { position?: "top" | "bottom" }) {
  return (
    <div
      className={cn(
        "to-bgc pointer-events-none fixed right-0 left-0 z-100 h-[6vh] from-transparent",
        position === "top" ? "top-0 bg-linear-to-t" : "bottom-0 bg-linear-to-b",
      )}
    />
  );
}
