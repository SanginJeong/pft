"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { profile, studies, type Study } from "@/data/content";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.16, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 48, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] as const },
  },
};

// 템플릿 문자열의 코드 들여쓰기를 제거합니다.
// (마크다운은 4칸 이상 들여쓴 줄을 코드 블록으로 해석하므로 반드시 필요)
function dedent(text: string) {
  const lines = text.replace(/\t/g, "  ").split("\n");
  const indents = lines
    .filter((line) => line.trim().length > 0)
    .map((line) => line.match(/^ */)?.[0].length ?? 0);
  const min = indents.length ? Math.min(...indents) : 0;
  return lines
    .map((line) => line.slice(min))
    .join("\n")
    .trim();
}

// detail 내용을 마크다운으로 렌더링합니다. (제목, 목록, 링크, 굵게, 코드, 표 등 지원)
function StudyMarkdown({ children }: { children: string }) {
  return (
    <div className="mt-2 space-y-3 leading-relaxed text-neutral-700 [&_a]:font-medium [&_a]:text-[#2997ff] [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-[#5cb0ff] [&_code]:rounded [&_code]:bg-neutral-100 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:text-[0.85em] [&_h1]:mt-4 [&_h1]:text-lg [&_h1]:font-bold [&_h2]:mt-4 [&_h2]:text-base [&_h2]:font-bold [&_h3]:mt-3 [&_h3]:font-semibold [&_li]:ml-1 [&_ol]:list-decimal [&_ol]:space-y-1 [&_ol]:pl-5 [&_strong]:font-semibold [&_ul]:list-disc [&_ul]:space-y-1 [&_ul]:pl-5">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          a: ({ ...props }) => (
            <a target="_blank" rel="noreferrer" {...props} />
          ),
        }}
      >
        {dedent(children)}
      </ReactMarkdown>
    </div>
  );
}

function StudyModal({ study, onClose }: { study: Study; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm sm:p-8"
    >
      <motion.div
        initial={{ opacity: 0, y: 32, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 24, scale: 0.98 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="relative flex max-h-[88dvh] w-full max-w-2xl flex-col overflow-hidden rounded-3xl bg-white text-black shadow-2xl"
      >
        <button
          onClick={onClose}
          aria-label="닫기"
          className="absolute right-5 top-5 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-neutral-100 text-neutral-500 transition-colors hover:bg-neutral-200 hover:text-black"
        >
          ✕
        </button>

        <div className="overflow-y-auto p-8 sm:p-10">
          {study.period && (
            <p className="text-sm font-medium text-neutral-400">
              {study.period}
            </p>
          )}
          <h3 className="mt-1 text-3xl font-bold tracking-tight">
            {study.title}
          </h3>
          <p className="mt-2 text-neutral-500">{study.summary}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            {study.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-600"
              >
                {tag}
              </span>
            ))}
          </div>

          {study.detail && (
            <div className="mt-8 border-t border-neutral-100 pt-8">
              <StudyMarkdown>{study.detail}</StudyMarkdown>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Studies() {
  const [selected, setSelected] = useState<Study | null>(null);

  return (
    <section
      id="studies"
      className="snap-section relative flex flex-col items-center justify-center bg-black px-6 py-24 text-white"
    >
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="w-full max-w-5xl"
      >
        <motion.h2
          variants={item}
          className="text-center text-4xl font-bold tracking-tight sm:text-5xl"
        >
          스터디
        </motion.h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {studies.map((study) => (
            <motion.button
              key={study.title}
              variants={item}
              onClick={() => setSelected(study)}
              className="group flex flex-col rounded-3xl bg-[#1d1d1f] p-8 text-left transition-all duration-300 hover:-translate-y-1.5 hover:bg-[#2a2a2d]"
            >
              {study.period && (
                <p className="text-xs font-medium text-neutral-500">
                  {study.period}
                </p>
              )}
              <h3 className="mt-2 text-xl font-bold">{study.title}</h3>
              <p className="mt-3 flex-1 text-[15px] leading-relaxed text-neutral-400">
                {study.summary}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {study.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-neutral-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="mt-6 text-sm font-semibold text-[#2997ff] transition-transform duration-300 group-hover:translate-x-1">
                자세히 보기 →
              </p>
            </motion.button>
          ))}
        </div>
      </motion.div>

      <AnimatePresence>
        {selected && (
          <StudyModal study={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>

      <footer className="absolute bottom-6 text-sm text-neutral-600">
        © {new Date().getFullYear()} {profile.name} ·{" "}
        <a href={`mailto:${profile.email}`} className="hover:text-neutral-400">
          {profile.email}
        </a>
      </footer>
    </section>
  );
}
