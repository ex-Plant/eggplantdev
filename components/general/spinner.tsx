import { cn } from "@/helpers/cn";

type SpinnerPropsT = {
  className?: string;
};

export const Spinner = ({ className }: SpinnerPropsT) => {
  return (
    <div role="status" className={cn("pointer-events-none flex items-center justify-center", className)}>
      <img src="/logos/eggplant-logo.png" alt="" className="size-8 animate-bounce lg:size-12" />
      <span className="sr-only">Loading...</span>
    </div>
  );
};
