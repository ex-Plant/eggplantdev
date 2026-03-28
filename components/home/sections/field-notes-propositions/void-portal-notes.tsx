/* Created by Claude — proposition 21, void portal with radiating energy */
import { cn } from "@/helpers/cn";
import { FieldNotesSectionT } from "@/types/home-page-types";
import { FieldNotesIntro } from "./field-notes-intro";

type Props = {
  data: FieldNotesSectionT;
  className?: string;
};

const PORTAL_GREENS = [
  { color: "#10ffaa", label: "text-[#10ffaa]" },
  { color: "#39ff14", label: "text-[#39ff14]" },
  { color: "#00e676", label: "text-[#00e676]" },
  { color: "#4ade80", label: "text-[#4ade80]" },
  { color: "#0d9488", label: "text-[#5eead4]" },
] as const;

export const VoidPortalNotes = ({ data, className }: Props) => {
  return (
    <section id={data.id} className={cn("fest-grid scroll-mt-32", className)}>
      <FieldNotesIntro data={data} />

      <div className="640:col-span-8 1280:col-span-10 col-span-full 1280:col-start-7 mt-14 xl:mt-0 overflow-hidden">
        <div className="relative overflow-hidden rounded-2xl bg-[#020204]">
          {/* Central portal void */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(16,255,170,0.08)_0%,rgba(57,255,20,0.04)_30%,rgba(0,230,118,0.02)_50%,transparent_70%)]" />
          </div>

          {/* Concentric portal rings */}
          <svg
            className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            width="600"
            height="600"
            viewBox="0 0 600 600"
          >
            {[60, 100, 150, 210, 280].map((r, i) => (
              <circle
                key={i}
                cx="300"
                cy="300"
                r={r}
                fill="none"
                stroke={PORTAL_GREENS[i].color}
                strokeWidth={i === 0 ? "1.5" : "0.6"}
                opacity={0.15 - i * 0.02}
                strokeDasharray={i % 2 === 0 ? "none" : `${4 + i * 2} ${6 + i * 2}`}
              />
            ))}
            {/* Radial lines */}
            {Array.from({ length: 12 }, (_, i) => {
              const angle = (Math.PI * 2 * i) / 12;
              return (
                <line
                  key={`ray-${i}`}
                  x1={300 + 60 * Math.cos(angle)}
                  y1={300 + 60 * Math.sin(angle)}
                  x2={300 + 280 * Math.cos(angle)}
                  y2={300 + 280 * Math.sin(angle)}
                  stroke="#10ffaa"
                  strokeWidth="0.3"
                  opacity="0.08"
                />
              );
            })}
            {/* Sacred triangle */}
            <polygon
              points="300,100 475,400 125,400"
              fill="none"
              stroke="#10ffaa"
              strokeWidth="0.5"
              opacity="0.06"
            />
            <polygon
              points="300,500 475,200 125,200"
              fill="none"
              stroke="#39ff14"
              strokeWidth="0.5"
              opacity="0.05"
            />
          </svg>

          {/* Notes as energy fragments radiating from center */}
          <div className="relative z-10 p-5 md:p-8">
            <div className="flex flex-col gap-3">
              {data.notes.map((note, index) => {
                const portal = PORTAL_GREENS[index % PORTAL_GREENS.length];
                const indent = [0, 8, 4, 12, 2][index % 5];

                return (
                  <article
                    key={note.title}
                    className="relative overflow-hidden rounded-lg border border-white/6 bg-black/65 p-5 md:p-6"
                    style={{ marginLeft: `${indent}%`, marginRight: `${12 - indent}%` }}
                  >
                    {/* Energy line from left edge */}
                    <div
                      className="absolute left-0 top-0 bottom-0 w-[3px]"
                      style={{
                        background: `linear-gradient(to bottom, transparent, ${portal.color}60, transparent)`,
                      }}
                    />

                    <div className="flex items-start gap-4">
                      {/* Pulsing core indicator */}
                      <div className="mt-1.5 shrink-0">
                        <div
                          className="h-3 w-3 rounded-full"
                          style={{
                            backgroundColor: portal.color,
                            boxShadow: `0 0 8px ${portal.color}80, 0 0 24px ${portal.color}40, 0 0 48px ${portal.color}20`,
                          }}
                        />
                      </div>

                      <div>
                        <p className={cn("font-mono text-sm uppercase tracking-[0.2em]", portal.label)}>
                          {note.eyebrow}
                        </p>
                        <h3 className="pt-2 font-mono text-20 md:text-28 uppercase text-white">{note.title}</h3>
                        <p className="pt-3 text-16 text-white/45">{note.text}</p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
