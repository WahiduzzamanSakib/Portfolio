"use client";

import React, { Suspense, useRef, useState } from "react";
import {
  FaCheck,
  FaLinkedin,
  FaEnvelope,
  FaSpinner,
  FaPaperPlane,
  FaGithub,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa";
import { IoIosSend } from "react-icons/io";

function ContactSkeleton() {
  return (
    <section className="relative overflow-hidden bg-white py-20 dark:bg-slate-950">
      <div className="mx-auto max-w-6xl px-6">
        <div className="h-10 w-64 animate-pulse rounded bg-slate-200 dark:bg-slate-800 mx-auto" />
        <div className="mt-12 grid gap-8 lg:grid-cols-12">
          <div className="h-[520px] rounded-3xl bg-slate-100 dark:bg-slate-900 lg:col-span-5 animate-pulse" />
          <div className="h-[520px] rounded-3xl bg-slate-100 dark:bg-slate-900 lg:col-span-7 animate-pulse" />
        </div>
      </div>
    </section>
  );
}

function ContactContent() {
  const formRef = useRef(null);

  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();

    if (!formRef.current) return;

    setStatus("loading");
    setErrorMessage("");

    try {
      const emailjs = (await import("@emailjs/browser")).default;

      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY
      );

      setStatus("success");
      formRef.current.reset();

      setTimeout(() => {
        setStatus("idle");
      }, 4000);
    } catch (error) {
      console.error(error);
      setStatus("error");
      setErrorMessage("Failed to dispatch message. Please contact directly via email or WhatsApp.");
    }
  };

  return (
    <section
      id="contact"
      className="relative scroll-mt-24 overflow-hidden bg-white py-20 dark:bg-slate-950 transition-colors duration-500"
    >
      {/* PERFORMANCE-OPTIMIZED SUBTLE AMBIENT BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="ambient-glow-1 absolute -left-20 top-20 h-96 w-96 rounded-full bg-cyan-500/5 blur-[130px] dark:bg-cyan-500/10" />
        <div className="ambient-glow-2 absolute -right-20 bottom-20 h-96 w-96 rounded-full bg-blue-500/5 blur-[130px] dark:bg-blue-600/10" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-8">
        {/* SECTION HEADER */}
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-slate-50 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-600 dark:border-white/10 dark:bg-slate-900/60 dark:text-cyan-400">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-500" />
            Get In Touch
          </span>

          <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 dark:text-white sm:text-4xl md:text-5xl">
            Let&apos;s Build Something{" "}
            <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 dark:from-cyan-400 dark:via-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
              Exceptional
            </span>
          </h2>

          <p className="mt-4 text-base text-slate-600 dark:text-slate-400">
            Have a project in mind, an open position, or an inquiry? Send a message and let&apos;s connect.
          </p>
        </div>

        {/* 2-COLUMN STUDIO CONTACT PORTAL */}
        <div className="grid gap-8 lg:grid-cols-12">
          {/* LEFT: DIRECT CHANNELS & PROFILES */}
          <div className="flex flex-col justify-between rounded-3xl border border-slate-200/80 bg-white/70 p-6 sm:p-8 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/50 lg:col-span-5">
            <div>
              <h3 className="text-xl font-bold tracking-tight text-slate-950 dark:text-white mb-2">
                Direct Channels
              </h3>
              <p className="text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-400 mb-8">
                Reach out directly via preferred platform or schedule an introductory conversation.
              </p>

              {/* CONTACT TILES */}
              <div className="space-y-3">
                {/* Email */}
                <a
                  href="mailto:wahidzamanpg@gmail.com"
                  className="group flex items-center gap-4 rounded-2xl border border-slate-200/80 bg-slate-50/80 p-3.5 transition-all duration-300 hover:border-cyan-500/50 hover:bg-white hover:shadow-md dark:border-white/5 dark:bg-slate-800/50 dark:hover:border-cyan-400/40 dark:hover:bg-slate-800"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 transition-transform group-hover:scale-110">
                    <FaEnvelope />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[11px] font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500">
                      Email Address
                    </p>
                    <p className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 truncate group-hover:text-cyan-600 dark:group-hover:text-cyan-400">
                      wahidzamanpg@gmail.com
                    </p>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/8801752187286"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-2xl border border-slate-200/80 bg-slate-50/80 p-3.5 transition-all duration-300 hover:border-emerald-500/50 hover:bg-white hover:shadow-md dark:border-white/5 dark:bg-slate-800/50 dark:hover:border-emerald-400/40 dark:hover:bg-slate-800"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 transition-transform group-hover:scale-110">
                    <FaWhatsapp />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[11px] font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500">
                      WhatsApp Instant Chat
                    </p>
                    <p className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 truncate group-hover:text-emerald-600 dark:group-hover:text-emerald-400">
                      Chat on WhatsApp
                    </p>
                  </div>
                  <IoIosSend className="text-lg text-emerald-600 dark:text-emerald-400 transition-transform group-hover:translate-x-1" />
                </a>

                {/* Phone Call */}
                <a
                  href="tel:+8801752187286"
                  className="group flex items-center gap-4 rounded-2xl border border-slate-200/80 bg-slate-50/80 p-3.5 transition-all duration-300 hover:border-blue-500/50 hover:bg-white hover:shadow-md dark:border-white/5 dark:bg-slate-800/50 dark:hover:border-blue-400/40 dark:hover:bg-slate-800"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 transition-transform group-hover:scale-110">
                    <FaPhone />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[11px] font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500">
                      Direct Phone
                    </p>
                    <p className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 truncate group-hover:text-blue-600 dark:group-hover:text-blue-400">
                      +880 1752 187286
                    </p>
                  </div>
                </a>

                {/* Social Quick Links */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <a
                    href="https://github.com/WahiduzzamanSakib"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-xl border border-slate-200/80 bg-slate-50/80 p-3 text-xs font-semibold text-slate-700 transition-all hover:border-slate-400 hover:bg-white dark:border-white/5 dark:bg-slate-800/50 dark:text-slate-300 dark:hover:border-white/20 dark:hover:bg-slate-800"
                  >
                    <FaGithub className="text-sm" />
                    <span>GitHub</span>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/waheduzzaman-md"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-xl border border-slate-200/80 bg-slate-50/80 p-3 text-xs font-semibold text-slate-700 transition-all hover:border-blue-500/50 hover:text-blue-600 hover:bg-white dark:border-white/5 dark:bg-slate-800/50 dark:text-slate-300 dark:hover:border-blue-400/40 dark:hover:text-blue-400 dark:hover:bg-slate-800"
                  >
                    <FaLinkedin className="text-sm text-blue-500" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Current Availability Status Banner */}
            <div className="mt-8 flex items-center gap-3 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-4 text-xs font-medium text-slate-700 dark:text-slate-300">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
              </span>
              <span>Available for Frontend &amp; Full-Stack Engagements</span>
            </div>
          </div>

          {/* RIGHT: CONSULTATION FORM */}
          <div className="rounded-3xl border border-slate-200/80 bg-white/70 p-6 sm:p-8 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/50 lg:col-span-7">
            <h3 className="text-xl font-bold tracking-tight text-slate-950 dark:text-white mb-6 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-cyan-500" />
              Send a Message
            </h3>

            <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="user_name"
                    required
                    placeholder="Jane Doe"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs sm:text-sm text-slate-900 outline-none transition-all focus:border-cyan-500 focus:bg-white focus:ring-2 focus:ring-cyan-500/20 dark:border-white/10 dark:bg-slate-800/60 dark:text-white dark:focus:border-cyan-400 dark:focus:bg-slate-900"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="user_email"
                    required
                    placeholder="jane@company.com"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs sm:text-sm text-slate-900 outline-none transition-all focus:border-cyan-500 focus:bg-white focus:ring-2 focus:ring-cyan-500/20 dark:border-white/10 dark:bg-slate-800/60 dark:text-white dark:focus:border-cyan-400 dark:focus:bg-slate-900"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  required
                  placeholder="New project opportunity / Introduction"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs sm:text-sm text-slate-900 outline-none transition-all focus:border-cyan-500 focus:bg-white focus:ring-2 focus:ring-cyan-500/20 dark:border-white/10 dark:bg-slate-800/60 dark:text-white dark:focus:border-cyan-400 dark:focus:bg-slate-900"
                />
              </div>

              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  placeholder="Please describe project scope, goals, or role details..."
                  className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs sm:text-sm text-slate-900 outline-none transition-all focus:border-cyan-500 focus:bg-white focus:ring-2 focus:ring-cyan-500/20 dark:border-white/10 dark:bg-slate-800/60 dark:text-white dark:focus:border-cyan-400 dark:focus:bg-slate-900"
                />
              </div>

              {status === "error" && (
                <p className="text-xs font-semibold text-rose-500 dark:text-rose-400">
                  {errorMessage}
                </p>
              )}

              <button
                type="submit"
                disabled={status === "loading" || status === "success"}
                className={`flex w-full items-center justify-center gap-2 rounded-xl py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-md transition-all active:scale-95 cursor-pointer ${
                  status === "success"
                    ? "bg-emerald-600"
                    : "bg-slate-950 hover:bg-cyan-600 dark:bg-white dark:text-slate-950 dark:hover:bg-cyan-400"
                }`}
              >
                {status === "loading" && (
                  <>
                    <FaSpinner className="animate-spin text-sm" />
                    <span>Transmitting Message...</span>
                  </>
                )}

                {status === "success" && (
                  <>
                    <FaCheck className="text-sm" />
                    <span>Message Delivered Successfully</span>
                  </>
                )}

                {status === "idle" && (
                  <>
                    <span>Send Message</span>
                    <FaPaperPlane className="text-xs" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Contact() {
  return (
    <Suspense fallback={<ContactSkeleton />}>
      <ContactContent />
    </Suspense>
  );
}