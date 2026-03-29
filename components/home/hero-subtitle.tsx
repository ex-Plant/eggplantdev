import { cn } from "@/helpers/cn";

type HeroSubtitlePropsT = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

export function HeroSubtitle({ children, className, style }: HeroSubtitlePropsT) {
  return (
    <p className={cn("font-mono text-xs lg:text-sm tracking-[0.5em] uppercase text-gold/35", className)} style={style}>
      {children}
    </p>
  );
}
