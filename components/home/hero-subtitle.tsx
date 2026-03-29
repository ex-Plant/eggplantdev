import { cn } from "@/helpers/cn";

type HeroSubtitlePropsT = {
  children: React.ReactNode;
  className?: string;
};

export function HeroSubtitle({ children, className }: HeroSubtitlePropsT) {
  return (
    <p className={cn("font-mono text-xs tracking-[0.5em] uppercase text-gold/35", className)}>
      {children}
    </p>
  );
}
