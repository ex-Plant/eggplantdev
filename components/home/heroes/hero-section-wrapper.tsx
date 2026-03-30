import { cn } from "@/helpers/cn";
import { CSSProperties, ReactNode } from "react";

type HeroSectionWrapperPropsT = {
  id: string;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
};

export function HeroSectionWrapper({ id, children, className, style }: HeroSectionWrapperPropsT) {
  return (
    <div
      id={id}
      className={cn("relative flex min-h-screen items-center justify-center py-20", className)}
      style={style}
    >
      {children}
    </div>
  );
}
