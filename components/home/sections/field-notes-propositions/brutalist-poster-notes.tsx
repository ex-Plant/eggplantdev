// Codex: proposition 07, brutalist poster wall.
import { cn } from "@/helpers/cn";
import { FieldNotesSectionT } from "@/types/home-page-types";
import { FieldNotesIntro } from "./field-notes-intro";

type Props = {
  data: FieldNotesSectionT;
  className?: string;
};

export const BrutalistPosterNotes = ({ data, className }: Props) => {
  return (
    <section id={data.id} className={cn("fest-grid scroll-mt-32", className)}>
      <FieldNotesIntro data={data} />

      <div className="640:col-span-8 1280:col-span-10 col-span-full 1280:col-start-7 mt-14 xl:mt-0">
        <div className="grid gap-4 overflow-hidden md:grid-cols-2">
          {data.notes.map((note, index) => (
            <article
              key={note.title}
              className={cn(
                "overflow-hidden border border-white/15 p-6 md:p-8",
                index % 2 === 0 ? "bg-[#f3eef6] text-black" : "bg-[#130d18] text-white",
                index === 0 ? "md:rotate-[-1.5deg]" : "",
                index === 1 ? "md:translate-y-10" : "",
                index === 2 ? "md:-translate-y-6" : "",
                index === 3 ? "md:rotate-[1deg]" : "",
              )}
            >
              <p className={cn("font-mono text-sm uppercase tracking-[0.18em]", index % 2 === 0 ? "text-black/55" : "text-copy-body")}>
                {note.eyebrow}
              </p>
              <h3 className="pt-6 font-mono text-40 md:text-56 uppercase leading-none">{note.title}</h3>
              <p className={cn("pt-10 text-16 max-w-[26rem]", index % 2 === 0 ? "text-black/75" : "text-copy-body")}>{note.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
