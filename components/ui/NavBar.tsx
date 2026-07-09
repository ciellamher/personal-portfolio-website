"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

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
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (pathname === "/") setActiveItem("Home");
  }, [pathname]);

  if (pathname !== "/") {
    return null;
  }

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-max max-w-[95vw] flex flex-col items-center">
      <nav className="flex items-center justify-between gap-1 sm:gap-2 px-3 py-2 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-xl border border-neutral-200/50 dark:border-neutral-800/50 shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.3)] rounded-full transition-colors duration-700">
        
        {/* Logo */}
        <Link href="/#top" onClick={(e) => {
          setActiveItem("Home");
          setIsOpen(false);
          const target = document.getElementById("top");
          if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
          }
        }} className="flex items-center justify-center shrink-0 ml-2 mr-3 sm:ml-3 sm:mr-5">
          <img src="/logo-black.png" alt="GMJ Logo" className="w-7 h-7 sm:w-8 sm:h-8 object-contain dark:hidden block" />
          <img src="/logo-white.png" alt="GMJ Logo" className="w-7 h-7 sm:w-8 sm:h-8 object-contain hidden dark:block" />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1 sm:gap-2">
          {navItems.map((item) => {
            const isActive = activeItem === item.name;
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  setActiveItem(item.name);
                  const targetId = item.href.replace('/#', '');
                  const target = document.getElementById(targetId);
                  if (target) {
                    e.preventDefault();
                    target.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className={`relative px-3 sm:px-5 py-1.5 sm:py-2 rounded-full text-sm font-semibold transition-colors duration-300 whitespace-nowrap ${
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
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          className="md:hidden flex items-center justify-center w-9 h-9 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors mr-1"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full mt-2 left-1/2 -translate-x-1/2 w-[240px] md:hidden flex flex-col p-2 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-xl border border-neutral-200/50 dark:border-neutral-800/50 shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.4)] rounded-2xl overflow-hidden"
          >
            {navItems.map((item) => {
              const isActive = activeItem === item.name;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    setIsOpen(false);
                    setActiveItem(item.name);
                    const targetId = item.href.replace('/#', '');
                    const target = document.getElementById(targetId);
                    if (target) {
                      e.preventDefault();
                      target.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className={`px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                    isActive 
                      ? "bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white" 
                      : "text-neutral-600 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-800/50 hover:text-neutral-900 dark:hover:text-white"
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
