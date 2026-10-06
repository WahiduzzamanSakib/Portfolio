"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaGithub, FaExternalLinkAlt, FaServer, FaArrowLeft, FaArrowRight, FaCheckCircle, FaExclamationTriangle, FaRocket,} from "react-icons/fa";

const ViewDetails = ({ project }) => {
  const router = useRouter();

  if (!project) {
    return (
      <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white px-6 dark:bg-slate-950">
        <div className="relative z-10 max-w-md rounded-3xl border border-slate-200/80 bg-white/80 p-10 text-center shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/60">
          <h1 className="text-3xl font-extrabold text-slate-950 dark:text-white">
            Project Not Found
          </h1>
          <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
            The requested project could not be located in the catalog.
          </p>
          <Link
            href="/projects"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-slate-950 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-md transition-all hover:bg-cyan-600 dark:bg-white dark:text-slate-950 dark:hover:bg-cyan-400"
          >
            <FaArrowLeft className="text-xs" />
            <span>Return to Projects</span>
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-white pt-28 pb-20 dark:bg-slate-950 transition-colors duration-500">
      {/* PERFORMANCE-OPTIMIZED SUBTLE AMBIENT BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="ambient-glow-1 absolute -left-20 top-20 h-96 w-96 rounded-full bg-cyan-500/5 blur-[130px] dark:bg-cyan-500/10" />
        <div className="ambient-glow-2 absolute -right-20 bottom-20 h-96 w-96 rounded-full bg-blue-500/5 blur-[130px] dark:bg-blue-600/10" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-8">
        {/* TOP NAVIGATION BREADCRUMBS */}
        <div className="mb-8 flex items-center justify-between">
          <button
            type="button"
            onClick={() => {
              if (window.history.length > 1) {
                router.back();
              } else {
                router.push("/projects");
              }
            }}
            className="group inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-slate-600 shadow-sm backdrop-blur-sm transition-all hover:border-cyan-500/50 hover:text-cyan-600 active:scale-95 dark:border-white/10 dark:bg-slate-900/60 dark:text-slate-300 dark:hover:border-cyan-400/50 dark:hover:text-cyan-400 cursor-pointer"
          >
            <FaArrowLeft className="text-[10px] transition-transform group-hover:-translate-x-1" />
            <span>Back</span>
          </button>

          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-slate-600 shadow-sm backdrop-blur-sm transition-all hover:border-cyan-500/50 hover:text-cyan-600 active:scale-95 dark:border-white/10 dark:bg-slate-900/60 dark:text-slate-300 dark:hover:border-cyan-400/50 dark:hover:text-cyan-400"
          >
            <span>All Projects</span>
            <FaArrowRight className="text-[10px] transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* HERO CASE STUDY CARD */}
        <article className="overflow-hidden rounded-3xl border border-slate-200/80 bg-white/70 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/50">
          {/* HEADER DETAILS */}
          <div className="p-6 sm:p-10 border-b border-slate-200/70 dark:border-white/10">
            {/* <div className="flex flex-wrap items-center gap-2.5 mb-4">
              <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-600 dark:bg-cyan-500/15 dark:text-cyan-400">
                Case Study
              </span>
              <span className="text-xs font-mono text-slate-400 dark:text-slate-500">
                ID: {project.id}
              </span>
            </div> */}

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-950 dark:text-white">
              {project.title}
            </h1>

            <p className="mt-4 max-w-3xl text-base sm:text-lg leading-relaxed text-slate-600 dark:text-slate-300">
              {project.desc}
            </p>

            {/* TECH TAGS */}
            {project.tags?.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-lg border border-slate-200/80 bg-slate-50/80 px-3 py-1.5 text-xs font-medium text-slate-700 dark:border-white/10 dark:bg-slate-800/60 dark:text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* ACTION BUTTONS ROW */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-xl bg-slate-950 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-md transition-all duration-300 hover:bg-cyan-600 hover:-translate-y-0.5 active:scale-95 dark:bg-white dark:text-slate-950 dark:hover:bg-cyan-400"
                >
                  <FaExternalLinkAlt className="text-xs transition-transform group-hover:scale-110" />
                  <span>Live Platform</span>
                </a>
              )}

              {project.clientRepo && (
                <a
                  href={project.clientRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-xl border border-slate-300/80 bg-white px-5 py-3.5 text-xs font-bold uppercase tracking-wider text-slate-800 transition-all duration-300 hover:border-cyan-500 hover:text-cyan-600 hover:-translate-y-0.5 active:scale-95 dark:border-white/10 dark:bg-slate-800 dark:text-slate-200 dark:hover:border-cyan-400 dark:hover:text-cyan-400"
                >
                  <FaGithub className="text-sm transition-transform group-hover:rotate-12" />
                  <span>Client Codebase</span>
                </a>
              )}

              {project.serverRepo && (
                <a
                  href={project.serverRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-xl border border-slate-300/80 bg-white px-5 py-3.5 text-xs font-bold uppercase tracking-wider text-slate-800 transition-all duration-300 hover:border-cyan-500 hover:text-cyan-600 hover:-translate-y-0.5 active:scale-95 dark:border-white/10 dark:bg-slate-800 dark:text-slate-200 dark:hover:border-cyan-400 dark:hover:text-cyan-400"
                >
                  <FaServer className="text-sm transition-transform group-hover:scale-110" />
                  <span>Backend Codebase</span>
                </a>
              )}
            </div>
          </div>

          {/* MAIN PREVIEW IMAGE BANNER */}
          {/* {project.image && (
            <div className="relative h-64 sm:h-96 md:h-[460px] w-full overflow-hidden border-b border-slate-200/70 bg-slate-100 dark:border-white/10 dark:bg-slate-800">
              <Image
                src={project.image}
                alt={project.title}
                fill
                priority
                sizes="(max-width: 1200px) 100vw, 1152px"
                className="object-cover object-top"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
            </div>
          )} */}

          {/* DETAILED SPECIFICATIONS SECTION */}
          <div className="p-6 sm:p-10 space-y-12">
            {/* 1. KEY FEATURES */}
            {project.features?.length > 0 && (
              <div>
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                    <FaCheckCircle className="text-base" />
                  </div>
                  <h2 className="text-2xl font-bold tracking-tight text-slate-950 dark:text-white">
                    Key Features &amp; Implementation
                  </h2>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {project.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 rounded-2xl border border-slate-200/70 bg-slate-50/70 p-4 transition-all duration-300 hover:border-emerald-500/40 hover:bg-white dark:border-white/5 dark:bg-slate-800/40 dark:hover:border-emerald-400/40"
                    >
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-emerald-500" />
                      <p className="text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 2. CHALLENGES & ARCHITECTURAL SOLUTIONS */}
            {project.challenges?.length > 0 && (
              <div>
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400">
                    <FaExclamationTriangle className="text-base" />
                  </div>
                  <h2 className="text-2xl font-bold tracking-tight text-slate-950 dark:text-white">
                    Technical Challenges &amp; Solutions
                  </h2>
                </div>

                <div className="space-y-3">
                  {project.challenges.map((challenge, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 rounded-2xl border border-slate-200/70 bg-slate-50/70 p-4 transition-all duration-300 hover:border-amber-500/40 hover:bg-white dark:border-white/5 dark:bg-slate-800/40 dark:hover:border-amber-400/40"
                    >
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-amber-500" />
                      <p className="text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                        {challenge}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 3. FUTURE ROADMAP & SCALABILITY */}
            {project.futurePlans?.length > 0 && (
              <div>
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
                    <FaRocket className="text-base" />
                  </div>
                  <h2 className="text-2xl font-bold tracking-tight text-slate-950 dark:text-white">
                    Future Roadmap &amp; Improvements
                  </h2>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {project.futurePlans.map((plan, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 rounded-2xl border border-slate-200/70 bg-slate-50/70 p-4 transition-all duration-300 hover:border-cyan-500/40 hover:bg-white dark:border-white/5 dark:bg-slate-800/40 dark:hover:border-cyan-400/40"
                    >
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-cyan-500" />
                      <p className="text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                        {plan}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* LIVE PREVIEW EMBED (IF AVAILABLE) */}
            {project.live && (
              <div className="pt-6">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <h2 className="text-xl font-bold tracking-tight text-slate-950 dark:text-white">
                      Interactive Live Viewport
                    </h2>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Explore the live deployment directly within this container.
                    </p>
                  </div>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-600 hover:text-cyan-700 dark:text-cyan-400 dark:hover:text-cyan-300 transition"
                  >
                    <span>Open in Full Tab</span>
                    <FaExternalLinkAlt className="text-[10px]" />
                  </a>
                </div>

                <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-lg dark:border-white/10 dark:bg-slate-900">
                  <div className="flex items-center gap-2 border-b border-slate-200/70 bg-slate-100/70 px-4 py-2.5 dark:border-white/10 dark:bg-slate-800/50">
                    <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                    <div className="ml-2 flex-1 truncate rounded-md bg-white px-3 py-1 font-mono text-[11px] text-slate-500 dark:bg-slate-950/60 dark:text-slate-400">
                      {project.live}
                    </div>
                  </div>

                  <div className="relative h-[550px] w-full bg-white">
                    <iframe
                      src={project.live}
                      title={`${project.title} live preview`}
                      className="h-full w-full border-0"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </article>
      </div>
    </main>
  );
};

export default ViewDetails;
