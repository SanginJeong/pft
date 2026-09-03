// 사이트에 표시되는 모든 내용은 이 파일에서 수정하세요.

export const profile = {
  name: "정상인", // TODO: 실명 확인 후 수정
  role: "Frontend Developer",
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
    period: "2026",
    title: "국립한국해양대학교 데이터사이언스전공 졸업",
    detail: "프로그래밍 기초 학습 및 대외활동 경험",
  },
  {
    period: "2025",
    title: "코드잇 FE 부트캠프",
    detail: "프론트엔드 기초 역량 및 소프트웨어 스킬 향상",
  },
];

export type ProjectDetail = {
  label: string;
  content: string;
  image?: string; // 이 섹션 설명에 함께 보여줄 이미지 — public/ 에 넣고 "/파일명.png" 형태로 지정
  contentAfter?: string; // 이미지 아래에 이어서 표시할 본문 (content → image → contentAfter 순서)
  link?: { label: string; href: string }; // 이 섹션 아래에 표시할 데모/외부 링크 (예: Figma)
};

export type Project = {
  title: string;
  summary: string;
  period?: string; // 프로젝트 기간. 모달 상세에서 summary 아래에 표시됩니다 (예: "2025.08.09 ~ 08.26")
  tags: string[];
  link?: string;
  repo?: string;
  device?: "mobile" | "laptop"; // 목업 모양 선택 (기본 mobile). laptop 은 가로형 노트북 목업 — 가로 화면 캡처 권장
  image?: string; // 대표 스크린샷 — public/projects/ 에 넣고 "/projects/파일명.png" 형태로 지정 (mobile: 세로, laptop: 가로 캡처 권장)
  details?: ProjectDetail[];
};

