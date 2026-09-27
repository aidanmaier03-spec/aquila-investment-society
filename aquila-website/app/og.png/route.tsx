import { ImageResponse } from "next/og";
import { site } from "@/content/site";
import { brandFonts, markDataUri } from "../brand-image";

export const dynamic = "force-static";

/** Served as /og.png: a real file name so static hosts send the right content type. */
export async function GET() {
  const line = "rgba(255,255,255,0.8)";
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          backgroundImage: "linear-gradient(135deg, #a4d0b9, #80cbd8)",
          fontFamily: "Inter",
          fontWeight: 300,
          color: "#ffffff",
        }}
      >
        <div style={{ position: "absolute", left: 560, top: 0, bottom: 0, width: 2, background: line }} />
        <div style={{ position: "absolute", left: 0, width: 560, top: 352, height: 2, background: line }} />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={markDataUri("rgba(255,255,255,0.92)")}
          width={230}
          height={230}
          alt=""
          style={{ position: "absolute", left: 290, top: 200 }}
        />
        <div style={{ position: "absolute", left: 604, top: 222, display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 132, lineHeight: 1, letterSpacing: -4 }}>{site.shortName.toLowerCase()}</div>
          <div style={{ fontSize: 44, marginTop: 22, letterSpacing: -1 }}>{site.nameSuffix.toLowerCase()}</div>
        </div>
        <div style={{ position: "absolute", left: 606, bottom: 60, fontSize: 30, fontWeight: 400, color: "#b81900" }}>
          {site.motto}
        </div>
      </div>
    ),
    { width: 1200, height: 630, fonts: await brandFonts() },
  );
}
