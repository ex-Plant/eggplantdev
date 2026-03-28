"use client";

import { SolarSystemConcentric } from "@/components/test/solar-system-concentric";
import { SolarSystemSpiral } from "@/components/test/solar-system-spiral";
import { SolarSystemHexagonal } from "@/components/test/solar-system-hexagonal";
import { SolarSystemRadiant } from "@/components/test/solar-system-radiant";
import { SolarSystemZodiac } from "@/components/test/solar-system-zodiac";
import { SoleilBackground } from "@/components/test/soleil-background";
import { SoleilOrbit } from "@/components/test/soleil-orbit";
import { SoleilYoyo } from "@/components/test/soleil-yoyo";
import { SoleilScaleGrow } from "@/components/test/soleil-scale-grow";

const EXPERIMENTS = [
  { id: "concentric", label: "Solar System — Concentric", Component: SolarSystemConcentric },
  { id: "spiral", label: "Solar System — Spiral", Component: SolarSystemSpiral },
  { id: "hexagonal", label: "Solar System — Hexagonal", Component: SolarSystemHexagonal },
  { id: "radiant", label: "Solar System — Radiant", Component: SolarSystemRadiant },
  { id: "zodiac", label: "Solar System — Zodiac", Component: SolarSystemZodiac },
  { id: "soleil-bg", label: "Soleil — Background", Component: SoleilBackground },
  { id: "soleil-orbit", label: "Soleil — Orbit", Component: SoleilOrbit },
  { id: "soleil-yoyo", label: "Soleil — Yoyo", Component: SoleilYoyo },
  { id: "soleil-scale", label: "Soleil — Scale Grow", Component: SoleilScaleGrow },
] as const;

export default function SolarSystemTestPage() {
  return (
    <div className="fest-container py-12">
      <h1 className="mb-2 font-mono text-3xl text-white uppercase md:text-5xl">
        Solar System Tests
      </h1>
      <p className="mb-10 font-mono text-sm text-white/40">
        {EXPERIMENTS.length} experiments — solar systems + soleil animations
      </p>

      {EXPERIMENTS.map(({ id, label, Component }, i) => (
        <section key={id} id={id} className="mb-16">
          <div className="mb-4 flex items-center gap-3 border-b border-white/10 pb-3">
            <span className="font-mono text-sm tracking-widest text-fuchsia-500 uppercase">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="font-mono text-base text-white/80 uppercase">{label}</span>
          </div>
          <div className="overflow-hidden rounded-xl border border-white/8">
            <Component />
          </div>
        </section>
      ))}
    </div>
  );
}
