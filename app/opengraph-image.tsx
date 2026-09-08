import { ImageResponse } from "next/og";
import { profile } from "@/data/content";

// 공유 시 보이는 썸네일(OG 이미지). Hero 섹션 내용을 담아 동적으로 생성합니다.
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
          flexDirection: "column",
          justifyContent: "center",
          padding: "96px",
          background: "#ffffff",
        }}
      >
        <div
          style={{
            fontSize: 32,
            fontWeight: 500,
            color: "#737373",
          }}
        >
          안녕하세요
        </div>
        <div
          style={{
            marginTop: 24,
            display: "flex",
            alignItems: "baseline",
            gap: 20,
          }}
        >
          <div style={{ fontSize: 120, fontWeight: 700, color: "#000000" }}>
            {profile.name}
          </div>
          <div style={{ fontSize: 40, fontWeight: 500, color: "#737373" }}>
            입니다
          </div>
        </div>
        <div
          style={{
            marginTop: 32,
            fontSize: 36,
            fontWeight: 500,
            color: "#737373",
            maxWidth: 900,
            lineHeight: 1.4,
          }}
        >
          서비스의 성능을 수치로 개선하고, 사용자의 불편을 고민합니다
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
