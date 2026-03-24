import { SimpleHeader } from "@/components/general/simple-header";
import { cn } from "@/helpers/cn";

export type SimpleSectionPropsT = {
  titleLine?: string[];
  text?: string;
  className?: string;
};

export const SimpleSection = ({ titleLine, text, className }: SimpleSectionPropsT) => {
  return (
    <section className={cn("fest-grid", className)}>
      <div className="640:col-span-7 col-span-full">
        {titleLine && <SimpleHeader title={titleLine} />}

        {text && (
          <div className={`text-16 text-lightgray md:text-20 scalable pt-10 lg:pt-16`}>
            <p>{text}</p>
          </div>
        )}
      </div>
    </section>
  );
};
