import { cn } from "@/helpers/cn";

type RoundedSeparatorPropsT = {
  className?: string;
  strokeWidth?: number;
};

export function RoundedSeparator({ className, strokeWidth = 1.5 }: RoundedSeparatorPropsT) {
  const half = strokeWidth / 2;
  const height = strokeWidth + 1;

  return (
    <svg className={cn("w-full", className)} height={height}>
      <line
        x1={half + 0.5}
        y1={half}
        x2="99.5%"
        y2={half}
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        className="text-primary"
      />
    </svg>
  );
}
