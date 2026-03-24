import { Quotes } from "@/components/home/sections/quotes/quotes";
import { SimpleSection } from "@/components/home/sections/simple-section";
import { QuoteSectionT } from "@/types/home-page-types";

type QuoteSectionPropsT = {
  data: QuoteSectionT;
  singleProjectPage?: boolean;
  className?: string;
};

export const QuoteSection = ({ data, className }: QuoteSectionPropsT) => {
  return (
    <div className={className}>
      <SimpleSection titleLine={data.titleLine} />
      <Quotes data={data.quotes} />
    </div>
  );
};
