import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const contentType = "image/png";

export default async function Icon() {
  const data = await readFile(join(process.cwd(), "public/logos/eggplant-logo.png"));
  const base64 = data.toString("base64");
  const src = `data:image/png;base64,${base64}`;

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img alt="Eggplant logo" src={src} width={64} height={64} />
    </div>,
    { width: 64, height: 64 },
  );
}
