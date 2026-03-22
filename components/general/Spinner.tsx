import { cn } from "@/helpers/cn";

type SpinnerPropsT = {
  className?: string;
};

export const Spinner = ({ className }: SpinnerPropsT) => {
  return (
    <div role="status" className={cn("flex items-center justify-center pointer-events-none", className)}>
      <img
        src="/logos/eggplant-logo.png"
        alt=""
        className="size-8 lg:size-12 animate-bounce"
      />
      <span className="sr-only">Loading...</span>
    </div>
  );
};
