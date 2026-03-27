// Codex: shared intro/CTA block for field-notes proposition sections.
import Link from "next/link";
import { SimpleHeader } from "@/components/general/simple-header";
import { Button } from "@/components/ui/button";
import { FieldNotesSectionT } from "@/types/home-page-types";

type FieldNotesIntroPropsT = {
  data: FieldNotesSectionT;
};

export const FieldNotesIntro = ({ data }: FieldNotesIntroPropsT) => {
  return (
    <div className="640:col-span-7 1280:col-span-5 col-span-full pr-0 xl:pr-10">
      <SimpleHeader title={data.titleLine} />

      {data.intro ? <p className="text-16 text-lightgray md:text-20 scalable max-w-[32rem] pt-10 text-balance">{data.intro}</p> : null}

      {data.buttons?.length ? (
        <div className="flex flex-wrap gap-3 pt-10 lg:pt-14">
          {data.buttons.map((button) => (
            <Link key={button.href + button.label} href={button.href}>
              <Button className="font-mono uppercase">{button.label}</Button>
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  );
};
