import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = {
  width: 32,
  height: 32,
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
          backgroundColor: "#ffffff",
          position: "relative",
        }}
      >
        {/* Outer frame */}
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            border: "2px solid #1c398e",
            boxSizing: "border-box",
          }}
        />

        {/* Abstract "N" letter mark - minimalist geometric */}
        <div
          style={{
            display: "flex",
            width: "20px",
            height: "20px",
            position: "relative",
          }}
        >
          {/* Left vertical bar */}
          <div
            style={{
              position: "absolute",
              left: "3px",
              top: "3px",
              width: "3px",
              height: "14px",
              backgroundColor: "#1c398e",
            }}
          />
          {/* Diagonal bar */}
          <div
            style={{
              position: "absolute",
              left: "6px",
              top: "3px",
              width: "11px",
              height: "3px",
              backgroundColor: "#1c398e",
              transform: "rotate(55deg)",
              transformOrigin: "left top",
            }}
          />
          {/* Right vertical bar */}
          <div
            style={{
              position: "absolute",
              right: "3px",
              top: "3px",
              width: "3px",
              height: "14px",
              backgroundColor: "#1c398e",
            }}
          />
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
