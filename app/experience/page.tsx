"use client";

import { useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowLeft, Briefcase } from 'lucide-react';
import { experiences } from '@/lib/experience';

export default function ExperiencePage() {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end 85%"]
  });

  // Grow the line from 0 to 100%
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <main className="min-h-screen bg-[#FDFDFD] dark:bg-neutral-900 text-neutral-900 dark:text-white font-sans py-20 px-6 transition-colors duration-700">
      <div className="max-w-5xl mx-auto">
        {/* Navigation back to main page */}
        <button onClick={() => router.push('/#experience')} className="flex items-center gap-2 text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors mb-8 text-sm font-medium cursor-pointer bg-transparent border-0 p-0">
          <ArrowLeft size={16} /> Back to Home
        </button>
        
        <h1 className="text-4xl font-bold mb-4 tracking-tight flex items-center gap-3 text-neutral-900 dark:text-white transition-colors duration-700">
          <Briefcase size={32} className="text-neutral-900 dark:text-white transition-colors duration-700" /> Experience
        </h1>
        <p className="text-neutral-500 dark:text-neutral-400 mb-16 text-sm transition-colors duration-700 max-w-2xl">
          A timeline of my professional roles, leadership positions, and volunteer work, showcasing my growth and contributions over the years.
        </p>

        {/* Timeline Container */}
        <div className="relative" ref={containerRef}>
          {/* Central Line Background */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-neutral-200 dark:bg-neutral-800 -translate-x-1/2 rounded-full" />
          
          {/* Animated Glow Line */}
          <motion.div 
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-neutral-900 dark:bg-white -translate-x-1/2 origin-top rounded-full z-0"
            style={{ scaleY }}
          />

          <div className="space-y-16">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;

              return (
                <div key={index} className="relative flex items-center md:justify-between flex-col md:flex-row w-full group">
                  
                  {/* Timeline Node */}
                  <TimelineNode />

                  <div className="w-full">
                    {/* MOBILE LAYOUT (Only visible on small screens) */}
                    <div className="md:hidden flex flex-col w-full pl-14 gap-4">
                      <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <TimelineHeader exp={exp} isEven={true} />
                      </motion.div>
                      <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <TimelineDescription exp={exp} isEven={true} />
                      </motion.div>
                    </div>

                    {/* DESKTOP LAYOUT (Only visible on md+ screens) */}
                    <div className="hidden md:flex w-full items-center justify-between">
                      {/* Left Side */}
                      <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="w-5/12 relative text-right pr-12"
                      >
                        {isEven ? <TimelineHeader exp={exp} isEven={true} /> : <TimelineDescription exp={exp} isEven={true} />}
                      </motion.div>
                      
                      {/* Right Side */}
                      <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="w-5/12 relative text-left pl-12"
                      >
                        {isEven ? <TimelineDescription exp={exp} isEven={false} /> : <TimelineHeader exp={exp} isEven={false} />}
                      </motion.div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}

// Subcomponents for the split layout
function TimelineHeader({ exp, isEven }: { exp: any, isEven: boolean }) {
  const TextContent = (
    <div className={`flex flex-col w-full ${isEven ? 'md:items-end items-start text-left md:text-right' : 'items-start text-left'}`}>
      <span className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3 border transition-colors duration-700
        ${exp.active ? 'text-neutral-600 dark:text-neutral-300 bg-neutral-50 dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700' : 'text-neutral-400 dark:text-neutral-500 bg-transparent border-neutral-200 dark:border-neutral-800'}
      `}>
        {exp.year}
      </span>
      <h3 className={`text-xl font-bold mb-1 transition-colors duration-700 ${exp.active ? 'text-neutral-900 dark:text-white' : 'text-neutral-700 dark:text-neutral-300'}`}>
        {exp.title}
      </h3>
      <p className="text-sm font-semibold text-neutral-500 dark:text-neutral-400 transition-colors duration-700">
        {exp.org}
      </p>
    </div>
  );

  const LogoContent = exp.logo ? (
    <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 relative bg-white rounded-2xl shadow-sm border border-neutral-200 dark:border-white p-3 flex items-center justify-center transition-colors duration-700">
      <img src={exp.logo} alt={exp.org} className="max-w-full max-h-full object-contain" />
    </div>
  ) : null;

  return (
    <div className="w-full">
      {/* Mobile Layout (Logo ALWAYS on Left) */}
      <div className="md:hidden flex items-center gap-4 w-full">
        {LogoContent}
        {TextContent}
      </div>

      {/* Desktop Layout - Even (Left side of center line: Text on Left, Logo on Right) */}
      {isEven && (
        <div className="hidden md:flex items-center gap-6 justify-end w-full">
          {TextContent}
          {LogoContent}
        </div>
      )}

      {/* Desktop Layout - Odd (Right side of center line: Logo on Left, Text on Right) */}
      {!isEven && (
        <div className="hidden md:flex items-center gap-6 justify-start w-full">
          {LogoContent}
          {TextContent}
        </div>
      )}
    </div>
  );
}

function TimelineDescription({ exp, isEven }: { exp: any, isEven: boolean }) {
  return (
    <div className={`bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-6 rounded-3xl hover:border-neutral-900 dark:hover:border-neutral-500 transition-colors duration-300 group-hover:shadow-sm`}>
      <p className={`text-sm leading-relaxed transition-colors duration-700 text-left text-neutral-600 dark:text-neutral-400`}>
        {exp.description}
      </p>
    </div>
  );
}

function TimelineNode() {
  const [isFilled, setIsFilled] = useState(false);

  return (
    <motion.div 
      onViewportEnter={() => setIsFilled(true)}
      onViewportLeave={() => setIsFilled(false)}
      viewport={{ margin: "-30% 0px -30% 0px" }}
      animate={{ scale: isFilled ? 1.5 : 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-4 z-10 transition-colors duration-300 
        ${isFilled 
          ? 'bg-neutral-900 border-neutral-900 dark:bg-white dark:border-white' 
          : 'bg-neutral-200 border-[#FDFDFD] dark:bg-neutral-700 dark:border-neutral-900'
        }
      `}
    />
  );
}
