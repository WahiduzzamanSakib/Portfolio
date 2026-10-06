"use client";

import React from "react";
import { FaJs, FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGithub } from "react-icons/fa";
import { SiExpress, SiMongodb, SiTailwindcss, SiNextdotjs, SiVercel, SiNetlify } from "react-icons/si";

const techs = [
  { name: "React.js", icon: FaReact, color: "text-cyan-500" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-slate-900 dark:text-white" },
  { name: "JavaScript", icon: FaJs, color: "text-amber-500" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-sky-500" },
  { name: "Node.js", icon: FaNodeJs, color: "text-emerald-500" },
  { name: "Express.js", icon: SiExpress, color: "text-slate-700 dark:text-slate-300" },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
  { name: "HTML5", icon: FaHtml5, color: "text-orange-500" },
  { name: "CSS3", icon: FaCss3Alt, color: "text-blue-500" },
  { name: "GitHub", icon: FaGithub, color: "text-slate-800 dark:text-slate-100" },
  { name: "Vercel", icon: SiVercel, color: "text-slate-900 dark:text-white" },
  { name: "Netlify", icon: SiNetlify, color: "text-teal-500" },
];

const TechStack = () => {
  return (
    <section className="relative overflow-hidden bg-[#fafafa] dark:bg-slate-950 py-10 transition-colors duration-500">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="mb-8 sm:mb-12 text-center">
          <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-600 dark:border-white/10 dark:bg-slate-900/60 dark:text-cyan-400">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-500" />
            Ecosystem
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-950 dark:text-white">
            Technologies in Production
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            Tools, frameworks, and libraries powering my applications.
          </p>
        </div>

        {/* MOBILE LAYOUT: Fixed 3 Columns Grid (Hide Marquee) */}
        <div className="grid grid-cols-3 gap-2.5 sm:hidden">
          {techs.map((tech) => {
            const Icon = tech.icon;
            return (
              <div
                key={tech.name}
                className="group flex flex-col items-center justify-center gap-1.5 rounded-xl border border-slate-200/80 bg-white/80 p-3 text-center shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-slate-900/60"
              >
                <Icon className={`text-2xl transition-transform duration-300 group-hover:scale-110 ${tech.color}`} />
                <span className="text-[10px] font-bold tracking-tight text-slate-700 dark:text-slate-300 truncate w-full">
                  {tech.name}
                </span>
              </div>
            );
          })}
        </div>

        {/* DESKTOP/TABLET LAYOUT: Infinite Marquee (Hidden on Mobile) */}
        <div className="hidden sm:block relative w-full overflow-hidden">
          <div className="tech-marquee py-2">
            <div className="tech-track">
              {/* First Set */}
              <div className="tech-set">
                {techs.map((tech) => {
                  const Icon = tech.icon;
                  return (
                    <div
                      key={tech.name}
                      className="group flex items-center gap-3 rounded-2xl border border-slate-200/80 bg-white/80 px-8 py-5 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-500/40 hover:shadow-md hover:shadow-cyan-500/5 dark:border-white/10 dark:bg-slate-900/60 dark:hover:border-cyan-400/40 cursor-default"
                    >
                      <Icon className={`text-3xl transition-transform duration-300 group-hover:scale-110 ${tech.color}`} />
                      <span className="text-sm font-semibold tracking-wide text-slate-700 dark:text-slate-300 whitespace-nowrap">
                        {tech.name}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Duplicate Set for Seamless Infinite Motion */}
              <div className="tech-set" aria-hidden="true">
                {techs.map((tech) => {
                  const Icon = tech.icon;
                  return (
                    <div
                      key={`duplicate-${tech.name}`}
                      className="group flex items-center gap-3 rounded-2xl border border-slate-200/80 bg-white/80 px-8 py-5 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-500/40 hover:shadow-md hover:shadow-cyan-500/5 dark:border-white/10 dark:bg-slate-900/60 dark:hover:border-cyan-400/40 cursor-default"
                    >
                      <Icon className={`text-3xl transition-transform duration-300 group-hover:scale-110 ${tech.color}`} />
                      <span className="text-sm font-semibold tracking-wide text-slate-700 dark:text-slate-300 whitespace-nowrap">
                        {tech.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section Divider */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-slate-200 dark:via-white/10 to-transparent" />
    </section>
  );
};

export default TechStack;