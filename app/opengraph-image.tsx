import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#09090b",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px 100px",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            flex: 1,
          }}
        >
          <div
            style={{
              display: "flex",
              color: "#fbbf24",
              fontSize: 16,
              marginBottom: 32,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
            }}
          >
            Software Engineer · Product Builder · System Architect
          </div>
          <div
            style={{
              display: "flex",
              color: "#fafafa",
              fontSize: 80,
              fontWeight: 700,
              lineHeight: 1.0,
              marginBottom: 32,
            }}
          >
            Shuvo
          </div>
          <div
            style={{
              display: "flex",
              color: "#a1a1aa",
              fontSize: 26,
              lineHeight: 1.5,
              maxWidth: 700,
            }}
          >
            Building scalable systems and real products. Creator of Ezdu and Better IELTS.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            position: "absolute",
            bottom: 80,
            right: 100,
            color: "#3f3f46",
            fontSize: 14,
            letterSpacing: "0.1em",
          }}
        >
          hrshuvo.dev
        </div>
      </div>
    ),
    size
  );
}
