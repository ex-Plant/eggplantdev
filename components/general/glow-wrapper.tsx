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
            "pointer-events-none absolute -inset-6 rounded-full bg-[radial-gradient(ellipse_at_center,var(--color-glow-purple),var(--color-glow-blue),var(--color-glow-fuchsia),transparent_50%)] opacity-0 transition-opacity duration-300 group-hover/glow:opacity-100",
            glowClassName,
          )}
        />
        {children}
      </div>
    </div>
  );
}
