// Shared components and styles for hero codex concepts
import { cn } from "@/helpers/cn";

export type HeroConceptPropsT = {
  eyebrow: string;
  title: string[];
  text: string;
  className?: string;
  children: React.ReactNode;
};

type SacredGeometryPropsT = {
  className?: string;
};

export function HeroConcept({ eyebrow, title, text, className, children }: HeroConceptPropsT) {
  return (
    <section className={cn("fest-grid relative isolate overflow-hidden rounded-[2rem] border border-white/10 p-6 md:p-8 xl:p-10", className)}>
      <div className="pointer-events-none absolute inset-0 opacity-80">
        <div className="hero-retro-scan absolute inset-0" />
        <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/14 to-transparent" />
        <div className="absolute inset-y-0 left-0 w-px bg-linear-to-b from-transparent via-white/10 to-transparent" />
        <div className="absolute right-[6%] top-[10%] h-24 w-24 rounded-full bg-[radial-gradient(circle,rgba(250,204,21,0.12),transparent_70%)] blur-xl" />
        <div className="absolute bottom-[10%] left-[8%] h-28 w-28 rounded-full bg-[radial-gradient(circle,rgba(251,113,133,0.12),transparent_72%)] blur-xl" />
      </div>
      <div className="640:col-span-7 1280:col-span-5 col-span-full relative z-10">
        <p className="font-mono text-sm uppercase tracking-[0.18em] text-lightgray/65">{eyebrow}</p>
        <h2 className="pt-6 font-mono text-40 leading-none uppercase text-white [text-shadow:0_0_22px_rgba(251,113,133,0.08)] sm:text-48 md:text-64 xl:text-80">
          {title.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h2>
        <p className="text-16 text-lightgray md:text-20 scalable max-w-[34rem] pt-8 text-balance">{text}</p>
      </div>
      <div className="relative z-10 contents">{children}</div>
    </section>
  );
}

export function SacredGeometryFrame({ className }: SacredGeometryPropsT) {
  return (
    <div className={cn("pointer-events-none absolute inset-0", className)}>
      <div className="absolute left-1/2 top-1/2 h-[74%] w-[74%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#fb7185]/12" />
      <div className="absolute left-1/2 top-1/2 h-[56%] w-[56%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#c084fc]/16" />
      <div className="absolute left-1/2 top-1/2 h-[38%] w-[38%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#facc15]/18" />
      <div className="absolute left-1/2 top-1/2 h-[72%] w-[72%] -translate-x-1/2 -translate-y-1/2 rotate-45 border border-[#f97316]/10" />
      <div className="absolute left-1/2 top-1/2 h-[44%] w-[44%] -translate-x-1/2 -translate-y-1/2 rotate-45 border border-[#f9a8d4]/12" />
      <div className="absolute inset-x-[16%] top-1/2 h-px -translate-y-1/2 bg-linear-to-r from-transparent via-[#fde68a]/22 to-transparent" />
      <div className="absolute inset-y-[16%] left-1/2 w-px -translate-x-1/2 bg-linear-to-b from-transparent via-[#f5d0fe]/18 to-transparent" />
    </div>
  );
}

export const teaserText = (txt: string) => {
  const [first, second, ...rest] = txt.split(". ");
  return [first, second, rest.length ? `${rest[0]}.` : ""].filter(Boolean).join(". ");
};
