/* Created by Claude — proposition 13, topographic map contours */
import { cn } from "@/helpers/cn";
import { FieldNotesSectionT } from "@/types/home-page-types";
import { FieldNotesIntro } from "./field-notes-intro";

type Props = {
  data: FieldNotesSectionT;
  className?: string;
};

const ELEVATION_COLORS = [
  "from-[#064e3b]/40 to-[#064e3b]/10",
  "from-[#1e3a5f]/40 to-[#1e3a5f]/10",
  "from-[#4a1942]/40 to-[#4a1942]/10",
  "from-[#78350f]/40 to-[#78350f]/10",
  "from-[#1e1b4b]/40 to-[#1e1b4b]/10",
] as const;

const HEIGHTS = ["min-h-[14rem]", "min-h-[18rem]", "min-h-[12rem]", "min-h-[20rem]", "min-h-[16rem]"] as const;

export const TopoContourNotes = ({ data, className }: Props) => {
  return (
    <section id={data.id} className={cn("fest-grid scroll-mt-32", className)}>
      <FieldNotesIntro data={data} />

      <div className="640:col-span-8 1280:col-span-10 col-span-full 1280:col-start-7 mt-14 xl:mt-0 overflow-hidden">
        <div className="relative overflow-hidden rounded-2xl border border-white/8 bg-[#060608]">
          {/* Topographic contour lines */}
          <svg
            className="pointer-events-none absolute inset-0 h-full w-full opacity-20"
            viewBox="0 0 800 1200"
            preserveAspectRatio="xMidYMid slice"
          >
            {[120, 180, 260, 350, 440, 540, 640, 740, 850, 960, 1060].map((cy, i) => (
              <ellipse
                key={i}
                cx={400 + (i % 3 === 0 ? -80 : i % 3 === 1 ? 60 : 0)}
                cy={cy}
                rx={280 - i * 8}
                ry={50 + i * 3}
                fill="none"
                stroke={i % 2 === 0 ? "#10ffaa" : "#8c99f1"}
                strokeWidth="0.5"
              />
            ))}
          </svg>

          <div className="relative z-10 flex flex-col">
            {data.notes.map((note, index) => (
              <article
                key={note.title}
                className={cn(
                  "flex flex-col justify-end border-b border-white/5 bg-gradient-to-r p-6 md:p-8",
                  ELEVATION_COLORS[index % ELEVATION_COLORS.length],
                  HEIGHTS[index % HEIGHTS.length],
                )}
              >
                <div className="flex items-end justify-between gap-6">
                  <div className="max-w-[32rem]">
                    <p className="font-mono text-sm uppercase tracking-[0.2em] text-green/70">
                      {note.eyebrow} — elev. {(index + 1) * 240}m
                    </p>
                    <h3 className="pt-3 font-mono text-24 md:text-34 uppercase text-white">
                      {note.title}
                    </h3>
                    <p className="pt-4 text-16 text-lightgray/70">{note.text}</p>
                  </div>

                  {/* Elevation marker */}
                  <div className="hidden shrink-0 flex-col items-center md:flex">
                    <div className="h-12 w-px bg-green/40" />
                    <span className="mt-1 font-mono text-sm text-green/50">{(index + 1) * 240}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
