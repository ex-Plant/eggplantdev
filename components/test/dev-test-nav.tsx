const TEST_PAGES = [
  { href: "/heros-test", label: "Heroes" },
  { href: "/sections-concepts-test", label: "Sections" },
  { href: "/selected-heroes", label: "Selected Heroes" },
  { href: "/selected-animations", label: "Selected Animations" },
  { href: "/rejected-heroes-claude", label: "Rejected Claude" },
  { href: "/rejected-heroes-codex", label: "Rejected Codex" },
  { href: "/animations-test", label: "Animations" },
  { href: "/eggplant-palette", label: "Eggplant Palette" },
  { href: "/solar-system-test", label: "Solar System" },
  { href: "/backdrop-test", label: "Backdrop" },
];

export function DevTestNav() {
  // if (process.env.NODE_ENV !== "development") return null;

  return (
    <div className="rigth-0 fixed top-0 right-0 left-0 z-999 mx-auto flex w-fit justify-center gap-3 bg-yellow-500/90 px-3 py-1 text-xs font-bold text-black">
      <span>DEV:</span>
      {TEST_PAGES.map(({ href, label }) => (
        <a key={href} href={href} className="underline">
          {label}
        </a>
      ))}
    </div>
  );
}
