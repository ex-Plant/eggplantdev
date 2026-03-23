import { BRAND, EGGPLANT_LOGO, EGGPLANT_LOGO_PREVIEW, type EmailItemT } from "./constants";

type PropsT = {
  title?: string;
  items: EmailItemT[];
  footer?: string;
  preview?: boolean;
};

export function renderEmailTemplate({ title, items, footer, preview = false }: PropsT): string {
  const contentHtml = items
    .map((el) => {
      if (el.type === "text") {
        const margin = el.marginBottom ?? "16px";
        const color = el.muted ? BRAND.textMuted : BRAND.text;
        const weight = el.bold ? "font-weight: 600;" : "";

        return `
          <p style="
            color: ${color};
            font-size: 15px;
            line-height: 1.7;
            margin: 0 0 ${margin} 0;
            ${weight}
          ">${el.content}</p>`;
      }

      if (el.type === "button") {
        return `
          <div style="margin: 28px 0; text-align: center;">
            <table role="presentation" cellpadding="0" cellspacing="0" style="margin: 0 auto;">
              <tr>
                <td style="
                  background: linear-gradient(135deg, #3b82f6, #8b5cf6, #d946ef);
                  border-radius: 10px;
                  padding: 2px;
                ">
                  <a href="${el.url}" style="
                    background-color: #ffffff;
                    color: ${BRAND.bg};
                    padding: 12px 28px;
                    text-decoration: none;
                    border-radius: 8px;
                    font-weight: 600;
                    display: block;
                    font-size: 14px;
                    letter-spacing: 0.04em;
                    text-transform: uppercase;
                    font-family: monospace, 'Courier New', Courier;
                  ">${el.label}</a>
                </td>
              </tr>
            </table>
          </div>`;
      }

      if (el.type === "divider") {
        return `<hr style="border: none; border-top: 1px solid ${BRAND.border}; margin: 24px 0;" />`;
      }

      if (el.type === "raw") {
        return el.html;
      }

      return "";
    })
    .join("\n");

  const titleHtml = title
    ? `<h1 style="
        color: ${BRAND.text};
        font-size: 22px;
        font-weight: 600;
        margin: 0 0 24px 0;
        letter-spacing: -0.01em;
      ">${title}</h1>`
    : "";

  const footerHtml = footer
    ? `<p style="
        color: ${BRAND.textMuted};
        font-size: 12px;
        text-align: center;
        margin: 24px 0 0 0;
        line-height: 1.6;
      ">${footer}</p>`
    : "";

  const logo = preview ? EGGPLANT_LOGO_PREVIEW : EGGPLANT_LOGO;

  return `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="color-scheme" content="dark">
    <meta name="supported-color-schemes" content="dark">
    <style>
      :root { color-scheme: dark; }
      body, .body-bg { background-color: ${BRAND.bg} !important; }
      .card-bg { background-color: ${BRAND.cardBg} !important; }
    </style>
  </head>
  <body class="body-bg" style="
    background-color: ${BRAND.bg} !important;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    margin: 0;
    padding: 32px 16px;
    color: ${BRAND.text};
  ">
    <div class="card-bg" style="
      max-width: 560px;
      margin: 0 auto;
      background-color: ${BRAND.cardBg} !important;
      padding: 32px;
      border-radius: 8px;
      border: 1px solid ${BRAND.border};
    ">
      <div style="text-align: left; margin-bottom: 24px;">
        ${logo}
      </div>

      ${titleHtml}
      ${contentHtml}
      ${footerHtml}
    </div>
  </body>
</html>`;
}
