import { cn } from "@/helpers/cn";
import { SimpleHeader } from "@/components/general/simple-header";
import { FieldNotesSectionT, FieldNoteT } from "@/types/home-page-types";

type FieldNotesSectionPropsT = {
  data: FieldNotesSectionT;
  className?: string;
};

export function FieldNotesSection({ data, className }: FieldNotesSectionPropsT) {
  return (
    <section className={cn("", className)} id={data.id}>
      <div className="fest-grid">
        <div className="640:col-span-7 col-span-full">
          <SimpleHeader title={data.titleLine} />
          <p className="text-16 text-lightgray md:text-20 scalable pt-10 lg:pt-16">
            {data.intro}
          </p>
        </div>
      </div>

      <div className="mt-12 md:mt-20">
        <VariantRenderer variant={data.variant} notes={data.notes} />
      </div>

      {data.buttons.length > 0 && (
        <div className="mt-10 flex gap-4 flex-wrap">
          {data.buttons.map((btn) => (
            <a
              key={btn.href}
              href={btn.href}
              className="font-mono text-16 uppercase text-lightgray border border-gray5 px-6 py-3 hover:text-white hover:border-white transition-colors"
            >
              {btn.label}
            </a>
          ))}
        </div>
      )}
    </section>
  );
}

/* ── Variant dispatcher ── */

function VariantRenderer({
  variant,
  notes,
}: {
  variant: FieldNotesSectionT["variant"];
  notes: readonly FieldNoteT[];
}) {
  switch (variant) {
    case "asymmetricGrid":
      return <AsymmetricGrid notes={notes} />;
    case "stackedRows":
      return <StackedRows notes={notes} />;
    case "signalBoard":
      return <SignalBoard notes={notes} />;
    case "timeline":
      return <Timeline notes={notes} />;
    case "numberedMosaic":
      return <NumberedMosaic notes={notes} />;
  }
}

/* ════════════════════════════════════════════════
   1. ASYMMETRIC GRID
   Staggered card grid with grit texture, gradient overlays, varying card sizes.
   ════════════════════════════════════════════════ */

const GRID_OFFSETS = ["mt-0", "mt-8", "mt-4", "mt-12"] as const;

const SIZE_CLASSES: Record<FieldNoteT["size"], string> = {
  standard: "md:col-span-3",
  tall: "md:col-span-3 md:row-span-2",
  wide: "md:col-span-6",
};

