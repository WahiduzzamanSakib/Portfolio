"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight, FaExternalLinkAlt, FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Link from "next/link";
import projectsData from "../../../public/projects.json";

const ITEMS_PER_PAGE = 6;

const CATEGORIES = ["All", "Full Stack", "Frontend", "E-Commerce", "Web Apps"];

const AllProjectsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  // Filter projects by category
  const filteredProjects = useMemo(() => {
    if (selectedCategory === "All") return projectsData;
    return projectsData.filter((p) => {
      const tags = (p.tags || []).join(" ").toLowerCase();
      const title = (p.title || "").toLowerCase();
      const desc = (p.desc || "").toLowerCase();
      const content = `${tags} ${title} ${desc}`;

      if (selectedCategory === "Full Stack") {
        return content.includes("mongodb") || content.includes("express") || content.includes("server") || content.includes("jwt");
      }
      if (selectedCategory === "Frontend") {
        return content.includes("react") || content.includes("tailwind") || content.includes("vite");
      }
      if (selectedCategory === "E-Commerce") {
        return content.includes("cart") || content.includes("store") || content.includes("buying") || content.includes("rent");
      }
      if (selectedCategory === "Web Apps") {
        return content.includes("weather") || content.includes("app") || content.includes("platform");
      }
      return true;
    });
  }, [selectedCategory]);

  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE) || 1;

  const currentProjects = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredProjects.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredProjects, currentPage]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-white pt-28 pb-20 dark:bg-slate-950 transition-colors duration-500">
      {/* PERFORMANCE-OPTIMIZED SUBTLE AMBIENT BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="ambient-glow-1 absolute -left-20 top-32 h-96 w-96 rounded-full bg-cyan-500/5 blur-[130px] dark:bg-cyan-500/10" />
        <div className="ambient-glow-2 absolute -right-20 bottom-32 h-96 w-96 rounded-full bg-blue-500/5 blur-[130px] dark:bg-blue-600/10" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* TOP NAVIGATION BREADCRUMB */}
        <div className="mb-8">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500 hover:text-cyan-600 dark:text-slate-400 dark:hover:text-cyan-400 transition"
          >
            <FaArrowLeft className="text-[10px] transition-transform group-hover:-translate-x-1" />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* PAGE HEADER */}
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-slate-50 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-600 dark:border-white/10 dark:bg-slate-900/60 dark:text-cyan-400">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-500" />
            Archive &amp; Portfolio
          </span>

          <h1 className="text-4xl font-extrabold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
            Selected{" "}
            <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 dark:from-cyan-400 dark:via-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
              Works &amp; Case Studies
            </span>
          </h1>

          <p className="mt-4 text-base text-slate-600 dark:text-slate-400">
            A comprehensive catalog of production web applications, open-source projects, and exploratory systems.
          </p>

          {/* CATEGORY FILTER TABS */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {CATEGORIES.map((category) => {
              const isSelected = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => handleCategoryChange(category)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                    isSelected
                      ? "bg-slate-950 text-white shadow-sm dark:bg-white dark:text-slate-950"
                      : "border border-slate-200/80 bg-white/80 text-slate-600 hover:border-cyan-500/40 hover:text-slate-950 dark:border-white/10 dark:bg-slate-900/50 dark:text-slate-300 dark:hover:text-white"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* PROJECTS GRID */}
        {currentProjects.length > 0 ? (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {currentProjects.map((project, index) => (
              <article
                key={project.id || project.title}
                style={{ animationDelay: `${index * 80}ms` }}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/80 bg-white/70 shadow-sm backdrop-blur-xl transition-all duration-500 hover:-translate-y-1.5 hover:border-cyan-500/40 hover:shadow-xl hover:shadow-cyan-500/5 dark:border-white/10 dark:bg-slate-900/50 dark:hover:border-cyan-400/40"
              >
                <div>
                  {/* BROWSER CHROME FRAME */}
                  <div className="relative overflow-hidden border-b border-slate-200/70 dark:border-white/10 bg-slate-100/70 dark:bg-slate-800/40">
                    <div className="flex items-center justify-between px-4 py-2.5 border-b border-slate-200/50 dark:border-white/5">
                      <div className="flex items-center gap-1.5">
                        <span className="h-2 w-2 rounded-full bg-slate-300 dark:bg-slate-600" />
                        <span className="h-2 w-2 rounded-full bg-slate-300 dark:bg-slate-600" />
                        <span className="h-2 w-2 rounded-full bg-slate-300 dark:bg-slate-600" />
                      </div>
                      <span className="font-mono text-[10px] text-slate-400 dark:text-slate-500 truncate max-w-[150px]">
                        {project.id}.app
                      </span>
                    </div>

                    <div className="relative h-56 w-full overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="p-6">
                    <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h2>

                    <p className="mt-3 line-clamp-2 text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                      {project.desc}
                    </p>

                    {/* TAGS */}
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

                {/* ACTIONS */}
                <div className="px-6 pb-6 pt-2 flex items-center gap-3">
                  <Link
                    href={`/projects/${project.id}`}
                    className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-slate-950 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-sm transition-all duration-300 hover:bg-cyan-600 active:scale-95 dark:bg-white dark:text-slate-950 dark:hover:bg-cyan-400"
                  >
                    <span>View Details</span>
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
        ) : (
          <div className="rounded-3xl border border-slate-200/80 bg-white/70 p-12 text-center dark:border-white/10 dark:bg-slate-900/50">
            <p className="text-base text-slate-600 dark:text-slate-400">
              No projects found matching the selected category.
            </p>
          </div>
        )}

        {/* PAGINATION CONTROLS */}
        {totalPages > 1 && (
          <div className="mt-16 flex items-center justify-center gap-2">
            <button
              type="button"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              aria-label="Previous page"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200/80 bg-white text-slate-700 shadow-sm transition-all hover:border-cyan-500 hover:text-cyan-600 disabled:opacity-40 disabled:cursor-not-allowed dark:border-white/10 dark:bg-slate-900/60 dark:text-slate-300 dark:hover:border-cyan-400"
            >
              <FaChevronLeft className="text-xs" />
            </button>

            {Array.from({ length: totalPages }).map((_, index) => {
              const pageNumber = index + 1;
              const isActive = currentPage === pageNumber;
              return (
                <button
                  key={pageNumber}
                  type="button"
                  onClick={() => setCurrentPage(pageNumber)}
                  className={`h-10 w-10 rounded-xl text-xs font-bold transition-all ${
                    isActive
                      ? "bg-slate-950 text-white shadow-sm dark:bg-white dark:text-slate-950"
                      : "border border-slate-200/80 bg-white text-slate-700 hover:border-cyan-500 hover:text-cyan-600 dark:border-white/10 dark:bg-slate-900/60 dark:text-slate-300 dark:hover:border-cyan-400"
                  }`}
                >
                  {pageNumber}
                </button>
              );
            })}

            <button
              type="button"
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              aria-label="Next page"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200/80 bg-white text-slate-700 shadow-sm transition-all hover:border-cyan-500 hover:text-cyan-600 disabled:opacity-40 disabled:cursor-not-allowed dark:border-white/10 dark:bg-slate-900/60 dark:text-slate-300 dark:hover:border-cyan-400"
            >
              <FaChevronRight className="text-xs" />
            </button>
          </div>
        )}
      </div>
    </main>
  );
};

export default AllProjectsPage;
