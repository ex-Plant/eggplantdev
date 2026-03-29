import { cn } from "@/helpers/cn";

type HeroTitlePropsT = {
  line1: string;
  line2?: string;
  /** Tailwind class for line1 color (default: text-gold) */
  classLine1?: string;
  /** Tailwind class for line2 color (default: text-gold-cream) */
  classLine2?: string;
  className?: string;
};

export function HeroTitle({ line1, line2, classLine1 = "text-gold", classLine2 = "text-gold-cream", className }: HeroTitlePropsT) {
  return (
    <h1 className={cn("text-48 md:text-72 font-mono leading-none uppercase", className)}>
      <span className={cn("block", classLine1)}>
        {line1}
      </span>
      {line2 && (
        <span className={cn("block", classLine2)}>
          {line2}
        </span>
      )}
    </h1>
  );
}