export const projects: Project[] = [
  {
    title: "The julge",
    summary: "시급 기반 구인·구직 매칭 플랫폼",
    period: "2025.09.29 ~ 2025.10.21",
    tags: ["Next.js", "TypeScript", "React Query", "성능 최적화", "AI 협업"],
    link: "https://sanginjeong-thejulge.vercel.app/",
    repo: "https://github.com/SanginJeong/thjr",
    device: "laptop", // 노트북 목업으로 표시 (가로 캡처)
    image: "/projects/thejulge.png",
    details: [
      {
        label: "개요",
        content:
          "팀 프로젝트로 개발한 **시급 기반 구인·구직 매칭 플랫폼**입니다. 사장님은 가게와 채용공고를 등록하고, 구직자는 공고를 탐색·지원하는 서비스입니다. \n\n프로젝트 이후 개인적으로 **AI를 활용한 코드 리뷰 워크플로우를 설계해 서비스를 개선**하고, 렌더링 전략과 API 구조를 다시 분석하며 성능을 끌어올린 리팩토링 프로젝트로 이어갔습니다.",
      },
      {
        label: "주요 기능",
        content:
          "**공고 목록(무한 스크롤·정렬·페이지네이션), 공고 상세, 맞춤 공고 추천, 가게 등록·관리(고용주), 지원, 인증**으로 이어지는 구인·구직 흐름을 구현했습니다. \n\n인증 흐름은 Context 기반으로 정리하고, 페이지마다 렌더링 전략을 다르게 적용했습니다.",
      },
      {
        label: "AI 기반 코드 리뷰 워크플로우",
        content:
          "AI에게 구현을 통째로 위임하는 대신, **프로젝트 구조와 페이지별 렌더링 전략을 함께 분석하며 개선 방향을 직접 결정하는 협업 방식**으로 리팩토링을 진행했습니다. \n\n**CodeRabbit CI와 GitHub MCP를 연계해, CodeRabbit의 자동 리뷰와 Claude의 독립 분석을 교차 검증하는 워크플로우**를 구축했습니다. 이를 통해 단일 AI 리뷰의 한계를 보완하고 코드 리뷰의 신뢰성을 높였습니다.",
      },
      {
        label: "기술적 도전",
        content:
          "가장 크게 배운 건 **모든 페이지를 SSR로 만들려 했던 초기 설계가 패착**이었다는 점입니다. \n\nSSR에서 로그인 상태를 유지하려면 서버가 토큰을 읽을 수 있어야 해서 **토큰을 쿠키에 저장**했고, 그 과정에서 생긴 **SameSite 제약을 우회하려 API 요청을 프록시로 경유**시켰습니다. 그 결과 요청마다 지연이 쌓여 오히려 응답이 느려졌습니다. \n\n돌아보니 **사용자 인증이 필요한 페이지는 SSR의 이점이 크지 않다**는 점을 놓치고 있었습니다. 이를 인정하고, 전부 SSR로 밀어붙이는 대신 **페이지 특성에 따라 SSR과 CSR을 분리**하는 방향으로 다시 설계했습니다.",
        contentAfter:
          "그 결과 측정 수치로 개선을 확인했습니다. \n\n• 인증 페이지의 **프록시 제거 + 토큰 저장 방식 변경**으로 API 평균 응답속도 **673ms → 194ms (약 3배)** \n\n• 메인 페이지에는 **맞춤 공고**와 **전체 공고 리스트**가 함께 있는데, 로그인 사용자마다 다르게 계산되는 맞춤 공고가 로드될 때까지 **모든 사용자에게 동일한 전체 공고 리스트까지 렌더링이 블로킹**되고 있었습니다. \n\n• 그래서 **전체 공고 리스트는 SSR Prefetch로 먼저 그려지게** 하고, **맞춤 공고만 CSR로 분리**해 개인화 데이터가 전체 리스트를 막지 않도록 했습니다. 이 렌더링 분리로 **Performance 점수를 70점 → 98점**으로 끌어올렸습니다.",
      },
    ],
  },
  {
    title: "Coworkers",
    summary: "팀 단위 업무 공유 플랫폼 (팀 프로젝트 · 팀장)",
    tags: ["Next.js", "TypeScript", "TanStack Query", "Storybook", "팀장"],
    period: "2025.10.30 ~ 2025.12.02",
    link: "https://coworkers-sanginjeong.vercel.app/", // TODO: 실제 배포 주소로 교체 (없으면 "")
    repo: "https://github.com/SanginJeong/Coworkers", // TODO: 실제 저장소 주소로 교체
    device: "laptop", // 노트북 목업으로 표시 (가로 캡처)
    image: "/projects/coworkers.png", // TODO: 실제 가로 스크린샷으로 교체
    details: [
      {
        label: "개요",
        content:
          "팀이 할 일과 업무를 한곳에서 공유하는 **팀 단위 업무 공유 플랫폼**입니다. \n\n**Frontend 3인 팀의 팀장**을 맡아, 재사용 UI 컴포넌트·팀 대시보드·게시판을 담당해 구현했습니다.",
      },
      {
        label: "주요 기능",
        content:
          "**팀 대시보드, 게시판, 재사용 UI 컴포넌트**를 구현했습니다. \n\nStorybook으로 공통 컴포넌트를 문서화하고, 서버 상태는 TanStack Query로 관리했습니다.",
      },
      {
        label: "컴포넌트 책임 분리",
        content:
          "모든 종류의 모달을 각각 만드는 대신 **합성 컴포넌트(Compound Component) 패턴**을 적용했습니다. \n\n**Modal의 책임을 열림/닫힘 같은 UI 상태 관리에만 한정**하고, 실제 콘텐츠는 외부에서 조합하도록 설계했습니다. 그 결과 **응집도는 높이고 도메인 모듈과의 결합도는 낮춰, 새로운 모달을 기존 코드 수정 없이 확장**할 수 있는 구조를 마련했습니다.",
      },
      {
        label: "UX 개선",
        content:
          "측정과 QA를 근거로 체감 성능을 개선했습니다. \n\n• 페이지마다 흩어져 있던 **권한 검사 로직 9개를 Next.js Middleware 1개 파일로 통합**해, redirect 시 발생하던 **레이아웃 시프트 문제를 해결** \n• QA에서 발견한 **중복 API 호출을 수정**해 페이지 최초 진입 시 요청 수를 **11건 → 2건(약 80% 절감)** \n• 입력마다 발생하던 요청·렌더링을 **useDebounce(300ms)로 최적화**해 **INP 300ms → 100ms**로 개선",
      },
      {
        label: "기술적 도전 · 협업 프로세스 개선",
        content:
          "프로젝트 도중 **팀원 1명이 이탈해 3명으로 진행**하게 되면서, 남은 인원이 **개발에만 집중할 수 있는 프로세스**를 마련하는 것이 팀장으로서의 과제였습니다. \n\n• **Husky + lint-staged**를 도입해 커밋 단계에서 린트·포맷을 자동화, 컨벤션을 사람이 신경 쓰지 않아도 지켜지도록 했습니다. \n• **PR 컨벤션을 UI 작업은 UI, 데이터 연동은 데이터 연동처럼 성격별로 세분화**해, 리뷰어가 한 번에 볼 변경의 범위를 좁혔습니다. \n\n그 결과 **PR 리뷰 부담을 줄이고, 팀원들이 협업 규칙보다 개발 자체에 집중**할 수 있는 환경을 만들었습니다.",
      },
    ],
  },
  {
    title: "Rolling",
    summary: "롤링페이퍼 웹 커뮤니티 플랫폼 (팀 프로젝트 · 팀장)",
    period: "2025.08.09 ~ 2025.08.26",
    tags: ["React", "React Router", "Tailwind CSS"],
    link: "https://roliing-sprint-18-5.netlify.app/", // TODO: 실제 배포 주소로 교체 (없으면 "")
    repo: "https://github.com/sprint-FE18-5/Codeit-Sprint-Rolling", // TODO: 실제 저장소 주소로 교체
    device: "laptop", // 노트북 목업으로 표시 (가로 캡처)
    image: "/projects/rolling.png",
    details: [
      {
        label: "개요",
        content:
          "**5인 팀의 팀장**을 맡아 약 2주간 진행한 롤링페이퍼 웹 플랫폼입니다. \n\n동료와 메시지를 주고받는 커뮤니티 서비스로, **CRUD를 중심으로 모달·토스트·이모지 반응** 등 다양한 UI 기능을 구현하는 데 초점을 맞췄습니다. **공통 컴포넌트 우선 개발 후 페이지 개발** 순으로 일정을 설계하고, GitHub·Notion 기반 협업 체계를 직접 세팅했습니다.",
      },
      {
        label: "주요 기능",
        content:
          "**랜딩 → 목록 → 생성 → 메시지 작성 → 상세 열람 → 반응·공유**로 이어지는 사용자 흐름을 구현했습니다. \n\n제가 맡은 부분은 **라우팅·레이아웃 구조, Header·Badge 공통 컴포넌트, 이모지 기능, 카카오톡·URL 공유, 롤링페이퍼 생성 페이지, axios interceptor 세팅 및 API 함수 구현**입니다.",
        image: "/projects/rolling-flow.svg",
      },
      {
        label: "협업 · 팀장 경험",
        content: `프로젝트 중 **한 팀원이 데일리 스크럼에 빠지고 코어타임에도 집중하지 않아 팀 분위기가 가라앉는 상황**이 있었습니다. 처음에는 "개발 속도는 사람마다 다르니까"라며 넘어가려 했지만, 상황이 반복되며 팀원 모두가 지쳐갔습니다. \n\n같은 교육생이라 갈등을 피하고만 싶었지만, **팀장으로서 이대로 두면 안 되겠다고 판단해 정중하되 솔직하게 이야기를 꺼냈습니다.** \"시간 안에 어려운 일은 도움을 요청하거나, 처음에 정한 규칙은 지켜주셨으면 좋겠어요\"라고 했습니다. \n\n한 번 솔직하게 부딪히고 나니 **오히려 다른 팀원들도 책임감을 갖고 함께 몰입하는 분위기로 바뀌어 프로젝트에 탄력이 붙었습니다.** 결국 해당 팀원의 작업이 계속 밀렸을 때는, 정중히 양해를 구하고 제가 이어받아 마무리해 기한을 지켰습니다. **갈등을 미루지 않고 마주하는 것**을 배운 경험입니다.`,
      },
      {
        label: "기술적 도전",
        content: `리뷰어가 특히 가독성을 중요하게 봤고, 그중 가장 와닿은 피드백은 **"추상화 수준이 맞지 않는다"**는 점이었습니다. \n\nHeader 안에 Dropdown·이모지 매핑 로직이 그대로 노출되어 있어, ProfileGroup·Picker·Share 같은 다른 컴포넌트들과 읽는 눈높이가 달랐습니다. **이 블록을 HeaderDropdown 컴포넌트로 분리해 한 줄로 정리하고, Header가 같은 추상화 수준의 컴포넌트들로만 구성되도록 맞췄습니다.**`,
        image: "/projects/rolling-refactor.svg",
        contentAfter: `또한 **협업 도구를 과하게 도입(GitHub·Notion·Figma·Discord)했다가 정보가 분산되는 문제**를 겪으며, **도구 선택과 우선순위 설정, 문서화가 개발 속도에 직접 영향을 준다**는 점을 체감했습니다.`,
      },
    ],
  },
  {
    title: "나와 닮은 동물 유형은?",
    summary: "생활 패턴 기반 동물 유형 테스트 & 축제 부스 서비스",
    period: "2025.09.23 ~ 2025.09.27",
    tags: ["React", "기획", "부스 운영", "마케팅"],
    link: "https://lun-lun-neko.github.io/ydplab/",
    repo: "https://github.com/lun-lun-neko/ydplab",
    image: "/projects/animal.png",
    details: [
      {
        label: "개요",
        content:
          "부산 영도 청년 페스티벌 부스 서비스로, 참가 확정 후 단기간에 **프론트엔드 개발부터 부스 운영, 결과물 제작, 마케팅까지 전 과정을 직접 기획하고 구현**했습니다. \n\n**설문 Form → 분석 → 결과**로 이어지는 페이지 구조를 설계하고, 결과로 나온 동물 유형을 **스티커 굿즈로 증정하는 오프라인 마케팅과 연결**해 실사용자를 대상으로 운영해본 프로젝트입니다.",
      },
      {
        label: "주요 기능",
        content: `**QR 코드 접속 → 설문 응답 → 유형 분석 → 결과 화면**으로 이어지는 사용자 흐름을 구현했습니다.
        \n결과 화면에는 **카카오톡 공유 기능**을 붙여, 현장 참가자뿐 아니라 **응시자의 지인까지 서비스를 이용할 수 있는 구조**를 마련했습니다.`,
      },
      {
        label: "기술적 도전",
        content:
          "기술적으로 완성형 프로젝트는 아니지만, **150명의 실사용자를 대상으로 서비스를 직접 운영**하며 현장에서 문제를 마주한 경험이 있습니다. \n\n**Chrome이 아닌 브라우저에서 폰트가 깨지는 크로스 브라우징 이슈**가 현장에서 발생했고, 당시 **fallback 폰트 설정으로 대응**하여 브라우저 호환성 문제를 보완했습니다.",
      },
    ],
  },
  {
    title: "Afterglow (출시 대기)",
    summary:
      "한국관광공사 공모전: 외국인 대상 피부 시술 이후 관광 코스 추천 서비스",
    period: "2026.05 ~ (진행 중)",
    tags: [
      "React Native",
      "Expo",
      "TypeScript",
      "Turborepo",
      "디자인 시스템",
      "AI 협업",
    ],
    repo: "https://github.com/one-two-poof/afterglow-fe",
    image: "/projects/afterglow.png",
    details: [
      {
        label: "개요",
        content:
          "외국인 관광객을 대상으로 **피부 시술 이후의 관광 코스를 추천**하는 서비스입니다. 관광지 조회·검색해 상세를 확인하고, 코스를 추천받는 흐름을 중심으로 합니다. \n\n진행 도중 **웹에서 앱 배포로 방향이 전환**되며 현재 앱으로 마이그레이션하고 있습니다. 초기에 **모노레포 구조로 설계해 둔 덕분에, 타입·API 클라이언트·공통 로직을 웹과 앱에서 그대로 재활용**할 수 있어 방향 전환에 유연하게 대응하고 있습니다.",
      },
      {
        label: "주요 기능",
        content:
          "**병원 조회·검색 → 상세 → 코스 추천** 플로우와 **Google OAuth 로그인**, 지도 기반 UI, 다단계 여행 계획 폼을 구현했습니다. \n\n특히 **시술 직후 자외선을 피해야 하는 사용자 특성**을 고려해 **지도 위에 실제 그림자(그늘)를 그려주는 기능**을 맡았습니다. **SunCalc로 해당 시간·위치의 태양 고도(altitude)와 방위각(azimuth)을 구하고, 건물 높이 데이터를 받아** 건물이 드리우는 **그림자의 방향과 길이를 계산한 뒤, 그 영역을 지도 위에 오버레이로 렌더링**했습니다. \n\n코스 추천 기능에서는 **BE·ML과 함께 데이터 흐름을 직접 설계**했습니다. 추천 요청과 응답을 **ML에 바로 보낼지, BE를 거칠지**, 그리고 결과를 **DB에 저장했다가 불러올지 매번 새로 계산할지**까지 세 파트가 함께 논의하며, 프론트엔드가 어떤 형태의 request/response를 주고받을지 인터페이스를 맞췄습니다.",
      },
      {
        label: "디자인 시스템",
        content:
          "잦은 기획 변경에 대응하기 위해 **재사용 가능한 컴포넌트 기반 디자인 시스템**을 구축했습니다. 색상·타이포·간격 토큰과 공통 컴포넌트를 정의해, 화면이 바뀌어도 일관성을 유지하며 빠르게 조립할 수 있도록 했습니다.",
        link: {
          label: "디자인 시스템 (Figma)",
          href: "https://www.figma.com/design/kXaQCZl4GCGymDR9Pbdj07/afterglow?node-id=0-1&t=akJ2lr6zafZCGYeR-1", // TODO: 실제 Figma 링크로 교체
        },
      },
      {
        label: "기술적 도전 · AI 협업",
        content:
          "현재 **AI를 활용해 웹 코드를 앱(React Native)으로 마이그레이션**하고 있습니다. \n\n솔직히 모든 기술을 완벽히 이해하고 진행하는 것은 아니지만, AI가 내놓은 코드를 그대로 받아 쓰지 않기 위해 **PR마다 스스로 퀴즈를 만들어 풀며** 변경 내용을 이해하고 넘어갑니다. 이렇게 **AI의 생산성과 저의 학습을 동시에** 가져가며, 이해하지 못한 코드는 남기지 않는 방식으로 진행 중인 서비스입니다.",
      },
    ],
  },
  {
    title: "블로그 썸네일 메이커",
    summary: "블로그 썸네일 생성 크롬 익스텐션",
    period: "2026.04.26 ~ 2026.04.27",
    tags: ["Canvas API", "Vanilla JS", "Chrome Extension"],
    link: "https://chromewebstore.google.com/detail/%EB%B8%94%EB%A1%9C%EA%B7%B8-%EC%8D%B8%EB%84%A4%EC%9D%BC-%EB%A9%94%EC%9D%B4%EC%BB%A4/chgdojhboceepfcaibkdolgfkgdhmlcg?hl=ko",
    repo: "https://github.com/SanginJeong/thumbnail-maker",
    device: "laptop",
    image: "/projects/Blog.png",
    details: [
      {
        label: "개요",
        content:
          "블로그 포스팅마다 썸네일을 만드는 번거로움을 없애기 위해 만든 **개인용 크롬 익스텐션**입니다. Figma는 무겁고 Canva는 로그인이 필요한 점이 불편해, **브라우저 어디서든 바로 열어 쓰는 가벼운 도구**를 목표로 했습니다. \n\n**외부 라이브러리 없이 순수 바닐라 JS와 Canvas API만으로**, 기획부터 배포까지 2일 만에 완성해 크롬 웹스토어에 실제로 출시했습니다.",
      },
      {
        label: "주요 기능",
        content:
          "제목·부제목·태그를 입력하면 **800×450px 썸네일을 실시간 미리보기**로 확인하고 PNG로 내려받습니다. \n\n**그라디언트 배경(색상 2개 + 방향 4종), 10가지 프리셋 테마, 4가지 장식 패턴(원형·점·사선·기하학), 폰트·크기·정렬 커스터마이징**을 제공합니다. 배경과 텍스트만으로 완성되도록 설계해 이미지 업로드 과정을 없앴습니다.",
      },
      {
        label: "기술적 도전",
        content:
          "Canvas의 **표시 크기와 실제 해상도를 분리**해, `width/height` 어트리뷰트로 800×450을 고정하고 CSS로만 화면 크기를 맞춰 **내보낼 때 해상도 손실이 없도록** 했습니다. \n\n텍스트는 `measureText()`로 너비를 재 **단어 단위 자동 줄바꿈**을 구현하고, 전체 블록 높이를 역산해 **수직 중앙 정렬**을 맞췄습니다. 익스텐션은 웹폰트를 보장할 수 없어 **시스템 폰트(Apple SD Gothic Neo·Malgun Gothic)로 크로스 플랫폼에 대응**했고, 밝고 어두운 배경 모두에서 읽히도록 항상 그림자를 넣어 **명암 대비**를 확보했습니다. \n\nReact 없이 **전역 state 객체 하나로 상태를 관리**하고 모든 입력 이벤트에서 다시 그리는 방식으로, 규모에 맞게 오버엔지니어링을 피했습니다.",
      },
    ],
  },
];

