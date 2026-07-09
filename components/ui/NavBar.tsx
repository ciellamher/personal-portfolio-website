"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Home", href: "/#top" },
  { name: "About", href: "/#about" },
  { name: "Skills", href: "/#tech-stack" },
  { name: "Experience", href: "/#experience" },
  { name: "Projects", href: "/#projects" },
  { name: "Certifications", href: "/#certifications" },
  { name: "Contact", href: "/#contact" },
];

export default function NavBar() {
  const pathname = usePathname();
  const [activeItem, setActiveItem] = useState("Home");

  useEffect(() => {
    if (pathname === "/") setActiveItem("Home");
  }, [pathname]);

  if (pathname !== "/") {
    return null;
  }

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-max max-w-[95vw]">
      <nav className="flex items-center gap-1 sm:gap-2 px-2 py-2 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-xl border border-neutral-200/50 dark:border-neutral-800/50 shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.3)] rounded-full overflow-x-auto no-scrollbar transition-colors duration-700">
        
        {/* Logo */}
        <Link href="/#top" onClick={() => setActiveItem("Home")} className="flex items-center justify-center shrink-0 ml-2 mr-3 sm:ml-3 sm:mr-5">
          <img src="/logo-black.png" alt="GMJ Logo" className="w-7 h-7 sm:w-8 sm:h-8 object-contain dark:hidden block" />
          <img src="/logo-white.png" alt="GMJ Logo" className="w-7 h-7 sm:w-8 sm:h-8 object-contain hidden dark:block" />
        </Link>

        {navItems.map((item) => {
          const isActive = activeItem === item.name;
          return (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setActiveItem(item.name)}
              className={`relative px-3 sm:px-5 py-1.5 sm:py-2 rounded-full text-[13px] sm:text-sm font-semibold transition-colors duration-300 whitespace-nowrap ${
                isActive ? "text-neutral-900 dark:text-white" : "text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="nav-indicator"
                  className="absolute top-[-8px] sm:top-[-8px] left-1/2 -translate-x-1/2 w-5 h-[3px] bg-neutral-900 dark:bg-white rounded-b-full transition-colors duration-700"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
              {item.name}
            </a>
          );
        })}
      </nav>
    </div>
  );
}
