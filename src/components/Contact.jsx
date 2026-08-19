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
    <section className="relative isolate overflow-hidden bg-white dark:bg-slate-950 py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Header Skeleton */}
        <div className="flex flex-col items-center space-y-3 text-center">
          <div className="h-10 w-64 animate-pulse rounded-lg bg-slate-200 dark:bg-slate-800" />
          <div className="h-4 w-80 animate-pulse rounded bg-slate-200 dark:bg-slate-800" />
        </div>

        {/* Panel Skeleton Grid */}
        <div className="grid auto-rows-fr grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Left Panel Skeleton */}
          <div className="h-[520px] animate-pulse rounded-3xl bg-slate-200/80 dark:bg-slate-900/80 lg:col-span-5" />
          {/* Right Panel Skeleton */}
          <div className="h-[520px] animate-pulse rounded-3xl bg-slate-200/80 dark:bg-slate-800/50 lg:col-span-7" />
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
      // Lazy load EmailJS only on form submission to save initial JS bundle size
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
      console.error("EmailJS Error:", error);
      setStatus("error");
      setErrorMessage("Failed to send message. Please try again.");
    }
  };

  return (
    <section
      id="contact"
      className="relative isolate scroll-mt-24 overflow-hidden bg-white dark:bg-slate-950"
    >
      {/* OPTIMIZED BACKDROP GLOWS (Static & Hardware Accelerated) */}
      <div className="pointer-events-none absolute left-[-10%] top-20 z-0 h-72 w-72 transform-gpu rounded-full bg-blue-500/10 blur-2xl" />
      <div className="pointer-events-none absolute bottom-0 right-[-10%] z-0 h-80 w-80 transform-gpu rounded-full bg-cyan-500/10 blur-2xl" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-96 w-96 -translate-x-1/2 -translate-y-1/2 transform-gpu rounded-full bg-blue-500/10 blur-2xl" />

      {/* Grid Pattern */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-[0.025] dark:opacity-[0.035] [background-image:linear-gradient(to_right,#64748b_1px,transparent_1px),linear-gradient(to_bottom,#64748b_1px,transparent_1px)] [background-size:48px_48px]" />

      {/* Fades */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-40 bg-gradient-to-b from-white/80 to-transparent dark:from-slate-950/80" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-32 bg-gradient-to-t from-white to-transparent dark:from-slate-950" />

      {/* CONTENT */}
      <div className="relative z-10">
        {/* Header */}
        <div className="px-4 pb-10 pt-8 text-center sm:px-6 lg:px-8">
          <h2 className="mt-5 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl dark:text-white">
            Get <span className="text-blue-400">In Touch</span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm text-slate-600 sm:text-base dark:text-white">
            Have a project idea or want to collaborate? Drop me a message and
            I'll get back to you.
          </p>
        </div>

        {/* Contact Panels */}
        <div className="mx-auto max-w-6xl px-4 pb-12 sm:px-6 lg:px-8">
          <div className="grid auto-rows-fr grid-cols-1 items-stretch gap-8 lg:grid-cols-12">
            {/* LEFT SIDE */}
            <div className="flex h-full flex-col justify-between rounded-3xl bg-[#0f0e38] p-8 text-white shadow-2xl sm:p-10 lg:col-span-5">
              <div>
                <h2 className="mb-4 text-2xl font-bold sm:text-3xl">
                  Let's start a conversation
                </h2>

                <p className="mb-8 text-sm leading-relaxed text-slate-300">
                  Whether you're looking to collaborate, have a question, or
                  just want to connect, I'm here and ready to help bring your
                  ideas to life.
                </p>

                <div className="mb-8 space-y-4">
                  {/* EMAIL */}
                  <div className="flex min-h-[72px] items-center gap-4 rounded-2xl border border-indigo-900/40 bg-[#1e1c53] p-4 transition-all hover:border-indigo-500/50">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#2b286f]">
                      <FaEnvelope />
                    </div>
                    <div className="overflow-hidden">
                      <p className="text-xs text-slate-400">Email me at</p>
                      <a
                        href="mailto:wahidzamanpg@gmail.com"
                        className="block truncate text-sm font-semibold hover:underline"
                      >
                        wahidzamanpg@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* PHONE */}
                  <div className="flex min-h-[72px] items-center gap-4 rounded-2xl border border-indigo-900/40 bg-[#1e1c53] p-4 transition-all hover:border-indigo-500/50">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#2b286f]">
                      <FaPhone />
                    </div>
                    <div className="overflow-hidden">
                      <p className="text-xs text-slate-400">Call me at</p>
                      <a
                        href="tel:+8801752187286"
                        className="block truncate text-sm font-semibold hover:underline"
                      >
                        +880 1752-187286
                      </a>
                    </div>
                  </div>

                  {/* WHATSAPP */}
                  <div className="flex min-h-[72px] items-center gap-4 rounded-2xl border border-indigo-900/40 bg-[#1e1c53] p-4 transition-all hover:border-indigo-500/50">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#2b286f]">
                      <FaWhatsapp className="text-green-400" />
                    </div>
                    <div className="overflow-hidden">
                      <p className="text-xs text-slate-400">WhatsApp me</p>
                      <a
                        href="https://wa.me/8801752187286"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 truncate text-sm font-semibold hover:text-cyan-500"
                      >
                        Chat on WhatsApp
                        <IoIosSend size={20} />
                      </a>
                    </div>
                  </div>

                  {/* SOCIAL LINKS */}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {/* GITHUB */}
                    <div className="flex min-h-[72px] items-center gap-4 rounded-2xl border border-indigo-900/40 bg-[#1e1c53] p-4 transition-all hover:border-indigo-500/50">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#2b286f]">
                        <FaGithub />
                      </div>
                      <div>
                        <a
                          href="https://github.com/WahiduzzamanSakib"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-semibold hover:underline"
                        >
                          Github
                        </a>
                      </div>
                    </div>

                    {/* LINKEDIN */}
                    <div className="flex min-h-[72px] items-center gap-4 rounded-2xl border border-indigo-900/40 bg-[#1e1c53] p-4 transition-all hover:border-indigo-500/50">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#2b286f]">
                        <FaLinkedin className="text-blue-400" />
                      </div>
                      <div>
                        <a
                          href="https://www.linkedin.com/in/waheduzzaman-md"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-semibold hover:underline"
                        >
                          Linkedin
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* STATUS */}
              <div className="mt-8 flex items-center gap-2 rounded-xl border border-indigo-900/30 bg-[#1a1848] p-3 text-xs text-slate-300">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                <span>Available for freelance & collaboration</span>
              </div>
            </div>

            {/* RIGHT SIDE (Form) */}
            <div className="flex h-full flex-col justify-between rounded-3xl bg-[#9da5b4] p-8 text-slate-800 shadow-2xl sm:p-10 lg:col-span-7 dark:bg-slate-600">
              <div>
                <div className="mb-6 flex items-center gap-2 text-2xl font-bold text-slate-900 sm:text-3xl dark:text-cyan-400">
                  <span className="inline-block h-3 w-3 rounded-full bg-emerald-500" />
                  <h2>Send me a message</h2>
                </div>

                <form ref={formRef} onSubmit={sendEmail} className="space-y-5">
                  {/* Name */}
                  <div>
                    <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-white">
                      YOUR NAME
                    </label>
                    <input
                      type="text"
                      name="user_name"
                      required
                      placeholder="Enter your full name"
                      className="w-full rounded-xl border border-transparent bg-[#c5cbd3] px-4 py-3.5 text-slate-900 placeholder-slate-500 transition-all duration-200 focus:border-indigo-500 focus:bg-white focus:outline-none"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-white">
                      EMAIL ADDRESS
                    </label>
                    <input
                      type="email"
                      name="user_email"
                      required
                      placeholder="your@email.com"
                      className="w-full rounded-xl border border-transparent bg-[#c5cbd3] px-4 py-3.5 text-slate-900 placeholder-slate-500 transition-all duration-200 focus:border-indigo-500 focus:bg-white focus:outline-none"
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-white">
                      SUBJECT
                    </label>
                    <input
                      type="text"
                      name="subject"
                      required
                      placeholder="Project discussion / Collaboration"
                      className="w-full rounded-xl border border-transparent bg-[#c5cbd3] px-4 py-3.5 text-slate-900 placeholder-slate-500 transition-all duration-200 focus:border-indigo-500 focus:bg-white focus:outline-none"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-white">
                      YOUR MESSAGE
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      required
                      placeholder="Tell me about your project, collaboration ideas,"
                      className="w-full resize-none rounded-xl border border-transparent bg-[#c5cbd3] px-4 py-3.5 text-slate-900 placeholder-slate-500 transition-all duration-200 focus:border-indigo-500 focus:bg-white focus:outline-none"
                    />
                  </div>

                  {/* Error */}
                  {status === "error" && (
                    <p className="text-sm font-semibold text-red-600">
                      {errorMessage}
                    </p>
                  )}

                  {/* Submit Button */}
                  <button
                    disabled={status === "loading" || status === "success"}
                    type="submit"
                    className={`flex w-full items-center justify-center gap-2 rounded-xl py-4 font-semibold text-white shadow-md transition-all duration-300 ${status === "success"
                        ? "bg-emerald-600"
                        : "bg-[#3331b2] hover:bg-[#282693]"
                      }`}
                  >
                  {status === "loading" && (
                    <>
                      <FaSpinner className="animate-spin" />
                      Sending...
                    </>
                  )}
                  {status === "success" && (
                    <>
                      <FaCheck />
                      Message Sent!
                    </>
                  )}
                  {status === "idle" && (
                    <>
                      Send Message
                      <FaPaperPlane className="text-sm" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

      {/* DIVIDER */ }
  <div className="pointer-events-none absolute bottom-0 left-1/2 z-10 h-1 w-full -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
    </section >
  );
}


export default function Contact() {
  return (
    <Suspense fallback={<ContactSkeleton />}>
      <ContactContent />
    </Suspense>
  );
}