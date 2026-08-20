"use client";

import { useEffect, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { ThemeToggle } from "../theme-toggle";


const Navbar = () => {

  const navLinks = [
    { name: "Home", href: "home" },
    { name: "About", href: "about" },
    { name: "Skills", href: "skills" },
    { name: "Projects", href: "projects" },
    { name: "Education", href: "education" },
    { name: "Contact", href: "contact" },
  ];

  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    window.scrollTo(0, 0);
    setActive("home");
  }, []);

  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;
      navLinks.forEach((link) => {

        const section = document.getElementById(link.href);
        if (!section) return;
        if (
          scrollPosition >= section.offsetTop &&
          scrollPosition <
          section.offsetTop + section.offsetHeight
        ) {
          setActive(link.href);
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (id) => {
    setActive(id);
    setMenuOpen(false);

    if (pathname !== "/") {
      router.push(`/#${id}`);
      return;
    }
    window.history.pushState(null, "", `#${id}`);
    document
      .getElementById(id)
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-black/90 backdrop-blur-xl shadow-lg" : "dark:bg-black/70 bg-gray-300 backdrop-blur-md"} dark:text-white border-b border-white/10`}
    >
      <div className="flex items-center justify-between h-20 px-6 md:px-16 max-w-7xl mx-auto">

        {/* Logo */}
        <div>
          <Link
            href="/"
            className="flex items-center"
          >
            <Image
              src="/my-logo.png"
              alt="Waheduzzaman portfolio logo"
              width={50}
              height={38}
              className="rounded-full border-2 border-cyan-400 object-cover mr-2 hover:scale-105 transition"
            />

            <span
              className="hidden sm:inline text-2xl font-bold bg-gradient-to-r from-blue-400 via-cyan-500 to-indigo-900 dark:from-cyan-300 dark:via-blue-400 dark:to-indigo-400 bg-clip-text text-transparent hover:scale-105 transition"
            >
              Waheduzzaman
            </span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div
          className="hidden md:flex items-center gap-6 px-8 py-3 rounded-full border border-slate-700/60 bg-[#0f172a]/80 backdrop-blur-md shadow-lg"
        >
          {
            navLinks.map((link) => (
              <a
                key={link.href}
                href={`#${link.href}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleClick(link.href);
                }}
                className={`relative text-sm font-semibold hover:scale-110 transition-all duration-300 ${active === link.href ? "text-cyan-400" : "text-slate-300 hover:text-white"}`}
              >
                {link.name}
                {
                  active === link.href && (
                    <span className="absolute left-0 -bottom-2 w-full h-[2px] bg-cyan-400" />
                  )}
              </a>
            ))
          }
        </div>

        <div className="flex items-center gap-4">
          <ThemeToggle />

          {/* Mobile Menu Button */}
          <button
            className=" md:hidden dark:text-white text-black text-3xl "
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>

          {/* Hire Button */}
          <button
            onClick={() => handleClick("contact")}
            className="hidden md:block bg-cyan-400 text-black cursor-pointer font-semibold px-4 py-2 rounded hover:rounded-full hover:scale-105 active:scale-95 transition"
          >
            Hire Me
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {
        menuOpen && (
          <div
            className="md:hidden absolute top-20 left-0 w-full bg-black/90 backdrop-blur-md flex flex-col items-center gap-6 py-6 border-b border-white/10 animate-fadeIn"
          >
            {
              navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleClick(link.href)}
                  className={`text-sm font-medium cursor-pointer transition-colors ${active === link.href ? "text-cyan-400" : "text-gray-400 hover:text-white"}`}
                >
                  {link.name}
                </button>
              ))
            }

            <button
              onClick={() => handleClick("contact")}
              className="bg-cyan-400 text-black font-semibold px-4 py-2 rounded hover:rounded-full hover:scale-105 active:scale-95 transition"
            >
              Hire Me
            </button>
          </div>
        )
      }
    </nav>
  );
};

export default Navbar;