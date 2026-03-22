import { cn } from "@/helpers/cn";
import { SimpleSection } from "@/components/home/sections/simple-section";
import { Approach } from "@/components/home/sections/approach-full-section/approach";
import { FullSectionT } from "@/types/home-page-types";

type FullSectionPropsT = {
  data: FullSectionT;
  className?: string;
};

export const FullSection = ({ data, className }: FullSectionPropsT) => {
  return (
    <div className={cn("", className)}>
      <SimpleSection titleLine={data.titleLine} />
      <Approach approachArray={data.cards} foto={data.largePhoto} />
    </div>
  );
};
