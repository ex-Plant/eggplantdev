import { FieldNotesSection } from "@/components/home/sections/field-notes-section";
import { FieldNotesSectionT, FieldNotesVariantT } from "@/types/home-page-types";

const VARIANTS: FieldNotesVariantT[] = [
  "asymmetricGrid",
  "stackedRows",
  "signalBoard",
  "timeline",
  "numberedMosaic",
];

const BASE_DATA: Omit<FieldNotesSectionT, "variant" | "id"> = {
  type: "fieldNotes",
  titleLine: ["Field", "Notes"],
  intro: "A few things I keep coming back to when building products.",
  notes: [
    {
      eyebrow: "01 / Speed",
      title: "Speed Is a UX Decision",
      text: "Performance isn't a tech metric — it's a design choice. A fast interface communicates respect for the user's time. I treat every unnecessary loading state as a design failure.",
      size: "standard",
    },
    {
      eyebrow: "02 / Clarity",
      title: "Clarity Over Cleverness",
      text: "The best interfaces feel obvious — but only after a lot of hard work. I'd rather ship something readable and maintainable than something impressive that nobody can extend.",
      size: "tall",
    },
    {
      eyebrow: "03 / Resilience",
      title: "Survive Contact With Reality",
      text: "I like software that holds up against real users, changing priorities, and imperfect content. Fewer assumptions, understandable systems, room for iteration.",
      size: "standard",
    },
    {
      eyebrow: "04 / Restraint",
      title: "Know What to Leave Out",
      text: "Good work is rarely about stacking features. It's about choosing what matters, shaping the experience carefully, and having the discipline to stop.",
      size: "wide",
    },
  ],
  buttons: [
    { label: "About Me", href: "#about" },
    { label: "What I Value", href: "#values" },
  ],
};

export default function FieldNotesTestPage() {
  return (
    <div className="min-h-screen bg-bgc text-white">
      <div className="fest-container py-16">
        <h1 className="font-mono text-40 md:text-64 uppercase text-white mb-4">
          Field Notes — Variant Test
        </h1>
        <p className="text-20 text-lightgray mb-20">
          All 5 layout variants rendered with the same data.
        </p>
      </div>

      {VARIANTS.map((variant, i) => (
        <div key={variant} id={`variant-${variant}`} className="py-8">
          {/* Variant label */}
          <div className="fest-container mb-6">
            <span className="font-mono text-16 uppercase tracking-widest text-green">
              Variant {i + 1} / {variant}
            </span>
            <div className="border-t border-green/30 mt-2" />
          </div>

          {/* Actual section */}
          <FieldNotesSection
            data={{ ...BASE_DATA, variant, id: `field-notes-${variant}` }}
            className="fest-container py-12 md:py-20"
          />
        </div>
      ))}
    </div>
  );
}
