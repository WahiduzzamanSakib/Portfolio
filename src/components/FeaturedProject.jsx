"use client";

import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

import projects from "../../public/projects.json";
const FeaturedProjectsPage = () => {

  return (
    <section
      id="projects"
      className="scroll-mt-24 relative isolate overflow-hidden bg-white py-10 dark:bg-slate-950 md:py-12"
    >
      {/* BACKGROUND*/}

      {/* Animated Left Glow */}
      <div
        className="pointer-events-none absolute left-[-10%] top-20 z-0 h-72 w-72 animate-project-glow-left rounded-full bg-blue-500/10 blur-3xl"
      />

      {/* Animated Right Glow */}
      <div
        className="pointer-events-none absolute bottom-0 right-[-10%] z-0 h-80 w-80 animate-project-glow-right rounded-full bg-cyan-500/10 blur-3xl"
      />

      {/* Soft Center Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-[30%] bg-blue-500/20 blur-3xl" />

      {/* Left Side Large Glow */}
      <div className="pointer-events-none absolute -bottom-5 -left-40 z-0 h-[420px] w-[420px] rounded-full bg-blue-500/[0.045] blur-[130px] dark:bg-cyan-500/15" />

      <div className="pointer-events-none absolute -left-40 -top-25 z-0 h-[420px] w-[420px] rounded-full bg-blue-500/[0.045] blur-[130px] dark:bg-cyan-500/15" />

      {/* Right Side Large Glow */}
      <div className="pointer-events-none absolute -right-40 bottom-0 z-0 h-[450px] w-[450px] rounded-full bg-cyan-500/[0.04] blur-[140px] dark:bg-cyan-500/15" />

      <div className="pointer-events-none absolute -right-40 top-0 z-0 h-[450px] w-[450px] rounded-full bg-cyan-500/[0.04] blur-[140px] dark:bg-cyan-500/15" />

      {/* Grid */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-[0.025] [background-image:linear-gradient(to_right,#64748b_1px,transparent_1px),linear-gradient(to_bottom,#64748b_1px,transparent_1px)] [background-size:48px_48px] dark:opacity-[0.035]" />

      {/* Top Fade */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-40 bg-gradient-to-b from-white/80 to-transparent dark:from-slate-950/80" />

      {/* Bottom Fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-32 bg-gradient-to-t from-white to-transparent dark:from-slate-950" />

      {/* CONTENT */}

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* HEADER */}
        <div className="project-header mb-16 flex items-center justify-between">
          <div>
            <h2 className="font-mono text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
              My Projects
            </h2>

            <div className="mt-4 h-1 w-28 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 shadow-lg shadow-cyan-500/20" />

            <p className="mt-4 text-lg text-slate-500 dark:text-slate-400">
              Latest commercial projects and open source work.
            </p>
          </div>

          <Link
            href="/projects"
            className="group hidden items-center gap-3 rounded-full border border-slate-200 bg-white/70 px-5 py-3 font-semibold text-slate-800 shadow-md backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:bg-cyan-50 hover:text-cyan-600 hover:shadow-lg hover:shadow-cyan-500/10 dark:border-slate-700 dark:bg-slate-900/60 dark:text-white dark:hover:border-cyan-400 dark:hover:bg-cyan-500/10 dark:hover:text-cyan-400 sm:flex"
          >
            View All

            <FaArrowRight className="text-sm transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* PROJECT GRID */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 3).map((project, index) => (
            <article
              key={project?.id ?? project?.title}
              style={{
                animationDelay: `${index * 0.06}s`,
              }}
              className="project-card group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white/70 shadow-lg shadow-slate-900/5 backdrop-blur-xl transition-all duration-500 hover:border-cyan-400/60 hover:shadow-xl hover:shadow-cyan-500/10 dark:border-white/10 dark:bg-white/5 dark:shadow-black/30 dark:hover:border-cyan-400/40"
            >
              {/* Card Glow */}
              <div className="pointer-events-none absolute -inset-1 rounded-3xl bg-gradient-to-br from-blue-500/0 via-cyan-400/0 to-purple-500/0 opacity-0 blur-xl transition-all duration-500 group-hover:from-blue-500/10 group-hover:via-cyan-400/10 group-hover:to-purple-500/10 group-hover:opacity-100" />

              {/* IMAGE */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading="lazy"
                  className="object-cover saturate-50 transition-all duration-700 group-hover:scale-110 group-hover:saturate-100"
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent transition-all duration-500 group-hover:from-black/20" />

                {/* Image Shine */}
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
              </div>

              {/* CONTENT */}
              <div className="relative p-7">
                <h3 className="text-xl font-semibold text-slate-900 transition-colors duration-300 group-hover:text-cyan-500 dark:text-white dark:group-hover:text-cyan-400">
                  {project.title}
                </h3>

                <p className="mt-4 line-clamp-3 text-sm leading-relaxed text-slate-500 dark:text-gray-400">
                  {project.desc}
                </p>

                {/* TAGS */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {project?.tags?.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-cyan-800/60 bg-cyan-500/10 px-3 py-1 text-sm text-cyan-600 transition-all duration-300 hover:scale-105 hover:bg-cyan-500 hover:text-white dark:border-cyan-400/30 dark:bg-cyan-500/10 dark:text-cyan-400 dark:hover:bg-cyan-500 dark:hover:text-white"
                    >
                      {tag}
                    </span>
                  ))}

                  {project?.tags?.length > 4 && (
                    <span className="cursor-pointer rounded-full border border-slate-300 bg-slate-100 px-3 py-1 text-sm text-slate-600 transition-all duration-300 hover:scale-105 hover:border-cyan-400 hover:text-cyan-500 dark:border-cyan-400/30 dark:bg-white/10 dark:text-gray-300 dark:hover:border-cyan-400 dark:hover:text-cyan-400">
                      +{project.tags.length - 4} More
                    </span>
                  )}
                </div>

                {/* BUTTON */}
                <div className="mt-6 flex gap-4">
                  <Link
                    href={`/projects/${project.id}`}
                    className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white py-3 text-sm font-medium text-slate-900 shadow-sm transition-all duration-300 hover:scale-[1.03] hover:rounded-full hover:border-cyan-400 hover:bg-cyan-50 hover:text-cyan-600 hover:shadow-lg hover:shadow-cyan-400/20 active:scale-95 dark:border-white/20 dark:bg-[#1a1a49] dark:text-white dark:hover:border-cyan-400 dark:hover:bg-cyan-400/10 dark:hover:text-cyan-400"
                  >
                    View Details

                    <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Bottom Divider */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 z-10 h-1 w-full -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
    </section>
  );
};

export default FeaturedProjectsPage;