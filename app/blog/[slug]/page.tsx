import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import DetailSections from "@/components/DetailSections";
import { profile } from "@/data/content";
import { sortedPosts } from "@/data/posts";

export function generateStaticParams() {
  return sortedPosts.map((post) => ({ slug: post.slug }));
}

// generateStaticParams 에 없는 주소는 404
export const dynamicParams = false;

export async function generateMetadata({
  params,
}: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = sortedPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} | ${profile.name}`,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      type: "article",
    },
  };
}

export default async function BlogPostPage({
  params,
}: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const index = sortedPosts.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();

  const post = sortedPosts[index];
  // 목록이 최신순이므로 index+1 이 이전(더 오래된) 글
  const older = sortedPosts[index + 1];
  const newer = sortedPosts[index - 1];

  return (
    <>
      <Nav />
      <main className="min-h-dvh bg-white">
        <header className="border-b border-neutral-100 px-6 pb-12 pt-28 sm:pt-32">
          <div className="mx-auto w-full max-w-3xl">
            <Link
              href="/blog"
              className="text-sm font-medium text-neutral-500 transition-colors hover:text-black"
            >
              ← 블로그 목록
            </Link>
            <p className="mt-8 text-sm font-medium text-neutral-400">
              {post.date}
            </p>
            <h1 className="mt-2 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              {post.title}
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-neutral-500">
              {post.summary}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-600"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </header>

        <article className="px-6 py-16">
          <div className="mx-auto w-full max-w-3xl">
            <DetailSections sections={post.details} />
          </div>
        </article>

        {(older || newer) && (
          <nav className="px-6 py-12">
            <div className="mx-auto grid w-full max-w-3xl gap-4 border-t border-neutral-100 pt-12 sm:grid-cols-2">
              {older ? (
                <Link
                  href={`/blog/${older.slug}`}
                  className="rounded-2xl bg-[#f5f5f7] p-6 transition-colors hover:bg-[#ebebef]"
                >
                  <p className="text-xs font-medium text-neutral-400">
                    ← 이전 글
                  </p>
                  <p className="mt-1 font-bold">{older.title}</p>
                </Link>
              ) : (
                <div />
              )}
              {newer && (
                <Link
                  href={`/blog/${newer.slug}`}
                  className="rounded-2xl bg-[#f5f5f7] p-6 text-right transition-colors hover:bg-[#ebebef]"
                >
                  <p className="text-xs font-medium text-neutral-400">
                    다음 글 →
                  </p>
                  <p className="mt-1 font-bold">{newer.title}</p>
                </Link>
              )}
            </div>
          </nav>
        )}
      </main>
    </>
  );
}
