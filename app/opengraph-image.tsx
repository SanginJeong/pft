import { ImageResponse } from "next/og";
import { profile } from "@/data/content";

// 공유 시 보이는 썸네일(OG 이미지). "정상인 | 포트폴리오" 형태로 표시합니다.
export const alt = `${profile.name} | ${profile.role}`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0b0b0d",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 40,
            color: "#ffffff",
          }}
        >
          <div style={{ fontSize: 110, fontWeight: 700, letterSpacing: -2 }}>
            {profile.name}
          </div>
          <div
            style={{
              width: 4,
              height: 96,
              background: "#3f3f46",
              borderRadius: 4,
            }}
          />
          <div style={{ fontSize: 56, fontWeight: 500, color: "#a1a1aa" }}>
            {profile.role}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
