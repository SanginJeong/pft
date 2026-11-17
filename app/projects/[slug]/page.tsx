import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import DetailSections from "@/components/DetailSections";
import { ProjectMock } from "@/components/Mockups";
import { profile, projects } from "@/data/content";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

// generateStaticParams 에 없는 주소는 404
export const dynamicParams = false;

export async function generateMetadata({
  params,
}: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} | ${profile.name}`,
    description: project.summary,
  };
}

export default async function ProjectPage({
  params,
}: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <>
      <Nav />
      <main className="min-h-dvh bg-white">
        {/* 상단: 목업 + 기본 정보 */}
        <header className="bg-[#f5f5f7] px-6 pb-16 pt-28 sm:pt-32">
          <div className="mx-auto w-full max-w-5xl">
            <Link
              href="/#projects"
              className="text-sm font-medium text-neutral-500 transition-colors hover:text-black"
            >
              ← 프로젝트 목록
            </Link>

            <div className="mt-8 grid items-center gap-12 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
              <div>
                {project.period && (
                  <p className="text-sm font-medium text-neutral-400">
                    {project.period}
                  </p>
                )}
                <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
                  {project.title}
                </h1>
                <p className="mt-4 text-lg font-medium leading-relaxed text-neutral-500">
                  {project.summary}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-white px-3 py-1 text-xs font-medium text-neutral-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {(project.link || project.repo) && (
                  <div className="mt-8 flex flex-wrap gap-3">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full bg-black px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-105"
                      >
                        {project.linkLabel ?? "배포 보기"} ↗
                      </a>
                    )}
                    {project.repo && (
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full border border-neutral-300 bg-white px-5 py-2.5 text-sm font-semibold text-neutral-800 transition-colors hover:border-black"
                      >
                        GitHub ↗
                      </a>
                    )}
                  </div>
                )}
              </div>

              <div className="flex justify-center">
                <ProjectMock project={project} variant="page" />
              </div>
            </div>
          </div>
        </header>

        {/* 본문 */}
        {project.details && project.details.length > 0 && (
          <article className="px-6 py-20">
            <div className="mx-auto w-full max-w-3xl">
              <DetailSections sections={project.details} />
            </div>
          </article>
        )}
      </main>
    </>
  );
}
