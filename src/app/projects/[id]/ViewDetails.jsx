"use client";

import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt, FaServer, FaArrowLeft, FaCheckCircle, FaArrowRight } from "react-icons/fa";


/* Reusable action button */
const ActionButton = ({ href, icon, label, variant = "outline" }) => {
  if (!href) return null;

  const base =
    "group/button flex items-center justify-center gap-3 px-7 py-3.5 rounded-2xl font-semibold hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary";

  const variants = {
    outline:
      "border border-primary/40 text-primary hover:bg-primary hover:text-black dark:hover:text-white",
    solid: "bg-secondary text-white",
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${variants[variant]}`}
    >
      <span className="transition group-hover/button:-translate-y-1 group-hover/button:translate-x-1 group-hover/button:rotate-12">
        {icon}
      </span>

      {label}
    </a>
  );
};

const ViewDetails = ({ project }) => {
  if (!project) {
    return (
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white px-6 dark:bg-slate-950">
        {/* ================= BACKGROUND ================= */}

        {/* Left Glow */}
        <div className="pointer-events-none absolute -left-40 bottom-0 h-[420px] w-[420px] rounded-full bg-blue-500/[0.045] blur-[130px] dark:bg-cyan-500/20" />

        {/* Right Glow */}
        <div className="pointer-events-none absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-cyan-500/[0.04] blur-[140px] dark:bg-cyan-500/20" />

        {/* Center Glow */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-3xl" />

        {/* Premium Grid */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.025] dark:opacity-[0.035] [background-image:linear-gradient(to_right,#64748b_1px,transparent_1px),linear-gradient(to_bottom,#64748b_1px,transparent_1px)] [background-size:48px_48px]" />

        {/* Top Fade */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/90 to-transparent dark:from-slate-950/90" />

        {/* Bottom Fade */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent dark:from-slate-950" />

        <div
          className="not-found-card relative z-10 rounded-3xl border border-gray-200 bg-white/70 p-10 text-center shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-white/5"
        >
          <h1 className="text-4xl font-bold text-primary">
            Project Not Found
          </h1>

          <Link
            href="#projects"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-secondary px-7 py-3 text-white transition hover:scale-105"
          >
            <FaArrowLeft />
            Back To Projects
          </Link>
        </div>
      </section>
    );
  }

  return (
    <article className="relative min-h-screen overflow-hidden bg-white px-6 pb-10 pt-28 dark:bg-slate-950">
      {/*  BACKGROUND  */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Animated Blue Glow */}
        <div
          className="project-blue-glow absolute left-[-10%] top-20 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl"
        />

        {/* Animated Cyan Glow */}
        <div
          className="project-cyan-glow absolute bottom-0 right-[-10%] h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl"
        />

        {/* Left Side Glow */}
        <div className="absolute -left-40 bottom-0 h-[420px] w-[420px] rounded-full bg-blue-500/[0.045] blur-[130px] dark:bg-cyan-500/20" />

        {/* Right Side Glow */}
        <div className="absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-cyan-500/[0.04] blur-[140px] dark:bg-cyan-500/20" />

        {/* Soft Center Glow */}
        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-3xl" />

        {/* Premium Grid — Hero-এর একই */}
        <div className="absolute inset-0 opacity-[0.025] dark:opacity-[0.035] [background-image:linear-gradient(to_right,#64748b_1px,transparent_1px),linear-gradient(to_bottom,#64748b_1px,transparent_1px)] [background-size:48px_48px]" />

        {/* Top Fade */}
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/80 to-transparent dark:from-slate-950/80" />

        {/* Bottom Fade */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent dark:from-slate-950" />
      </div>

      {/*  CONTENT */}

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* Back Link */}
        <div className="flex justify-between">
          <Link
            href="/#projects"
            className="group mb-6 inline-flex items-center gap-2 rounded-xl border border-gray-300 bg-white/70 px-5 py-3 text-gray-700 shadow-md backdrop-blur-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-105 hover:border-cyan-500 hover:bg-cyan-500/10 hover:text-cyan-500 hover:shadow-2xl active:scale-95 dark:border-gray-700 dark:bg-white/5 dark:text-gray-300 dark:hover:border-cyan-400"
          >
            <FaArrowLeft className="transition-transform duration-300 group-hover:-translate-x-2" />
            <span>Back to Projects</span>

          </Link>

          <Link
            href="/projects"
            className="group mb-6 inline-flex items-center gap-2 rounded-xl border border-gray-300 bg-white/70 px-5 py-3 text-gray-700 shadow-md backdrop-blur-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-105 hover:border-cyan-500 hover:bg-cyan-500/10 hover:text-cyan-500 hover:shadow-2xl active:scale-95 dark:border-gray-700 dark:bg-white/5 dark:text-gray-300 dark:hover:border-cyan-400"
          >
            <span>View All Projects</span>
            <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-2" />

          </Link>
        </div>

        {/* Main Project Card */}
        <div
          className="project-main-card group relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-white/20 bg-white/60 shadow-2xl backdrop-blur-2xl transition-all duration-500 dark:bg-white/[0.06]"
        >
          {/* Card Glow */}
          <div className="pointer-events-none absolute -inset-1 bg-gradient-to-r from-secondary to-primary opacity-0 blur-3xl transition duration-700 group-hover:opacity-20" />

          
          {/* CONTENT */}
          <div className="relative p-6 md:p-8">
            {/* TITLE */}
            <h1
              className="project-title font-mono text-3xl font-black text-black dark:text-white md:text-4xl"
            >
              {project?.title}
            </h1>

            {/* DESCRIPTION */}
            <p className="mt-4 max-w-3xl text-md leading-relaxed text-gray-700 dark:text-gray-300 md:text-lg">
              {project?.desc}
            </p>

            {/* TECH STACK TAGS */}
            {project?.tags?.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-3">
                {project?.tags?.length > 0 && (
                  <div className="mt-6 flex flex-wrap gap-3">
                    {project?.tags?.map((tag, index) => (
                      <span
                        key={`${tag}-${index}`}
                        className="project-tag cursor-default rounded-full border border-blue-600 bg-secondary/10 px-4 py-1.5 text-sm font-semibold text-secondary shadow-sm transition-all duration-300 hover:bg-secondary/20 dark:bg-secondary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* BUTTONS */}
            <div className="mt-6 flex flex-wrap gap-6">
              {project?.live && (
                <a
                  href={project?.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/button flex items-center justify-center gap-3 rounded-2xl border border-cyan-600 bg-blue-900 px-8 py-4 font-semibold text-primary transition-all hover:scale-105 hover:bg-primary hover:text-black dark:hover:text-white"
                >
                  <FaExternalLinkAlt className="transition group-hover/button:-translate-y-1 group-hover/button:translate-x-1" />
                  Live Link
                </a>
              )}

              {project?.clientRepo && (
                <a
                  href={project?.clientRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/button flex items-center gap-3 rounded-2xl border border-cyan-600 px-7 py-3.5 font-semibold text-primary transition-all hover:scale-105 hover:bg-primary hover:text-black dark:hover:text-white"
                >
                  <FaGithub className="transition group-hover/button:rotate-12" />
                  Client Repo
                </a>
              )}

              {project?.serverRepo && (
                <a
                  href={project?.serverRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/button flex items-center gap-3 rounded-2xl border border-cyan-600 px-7 py-3.5 font-semibold text-primary transition-all hover:scale-105 hover:bg-primary hover:text-black dark:hover:text-white"
                >
                  <FaServer className="transition group-hover/button:rotate-12" />
                  Server Repo
                </a>
              )}
            </div>

            {/* KEY FEATURES */}
            {project?.features?.length > 0 && (
              <div className="mt-6">
                <h2 className="mb-6 font-mono text-2xl font-bold text-black dark:text-white md:text-3xl">
                  Key Features & Implementation
                </h2>

                <div className="grid gap-5 sm:grid-cols-2">
                  {project.features.map((feature, index) => (
                    <div
                      key={index}
                      style={{
                        animationDelay: `${index * 0.08}s`
                      }}
                      className="feature-card group flex gap-4 rounded-2xl border border-gray-200 bg-white/80 p-5 shadow-md transition-all duration-300 ease-out hover:-translate-y-1 hover:border-green-300 hover:shadow-xl dark:border-white/10 dark:bg-white/5 dark:hover:border-green-400/30"
                    >
                      <FaCheckCircle className="mt-1 shrink-0 text-xl text-green-500 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110" />

                      <p className="text-sm leading-relaxed text-gray-700 transition-transform duration-300 group-hover:translate-x-1 dark:text-gray-300 md:text-base">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* CHALLENGES & FUTURE PLANS */}
            <div className="grid gap-10 pt-5 md:grid-cols-2">
              {/* CHALLENGES */}
              {project?.challenges?.length > 0 && (
                <div>
                  <h2 className="mb-6 font-mono text-2xl font-bold text-black dark:text-white md:text-3xl">
                    Challenges Faced
                  </h2>

                  <div className="space-y-5">
                    {project.challenges.map((challenge, index) => (
                      <div
                        key={index}
                        style={{
                          animationDelay: `${index * 0.08}s`
                        }}
                        className="challenge-card group flex gap-4 rounded-2xl border border-gray-200 bg-white/80 p-5 shadow-md transition-all duration-300 ease-out hover:-translate-y-1 hover:border-red-300 hover:shadow-xl dark:border-white/10 dark:bg-white/5 dark:hover:border-red-400/30"
                      >
                        <FaCheckCircle className="mt-1 shrink-0 text-xl text-red-500 transition-transform duration-300 group-hover:scale-110" />

                        <p className="text-sm leading-relaxed text-gray-700 transition-transform duration-300 group-hover:translate-x-1 dark:text-gray-300 md:text-base">
                          {challenge}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* FUTURE PLANS */}
              {project?.futurePlans?.length > 0 && (
                <div>
                  <h2 className="mb-6 font-mono text-2xl font-bold text-black dark:text-white md:text-3xl">
                    Future Plans
                  </h2>

                  <div className="space-y-5">
                    {project.futurePlans.map((plan, index) => (
                      <div
                        key={index}
                        style={{
                          animationDelay: `${index * 0.08}s`
                        }}
                        className="future-card group flex gap-4 rounded-2xl border border-gray-200 bg-white/80 p-5 shadow-md transition-all duration-300 ease-out hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl dark:border-white/10 dark:bg-white/5 dark:hover:border-blue-400/30"
                      >
                        <FaCheckCircle className="mt-1 shrink-0 text-xl text-blue-500 transition-transform duration-300 group-hover:scale-110" />

                        <p className="text-sm leading-relaxed text-gray-700 transition-transform duration-300 group-hover:translate-x-1 dark:text-gray-300 md:text-base">
                          {plan}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>


          {/* IMAGE */}
          {project?.image && (
            <div className="relative h-[200px] overflow-hidden bg-gray-200 dark:bg-white/5 md:h-[500px]">
              <Image
                src={project.image}
                alt={
                  project?.title
                    ? `${project?.title}`
                    : "Project screenshot"
                }
                fill
                priority
                className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
              />

              {/* Image Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Cyan Bottom Glow */}
              <div className="absolute bottom-0 h-32 w-full bg-gradient-to-t from-secondary/30 to-transparent" />

              {/* Image Shine */}
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
            </div>
          )}
        </div>
      </div>

      {/* Section  */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-1 w-full -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
    </article>
  );
};

export default ViewDetails;

