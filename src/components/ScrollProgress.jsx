"use client";

import { useEffect, useRef } from "react";

export default function ScrollProgress() {
  const barRef = useRef(null);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const totalHeight =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;
          const scroll = totalHeight > 0 ? window.scrollY / totalHeight : 0;

          if (barRef.current) {
            barRef.current.style.transform = `scaleX(${Math.min(Math.max(scroll, 0), 1)})`;
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={barRef}
      aria-hidden="true"
      className="pointer-events-none fixed top-20 left-0 right-0 z-40 h-[2.5px] origin-left bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 will-change-transform"
      style={{
        transform: "scaleX(0)",
      }}
    />
  );
}