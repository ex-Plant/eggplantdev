import { cn } from "@/helpers/cn";

type HeroDescriptionPropsT = {
  children: React.ReactNode;
  className?: string;
};

export function HeroDescription({ children, className }: HeroDescriptionPropsT) {
  return (
    <p className={cn("max-w-md font-mono text-sm leading-relaxed text-gold-caption/40", className)}>
      {children}
    </p>
  );
}
