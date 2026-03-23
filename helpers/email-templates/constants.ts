const SITE_URL = "https://eggplantdev.com";

export const BRAND = {
  bg: "#010101",
  cardBg: "#111111",
  text: "#ffffff",
  textMuted: "#999999",
  accent: "#8c99f1",
  green: "#10ffaa",
  border: "#222222",
} as const;

export const EGGPLANT_LOGO = `<img src="${SITE_URL}/logos/eggplant-logo-email.png" alt="eggplantdev" width="48" height="48" style="display: block; border: 0; outline: none;" />`;

export const EGGPLANT_LOGO_PREVIEW = `<img src="/logos/eggplant-logo-email.png" alt="eggplantdev" width="48" height="48" style="display: block; border: 0; outline: none;" />`;

export type EmailItemT =
  | { type: "text"; content: string; bold?: boolean; muted?: boolean; marginBottom?: string }
  | { type: "button"; label: string; url: string }
  | { type: "divider" }
  | { type: "raw"; html: string };
