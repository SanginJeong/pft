import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import { profile } from "@/data/content";
import { sortedPosts } from "@/data/posts";

export const metadata: Metadata = {
  title: `블로그 | ${profile.name}`,
  description: `${profile.name}의 개발 블로그`,
};

export default function BlogPage() {
  return (
    <>
      <Nav />
      <main className="min-h-dvh bg-[#f5f5f7] px-6 pb-24 pt-32">
        <div className="mx-auto w-full max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            블로그
          </h1>
          <p className="mt-3 text-neutral-500">
            개발하며 배우고 고민한 것들을 기록합니다.
          </p>

          {sortedPosts.length === 0 ? (
            <p className="mt-16 text-center text-neutral-400">
              아직 작성된 글이 없습니다.
            </p>
          ) : (
            <ul className="mt-12 space-y-4">
              {sortedPosts.map((post) => (
                <li key={post.slug}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group flex gap-6 rounded-3xl bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-medium text-neutral-400">
                        {post.date}
                      </p>
                      <h2 className="mt-1 text-xl font-bold group-hover:text-[#0071e3]">
                        {post.title}
                      </h2>
                      <p className="mt-2 text-[15px] leading-relaxed text-neutral-500">
                        {post.summary}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
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
                    {post.thumbnail && (
                      <div className="relative hidden aspect-[4/3] w-40 flex-none overflow-hidden rounded-2xl bg-neutral-100 sm:block">
                        <Image
                          src={post.thumbnail}
                          alt=""
                          fill
                          sizes="160px"
                          className="object-cover"
                        />
                      </div>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </main>
    </>
  );
}
