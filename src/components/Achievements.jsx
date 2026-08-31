"use client";

import React, { useState, useEffect, useRef } from "react";
import { FaCertificate, FaTimes } from "react-icons/fa";

const certifications = [
    {
        title: "Complete Web Development Course",
        issuer: "Programming Hero",
        batch: "Batch 13",
        period: "Jan 2026 — Jul 2026",
        description:
            "Completed with Excellence covering HTML, CSS, JavaScript, React.js, Next.js, Node.js, Express.js, and MongoDB, along with AI-powered development.",
        certUrl: "/sss.PNG",
    },
   
    // আরও certificate যোগ করতে চাইলে এখানে নতুন object বসাও, grid automatic adjust হবে
];

export default function Achievements() {
    const sectionRef = useRef(null);
    const [showAnimation, setShowAnimation] = useState(false);
    const [activeCert, setActiveCert] = useState(null);

    useEffect(() => {
        if (!activeCert) return;
        const onKeyDown = (e) => {
            if (e.key === "Escape") setActiveCert(null);
        };
        const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
        document.addEventListener("keydown", onKeyDown);
        document.body.style.overflow = "hidden";
        document.body.style.paddingRight = `${scrollBarWidth}px`;
        return () => {
            document.removeEventListener("keydown", onKeyDown);
            document.body.style.overflow = "";
            document.body.style.paddingRight = "";
        };
    }, [activeCert]);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setShowAnimation(true);
                observer.disconnect();
            }
        });
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    // Certificate সংখ্যা অনুযায়ী grid columns ঠিক হবে —
    // সবসময় full row filled দেখাবে, কোনো card lonely/small দেখাবে না
    const count = certifications.length;
    const gridColsClass =
        count === 1
            ? "grid-cols-1"
            : count === 2
                ? "grid-cols-1 sm:grid-cols-2"
                : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";

    return (
        <section
            id="achievements"
            ref={sectionRef}
            className={`scroll-mt-24 relative overflow-hidden bg-slate-50 px-6 py-10 text-slate-800 transition-colors duration-500 dark:bg-slate-900/80 dark:text-slate-200 sm:py-12 ${showAnimation ? "achievements-visible" : ""
                }`}
        >
            {/* BACKGROUND */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute left-1/2 top-20 h-[350px] w-[700px] -translate-x-1/2 rounded-full bg-white/40 blur-[120px] dark:bg-blue-600/20" />
                <div className="absolute -left-32 top-[-160px] h-[420px] w-[420px] rounded-full bg-blue-500/[0.055] blur-[130px] dark:bg-blue-500/10" />
                <div className="absolute -bottom-40 -right-32 h-[430px] w-[430px] rounded-full bg-cyan-500/[0.05] blur-[130px] dark:bg-blue-500/20" />
                <div className="absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.025] blur-[100px] dark:bg-blue-500/20" />
                <div className="absolute inset-0 opacity-[0.018] dark:opacity-[0.025] [background-image:linear-gradient(to_right,#64748b_1px,transparent_1px),linear-gradient(to_bottom,#64748b_1px,transparent_1px)] [background-size:48px_48px]" />
                <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-slate-50 to-transparent dark:from-slate-900" />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-50 to-transparent dark:from-slate-900" />
            </div>

            {/* CONTENT */}
            <div className="relative mx-auto max-w-6xl">
                {/* Header */}
                <div className="mb-12">
                    <div className="flex items-center gap-3">
                        <span className="h-[3px] w-10 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 shadow-sm shadow-cyan-500/30" />
                        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                            Certifications{" "}
                            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                                &amp; Achievements
                            </span>
                        </h2>
                    </div>
                    <p className="mt-4 max-w-lg text-sm leading-6 text-slate-500 dark:text-slate-400 sm:text-base">
                        Courses and programs I&apos;ve completed to sharpen my skills.
                    </p>
                </div>

                {/* CERTIFICATE GRID — always fills the row, regardless of count */}
                <div className={`grid gap-6 ${gridColsClass}`}>
                    {certifications.map((cert, index) => (
                        <div
                            key={index}
                            style={{ animationDelay: `${index * 0.1}s` }}
                            className="group relative"
                        >
                            {/* Ambient Glow */}
                            <div className="absolute -inset-1 rounded-[28px] bg-gradient-to-tr from-blue-600 via-cyan-500 to-blue-400 opacity-[0.06] blur-lg transition-all duration-500 group-hover:opacity-[0.16]" />

                            {/* Card */}
                            <div className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white/75 p-6 shadow-sm backdrop-blur-xl transition-all duration-300 group-hover:border-blue-300/70 group-hover:shadow-xl group-hover:shadow-blue-500/10 dark:border-slate-800 dark:bg-slate-950/60 dark:group-hover:border-blue-900/70 dark:group-hover:shadow-blue-500/5 sm:p-8">
                                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-500/[0.06] via-transparent to-cyan-500/[0.04] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                                <div className="absolute left-10 right-10 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                                <div className="relative z-10 flex flex-1 flex-col gap-5 sm:flex-row sm:items-start">
                                    {/* Icon Badge */}
                                    <div className="shrink-0">
                                        <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 text-blue-600 shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:border-blue-200 group-hover:shadow-lg group-hover:shadow-blue-500/10 dark:border-blue-900/40 dark:text-blue-400 dark:group-hover:border-blue-800">
                                            <FaCertificate size={22} />
                                            <div className="absolute inset-0 -z-10 rounded-2xl bg-blue-500/10 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="flex min-w-0 flex-1 flex-col">
                                        <div className="mb-1 flex flex-wrap items-center gap-3">
                                            <h3 className="text-lg font-bold tracking-tight text-slate-900 transition-colors duration-300 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400 sm:text-xl">
                                                {cert.title}
                                            </h3>
                                            <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-500/10 px-2.5 py-1 text-xs font-semibold text-blue-600 dark:border-blue-900/40 dark:text-blue-400">
                                                {cert.batch}
                                            </span>
                                        </div>

                                        <p className="font-mono text-sm font-semibold text-blue-600 dark:text-blue-400">
                                            {cert.issuer} · {cert.period}
                                        </p>

                                        <p className="mt-4 flex-1 text-sm leading-7 text-slate-600 dark:text-slate-300 sm:text-base">
                                            {cert.description}
                                        </p>

                                        <button
                                            type="button"
                                            onClick={() => setActiveCert(cert)}
                                            className="mt-5 inline-flex w-fit items-center gap-2 rounded-full border border-blue-200 bg-blue-500/5 px-4 py-2 text-xs font-semibold text-blue-600 transition-all duration-300 hover:bg-blue-500/10 dark:border-blue-900/40 dark:text-blue-400 cursor-pointer"
                                        >
                                            View Certificate {"→"}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* DIVIDER */}
            <div className="absolute bottom-0 left-1/2 h-1 w-full -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

            {/* CERTIFICATE MODAL / LIGHTBOX */}
            {activeCert && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-sm  sm:py-6"
                    onClick={() => setActiveCert(null)}
                >
                    <div
                        className="relative flex max-h-[92vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-white/10 dark:bg-slate-900 bg-white  shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            type="button"
                            onClick={() => setActiveCert(null)}
                            aria-label="Close certificate preview"
                            className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-slate-900/70 text-white transition-colors duration-200 hover:bg-slate-900"
                        >
                            <FaTimes size={16} />
                        </button>

                        {/* Certificate Image */}
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src={activeCert.certUrl}
                            alt={`${activeCert.title} certificate`}
                            className="max-h-[calc(92vh-70px)] w-full object-contain"
                        />

                        {/* Caption */}
                        <div className="border-t border-white/10 dark:bg-slate-900 bg-white px-5 py-4">
                            <p className="text-sm font-semibold text-white">
                                {activeCert.title}
                            </p>
                            <p className="text-xs text-slate-400">
                                {activeCert.issuer} · {activeCert.period}
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}