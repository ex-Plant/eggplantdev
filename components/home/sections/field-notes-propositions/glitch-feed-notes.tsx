/* Created by Claude — proposition 11, VHS glitch feed */
import { cn } from "@/helpers/cn";
import { FieldNotesSectionT } from "@/types/home-page-types";
import { FieldNotesIntro } from "./field-notes-intro";

type Props = {
  data: FieldNotesSectionT;
  className?: string;
};

const CHANNEL_OFFSETS = [
  { r: "translate-x-[2px] translate-y-[-1px]", b: "translate-x-[-2px] translate-y-[1px]" },
  { r: "translate-x-[-3px] translate-y-[1px]", b: "translate-x-[3px] translate-y-[-1px]" },
  { r: "translate-x-[1px] translate-y-[2px]", b: "translate-x-[-1px] translate-y-[-2px]" },
  { r: "translate-x-[-2px] translate-y-[-2px]", b: "translate-x-[2px] translate-y-[2px]" },
  { r: "translate-x-[3px] translate-y-[0px]", b: "translate-x-[-3px] translate-y-[0px]" },
] as const;

export const GlitchFeedNotes = ({ data, className }: Props) => {
  return (
    <section id={data.id} className={cn("fest-grid scroll-mt-32", className)}>
      <FieldNotesIntro data={data} />

      <div className="640:col-span-8 1280:col-span-10 col-span-full 1280:col-start-7 mt-14 xl:mt-0">
        {/* Scanline overlay */}
        <div className="relative overflow-hidden rounded-xl border border-white/8 bg-black">
          <div
            className="pointer-events-none absolute inset-0 z-20"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(0,0,0,0.15) 1px, rgba(0,0,0,0.15) 2px)",
            }}
          />
          {/* Static noise bar */}
          <div className="h-1 w-full bg-gradient-to-r from-transparent via-red/40 to-transparent" />

          <div className="divide-y divide-white/5">
            {data.notes.map((note, index) => {
              const offset = CHANNEL_OFFSETS[index % CHANNEL_OFFSETS.length];
              return (
                <article key={note.title} className="relative px-5 py-7 md:px-8 md:py-10">
                  {/* RGB channel split on title */}
                  <div className="relative">
                    <h3
                      aria-hidden="true"
                      className={cn(
                        "absolute top-0 left-0 font-mono text-28 md:text-40 uppercase text-[#ff0040]/30 mix-blend-screen",
                        offset.r,
                      )}
                    >
                      {note.title}
                    </h3>
                    <h3
                      aria-hidden="true"
                      className={cn(
                        "absolute top-0 left-0 font-mono text-28 md:text-40 uppercase text-[#0040ff]/30 mix-blend-screen",
                        offset.b,
                      )}
                    >
                      {note.title}
                    </h3>
                    <h3 className="relative font-mono text-28 md:text-40 uppercase text-white">
                      {note.title}
                    </h3>
                  </div>

                  <div className="mt-4 flex items-start gap-4 md:gap-8">
                    <span className="shrink-0 font-mono text-16 uppercase text-[#ff0040]/70 tracking-widest">
                      {note.eyebrow}
                    </span>
                    <p className="text-16 text-lightgray/80 max-w-prose">{note.text}</p>
                  </div>

                  {/* Random glitch bar */}
                  {index % 3 === 1 && (
                    <div className="absolute right-0 top-1/2 h-[2px] w-[40%] bg-gradient-to-r from-[#ff0040]/50 via-[#00ff88]/30 to-transparent" />
                  )}
                </article>
              );
            })}
          </div>

          {/* Bottom static */}
          <div className="h-1 w-full bg-gradient-to-r from-transparent via-[#0040ff]/30 to-transparent" />
        </div>
      </div>
    </section>
  );
};
