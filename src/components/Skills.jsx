"use client";

import React, { Suspense, useEffect, useRef, useState } from "react";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaDatabase,
  FaCode,
  FaServer,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiJavascript,
  SiExpress,
  SiMongodb,
  SiPostman,
  SiStripe,
  SiNpm,
  SiVercel,
  SiNetlify,
} from "react-icons/si";

const skillCategories = [
  {
    title: "Frontend Development",
    description: "Building modern, reactive, accessible interfaces",
    icon: FaReact,
    skills: [
      { name: "React.js", icon: FaReact, level: 90 },
      { name: "Next.js 16", icon: SiNextdotjs, level: 85 },
      { name: "Tailwind CSS", icon: SiTailwindcss, level: 95 },
      { name: "JavaScript (ES6+)", icon: SiJavascript, level: 90 },
    ],
  },
  {
    title: "Backend & APIs",
    description: "Architecting reliable server-side services",
    icon: FaServer,
    skills: [
      { name: "Node.js", icon: FaNodeJs, level: 85 },
      { name: "Express.js", icon: SiExpress, level: 85 },
      { name: "RESTful APIs", icon: FaCode, level: 90 },
      { name: "JWT Authentication", icon: FaCode, level: 80 },
      { name: "Stripe Payments", icon: SiStripe, level: 75 },
    ],
  },
  {
    title: "Database Systems",
    description: "Designing scalable database schemas & models",
    icon: FaDatabase,
    skills: [
      { name: "MongoDB & Mongoose", icon: SiMongodb, level: 85 },
    ],
  },
  {
    title: "Tools & DevOps",
    description: "Modern workflows, version control, and CI/CD",
    icon: FaGitAlt,
    skills: [
      { name: "Git & GitHub", icon: FaGithub, level: 90 },
      { name: "Figma (UI Specs)", icon: FaFigma, level: 75 },
      { name: "Postman API Testing", icon: SiPostman, level: 75 },
      { name: "npm Ecosystem", icon: SiNpm, level: 85 },
      {
        name: "Vercel & Netlify",
        icon: SiVercel,
        level: 80,
      },
    ],
  },
];

function SkillsSkeleton() {
  return (
    <section className="relative overflow-hidden bg-white py-16 dark:bg-slate-950 sm:py-20">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 space-y-8">
        <div className="space-y-3 mx-auto max-w-2xl text-center">
          <div className="h-6 w-32 mx-auto animate-pulse rounded-full bg-slate-200 dark:bg-slate-800" />
          <div className="h-10 w-64 mx-auto animate-pulse rounded-lg bg-slate-200 dark:bg-slate-800" />
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="h-64 w-full animate-pulse rounded-2xl bg-slate-100 dark:bg-slate-900"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillsContent() {
  const skillsRef = useRef(null);
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

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      ref={skillsRef}
      className={`relative overflow-hidden bg-white py-20 transition-colors duration-500 dark:bg-slate-950 ${
        showAnimation ? "skills-visible" : ""
      }`}
    >
      {/* PERFORMANCE-OPTIMIZED SUBTLE AMBIENT BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute right-1/4 top-10 h-72 w-72 rounded-full bg-cyan-500/5 blur-[120px] dark:bg-cyan-500/10" />
        <div className="absolute left-1/4 bottom-10 h-72 w-72 rounded-full bg-blue-500/5 blur-[120px] dark:bg-blue-600/10" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* HEADER */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-slate-50 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-600 dark:border-white/10 dark:bg-slate-900/60 dark:text-cyan-400">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-500" />
            Technologies &amp; Competencies
          </span>

          <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 dark:text-white sm:text-4xl md:text-5xl">
            Technical{" "}
            <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 dark:from-cyan-400 dark:via-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
              Proficiency
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-400">
            A specialized toolkit built through continuous practice, modern standards, and commercial web applications.
          </p>
        </div>

        {/* CATEGORY GRID */}
        <div className="grid gap-6 md:grid-cols-2">
          {skillCategories.map((category, index) => {
            const CategoryIcon = category.icon;

            return (
              <div
                key={category.title}
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
                className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/80 bg-white/70 p-6 shadow-sm backdrop-blur-xl transition-all duration-300 hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/5 dark:border-white/10 dark:bg-slate-900/50 dark:hover:border-cyan-400/40 sm:p-7 ${
                  showAnimation ? "animate-fade-up opacity-100" : "opacity-0"
                }`}
              >
                <div>
                  {/* Category Header */}
                  <div className="mb-6 flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-cyan-600 transition-all duration-300 group-hover:scale-105 group-hover:bg-cyan-500 group-hover:text-white dark:bg-slate-800 dark:text-cyan-400 dark:group-hover:bg-cyan-400 dark:group-hover:text-slate-950">
                      <CategoryIcon className="text-2xl" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">
                        {category.title}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {/* Skills List in Category */}
                  <div className="space-y-4">
                    {category.skills.map((skill) => {
                      const SkillIcon = skill.icon;
                      return (
                        <div
                          key={skill.name}
                          className="rounded-xl border border-slate-100 bg-slate-50/70 p-3.5 transition-all duration-200 hover:border-cyan-500/30 hover:bg-white dark:border-white/5 dark:bg-slate-800/40 dark:hover:border-cyan-400/30 dark:hover:bg-slate-800/70"
                        >
                          <div className="flex items-center justify-between text-xs font-semibold text-slate-800 dark:text-slate-200 mb-2">
                            <div className="flex items-center gap-2.5">
                              <span className="text-base text-cyan-600 dark:text-cyan-400">
                                <SkillIcon />
                              </span>
                              <span>{skill.name}</span>
                            </div>
                            <span className="font-mono text-cyan-600 dark:text-cyan-400">
                              {skill.level}%
                            </span>
                          </div>

                          {/* Subtle Micro-Progress Bar */}
                          <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700/60">
                            <div
                              style={{
                                "--progress": `${skill.level}%`,
                              }}
                              className="progress-bar h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-cyan-400 dark:to-blue-500 transition-all duration-700"
                            />
                          </div>
                        </div>
                      );
                    })}
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

export default function Skills() {
  return (
    <Suspense fallback={<SkillsSkeleton />}>
      <SkillsContent />
    </Suspense>
  );
}