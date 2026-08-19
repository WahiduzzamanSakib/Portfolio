"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function ThemeToggle() {

  const { theme, setTheme } = useTheme()

  const [mounted, setMounted] = useState(false)


  useEffect(() => {
    setMounted(true)
  }, [])


  if (!mounted) return null


  return (
    <button
      onClick={() =>
        setTheme(theme === "dark" ? "light" : "dark")
      }
      className="px-3 py-1 rounded border border-black dark:border-gray-600 cursor-pointer hover:scale-105 transition-all duration-300 ease-out"
    >

      {theme === "dark" ? "☀️" : "🌙"}

    </button>
  )
}