import * as React from "react";
import { cn } from "@/helpers/cn";

const BUTTON_VARIANTS = {
  default:
    "border-gray5 text-16 text-lightgray border",
  heroGlamPrimary:
    "border-gold/25 bg-gold/10 text-gold/70 border",
  heroGlamSecondary:
    "border-hot-pink/20 text-hot-pink/50 border",
  heroCosmicPrimary:
    "border-gold/30 text-gold/60 border",
  heroCosmicSecondary:
    "border-gold-cream/30 text-gold-cream/60 border",
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
    "inline-flex items-center justify-center rounded-full font-mono transition-colors outline-none focus-visible:ring-2 focus-visible:ring-gold/50 focus-visible:ring-offset-2 focus-visible:ring-offset-bgc disabled:pointer-events-none disabled:opacity-50",
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
    <button
      ref={ref}
      type={type}
      className={buttonClassName}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = "Button";
