// Codex: proposition 01, asymmetrical editorial grid.
import { cn } from "@/helpers/cn";
import { FieldNotesSectionT } from "@/types/home-page-types";
import { FieldNotesIntro } from "./field-notes-intro";

type Props = {
  data: FieldNotesSectionT;
  className?: string;
};

const CARD_CLASSES: Record<NonNullable<FieldNotesSectionT["notes"][number]["size"]>, string> = {
  standard: "xl:col-span-2 min-h-[18rem]",
  tall: "xl:col-span-2 xl:row-span-2 min-h-[24rem] xl:min-h-[30rem]",
  wide: "xl:col-span-4 min-h-[16rem]",
};

export const AsymmetricGridNotes = ({ data, className }: Props) => {
  return (
    <section id={data.id} className={cn("fest-grid scroll-mt-32", className)}>
      <FieldNotesIntro data={data} />

      <div className="640:col-span-8 1280:col-span-10 col-span-full 1280:col-start-7 mt-14 grid auto-rows-fr grid-cols-1 gap-4 md:grid-cols-2 xl:mt-0 xl:grid-cols-6 xl:gap-5">
        {data.notes.map((note, index) => {
          const size = note.size ?? "standard";

          return (
            <article
              key={note.title}
              className={cn(
                "grit-subtle relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/12 bg-linear-to-br from-[#25162d]/90 via-[#0c0a14]/92 to-[#060608] p-6 md:p-7",
                CARD_CLASSES[size],
                index % 3 === 1 ? "xl:translate-y-10" : "",
                index % 3 === 2 ? "xl:-translate-y-6" : "",
              )}
            >
              <div className="absolute inset-0 bg-linear-to-br from-[#d946ef]/16 via-transparent to-[#3b82f6]/10 opacity-90" />

              <div className="relative z-10">
                {note.eyebrow ? (
                  <p className="text-16 text-lightgray/80 font-mono uppercase tracking-[0.12em]">{note.eyebrow}</p>
                ) : null}
                <h3 className="text-28 md:text-34 font-mono uppercase pt-6">{note.title}</h3>
              </div>

              <p className="text-16 text-lightgray scalable relative z-10 max-w-[28rem] pt-8">{note.text}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};
