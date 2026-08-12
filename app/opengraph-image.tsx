import { ImageResponse } from "next/og";
import { identity } from "@/lib/site";

export const alt = `${identity.name} — ${identity.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            width: 56,
            height: 4,
            borderRadius: 2,
            background: "#1d4ed8",
            marginBottom: 32,
          }}
        />
        <div
          style={{
            display: "flex",
            fontSize: 76,
            fontWeight: 800,
            letterSpacing: "-0.04em",
            color: "#0f172a",
          }}
        >
          {identity.name}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 20,
            fontSize: 34,
            fontWeight: 600,
            letterSpacing: "-0.02em",
            color: "#55637a",
          }}
        >
          {identity.title}
        </div>
      </div>
    ),
    { ...size }
  );
}
