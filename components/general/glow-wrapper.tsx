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
            "pointer-events-none absolute -inset-6 rounded-full opacity-0 transition-opacity duration-300 group-hover/glow:opacity-100",
            glowClassName,
          )}
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(218, 165, 32, 0.22) 0%, rgba(218, 165, 32, 0.12) 46%, transparent 86%)",
          }}
        />
        {children}
      </div>
    </div>
  );
}
