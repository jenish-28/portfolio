import { ImageResponse } from "next/og";

export const size = {
  width: 64,
  height: 64,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0a0f",
          color: "#00e5ff",
          fontSize: 34,
          border: "1px solid rgba(0,229,255,0.3)",
        }}
      >
        JP
      </div>
    ),
    size,
  );
}
