// Codex: proposition 02, stacked rows with offset pacing.
import { cn } from "@/helpers/cn";
import { FieldNotesSectionT } from "@/types/home-page-types";
import { FieldNotesIntro } from "./field-notes-intro";

type Props = {
  data: FieldNotesSectionT;
  className?: string;
};

export const StackedRowsNotes = ({ data, className }: Props) => {
  return (
    <section id={data.id} className={cn("fest-grid scroll-mt-32", className)}>
      <FieldNotesIntro data={data} />

      <div className="640:col-span-8 1280:col-span-9 col-span-full 1280:col-start-8 mt-14 flex flex-col gap-4 xl:mt-0">
        {data.notes.map((note, index) => (
          <article
            key={note.title}
            className={cn(
              "relative overflow-hidden rounded-[2rem] border border-white/10 bg-linear-to-r from-[#1a1221]/85 via-[#09090d]/92 to-[#09090d]/92 px-6 py-8 md:px-8 md:py-10",
              index % 2 === 0 ? "xl:mr-12" : "xl:ml-18",
              index === 0 ? "min-h-[16rem]" : index === 2 ? "min-h-[20rem]" : "min-h-[18rem]",
            )}
          >
            <div className="absolute inset-y-0 left-0 w-px bg-linear-to-b from-transparent via-[#d946ef]/55 to-transparent" />
            <div className="grid gap-8 md:grid-cols-[80px_minmax(0,1fr)]">
              <p className="text-48 md:text-64 text-lightgray/40 font-mono leading-none">{String(index + 1).padStart(2, "0")}</p>
              <div className="max-w-[42rem]">
                {note.eyebrow ? (
                  <p className="text-16 text-lightgray/80 font-mono uppercase tracking-[0.12em]">{note.eyebrow}</p>
                ) : null}
                <h3 className="text-28 md:text-40 font-mono uppercase pt-3">{note.title}</h3>
                <p className="text-16 text-lightgray scalable pt-6">{note.text}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
