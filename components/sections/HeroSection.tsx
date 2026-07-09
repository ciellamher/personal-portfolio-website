"use client";

import { motion } from 'framer-motion';
import { MapPin, Calendar, Mail, Download, Github, Linkedin } from "lucide-react";
import Lanyard from "@/components/ui/Lanyard";

export default function HeroSection() {
  return (
    <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="max-w-7xl mx-auto px-4 sm:px-6 min-h-[60vh] md:min-h-[90vh] grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
      <div className="hidden md:block md:col-span-1" />
      <div className="space-y-6 order-2 md:order-1 md:col-span-5 relative z-20">
        <div className="w-fit">
          <h1 id="hero" className="text-5xl md:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-white flex items-center gap-3 whitespace-normal md:whitespace-nowrap transition-colors duration-700">
            Graciella Jimenez
          </h1>
          <div className="flex items-center gap-2 text-neutral-500 dark:text-neutral-400 font-medium text-lg mt-2 pl-1 transition-colors duration-700">
            <MapPin size={20} className="text-neutral-400 dark:text-neutral-500 transition-colors duration-700" />
            Pampanga, Philippines
          </div>
        </div>

        <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-md transition-colors duration-700">
          BS in Computer Science Student | Notion Campus Leader at Holy Angel University
        </p>

        <div className="flex flex-wrap gap-3 pt-4">
          <a
            href="https://calendar.app.google/EVMe3RzST39L25MH9"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-xl hover:bg-black dark:hover:bg-neutral-200 transition-all duration-300 font-semibold text-sm shadow-lg hover:scale-105 no-underline cursor-pointer"
          >
            <Calendar size={18} /> Schedule a Call
          </a>
          <a
            href="/Graciella_Jimenez_Computer_Science_CV.pdf"
            download
            className="flex items-center gap-2 px-5 py-3 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-white rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all duration-300 font-semibold text-sm hover:scale-105 no-underline cursor-pointer"
          >
            <Download size={18} /> CV
          </a>
          <div className="flex gap-2">
            <a href="https://github.com/ciellamher" target="_blank" className="p-3 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-900 dark:text-white transition-all hover:scale-105">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/ciellamher/" target="_blank" className="p-3 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-900 dark:text-white transition-all hover:scale-105">
              <Linkedin size={20} />
            </a>
            <a href="mailto:work.gmdjimenez@gmail.com" className="p-3 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-900 dark:text-white transition-all hover:scale-105">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="hidden md:flex justify-center items-center order-1 md:order-2 md:col-span-6 h-[220px] sm:h-[320px] md:h-[800px] relative z-0 mt-6 md:mt-[-200px] pointer-events-none">
        <div className="absolute w-[150vw] sm:w-[800px] md:w-[1400px] h-[600px] sm:h-[800px] md:h-[1400px] pointer-events-auto flex justify-center items-center">
          <Lanyard />
        </div>
      </div>
    </motion.div>
  );
}
