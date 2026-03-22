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
          ` flex items-center justify-center h-8 rounded-full border border-gray5 px-4 text-16 text-lightgray`,
          className
        )}
      >
        <span>{children}</span>
      </div>
    </>
  );
};
