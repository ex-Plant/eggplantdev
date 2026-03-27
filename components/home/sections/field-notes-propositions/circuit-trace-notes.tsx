/* Created by Claude — proposition 19, PCB circuit board traces */
import { cn } from "@/helpers/cn";
import { FieldNotesSectionT } from "@/types/home-page-types";
import { FieldNotesIntro } from "./field-notes-intro";

type Props = {
  data: FieldNotesSectionT;
  className?: string;
};

const TRACE_GREENS = [
  "#10ffaa", "#39ff14", "#00e676", "#4ade80", "#22c55e",
] as const;

export const CircuitTraceNotes = ({ data, className }: Props) => {
  return (
    <section id={data.id} className={cn("fest-grid scroll-mt-32", className)}>
      <FieldNotesIntro data={data} />

      <div className="640:col-span-8 1280:col-span-10 col-span-full 1280:col-start-7 mt-14 xl:mt-0 overflow-hidden">
        <div className="relative overflow-hidden rounded-2xl border border-[#10ffaa]/10 bg-[#040806]">
          {/* PCB trace pattern */}
          <svg
            className="pointer-events-none absolute inset-0 h-full w-full"
            viewBox="0 0 800 1000"
            preserveAspectRatio="xMidYMid slice"
          >
            {/* Horizontal traces */}
            {[100, 200, 300, 400, 500, 600, 700, 800, 900].map((y, i) => (
              <line key={`h-${i}`} x1="0" y1={y} x2="800" y2={y} stroke="#10ffaa" strokeWidth="0.3" opacity="0.06" />
            ))}
            {/* Vertical traces */}
            {[100, 200, 300, 400, 500, 600, 700].map((x, i) => (
              <line key={`v-${i}`} x1={x} y1="0" x2={x} y2="1000" stroke="#10ffaa" strokeWidth="0.3" opacity="0.06" />
            ))}
            {/* Circuit paths */}
            <path d="M0 150 H200 V300 H400 V200 H600 V350 H800" fill="none" stroke="#10ffaa" strokeWidth="1" opacity="0.08" />
            <path d="M0 500 H150 V650 H350 V550 H550 V700 H800" fill="none" stroke="#39ff14" strokeWidth="1" opacity="0.06" />
            <path d="M0 850 H250 V750 H500 V900 H800" fill="none" stroke="#00e676" strokeWidth="1" opacity="0.07" />
            {/* Via pads */}
            {[[200, 150], [400, 300], [600, 200], [150, 500], [350, 650], [550, 550], [250, 850], [500, 750]].map(([x, y], i) => (
              <g key={`via-${i}`}>
                <circle cx={x} cy={y} r="6" fill="none" stroke="#10ffaa" strokeWidth="0.8" opacity="0.15" />
                <circle cx={x} cy={y} r="2" fill="#10ffaa" opacity="0.2" />
              </g>
            ))}
          </svg>

          <div className="relative z-10 divide-y divide-[#10ffaa]/8">
            {data.notes.map((note, index) => {
              const color = TRACE_GREENS[index % TRACE_GREENS.length];
              return (
                <article key={note.title} className="flex gap-5 px-5 py-7 md:gap-8 md:px-8 md:py-10">
                  {/* Component pad */}
                  <div className="hidden shrink-0 md:flex md:flex-col md:items-center md:gap-2 md:pt-1">
                    <div
                      className="flex h-10 w-10 items-center justify-center rounded-sm border"
                      style={{ borderColor: `${color}40`, backgroundColor: `${color}08` }}
                    >
                      <span className="font-mono text-sm" style={{ color }}>{note.eyebrow}</span>
                    </div>
                    <div className="h-full w-px" style={{ backgroundColor: `${color}20` }} />
                  </div>

                  <div className="max-w-prose">
                    <p className="font-mono text-sm uppercase tracking-[0.2em] md:hidden" style={{ color }}>
                      {note.eyebrow}
                    </p>
                    <h3 className="font-mono text-24 md:text-28 uppercase text-white">{note.title}</h3>
                    <p className="pt-3 text-16 text-white/50">{note.text}</p>
                    {/* Trace line under text */}
                    <div className="mt-5 h-px w-2/3" style={{ background: `linear-gradient(to right, ${color}30, transparent)` }} />
                  </div>
                </article>
              );
            })}
          </div>

          {/* Status bar */}
          <div className="border-t border-[#10ffaa]/8 px-5 py-3 md:px-8">
            <span className="font-mono text-sm text-[#10ffaa]/40 tracking-wider">
              {data.notes.length} nodes connected — all traces active
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
