/* Created by Claude — proposition 14, scattered polaroid notes */
import { cn } from "@/helpers/cn";
import { FieldNotesSectionT } from "@/types/home-page-types";
import { FieldNotesIntro } from "./field-notes-intro";

type Props = {
  data: FieldNotesSectionT;
  className?: string;
};

const SCATTER = [
  "md:rotate-[-4deg] md:translate-x-4 md:translate-y-2",
  "md:rotate-[3deg] md:-translate-x-2 md:translate-y-8",
  "md:rotate-[-2deg] md:translate-x-8 md:-translate-y-4",
  "md:rotate-[5deg] md:-translate-x-6 md:translate-y-4",
  "md:rotate-[-3deg] md:translate-x-2 md:translate-y-6",
] as const;

const TAPE_POSITIONS = [
  "left-1/4 -top-2 rotate-[-8deg]",
  "right-1/3 -top-2 rotate-[12deg]",
  "left-1/3 -top-2 rotate-[-3deg]",
  "right-1/4 -top-2 rotate-[6deg]",
  "left-2/5 -top-2 rotate-[-10deg]",
] as const;

export const PolaroidScatterNotes = ({ data, className }: Props) => {
  return (
    <section id={data.id} className={cn("fest-grid scroll-mt-32", className)}>
      <FieldNotesIntro data={data} />

      <div className="640:col-span-8 1280:col-span-10 col-span-full 1280:col-start-7 mt-14 xl:mt-0">
        <div className="relative overflow-hidden rounded-2xl bg-[#1a1714] p-6 md:p-10">
          {/* Cork/paper texture hint */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,200,100,0.04),transparent_40%),radial-gradient(circle_at_70%_80%,rgba(255,200,100,0.03),transparent_40%)]" />

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {data.notes.map((note, index) => (
              <article
                key={note.title}
                className={cn(
                  "relative bg-[#f5f0e8] p-5 pb-6 text-black shadow-[4px_6px_20px_rgba(0,0,0,0.5)]",
                  SCATTER[index % SCATTER.length],
                  index === 0 ? "xl:col-span-2" : "",
                )}
              >
                {/* Tape strip */}
                <div
                  className={cn(
                    "absolute h-5 w-14 bg-[#d4c9a8]/70",
                    TAPE_POSITIONS[index % TAPE_POSITIONS.length],
                  )}
                />

                <p className="font-mono text-sm uppercase tracking-[0.15em] text-black/40">
                  {note.eyebrow}
                </p>
                <h3 className="pt-3 font-mono text-20 md:text-24 uppercase text-black/90">
                  {note.title}
                </h3>
                <p className="pt-3 text-16 text-black/60 leading-relaxed">{note.text}</p>

                {/* Bottom edge shadow like a polaroid */}
                <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-[#ebe5d5] to-transparent" />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
