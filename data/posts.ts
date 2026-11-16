// 블로그 글은 이 파일에서 작성하세요.
// 본문(details)은 프로젝트 상세(data/content.ts 의 details)와 완전히 같은 방식으로 씁니다.
//  - label: 섹션 제목
//  - content: 본문. **굵게**, 줄바꿈(\n) 그대로 반영
//  - image: content 아래에 붙는 이미지 — public/blog/ 에 넣고 "/blog/파일명.png" 형태로 지정
//  - contentAfter: 이미지 아래에 이어지는 본문
//  - 본문 중간에 이미지를 넣으려면 한 줄에 "![설명](/blog/파일명.png)"
//  - link: 섹션 아래에 표시할 외부 링크 버튼

import type { ProjectDetail } from "@/data/content";

export type Post = {
  slug: string; // 글 주소 (/blog/{slug}). 영문 소문자와 하이픈만 사용
  title: string;
  summary: string; // 목록 카드와 글 상단에 표시되는 한 줄 소개
  date: string; // 작성일 "YYYY.MM.DD" — 목록은 이 값 기준 최신순으로 정렬됩니다
  tags: string[];
  thumbnail?: string; // 목록 카드 썸네일 (선택)
  details: ProjectDetail[];
};

export const posts: Post[] = [
  {
    slug: "hello-blog",
    title: "블로그를 포트폴리오로 옮겼습니다",
    summary: "이 글은 예시입니다. data/posts.ts 에서 수정하거나 삭제하세요.",
    date: "2026.11.16",
    tags: ["회고"],
    details: [
      {
        label: "글 작성 방법",
        content:
          "블로그 글은 **data/posts.ts** 에 객체 하나를 추가하면 됩니다. 본문은 프로젝트 상세와 똑같이 **섹션(label + content)** 단위로 작성합니다.\n\n줄바꿈은 그대로 반영되고, **굵게** 표기도 사용할 수 있습니다.",
      },
      {
        label: "이미지 넣기",
        content:
          "이미지는 **public/blog/** 폴더에 넣고 **image** 필드에 경로를 적으면 섹션 본문 아래에 표시됩니다. 본문 중간에 넣고 싶다면 이미지 마크다운 문법을 한 줄로 작성하면 됩니다. (자세한 형식은 data/posts.ts 상단 주석 참고)",
      },
    ],
  },
];

// 최신순 정렬 ("YYYY.MM.DD" 문자열은 사전순 비교로 정렬 가능)
export const sortedPosts = [...posts].sort((a, b) =>
  b.date.localeCompare(a.date),
);
