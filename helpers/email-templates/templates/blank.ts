import { renderEmailTemplate } from "../render-email-template";
import type { EmailItemT } from "../constants";

export function buildBlankEmail(options?: { preview?: boolean }): string {
  const items: EmailItemT[] = [
    { type: "text", content: "Hi,", bold: true },
    { type: "text", content: "Your message here." },
    { type: "text", content: "Konrad", marginBottom: "0" },
  ];

  return renderEmailTemplate({
    items,
    preview: options?.preview,
  });
}
