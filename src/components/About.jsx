"use client";

import  { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { FaArrowRight, FaBookOpen, FaHandshake } from "react-icons/fa";
import { SiNextdotjs, SiReact, SiTailwindcss } from "react-icons/si";

export default function About() {

    const aboutRef = useRef(null);
    const [showAnimation, setShowAnimation] = useState(false);
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setShowAnimation(true);
            }
        });
        if (aboutRef.current) observer.observe(aboutRef.current);
        return () => observer.disconnect();
    }, []);


    const [showMore, setShowMore] = useState(false);
    return (
        <section
            ref={aboutRef}
            id="about"
            className={`scroll-mt-24 relative overflow-hidden bg-white py-10 dark:bg-slate-950 sm:py-12 ${showAnimation ? "about-visible" : ""
                }`}
        >

            {/* Background */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-[-10%] top-20 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
                <div className="absolute bottom-0 right-[-10%] h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />
            </div>

            <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                {/* Heading */}
                <div className="about-animate about-heading mx-auto mb-8 max-w-2xl text-center">
                    <span
                        className="mb-2 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600 dark:border-blue-900/50 dark:bg-blue-950/30 dark:text-blue-400"
                    >
                        <span className="h-2 w-2 rounded-full bg-blue-500" />
                        About Me
                    </span>

                    <h2
                        className=" text-2xl font-black tracking-tight text-slate-900 dark:text-white sm:text-4xl">

                        Building digital experiences
                        <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                            with purpose & precision.
                        </span>
                    </h2>
                </div>

                <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-20">

                    {/* IMAGE */}
                    <div className="about-animate about-image lg:col-span-5">

                        <div className="relative mx-auto w-full max-w-[420px]">

                            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-blue-600/20 via-cyan-400/10 to-purple-500/20 blur-2xl" />

                            <div
                                className="relative overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white p-2 shadow-2xl dark:border-slate-800 dark:bg-slate-900"
                            >

                                <div className="relative h-[460px] overflow-hidden rounded-[1.5rem] bg-slate-100 dark:bg-slate-800">
                                    <Image
                                        src="/wahid.webp"
                                        alt="Md. Waheduzzaman"
                                        fill
                                        className="object-cover transition-transform duration-700 hover:scale-105 opacity-90 hover:opacity-100"
                                    />

                                    <div
                                        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/70 via-black/20 to-transparent"
                                    />
                                    <div
                                        className="pointer-events-none absolute bottom-6 left-6 right-6"
                                    >
                                        <p className="text-sm text-white/70">
                                            Frontend Developer
                                        </p>

                                        <h3 className="mt-1 text-2xl font-bold text-white">
                                            Md. Waheduzzaman
                                        </h3>
                                    </div>
                                </div>
                            </div>

                            {/* React Floating Badge */}
                            <div
                                className="about-react-badge absolute -left-5 top-10 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/50 bg-blue-600 text-white shadow-xl"
                            >
                                <SiReact className="text-2xl" />
                            </div>

                            {/* Next Floating Badge */}
                            <div
                                className="about-next-badge absolute -bottom-5 -right-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/50 bg-slate-950 text-white shadow-xl"
                            >
                                <SiNextdotjs className="text-2xl" />
                            </div>

                            {/* Experience Badge */}
                            <div className="absolute -ml-10  -bottom-6 left-6 hidden rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-xl dark:border-slate-800 dark:bg-slate-900 sm:block hover:scale-102 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-500 ease-out">
                                <p className="text-2xl font-black text-slate-900 dark:text-white">
                                    1+
                                </p>
                                <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                                    Years of experience
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT CONTENT */}
                    <div className=" about-animate about-content lg:col-span-7">
                        <div className=" space-y-2 text-[16px] leading-8 text-slate-600 dark:text-slate-400">
                            <p>
                                Hello! I&apos;m{" "}

                                <span className="font-semibold text-slate-900 dark:text-white">
                                    Md. Waheduzzaman
                                </span>
                                . My programming journey started with curiosity and
                                self-learning. Without relying on a traditional classroom or
                                bootcamp, I learned by exploring, experimenting, and solving
                                real problems.
                            </p>


                            <p>
                                Today, I focus on building clean, responsive, and modern
                                interfaces using{" "}

                                <span className="font-semibold text-slate-900 dark:text-white">
                                    Next.js,
                                </span>{" "}

                                <span className="font-semibold text-slate-900 dark:text-white">
                                    React.js,
                                </span>{" "}

                                <span className="font-semibold text-slate-900 dark:text-white">
                                    Tailwind CSS
                                </span>
                                . I especially enjoy transforming designs and ideas into
                                interactive experiences that feel intuitive and polished.
                            </p>

                            {showMore && (
                                <p className="about-read-more">
                                    I&apos;m constantly exploring new technologies and improving
                                    my workflow. Whether it&apos;s refining responsive layouts,
                                    improving performance, or adding subtle motion, I care about
                                    the details that make a product feel professional.
                                </p>
                            )}
                        </div>

                        {/* Read More Button */}
                        <button
                            type="button"
                            onClick={() => setShowMore((prev) => !prev)}
                            className=" mt-5 inline-flex items-center gap-2 text-sm font-bold text-blue-600 transition hover:gap-3 dark:text-blue-400"
                        >
                            {showMore ? "Show Less" : "Read More"}
                            <FaArrowRight
                                className={`text-xs transition-transform ${showMore ? "-rotate-90" : ""}`}
                            />
                        </button>

                        {/* Tech Stack */}
                        <div className="mt-8">
                            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
                                Technologies I work with
                            </p>

                            <div className="flex flex-wrap gap-3">
                                <div
                                    className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-semibold text-slate-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 hover:scale-105 transition"
                                >
                                    <SiNextdotjs />
                                    Next.js
                                </div>

                                <div
                                    className="flex items-center gap-2 rounded-xl border border-cyan-200 bg-cyan-50 px-3 py-2 text-sm font-semibold text-cyan-600 dark:border-cyan-900/50 dark:bg-cyan-950/30 dark:text-cyan-400 hover:scale-105 transition"
                                >
                                    <SiReact />
                                    React
                                </div>

                                <div
                                    className="flex items-center gap-2 rounded-xl border border-teal-200 bg-teal-50 px-3 py-2 text-sm font-semibold text-teal-600 dark:border-teal-900/50 dark:bg-teal-950/30 dark:text-teal-400 hover:scale-105 transition"
                                >
                                    <SiTailwindcss />
                                    Tailwind
                                </div>
                            </div>
                        </div>

                        {/* STATS */}
                        <div className="mt-10 grid grid-cols-3 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/5 dark:border-slate-800 dark:bg-slate-900/60 dark:hover:border-blue-900/50">

                            {/* Completed Projects */}
                            <div
                                className="group relative overflow-hidden border-r border-slate-200 p-4 text-center transition-all duration-300 hover:bg-blue-50/60 sm:p-5 dark:border-slate-800 dark:hover:bg-blue-950/20"
                            >
                                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                                <div className="text-2xl font-black text-slate-900 transition-transform duration-300 group-hover:scale-110 dark:text-white sm:text-3xl">
                                    10+
                                </div>

                                <p className="mt-1 text-[11px] font-medium leading-4 text-slate-500 sm:text-xs">
                                    Completed Projects
                                </p>
                            </div>

                            {/* Years Building */}
                            <div
                                className="group relative overflow-hidden border-r border-slate-200 p-4 text-center transition-all duration-300 hover:bg-blue-50/60 sm:p-5 dark:border-slate-800 dark:hover:bg-blue-950/20"
                            >
                                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                                <div className="text-2xl font-black text-blue-600 transition-transform duration-300 group-hover:scale-110 sm:text-3xl">
                                    1+
                                </div>

                                <p className="mt-1 text-[11px] font-medium leading-4 text-slate-500 sm:text-xs">
                                    Years Building
                                </p>
                            </div>

                            {/* Real-world Projects */}
                            <div
                                className="group relative overflow-hidden p-4 text-center transition-all duration-300 hover:bg-cyan-50/60 sm:p-5 dark:hover:bg-cyan-950/20"
                            >
                                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                                <div className="text-2xl font-black text-cyan-500 transition-transform duration-300 group-hover:scale-110 sm:text-3xl">
                                    3+
                                </div>

                                <p className="mt-1 text-[11px] font-medium leading-4 text-slate-500 sm:text-xs">
                                    Real-world Projects
                                </p>
                            </div>

                        </div>

                        {/* Personal note */}
                        <div className="group mt-6 flex gap-4 rounded-2xl border border-slate-200 bg-slate-50/80 p-5 transition-all duration-500 ease-out hover:-translate-y-1 hover:border-blue-300 hover:bg-white hover:shadow-lg hover:shadow-blue-500/10 dark:border-slate-800 dark:bg-slate-900/50 dark:hover:border-cyan-500/30 dark:hover:bg-slate-900/80 dark:hover:shadow-cyan-500/10">

                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600 transition-all duration-500 group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white dark:bg-blue-950/50 dark:text-blue-400 dark:group-hover:bg-cyan-500 dark:group-hover:text-white">
                                <FaBookOpen />
                            </div>

                            <div>
                                <p className="text-sm font-semibold text-slate-900 transition-colors duration-300 group-hover:text-blue-600 dark:text-white dark:group-hover:text-cyan-400">
                                    Beyond the code
                                </p>

                                <p className="mt-1 text-sm leading-6 text-slate-500 dark:text-slate-400">
                                    Outside programming, I enjoy playing sports and staying
                                    active. It helps me maintain focus, discipline, and a fresh
                                    mindset.
                                </p>
                            </div>
                        </div>

                        {/* Contact CTA */}
                        <div className=" mt-8 flex flex-wrap gap-4">

                            <a
                                href="#contact"
                                className="group inline-flex items-center gap-3 rounded-xl dark:bg-cyan-900 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-slate-900/10 transition-all hover:-translate-y-0.5 hover:bg-blue-600 bg-white dark:text-white dark:hover:bg-blue-500 dark:hover:text-white"
                            >
                                <FaHandshake />
                                Let&apos;s Work Together
                                <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
                            </a>
                            <a
                                href="#projects"
                                className=" inline-flex items-center gap-2 rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition hover:border-blue-500 hover:text-blue-600 dark:border-slate-700 dark:text-slate-300 dark:hover:text-blue-400"
                            >
                                View Projects <FaArrowRight />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/*  DIVIDER */}
            <div className=" absolute bottom-0 left-1/2 h-1 w-full -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"
            />
        </section >
    );
}