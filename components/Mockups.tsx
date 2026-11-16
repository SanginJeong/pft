import Image from "next/image";
import type { Project } from "@/data/content";

function PhoneFrame({
  project,
  className,
}: {
  project: Project;
  className?: string;
}) {
  return (
    <div
      className={`relative aspect-[9/19] overflow-hidden rounded-[2.2rem] border-[6px] border-[#1d1d1f] bg-[#1d1d1f] shadow-2xl ${className ?? ""}`}
    >
      {/* 다이내믹 아일랜드 */}
      <div className="absolute left-1/2 top-2 z-10 h-4 w-16 -translate-x-1/2 rounded-full bg-black" />
      {project.image ? (
        <Image
          src={project.image}
          alt={`${project.title} 스크린샷`}
          fill
          sizes="(max-width: 768px) 40vw, 280px"
          quality={90}
          className="rounded-[1.8rem] object-cover object-top"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center rounded-[1.8rem] bg-gradient-to-br from-[#3a3a3f] to-[#1d1d1f]">
          <span className="px-4 text-center text-sm font-semibold text-neutral-400">
            {project.title}
          </span>
        </div>
      )}
    </div>
  );
}

function LaptopFrame({
  project,
  className,
}: {
  project: Project;
  className?: string;
}) {
  return (
    <div className={`w-full ${className ?? ""}`}>
      {/* 화면 */}
      <div className="relative mx-auto w-[86%] rounded-t-xl border-[6px] border-b-0 border-[#1d1d1f] bg-[#1d1d1f] shadow-2xl">
        {/* 카메라 노치 */}
        <div className="absolute left-1/2 top-0 z-10 h-2 w-16 -translate-x-1/2 rounded-b-lg bg-[#1d1d1f]" />
        <div className="relative aspect-[16/10] overflow-hidden rounded-t-md bg-black">
          {project.image ? (
            <Image
              src={project.image}
              alt={`${project.title} 스크린샷`}
              fill
              sizes="(max-width: 768px) 90vw, 800px"
              quality={90}
              className="object-cover object-top"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#3a3a3f] to-[#1d1d1f]">
              <span className="px-4 text-center text-sm font-semibold text-neutral-400">
                {project.title}
              </span>
            </div>
          )}
        </div>
      </div>
      {/* 하단 받침(힌지) */}
      <div className="relative mx-auto h-[10px] w-full rounded-b-[0.45rem] bg-gradient-to-b from-[#2b2b2e] to-[#141416] shadow-2xl">
        <div className="absolute left-1/2 top-0 h-[5px] w-[18%] -translate-x-1/2 rounded-b-lg bg-[#0c0c0d]" />
      </div>
    </div>
  );
}

// 프로젝트의 device 값에 따라 휴대폰/노트북 목업을 렌더링합니다.
export function ProjectMock({
  project,
  variant,
}: {
  project: Project;
  variant: "card" | "page";
}) {
  if (project.device === "laptop") {
    return (
      <LaptopFrame
        project={project}
        className={
          variant === "card"
            ? "mb-4 self-end transition-transform duration-500 group-hover:-translate-y-1"
            : "max-w-2xl"
        }
      />
    );
  }
  return (
    <PhoneFrame
      project={project}
      className={
        variant === "card"
          ? "w-36 flex-none self-start translate-y-6 transition-transform duration-500 group-hover:translate-y-3 sm:w-40"
          : "w-52 sm:w-64"
      }
    />
  );
}
