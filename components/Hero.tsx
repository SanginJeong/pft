"use client";

import { motion } from "framer-motion";
import { history, profile } from "@/data/content";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.18, delayChildren: 0.1 } },
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

export default function Hero() {
  return (
    <section
      id="about"
      className="snap-section flex items-center justify-center bg-white px-6 py-24"
    >
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className="grid w-full max-w-5xl items-center gap-12 md:grid-cols-2 md:gap-16"
      >
        {/* 왼쪽: 내 정보 */}
        <div>
          <motion.p
            variants={item}
            className="mb-4 text-lg font-medium text-neutral-500"
          >
            안녕하세요
          </motion.p>
          <motion.h1
            variants={item}
            className="mb-4 text-lg font-medium text-neutral-500"
          >
            <span className="mr-4 text-5xl font-bold tracking-tight sm:text-6xl text-black">
              {profile.name}
            </span>
            입니다
          </motion.h1>
          <motion.p
            variants={item}
            className="mb-4 text-lg font-medium text-neutral-500"
          >
            잘부탁드립니다
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-105"
            >
              {profile.email}
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-neutral-300 px-6 py-3 text-sm font-semibold text-neutral-800 transition-colors hover:border-black"
            >
              GitHub ↗
            </a>
            {profile.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-neutral-300 px-6 py-3 text-sm font-semibold text-neutral-800 transition-colors hover:border-black"
              >
                {link.label} ↗
              </a>
            ))}
          </motion.div>
        </div>

        {/* 오른쪽: 이력 */}
        <motion.div
          variants={item}
          className="rounded-3xl bg-[#f5f5f7] p-8 sm:p-10"
        >
          <h2 className="text-sm font-semibold uppercase tracking-widest text-neutral-400">
            History
          </h2>
          <ul className="mt-6 space-y-6">
            {history.map((entry) => (
              <li
                key={`${entry.period}-${entry.title}`}
                className="border-l-2 border-neutral-300 pl-5"
              >
                <p className="text-xs font-medium text-neutral-400">
                  {entry.period}
                </p>
                <p className="mt-1 font-bold text-neutral-900">{entry.title}</p>
                {entry.detail && (
                  <p className="mt-1 text-sm text-neutral-500">
                    {entry.detail}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </section>
  );
}
