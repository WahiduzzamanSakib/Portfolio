"use client";

import { useEffect, useRef } from "react";

export default function ScrollProgress() {
  const barRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scroll =
        window.scrollY /
        (document.documentElement.scrollHeight -
          document.documentElement.clientHeight);

      barRef.current.style.transform = `scaleX(${scroll})`;
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={barRef}
      className="
        fixed top-20 left-0 right-0 h-[3px] z-90
        bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400
        origin-left
      "
      style={{
        transform: "scaleX(0)",
      }}
    />
  );
}