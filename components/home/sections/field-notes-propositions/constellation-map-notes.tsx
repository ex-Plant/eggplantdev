// Codex: proposition 08, constellation-like map layout.
import { cn } from "@/helpers/cn";
import { FieldNotesSectionT } from "@/types/home-page-types";
import { FieldNotesIntro } from "./field-notes-intro";

type Props = {
  data: FieldNotesSectionT;
  className?: string;
};

const DOTS = ["left-[12%] top-[16%]", "left-[52%] top-[12%]", "right-[14%] top-[28%]", "left-[24%] bottom-[22%]", "right-[28%] bottom-[16%]"] as const;

export const ConstellationMapNotes = ({ data, className }: Props) => {
  return (
    <section id={data.id} className={cn("fest-grid scroll-mt-32", className)}>
      <FieldNotesIntro data={data} />

      <div className="640:col-span-8 1280:col-span-10 col-span-full 1280:col-start-7 mt-14 xl:mt-0 overflow-hidden">
        <div className="relative min-h-[38rem] overflow-hidden rounded-[2rem] border border-white/12 bg-[radial-gradient(circle_at_20%_20%,rgba(217,70,239,0.14),transparent_18%),radial-gradient(circle_at_80%_30%,rgba(140,153,241,0.22),transparent_22%),radial-gradient(circle_at_50%_80%,rgba(59,130,246,0.12),transparent_24%),#020202] p-6 md:p-8">
          <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 1000 700" preserveAspectRatio="none">
            <path d="M120 140 L520 110 L840 240 L240 520 L700 580" fill="none" stroke="rgba(217,70,239,0.32)" strokeWidth="1.5" strokeDasharray="10 10" />
          </svg>

          {data.notes.map((note, index) => (
            <article key={note.title} className={cn("relative z-10 mb-5 rounded-2xl border border-white/10 bg-black/50 p-5 xl:absolute xl:mb-0 xl:w-[15rem]", DOTS[index % DOTS.length])}>
              <div className="mb-4 h-3 w-3 rounded-full bg-white shadow-[0_0_18px_rgba(255,255,255,0.6)]" />
              <p className="font-mono text-sm uppercase tracking-[0.18em] text-lightgray/70">{note.eyebrow}</p>
              <h3 className="pt-4 font-mono text-24 uppercase">{note.title}</h3>
              <p className="pt-4 text-16 text-lightgray">{note.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
