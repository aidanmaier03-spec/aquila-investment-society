import { readFile } from "node:fs/promises";
import { join } from "node:path";

/** Shared helpers for the generated Open Graph and Apple touch images. */

export function markDataUri(color = "#ffffff") {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><mask id="c"><rect width="64" height="64" fill="#fff"/><path d="M13 68L32 17L51 68" fill="none" stroke="#000" stroke-width="6"/></mask></defs><circle cx="32" cy="32" r="30" fill="${color}" mask="url(#c)"/></svg>`;
  return `data:image/svg+xml;base64,${Buffer.from(svg).toString("base64")}`;
}

const fontFile = (file: string) => readFile(join(process.cwd(), "node_modules", "@fontsource", "inter", "files", file));

export async function brandFonts() {
  const [light, regular] = await Promise.all([
    fontFile("inter-latin-300-normal.woff"),
    fontFile("inter-latin-400-normal.woff"),
  ]);
  return [
    { name: "Inter", data: light, weight: 300 as const, style: "normal" as const },
    { name: "Inter", data: regular, weight: 400 as const, style: "normal" as const },
  ];
}
