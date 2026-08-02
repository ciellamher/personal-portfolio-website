"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function LiveViewers() {
  const [viewers, setViewers] = useState(1);

  useEffect(() => {
    setViewers(Math.floor(Math.random() * 3) + 1); // Start with 1-3 on client load

    const interval = setInterval(() => {
      setViewers(prev => {
        const change = Math.floor(Math.random() * 3) - 1; // -1, 0, 1
        // keep between 1 and 3
        if (prev + change > 3) return 3;
        if (prev + change < 1) return 1;
        return prev + change;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.8 }}
      className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-40 flex flex-col items-start gap-2 pointer-events-none"
    >
      {/* Avatar Stack */}
      <div className="flex items-center h-10">
        {viewers > 0 && (
          <div className="w-10 h-10 rounded-full bg-white border-[2px] border-[#FDFDFD] dark:border-neutral-900 shadow-sm flex items-center justify-center overflow-hidden z-30">
            <img src="https://api.dicebear.com/7.x/notionists/svg?seed=Felix&backgroundColor=transparent" alt="viewer" className="w-full h-full object-cover" />
          </div>
        )}
        {viewers > 1 && (
          <div className="w-10 h-10 rounded-full bg-white border-[2px] border-[#FDFDFD] dark:border-neutral-900 shadow-sm flex items-center justify-center overflow-hidden -ml-3 z-20">
            <img src="https://api.dicebear.com/7.x/notionists/svg?seed=Mia&backgroundColor=transparent" alt="viewer" className="w-full h-full object-cover" />
          </div>
        )}
        {viewers > 2 && (
          <div className="w-10 h-10 rounded-full bg-white border-[2px] border-[#FDFDFD] dark:border-neutral-900 shadow-sm flex items-center justify-center overflow-hidden -ml-3 z-10">
            <img src="https://api.dicebear.com/7.x/notionists/svg?seed=Alex&backgroundColor=transparent" alt="viewer" className="w-full h-full object-cover" />
          </div>
        )}
        {viewers > 3 && (
          <div className="h-10 px-3 rounded-full bg-neutral-200/80 dark:bg-neutral-800/80 border-[2px] border-[#FDFDFD] dark:border-neutral-900 shadow-sm flex items-center justify-center -ml-3 z-0">
            <span className="text-sm font-bold text-neutral-500 dark:text-neutral-400">+{viewers - 3}</span>
          </div>
        )}
      </div>
      
      {/* Text */}
      <div className="text-sm text-neutral-400 dark:text-neutral-500 font-mono tracking-tight">
        <span className="text-neutral-900 dark:text-white font-bold text-base sans-serif tracking-normal mr-1">{viewers}</span> 
        {viewers === 1 ? "person viewing now" : "people viewing now"}
      </div>
    </motion.div>
  );
}
