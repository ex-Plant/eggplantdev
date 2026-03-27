// Codex: proposition 05, numbered mosaic with oversized numerals.
import { cn } from "@/helpers/cn";
import { FieldNotesSectionT } from "@/types/home-page-types";
import { FieldNotesIntro } from "./field-notes-intro";

type Props = {
  data: FieldNotesSectionT;
  className?: string;
};

export const NumberedMosaicNotes = ({ data, className }: Props) => {
  return (
    <section id={data.id} className={cn("fest-grid scroll-mt-32", className)}>
      <FieldNotesIntro data={data} />

      <div className="640:col-span-8 1280:col-span-10 col-span-full 1280:col-start-7 mt-14 grid grid-cols-1 gap-4 md:grid-cols-2 xl:mt-0 xl:grid-cols-3">
        {data.notes.map((note, index) => (
          <article
            key={note.title}
            className={cn(
              "relative overflow-hidden rounded-3xl border border-white/12 bg-linear-to-br from-[#1b1022] via-[#0c0a12] to-[#09090d] p-6 md:p-7",
              index === 0 ? "xl:col-span-2 min-h-[20rem]" : "",
              index === 1 ? "min-h-[20rem] xl:translate-y-12" : "",
              index === 2 ? "min-h-[17rem]" : "",
              index === 3 ? "xl:col-span-2 min-h-[18rem] xl:-translate-y-8" : "",
              index >= 4 ? "min-h-[18rem]" : "",
            )}
          >
            <p className="font-mono text-[5rem] leading-none text-[#d946ef]/14 md:text-[7rem]">{String(index + 1).padStart(2, "0")}</p>
            <div className="relative -mt-4 max-w-[30rem]">
              {note.eyebrow ? (
                <p className="text-16 text-lightgray/80 font-mono uppercase tracking-[0.12em]">{note.eyebrow}</p>
              ) : null}
              <h3 className="text-28 md:text-38 font-mono uppercase pt-4">{note.title}</h3>
              <p className="text-16 text-lightgray scalable pt-6">{note.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
