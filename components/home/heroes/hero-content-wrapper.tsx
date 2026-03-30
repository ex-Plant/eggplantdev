import { ReactNode } from "react";

type HeroContentWrapperPropsT = {
  /** Content above center (subtitle, eggplant) — pushed to bottom of top half */
  above?: ReactNode;
  /** Content below center (title, description, buttons) */
  children: ReactNode;
};

export function HeroContentWrapper({ above, children }: HeroContentWrapperPropsT) {
  return (
    <div className="grid-col-1 grid grow grid-rows-2 items-center px-4">
      <div className="flex h-full flex-col justify-end">{above}</div>
      <div className="h-full pt-4">{children}</div>
    </div>
  );
}
