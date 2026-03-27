/* Created by Claude — proposition 18, hexagonal grid cells */
import { cn } from "@/helpers/cn";
import { FieldNotesSectionT } from "@/types/home-page-types";
import { FieldNotesIntro } from "./field-notes-intro";

type Props = {
  data: FieldNotesSectionT;
  className?: string;
};

const HEX_GREENS = [
  { stroke: "#10ffaa", fill: "rgba(16,255,170,0.04)", text: "text-[#10ffaa]" },
  { stroke: "#39ff14", fill: "rgba(57,255,20,0.04)", text: "text-[#39ff14]" },
  { stroke: "#00e676", fill: "rgba(0,230,118,0.04)", text: "text-[#00e676]" },
  { stroke: "#059669", fill: "rgba(5,150,105,0.06)", text: "text-[#34d399]" },
  { stroke: "#4ade80", fill: "rgba(74,222,128,0.04)", text: "text-[#4ade80]" },
] as const;

export const HexGridNotes = ({ data, className }: Props) => {
  return (
    <section id={data.id} className={cn("fest-grid scroll-mt-32", className)}>
      <FieldNotesIntro data={data} />

      <div className="640:col-span-8 1280:col-span-10 col-span-full 1280:col-start-7 mt-14 xl:mt-0 overflow-hidden">
        <div className="relative overflow-hidden rounded-2xl bg-[#050608] p-4 md:p-6">
          {/* Background hex grid pattern */}
          <svg
            className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.06]"
            viewBox="0 0 600 800"
            preserveAspectRatio="xMidYMid slice"
          >
            {Array.from({ length: 12 }, (_, row) =>
              Array.from({ length: 8 }, (_, col) => {
                const x = col * 70 + (row % 2 === 0 ? 0 : 35);
                const y = row * 60;
                const points = Array.from({ length: 6 }, (_, i) => {
                  const angle = (Math.PI / 3) * i - Math.PI / 6;
                  return `${x + 30 * Math.cos(angle)},${y + 30 * Math.sin(angle)}`;
                }).join(" ");
                return (
                  <polygon
                    key={`${row}-${col}`}
                    points={points}
                    fill="none"
                    stroke="#10ffaa"
                    strokeWidth="0.5"
                  />
                );
              }),
            )}
          </svg>

          <div className="pointer-events-none absolute left-1/4 top-1/4 h-48 w-48 rounded-full bg-[#10ffaa]/4 blur-3xl" />
          <div className="pointer-events-none absolute right-1/4 bottom-1/4 h-48 w-48 rounded-full bg-[#39ff14]/3 blur-3xl" />

          <div className="relative z-10 flex flex-col gap-4">
            {data.notes.map((note, index) => {
              const hex = HEX_GREENS[index % HEX_GREENS.length];
              const isEven = index % 2 === 0;

              return (
                <article
                  key={note.title}
                  className={cn(
                    "relative overflow-hidden rounded-lg border p-5 md:p-7 backdrop-blur-sm",
                    isEven ? "md:mr-24" : "md:ml-24",
                  )}
                  style={{
                    borderColor: `${hex.stroke}25`,
                    backgroundColor: hex.fill,
                  }}
                >
                  {/* Hex accent */}
                  <svg className="absolute right-4 top-4 h-12 w-12 opacity-20" viewBox="0 0 48 48">
                    <polygon
                      points="24,2 44,14 44,34 24,46 4,34 4,14"
                      fill="none"
                      stroke={hex.stroke}
                      strokeWidth="1"
                    />
                    <polygon
                      points="24,10 36,18 36,30 24,38 12,30 12,18"
                      fill="none"
                      stroke={hex.stroke}
                      strokeWidth="0.5"
                    />
                  </svg>

                  <div className="flex items-start gap-5">
                    {/* Hex number badge */}
                    <div className="hidden shrink-0 md:block">
                      <svg className="h-14 w-14" viewBox="0 0 56 56">
                        <polygon
                          points="28,2 52,16 52,40 28,54 4,40 4,16"
                          fill={hex.fill}
                          stroke={hex.stroke}
                          strokeWidth="1.5"
                        />
                        <text x="28" y="32" textAnchor="middle" fill={hex.stroke} fontSize="14" fontFamily="monospace">
                          {note.eyebrow}
                        </text>
                      </svg>
                    </div>

                    <div>
                      <p className={cn("font-mono text-sm uppercase tracking-[0.2em] md:hidden", hex.text)}>
                        {note.eyebrow}
                      </p>
                      <h3 className="font-mono text-24 md:text-28 uppercase text-white pt-1">
                        {note.title}
                      </h3>
                      <p className="pt-3 text-16 text-white/50 max-w-prose">{note.text}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
