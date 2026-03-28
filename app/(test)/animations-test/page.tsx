"use client";
/* Animation experiments — GSAP + existing component ideas */
/* To add an animation: add its entry to ANIMATION_REGISTRY below */

import { SoleilOrbit } from "@/components/test/soleil-orbit";

/* ═══════════════════════════════════════
   ANIMATION REGISTRY — edit this list to add/remove experiments
   ═══════════════════════════════════════ */

const ANIMATION_REGISTRY: { id: string; label: string; component: React.ReactNode }[] = [
  { id: "soleil-orbit", label: "Soleil Aubergine — Orbit", component: <SoleilOrbit /> },
];

export default function AnimationsTestPage() {
  return (
    <div className="bg-bgc min-h-screen py-[240] text-white">
      <div className="fest-container py-16">
        <h1 className="text-40 md:text-64 mb-4 font-mono text-white uppercase">Animation Tests</h1>
        <p className="text-20 text-lightgray mb-8">
          {ANIMATION_REGISTRY.length} animation experiments — GSAP + existing ideas.
        </p>
      </div>

      <div className="flex flex-col gap-12">
        {ANIMATION_REGISTRY.map(({ id, label, component }, i) => (
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

        {ANIMATION_REGISTRY.length === 0 && (
          <div className="fest-container pb-16">
            <div className="rounded-lg border border-white/10 bg-white/[0.02] px-8 py-16 text-center">
              <p className="text-16 text-lightgray/50 font-mono tracking-widest uppercase">
                No animations registered yet
              </p>
              <p className="text-14 text-lightgray/30 mt-2">
                Add entries to ANIMATION_REGISTRY in this file to get started.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
