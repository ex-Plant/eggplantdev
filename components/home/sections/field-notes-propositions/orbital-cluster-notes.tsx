// Codex: proposition 06, orbital cluster around empty space.
import { cn } from "@/helpers/cn";
import { FieldNotesSectionT } from "@/types/home-page-types";
import { FieldNotesIntro } from "./field-notes-intro";

type Props = {
  data: FieldNotesSectionT;
  className?: string;
};

const POSITIONS = [
  "xl:left-[6%] xl:top-[8%]",
  "xl:left-[42%] xl:top-[0%]",
  "xl:right-[5%] xl:top-[18%]",
  "xl:left-[18%] xl:bottom-[10%]",
  "xl:right-[18%] xl:bottom-[0%]",
] as const;

export const OrbitalClusterNotes = ({ data, className }: Props) => {
  return (
    <section id={data.id} className={cn("fest-grid scroll-mt-32", className)}>
      <FieldNotesIntro data={data} />

      <div className="640:col-span-8 1280:col-span-10 col-span-full 1280:col-start-7 mt-16 xl:mt-0">
        <div className="relative min-h-[36rem] overflow-hidden rounded-[2rem] border border-white/12 bg-[radial-gradient(circle_at_center,rgba(217,70,239,0.18),transparent_30%),radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.14),transparent_24%),radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_30%),#050507] p-4 md:p-6">
          <div className="absolute inset-[10%] rounded-full border border-white/8" />
          <div className="absolute inset-[22%] rounded-full border border-white/8" />
          <div className="absolute inset-[34%] rounded-full border border-white/8" />

          {data.notes.map((note, index) => (
            <article
              key={note.title}
              className={cn(
                "relative z-10 mb-4 rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(27,16,34,0.9),rgba(5,5,7,0.85))] p-5 xl:absolute xl:mb-0 xl:w-[17rem]",
                POSITIONS[index % POSITIONS.length],
              )}
            >
              <p className="font-mono text-sm uppercase tracking-[0.18em] text-lightgray/70">{note.eyebrow}</p>
              <h3 className="pt-4 font-mono text-24 uppercase">{note.title}</h3>
              <p className="text-16 text-lightgray pt-5">{note.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
