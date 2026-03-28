/* Agent: Claude — Metallic Text Test */
import { cn } from "@/helpers/cn";

type PropsT = { className?: string; colorful?: boolean };

export function MetallicTextTest({ className, colorful = false }: PropsT) {
  return (
    <section
      className={cn(
        "relative overflow-hidden py-24 md:py-40",
        colorful ? "bg-[#0a0806]" : "bg-transparent",
        className,
      )}
    >
      {colorful && (
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full"
          viewBox="0 0 1200 600"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
        >
          {/* Radial lines from center */}
          {Array.from({ length: 12 }, (_, i) => {
            const a = (i / 12) * Math.PI * 2;
            return (
              <line
                key={i}
                x1={600}
                y1={300}
                x2={600 + Math.cos(a) * 500}
                y2={300 + Math.sin(a) * 500}
                stroke="#daa520"
                strokeWidth="0.4"
                opacity="0.06"
              />
            );
          })}
          <circle cx={600} cy={300} r={200} fill="none" stroke="#c8860e" strokeWidth="0.5" opacity="0.06" strokeDasharray="4 8" />
          <circle cx={600} cy={300} r={350} fill="none" stroke="#daa520" strokeWidth="0.3" opacity="0.04" />
        </svg>
      )}

      <div className="fest-container relative">
        <div className="mx-auto max-w-5xl space-y-16">
          {/* Chrome / default metallic */}
          <div className="text-center">
            <span
              className={cn(
                "font-mono text-sm uppercase tracking-[0.4em]",
                colorful ? "text-[#daa520]/40" : "text-lightgray",
              )}
            >
              Chrome
            </span>
            <h2 className="text-metallic mt-4 font-mono text-48 uppercase leading-none md:text-72 lg:text-[6rem]">
              Eggplants
            </h2>
            <p className="text-metallic mt-2 font-mono text-20 uppercase tracking-widest md:text-24">
              In Space
            </p>
          </div>

          {/* Gold metallic */}
          <div className="text-center">
            <span
              className={cn(
                "font-mono text-sm uppercase tracking-[0.4em]",
                colorful ? "text-[#daa520]/40" : "text-lightgray",
              )}
            >
              Gold
            </span>
            <h2 className="text-metallic-gold mt-4 font-mono text-48 uppercase leading-none md:text-72 lg:text-[6rem]">
              Metatron
            </h2>
            <p className="text-metallic-gold mt-2 font-mono text-20 uppercase tracking-widest md:text-24">
              Sacred Geometry
            </p>
          </div>

          {/* Silver metallic */}
          <div className="text-center">
            <span
              className={cn(
                "font-mono text-sm uppercase tracking-[0.4em]",
                colorful ? "text-[#daa520]/40" : "text-lightgray",
              )}
            >
              Silver
            </span>
            <h2 className="text-metallic-silver mt-4 font-mono text-48 uppercase leading-none md:text-72 lg:text-[6rem]">
              Celestial
            </h2>
            <p className="text-metallic-silver mt-2 font-mono text-20 uppercase tracking-widest md:text-24">
              Altar Of Produce
            </p>
          </div>

          {/* Mixed — gold heading, chrome body */}
          <div className="text-center">
            <span
              className={cn(
                "font-mono text-sm uppercase tracking-[0.4em]",
                colorful ? "text-[#daa520]/40" : "text-lightgray",
              )}
            >
              Mixed
            </span>
            <h2 className="text-metallic-gold mt-4 font-mono text-48 uppercase leading-none md:text-72 lg:text-[6rem]">
              Konrad
            </h2>
            <p className="text-metallic mt-2 font-mono text-20 uppercase tracking-widest md:text-24">
              Frontend Developer
            </p>
            <p
              className={cn(
                "mt-6 text-16 md:text-20",
                colorful ? "text-[#c8b080]/40" : "text-lightgray",
              )}
            >
              Shipping produce to the void since the last deployment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
