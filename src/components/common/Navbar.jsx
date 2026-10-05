"use client";

import { useEffect, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { ThemeToggle } from "../theme-toggle";

const navLinks = [
  { name: "Home", href: "home" },
  { name: "About", href: "about" },
  { name: "Skills", href: "skills" },
  { name: "Projects", href: "projects" },
  { name: "Education", href: "education" },
  { name: "Contact", href: "contact" },
];

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track active section on scroll
  useEffect(() => {
    if (pathname !== "/") return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;
      for (let i = navLinks.length - 1; i >= 0; i--) {
        const link = navLinks[i];
        const section = document.getElementById(link.href);
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActive(link.href);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const handleClick = (id) => {
    setActive(id);
    setMenuOpen(false);

    if (pathname !== "/") {
      router.push(`/#${id}`);
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      window.history.pushState(null, "", `#${id}`);
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl border-b border-slate-200/70 dark:border-white/[0.08] shadow-sm shadow-slate-900/5 dark:shadow-black/20"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="flex items-center justify-between h-20 px-6 md:px-12 max-w-7xl mx-auto">
        {/* Brand Logo */}
        <Link
          href="/"
          className="group flex items-center gap-3 transition-transform duration-300 hover:scale-[1.02]"
          aria-label="Waheduzzaman - Home"
        >
          <div className="relative h-10 w-10 overflow-hidden rounded-full ring-2 ring-cyan-500/30 group-hover:ring-cyan-500 transition-all duration-300">
            <Image
              src="/my-logo.png"
              alt="Waheduzzaman logo"
              fill
              sizes="40px"
              priority
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-1">
              Waheduzzaman
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-500 animate-pulse" />
            </span>
            <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 dark:text-slate-400">
              Developer & Engineer
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Pill */}
        <nav
          aria-label="Main Navigation"
          className="hidden md:flex items-center gap-1 px-4 py-1.5 rounded-full border border-slate-200/80 dark:border-white/10 bg-white/70 dark:bg-slate-900/60 backdrop-blur-xl shadow-sm"
        >
          {navLinks.map((link) => {
            const isActive = active === link.href;
            return (
              <button
                key={link.href}
                type="button"
                onClick={() => handleClick(link.href)}
                className={`relative px-4 py-2 text-xs font-semibold tracking-wider uppercase transition-all duration-200 rounded-full cursor-pointer ${
                  isActive
                    ? "text-cyan-600 dark:text-cyan-400 bg-cyan-500/10 dark:bg-cyan-500/15"
                    : "text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100/70 dark:hover:bg-white/5"
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 h-1 w-1 rounded-full bg-cyan-500 dark:bg-cyan-400" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <ThemeToggle />

          {/* Hire Me CTA Button */}
          <button
            type="button"
            onClick={() => handleClick("contact")}
            className="hidden md:inline-flex items-center justify-center px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-slate-900 dark:bg-white dark:text-slate-950 shadow-sm transition-all duration-300 hover:scale-105 hover:bg-cyan-600 dark:hover:bg-cyan-400 hover:shadow-md hover:shadow-cyan-500/20 active:scale-95 cursor-pointer"
          >
            Hire Me
          </button>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            className="md:hidden flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200/80 dark:border-white/10 bg-white/80 dark:bg-slate-900/80 text-slate-800 dark:text-slate-100 shadow-sm transition-all hover:border-cyan-500/50"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <HiX className="text-xl" /> : <HiMenu className="text-xl" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="md:hidden border-b border-slate-200/80 dark:border-white/10 bg-white/95 dark:bg-slate-950/95 backdrop-blur-2xl shadow-xl transition-all animate-fade-up">
          <div className="flex flex-col px-6 py-6 gap-2">
            {navLinks.map((link) => {
              const isActive = active === link.href;
              return (
                <button
                  key={link.href}
                  type="button"
                  onClick={() => handleClick(link.href)}
                  className={`flex items-center justify-between w-full py-3 px-4 rounded-xl text-sm font-semibold tracking-wide transition-all ${
                    isActive
                      ? "bg-cyan-500/10 dark:bg-cyan-500/15 text-cyan-600 dark:text-cyan-400 font-bold"
                      : "text-slate-700 dark:text-slate-300 hover:bg-slate-100/70 dark:hover:bg-white/5 hover:text-slate-950 dark:hover:text-white"
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && <span className="h-1.5 w-1.5 rounded-full bg-cyan-500" />}
                </button>
              );
            })}

            <div className="pt-4 mt-2 border-t border-slate-200/60 dark:border-white/10 flex flex-col gap-3">
              <button
                type="button"
                onClick={() => handleClick("contact")}
                className="w-full py-3.5 rounded-xl text-center text-xs font-bold uppercase tracking-wider text-white bg-slate-900 dark:bg-white dark:text-slate-950 shadow-md hover:bg-cyan-600 dark:hover:bg-cyan-400 transition"
              >
                Hire Me
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;