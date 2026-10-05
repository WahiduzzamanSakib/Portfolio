"use client";

import React, { useState, useEffect, useRef } from "react";
import { FiSmartphone, FiTarget, FiZap } from "react-icons/fi";
import { TfiRocket } from "react-icons/tfi";

const features = [
  {
    step: "01",
    icon: FiZap,
    title: "Fast Performance",
    desc: "Optimized Core Web Vitals, minimal bundle footprint, and efficient server-client execution.",
  },
  {
    step: "02",
    icon: FiSmartphone,
    title: "Responsive Architecture",
    desc: "Mobile-first layouts built to adapt with flawless fidelity across mobile, tablet, and ultrawide displays.",
  },
  {
    step: "03",
    icon: FiTarget,
    title: "Intuitive UX & A11y",
    desc: "Accessible, keyboard-navigable interfaces focused on clean design hierarchy and effortless usability.",
  },
  {
    step: "04",
    icon: TfiRocket,
    title: "Dynamic Modern Motion",
    desc: "Subtle, hardware-accelerated micro-interactions that elevate the user experience without sacrificing speed.",
  },
];

export default function Features() {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="features"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#fafafa] dark:bg-slate-950 py-20 transition-colors duration-500"
    >
      {/* PERFORMANCE-OPTIMIZED SUBTLE AMBIENT BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/3 top-0 h-80 w-80 rounded-full bg-cyan-500/5 blur-[120px] dark:bg-cyan-500/10" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* HEADER */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-600 dark:border-white/10 dark:bg-slate-900/60 dark:text-cyan-400">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-500" />
            Engineering Philosophy
          </span>

          <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 dark:text-white sm:text-4xl md:text-5xl">
            Building Modern{" "}
            <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 dark:from-cyan-400 dark:via-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
              Digital Experiences
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-400">
            Principles that guide my development process: clean architecture, reliable performance, and human-centered design.
          </p>
        </div>

        {/* 4-COLUMN CARDS GRID */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
                className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/80 bg-white/80 p-6 shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/5 dark:border-white/10 dark:bg-slate-900/50 dark:hover:border-cyan-400/40 ${
                  isInView ? "animate-fade-up opacity-100" : "opacity-0"
                }`}
              >
                {/* Step Index & Icon Row */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-slate-900 transition-all duration-300 group-hover:scale-105 group-hover:bg-cyan-500 group-hover:text-white dark:bg-slate-800 dark:text-cyan-400 dark:group-hover:bg-cyan-400 dark:group-hover:text-slate-950">
                      <Icon className="text-xl" />
                    </div>

                    <span className="font-mono text-xs font-bold text-slate-400 dark:text-slate-600 group-hover:text-cyan-500 transition-colors">
                      {feature.step}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold tracking-tight text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {feature.desc}
                  </p>
                </div>

                {/* Bottom Hairline Highlight */}
                <div className="mt-6 h-0.5 w-8 rounded-full bg-slate-200 dark:bg-slate-800 group-hover:w-full group-hover:bg-cyan-500 dark:group-hover:bg-cyan-400 transition-all duration-500" />
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