function AsymmetricGrid({ notes }: { notes: readonly FieldNoteT[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
      {notes.map((note, i) => (
        <div
          key={i}
          className={cn(
            "relative overflow-hidden rounded-sm border border-gray5/30 p-6 md:p-8",
            "bg-gray2/40 grit-subtle",
            SIZE_CLASSES[note.size],
            GRID_OFFSETS[i % GRID_OFFSETS.length],
          )}
        >
          {/* gradient overlay */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue/5 to-transparent" />

          <span className="relative font-mono text-16 uppercase text-gray7 tracking-wider">
            {note.eyebrow}
          </span>
          <h3 className="relative font-mono text-20 md:text-24 uppercase text-white mt-3">
            {note.title}
          </h3>
          <p className="relative text-16 text-lightgray mt-4 leading-relaxed">
            {note.text}
          </p>
        </div>
      ))}
    </div>
  );
}

/* ════════════════════════════════════════════════
   2. STACKED ROWS
   Full-width horizontal rows. Editorial magazine layout.
   Eyebrow left, title center, text right. Thin horizontal rules.
   ════════════════════════════════════════════════ */

function StackedRows({ notes }: { notes: readonly FieldNoteT[] }) {
  return (
    <div className="flex flex-col">
      {notes.map((note, i) => (
        <div key={i}>
          <div className="border-t border-gray5/40" />
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-8 md:py-12">
            {/* Left: eyebrow */}
            <div className="md:col-span-2 flex items-start">
              <span className="font-mono text-16 uppercase text-gray7 tracking-wider">
                {note.eyebrow}
              </span>
            </div>
            {/* Center: title */}
            <div className="md:col-span-4 flex items-start">
              <h3 className="font-mono text-20 md:text-28 uppercase text-white">
                {note.title}
              </h3>
            </div>
            {/* Right: text */}
            <div className="md:col-span-6 flex items-start">
              <p className="text-16 md:text-20 text-lightgray leading-relaxed">
                {note.text}
              </p>
            </div>
          </div>
        </div>
      ))}
      {/* Closing rule */}
      <div className="border-t border-gray5/40" />
    </div>
  );
}

/* ════════════════════════════════════════════════
   3. SIGNAL BOARD
   Airport departure board / terminal UI. Mono font dominant.
   Scan-line overlay. Status indicator dots. Dense, utilitarian.
   ════════════════════════════════════════════════ */

const DOT_COLORS = [
  "bg-green",
  "bg-blue",
  "bg-yellow",
  "bg-red",
] as const;

function SignalBoard({ notes }: { notes: readonly FieldNoteT[] }) {
  return (
    <div className="relative border border-gray5/30 bg-bgc overflow-hidden">
      {/* Scan-line overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-10"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.02) 2px, rgba(255,255,255,0.02) 4px)",
        }}
      />

      {/* Header bar */}
      <div className="border-b border-gray5/40 px-4 py-3 md:px-8 md:py-4 flex items-center gap-3">
        <div className="w-2 h-2 rounded-full bg-green animate-pulse" />
        <span className="font-mono text-16 uppercase text-gray7 tracking-widest">
          sys / field-notes / active
        </span>
      </div>

      {/* Note rows */}
      {notes.map((note, i) => (
        <div
          key={i}
          className={cn(
            "relative grid grid-cols-1 md:grid-cols-[auto_1fr] gap-4 md:gap-8",
            "px-4 py-6 md:px-8 md:py-8",
            i < notes.length - 1 && "border-b border-gray5/20",
          )}
        >
          {/* Status column */}
          <div className="flex items-start gap-3 md:w-48 shrink-0">
            <div className={cn("w-2 h-2 rounded-full mt-2 shrink-0", DOT_COLORS[i % DOT_COLORS.length])} />
            <span className="font-mono text-16 uppercase text-gray7 tracking-wider">
              {note.eyebrow}
            </span>
          </div>

          {/* Content column */}
          <div>
            <h3 className="font-mono text-20 md:text-24 uppercase text-white">
              {note.title}
            </h3>
            <p className="font-mono text-16 text-gray7 mt-3 leading-relaxed max-w-prose">
              {note.text}
            </p>
          </div>
        </div>
      ))}

      {/* Footer bar */}
      <div className="border-t border-gray5/40 px-4 py-3 md:px-8 md:py-4">
        <span className="font-mono text-16 text-gray5 tracking-wider">
          {notes.length} entries loaded — last sync: now
        </span>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════
   4. TIMELINE
   Vertical line on left. Connector dots. Notes stagger left/right on desktop.
   ════════════════════════════════════════════════ */

function Timeline({ notes }: { notes: readonly FieldNoteT[] }) {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gray5/40 -translate-x-1/2" />

      <div className="flex flex-col gap-12 md:gap-16">
        {notes.map((note, i) => {
          const isLeft = i % 2 === 0;

          return (
            <div key={i} className="relative grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12">
              {/* Connector dot */}
              <div className="absolute left-4 md:left-1/2 top-1 w-3 h-3 rounded-full border-2 border-white bg-bgc -translate-x-1/2 z-10" />

              {/* Eyebrow above dot on mobile */}
              <div
                className={cn(
                  "pl-10 md:pl-0",
                  // Desktop: position in correct column
                  isLeft ? "md:text-right md:pr-12" : "md:col-start-2 md:pl-12",
                )}
              >
                <span className="font-mono text-16 uppercase text-gray7 tracking-wider block mb-2">
                  {note.eyebrow}
                </span>
                <h3 className="font-mono text-20 md:text-28 uppercase text-white">
                  {note.title}
                </h3>
                <p className="text-16 text-lightgray mt-3 leading-relaxed">
                  {note.text}
                </p>
              </div>

              {/* Empty column for the other side on desktop */}
              {isLeft && <div className="hidden md:block" />}
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════
   5. NUMBERED MOSAIC
   Large oversized numbers as dominant visual. Bento grid with varying aspect ratios.
   Numbers semi-transparent, title and text overlaid.
   ════════════════════════════════════════════════ */

const MOSAIC_SPANS = [
  "md:col-span-7 md:row-span-2 min-h-64",
  "md:col-span-5 min-h-48",
  "md:col-span-5 min-h-48",
  "md:col-span-12 min-h-48",
] as const;

function NumberedMosaic({ notes }: { notes: readonly FieldNoteT[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
      {notes.map((note, i) => {
        const number = note.eyebrow.slice(0, 2); // "01", "02", etc.

        return (
          <div
            key={i}
            className={cn(
              "relative overflow-hidden border border-gray5/20 bg-gray2/20 p-6 md:p-8 flex flex-col justify-end",
              MOSAIC_SPANS[i % MOSAIC_SPANS.length],
            )}
          >
            {/* Oversized number */}
            <span
              className="absolute top-0 right-4 font-mono text-[8rem] md:text-[12rem] leading-none text-white/5 select-none pointer-events-none"
              aria-hidden="true"
            >
              {number}
            </span>

            {/* Content */}
            <div className="relative z-10">
              <span className="font-mono text-16 uppercase text-gray7 tracking-wider">
                {note.eyebrow}
              </span>
              <h3 className="font-mono text-20 md:text-28 uppercase text-white mt-2">
                {note.title}
              </h3>
              <p className="text-16 text-lightgray mt-3 leading-relaxed max-w-prose">
                {note.text}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
