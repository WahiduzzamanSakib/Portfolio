"use client";

import Image from "next/image";
import { FiDownload, FiArrowRight } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";
import { useEffect, useState } from "react";

const TypeWriter = () => {
  const words = [
    "Frontend Developer",
    "React & Next.js Developer",
    "MERN Stack Developer",
  ];
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setText(words[index].slice(0, i));
      i++;
      if (i > words[index].length) {
        clearInterval(timer);
        setTimeout(() => {
          setText("");
          setIndex((prev) => (prev + 1) % words.length);
        }, 1000);
      }
    }, 100);
    return () => clearInterval(timer);
  }, [index]);
  return (
    <>
      {text}
      <span className="animate-pulse">|</span>
    </>
  );
};

// Social Links
const socials = [
  {
    name: "GitHub",
    href: "https://github.com/WahiduzzamanSakib",
    icon: FaGithub,
    hoverColor: "hover:text-white hover:border-white/40 hover:bg-white/10",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/waheduzzaman-md",
    icon: FaLinkedin,
    hoverColor:
      "hover:text-blue-400 hover:border-blue-400/40 hover:bg-blue-500/10",
  },
  {
    name: "Gmail",
    href: "mailto:wahidzamanpg@gmail.com",
    icon: CgMail,
    hoverColor:
      "hover:text-cyan-400 hover:border-cyan-400/40 hover:bg-cyan-500/10",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/md.waheduzzaman.613163",
    icon: FaFacebook,
    hoverColor:
      "hover:text-indigo-400 hover:border-indigo-400/40 hover:bg-indigo-500/10",
  },
];

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-green-50 px-6 pb-8 pt-36 transition-colors duration-500 dark:bg-slate-950 md:px-12 lg:px-20"
    >
      {/* BACKGROUND */}

      {/* Left Animated Glow */}
      <div className="hero-glow-left pointer-events-none absolute left-[-10%] top-20 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl dark:bg-blue-500/20" />

      {/* Right Animated Glow */}
      <div className="hero-glow-right pointer-events-none absolute bottom-0 right-[-10%] h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl dark:bg-cyan-500/20" />

      {/* Center Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/5 blur-3xl dark:bg-cyan-500/5" />

      {/* Bottom Left Glow */}
      <div className="pointer-events-none absolute -left-40 bottom-0 h-[380px] w-[380px] rounded-full bg-blue-500/[0.04] blur-[110px] dark:bg-cyan-500/10" />

      {/* Bottom Right Glow */}
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-cyan-500/[0.04] blur-[120px] dark:bg-cyan-500/10" />

      {/* Premium Grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.025] dark:opacity-[0.035] [background-image:linear-gradient(to_right,#64748b_1px,transparent_1px),linear-gradient(to_bottom,#64748b_1px,transparent_1px)] [background-size:48px_48px]" />

      {/* Top Fade */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/80 to-transparent dark:from-slate-950/80" />

      {/* Bottom Fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent dark:from-slate-950" />

      {/* MAIN CONTENT */}
      <div className="relative mx-auto flex w-full max-w-7xl flex-col-reverse items-center justify-between gap-10 lg:flex-row lg:gap-20">

        {/*  LEFT CONTENT */}
        <div className=" max-w-3xl text-center lg:text-left">
          {/* Intro */}
          <div className="hero-fade-up hero-delay-1 mb-3 flex items-center justify-center gap-3 lg:justify-start">
            <span className="h-px w-8 bg-cyan-500" />

            <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-600 dark:text-cyan-400 sm:text-sm">
              Hello, I&apos;m Md.
            </p>
            <span className="hidden h-px w-8 bg-cyan-500 sm:block lg:hidden" />
          </div>

          {/* Name */}
          <h1 className="text-black/75 text-3xl md:text-6xl font-bold dark:text-white hover:scale-105 transform transition-all duration-300 dark:hover:text-cyan-500 hover:text-cyan-500 pb-3">
            Waheduzzaman
            <span className="ml-2 text-cyan-500">.</span>
          </h1>

          {/* Profession */}
          <h2 className="hero-fade-up hero-delay-3 mb-5 text-xl font-semibold text-slate-600 dark:text-slate-300 sm:text-2xl md:text-3xl">

            <span className="mr-2">I&apos;m a</span>

            <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 bg-clip-text font-mono font-bold text-transparent">
              <TypeWriter />
            </span>
          </h2>

          {/* Description */}
          <p className="hero-fade-up hero-delay-4 mx-auto mb-9 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-400 lg:mx-0 sm:text-lg">
            I build responsive, accessible, and high-performance web
            applications using{" "}
            <span className="font-semibold text-slate-900 dark:text-slate-200">
              React.js, Next.js, JavaScript
            </span>
            , and{" "}
            <span className="font-semibold text-slate-900 dark:text-slate-200">
              Tailwind CSS
            </span>
            . I also have a MERN Stack background with experience in Node.js,
            Express.js, MongoDB, and REST APIs.
          </p>

          {/*  BUTTONS*/}
          <div className="hero-fade-up hero-delay-5 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">

            {/* Resume */}
            <a
              href="https://drive.google.com/uc?export=download&id=1dcf1c96pZslR3RXxqJDj8HWyQ0PqPSPD"
              download
              className="group inline-flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:from-blue-500 hover:to-cyan-500 hover:shadow-xl hover:shadow-blue-500/25 active:scale-[0.97]"
            >
              <span>Download Resume</span>
              <FiDownload className="text-lg transition-transform duration-300 group-hover:translate-y-0.5" />
            </a>

            {/* Projects */}
            <a
              href="#projects"
              className="group inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white/70 px-7 py-3.5 font-semibold text-slate-800 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-400 hover:bg-blue-50 hover:text-blue-600 active:scale-[0.97] dark:border-slate-700 dark:bg-slate-900/50 dark:text-white dark:hover:border-cyan-400 dark:hover:bg-cyan-500/5 dark:hover:text-cyan-400"
            >
              <span>View Projects</span>
              <FiArrowRight className="text-lg transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>

          {/* SOCIAL LINKS*/}
          <div className="hero-fade-up hero-delay-6 mt-9 flex items-center justify-center gap-3 lg:justify-start">
            {socials.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className={`group relative flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200/80 bg-white/70 text-slate-500 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 active:scale-[0.92] dark:border-slate-800 dark:bg-slate-900/50 dark:text-slate-400 ${social.hoverColor}`}
                >
                  <Icon className="text-lg transition-transform duration-300 group-hover:scale-110" />

                  {/* Tooltip */}
                  <span
                    className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 rounded-lg bg-slate-900 px-2.5 py-1.5 text-xs font-medium text-white opacity-0 shadow-lg transition-all duration-200 group-hover:-translate-y-1 group-hover:opacity-100 dark:bg-white dark:text-slate-900"
                  >
                    {social.name}
                  </span>
                </a>
              );
            })}
          </div>
        </div>

        {/* RIGHT PROFILE */}
        <div className="relative mt-6 h-72 w-72 shrink-0 sm:h-80 sm:w-80 md:h-96 md:w-96 lg:mt-0">
          {/* Available Badge */}
          <div
            className="hero-badge absolute -top-18 left-1/2 z-50 -translate-x-1/2 whitespace-nowrap rounded-full border border-cyan-400/30 bg-white/90 px-4 py-2 shadow-lg shadow-cyan-500/10 backdrop-blur-md dark:border-cyan-400/30 dark:bg-gray-600/90 dark:shadow-cyan-500/10 hidden md:block mb-100"
          >
            <div className="flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-60" />

                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-400" />
              </span>

              <span className="text-xs font-semibold  text-cyan-600 dark:text-cyan-300 sm:text-sm">
                Available for Frontend Developer
              </span>
            </div>
          </div>

          {/* Profile */}
          <div className="hero-profile relative h-full w-full transition-transform duration-300 ">
            {/* Profile Glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/15 via-blue-500/15 to-purple-500/15 blur-3xl" />

            {/* Outer Ring */}
            <div className="absolute inset-0 scale-110 rounded-full border border-blue-500/20 dark:border-cyan-500/20" />

            {/* Inner Ring */}
            <div className="absolute inset-0 scale-[1.04] rounded-full border-2 border-cyan-500/50" />

            {/* Image */}
            <div
              className="group relative h-full w-full overflow-hidden rounded-full border-4 border-white bg-slate-100 shadow-2xl shadow-blue-900/10 dark:border-slate-900 dark:bg-slate-800 dark:shadow-black/30"
            >
              <Image
                src="/wahid.webp"
                alt="Md Waheduzzaman"
                fill
                priority
                sizes="(max-width: 640px) 288px, (max-width: 768px) 320px, 384px"
                className="origin-center object-cover opacity-90 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100"
              />

              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-blue-950/20 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>

      {/*  DIVIDER */}
      <div className=" absolute bottom-0 left-1/2 h-1 w-full -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
    </section>
  );
};

export default Hero;