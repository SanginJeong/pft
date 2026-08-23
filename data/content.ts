// 사이트에 표시되는 모든 내용은 이 파일에서 수정하세요.

export const profile = {
  name: "정상인", // TODO: 실명 확인 후 수정
  role: "Frontend Developer",
  tagline: "사용자 경험에 진심인 신입 프론트엔드 개발자입니다.",
  intro:
    "React와 Next.js로 서비스를 만들며, 디테일한 인터랙션과 읽기 좋은 코드를 좋아합니다.", // TODO: 자기소개 한 줄
  email: "sanginjeong07@gmail.com",
  github: "https://github.com/Sanginjeong", // TODO: GitHub 주소
  links: [
    // 추가하고 싶은 링크 (블로그, LinkedIn 등)
    // { label: "Blog", href: "https://..." },
  ] as { label: string; href: string }[],
};

export type HistoryItem = {
  period: string;
  title: string;
  detail?: string;
};

// 오른쪽 이력 영역에 표시됩니다. 최신순으로 작성하세요.
export const history: HistoryItem[] = [
  {
    period: "2024",
    title: "○○대학교 ○○학과 졸업",
    detail: "",
  },
  {
    period: "2026",
    title: "국립한국해양대학교 데이터사이언스전공 졸업",
    detail: "JavaScript 딥다이브 스터디 리드",
  },
  {
    period: "2025", // TODO: 실제 이력으로 수정
    title: "코드잇 FE 부트캠프",
    detail: "React/Next.js 기반 팀 프로젝트 다수 진행",
  },
];

export type Project = {
  title: string;
  summary: string;
  description: string;
  tags: string[];
  link?: string; // 배포 주소
  repo?: string; // GitHub 저장소
  image?: string; // 대표 스크린샷 — public/projects/ 에 넣고 "/projects/파일명.png" 형태로 지정 (세로 화면 캡처 권장)
  details?: { label: string; content: string }[]; // 모달에 표시되는 상세 내용
};

export const projects: Project[] = [
  {
    title: "블로그 썸네일 메이커",
    summary: "커머스 웹 서비스",
    description:
      "상품 탐색부터 장바구니, 주문까지 이어지는 쇼핑몰 서비스를 구현했습니다.", // TODO: 프로젝트 설명 수정
    tags: ["React", "Next.js", "TypeScript"],
    link: "",
    repo: "",
    image: "", // TODO: public/projects/wondermall.png 추가 후 "/projects/wondermall.png"
    details: [
      {
        label: "개요",
        content:
          "상품 탐색부터 장바구니, 주문까지 커머스의 핵심 흐름을 구현한 프로젝트입니다.", // TODO
      },
      {
        label: "주요 기능",
        content: "상품 목록/상세, 장바구니, 주문 프로세스, 검색", // TODO
      },
      {
        label: "기술적 도전",
        content: "여기에 트러블슈팅이나 고민했던 지점을 적어주세요.", // TODO
      },
    ],
  },
  {
    title: "HR Platform",
    summary: "인사 관리 플랫폼",
    description:
      "구성원 정보와 근태를 한 곳에서 관리하는 HR 플랫폼을 개발했습니다.", // TODO: 프로젝트 설명 수정
    tags: ["React", "TypeScript"],
    link: "",
    repo: "",
    image: "", // TODO
    details: [
      {
        label: "개요",
        content: "구성원 정보와 근태를 한 곳에서 관리하는 HR 플랫폼입니다.", // TODO
      },
      {
        label: "주요 기능",
        content: "구성원 관리, 근태 기록, 대시보드", // TODO
      },
      {
        label: "기술적 도전",
        content: "여기에 트러블슈팅이나 고민했던 지점을 적어주세요.", // TODO
      },
    ],
  },
  {
    title: "Portfolio",
    summary: "포트폴리오 사이트",
    description:
      "지금 보고 계신 사이트입니다. 섹션 스냅 스크롤과 모션 디자인을 직접 구현했습니다.",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    link: "",
    repo: "",
    image: "",
    details: [
      {
        label: "개요",
        content:
          "애플 스타일의 원페이지 포트폴리오. 섹션 스냅 스크롤과 Framer Motion 기반 등장 애니메이션을 구현했습니다.",
      },
    ],
  },
];

export type Study = {
  title: string;
  summary: string;
  href: string; // 상세 카드의 "보러 가기" 링크
  period?: string;
  tags: string[]; // 카테고리 태그 (예: JavaScript, CS, 알고리즘)
  detail?: string; // 카드 클릭 시 펼쳐지는 상세 설명
};

export const studies: Study[] = [
  {
    title: "JavaScript 딥다이브 스터디", // TODO: 실제 스터디로 수정
    summary: "모던 자바스크립트 딥다이브를 함께 읽고 정리하는 스터디",
    href: "https://github.com/your-study-repo",
    period: "2026 ~",
    tags: ["JavaScript", "도서"],
    detail:
      "매주 한 챕터씩 읽고 정리한 내용을 발표하며, 헷갈리는 개념은 예제 코드로 직접 검증합니다.", // TODO
  },
  {
    title: "알고리즘 스터디",
    summary: "매주 코딩 테스트 문제를 풀고 리뷰하는 스터디",
    href: "https://github.com/your-study-repo",
    period: "2026 ~",
    tags: ["알고리즘", "코딩테스트"],
    detail:
      "주 3회 문제를 풀고 서로의 풀이를 리뷰하며 더 나은 접근을 찾습니다.", // TODO
  },
  {
    title: "CS 스터디",
    summary: "네트워크·운영체제 등 CS 기초를 다지는 스터디",
    href: "https://github.com/your-study-repo",
    period: "2026 ~",
    tags: ["CS", "네트워크", "운영체제"],
    detail: "면접에서 자주 나오는 CS 주제를 정리하고 서로 질문하며 검증합니다.", // TODO
  },
];
