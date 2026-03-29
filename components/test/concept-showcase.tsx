"use client";

import { Suspense, type ReactNode } from "react";

/* ── Accent color map ── */

const ACCENTS = {
  fuchsia: {
    index: "text-fuchsia-500",
    border: "border-white/10",
  },
  gold: {
    index: "text-gold/50",
    border: "border-gold/10",
  },
} as const;

type AccentT = keyof typeof ACCENTS;

/* ── Page shell ── */

type ConceptShowcasePropsT = {
  title: string;
  subtitle?: string;
  count: number;
  accent?: AccentT;
  children: ReactNode;
};

export function ConceptShowcase({
  title,
  subtitle,
  count,
  accent = "fuchsia",
  children,
}: ConceptShowcasePropsT) {
  const noun = count === 1 ? "concept" : "concepts";
  const sub = subtitle ?? `${count} ${noun}.`;

  return (
    <div className="bg-bgc min-h-screen text-white">
      <div className="fest-container py-16">
        <h1
          className={`text-40 md:text-64 mb-4 font-mono uppercase ${
            accent === "gold" ? "text-gold/80" : "text-white"
          }`}
        >
          {title}
        </h1>
        <p className="text-20 mb-8 text-lightgray">{sub}</p>
      </div>

      <div className="flex flex-col">{children}</div>
    </div>
  );
}

/* ── Single numbered section ── */

type ShowcaseItemPropsT = {
  index: number;
  label: string;
  accent?: AccentT;
  lazy?: boolean;
  className?: string;
  children: ReactNode;
};

export function ShowcaseItem({
  index,
  label,
  accent = "fuchsia",
  lazy = false,
  className,
  children,
}: ShowcaseItemPropsT) {
  const colors = ACCENTS[accent];

  const header = (
    <div className="fest-container">
      <div className={`mb-4 flex items-center gap-3 border-b ${colors.border} pb-3`}>
        <span className={`text-14 font-mono uppercase tracking-widest ${colors.index}`}>
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="text-16 font-mono uppercase text-white/80">{label}</span>
      </div>
    </div>
  );

  return (
    <section id={label.toLowerCase().replace(/\s+/g, "-")} className={className ?? "pb-12"}>
      {header}
      {lazy ? (
        <Suspense
          fallback={
            <div className="flex h-[33rem] items-center justify-center">
              <span className="text-14 animate-pulse font-mono uppercase tracking-widest text-lightgray/30">
                Loading {label}…
              </span>
            </div>
          }
        >
          {children}
        </Suspense>
      ) : (
        children
      )}
    </section>
  );
}
