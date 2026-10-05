"use client";

import { FaArrowUp, FaEnvelope, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { useState, useEffect } from "react";
import Link from "next/link";

const Footer = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const links = [
    ["Home", "home"],
    ["About", "about"],
    ["Skills", "skills"],
    ["Projects", "projects"],
    // ["Contact", "contact"],
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="w-full border-t border-slate-200/80 bg-white dark:border-white/10 dark:bg-slate-950 transition-colors duration-500">
      <div className="mx-auto max-w-7xl px-6 md:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
          {/* BRAND COLUMN */}
          <div className="md:col-span-6 lg:col-span-5">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-bold tracking-tight text-slate-950 dark:text-white flex items-center gap-1.5">
                Md. Waheduzzaman
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-500" />
              </span>
            </Link>

            <p className="mt-2 text-xs font-mono uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
              Frontend &amp; MERN Stack Developer
            </p>

            <p className="mt-4 text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-400 max-w-md">
              Building high-performance, accessible web applications and MERN-stack solutions with React.js, Next.js, and modern cloud technologies.
            </p>

            <div className="mt-6 flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400">
                Available for worldwide opportunities
              </span>
            </div>
          </div>

          {/* NAVIGATION LINKS */}
          <div className="md:col-span-3 lg:col-span-3">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-4">
              Navigation
            </h3>
            <ul className="space-y-2.5">
              {links.map(([name, link]) => (
                <li key={name}>
                  <button
                    type="button"
                    onClick={() => handleClick(link)}
                    className="group inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-600 hover:text-cyan-600 dark:text-slate-400 dark:hover:text-cyan-400 transition cursor-pointer"
                  >
                    <span className="opacity-0 -translate-x-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0 text-cyan-500">
                      →
                    </span>
                    <span>{name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* SOCIAL & CONNECT */}
          <div className="md:col-span-3 lg:col-span-4">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-4">
              Connect
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-5">
              Open to collaborative development, software engineering roles, and open-source discussions.
            </p>

            <div className="flex flex-wrap gap-2.5">
              {[
                { name: "GitHub", href: "https://github.com/WahiduzzamanSakib", icon: FaGithub },
                { name: "LinkedIn", href: "https://www.linkedin.com/in/waheduzzaman-md", icon: FaLinkedin },
                { name: "Email", href: "mailto:wahidzamanpg@gmail.com", icon: FaEnvelope },
                { name: "Facebook", href: "https://www.facebook.com/md.waheduzzaman.613163", icon: FaFacebook },
              ].map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200/80 bg-slate-50/80 text-slate-600 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-500/50 hover:text-cyan-600 dark:border-white/10 dark:bg-slate-900/60 dark:text-slate-400 dark:hover:border-cyan-400/50 dark:hover:text-cyan-400"
                  >
                    <Icon className="text-base" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* BOTTOM METADATA BAR */}
        <div className="mt-14 pt-8 border-t border-slate-200/60 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-500">
          <p>© {new Date().getFullYear()} Md. Waheduzzaman. All rights reserved.</p>
          <p className="font-mono">Engineered with Next.js 16 &amp; Tailwind CSS</p>
        </div>
      </div>

      {/* TACTILE BACK-TO-TOP BUTTON */}
      {showTop && (
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Scroll back to top"
          className="fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-slate-200/80 bg-white/90 text-slate-800 shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500 hover:text-cyan-600 active:scale-95 dark:border-white/10 dark:bg-slate-900/90 dark:text-white dark:hover:border-cyan-400 dark:hover:text-cyan-400 cursor-pointer"
        >
          <FaArrowUp className="text-xs" />
        </button>
      )}
    </footer>
  );
};

export default Footer;