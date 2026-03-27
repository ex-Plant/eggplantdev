"use client";

import * as Accordion from "@radix-ui/react-accordion";

type TestAccordionItemT = {
  id: string;
  label: string;
  component: React.ReactNode;
};

type TestAccordionPropsT = {
  items: TestAccordionItemT[];
  accentColor?: string;
};

export function TestAccordion({ items, accentColor = "#d946ef" }: TestAccordionPropsT) {
  return (
    <Accordion.Root type="multiple" defaultValue={items.map((item) => item.id)} className="flex flex-col gap-2">
      {items.map(({ id, label, component }, i) => (
        <Accordion.Item key={id} value={id} id={id}>
          <Accordion.Trigger
            className="group flex w-full items-center gap-3 rounded-lg border border-white/10 bg-white/[0.02] px-4 py-3 text-left transition-colors hover:bg-white/[0.05] data-[state=open]:border-white/20"
            style={{ "--accent": accentColor } as React.CSSProperties}
          >
            <span className="font-mono text-14 uppercase tracking-widest" style={{ color: accentColor }}>
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="font-mono text-16 uppercase text-white/80">
              {label}
            </span>
            <span className="ml-auto font-mono text-14 text-white/30 transition-transform group-data-[state=open]:rotate-45">
              +
            </span>
          </Accordion.Trigger>
          <Accordion.Content className="overflow-hidden">
            <div className="py-6">
              {component}
            </div>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
