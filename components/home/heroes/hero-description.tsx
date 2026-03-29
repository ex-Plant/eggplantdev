import { cn } from "@/helpers/cn";

type HeroDescriptionPropsT = {
  children: React.ReactNode;
  className?: string;
};

export function HeroDescription({ children, className }: HeroDescriptionPropsT) {
  return (
    <p className={cn("mx-auto mt-5 w-full max-w-md px-4 text-center font-mono text-sm leading-relaxed text-gold-caption/40 md:mt-6 md:px-0 lg:max-w-lg lg:text-base", className)}>
      {children}
    </p>
  );
}
