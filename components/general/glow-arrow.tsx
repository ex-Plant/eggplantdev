import { cn } from "@/helpers/cn";

type GlowArrowPropsT = {
  className?: string;
};

export function GlowArrow({ className }: GlowArrowPropsT) {
  return (
    <div className={cn("relative mt-1 shrink-0", className)}>
      <div className="absolute -inset-12 rounded-full bg-[radial-gradient(ellipse_at_center,var(--color-glow-purple),var(--color-glow-blue),var(--color-glow-fuchsia),transparent_70%)] blur-2xl" />
      <svg
        className="relative"
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M1 1H17M17 1V17M17 1L1 17" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </div>
  );
}
