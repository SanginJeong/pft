"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { projects, type Project } from "@/data/content";

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
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={project.image}
          alt={`${project.title} 스크린샷`}
          className="h-full w-full rounded-[1.8rem] object-cover object-top"
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

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
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
        className="relative flex h-[88dvh] w-full max-w-4xl flex-col overflow-hidden rounded-3xl bg-white shadow-2xl"
      >
        <button
          onClick={onClose}
          aria-label="닫기"
          className="absolute right-5 top-5 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-neutral-100 text-neutral-500 transition-colors hover:bg-neutral-200 hover:text-black"
        >
          ✕
        </button>

        <div className="grid flex-1 overflow-y-auto md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] md:overflow-hidden">
          {/* 왼쪽: 폰 목업 */}
          <div className="flex items-center justify-center bg-[#f5f5f7] p-10 md:h-full">
            <PhoneFrame project={project} className="w-48 sm:w-56" />
          </div>

          {/* 오른쪽: 상세 내용 */}
          <div className="p-8 sm:p-10 md:overflow-y-auto">
            <h3 className="text-3xl font-bold tracking-tight">
              {project.title}
            </h3>
            <p className="mt-1 font-medium text-neutral-400">
              {project.summary}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-600"
                >
                  {tag}
                </span>
              ))}
            </div>

            {(project.link || project.repo) && (
              <div className="mt-6 flex gap-3">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full bg-black px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-105"
                  >
                    배포 보기 ↗
                  </a>
                )}
                {project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-neutral-300 px-5 py-2.5 text-sm font-semibold text-neutral-800 transition-colors hover:border-black"
                  >
                    GitHub ↗
                  </a>
                )}
              </div>
            )}

            <div className="mt-8 space-y-7 border-t border-neutral-100 pt-8">
              {project.details?.map((section) => (
                <div key={section.label}>
                  <h4 className="text-sm font-semibold uppercase tracking-widest text-neutral-400">
                    {section.label}
                  </h4>
                  <p className="mt-2 leading-relaxed text-neutral-700">
                    {section.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section
      id="projects"
      className="snap-section flex flex-col items-center justify-center bg-[#f5f5f7] px-6 py-24"
    >
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="w-full max-w-6xl"
      >
        <motion.h2
          variants={item}
          className="text-center text-4xl font-bold tracking-tight sm:text-5xl"
        >
          프로젝트.
        </motion.h2>
        <motion.p
          variants={item}
          className="mt-3 text-center text-lg text-neutral-500"
        >
          카드를 클릭하면 자세한 이야기를 볼 수 있어요.
        </motion.p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <motion.button
              key={project.title}
              variants={item}
              onClick={() => setSelected(project)}
              className="group flex flex-col overflow-hidden rounded-3xl bg-white text-left shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
            >
              {/* 폰 목업 영역 */}
              <div className="flex justify-center bg-gradient-to-b from-[#e8e8ed] to-[#f5f5f7] px-8 pt-10">
                <PhoneFrame
                  project={project}
                  className="w-36 translate-y-6 transition-transform duration-500 group-hover:translate-y-3 sm:w-40"
                />
              </div>

              <div className="flex flex-1 flex-col p-7">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="mt-1 text-sm font-medium text-neutral-400">
                  {project.summary}
                </p>
                <p className="mt-3 flex-1 text-[15px] leading-relaxed text-neutral-600">
                  {project.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="mt-5 text-sm font-semibold text-[#0071e3]">
                  자세히 보기 →
                </p>
              </div>
            </motion.button>
          ))}
        </div>
      </motion.div>

      <AnimatePresence>
        {selected && (
          <ProjectModal project={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
