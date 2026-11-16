import Image from "next/image";
import type { ProjectDetail } from "@/data/content";

// content 문자열의 **강조** 표기를 <strong>으로 렌더링합니다. 줄바꿈은 그대로 유지됩니다.
function renderRichText(text: string) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={i} className="font-semibold text-neutral-900">
        {part.slice(2, -2)}
      </strong>
    ) : (
      part
    ),
  );
}

const bodyClass =
  "whitespace-pre-line text-[17px] leading-[1.85] text-neutral-700";

function SectionImage({ src, alt }: { src: string; alt: string }) {
  return (
    <Image
      src={src}
      alt={alt}
      width={0}
      height={0}
      sizes="(max-width: 768px) 100vw, 768px"
      quality={90}
      className="my-6 h-auto w-full rounded-2xl border border-neutral-100"
    />
  );
}

// 본문 중간의 `![설명](/경로.png)` 줄을 이미지로 렌더링하고, 나머지는 문단으로 표시
function renderBody(text: string) {
  const parts = text.split(/\n*!\[([^\]]*)\]\(([^)]+)\)\n*/g);
  const blocks = [];
  for (let i = 0; i < parts.length; i += 3) {
    if (parts[i]) {
      blocks.push(
        <p key={`p${i}`} className={bodyClass}>
          {renderRichText(parts[i])}
        </p>,
      );
    }
    if (parts[i + 2]) {
      blocks.push(
        <SectionImage key={`img${i}`} src={parts[i + 2]} alt={parts[i + 1]} />,
      );
    }
  }
  return blocks;
}

// 프로젝트 상세 / 블로그 글 본문을 같은 방식으로 렌더링합니다.
// 섹션 순서: label(제목) → content → image → contentAfter → link
export default function DetailSections({
  sections,
}: {
  sections: ProjectDetail[];
}) {
  return (
    <div className="space-y-16">
      {sections.map((section) => (
        <section key={section.label}>
          <h2 className="mb-5 text-2xl font-bold tracking-tight text-neutral-900 sm:text-[28px]">
            {section.label}
          </h2>
          {renderBody(section.content)}
          {section.image && (
            <SectionImage src={section.image} alt={`${section.label} 이미지`} />
          )}
          {section.contentAfter && (
            <div className="mt-4">{renderBody(section.contentAfter)}</div>
          )}
          {section.link && (
            <a
              href={section.link.href}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-1 rounded-full border border-neutral-300 px-4 py-2 text-sm font-semibold text-neutral-800 transition-colors hover:border-black"
            >
              {section.link.label} ↗
            </a>
          )}
        </section>
      ))}
    </div>
  );
}
