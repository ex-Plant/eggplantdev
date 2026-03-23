import { renderEmailTemplate } from "../render-email-template";
import type { EmailItemT } from "../constants";
import type { LocaleT } from "@/lib/i18n/types";

const copy = {
  en: {
    greeting: (name?: string) => (name ? `Hi ${name},` : "Hi,"),
    body: "Thanks for reaching out! I received your message and will get back to you as soon as I can — usually within a couple of days.",
    cta: "In the meantime, feel free to check out some of my work:",
    button: "Visit eggplantdev.com",
    signoff: "Talk soon,<br/>Konrad",
    footer: "This is an automatic reply — no need to respond to this email.",
  },
  pl: {
    greeting: (name?: string) => (name ? `Cześć ${name},` : "Cześć,"),
    body: "Dzięki za wiadomość! Otrzymałem Twoje zgłoszenie i odpowiem najszybciej jak mogę — zwykle w ciągu kilku dni.",
    cta: "W międzyczasie zapraszam do obejrzenia moich projektów:",
    button: "Odwiedź eggplantdev.com",
    signoff: "Do usłyszenia,<br/>Konrad",
    footer: "To jest automatyczna odpowiedź — nie musisz odpisywać na tego maila.",
  },
} as const;

type OptionsT = { preview?: boolean };

export function buildAutoReplyEmail(locale: LocaleT, name?: string, options?: OptionsT): string {
  const t = copy[locale];

  const items: EmailItemT[] = [
    { type: "text", content: t.greeting(name), bold: true },
    { type: "text", content: t.body },
    // { type: "text", content: t.cta },
    // { type: "button", label: t.button, url: "https://eggplantdev.com" },
    // { type: "divider" },
    { type: "text", content: t.signoff, marginBottom: "0" },
  ];

  return renderEmailTemplate({
    items,
    footer: t.footer,
    preview: options?.preview,
  });
}
