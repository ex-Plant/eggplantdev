/* Created by Claude — proposition 15, holographic iridescent cards */
import { cn } from "@/helpers/cn";
import { FieldNotesSectionT } from "@/types/home-page-types";
import { FieldNotesIntro } from "./field-notes-intro";

type Props = {
  data: FieldNotesSectionT;
  className?: string;
};

const HOLO_GRADIENTS = [
  "bg-[linear-gradient(135deg,rgba(255,0,128,0.15),rgba(0,255,255,0.12)_40%,rgba(128,0,255,0.1)_70%,rgba(255,200,0,0.08))]",
  "bg-[linear-gradient(135deg,rgba(0,255,128,0.12),rgba(0,128,255,0.15)_40%,rgba(255,0,128,0.1)_70%,rgba(0,255,255,0.08))]",
  "bg-[linear-gradient(135deg,rgba(128,0,255,0.15),rgba(255,128,0,0.12)_40%,rgba(0,255,128,0.1)_70%,rgba(255,0,128,0.08))]",
  "bg-[linear-gradient(135deg,rgba(0,128,255,0.12),rgba(255,0,128,0.15)_40%,rgba(255,200,0,0.1)_70%,rgba(0,255,128,0.08))]",
  "bg-[linear-gradient(135deg,rgba(255,200,0,0.15),rgba(128,0,255,0.12)_40%,rgba(0,128,255,0.1)_70%,rgba(255,128,0,0.08))]",
] as const;

const BORDER_GRADIENTS = [
  "from-[#ff0080] via-[#00ffff] to-[#8000ff]",
  "from-[#00ff80] via-[#0080ff] to-[#ff0080]",
  "from-[#8000ff] via-[#ff8000] to-[#00ff80]",
  "from-[#0080ff] via-[#ff0080] to-[#ffc800]",
  "from-[#ffc800] via-[#8000ff] to-[#0080ff]",
] as const;

export const HologramStackNotes = ({ data, className }: Props) => {
  return (
    <section id={data.id} className={cn("fest-grid scroll-mt-32", className)}>
      <FieldNotesIntro data={data} />

      <div className="640:col-span-8 1280:col-span-10 col-span-full 1280:col-start-7 mt-14 xl:mt-0">
        <div className="flex flex-col gap-5">
          {data.notes.map((note, index) => {
            const holo = HOLO_GRADIENTS[index % HOLO_GRADIENTS.length];
            const border = BORDER_GRADIENTS[index % BORDER_GRADIENTS.length];
            const isWide = index === 0 || index === 3;

            return (
              <div
                key={note.title}
                className={cn(
                  "group relative overflow-hidden rounded-2xl p-px",
                  isWide ? "" : "md:ml-16 md:max-w-[85%]",
                )}
              >
                {/* Rainbow border */}
                <div className={cn("absolute inset-0 rounded-2xl bg-gradient-to-r opacity-40", border)} />

                <article className={cn("relative rounded-2xl p-6 md:p-8", holo)}>
                  {/* Holographic sheen */}
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(105deg,transparent_30%,rgba(255,255,255,0.08)_45%,transparent_55%)]" />

                  <div className="relative z-10">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-sm uppercase tracking-[0.2em] text-white/50">
                        {note.eyebrow}
                      </span>
                      {/* Prismatic dot */}
                      <div className={cn("h-2 w-2 rounded-full bg-gradient-to-r", border)} />
                    </div>
                    <h3 className="pt-4 font-mono text-24 md:text-34 uppercase text-white">
                      {note.title}
                    </h3>
                    <p className="pt-4 text-16 text-white/60 max-w-prose">{note.text}</p>
                  </div>
                </article>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
