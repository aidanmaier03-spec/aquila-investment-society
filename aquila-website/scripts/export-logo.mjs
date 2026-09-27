// Exports the Aquila mark as PNG files into /brand. Run: node scripts/export-logo.mjs
import { writeFile } from "node:fs/promises";
import { createElement as h } from "react";
import { ImageResponse } from "next/dist/compiled/@vercel/og/index.node.js";

const RED = "#b81900";

function markSvg(color) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><mask id="c"><rect width="64" height="64" fill="#fff"/><path d="M13 68L32 17L51 68" fill="none" stroke="#000" stroke-width="6"/></mask></defs><circle cx="32" cy="32" r="30" fill="${color}" mask="url(#c)"/></svg>`;
  return `data:image/svg+xml;base64,${Buffer.from(svg).toString("base64")}`;
}

async function render(file, { size, mark, color, background }) {
  const image = h(
    "div",
    {
      style: {
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: background ?? "transparent",
      },
    },
    h("img", { src: markSvg(color), width: mark, height: mark }),
  );
  const res = new ImageResponse(image, { width: size, height: size });
  await writeFile(file, Buffer.from(await res.arrayBuffer()));
  console.log("wrote", file);
}

await render("brand/aquila-logo-red.png", { size: 1024, mark: 1024, color: RED });
await render("brand/aquila-logo-white.png", { size: 1024, mark: 1024, color: "#ffffff" });
await render("brand/aquila-linkedin-profile.png", { size: 400, mark: 280, color: RED, background: "#ffffff" });
