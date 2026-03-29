/* Created by Claude — proposition 16, neon lounge × sacred geometry */
import { cn } from "@/helpers/cn";
import { FieldNotesSectionT } from "@/types/home-page-types";
import { FieldNotesIntro } from "./field-notes-intro";

type Props = {
  data: FieldNotesSectionT;
  className?: string;
};

const GREENS = [
  { border: "border-[#10ffaa]", glow: "shadow-[0_0_25px_rgba(16,255,170,0.35),0_0_80px_rgba(16,255,170,0.1)]", text: "text-[#10ffaa]", bg: "rgba(16,255,170,0.06)" },
  { border: "border-[#39ff14]", glow: "shadow-[0_0_25px_rgba(57,255,20,0.35),0_0_80px_rgba(57,255,20,0.1)]", text: "text-[#39ff14]", bg: "rgba(57,255,20,0.06)" },
  { border: "border-[#00e676]", glow: "shadow-[0_0_25px_rgba(0,230,118,0.35),0_0_80px_rgba(0,230,118,0.1)]", text: "text-[#00e676]", bg: "rgba(0,230,118,0.06)" },
  { border: "border-[#0d9488]", glow: "shadow-[0_0_25px_rgba(13,148,136,0.4),0_0_80px_rgba(13,148,136,0.12)]", text: "text-[#0d9488]", bg: "rgba(13,148,136,0.08)" },
  { border: "border-[#4ade80]", glow: "shadow-[0_0_25px_rgba(74,222,128,0.35),0_0_80px_rgba(74,222,128,0.1)]", text: "text-[#4ade80]", bg: "rgba(74,222,128,0.06)" },
] as const;

export const SacredNeonNotes = ({ data, className }: Props) => {
  return (
    <section id={data.id} className={cn("fest-grid scroll-mt-32", className)}>
      <FieldNotesIntro data={data} />

      <div className="640:col-span-8 1280:col-span-10 col-span-full 1280:col-start-7 mt-14 xl:mt-0 overflow-hidden">
        <div className="relative overflow-hidden rounded-2xl bg-[#060809] p-5 md:p-8">
          {/* Sacred geometry — Flower of Life pattern */}
          <svg
            className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.07]"
            viewBox="0 0 600 800"
            preserveAspectRatio="xMidYMid slice"
          >
            {/* Central circles forming flower of life */}
            {[
              [300, 400], [300, 320], [300, 480],
              [369, 360], [231, 360], [369, 440], [231, 440],
              [300, 240], [300, 560],
              [438, 320], [162, 320], [438, 480], [162, 480],
              [369, 280], [231, 280], [369, 520], [231, 520],
              [438, 400], [162, 400],
            ].map(([cx, cy], i) => (
              <circle
                key={i}
                cx={cx}
                cy={cy}
                r={80}
                fill="none"
                stroke={i % 3 === 0 ? "#10ffaa" : i % 3 === 1 ? "#39ff14" : "#00e676"}
                strokeWidth="0.6"
              />
            ))}
            {/* Outer containing circle */}
            <circle cx={300} cy={400} r={260} fill="none" stroke="#10ffaa" strokeWidth="0.4" />
            <circle cx={300} cy={400} r={262} fill="none" stroke="#10ffaa" strokeWidth="0.2" strokeDasharray="4 8" />
          </svg>

          {/* Ambient neon glow spots */}
          <div className="pointer-events-none absolute -left-32 top-1/4 h-64 w-64 rounded-full bg-[#10ffaa]/5 blur-3xl" />
          <div className="pointer-events-none absolute -right-32 bottom-1/3 h-64 w-64 rounded-full bg-[#39ff14]/4 blur-3xl" />
          <div className="pointer-events-none absolute left-1/3 -bottom-20 h-48 w-48 rounded-full bg-[#00e676]/5 blur-3xl" />

          <div className="relative z-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {data.notes.map((note, index) => {
              const green = GREENS[index % GREENS.length];
              return (
                <article
                  key={note.title}
                  className={cn(
                    "relative rounded-xl border-2 p-5 md:p-6",
                    green.border,
                    green.glow,
                    index === 0 ? "xl:col-span-2 xl:row-span-2" : "",
                  )}
                  style={{ backgroundColor: green.bg }}
                >
                  {/* Corner geometry ornament */}
                  <svg className="absolute right-3 top-3 h-8 w-8 opacity-30" viewBox="0 0 32 32">
                    <circle cx="16" cy="16" r="14" fill="none" stroke="currentColor" strokeWidth="0.5" className={green.text} />
                    <circle cx="16" cy="16" r="8" fill="none" stroke="currentColor" strokeWidth="0.5" className={green.text} />
                    <line x1="16" y1="2" x2="16" y2="30" stroke="currentColor" strokeWidth="0.3" className={green.text} />
                    <line x1="2" y1="16" x2="30" y2="16" stroke="currentColor" strokeWidth="0.3" className={green.text} />
                  </svg>

                  <p className={cn("font-mono text-sm uppercase tracking-[0.2em]", green.text)}>
                    {note.eyebrow}
                  </p>
                  <h3 className="pt-4 font-mono text-24 md:text-28 uppercase text-primary">
                    {note.title}
                  </h3>
                  <p className="pt-4 text-16 text-copy-body">{note.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
