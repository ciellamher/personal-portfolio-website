"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function AnimatedBackground() {
  const [mounted, setMounted] = useState(false);
  const [nodes, setNodes] = useState<any[]>([]);
  const [bubbles, setBubbles] = useState<any[]>([]);

  useEffect(() => {
    // Generate random small floating nodes (dots)
    const generatedNodes = Array.from({ length: 15 }).map((_, i) => {
      return {
        id: i,
        size: Math.random() * 4 + 2, // 2px to 6px
        startX: Math.random() * 100, // 0 to 100vw
        startY: Math.random() * 100, // 0 to 100vh
        duration: Math.random() * 30 + 40, // 40s to 70s
        delay: Math.random() * -60,
        xEnd: Math.random() > 0.5 ? 80 : -80,
        yEnd: Math.random() > 0.5 ? 80 : -80,
      };
    });
    setNodes(generatedNodes);

    // Generate bubbles flowing up
    const generatedBubbles = Array.from({ length: 20 }).map((_, i) => {
      const size = Math.random() * 60 + 20; // 20px to 80px
      const startX = Math.random() * 100; // 0 to 100vw
      const duration = Math.random() * 20 + 20; // 20s to 40s
      const delay = Math.random() * -40; // negative delay so they are already on screen
      const yEnd = -window.innerHeight - 200;
      const xEnd = Math.random() > 0.5 ? 60 : -60;

      return { id: i, size, startX, duration, delay, yEnd, xEnd };
    });
    setBubbles(generatedBubbles);

    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none bg-[#FDFDFD] dark:bg-neutral-900 transition-colors duration-700">
      
      {/* Background base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-[#fafafa] to-[#f0f0f0] dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900 opacity-80 transition-colors duration-700" />
      
      {/* Top Right Abstract Tech Arcs */}
      <motion.div 
        className="absolute top-[-30vh] right-[-20vw] w-[100vw] h-[100vw] max-w-[1200px] max-h-[1200px] min-w-[600px] min-h-[600px] rounded-full border-[1px] border-neutral-200/40 dark:border-neutral-700/40 transition-colors duration-700"
        animate={{ rotate: 360 }}
        transition={{ duration: 240, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute inset-[8%] rounded-full border-[40px] border-transparent border-t-neutral-200/20 dark:border-t-neutral-700/20 border-r-neutral-200/20 dark:border-r-neutral-700/20 transition-colors duration-700" />
        <div className="absolute inset-[20%] rounded-full border-[2px] border-neutral-300/30 dark:border-neutral-600/30 border-dashed transition-colors duration-700" />
        <div className="absolute inset-[35%] rounded-full border-[80px] border-transparent border-l-neutral-200/20 dark:border-l-neutral-700/20 border-b-neutral-200/20 dark:border-b-neutral-700/20 transition-colors duration-700" />
        <div className="absolute inset-[42%] rounded-full border-[1px] border-neutral-300/40 dark:border-neutral-600/40 transition-colors duration-700" />
        <div className="absolute inset-[55%] rounded-full border-[20px] border-transparent border-t-neutral-300/20 dark:border-t-neutral-600/20 border-l-neutral-300/20 dark:border-l-neutral-600/20 transition-colors duration-700" />
      </motion.div>

      {/* Bottom Left Abstract Tech Arcs */}
      <motion.div 
        className="absolute bottom-[-20vh] left-[-20vw] w-[70vw] h-[70vw] max-w-[800px] max-h-[800px] min-w-[500px] min-h-[500px] rounded-full border-[1px] border-neutral-200/30 dark:border-neutral-700/30 transition-colors duration-700"
        animate={{ rotate: -360 }}
        transition={{ duration: 300, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute inset-[15%] rounded-full border-[20px] border-transparent border-b-neutral-200/20 dark:border-b-neutral-700/20 border-l-neutral-200/20 dark:border-l-neutral-700/20 transition-colors duration-700" />
        <div className="absolute inset-[28%] rounded-full border-[1px] border-neutral-300/30 dark:border-neutral-600/30 border-dashed transition-colors duration-700" />
      </motion.div>

      {/* Geometric Lines matching the tech HUD look */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.25]" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,150 L300,0 L1200,400" fill="none" stroke="currentColor" strokeWidth="1" className="text-neutral-300 dark:text-neutral-700 transition-colors duration-700" />
        <path d="M1000,1200 L600,600 L1400,200" fill="none" stroke="currentColor" strokeWidth="1" className="text-neutral-300 dark:text-neutral-700 transition-colors duration-700" />
        <path d="M-100,800 L400,500 L300,-100" fill="none" stroke="currentColor" strokeWidth="1" className="text-neutral-300 dark:text-neutral-700 transition-colors duration-700" />
        <path d="M400,500 L600,600 L900,900 L1500,900" fill="none" stroke="currentColor" strokeWidth="1" className="text-neutral-300 dark:text-neutral-700 transition-colors duration-700" strokeDasharray="6,6" />
        
        {/* Nodes at intersections */}
        <circle cx="300" cy="0" r="3" className="fill-neutral-400 dark:fill-neutral-600 transition-colors duration-700" />
        <circle cx="1200" cy="400" r="4" className="fill-neutral-400 dark:fill-neutral-600 transition-colors duration-700" />
        <circle cx="600" cy="600" r="3.5" className="fill-neutral-400 dark:fill-neutral-600 transition-colors duration-700" />
        <circle cx="400" cy="500" r="3" className="fill-neutral-400 dark:fill-neutral-600 transition-colors duration-700" />
        <circle cx="900" cy="900" r="4" className="fill-neutral-400 dark:fill-neutral-600 transition-colors duration-700" />
      </svg>
      
      {/* Slowly drifting nodes (the small dots) */}
      {nodes.map((node) => (
        <motion.div
          key={`node-${node.id}`}
          className="absolute rounded-full bg-neutral-400 dark:bg-neutral-600 transition-colors duration-700"
          style={{
            width: node.size,
            height: node.size,
            left: `${node.startX}vw`,
            top: `${node.startY}vh`,
          }}
          animate={{
            x: [0, node.xEnd, 0],
            y: [0, node.yEnd, 0],
            opacity: [0.05, 0.4, 0.05]
          }}
          transition={{
            duration: node.duration,
            repeat: Infinity,
            ease: "linear",
            delay: node.delay,
          }}
        />
      ))}

      {/* Bubbles flowing up */}
      {bubbles.map((bubble) => (
        <motion.div
          key={`bubble-${bubble.id}`}
          className="absolute rounded-full border border-neutral-300/30 dark:border-neutral-700/30 bg-neutral-200/20 dark:bg-neutral-800/20 backdrop-blur-sm transition-colors duration-700"
          style={{
            width: bubble.size,
            height: bubble.size,
            left: `${bubble.startX}vw`,
            bottom: "-100px",
          }}
          animate={{
            y: [0, bubble.yEnd],
            x: [0, bubble.xEnd, 0],
          }}
          transition={{
            y: {
              duration: bubble.duration,
              repeat: Infinity,
              ease: "linear",
              delay: bubble.delay,
            },
            x: {
              duration: bubble.duration * 0.8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: bubble.delay,
            }
          }}
        />
      ))}
    </div>
  );
}
