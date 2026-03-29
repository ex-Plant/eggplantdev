import { cn } from "@/helpers/cn";

type GlowArrowPropsT = {
  className?: string;
  inactive?: boolean;
};

export function GlowArrow({ className, inactive }: GlowArrowPropsT) {
  return (
    <div className={cn("shrink-0", inactive && "text-copy-muted", className)}>
      <svg width="36" height="21" viewBox="0 0 36 21" fill="none" xmlns="http://www.w3.org/2000/svg">
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
