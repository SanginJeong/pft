"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const sections = [
  { id: "about", label: "소개" },
  { id: "projects", label: "프로젝트" },
  { id: "studies", label: "스터디" },
];

const itemClass =
  "rounded-full px-4 py-1.5 text-sm font-medium transition-colors hover:bg-black/5 hover:text-black";

export default function Nav() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isBlog = pathname.startsWith("/blog");

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed inset-x-0 top-0 z-50 flex justify-center">
      <div className="mt-4 flex items-center gap-1 rounded-full border border-black/5 bg-white/60 px-2 py-1.5 shadow-sm backdrop-blur-xl">
        {sections.map((item) =>
          isHome ? (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`${itemClass} text-neutral-600`}
            >
              {item.label}
            </button>
          ) : (
            // 다른 페이지에서는 홈의 해당 섹션으로 이동
            <Link
              key={item.id}
              href={`/#${item.id}`}
              className={`${itemClass} ${
                item.id === "projects" && pathname.startsWith("/projects")
                  ? "bg-black/5 text-black"
                  : "text-neutral-600"
              }`}
            >
              {item.label}
            </Link>
          ),
        )}
        <Link
          href="/blog"
          className={`${itemClass} ${isBlog ? "bg-black/5 text-black" : "text-neutral-600"}`}
        >
          블로그
        </Link>
      </div>
    </nav>
  );
}
