/* Created by Claude — proposition 17, cosmic nebula with floating notes */
import { cn } from "@/helpers/cn";
import { FieldNotesSectionT } from "@/types/home-page-types";
import { FieldNotesIntro } from "./field-notes-intro";

type Props = {
  data: FieldNotesSectionT;
  className?: string;
};

const NEBULA_CARDS = [
  { pos: "xl:col-span-4 xl:row-span-2", accent: "#10ffaa", glow: "rgba(16,255,170,0.15)" },
  { pos: "xl:col-span-3", accent: "#8c99f1", glow: "rgba(140,153,241,0.15)" },
  { pos: "xl:col-span-3", accent: "#d946ef", glow: "rgba(217,70,239,0.15)" },
  { pos: "xl:col-span-3 xl:col-start-5", accent: "#39ff14", glow: "rgba(57,255,20,0.12)" },
  { pos: "xl:col-span-4 xl:col-start-8", accent: "#00e676", glow: "rgba(0,230,118,0.12)" },
] as const;

export const CosmicNebulaNotes = ({ data, className }: Props) => {
  return (
    <section id={data.id} className={cn("fest-grid scroll-mt-32", className)}>
      <FieldNotesIntro data={data} />

      <div className="640:col-span-8 1280:col-span-10 col-span-full 1280:col-start-7 mt-14 xl:mt-0 overflow-hidden">
        <div className="relative overflow-hidden rounded-2xl bg-[#030308] p-4 md:p-6">
          {/* Nebula gas clouds */}
          <div className="pointer-events-none absolute left-[10%] top-[5%] h-[50%] w-[40%] rounded-full bg-[radial-gradient(ellipse,rgba(217,70,239,0.12),transparent_60%)] blur-2xl" />
          <div className="pointer-events-none absolute right-[5%] top-[20%] h-[45%] w-[35%] rounded-full bg-[radial-gradient(ellipse,rgba(16,255,170,0.1),transparent_60%)] blur-2xl" />
          <div className="pointer-events-none absolute bottom-[10%] left-[25%] h-[40%] w-[50%] rounded-full bg-[radial-gradient(ellipse,rgba(59,130,246,0.08),transparent_60%)] blur-2xl" />
          <div className="pointer-events-none absolute right-[20%] bottom-[5%] h-[30%] w-[30%] rounded-full bg-[radial-gradient(ellipse,rgba(57,255,20,0.06),transparent_60%)] blur-2xl" />

          {/* Star field dots */}
          <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-40" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
            {[
              [45, 78], [120, 345], [234, 56], [567, 123], [678, 456], [89, 234],
              [345, 567], [456, 89], [23, 456], [789, 234], [150, 500], [600, 50],
              [400, 300], [700, 400], [250, 150], [500, 550], [100, 100], [650, 300],
            ].map(([x, y], i) => (
              <circle key={i} cx={x} cy={y} r={i % 4 === 0 ? 1.5 : 0.8} fill="white" opacity={0.3 + (i % 3) * 0.2} />
            ))}
          </svg>

          <div className="relative z-10 grid gap-4 md:grid-cols-2 xl:grid-cols-7">
            {data.notes.map((note, index) => {
              const card = NEBULA_CARDS[index % NEBULA_CARDS.length];
              return (
                <article
                  key={note.title}
                  className={cn(
                    "relative overflow-hidden rounded-xl border p-5 md:p-6 backdrop-blur-md",
                    card.pos,
                  )}
                  style={{
                    borderColor: `${card.accent}33`,
                    backgroundColor: `${card.accent}08`,
                    boxShadow: `0 0 40px ${card.glow}, inset 0 1px 0 ${card.accent}15`,
                  }}
                >
                  {/* Inner nebula glow */}
                  <div
                    className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full blur-2xl"
                    style={{ backgroundColor: card.glow }}
                  />

                  <p className="relative font-mono text-sm uppercase tracking-[0.2em]" style={{ color: card.accent }}>
                    {note.eyebrow}
                  </p>
                  <h3 className="relative pt-4 font-mono text-20 md:text-28 uppercase text-white">
                    {note.title}
                  </h3>
                  <p className="relative pt-4 text-16 text-white/50">{note.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
