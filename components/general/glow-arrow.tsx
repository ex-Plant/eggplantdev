import { cn } from "@/helpers/cn";

type GlowArrowPropsT = {
  className?: string;
  inactive?: boolean;
};

export function GlowArrow({ className, inactive }: GlowArrowPropsT) {
  return (
    <div className={cn("relative mt-1 shrink-0", inactive && "text-gray7", className)}>
      {!inactive && (
        <div className="absolute -inset-12 rounded-full bg-[radial-gradient(ellipse_at_center,var(--color-glow-purple),var(--color-glow-blue),var(--color-glow-fuchsia),transparent_80%)] blur-2xl" />
      )}
      <svg
        className="relative"
        width="36"
        height="21"
        viewBox="0 0 36 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 10.5H35M35 10.5L26 1.5M35 10.5L26 19.5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
