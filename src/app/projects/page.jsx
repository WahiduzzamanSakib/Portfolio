"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import {
  FaExternalLinkAlt,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import Link from "next/link";
import projectsData from "../../../public/projects.json";

const ITEMS_PER_PAGE = 6;

const AllProjectsPage = () => {
  const [projects] = useState(projectsData);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(
    projects.length / ITEMS_PER_PAGE
  );

  const currentProjects = useMemo(() => {
    const start =
      (currentPage - 1) * ITEMS_PER_PAGE;

    return projects.slice(
      start,
      start + ITEMS_PER_PAGE
    );
  }, [projects, currentPage]);

  return (
    <section
      // id="projects"
      className="scroll-mt-24 mt-22 relative isolate overflow-hidden bg-white py-10 dark:bg-slate-950 md:py-12"
    >
      {/*  HERO STYLE BACKGROUND */}

      {/* Animated Left Glow */}
      <div
        className="project-blue-glow pointer-events-none absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-blue-500/10 blur-3xl dark:bg-blue-500/20"
      />

      {/* Animated Right Glow */}
      <div
        className="project-cyan-glow pointer-events-none absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-3xl dark:bg-cyan-500/20"
      />

      {/* Soft Center Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-3xl" />

      {/* Extra Left Bottom Glow */}
      <div className="pointer-events-none absolute -left-40 bottom-0 h-[420px] w-[420px] rounded-full bg-blue-500/[0.045] blur-[130px] dark:bg-cyan-500/20" />

      {/* Extra Right Bottom Glow */}
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-cyan-500/[0.04] blur-[140px] dark:bg-cyan-500/10" />

      {/* Premium Grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.025] dark:opacity-[0.035] [background-image:linear-gradient(to_right,#64748b_1px,transparent_1px),linear-gradient(to_bottom,#64748b_1px,transparent_1px)] [background-size:48px_48px]" />

      {/* Top Fade */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/90 to-transparent dark:from-slate-950/90" />

      {/* Bottom Fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent dark:from-slate-950" />

      {/*  CONTENT*/}

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* HEADER */}
        <div
          className="project-header mb-16 flex flex-col items-center text-center"
        >
          <h2 className="font-mono text-4xl font-bold tracking-tight text-primary md:text-5xl">
            My Projects
          </h2>

          {/* Header Line */}
          <div className="mt-4 h-1 w-28 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 shadow-lg shadow-cyan-500/20" />

          <p className="mt-4 max-w-xl text-base leading-7 text-on-surface-variant md:text-lg">
            Latest commercial projects and open source work.
          </p>
        </div>

        {/* PROJECT GRID */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {currentProjects.map((project, index) => (
            <article
              key={project?.title}
              style={{ animationDelay: `${index * 0.08}s` }}
              className="project-card group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white/70 shadow-lg shadow-slate-900/5 backdrop-blur-xl transition-all duration-500 hover:border-cyan-400/60 hover:shadow-xl hover:shadow-cyan-500/10 dark:border-white/10 dark:bg-white/5 dark:shadow-black/30 dark:hover:border-cyan-400/40"
            >
              {/* Card Glow */}
              <div className="pointer-events-none absolute -inset-1 rounded-3xl bg-gradient-to-br from-blue-500/0 via-cyan-400/0 to-purple-500/0 opacity-0 blur-xl transition-all duration-500 group-hover:from-blue-500/10 group-hover:via-cyan-400/10 group-hover:to-purple-500/10 group-hover:opacity-100" />

              {/* IMAGE */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={project?.image}
                  alt={project?.title}
                  fill
                  className="object-cover saturate-50 transition-all duration-700 group-hover:scale-110 group-hover:saturate-100"
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/5 to-transparent transition-all duration-500 group-hover:from-black/25" />

                {/* Image Shine */}
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
              </div>

              {/* CONTENT */}
              <div className="relative p-7">
                <h3 className="text-xl font-semibold text-primary transition-colors duration-300 group-hover:text-secondary">
                  {project?.title}
                </h3>

                <p className="mt-4 line-clamp-3 text-sm leading-relaxed text-on-surface-variant dark:text-gray-400">
                  {project?.desc}
                </p>

                {/* TAGS */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {project?.tags?.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border-2 border-cyan-800 bg-secondary/10 px-3 py-1 text-sm text-secondary transition-all duration-300 hover:scale-110 hover:bg-secondary hover:text-on-secondary dark:border-cyan-400/40 dark:bg-secondary/20"
                    >
                      {tag}
                    </span>
                  ))}

                  {project?.tags?.length > 4 && (
                    <span
                      className="cursor-pointer rounded-full border-2 border-gray-400 bg-gray-200 px-3 py-1 text-sm text-gray-700 transition-all duration-300 hover:scale-110 dark:border-cyan-400 dark:bg-white/10 dark:text-gray-300"
                    >
                      +{project?.tags?.length - 4} More
                    </span>
                  )}
                </div>

                {/* BUTTONS */}
                <div className="mt-8 flex gap-4">
                  {/*
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-1 items-center justify-center gap-2 rounded-lg border-2 border-black py-3 text-sm text-primary transition hover:rounded-full hover:border-secondary hover:bg-primary/5 dark:border-cyan-400"
                  >
                    <FaExternalLinkAlt />
                    Live Link
                  </a>
                  */}

                  <Link
                    href={`/projects/${project.id}`}
                    className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white py-3 text-sm font-medium text-slate-900 shadow-sm transition-all duration-300 hover:scale-[1.03] hover:rounded-full hover:border-cyan-400 hover:bg-cyan-50 hover:text-cyan-600 hover:shadow-lg hover:shadow-cyan-400/20 active:scale-95 dark:border-white/20 dark:bg-[#1a1a49] dark:text-white dark:hover:border-cyan-400 dark:hover:bg-cyan-400/10 dark:hover:text-cyan-400"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* PAGINATION */}
        {totalPages > 1 && (
          <div
            className="project-pagination mt-16 flex cursor-pointer items-center justify-center gap-3"
          >
            {/* PREVIOUS */}
            <button
              disabled={currentPage === 1}
              onClick={() =>
                setCurrentPage((prev) => prev - 1)
              }
              className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-slate-300 bg-white/70 text-slate-700 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-50 hover:text-cyan-500 disabled:cursor-not-allowed disabled:opacity-40 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:border-cyan-400 dark:hover:bg-cyan-400/10"
            >
              <FaChevronLeft />
            </button>

            {/* PAGE NUMBERS */}
            {Array.from({
              length: totalPages,
            }).map((_, index) => (
              <button
                key={index}
                onClick={() =>
                  setCurrentPage(index + 1)
                }
                className={`h-11 w-11 cursor-pointer rounded-full border text-sm font-semibold transition-all duration-300 ${
  currentPage === index + 1
    ? "border-cyan-400 bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-cyan-500/20"
    : "border-slate-300 bg-white/70 text-primary hover:border-cyan-400 hover:bg-cyan-50 hover:text-cyan-500 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:border-cyan-400 dark:hover:bg-cyan-400/10"
} `}
              >
                {index + 1}
              </button>
            ))}

            {/* NEXT */}
            <button
              disabled={currentPage === totalPages}
              onClick={() =>
                setCurrentPage((prev) => prev + 1)
              }
              className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-slate-300 bg-white/70 text-slate-700 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-50 hover:text-cyan-500 disabled:cursor-not-allowed disabled:opacity-40 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:border-cyan-400 dark:hover:bg-cyan-400/10"
            >
              <FaChevronRight />
            </button>
          </div>
        )}
      </div>

      {/* Section Bottom Divider */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-px w-full -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
    </section>
  );
};

export default AllProjectsPage;

