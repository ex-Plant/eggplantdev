import { cn } from "@/helpers/cn";

type HeroContentWrapperPropsT = {
  children: React.ReactNode;
  className?: string;
};

export function HeroContentWrapper({ children, className }: HeroContentWrapperPropsT) {
  return (
    <div className={cn("relative z-10 mx-auto flex flex-col items-center text-center", className)}>{children}</div>
  );
}
