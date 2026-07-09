"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative p-1 w-[88px] h-12 sm:w-[96px] sm:h-[52px] rounded-full bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 transition-colors focus:outline-none focus:ring-2 focus:ring-neutral-400 shadow-lg shrink-0"
      aria-label="Toggle Dark Mode"
    >
      {/* The sliding handle */}
      <motion.div
        className="absolute left-1 top-1 bottom-1 w-[40px] sm:w-[44px] bg-white dark:bg-[#3a3a3a] rounded-full shadow-sm"
        initial={false}
        animate={{
          x: isDark ? 0 : "100%",
        }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      />
      
      {/* Icons */}
      <div className="absolute inset-0 flex justify-between items-center px-[15px] sm:px-[17px] pointer-events-none z-10">
        <Moon 
          size={18} 
          className={`transition-colors duration-300 ${isDark ? "text-neutral-900 dark:text-white" : "text-neutral-400 dark:text-neutral-500"}`} 
        />
        <Sun 
          size={18} 
          className={`transition-colors duration-300 ${!isDark ? "text-neutral-900 dark:text-white" : "text-neutral-400 dark:text-neutral-500"}`} 
        />
      </div>
    </button>
  );
}
