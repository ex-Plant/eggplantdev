import { cn } from "@/helpers/cn";

type HeroDescriptionPropsT = {
  children: React.ReactNode;
  className?: string;
};

export function HeroDescription({ children, className }: HeroDescriptionPropsT) {
  return (
    <p className={cn("mt-6 max-w-md lg:max-w-lg font-mono text-sm lg:text-base leading-relaxed text-gold-caption/40", className)}>
      {children}
    </p>
  );
}
