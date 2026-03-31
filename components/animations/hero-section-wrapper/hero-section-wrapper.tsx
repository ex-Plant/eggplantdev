import { cn } from "@/helpers/cn";
import { CSSProperties } from "react";
import { SacredSeparator } from "@/components/animations/sacred-separator/sacred-separator";

type PropsT = {
  wrapperClass?: string;
  children: React.ReactNode;
  style?: CSSProperties;
};

export default function HeroSectionWrapper({ wrapperClass, children, style }: PropsT) {
  return (
    <div style={style} className={cn("relative my-60 md:my-80", wrapperClass)}>
      <div className="flex h-full flex-col">{children}</div>
    </div>
  );
}
