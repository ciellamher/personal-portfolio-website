"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "/#top" },
  { name: "About", href: "/#about" },
  { name: "Experience", href: "/#experience" },
  { name: "Skills", href: "/#tech-stack" },
  { name: "Projects", href: "/#projects" },
  { name: "Certifications", href: "/#certifications" },
  { name: "Contact", href: "/#contact" },
];

export default function NavBar() {
  const pathname = usePathname();
  const [activeItem, setActiveItem] = useState("Home");
  const [isOpen, setIsOpen] = useState(false);
  const isClickScrolling = useRef(false);
  const clickScrollTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (pathname !== "/") return;

    const handleScroll = () => {
      if (isClickScrolling.current) return;

      if (window.scrollY < 100) {
        setActiveItem("Home");
        return;
      }

      let closestSection = "Home";
      let minDistance = Infinity;
      const targetY = window.innerHeight * 0.3; // 30% from the top

      for (const item of navItems) {
        if (item.name === "Home") continue;

        const id = item.href.replace("/#", "");
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          let distance;
          
          if (rect.top <= targetY && rect.bottom >= targetY) {
            distance = 0;
          } else if (rect.top > targetY) {
            distance = rect.top - targetY;
          } else {
            distance = targetY - rect.bottom;
          }

          if (distance < minDistance) {
            minDistance = distance;
            closestSection = item.name;
          }
        }
      }

      setActiveItem(closestSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, item: { name: string, href: string }) => {
    e.preventDefault();
    setActiveItem(item.name);
    setIsOpen(false);
    
    isClickScrolling.current = true;
    if (clickScrollTimeout.current) clearTimeout(clickScrollTimeout.current);
    clickScrollTimeout.current = setTimeout(() => {
      isClickScrolling.current = false;
    }, 1000);

    const targetId = item.href.replace('/#', '');
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (pathname !== "/") {
    return null;
  }

  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setActiveItem("Home");
    setIsOpen(false);
    const target = document.getElementById("top");
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const contactItem = navItems.find((item) => item.name === "Contact")!;
  const linkItems = navItems.filter((item) => item.name !== "Home" && item.name !== "Contact");

  return (
    <header className="fixed top-0 inset-x-0 z-[100] bg-white/50 dark:bg-neutral-950/50 backdrop-blur-[20px] border-b border-neutral-200/50 dark:border-neutral-800/50 transition-colors duration-700">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 sm:px-10 py-4 lg:py-5">
        <div className="flex items-center gap-12">
          {/* Logo */}
          <Link href="/#top" onClick={scrollToTop} className="flex items-center gap-3 shrink-0 no-underline">
            <span className="w-10 h-10 rounded-full overflow-hidden bg-white dark:bg-neutral-900 shadow-[0_1px_1px_-1px_rgba(0,0,0,0.09),0_2px_2px_-2px_rgba(0,0,0,0.08),0_6px_6px_-3px_rgba(0,0,0,0.07),0_20px_20px_-4px_rgba(0,0,0,0.03)] flex items-center justify-center">
              <img src="/me-notion.png" alt="Graciella" className="w-full h-full object-cover dark:invert" />
            </span>
            <span className="text-2xl font-semibold tracking-[-0.75px] text-neutral-900 dark:text-white">Graciella</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-1">
            {linkItems.map((item) => {
              const isActive = activeItem === item.name;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item)}
                  className={`relative h-[38px] flex items-center px-3 rounded-xl text-[15px] font-medium transition-colors duration-300 whitespace-nowrap hover:bg-neutral-100 dark:hover:bg-neutral-800/70 ${
                    isActive ? "text-neutral-900 dark:text-white" : "text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute inset-0 rounded-xl bg-neutral-100 dark:bg-neutral-800/70"
                      transition={{ type: "spring", stiffness: 500, damping: 35 }}
                    />
                  )}
                  <span className="relative">{item.name}</span>
                </a>
              );
            })}
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <a
            href="/Graciella_Jimenez_Computer_Science_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center h-[38px] px-4 rounded-full border-[1.5px] border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900 text-sm font-semibold text-neutral-900 dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors no-underline"
          >
            Resume
          </a>
          <a
            href={contactItem.href}
            onClick={(e) => handleNavClick(e, contactItem)}
            className="hidden sm:flex items-center h-[38px] px-4 rounded-full bg-neutral-900 dark:bg-white text-sm font-semibold text-white dark:text-neutral-900 hover:opacity-85 transition-opacity no-underline"
          >
            Get in touch
          </a>

          {/* Mobile Hamburger Button */}
          <button
            className="lg:hidden flex items-center justify-center w-[38px] h-[38px] rounded-full border-[1.5px] border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden overflow-hidden border-t border-neutral-200/50 dark:border-neutral-800/50"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {navItems.map((item) => {
                const isActive = activeItem === item.name;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item)}
                    className={`px-3 py-2.5 rounded-xl text-[15px] font-medium transition-colors ${
                      isActive
                        ? "bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white"
                        : "text-neutral-600 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-800/50 hover:text-neutral-900 dark:hover:text-white"
                    }`}
                  >
                    {item.name}
                  </a>
                );
              })}
              <div className="flex gap-2 pt-3 sm:hidden">
                <a
                  href="/Graciella_Jimenez_Computer_Science_CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center h-[42px] rounded-full border-[1.5px] border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900 text-sm font-semibold text-neutral-900 dark:text-white no-underline"
                >
                  Resume
                </a>
                <a
                  href={contactItem.href}
                  onClick={(e) => handleNavClick(e, contactItem)}
                  className="flex-1 flex items-center justify-center h-[42px] rounded-full bg-neutral-900 dark:bg-white text-sm font-semibold text-white dark:text-neutral-900 no-underline"
                >
                  Get in touch
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
