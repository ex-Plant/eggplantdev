// Codex: proposition 04, alternating timeline.
import { cn } from "@/helpers/cn";
import { FieldNotesSectionT } from "@/types/home-page-types";
import { FieldNotesIntro } from "./field-notes-intro";

type Props = {
  data: FieldNotesSectionT;
  className?: string;
};

export const TimelineNotes = ({ data, className }: Props) => {
  return (
    <section id={data.id} className={cn("fest-grid scroll-mt-32", className)}>
      <FieldNotesIntro data={data} />

      <div className="640:col-span-8 1280:col-span-9 col-span-full 1280:col-start-8 mt-14 xl:mt-0">
        <div className="relative overflow-hidden">
          <div className="absolute top-0 bottom-0 left-[13px] w-px bg-linear-to-b from-[#3b82f6]/25 via-[#d946ef]/40 to-[#8b5cf6]/25 md:left-1/2 md:-translate-x-1/2" />

          <div className="flex flex-col gap-8">
            {data.notes.map((note, index) => (
              <div
                key={note.title}
                className={cn("relative pl-10 md:grid md:grid-cols-2 md:gap-10 md:pl-0", index % 2 === 0 ? "" : "")}
              >
                <div className={cn("hidden md:block", index % 2 === 0 ? "" : "md:order-2")} />

                <article
                  className={cn(
                    "relative rounded-3xl border border-white/12 bg-linear-to-br from-[#120d16]/90 to-[#09090d] p-6 md:p-7 shadow-[0_0_30px_rgba(139,92,246,0.08)]",
                    index % 2 === 0 ? "md:mr-8" : "md:ml-8 md:order-2",
                  )}
                >
                  <span className="absolute top-8 -left-[34px] h-3 w-3 rounded-full border border-white/40 bg-bgc md:left-auto md:right-[-46px]" />
                  {note.eyebrow ? (
                    <p className="text-16 text-lightgray/80 font-mono uppercase tracking-[0.12em]">{note.eyebrow}</p>
                  ) : null}
                  <h3 className="text-28 md:text-34 font-mono uppercase pt-4">{note.title}</h3>
                  <p className="text-16 text-lightgray scalable pt-6">{note.text}</p>
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
