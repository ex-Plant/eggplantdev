import { cn } from "@/helpers/cn";
import { CSSProperties } from "react";
import { SacredSeparator } from "@/components/animations/sacred-separator/sacred-separator";

type PropsT = {
  wrapperClass?: string;
  gradientFrom?: string;
  children: React.ReactNode;
  maskClass?: string;
  style?: CSSProperties;
  separator?: "top" | "bottom" | "both";
};

export default function HeroSectionWrapper({
  wrapperClass,
  gradientFrom = "from-hero-bg-warm",
  maskClass,
  children,
  style,
  separator,
}: PropsT) {
  const showTop = separator === "top" || separator === "both";
  const showBottom = separator === "bottom" || separator === "both";

  return (
    <div style={style} className={cn("relative", wrapperClass)}>
      {gradientFrom && (
        <div
          className={cn(
            `pointer-events-none absolute inset-0 bg-radial-[ellipse_at_center] to-transparent to-90%`,
            gradientFrom,
            maskClass,
          )}
        />
      )}
      {showTop && <SacredSeparator className="absolute top-0 right-0 left-0 w-full" />}
      <div className="flex flex-col py-40 md:py-80">{children}</div>
      {showBottom && <SacredSeparator className="absolute right-0 bottom-0 left-0 w-full" />}
    </div>
  );
}
