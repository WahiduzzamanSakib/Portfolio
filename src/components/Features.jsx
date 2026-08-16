"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FiSmartphone, FiTarget, FiZap } from "react-icons/fi";
import { TfiRocket } from "react-icons/tfi";

const features = [
  {
    icon: FiZap,
    title: "Fast",
    desc: "Optimized performance with fast loading times and smooth interactions.",
  },
  {
    icon: FiSmartphone,
    title: "Responsive",
    desc: "Beautiful layouts that adapt perfectly to every screen size.",
  },
  {
    icon: FiTarget,
    title: "Intuitive",
    desc: "Clean user experiences focused on simplicity and usability.",
  },
  {
    icon: TfiRocket,
    title: "Dynamic",
    desc: "Interactive interfaces that bring websites to life with modern motion.",
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
          observer.disconnect(); // একবার স্ক্রিনে চলে এলে অবজারভার বন্ধ হবে
        }
      },
      {
        rootMargin: "200px", // ইউজার সেকশনে পৌঁছানোর ২০০ পিক্সেল আগেই লোড শুরু হবে
      }
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
      className="relative min-h-[450px] overflow-hidden bg-slate-50 py-10 transition-colors duration-500 dark:bg-slate-900/60 sm:py-12"
    >
      {/* ইউজার স্ক্রল করে কাছাকাছি আসার পরই শুধুমাত্র ভারি DOM ও অ্যানিমেশনগুলো লোড হবে */}
      {isInView ? (
        <>
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            {/* Top Left Soft Glow */}
            <div className="absolute -left-32 top-[-160px] h-[420px] w-[420px] rounded-full bg-blue-500/[0.055] blur-[130px] dark:bg-cyan-500/20" />
            <div className="absolute -right-32 top-[-160px] h-[420px] w-[420px] rounded-full bg-blue-500/[0.055] blur-[130px] dark:bg-cyan-500/10" />

            {/* Bottom Right Soft Glow */}
            <div className="absolute -bottom-40 -right-32 h-[430px] w-[430px] rounded-full bg-cyan-500/35 blur-[130px] dark:bg-cyan-500/20" />
            <div className="absolute -bottom-40 -left-32 h-[430px] w-[430px] rounded-full bg-cyan-500/35 blur-[130px] dark:bg-cyan-500/20" />

            {/* Small Center Glow */}
            <div className="absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.025] blur-[100px] dark:bg-blue-500/25" />

            {/* Very Subtle Grid */}
            <div className="absolute inset-0 opacity-[0.018] dark:opacity-[0.025] [background-image:linear-gradient(to_right,#64748b_1px,transparent_1px),linear-gradient(to_bottom,#64748b_1px,transparent_1px)] [background-size:48px_48px]" />

            {/* Top Soft Fade */}
            <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-slate-50 to-transparent dark:from-slate-900" />

            {/* Bottom Soft Fade */}
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-50 to-transparent dark:from-slate-900" />
          </div>

          {/* CONTENT */}
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mx-auto mb-16 max-w-3xl text-center sm:mb-20"
            >
              {/* Label */}
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50/80 px-4 py-2 text-sm font-semibold text-blue-600 shadow-sm dark:border-blue-900/50 dark:bg-blue-950/30 dark:text-blue-400">
                <span className="h-2 w-2 rounded-full bg-blue-500 shadow-sm shadow-blue-500/50" />
                What I Do Best
              </span>

              {/* Heading */}
              <h2 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white sm:text-4xl md:text-5xl">
                Building Modern{" "}
                <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
                  Digital Experiences
                </span>
              </h2>

              {/* Description */}
              <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-400 sm:text-lg sm:leading-8">
                Creating modern, fast and user-friendly digital experiences
                with clean design and powerful technology.
              </p>
            </motion.div>

            {/* CARDS */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
              {features.map((feature, index) => {
                const Icon = feature?.icon;

                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.12 }}
                    whileHover={{ y: -8 }}
                    className="group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white/75 p-4 shadow-sm backdrop-blur-xl transition-all duration-300 hover:border-blue-300/70 hover:shadow-xl hover:shadow-blue-500/10 dark:border-slate-800 dark:bg-slate-950/60 dark:hover:border-blue-900/70 dark:hover:shadow-blue-500/5 sm:p-6"
                  >
                    {/* Hover Background */}
                    <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/[0.07] via-transparent to-cyan-500/[0.05] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                    {/* Top Glow Line */}
                    <div className="absolute left-8 right-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                    {/* Card Content */}
                    <div className="relative z-10 flex flex-col items-center text-center">
                      {/* Icon */}
                      <div className="relative mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 text-blue-600 shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:border-blue-200 group-hover:shadow-lg group-hover:shadow-blue-500/10 dark:border-blue-900/40 dark:text-blue-400 dark:group-hover:border-blue-800">
                        <Icon size={30} />

                        {/* Icon Glow */}
                        <div className="absolute inset-0 -z-10 rounded-2xl bg-blue-500/10 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" />
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                        {feature.title}
                      </h3>

                      {/* Description */}
                      <p className="mt-3 text-sm leading-6 text-slate-500 dark:text-slate-400">
                        {feature.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* SECTION DIVIDER */}
            <div className="mx-auto mt-12 h-px w-3/4 bg-gradient-to-r from-transparent via-cyan-500/25 to-transparent" />
          </div>
        </>
      ) : (
        /* Layout Shift ঠেকাতে প্লেসহোল্ডার */
        <div className="h-96 w-full" />
      )}
    </section>
  );
}