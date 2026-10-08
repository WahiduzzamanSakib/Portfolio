"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { FaCertificate, FaTimes, FaExternalLinkAlt } from "react-icons/fa";

const certifications = [
  {
    title: "Complete Web Development Course",
    issuer: "Programming Hero",
    batch: "Batch 13",
    period: "Jan 2026 — Jul 2026",
    description:
      "Comprehensive MERN-stack curriculum completed with excellence, covering modern JavaScript (ES6+), React.js, Next.js, Node.js, Express.js, MongoDB, JWT authentication, and AI-assisted workflows.",
    certUrl: "/sss.PNG",
  },
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
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowAnimation(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="achievements"
      ref={sectionRef}
      className={`scroll-mt-24 relative overflow-hidden bg-white py-14 text-slate-800 transition-colors duration-500 dark:bg-slate-950 dark:text-slate-200 ${showAnimation ? "achievements-visible" : ""
        }`}
    >
      {/* PERFORMANCE-OPTIMIZED SUBTLE AMBIENT BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-10 h-80 w-80 rounded-full bg-cyan-500/5 blur-[120px] dark:bg-cyan-500/10" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        {/* HEADER */}
        <div className="mb-14 text-center sm:text-left">
          <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-slate-50 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-600 dark:border-white/10 dark:bg-slate-900/60 dark:text-cyan-400">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-500" />
            Verified Credentials
          </span>

          <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 dark:text-white sm:text-4xl">
            Certifications{" "}
            <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 dark:from-cyan-400 dark:via-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
              &amp; Achievements
            </span>
          </h2>

          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            Verified technical certifications validating software engineering and web standards mastery.
          </p>
        </div>

        {/* CERTIFICATE GRID */}
        <div className="grid gap-6 sm:grid-cols-1 max-w-3xl">
          {certifications.map((cert, index) => (
            <div
              key={cert.title}
              style={{ animationDelay: `${index * 120}ms` }}
              className="group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white/80 p-6 sm:p-8 shadow-sm backdrop-blur-xl transition-all duration-300 hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/5 dark:border-white/10 dark:bg-slate-900/50 dark:hover:border-cyan-400/40"
            >
              <div className="flex flex-col sm:flex-row sm:items-start gap-6">
                {/* Icon Badge */}
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
                  <FaCertificate className="text-2xl" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                    <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                      {cert.title}
                    </h3>
                    <span className="rounded-full bg-cyan-500/10 px-2.5 py-0.5 text-xs font-semibold text-cyan-600 dark:bg-cyan-500/15 dark:text-cyan-400">
                      {cert.batch}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm font-mono text-cyan-600 dark:text-cyan-400 font-medium">
                    {cert.issuer} · {cert.period}
                  </p>

                  <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {cert.description}
                  </p>

                  <div className="mt-5">
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn inline-flex items-center gap-2 rounded-xl border border-slate-300/80 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-wider text-slate-800 shadow-sm transition-all hover:border-cyan-500 hover:text-cyan-600 active:scale-95 dark:border-white/10 dark:bg-slate-800 dark:text-slate-200 dark:hover:border-cyan-400 dark:hover:text-cyan-400 cursor-pointer"
                    >
                      <span>Inspect Credential</span>
                      <FaExternalLinkAlt className="text-[10px] transition-transform group-hover/btn:translate-x-0.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CERTIFICATE LIGHTBOX MODAL (Fixed Light Mode White-on-White Text Bug) */}
      {activeCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-md"
          onClick={() => setActiveCert(null)}
        >
          <div
            className="relative flex max-h-[92vh] w-full max-w-3xl flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-2xl dark:border-white/10 dark:bg-slate-900"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Trigger */}
            <button
              type="button"
              onClick={() => setActiveCert(null)}
              aria-label="Close certificate modal"
              className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-slate-950/70 text-white backdrop-blur-md transition-transform hover:scale-110 cursor-pointer"
            >
              <FaTimes className="text-sm" />
            </button>

            {/* Certificate Preview Image */}
            <div className="relative h-[65vh] w-full overflow-hidden bg-slate-100 dark:bg-slate-950 flex items-center justify-center p-2">
              <Image
                src={activeCert.certUrl}
                alt={`${activeCert.title} credential`}
                fill
                sizes="(max-width: 768px) 100vw, 800px"
                className="object-contain"
              />
            </div>

            {/* Caption Header - Proper contrast in both light and dark modes */}
            <div className="border-t border-slate-200 bg-white px-6 py-4 dark:border-white/10 dark:bg-slate-900">
              <h4 className="text-base font-bold text-slate-950 dark:text-white">
                {activeCert.title}
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {activeCert.issuer} · {activeCert.period} · {activeCert.batch}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Section Divider */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-slate-200 dark:via-white/10 to-transparent" />
    </section>
  );
}