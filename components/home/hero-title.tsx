import { cn } from "@/helpers/cn";

type HeroTitlePropsT = {
  line1: string;
  line2?: string;
  line3?: string;
  /** Tailwind class for line1 color (default: text-gold) */
  classLine1?: string;
  /** Tailwind class for line2 color (default: text-gold-cream) */
  classLine2?: string;
  /** Tailwind class for line3 color (default: same as line1) */
  classLine3?: string;
  /** Inline styles per line (for dynamic palette colors) */
  styleLine1?: React.CSSProperties;
  styleLine2?: React.CSSProperties;
  styleLine3?: React.CSSProperties;
  className?: string;
};

export function HeroTitle({
  line1,
  line2,
  line3,
  classLine1 = "text-gold",
  classLine2 = "text-gold-cream",
  classLine3,
  styleLine1,
  styleLine2,
  styleLine3,
  className,
}: HeroTitlePropsT) {
  return (
    <h1 className={cn("text-48 md:text-72 font-mono leading-none uppercase", className)}>
      <span className={cn("block", classLine1)} style={styleLine1}>
        {line1}
      </span>
      {line2 && (
        <span className={cn("block", classLine2)} style={styleLine2}>
          {line2}
        </span>
      )}
      {line3 && (
        <span className={cn("block", classLine3 ?? classLine1)} style={styleLine3}>
          {line3}
        </span>
      )}
    </h1>
  );
}
