"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
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
              <h4 className="text-sm font-semibold uppercase tracking-widest text-neutral-400">
                소개
              </h4>
              <p className="mt-2 leading-relaxed text-neutral-700">
                {study.detail}
              </p>
            </div>
          )}

          <a
            href={study.href}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-block rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-105"
          >
            보러 가기 ↗
          </a>
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
          스터디.
        </motion.h2>
        <motion.p
          variants={item}
          className="mt-3 text-center text-lg text-neutral-400"
        >
          카드를 클릭하면 자세히 볼 수 있어요.
        </motion.p>

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
