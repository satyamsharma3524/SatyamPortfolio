import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/** The favicon's four-cell motif at 180px, for iOS home screens and PNG-only crawlers. */
export default function AppleIcon() {
  const cell = 40;
  const gap = 12;
  const start = (180 - cell * 2 - gap) / 2;
  const cells = [
    { x: 0, y: 0, fill: "#2563EB", stroke: false },
    { x: 1, y: 0, fill: "transparent", stroke: true },
    { x: 0, y: 1, fill: "transparent", stroke: true },
    { x: 1, y: 1, fill: "#F8FAFC", stroke: false },
  ];
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", background: "#0F172A", position: "relative" }}>
        {cells.map((c) => (
          <div
            key={`${c.x}${c.y}`}
            style={{
              position: "absolute",
              left: start + c.x * (cell + gap),
              top: start + c.y * (cell + gap),
              width: cell,
              height: cell,
              borderRadius: 8,
              background: c.fill,
              border: c.stroke ? "6px solid rgba(248,250,252,0.55)" : "none",
            }}
          />
        ))}
      </div>
    ),
    size,
  );
}
