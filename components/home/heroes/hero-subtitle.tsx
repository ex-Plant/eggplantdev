import { cn } from "@/helpers/cn";

type HeroSubtitlePropsT = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

export function HeroSubtitle({ children, className, style }: HeroSubtitlePropsT) {
  return (
    <p className={cn("mx-auto w-full text-center font-mono text-xs tracking-[0.5em] uppercase text-gold/35 lg:text-sm", className)} style={style}>
      {children}
    </p>
  );
}
