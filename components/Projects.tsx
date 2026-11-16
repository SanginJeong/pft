"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { projects } from "@/data/content";
import { ProjectMock } from "@/components/Mockups";

const item = {
  hidden: { opacity: 0, y: 48, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="snap-section flex flex-col items-center justify-center bg-[#f5f5f7] px-6 py-24"
    >
      <div className="w-full max-w-6xl">
        <motion.h2
          variants={item}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          className="text-center text-4xl font-bold tracking-tight sm:text-5xl"
        >
          프로젝트
        </motion.h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <motion.div
              key={project.slug}
              variants={item}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2, margin: "0px 0px -10% 0px" }}
              className="flex"
            >
              <Link
                href={`/projects/${project.slug}`}
                className="group flex w-full flex-col overflow-hidden rounded-3xl bg-white text-left shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
              >
                {/* 목업 영역 (모든 카드 동일 높이) */}
                <div className="flex h-[260px] justify-center overflow-hidden bg-gradient-to-b from-[#e8e8ed] to-[#f5f5f7] px-8 pt-10">
                  <ProjectMock project={project} variant="card" />
                </div>

                <div className="flex flex-1 flex-col p-7">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="mt-1 text-sm font-medium text-neutral-400">
                    {project.summary}
                  </p>
                  <div className="mt-auto flex flex-wrap gap-2 pt-5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="mt-5 text-sm font-semibold text-[#0071e3] transition-transform duration-300 group-hover:translate-x-1">
                    자세히 보기 →
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
