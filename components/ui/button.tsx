import { ReactNode } from "react";
import { cn } from "@/helpers/cn";

type ButtonProps = {
  children: ReactNode;
  className?: string;
};

export const Button = ({ children, className }: ButtonProps) => {
  return (
    <>
      <div
        className={cn(
          `border-gray5 text-16 text-lightgray flex h-8 items-center justify-center rounded-full border px-4`,
          className,
        )}
      >
        <span>{children}</span>
      </div>
    </>
  );
};
