import { readFile } from "node:fs/promises";
import path from "node:path";

async function getDesignSpec() {
  const specPath = path.join(process.cwd(), "docs/design_spec/surreal-eggplant-supernova-prompt.md");
  const content = await readFile(specPath, "utf8");

  return {
    content,
    specPath: "docs/design_spec/surreal-eggplant-supernova-prompt.md",
  };
}

export async function DesignSpecPanel() {
  return;
  const { content, specPath } = await getDesignSpec();

  return (
    <div className="sticky top-0 z-[120] border-b border-white/10 bg-[#070409]/72 px-2">
      <div className="fest-container py-3">
        <details className="group rounded-[1.25rem] border border-[#fb7185]/16 bg-[linear-gradient(180deg,rgba(30,12,22,0.88),rgba(10,8,12,0.92))]">
          <summary className="text-lightgray/78 flex cursor-pointer list-none items-center justify-between gap-4 px-4 py-3 font-mono text-[11px] tracking-[0.18em] uppercase md:px-5 md:text-sm">
            <span className="truncate">Live Design Spec / surreal-eggplant-supernova-prompt</span>
            <span className="shrink-0 text-[#facc15]/78 transition-transform group-open:rotate-45">+</span>
          </summary>
          <div className="border-t border-white/10 px-4 py-4 md:px-5">
            <div className="text-lightgray/58 flex flex-wrap items-center gap-3 pb-4 font-mono text-[11px] tracking-[0.18em] uppercase">
              <span className="rounded-full border border-white/10 px-3 py-1">Source / {specPath}</span>
              <span className="rounded-full border border-white/10 px-3 py-1">Visible on all /test pages</span>
              <span className="rounded-full border border-white/10 px-3 py-1">Edit file to update panel</span>
            </div>
            <pre className="text-lightgray/92 max-h-[40vh] overflow-auto rounded-[1.2rem] border border-white/10 bg-black/20 p-4 font-mono text-[12px] leading-6 whitespace-pre-wrap">
              {content}
            </pre>
          </div>
        </details>
      </div>
    </div>
  );
}
