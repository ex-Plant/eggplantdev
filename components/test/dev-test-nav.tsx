const TEST_PAGES = [
  { href: "/heros-test", label: "heroes" },
  { href: "/sections-concepts-test", label: "sections" },
  { href: "/animations-test", label: "animations" },
  { href: "/selected-animations", label: "selected" },
  { href: "/eggplant-palette", label: "palette" },
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
