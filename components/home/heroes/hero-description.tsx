import { cn } from "@/helpers/cn";

type HeroDescriptionPropsT = {
  children: React.ReactNode;
  className?: string;
};

export function HeroDescription({ children, className }: HeroDescriptionPropsT) {
  return (
    <p
      className={cn(
        "text-gold-caption/40 mx-auto mt-5 w-full max-w-md text-center font-mono text-sm leading-relaxed whitespace-pre-line md:mt-6 md:px-0 lg:max-w-xl lg:text-base",
        className,
      )}
    >
      {children}
    </p>
  );
}
