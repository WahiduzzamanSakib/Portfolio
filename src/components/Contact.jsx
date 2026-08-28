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
    <section className="relative overflow-hidden bg-slate-50 py-16 dark:bg-slate-950">
      <div className="mx-auto max-w-6xl px-6">
        <div className="h-10 w-64 animate-pulse rounded bg-slate-200 dark:bg-slate-800" />

        <div className="mt-10 grid gap-8 lg:grid-cols-12">
          <div className="h-[520px] rounded-3xl bg-slate-200 dark:bg-slate-800 lg:col-span-5 animate-pulse" />
          <div className="h-[520px] rounded-3xl bg-slate-200 dark:bg-slate-800 lg:col-span-7 animate-pulse" />
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
      console.log(error);
      setStatus("error");
      setErrorMessage("Failed to send message. Please try again.");
    }
  };

  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden scroll-mt-24 bg-slate-50 dark:bg-slate-950"
    >
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-120px] top-20 h-[350px] w-[350px] rounded-full bg-blue-500/10 blur-[120px]" />
        <div className="absolute right-[-120px] bottom-0 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute inset-0 opacity-[0.025] [background-image:linear-gradient(to_right,#64748b_1px,transparent_1px),linear-gradient(to_bottom,#64748b_1px,transparent_1px)] [background-size:48px_48px]" />
      </div>

      <div className="relative z-10">
        {/* HEADER */}
        <div className="px-6 pt-14 pb-10 text-center">
          <h2 className="text-4xl font-black tracking-tight text-slate-900 dark:text-white sm:text-5xl">
            Get
            <span className="ml-2 bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-500 bg-clip-text text-transparent">
              In Touch
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-slate-600 dark:text-slate-400">
            Have a project idea or want to collaborate? Drop me a message and
            I'll get back to you.
          </p>
        </div>

        <div className="mx-auto max-w-6xl px-6 pb-16">
          <div className="grid gap-8 lg:grid-cols-12">
            {/* LEFT PANEL */}
            <div className="group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white/70 p-8 shadow-xl backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/60 lg:col-span-5">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10 opacity-0 transition duration-500 group-hover:opacity-100" />

              <div className="relative z-10">
                <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                  Let's start a conversation
                </h2>

                <p className="mb-8 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  Whether you're looking to collaborate, have a question, or
                  just want to connect, I'm ready to help bring your ideas to
                  life.
                </p>

                {/* CONTACT INFO CARDS */}
                <div className="space-y-4">
                  {/* EMAIL */}
                  <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 transition-all hover:border-cyan-400 hover:shadow-md dark:border-slate-800 dark:bg-slate-900/70 hover:scale-105 duration-300">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-500">
                      <FaEnvelope />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500">Email me at</p>
                      <a
                        href="mailto:wahidzamanpg@gmail.com"
                        className="text-sm font-semibold text-slate-800 hover:text-cyan-500 dark:text-white dark:hover:text-cyan-500"
                      >
                        wahidzamanpg@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* PHONE */}
                  <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 transition-all hover:border-cyan-400 hover:shadow-md dark:border-slate-800 dark:bg-slate-900/70 hover:scale-105 duration-300">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 text-blue-500">
                      <FaPhone />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500">Call me at</p>
                      <a
                        href="tel:+8801752187286"
                        className="text-sm font-semibold text-slate-800 hover:text-cyan-500 dark:text-white dark:hover:text-cyan-500"
                      >
                        +880 1752-187286
                      </a>
                    </div>
                  </div>

                  {/* WHATSAPP */}
                  <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 transition-all hover:border-cyan-400 hover:shadow-md dark:border-slate-800 dark:hover:text-cyan-500   dark:bg-slate-900/70 hover:scale-105 duration-300">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-500/10 text-green-500">
                      <FaWhatsapp />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500">WhatsApp</p>
                      <a
                        href="https://wa.me/8801752187286"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-semibold text-slate-800 hover:text-cyan-500 dark:text-white dark:hover:text-cyan-500"
                      >
                        Chat on WhatsApp
                        <IoIosSend />
                      </a>
                    </div>
                  </div>

                  {/* SOCIAL */}
                  <div className="grid grid-cols-2 gap-4">
                    <a
                      href="https://github.com/WahiduzzamanSakib"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 font-semibold transition hover:border-cyan-400 dark:hover:text-cyan-500 hover:text-cyan-500  dark:border-slate-800 dark:bg-slate-900/70 dark:text-white hover:scale-105 duration-300"
                    >
                      <FaGithub />
                      Github
                    </a>

                    <a
                      href="https://www.linkedin.com/in/waheduzzaman-md"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 font-semibold transition hover:border-cyan-400 dark:hover:text-cyan-500 hover:text-cyan-500 dark:border-slate-800 dark:bg-slate-900/70 dark:text-white hover:scale-105 duration-300"
                    >
                      <FaLinkedin />
                      Linkedin
                    </a>
                  </div>
                </div>

                {/* STATUS */}
                <div className="mt-8 flex items-center gap-2 rounded-xl border border-cyan-500/20 bg-cyan-500/10 p-3 text-sm text-slate-700 dark:text-slate-300">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  Available for freelance & collaboration
                </div>
              </div>
            </div>

            {/* RIGHT FORM */}
           <div className="rounded-3xl border border-slate-200/80 bg-white/70 p-8 shadow-xl backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/60 lg:col-span-7">
              <div className="mb-6 flex items-center gap-2 text-2xl font-bold text-slate-900 dark:text-white">
                <span className="h-3 w-3 rounded-full bg-emerald-500" />
                Send me a message
              </div>

              <form ref={formRef} onSubmit={sendEmail} className="space-y-5">
                {[
                  {
                    label: "YOUR NAME",
                    name: "user_name",
                    type: "text",
                    placeholder: "Enter your full name",
                  },
                  {
                    label: "EMAIL ADDRESS",
                    name: "user_email",
                    type: "email",
                    placeholder: "your@email.com",
                  },
                  {
                    label: "SUBJECT",
                    name: "subject",
                    type: "text",
                    placeholder: "Project discussion",
                  },
                ].map((item) => (
                  <div key={item?.name}>
                    <label className="mb-2 block text-xs font-bold tracking-wider text-slate-600 dark:text-slate-300">
                      {item?.label}
                    </label>

                    <input
                      type={item?.type}
                      name={item?.name}
                      required
                      placeholder={item.placeholder}
                      className="w-full rounded-xl border border-slate-200 bg-slate-100 px-4 py-3.5 text-slate-900 outline-none transition focus:border-cyan-500 focus:bg-white focus:text-slate-900 focus:ring-2 focus:ring-cyan-500/20 dark:border-slate-800 dark:bg-slate-900 dark:text-white dark:focus:bg-gray-500 dark:focus:text-slate-900"
                    />
                  </div>
                ))}

                <div>
                  <label className="mb-2 block text-xs font-bold tracking-wider text-slate-600 dark:text-slate-300">
                    YOUR MESSAGE
                  </label>

                  <textarea
                    name="message"
                    rows={5}
                    required
                    placeholder="Tell me about your project..."
                    className="w-full resize-none rounded-xl border border-slate-200 bg-slate-100 px-4 py-3.5 text-slate-900 outline-none transition focus:border-cyan-500 focus:bg-white focus:text-slate-900 focus:ring-2 focus:ring-cyan-500/20 dark:border-slate-800 dark:bg-slate-900 dark:text-white dark:focus:bg-gray-500 dark:focus:text-slate-900"
                  />
                </div>

                {status === "error" && (
                  <p className="text-sm font-semibold text-red-500">
                    {errorMessage}
                  </p>
                )}

                <button
                  disabled={status === "loading" || status === "success"}
                  className={`flex w-full items-center justify-center gap-2 rounded-xl py-4 font-semibold text-white transition-all ${
                    status === "success"
                      ? "bg-emerald-600"
                      : "bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 hover:shadow-lg hover:shadow-cyan-500/30"
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
                      Message Sent
                    </>
                  )}

                  {status === "idle" && (
                    <>
                      Send Message
                      <FaPaperPlane />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="absolute bottom-0 left-1/2 h-1 w-full -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
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