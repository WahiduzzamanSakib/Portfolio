"use client";

import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaExternalLinkAlt } from "react-icons/fa";
import projects from "../../public/projects.json";

const FeaturedProjectsPage = () => {
  return (
    <section
      id="projects"
      className="scroll-mt-24 relative overflow-hidden bg-white py-20 dark:bg-slate-950 md:py-24 transition-colors duration-500"
    >
      {/* PERFORMANCE-OPTIMIZED SUBTLE AMBIENT BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 top-1/3 h-96 w-96 rounded-full bg-cyan-500/5 blur-[130px] dark:bg-cyan-500/10" />
        <div className="absolute -right-20 bottom-1/3 h-96 w-96 rounded-full bg-blue-500/5 blur-[130px] dark:bg-blue-600/10" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* SECTION HEADER */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-slate-50 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-600 dark:border-white/10 dark:bg-slate-900/60 dark:text-cyan-400">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-500" />
              Selected Works
            </span>

            <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 dark:text-white sm:text-4xl md:text-5xl">
              Featured{" "}
              <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 dark:from-cyan-400 dark:via-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
                Case Studies
              </span>
            </h2>

            <p className="mt-3 text-base text-slate-600 dark:text-slate-400 max-w-xl">
              Production web applications, full-stack architectures, and user-centric digital products.
            </p>
          </div>

          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 self-start md:self-auto rounded-full border border-slate-300/80 bg-white/80 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-800 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-500/50 hover:bg-cyan-50/50 hover:text-cyan-600 active:scale-95 dark:border-white/10 dark:bg-slate-900/60 dark:text-slate-200 dark:hover:border-cyan-400/50 dark:hover:text-cyan-300"
          >
            <span>View All Works ({projects.length})</span>
            <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* CASE STUDIES GRID */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 3).map((project, index) => (
            <article
              key={project.id || project.title}
              style={{ animationDelay: `${index * 100}ms` }}
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/80 bg-white/70 shadow-sm backdrop-blur-xl transition-all duration-500 hover:-translate-y-1.5 hover:border-cyan-500/40 hover:shadow-xl hover:shadow-cyan-500/5 dark:border-white/10 dark:bg-slate-900/50 dark:hover:border-cyan-400/40"
            >
              <div>
                {/* PREVIEW CONTAINER WITH BROWSER CHROME HEADER */}
                <div className="relative overflow-hidden border-b border-slate-200/70 dark:border-white/10 bg-slate-100/70 dark:bg-slate-800/40">
                  {/* Subtle Browser Window Dots */}
                  <div className="flex items-center justify-between px-4 py-2.5 border-b border-slate-200/50 dark:border-white/5">
                    <div className="flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-slate-300 dark:bg-slate-600" />
                      <span className="h-2 w-2 rounded-full bg-slate-300 dark:bg-slate-600" />
                      <span className="h-2 w-2 rounded-full bg-slate-300 dark:bg-slate-600" />
                    </div>
                    <span className="font-mono text-[10px] text-slate-400 dark:text-slate-500 truncate max-w-[160px]">
                      {project.id}.app
                    </span>
                  </div>

                  {/* Image Viewport */}
                  <div className="relative h-56 w-full overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      loading="lazy"
                      className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>

                {/* CONTENT AREA */}
                <div className="p-6">
                  {/* Title */}
                  <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>

                  {/* Summary */}
                  <p className="mt-3 line-clamp-2 text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {project.desc}
                  </p>

                  {/* Tech Tags */}
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {project.tags?.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-lg border border-slate-200/80 bg-slate-50 px-2.5 py-1 text-[11px] font-medium text-slate-600 dark:border-white/10 dark:bg-slate-800/60 dark:text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags?.length > 4 && (
                      <span className="rounded-lg border border-slate-200/80 bg-slate-50 px-2 py-1 text-[11px] font-medium text-slate-500 dark:border-white/10 dark:bg-slate-800/60 dark:text-slate-400">
                        +{project.tags.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* ACTION FOOTER */}
              <div className="px-6 pb-6 pt-2 flex items-center gap-3">
                <Link
                  href={`/projects/${project.id}`}
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-slate-950 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-sm transition-all duration-300 hover:bg-cyan-600 active:scale-95 dark:bg-white dark:text-slate-950 dark:hover:bg-cyan-400"
                >
                  <span>View Case Study</span>
                  <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${project.title} live demo`}
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-300/80 bg-white text-slate-700 transition-all duration-300 hover:border-cyan-500 hover:text-cyan-600 active:scale-95 dark:border-white/10 dark:bg-slate-800 dark:text-slate-300 dark:hover:border-cyan-400 dark:hover:text-cyan-400"
                  >
                    <FaExternalLinkAlt className="text-xs" />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Section Divider */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-slate-200 dark:via-white/10 to-transparent" />
    </section>
  );
};

export default FeaturedProjectsPage;