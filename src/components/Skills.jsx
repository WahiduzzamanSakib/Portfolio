"use client";
import React, { Suspense, useEffect, useRef, useState } from "react";
import { FaReact, FaNodeJs, FaGitAlt, FaGithub, FaFigma, FaDatabase, FaCode, FaServer } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiJavascript, SiExpress, SiMongodb, SiPostman, SiStripe, SiNpm, SiVercel, SiNetlify } from "react-icons/si";


const skillCategories = [
  {
    title: "Frontend Development",
    description: "Building modern, responsive user interfaces",
    icon: <FaReact />,
    skills: [
      { name: "React.js", icon: <FaReact />, level: 90 },
      { name: "Next.js", icon: <SiNextdotjs />, level: 85 },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 95 },
      { name: "JavaScript", icon: <SiJavascript />, level: 90 },
    ],
  },
  {
    title: "Backend Development",
    description: "Creating scalable server-side applications",
    icon: <FaServer />,
    skills: [
      { name: "Node.js", icon: <FaNodeJs />, level: 85 },
      { name: "Express.js", icon: <SiExpress />, level: 85 },
      { name: "REST APIs", icon: <FaCode />, level: 90 },
      { name: "JWT Auth", icon: <FaCode />, level: 80 },
      { name: "Stripe", icon: <SiStripe />, level: 75 },
    ],
  },
  {
    title: "Database Management",
    description: "Managing structured and scalable data",
    icon: <FaDatabase />,
    skills: [{ name: "MongoDB", icon: <SiMongodb />, level: 85 }],
  },
  {
    title: "Tools & Workflow",
    description: "Development tools and collaboration",
    icon: <FaGitAlt />,
    skills: [
      { name: "Git & GitHub", icon: <FaGithub />, level: 90 },
      { name: "Figma", icon: <FaFigma />, level: 75 },
      { name: "Postman", icon: <SiPostman />, level: 70 },
      { name: "npm", icon: <SiNpm />, level: 85 },
      {
        name: "Vercel / Netlify",
        icon: (
          <span className="flex items-center gap-1">
            <SiVercel />
            <SiNetlify />
          </span>
        ),
        level: 80,
      },
    ],
  },
];


function SkillsSkeleton() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-10 dark:bg-slate-900/60 sm:py-16">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 space-y-8">
        <div className="space-y-3">
          <div className="h-8 w-36 animate-pulse rounded-full bg-slate-200 dark:bg-slate-800" />
          <div className="h-10 w-64 animate-pulse rounded-lg bg-slate-200 dark:bg-slate-800" />
          <div className="h-4 w-96 animate-pulse rounded bg-slate-200 dark:bg-slate-800" />
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="h-72 w-full animate-pulse rounded-3xl bg-slate-200/80 dark:bg-slate-800/50"
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
      {
        threshold: 0.2,
      }
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
      className={`relative overflow-hidden bg-slate-50 py-10 transition-colors duration-500 dark:bg-slate-900/60 sm:py-14 ${showAnimation ? "skills-visible" : ""
        }`}
    >
      {/* BACKGROUND GLOW EFFECTS */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-20 h-[350px] w-[700px] -translate-x-1/2 rounded-full bg-white/40 blur-[120px] dark:bg-white/[0.025]" />
        <div className="absolute -left-32 top-[-160px] h-[420px] w-[420px] rounded-full bg-blue-500/[0.055] blur-[130px] dark:bg-blue-500/20" />
        <div className="absolute -bottom-40 -right-32 h-[430px] w-[430px] rounded-full bg-cyan-500/[0.05] blur-[130px] dark:bg-blue-500/20" />
        <div className="absolute inset-0 opacity-[0.018] dark:opacity-[0.025] [background-image:linear-gradient(to_right,#64748b_1px,transparent_1px),linear-gradient(to_bottom,#64748b_1px,transparent_1px)] [background-size:48px_48px]" />
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-slate-50 to-transparent dark:from-slate-900" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-50 to-transparent dark:from-slate-900" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* HEADER SECTION */}
        <div className="skills-header mb-12 sm:mb-16">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50/80 px-4 py-2 text-sm font-semibold text-blue-600 shadow-sm dark:border-blue-900/50 dark:bg-blue-950/30 dark:text-blue-400">
            <span className="h-2 w-2 rounded-full bg-cyan-500 shadow-sm shadow-cyan-500/50" />
            Technologies & Tools
          </span>

          <h2 className="text-4xl font-black tracking-tight text-slate-900 dark:text-white sm:text-5xl">
            My{" "}
            <span className="bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-500 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>

          <div className="mt-4 h-1 w-28 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 shadow-lg shadow-cyan-500/20" />

          <p className="mt-3 max-w-xl text-base leading-7 text-slate-600 dark:text-slate-400 sm:text-lg">
            Technologies and tools I use to build modern, scalable and user-friendly applications.
          </p>
        </div>

        {/* CATEGORY CARDS GRID */}
        <div className="skills-grid grid gap-8 md:grid-cols-2">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              style={{
                animationDelay: `${index * 0.15}s`
              }}
              className="skill-card group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white/75 p-6 shadow-sm backdrop-blur-xl transition-all duration-300 hover:border-blue-300/70 hover:shadow-xl hover:shadow-blue-500/10 dark:border-slate-800 dark:bg-slate-950/60 dark:hover:border-blue-900/70 dark:hover:shadow-blue-500/5 sm:p-8"
            >
              {/* Card Hover Glow Header */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-500/[0.04] via-transparent to-blue-500/[0.03] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="absolute left-8 right-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Big Card Header (Category) */}
              <div className="relative mb-6 flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-cyan-100 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 text-2xl text-cyan-500 shadow-sm transition-transform duration-300 group-hover:scale-105 dark:border-cyan-900/40 dark:text-cyan-400">
                  {category.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-2xl">
                    {category.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 sm:text-sm">
                    {category.description}
                  </p>
                </div>
              </div>

              {/* MINI SKILL CARDS GRID */}
              <div className="relative grid grid-cols-1 gap-3 sm:grid-cols-2">
                {category.skills.map((skill, i) => (
                  <div
                    key={i}
                    className="mini-skill-card flex flex-col justify-between rounded-2xl border border-slate-200/60 bg-slate-50/70 p-4 transition-all duration-300 hover:border-cyan-500/40 hover:bg-white hover:shadow-md dark:border-slate-800/80 dark:bg-slate-900/50 dark:hover:border-cyan-500/40 dark:hover:bg-slate-900"
                  >
                    {/* Top Row: Icon, Name & Percentage */}
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2.5 font-semibold text-slate-800 dark:text-slate-200">
                          <span className="text-lg text-cyan-500 dark:text-cyan-400">
                            {skill.icon}
                          </span>
                          <span className="text-sm">{skill.name}</span>
                        </div>
                        <span className="text-xs font-bold text-cyan-600 dark:text-cyan-400">
                          {skill.level}%
                        </span>
                      </div>
                    </div>

                    {/* Progress Bar Inside Mini Card */}
                    <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
                      <div
                        style={{
                          "--progress": `${skill.level}%`,
                          animationDelay: `${i * 0.1}s`
                        }}
                        className="progress-bar h-full rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* SECTION DIVIDER */}
        <div className=" absolute bottom-0 left-1/2 h-1 w-full -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
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