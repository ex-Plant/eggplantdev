import Link from "next/link";
import { SimpleHeader } from "@/components/general/simple-header";
import { Button } from "@/components/ui/button";
import { cn } from "@/helpers/cn";

export type SimpleSectionPropsT = {
  id?: string;
  titleLine?: string[];
  text?: string;
  paragraphs?: string[];
  buttons?: {
    label: string;
    href: string;
  }[];
  className?: string;
};

export const SimpleSection = ({ id, titleLine, text, paragraphs, buttons, className }: SimpleSectionPropsT) => {
  const resolvedParagraphs = paragraphs?.length ? paragraphs : text ? [text] : [];

  return (
    <section id={id} className={cn("fest-grid scroll-mt-32", className)}>
      <div className="640:col-span-7 col-span-full">
        {titleLine && <SimpleHeader title={titleLine} />}

        {resolvedParagraphs.length > 0 && (
          <div className={`text-16 text-lightgray md:text-20 scalable space-y-5 pt-10 lg:pt-16`}>
            {resolvedParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        )}

        {buttons?.length ? (
          <div className="flex flex-wrap gap-3 pt-10 lg:pt-14">
            {buttons.map((button) => (
              <Link key={button.href + button.label} href={button.href}>
                <Button className="font-mono uppercase">{button.label}</Button>
              </Link>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
};
