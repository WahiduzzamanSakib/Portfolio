"use client";

import React from "react";
import { FaJs, FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGithub } from "react-icons/fa";
import { SiExpress, SiMongodb, SiTailwindcss } from "react-icons/si";

const techs = [
    {
        name: "JavaScript",
        icon: FaJs,
        color: "text-yellow-400",
    },
    {
        name: "React",
        icon: FaReact,
        color: "text-cyan-400",
    },
    {
        name: "Node.js",
        icon: FaNodeJs,
        color: "text-green-400",
    },
    {
        name: "Express.js",
        icon: SiExpress,
        color: "text-gray-500 dark:text-gray-300",
    },
    {
        name: "MongoDB",
        icon: SiMongodb,
        color: "text-green-500",
    },
    {
        name: "HTML5",
        icon: FaHtml5,
        color: "text-orange-500",
    },
    {
        name: "CSS3",
        icon: FaCss3Alt,
        color: "text-blue-500",
    },
    {
        name: "Tailwind",
        icon: SiTailwindcss,
        color: "text-sky-400",
    },
    {
        name: "Github",
        icon: FaGithub,
        color: "text-gray-700 dark:text-white",
    },
];

const TechStack = () => {
    return (
        <section className="relative isolate overflow-hidden bg-white py-12 dark:bg-slate-950 md:py-16">
            {/*  BACKGROUND*/}

            {/* Left Animated Glow */}
            <div className="tech-glow-left pointer-events-none absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-blue-500/10 blur-3xl dark:bg-blue-500/20" />

            {/* Right Animated Glow */}
            <div className="tech-glow-right pointer-events-none absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-3xl dark:bg-cyan-500/20" />

            {/* Center Glow */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-3xl" />

            {/* Bottom Left Glow */}
            <div className="pointer-events-none absolute -left-40 bottom-0 h-[420px] w-[420px] rounded-full bg-blue-500/[0.045] blur-[130px] dark:bg-cyan-500/10" />

            {/* Bottom Right Glow */}
            <div className="pointer-events-none absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-cyan-500/[0.04] blur-[140px] dark:bg-cyan-500/10" />

            {/* Grid */}
            <div className="absolute inset-0 opacity-[0.025] dark:opacity-[0.035] [background-image:linear-gradient(to_right,#64748b_1px,transparent_1px),linear-gradient(to_bottom,#64748b_1px,transparent_1px)] [background-size:48px_48px]" />

            {/* Top Fade */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/90 to-transparent dark:from-slate-950/90" />

            {/* Bottom Fade */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent dark:from-slate-950" />

            {/*  CONTENT */}
            <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                {/* HEADER */}
                <div className="mb-16 text-center">
                    <h2 className="font-mono text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">
                        Technologies
                    </h2>

                    {/* Header Line */}
                    <div className="mx-auto mt-4 h-1 w-28 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 shadow-lg shadow-cyan-500/20" />

                    <p className="mt-4 text-sm uppercase tracking-[0.25em] text-gray-500 dark:text-gray-400">
                        My Tech Stack
                    </p>
                </div>

                {/*  TECH MARQUEE */}
                <div className="relative w-full overflow-hidden rounded-3xl">
                    {/* Left Fade */}
                    <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-24 bg-gradient-to-r from-white to-transparent dark:from-slate-950" />

                    {/* Right Fade */}
                    <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-24 bg-gradient-to-l from-white to-transparent dark:from-slate-950" />

                    {/* Marquee */}
                    <div className="tech-marquee">
                        <div className="tech-track">
                            {/* First Set */}
                            <div className="tech-set">
                                {techs.map((tech) => {
                                    const Icon = tech.icon;

                                    return (
                                        <div
                                            key={tech.name}
                                            className="group flex min-w-[120px] flex-col items-center gap-4"
                                        >
                                            {/* Icon Card */}
                                            <div
                                                className="relative flex h-20 w-20 items-center justify-center rounded-[30%] border border-gray-300 bg-white/70 shadow-lg backdrop-blur-xl transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-2 group-hover:border-cyan-400 group-hover:shadow-xl group-hover:shadow-cyan-500/20 dark:border-gray-700 dark:bg-gray-900/70 dark:group-hover:border-cyan-400"
                                            >
                                                {/* Glow */}
                                                <div
                                                    className="pointer-events-none absolute inset-0 rounded-[30%] bg-cyan-400/0 blur-xl transition-all duration-300 group-hover:bg-cyan-400/10"
                                                />

                                                <Icon
                                                    aria-hidden="true"
                                                    className={`relative z-10 text-4xl transition-transform duration-300 group-hover:scale-110 ${tech.color}`}
                                                />
                                            </div>

                                            {/* Name */}
                                            <p
                                                className="text-sm font-medium text-gray-700 transition-all duration-300 group-hover:font-bold group-hover:text-blue-800 dark:text-gray-300 dark:group-hover:text-cyan-400"
                                            >
                                                {tech.name}
                                            </p>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Second Set - For Seamless Loop */}
                            <div className="tech-set" aria-hidden="true">
                                {techs.map((tech) => {
                                    const Icon = tech.icon;
                                    return (
                                        <div
                                            key={`duplicate-${tech.name}`}
                                            className="group flex min-w-[120px] flex-col items-center gap-4"
                                        >
                                            <div
                                                className="relative flex h-20 w-20 items-center justify-center rounded-[30%] border border-gray-300 bg-white/70 shadow-lg backdrop-blur-xl transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-2 group-hover:border-cyan-400 group-hover:shadow-xl group-hover:shadow-cyan-500/20 dark:border-gray-700 dark:bg-gray-900/70 dark:group-hover:border-cyan-400"
                                            >
                                                <div
                                                    className="pointer-events-none absolute inset-0 rounded-[30%] bg-cyan-400/0 blur-xl transition-all duration-300 group-hover:bg-cyan-400/10"
                                                />
                                                <Icon
                                                    aria-hidden="true"
                                                    className={`relative z-10 text-4xl transition-transform duration-300 group-hover:scale-110 ${tech.color}`}
                                                />
                                            </div>

                                            <p className="text-sm font-medium text-gray-700 transition-all duration-300 group-hover:font-bold group-hover:text-blue-800 dark:text-gray-300 dark:group-hover:text-cyan-400">
                                                {tech.name}
                                            </p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Divider */}
            <div className="pointer-events-none absolute bottom-0 left-1/2 h-px w-full -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
        </section>
    );
};

export default TechStack;