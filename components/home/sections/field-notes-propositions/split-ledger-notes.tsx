// Codex: proposition 09, split ledger with hard surface contrast.
import { cn } from "@/helpers/cn";
import { FieldNotesSectionT } from "@/types/home-page-types";
import { FieldNotesIntro } from "./field-notes-intro";

type Props = {
  data: FieldNotesSectionT;
  className?: string;
};

export const SplitLedgerNotes = ({ data, className }: Props) => {
  const midpoint = Math.ceil(data.notes.length / 2);
  const left = data.notes.slice(0, midpoint);
  const right = data.notes.slice(midpoint);

  const renderColumn = (notes: typeof data.notes, tone: "light" | "dark") => (
    <div className={cn("p-6 md:p-8", tone === "light" ? "bg-white text-black" : "bg-black text-white")}>
      {notes.map((note, index) => (
        <article key={note.title} className={cn(index > 0 ? "mt-10 border-t pt-10" : "", tone === "light" ? "border-black/10" : "border-white/10")}>
          <p className={cn("font-mono text-sm uppercase tracking-[0.18em]", tone === "light" ? "text-black/45" : "text-copy-body")}>
            {note.eyebrow}
          </p>
          <h3 className="pt-4 font-mono text-28 uppercase">{note.title}</h3>
          <p className={cn("pt-5 text-16", tone === "light" ? "text-black/75" : "text-copy-body")}>{note.text}</p>
        </article>
      ))}
    </div>
  );

  return (
    <section id={data.id} className={cn("fest-grid scroll-mt-32", className)}>
      <FieldNotesIntro data={data} />

      <div className="640:col-span-8 1280:col-span-10 col-span-full 1280:col-start-7 mt-14 overflow-hidden rounded-[2rem] border border-white/12 xl:mt-0 xl:grid xl:grid-cols-2">
        {renderColumn(left, "light")}
        {renderColumn(right, "dark")}
      </div>
    </section>
  );
};
