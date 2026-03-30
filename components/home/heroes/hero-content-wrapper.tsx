import { cn } from "@/helpers/cn";

type HeroContentWrapperPropsT = {
  children: React.ReactNode;
  className?: string;
};

export function HeroContentWrapper({ children, className }: HeroContentWrapperPropsT) {
  return (
    <div
      className={cn(
        "relative z-10 mx-auto flex w-full max-w-[26rem] flex-col items-center px-6 text-center md:max-w-none md:px-0",
        className,
      )}
    >
      {children}
    </div>
  );
}
