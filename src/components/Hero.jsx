"use client";

import Image from "next/image";
import { FiDownload, FiArrowRight } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";
import { useEffect, useState } from "react";

const typeWriterWords = [
  "Frontend Developer",
  "React & Next.js Developer",
  "MERN Stack Developer",
];

const TypeWriter = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setText(typeWriterWords[index].slice(0, i));
      i++;
      if (i > typeWriterWords[index].length) {
        clearInterval(timer);
        setTimeout(() => {
          setText("");
          setIndex((prev) => (prev + 1) % typeWriterWords.length);
        }, 1200);
      }
    }, 90);
    return () => clearInterval(timer);
  }, [index]);

  return (
    <span className="inline-flex items-center">
      <span>{text}</span>
      <span className="ml-1 inline-block h-6 w-[2px] bg-cyan-500 animate-pulse" />
    </span>
  );
};

const socials = [
  {
    name: "GitHub",
    href: "https://github.com/WahiduzzamanSakib",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/waheduzzaman-md",
    icon: FaLinkedin,
  },
  {
    name: "Gmail",
    href: "mailto:wahidzamanpg@gmail.com",
    icon: CgMail,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/md.waheduzzaman.613163",
    icon: FaFacebook,
  },
];

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-[92vh] items-center overflow-hidden bg-[#fafafa] dark:bg-slate-950 px-6 pt-32 pb-16 transition-colors duration-500 md:px-12 lg:px-20"
    >
      {/* PERFORMANCE-OPTIMIZED SUBTLE AMBIENT BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Soft Radial Ambient Glow */}
        <div className="ambient-glow-1 absolute -left-20 top-16 h-80 w-80 rounded-full bg-cyan-500/10 blur-[100px] dark:bg-cyan-500/15" />
        <div className="ambient-glow-2 absolute -right-20 bottom-10 h-96 w-96 rounded-full bg-blue-500/10 blur-[120px] dark:bg-blue-600/15" />

        {/* Minimal Studio Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.04] [background-image:linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] dark:[background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] [background-size:64px_64px]" />

        {/* Subtle Edge Vignettes */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#fafafa] via-transparent to-transparent dark:from-slate-950" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#fafafa] via-transparent to-transparent dark:from-slate-950" />
      </div>

      {/* HERO CONTENT CONTAINER */}
      <div className="relative mx-auto flex w-full max-w-7xl flex-col-reverse items-center justify-between gap-12 lg:flex-row lg:gap-16">
        {/* LEFT COLUMN: INTRODUCTION & VALUE PROPOSITION */}
        <div className="max-w-2xl text-center lg:text-left">
          {/* Availability Pill */}
          <div className="animate-fade-up delay-100 mb-6 inline-flex items-center gap-2.5 rounded-full border border-slate-200/80 bg-white/80 px-4 py-1.5 shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-slate-900/70">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </span>
            <span className="text-xs font-semibold tracking-wide text-slate-700 dark:text-slate-300">
              Available for Frontend & MERN Stack Roles
            </span>
          </div>

          {/* Eyebrow / Salutation */}
          <div className="animate-fade-up delay-200 mb-3 flex items-center justify-center gap-3 lg:justify-start">
            <span className="h-px w-8 bg-cyan-500" />
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-600 dark:text-cyan-400">
              Hello, I&apos;m Md.
            </p>
          </div>

          {/* Main Name Heading */}
          <h1 className="animate-fade-up delay-300 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-950 dark:text-white">
            Waheduzzaman
            <span className="text-cyan-500">.</span>
          </h1>

          {/* Dynamic Role Subheading */}
          <div className="animate-fade-up delay-400 mt-4 flex items-center justify-center gap-2 text-xl sm:text-2xl md:text-3xl font-semibold text-slate-700 dark:text-slate-300 lg:justify-start">
            <span className="text-slate-500 dark:text-slate-400 font-normal">I build as a</span>
            <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 dark:from-cyan-400 dark:via-blue-400 dark:to-indigo-400 bg-clip-text font-mono font-bold text-transparent">
              <TypeWriter />
            </span>
          </div>

          {/* Concise Bio */}
          <p className="animate-fade-up delay-500 mt-6 text-base sm:text-lg leading-relaxed text-slate-600 dark:text-slate-400">
            Crafting fast, accessible, and production-ready digital products with{" "}
            <span className="font-semibold text-slate-900 dark:text-slate-200">
              React.js, Next.js
            </span>
            , and{" "}
            <span className="font-semibold text-slate-900 dark:text-slate-200">
              Tailwind CSS
            </span>
            . Backed by a full MERN stack foundation with Node.js, Express, and MongoDB.
          </p>

          {/* Call-to-Action Buttons */}
          <div className="animate-fade-up delay-600 mt-8 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
            {/* Download Resume */}
            <a
              href="https://drive.google.com/uc?export=download&id=1dcf1c96pZslR3RXxqJDj8HWyQ0PqPSPD"
              download
              className="group inline-flex items-center justify-center gap-3 rounded-xl bg-slate-950 px-7 py-3.5 text-sm font-semibold text-white shadow-md shadow-slate-950/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-600 hover:shadow-lg hover:shadow-cyan-600/25 active:scale-95 dark:bg-white dark:text-slate-950 dark:hover:bg-cyan-400 dark:hover:text-slate-950"
            >
              <span>Download Resume</span>
              <FiDownload className="text-base transition-transform duration-300 group-hover:translate-y-0.5" />
            </a>

            {/* View Projects */}
            <a
              href="#projects"
              className="group inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300/80 bg-white/80 px-7 py-3.5 text-sm font-semibold text-slate-800 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-500/50 hover:bg-cyan-50/50 hover:text-cyan-700 active:scale-95 dark:border-white/10 dark:bg-slate-900/60 dark:text-slate-200 dark:hover:border-cyan-400/50 dark:hover:bg-cyan-500/10 dark:hover:text-cyan-300"
            >
              <span>View Projects</span>
              <FiArrowRight className="text-base transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>

          {/* Social Links Row */}
          <div className="animate-fade-up delay-600 mt-10 flex items-center justify-center gap-3 lg:justify-start">
            <span className="text-xs font-mono uppercase tracking-widest text-slate-400 dark:text-slate-500 mr-2">
              Connect:
            </span>
            {socials.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="group relative flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200/80 bg-white/80 text-slate-600 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/50 hover:text-cyan-600 hover:shadow-md hover:shadow-cyan-500/10 active:scale-95 dark:border-white/10 dark:bg-slate-900/60 dark:text-slate-400 dark:hover:border-cyan-400/50 dark:hover:text-cyan-400"
                >
                  <Icon className="text-lg transition-transform duration-300 group-hover:scale-110" />
                  <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 rounded-md bg-slate-900 px-2 py-1 text-[11px] font-medium text-white opacity-0 shadow-md transition-all duration-200 group-hover:opacity-100 dark:bg-white dark:text-slate-900 whitespace-nowrap">
                    {social.name}
                  </span>
                </a>
              );
            })}
          </div>
        </div>

        {/* RIGHT COLUMN: EDITORIAL PORTRAIT PRESENTATION */}
        <div className="relative shrink-0">
          <div className="relative h-72 w-72 sm:h-80 sm:w-80 md:h-96 md:w-96">
            {/* Ambient Backlight */}
            <div className="pointer-events-none absolute -inset-4 rounded-3xl bg-gradient-to-tr from-cyan-500/20 via-blue-500/15 to-indigo-500/20 blur-2xl dark:opacity-80" />

            {/* Editorial Framed Container */}
            <div className="group relative h-full w-full overflow-hidden rounded-3xl border border-slate-200/80 bg-white/70 p-2 shadow-2xl backdrop-blur-xl transition-all duration-500 dark:border-white/10 dark:bg-slate-900/60 dark:shadow-cyan-500/5">
              <div className="relative h-full w-full overflow-hidden rounded-2xl bg-slate-100 dark:bg-slate-800">
                <Image
                  src="/wahid.webp"
                  alt="Md Waheduzzaman"
                  fill
                  priority
                  sizes="(max-width: 640px) 288px, (max-width: 768px) 320px, 384px"
                  className="object-cover object-center transition-all duration-700 group-hover:scale-105"
                />

                {/* Subtle Cinematic Vignette */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-60" />

                {/* Bottom Overlay Label */}
                <div className="pointer-events-none absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-xl bg-slate-950/60 p-3 backdrop-blur-md border border-white/10 text-white">
                  <div>
                    <p className="text-xs font-semibold leading-tight">Md. Waheduzzaman</p>
                    <p className="text-[10px] text-slate-300">Software Developer</p>
                  </div>
                  <span className="flex h-2 w-2 rounded-full bg-cyan-400" />
                </div>
              </div>
            </div>

            {/* Floating Spec Pill: Experience */}
            <div className="absolute -bottom-4 -left-4 hidden sm:flex items-center gap-2 rounded-2xl border border-slate-200/80 bg-white/95 px-4 py-2.5 shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-105 dark:border-white/10 dark:bg-slate-900/95">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 font-bold text-xs">
                1+
              </div>
              <div className="text-left">
                <p className="text-[11px] font-bold text-slate-900 dark:text-white leading-tight">Year Exp.</p>
                <p className="text-[9px] text-slate-500 dark:text-slate-400">Web Development</p>
              </div>
            </div>

            {/* Floating Spec Pill: Tech Stack */}
            <div className="absolute -top-4 -right-4 hidden sm:flex items-center gap-2 rounded-2xl border border-slate-200/80 bg-white/95 px-4 py-2.5 shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-105 dark:border-white/10 dark:bg-slate-900/95">
              <span className="h-2 w-2 rounded-full bg-blue-500 animate-ping" />
              <span className="text-[11px] font-mono font-semibold text-slate-800 dark:text-slate-200">
                Next.js & React 19
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Section Bottom Hairline */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-slate-200 dark:via-white/10 to-transparent" />
    </section>
  );
};

export default Hero;