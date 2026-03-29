/* Created by Claude — proposition 12, neon bar sign aesthetic */
import { cn } from "@/helpers/cn";
import { FieldNotesSectionT } from "@/types/home-page-types";
import { FieldNotesIntro } from "./field-notes-intro";

type Props = {
  data: FieldNotesSectionT;
  className?: string;
};

const NEON_COLORS = [
  { border: "border-[#ff2d7b]", glow: "shadow-[0_0_20px_rgba(255,45,123,0.4),0_0_60px_rgba(255,45,123,0.15)]", text: "text-[#ff2d7b]" },
  { border: "border-[#00f0ff]", glow: "shadow-[0_0_20px_rgba(0,240,255,0.4),0_0_60px_rgba(0,240,255,0.15)]", text: "text-[#00f0ff]" },
  { border: "border-[#b4ff39]", glow: "shadow-[0_0_20px_rgba(180,255,57,0.4),0_0_60px_rgba(180,255,57,0.15)]", text: "text-[#b4ff39]" },
  { border: "border-[#ff8c00]", glow: "shadow-[0_0_20px_rgba(255,140,0,0.4),0_0_60px_rgba(255,140,0,0.15)]", text: "text-[#ff8c00]" },
  { border: "border-[#c77dff]", glow: "shadow-[0_0_20px_rgba(199,125,255,0.4),0_0_60px_rgba(199,125,255,0.15)]", text: "text-[#c77dff]" },
] as const;

export const NeonLoungeNotes = ({ data, className }: Props) => {
  return (
    <section id={data.id} className={cn("fest-grid scroll-mt-32", className)}>
      <FieldNotesIntro data={data} />

      <div className="640:col-span-8 1280:col-span-10 col-span-full 1280:col-start-7 mt-14 xl:mt-0 overflow-hidden">
        <div className="relative overflow-hidden rounded-2xl bg-[#0a0a0f] p-4 md:p-6">
          {/* Ambient glow spots */}
          <div className="pointer-events-none absolute -left-20 -top-20 h-60 w-60 rounded-full bg-[#ff2d7b]/8 blur-3xl" />
          <div className="pointer-events-none absolute -right-20 top-1/3 h-60 w-60 rounded-full bg-[#00f0ff]/8 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 left-1/3 h-60 w-60 rounded-full bg-[#b4ff39]/6 blur-3xl" />

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {data.notes.map((note, index) => {
              const neon = NEON_COLORS[index % NEON_COLORS.length];
              return (
                <article
                  key={note.title}
                  className={cn(
                    "relative rounded-xl border-2 bg-black/75 p-5 md:p-6",
                    neon.border,
                    neon.glow,
                    index === 0 ? "xl:col-span-2 xl:row-span-2" : "",
                  )}
                >
                  <p className={cn("font-mono text-sm uppercase tracking-[0.2em]", neon.text)}>
                    {note.eyebrow}
                  </p>
                  <h3 className="pt-4 font-mono text-24 md:text-28 uppercase text-primary">
                    {note.title}
                  </h3>
                  <p className="pt-4 text-16 text-copy-body">{note.text}</p>

                  {/* Neon flicker line */}
                  <div className={cn("absolute bottom-0 left-4 right-4 h-px", neon.border.replace("border-", "bg-"))} />
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
