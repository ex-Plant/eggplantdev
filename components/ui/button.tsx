import * as React from "react";
import { cn } from "@/helpers/cn";

const BUTTON_VARIANTS = {
  default:
    "border-gray5 text-16 text-copy-body border hover:bg-white/5 hover:text-copy-strong hover:shadow-[0_0_18px_rgba(255,255,255,0.08),0_0_42px_rgba(255,255,255,0.04)]",
  heroGlamPrimary:
    "border-gold/25 bg-gold/10 text-gold/70 border hover:bg-gold/16 hover:text-gold hover:shadow-[0_0_20px_rgba(218,165,32,0.22),0_0_52px_rgba(218,165,32,0.12)]",
  heroGlamSecondary:
    "border-hot-pink/20 text-hot-pink/50 border hover:bg-hot-pink/8 hover:text-hot-pink/80 hover:shadow-[0_0_20px_rgba(217,70,239,0.22),0_0_52px_rgba(217,70,239,0.12)]",
  heroCosmicPrimary:
    "border-gold/30 text-gold/60 border hover:bg-gold/10 hover:text-gold/85 hover:shadow-[0_0_16px_rgba(218,165,32,0.16),0_0_40px_rgba(218,165,32,0.08)]",
  heroCosmicSecondary:
    "border-gold-cream/30 text-gold-cream/60 border hover:bg-gold-cream/8 hover:text-gold-cream/85 hover:shadow-[0_0_16px_rgba(245,230,192,0.14),0_0_40px_rgba(245,230,192,0.07)]",
} as const;

const BUTTON_SIZES = {
  default: "h-8 px-4",
  hero: "px-5 py-2.5 text-sm tracking-wider uppercase",
} as const;

export type ButtonVariantT = keyof typeof BUTTON_VARIANTS;
export type ButtonSizeT = keyof typeof BUTTON_SIZES;

type ButtonPropsT = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariantT;
  size?: ButtonSizeT;
  asChild?: boolean;
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonPropsT>(function Button(
  { className, variant = "default", size = "default", type = "button", asChild = false, children, ...props },
  ref,
) {
  const buttonClassName = cn(
    "inline-flex cursor-pointer items-center justify-center rounded-full font-mono transition-[background-color,color,box-shadow] duration-300 ease-out outline-none focus-visible:ring-2 focus-visible:ring-gold/50 focus-visible:ring-offset-2 focus-visible:ring-offset-bgc disabled:pointer-events-none disabled:opacity-50",
    BUTTON_VARIANTS[variant],
    BUTTON_SIZES[size],
    className,
  );

  if (asChild && React.isValidElement(children)) {
    const child = children as React.ReactElement<{ className?: string }>;
    return React.cloneElement(child, {
      ...props,
      className: cn(buttonClassName, child.props.className),
    });
  }

  return (
    <button ref={ref} type={type} className={buttonClassName} {...props}>
      {children}
    </button>
  );
});
