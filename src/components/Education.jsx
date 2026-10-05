"use client";

import React, { useState, useEffect, useRef } from "react";
import { FaGraduationCap } from "react-icons/fa";

const education = [
  {
    degree: "Bachelor of Social Science (BSS) in Economics",
    institute: "National University, Bangladesh",
    startYear: 2023,
    period: "2023 — Present",
    status: "In Progress",
    description:
      "Currently pursuing undergraduate studies in Economics. Developing analytical rigor, quantitative problem-solving, critical evaluation, and structured logic that strongly reinforce software engineering principles.",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institute: "Moqubular Rahman Govt. College, Panchagarh",
    startYear: 2021,
    period: "2021 — 2022",
    status: "Completed",
    description:
      "Completed higher secondary education, building strong fundamentals in academic disciplines, logic, written communication, and analytical thinking.",
  },
];

const PROGRAM_LENGTH_YEARS = 4;

function getProgress(startYear) {
  const now = new Date();
  const elapsed = now.getFullYear() - startYear + now.getMonth() / 12;
  return Math.min(1, Math.max(0.15, elapsed / PROGRAM_LENGTH_YEARS));
}

export default function Education() {
  const educationRef = useRef(null);
  const [showAnimation, setShowAnimation] = useState(false);

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

    if (educationRef.current) observer.observe(educationRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="education"
      ref={educationRef}
      className={`scroll-mt-24 relative overflow-hidden bg-[#fafafa] py-20 text-slate-800 transition-colors duration-500 dark:bg-slate-950 dark:text-slate-200 ${
        showAnimation ? "education-visible" : ""
      }`}
    >
      {/* PERFORMANCE-OPTIMIZED SUBTLE AMBIENT BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-cyan-500/5 blur-[120px] dark:bg-cyan-500/10" />
      </div>

      <div className="relative mx-auto max-w-4xl px-6 lg:px-8">
        {/* HEADER */}
        <div className="mb-14 text-center sm:text-left">
          <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-600 dark:border-white/10 dark:bg-slate-900/60 dark:text-cyan-400">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-500" />
            Academic Background
          </span>

          <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 dark:text-white sm:text-4xl">
            Educational{" "}
            <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 dark:from-cyan-400 dark:via-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
              Qualifications
            </span>
          </h2>

          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            Formal academic background supporting analytical reasoning and structured thinking.
          </p>
        </div>

        {/* TIMELINE ITEMS */}
        <div className="space-y-6">
          {education.map((item, index) => {
            const progress = getProgress(item.startYear);
            const isInProgress = item.status === "In Progress";

            return (
              <div
                key={item.degree}
                style={{ animationDelay: `${index * 120}ms` }}
                className="group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white/80 p-6 sm:p-8 shadow-sm backdrop-blur-xl transition-all duration-300 hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/5 dark:border-white/10 dark:bg-slate-900/50 dark:hover:border-cyan-400/40"
              >
                <div className="flex flex-col sm:flex-row sm:items-start gap-5">
                  {/* Icon Badge */}
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-100 text-cyan-600 transition-all duration-300 group-hover:scale-105 group-hover:bg-cyan-500 group-hover:text-white dark:bg-slate-800 dark:text-cyan-400 dark:group-hover:bg-cyan-400 dark:group-hover:text-slate-950">
                    <FaGraduationCap className="text-xl" />
                  </div>

                  {/* Body Content */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                      <h3 className="text-lg font-bold tracking-tight text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                        {item.degree}
                      </h3>

                      <span
                        className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                          isInProgress
                            ? "bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20"
                            : "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20"
                        }`}
                      >
                        {item.status}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm font-medium text-cyan-600 dark:text-cyan-400 font-mono">
                      {item.institute} · {item.period}
                    </p>

                    <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                      {item.description}
                    </p>

                    {/* Progress track if in progress */}
                    {isInProgress && (
                      <div className="mt-5">
                        <div className="mb-2 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                          <span>Academic Timeline Progress</span>
                          <span className="font-mono font-semibold text-cyan-600 dark:text-cyan-400">
                            {Math.round(progress * 100)}%
                          </span>
                        </div>

                        <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
                          <div
                            style={{
                              "--progress": `${progress * 100}%`,
                            }}
                            className="education-progress-bar h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-cyan-400 dark:to-blue-500 transition-all duration-700"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Section Divider */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-slate-200 dark:via-white/10 to-transparent" />
    </section>
  );
}