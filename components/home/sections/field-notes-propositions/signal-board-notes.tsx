// Codex: proposition 03, dense signal-board UI.
import { cn } from "@/helpers/cn";
import { FieldNotesSectionT } from "@/types/home-page-types";
import { FieldNotesIntro } from "./field-notes-intro";

type Props = {
  data: FieldNotesSectionT;
  className?: string;
};

export const SignalBoardNotes = ({ data, className }: Props) => {
  return (
    <section id={data.id} className={cn("fest-grid scroll-mt-32", className)}>
      <FieldNotesIntro data={data} />

      <div className="640:col-span-8 1280:col-span-10 col-span-full 1280:col-start-7 mt-14 xl:mt-0">
        <div className="flex flex-wrap gap-3 pb-6">
          {data.notes.map((note, index) => (
            <div
              key={note.title + "-chip"}
              className={cn(
                "rounded-full border border-white/14 bg-[#150d18]/70 px-4 py-2 font-mono text-sm uppercase text-lightgray/90 shadow-[0_0_18px_rgba(217,70,239,0.08)]",
                index % 3 === 0 ? "translate-y-0" : index % 3 === 1 ? "md:translate-y-3" : "md:-translate-y-2",
              )}
            >
              {note.title}
            </div>
          ))}
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-12">
          {data.notes.map((note, index) => (
            <article
              key={note.title}
              className={cn(
                "relative overflow-hidden rounded-3xl border border-white/12 bg-linear-to-br from-[#1a1120] via-[#09090d] to-[#09090d] p-6 md:p-7",
                index === 0 ? "xl:col-span-7 min-h-[18rem]" : "",
                index === 1 ? "xl:col-span-5 min-h-[14rem] xl:mt-12" : "",
                index === 2 ? "xl:col-span-4 min-h-[15rem] xl:-mt-8" : "",
                index === 3 ? "xl:col-span-4 min-h-[16rem]" : "",
                index >= 4 ? "xl:col-span-4 min-h-[14rem] xl:mt-10" : "",
              )}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(217,70,239,0.18),transparent_42%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.12),transparent_38%)]" />
              <div className="relative z-10 max-w-[28rem]">
                {note.eyebrow ? (
                  <p className="text-16 text-lightgray/80 font-mono uppercase tracking-[0.12em]">{note.eyebrow}</p>
                ) : null}
                <h3 className="text-28 md:text-34 font-mono uppercase pt-5">{note.title}</h3>
                <p className="text-16 text-lightgray scalable pt-6">{note.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
