"use client";

import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

const emptySubscribe = () => () => {};

function useMounted() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
}

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const mounted = useMounted();

  if (!mounted) {
    return (
      <div className="h-9 w-9 rounded-full border border-slate-200/80 bg-slate-100/50 dark:border-white/10 dark:bg-slate-900/50" />
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
      className="group relative flex h-9 w-9 items-center justify-center rounded-full border border-slate-200/80 bg-white/80 text-slate-700 shadow-sm backdrop-blur-md transition-all duration-300 hover:border-cyan-500/50 hover:text-cyan-500 hover:shadow-md hover:shadow-cyan-500/10 active:scale-95 dark:border-white/10 dark:bg-slate-900/70 dark:text-slate-300 dark:hover:border-cyan-400/50 dark:hover:text-cyan-400 cursor-pointer"
    >
      <span className="sr-only">Toggle theme</span>
      {isDark ? (
        <FiSun className="h-4 w-4 transition-transform duration-500 group-hover:rotate-45 text-amber-400" />
      ) : (
        <FiMoon className="h-4 w-4 transition-transform duration-500 group-hover:-rotate-12 text-slate-700" />
      )}
    </button>
  );
}