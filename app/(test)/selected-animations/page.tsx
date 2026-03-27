"use client";
/* Selected animations — curated picks from the experiments */

import { SoleilOrbit } from "@/components/test/soleil-orbit";

const SELECTED: { id: string; label: string; component: React.ReactNode }[] = [
  { id: "soleil-orbit", label: "Soleil Aubergine — Orbit", component: <SoleilOrbit /> },
];

export default function SelectedAnimationsPage() {
  return (
    <div className="bg-bgc min-h-screen text-white">
      <div className="fest-container py-16">
        <h1 className="text-40 md:text-64 mb-4 font-mono text-white uppercase">
          Selected Animations
        </h1>
        <p className="text-20 text-lightgray mb-8">
          {SELECTED.length} curated animation{SELECTED.length !== 1 ? "s" : ""}.
        </p>
      </div>

      <div className="flex flex-col gap-12">
        {SELECTED.map(({ id, label, component }, i) => (
          <section key={id} id={id}>
            <div className="fest-container">
              <div className="mb-4 flex items-center gap-3 border-b border-white/10 pb-3">
                <span className="text-14 font-mono tracking-widest text-fuchsia-500 uppercase">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-16 font-mono text-white/80 uppercase">{label}</span>
              </div>
            </div>
            {component}
          </section>
        ))}
      </div>
    </div>
  );
}
