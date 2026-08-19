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
      "Currently pursuing undergraduate studies in Economics. Developing analytical skills, critical thinking, and problem-solving abilities.",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institute: "Moqubular Rahman Govt. College, Panchagarh",
    startYear: 2021,
    period: "2021 — 2022",
    status: "Completed",
    description:
      "Completed higher secondary education, building a strong foundation in academic knowledge, communication skills, and critical thinking.",
  },
];

const PROGRAM_LENGTH_YEARS = 6;

function getProgress(startYear) {
  const now = new Date();
  const elapsed =
    now.getFullYear() - startYear + now.getMonth() / 12;
  return Math.min(
    1,
    Math.max(0.04, elapsed / PROGRAM_LENGTH_YEARS)
  );
}

export default function Education() {
  const educationRef = useRef(null);
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setShowAnimation(true);
        observer.disconnect();
      }
    });
    if (educationRef.current) observer.observe(educationRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="education"
      ref={educationRef}
      className={`scroll-mt-24 relative overflow-hidden bg-slate-50 px-6 py-10 text-slate-800 transition-colors duration-500 dark:bg-slate-900/80 dark:text-slate-200 sm:py-12 ${
        showAnimation ? "education-visible" : ""
      }`}
    >

      <div className=" absolute bottom-0 left-1/2 h-1 w-full -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
      
      
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Soft Light Glow */}
        <div className="absolute left-1/2 top-20 h-[350px] w-[700px] -translate-x-1/2 rounded-full bg-white/40 blur-[120px] dark:bg-blue-600/20" />

        {/* Top Left Blue Glow */}
        <div className="absolute -left-32 top-[-160px] h-[420px] w-[420px] rounded-full bg-blue-500/[0.055] blur-[130px] dark:bg-blue-500/10" />

        {/* Bottom Right Cyan Glow */}
        <div className="absolute -bottom-40 -right-32 h-[430px] w-[430px] rounded-full bg-cyan-500/[0.05] blur-[130px] dark:bg-blue-500/20" />

        {/* Center Glow */}
        <div className="absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.025] blur-[100px] dark:bg-blue-500/20" />

        {/* Very Subtle Grid */}
        <div className="absolute inset-0 opacity-[0.018] dark:opacity-[0.025] [background-image:linear-gradient(to_right,#64748b_1px,transparent_1px),linear-gradient(to_bottom,#64748b_1px,transparent_1px)] [background-size:48px_48px]" />

        {/* Top Fade */}
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-slate-50 to-transparent dark:from-slate-900" />

        {/* Bottom Fade */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-50 to-transparent dark:from-slate-900" />
      </div>

      {/* CONTENT*/}
      <div className="relative mx-auto max-w-4xl">
        {/* Header */}
        <div
          className="education-header education-animate mb-12"
        >
          {/* Heading Row */}
          <div className="flex items-center gap-3">
            <span className="h-[3px] w-10 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 shadow-sm shadow-cyan-500/30" />

            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Educational{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Qualification
              </span>
            </h2>
          </div>

          {/* Description */}
          <p className="mt-4 max-w-lg text-sm leading-6 text-slate-500 dark:text-slate-400 sm:text-base">
            My academic journey and educational background.
          </p>
        </div>

        {/* EDUCATION ENTRIES */}
        <div className="space-y-6">
          {education.map((item, index) => {
            const progress = getProgress(item.startYear);

            return (
              <div
                key={index}
                style={{ animationDelay: `${index * 0.1}s` }}
                className="education-item education-animate group relative"
              >
                {/* Card Ambient Glow */}
                <div className="absolute -inset-1 rounded-[28px] bg-gradient-to-tr from-blue-600 via-cyan-500 to-blue-400 opacity-[0.06] blur-lg transition-all duration-500 group-hover:opacity-[0.16]" />

                {/* Card */}
                <div className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white/75 p-6 shadow-sm backdrop-blur-xl transition-all duration-300 group-hover:border-blue-300/70 group-hover:shadow-xl group-hover:shadow-blue-500/10 dark:border-slate-800 dark:bg-slate-950/60 dark:group-hover:border-blue-900/70 dark:group-hover:shadow-blue-500/5 sm:p-8">
                  {/* Hover Background */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-500/[0.06] via-transparent to-cyan-500/[0.04] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  {/* Top Highlight */}
                  <div className="absolute left-10 right-10 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="relative z-10 flex flex-col gap-6 sm:flex-row sm:items-start">
                    {/* Icon Badge */}
                    <div className="shrink-0">
                      <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 text-blue-600 shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:border-blue-200 group-hover:shadow-lg group-hover:shadow-blue-500/10 dark:border-blue-900/40 dark:text-blue-400 dark:group-hover:border-blue-800">
                        <FaGraduationCap size={23} />

                        {/* Icon Glow */}
                        <div className="absolute inset-0 -z-10 rounded-2xl bg-blue-500/10 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="min-w-0 flex-1">
                      {/* Title + Status */}
                      <div className="mb-1 flex flex-wrap items-center gap-3">
                        <h3 className="text-lg font-bold tracking-tight text-slate-900 transition-colors duration-300 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400 sm:text-xl">
                          {item.degree}
                        </h3>

                        {item.status && (
                          <span
                            className={`inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-semibold ${
                              item.status === "In Progress"
                                ? "border-amber-200 bg-amber-500/10 text-amber-600 dark:border-amber-900/40 dark:text-amber-400"
                                : "border-emerald-200 bg-emerald-500/10 text-emerald-600 dark:border-emerald-900/40 dark:text-emerald-400"
                            }`}
                          >
                            {item.status}
                          </span>
                        )}
                      </div>

                      {/* Institute */}
                      <p className="font-mono text-sm font-semibold text-blue-600 dark:text-blue-400">
                        {item.institute}
                      </p>

                      {/* Description */}
                      <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300 sm:text-base">
                        {item.description}
                      </p>

                      {/* Progress */}
                      {item.status === "In Progress" && (
                        <div className="mt-6">
                          {/* Period */}
                          <div className="mb-2 flex items-center justify-between text-xs font-medium text-slate-500 dark:text-slate-400">
                            <span>{item.period}</span>

                            <span className="font-semibold text-cyan-600 dark:text-cyan-400">
                              {Math.round(progress * 100)}%
                            </span>
                          </div>

                          {/* Progress Track */}
                          <div className="relative h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
                            {/* Progress Fill */}
                            <div
                              style={{
                                "--progress": `${progress * 100}%`,
                                animationDelay: "0.2s"
                              }}
                              className="education-progress-bar absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-blue-500 via-cyan-500 to-cyan-400"
                            />

                            {/* Shine */}
                            <div className="absolute inset-y-0 right-0 w-10 bg-white/20 blur-sm" />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Section Divider */}
        <div className="mx-auto h-px w-3/4 bg-gradient-to-r from-transparent via-cyan-500/25 to-transparent" />
      </div>
    </section>
  );
}