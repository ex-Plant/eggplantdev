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
    <div id={id} className={cn("relative px-4", className)} style={style}>
      {children}
    </div>
  );
}
