"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { FaArrowRight, FaBookOpen, FaHandshake } from "react-icons/fa";
import { SiNextdotjs, SiReact, SiTailwindcss, SiJavascript, SiMongodb } from "react-icons/si";

export default function About() {
  const aboutRef = useRef(null);
  const [showAnimation, setShowAnimation] = useState(false);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowAnimation(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (aboutRef.current) observer.observe(aboutRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={aboutRef}
      id="about"
      className={`scroll-mt-24 relative overflow-hidden bg-white py-10 dark:bg-slate-950 transition-colors duration-500 ${
        showAnimation ? "about-visible" : ""
      }`}
    >
      {/* PERFORMANCE-OPTIMIZED SUBTLE AMBIENT BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute right-0 top-1/4 h-80 w-80 rounded-full bg-cyan-500/5 blur-[120px] dark:bg-cyan-500/10" />
        <div className="absolute left-0 bottom-10 h-80 w-80 rounded-full bg-blue-500/5 blur-[120px] dark:bg-blue-600/10" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* SECTION HEADER */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-slate-50 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-600 dark:border-white/10 dark:bg-slate-900/60 dark:text-cyan-400">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-500" />
            About Me
          </span>

          <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 dark:text-white sm:text-4xl lg:text-5xl">
            Building digital experiences{" "}
            <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 dark:from-cyan-400 dark:via-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
              with purpose & precision.
            </span>
          </h2>
        </div>

        {/* 2-COLUMN ASYMMETRIC EDITORIAL LAYOUT */}
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* LEFT: EDITORIAL VISUAL CARD */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto w-full max-w-[400px]">
              {/* Backlight Ambient Glow */}
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-cyan-500/15 via-blue-500/10 to-indigo-500/15 blur-xl" />

              {/* Framed Image Container */}
              <div className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white/70 p-2.5 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/60">
                <div className="relative h-[440px] overflow-hidden rounded-2xl bg-slate-100 dark:bg-slate-800">
                  <Image
                    src="/wahid.webp"
                    alt="Md. Waheduzzaman"
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover object-center transition-transform duration-700 hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />

                  <div className="pointer-events-none absolute bottom-5 left-5 right-5 text-white">
                    <p className="text-xs font-mono uppercase tracking-wider text-cyan-300">
                      Frontend & MERN-Stack Developer
                    </p>
                    <h3 className="mt-1 text-2xl font-bold tracking-tight">
                      Md. Waheduzzaman
                    </h3>
                  </div>
                </div>
              </div>

              {/* Floating Tech Badges with Minimalist Design */}
              <div className="absolute -left-3 top-8 flex items-center gap-2 rounded-xl border border-slate-200/80 bg-white/95 px-3 py-2 shadow-lg backdrop-blur-md dark:border-white/10 dark:bg-slate-900/95 transition-transform hover:scale-105">
                <SiReact className="text-xl text-cyan-500" />
                <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">React.js</span>
              </div>

              <div className="absolute -right-3 bottom-12 flex items-center gap-2 rounded-xl border border-slate-200/80 bg-white/95 px-3 py-2 shadow-lg backdrop-blur-md dark:border-white/10 dark:bg-slate-900/95 transition-transform hover:scale-105">
                <SiNextdotjs className="text-xl text-slate-900 dark:text-white" />
                <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">Next.js 16</span>
              </div>
            </div>
          </div>

          {/* RIGHT: NARRATIVE, METRICS & CTAS */}
          <div className="lg:col-span-7">
            <div className="space-y-4 text-base leading-relaxed text-slate-600 dark:text-slate-400">
              <p>
                Hello! I&apos;m{" "}
                <span className="font-semibold text-slate-900 dark:text-white">
                  Md. Waheduzzaman
                </span>
                . My path as a developer is driven by deep curiosity, relentless self-learning,
                and a commitment to craft. By dissecting modern web architectures and solving real-world
                problems hands-on, I develop clean, resilient, and intuitive software solutions.
              </p>

              <p>
                Today, I focus on building high-performance, accessible, and elegant user interfaces using{" "}
                <span className="font-semibold text-slate-900 dark:text-white">
                  Next.js, React.js
                </span>
                , and{" "}
                <span className="font-semibold text-slate-900 dark:text-white">
                  Tailwind CSS
                </span>
                . I thrive at the intersection of aesthetic design and robust engineering - turning complex ideas into seamless user experiences.
              </p>

              {showMore && (
                <div className="about-read-more pt-2 text-slate-600 dark:text-slate-400 space-y-3">
                  <p>
                    I constantly refine my technical workflow to meet modern web standards: reducing bundle sizes, leveraging server components, optimizing core web vitals, and ensuring responsive fidelity across all viewports.
                  </p>
                  <p>
                    Whether collaborating with product teams or delivering end-to-end client applications, I bring disciplined execution, clear communication, and an eye for high-fidelity craft.
                  </p>
                </div>
              )}
            </div>

            {/* Read More / Read Less Toggle */}
            <button
              type="button"
              onClick={() => setShowMore((prev) => !prev)}
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-cyan-600 hover:text-cyan-700 dark:text-cyan-400 dark:hover:text-cyan-300 transition cursor-pointer"
            >
              <span>{showMore ? "Show Less" : "Read Full Story"}</span>
              <FaArrowRight
                className={`text-xs transition-transform duration-300 ${
                  showMore ? "-rotate-90" : "group-hover:translate-x-1"
                }`}
              />
            </button>

            {/* Key Technologies Row */}
            <div className="mt-8">
              <p className="mb-3 text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Core Stack
              </p>
              <div className="flex flex-wrap gap-2.5">
                {[
                  { name: "Next.js", icon: SiNextdotjs },
                  { name: "React.js", icon: SiReact },
                  { name: "Tailwind CSS", icon: SiTailwindcss },
                  { name: "JavaScript", icon: SiJavascript },
                  { name: "MongoDB", icon: SiMongodb },
                ].map((tech) => {
                  const Icon = tech.icon;
                  return (
                    <div
                      key={tech.name}
                      className="flex items-center gap-2 rounded-xl border border-slate-200/80 bg-slate-50/80 px-3 py-1.5 text-xs font-medium text-slate-700 shadow-sm transition-all hover:border-cyan-500/40 hover:bg-white dark:border-white/10 dark:bg-slate-900/60 dark:text-slate-300 dark:hover:border-cyan-400/40"
                    >
                      <Icon className="text-sm text-cyan-600 dark:text-cyan-400" />
                      <span>{tech.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* STUDIO METRICS BENTO */}
            <div className="mt-10 grid grid-cols-3 divide-x divide-slate-200 rounded-2xl border border-slate-200/80 bg-white/70 shadow-sm backdrop-blur-xl dark:divide-white/10 dark:border-white/10 dark:bg-slate-900/50">
              <div className="p-4 sm:p-5 text-center transition-colors hover:bg-slate-50/50 dark:hover:bg-white/[0.02]">
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-950 dark:text-white">
                  10+
                </div>
                <p className="mt-1 text-xs font-medium text-slate-500 dark:text-slate-400">
                  Completed Projects
                </p>
              </div>

              <div className="p-4 sm:p-5 text-center transition-colors hover:bg-slate-50/50 dark:hover:bg-white/[0.02]">
                <div className="text-2xl sm:text-3xl font-extrabold text-cyan-600 dark:text-cyan-400">
                  1+
                </div>
                <p className="mt-1 text-xs font-medium text-slate-500 dark:text-slate-400">
                  Years Building
                </p>
              </div>

              <div className="p-4 sm:p-5 text-center transition-colors hover:bg-slate-50/50 dark:hover:bg-white/[0.02]">
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-950 dark:text-white">
                  3+
                </div>
                <p className="mt-1 text-xs font-medium text-slate-500 dark:text-slate-400">
                  Real Projects
                </p>
              </div>
            </div>

            {/* Beyond the Code Card */}
            <div className="mt-6 flex items-start gap-4 rounded-2xl border border-slate-200/80 bg-slate-50/70 p-4 transition-all duration-300 hover:border-cyan-500/30 hover:bg-white dark:border-white/10 dark:bg-slate-900/40 dark:hover:border-cyan-400/30">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
                <FaBookOpen />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900 dark:text-white">
                  Beyond the Code
                </p>
                <p className="mt-1 text-xs sm:text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                  Outside programming, I enjoy playing sports and staying physically active. It brings mental clarity, discipline, and stamina that directly sharpen my problem-solving ability.
                </p>
              </div>
            </div>

            {/* Call-to-Action Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2.5 rounded-xl bg-slate-950 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-600 active:scale-95 dark:bg-white dark:text-slate-950 dark:hover:bg-cyan-400"
              >
                <FaHandshake className="text-sm" />
                <span>Let&apos;s Work Together</span>
                <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300/80 bg-white/70 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-slate-800 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-500/50 hover:bg-cyan-50/50 hover:text-cyan-600 active:scale-95 dark:border-white/10 dark:bg-slate-900/60 dark:text-slate-200 dark:hover:border-cyan-400/50 dark:hover:text-cyan-300"
              >
                <span>View Projects</span>
                <FaArrowRight className="text-xs" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Section Divider */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-slate-200 dark:via-white/10 to-transparent" />
    </section>
  );
}