export type Study = {
  title: string;
  summary: string;
  period?: string;
  tags: string[]; // 카테고리 태그 (예: JavaScript, CS, 알고리즘)
  detail?: string; // 카드 클릭 시 펼쳐지는 상세 설명. 마크다운 문법(제목, 목록, **굵게**, [링크](주소), `코드`, 표 등)을 사용할 수 있습니다.
};

export const studies: Study[] = [
  {
    title: "한계단 PART 2",
    summary: "특정 상황에 대한 개선 방법 발표 스터디",
    period: "2026 ~ 진행중",
    tags: ["UX 개선", "프론트엔드"],
    // 마크다운 문법으로 자유롭게 작성하세요.
    detail: `
### 개요
스터디원들이 돌아가며 개발하면서 마주할 특정 상황을 주제로 선정하고, 개선 방법들을 학습해오는 스터디 입니다

### 스터디를 통해 얻은 점
- 브라우저의 렌더링 과정 이해
- 브라우저 성능 개선 방법

### 다룬 주제
1. [스크롤 인터렉션 성능 개선](https://jeongsangin1.tistory.com/entry/%EC%8A%A4%ED%81%AC%EB%A1%A4-%EC%9D%B8%ED%84%B0%EB%A0%89%EC%85%98-%EC%84%B1%EB%8A%A5-%EA%B0%9C%EC%84%A0)

`,
  },
  {
    title: "한계단 PART 1",
    summary: "프론트엔드 구현 스터디",
    period: "2026",
    tags: ["React", "TypeScript", "구현 테스트"],
    detail: `
### 개요
프론트엔드 구현 과제를 해결하고 서로의 코드를 리뷰하는 스터디 입니다    

### 스터디를 통해 얻은 점
- 컴포넌트 별 적절한 역할, 상태 분리 숙달
- 다른 사람의 코드 리뷰 능력 향상
- 상황에 따른 Promise, async/await 사용 구분
- React 19 에서의 useEffect deps 린트 경고 이해
- Crypto.randomUUID()
- useEffect와 cleanup 함수의 이해

### 다룬 주제
1. [useQuery 구현](https://github.com/hangyedan/assignment_test/pull/4)
2. [jobBoard 구현](https://github.com/hangyedan/assignment_test/pull/10)
3. [Tabs 구현](https://github.com/hangyedan/assignment_test/pull/14)
4. [useArray 구현](https://github.com/hangyedan/assignment_test/pull/21)
5. [StarRating 구현](https://github.com/hangyedan/assignment_test/pull/24)
6. [StopWatch 구현](https://github.com/hangyedan/assignment_test/pull/35)
7. [Image Carousel 구현](https://github.com/hangyedan/assignment_test/pull/37)
8. [useDebounce 구현](https://github.com/hangyedan/assignment_test/pull/47)
9. [Dice Roller 구현](https://github.com/hangyedan/assignment_test/pull/59)`,
  },
  {
    title: "아크 리액터 만들기",
    summary: "React 공식문서 학습 및 발표 스터디",
    period: "2026",
    tags: ["React 19"],
    detail: `
### 개요
React 공식문서를 학습하고 발표하는 스터디

### 스터디를 통해 얻은 점
- 상태 변경 및 렌더링 과정 이해. 특히 useEffect 와 useLayoutEffect
- setState의 원리, 배치 업데이트, 스냅샷 이해
- React가 제시하는 방향성과, 비효율적 코드
- Event 와 Effect를 사용하는 상황의 구분
- 기타 유용한 hook
- React의 라이프사이클

### 다룬 주제
1. [JSX, Component](https://github.com/FE18-Survivor/react-docs-study-learn/blob/main/week-01/%EC%83%81%EC%9D%B8.md)
2. [Props, 순수함수](https://github.com/FE18-Survivor/react-docs-study-learn/blob/main/week-02/%EC%83%81%EC%9D%B8/index.md)
3. [Event, SnapShot](https://github.com/FE18-Survivor/react-docs-study-learn/blob/main/week-03/%EC%83%81%EC%9D%B8.md)
4. [State 불변, Update 함수](https://github.com/FE18-Survivor/react-docs-study-learn/blob/main/week-04/%EC%83%81%EC%9D%B8.md)
5. [선언적 UI, State 구조화](https://github.com/FE18-Survivor/react-docs-study-learn/blob/main/week-05/%EC%83%81%EC%9D%B8.md)
6. [Context](https://github.com/FE18-Survivor/react-docs-study-learn/blob/main/week-06/%EC%83%81%EC%9D%B8/%EC%83%81%EC%9D%B8.md)
7. [Ref, Side Effect](https://github.com/FE18-Survivor/react-docs-study-learn/blob/main/week-07/%EC%83%81%EC%9D%B8.md)
8. [Effect의 라이프사이클](https://github.com/FE18-Survivor/react-docs-study-learn/blob/main/week-08/%EC%83%81%EC%9D%B8.md)
9. [의존성 배열과 커스텀 훅](https://github.com/FE18-Survivor/react-docs-study-learn/blob/main/week-09/%EC%83%81%EC%9D%B8.md)
    `,
  },
  {
    title: "호랑이 길들이기",
    summary: "코어 자바스크립트 도서 스터디",
    period: "2025",
    tags: ["JavaScript"],
    detail: `
### 개요
자바스크립트의 심화 내용들을 요약한 코어 자바스크립트 책을 학습하는 스터디 입니다

### 스터디를 통해 얻은 점
- 자바스크립트 ES6+ 이해
- 얕은 복사와 깊은 복사 이해
- let,var,const와 스코프, 호이스팅 이해
- undefined 와 null의 차이 이해
- 실행 컨텍스트와 this
- Promise, 콜백

### 다룬 주제
1. [자바스크립트의 데이터 타입](https://jeongsangin1.tistory.com/entry/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EC%9D%98-%EB%8D%B0%EC%9D%B4%ED%84%B0-%ED%83%80%EC%9E%85)
2. [실행 컨텍스트](https://jeongsangin1.tistory.com/entry/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%8B%A4%ED%96%89-%EC%BB%A8%ED%85%8D%EC%8A%A4%ED%8A%B8)
3. [자바스크립트의 this](https://jeongsangin1.tistory.com/entry/%EC%BD%94%EC%96%B4-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%8A%A4%ED%84%B0%EB%94%94-5%ED%9A%8C%EC%B0%A8)
4. [this 바인딩](https://jeongsangin1.tistory.com/entry/%EC%BD%94%EC%96%B4-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%8A%A4%ED%84%B0%EB%94%94-6%ED%9A%8C%EC%B0%A8)
5. [Promise와 콜백](https://jeongsangin1.tistory.com/entry/%EC%BD%94%EC%96%B4-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%8A%A4%ED%84%B0%EB%94%94-7%ED%9A%8C%EC%B0%A8)
6. [Prototype 과 클래스](https://jeongsangin1.tistory.com/entry/%EC%BD%94%EC%96%B4-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%8A%A4%ED%84%B0%EB%94%94-10%ED%9A%8C%EC%B0%A8)
    `,
  },
];
