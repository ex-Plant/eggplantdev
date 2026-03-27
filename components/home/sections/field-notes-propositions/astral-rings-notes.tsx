/* Created by Claude — proposition 20, planetary orbital rings */
import { cn } from "@/helpers/cn";
import { FieldNotesSectionT } from "@/types/home-page-types";
import { FieldNotesIntro } from "./field-notes-intro";

type Props = {
  data: FieldNotesSectionT;
  className?: string;
};

const RING_COLORS = [
  { ring: "#10ffaa", dot: "#10ffaa", text: "text-[#10ffaa]" },
  { ring: "#39ff14", dot: "#39ff14", text: "text-[#39ff14]" },
  { ring: "#8c99f1", dot: "#8c99f1", text: "text-[#8c99f1]" },
  { ring: "#d946ef", dot: "#d946ef", text: "text-[#d946ef]" },
  { ring: "#00e676", dot: "#00e676", text: "text-[#00e676]" },
] as const;

export const AstralRingsNotes = ({ data, className }: Props) => {
  return (
    <section id={data.id} className={cn("fest-grid scroll-mt-32", className)}>
      <FieldNotesIntro data={data} />

      <div className="640:col-span-8 1280:col-span-10 col-span-full 1280:col-start-7 mt-14 xl:mt-0 overflow-hidden">
        <div className="relative min-h-[40rem] overflow-hidden rounded-2xl bg-[#030306] p-4 md:p-8">
          {/* Orbital rings */}
          <svg
            className="pointer-events-none absolute inset-0 h-full w-full"
            viewBox="0 0 800 700"
            preserveAspectRatio="xMidYMid slice"
          >
            {/* Core star */}
            <circle cx="400" cy="350" r="4" fill="#10ffaa" opacity="0.6" />
            <circle cx="400" cy="350" r="12" fill="none" stroke="#10ffaa" strokeWidth="0.3" opacity="0.3" />

            {/* Orbital ellipses */}
            {[
              { rx: 120, ry: 60, rot: -15, color: "#10ffaa", opacity: 0.15 },
              { rx: 200, ry: 90, rot: 10, color: "#39ff14", opacity: 0.12 },
              { rx: 280, ry: 120, rot: -5, color: "#8c99f1", opacity: 0.1 },
              { rx: 350, ry: 150, rot: 18, color: "#d946ef", opacity: 0.08 },
              { rx: 420, ry: 180, rot: -8, color: "#00e676", opacity: 0.06 },
            ].map((orbit, i) => (
              <ellipse
                key={i}
                cx="400"
                cy="350"
                rx={orbit.rx}
                ry={orbit.ry}
                fill="none"
                stroke={orbit.color}
                strokeWidth="1"
                opacity={orbit.opacity}
                transform={`rotate(${orbit.rot} 400 350)`}
              />
            ))}

            {/* Planet dots on orbits */}
            {[
              { cx: 480, cy: 310, color: "#10ffaa" },
              { cx: 250, cy: 290, color: "#39ff14" },
              { cx: 600, cy: 380, color: "#8c99f1" },
              { cx: 150, cy: 420, color: "#d946ef" },
              { cx: 700, cy: 300, color: "#00e676" },
            ].map((planet, i) => (
              <g key={i}>
                <circle cx={planet.cx} cy={planet.cy} r="3" fill={planet.color} opacity="0.7" />
                <circle cx={planet.cx} cy={planet.cy} r="8" fill="none" stroke={planet.color} strokeWidth="0.5" opacity="0.3" />
              </g>
            ))}
          </svg>

          {/* Cards positioned around the orbital field */}
          <div className="relative z-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {data.notes.map((note, index) => {
              const ring = RING_COLORS[index % RING_COLORS.length];
              return (
                <article
                  key={note.title}
                  className={cn(
                    "relative rounded-xl border bg-black/50 p-5 backdrop-blur-sm",
                    index === 0 ? "xl:col-span-2" : "",
                    index === data.notes.length - 1 ? "xl:col-span-2" : "",
                  )}
                  style={{ borderColor: `${ring.ring}20` }}
                >
                  {/* Orbital dot indicator */}
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="h-2.5 w-2.5 rounded-full"
                      style={{
                        backgroundColor: ring.dot,
                        boxShadow: `0 0 10px ${ring.dot}80, 0 0 30px ${ring.dot}30`,
                      }}
                    />
                    <p className={cn("font-mono text-sm uppercase tracking-[0.2em]", ring.text)}>
                      {note.eyebrow}
                    </p>
                  </div>
                  <h3 className="font-mono text-20 md:text-28 uppercase text-white">{note.title}</h3>
                  <p className="pt-3 text-16 text-white/45">{note.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
