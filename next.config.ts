import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // AVIF 우선, 미지원 브라우저는 WebP로 폴백 (더 선명 + 더 가벼움)
    formats: ["image/avif", "image/webp"],
    // Next 16 부터 사용할 quality 값을 명시해야 함 (기본 [75])
    qualities: [75, 90, 100],
  },
};

export default nextConfig;
