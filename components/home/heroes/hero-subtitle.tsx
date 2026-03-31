import { cn } from "@/helpers/cn";

type HeroSubtitlePropsT = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

export function HeroSubtitle({ children, className, style }: HeroSubtitlePropsT) {
  return (
    <p
      className={cn(
        "text-hot-pink/40 mx-auto mb-12 w-full text-center font-mono text-xs tracking-[0.5em] whitespace-pre-line uppercase lg:text-sm",
        // text-gold/35
        className,
      )}
      style={style}
    >
      {children}
    </p>
  );
}
