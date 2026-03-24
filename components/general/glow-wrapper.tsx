import { cn } from "@/helpers/cn";

type GlowWrapperPropsT = {
  children: React.ReactNode;
  className?: string;
  glowClassName?: string;
};

export function GlowWrapper({ children, className, glowClassName }: GlowWrapperPropsT) {
  return (
    <div className={cn("group/glow", className)}>
      <div className="relative">
        <div
          className={cn(
            "pointer-events-none absolute -inset-6 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.08)_0%,rgba(139,92,246,0.1)_20%,rgba(217,70,239,0.12)_40%,rgba(139,92,246,0.08)_60%,rgba(59,130,246,0.04)_75%,transparent_95%)] opacity-0 transition-opacity duration-300 group-hover/glow:opacity-100",
            glowClassName,
          )}
        />
        {children}
      </div>
    </div>
  );
}
