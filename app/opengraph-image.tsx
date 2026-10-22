import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";

export const alt = "SOYL — Persian & Lebanese restaurant in Dubai Design District";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const photo = await readFile(
    path.join(process.cwd(), "public", "images", "hero-team.jpeg"),
  );
  const src = `data:image/jpeg;base64,${photo.toString("base64")}`;

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", background: "#dedcd3" }}>
        <div
          style={{
            width: 600,
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "0 64px",
            color: "#466e8b",
          }}
        >
          <div style={{ fontSize: 24, letterSpacing: 4, textTransform: "uppercase", display: "flex" }}>
            SOYL · DUBAI DESIGN DISTRICT
          </div>
          <div
            style={{
              marginTop: 40,
              fontSize: 96,
              lineHeight: 1.02,
              fontFamily: "serif",
              display: "flex",
            }}
          >
            Come hungry.
          </div>
          <div
            style={{
              marginTop: 12,
              fontSize: 64,
              lineHeight: 1.1,
              fontFamily: "serif",
              fontStyle: "italic",
              display: "flex",
            }}
          >
            Stay a little longer.
          </div>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt=""
          width={600}
          height={630}
          style={{ width: 600, height: 630, objectFit: "cover" }}
        />
      </div>
    ),
    { ...size },
  );
}
