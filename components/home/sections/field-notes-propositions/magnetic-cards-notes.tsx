// Codex: proposition 10, floating magnetic cards.
import { cn } from "@/helpers/cn";
import { FieldNotesSectionT } from "@/types/home-page-types";
import { FieldNotesIntro } from "./field-notes-intro";

type Props = {
  data: FieldNotesSectionT;
  className?: string;
};

const TRANSFORMS = [
  "md:rotate-[-6deg] md:translate-y-2",
  "md:rotate-[5deg] md:-translate-y-2",
  "md:rotate-[-3deg] md:translate-y-6",
  "md:rotate-[7deg] md:-translate-y-4",
  "md:rotate-[-5deg]",
] as const;

export const MagneticCardsNotes = ({ data, className }: Props) => {
  return (
    <section id={data.id} className={cn("fest-grid scroll-mt-32", className)}>
      <FieldNotesIntro data={data} />

      <div className="640:col-span-8 1280:col-span-10 col-span-full 1280:col-start-7 mt-14 xl:mt-0">
        <div className="grid gap-5 overflow-hidden md:grid-cols-2 xl:grid-cols-3">
          {data.notes.map((note, index) => (
            <article
              key={note.title}
              className={cn(
                "relative rounded-[1.5rem] border border-white/12 bg-[linear-gradient(180deg,rgba(217,70,239,0.18),rgba(59,130,246,0.07)_18%,rgba(255,255,255,0.04))] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35),0_0_40px_rgba(217,70,239,0.08)]",
                TRANSFORMS[index % TRANSFORMS.length],
                index === 0 ? "xl:col-span-2" : "",
              )}
            >
              <div className="absolute right-5 top-5 h-4 w-4 rounded-full bg-red/70 shadow-[0_0_20px_rgba(255,117,117,0.55)]" />
              <p className="font-mono text-sm uppercase tracking-[0.18em] text-lightgray/65">{note.eyebrow}</p>
              <h3 className="pt-8 font-mono text-28 uppercase">{note.title}</h3>
              <p className="pt-5 text-16 text-lightgray">{note.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
