import { cn } from "@/helpers/cn";

export function GradientMask({ top = false }) {
  return (
    <div
      className={cn(
        "grit pointer-events-none fixed right-0 isolate z-100 h-[8vh] w-full",
        top ? "top-0" : "bottom-[-2px]",
      )}
    >
      {/* Gradient layer — fades content to bgc */}
      <div className={cn("to-bgc absolute inset-0 from-transparent", top ? "bg-linear-to-t" : "bg-linear-to-b")} />
    </div>
  );
}
