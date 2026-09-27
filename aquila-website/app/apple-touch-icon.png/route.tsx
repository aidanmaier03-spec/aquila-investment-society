import { ImageResponse } from "next/og";
import { markDataUri } from "../brand-image";

export const dynamic = "force-static";

/** Served as /apple-touch-icon.png. */
export function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#ffffff",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={markDataUri("#b81900")} width={140} height={140} alt="" />
      </div>
    ),
    { width: 180, height: 180 },
  );
}
