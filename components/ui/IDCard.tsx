"use client";
import { motion, useSpring, useMotionValue, useTransform } from "framer-motion";

export default function IDCard() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // 1. Physics: Strong spring for that "heavy lanyard" feel
  const springX = useSpring(x, { stiffness: 100, damping: 10 });
  const springY = useSpring(y, { stiffness: 100, damping: 10 });

  // 2. Rotation: The card tilts as you drag it
  const rotateX = useTransform(springY, [-300, 300], [20, -20]);
  const rotateY = useTransform(springX, [-300, 300], [-20, 20]);

  return (
    <div className="relative h-[600px] w-full flex justify-center perspective-1000 mt-[-50px]">
      
      {/* The Draggable Container */}
      <motion.div
        drag
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }} // Anchors it to the center
        dragElastic={0.15} // Allows you to stretch it far away
        style={{ x: springX, y: springY, rotateX, rotateY, cursor: "grab" }}
        whileTap={{ cursor: "grabbing" }}
        className="relative z-10 origin-top"
      >
        
        {/* --- THE LANYARD STRAP (Visual only) --- */}
        {/* This creates the illusion of the strap going up off-screen */}
        <div className="absolute bottom-[98%] left-1/2 -translate-x-1/2 w-8 h-[1000px] bg-neutral-900 flex flex-col justify-end items-center pb-4 z-[-1]">
           <div className="flex flex-col gap-12 opacity-50 mb-4">
              {/* Repeated text pattern on lanyard */}
              <span className="text-white text-[10px] font-bold tracking-[0.3em] [writing-mode:vertical-lr] rotate-180">HOLY ANGEL</span>
              <span className="text-white text-[10px] font-bold tracking-[0.3em] [writing-mode:vertical-lr] rotate-180">CS STUDENT</span>
              <span className="text-white text-[10px] font-bold tracking-[0.3em] [writing-mode:vertical-lr] rotate-180">2026</span>
           </div>
        </div>

        {/* --- THE METAL CLIP --- */}
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-10 bg-neutral-800 rounded-md z-10 flex items-center justify-center border-b-2 border-neutral-600">
           <div className="w-8 h-1 bg-neutral-500 rounded-full shadow-sm" />
        </div>
        {/* Ring connecting clip to strap */}
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-10 h-10 border-4 border-neutral-900 rounded-full z-0 clip-ring" />


        {/* --- THE CARD --- */}
        <div className="relative w-[320px] h-[480px] bg-[#fdfdfd] rounded-[2rem] p-6 shadow-2xl border-[6px] border-white flex flex-col items-center text-center overflow-hidden">
            
            {/* Subtle Grain Texture */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] pointer-events-none" />

            {/* Photo Area */}
            <div className="mt-10 w-44 h-44 rounded-full border-[6px] border-white shadow-lg overflow-hidden relative z-10 bg-neutral-100">
               <img 
                 src="/me.jpeg" 
                 alt="Graciella" 
                 className="w-full h-full object-cover" 
               />
            </div>

            {/* Big "HELLO" Text */}
            <h2 className="mt-8 text-7xl font-black text-neutral-900 tracking-tighter leading-none select-none" style={{ fontFamily: 'Impact, sans-serif' }}>
              HELLO!
            </h2>
            
            {/* Name Sticker */}
            <div className="mt-3 bg-neutral-900 text-white px-6 py-2 rounded-lg transform -rotate-3 shadow-md">
               <span className="text-lg font-bold tracking-widest uppercase">I'M GRACIELLA</span>
            </div>

            {/* Barcode / Footer */}
            <div className="mt-auto w-full flex justify-between items-end opacity-40 px-2 pb-2">
               <div className="h-8 flex gap-1 items-end">
                  {[3,1,4,1,2,5,1,2,3,1,4,2].map((w, i) => (
                    <div key={i} className="bg-black h-full" style={{ width: w }} />
                  ))}
               </div>
               <span className="text-[10px] font-mono font-bold">2026-CS-301</span>
            </div>

        </div>

      </motion.div>
    </div>
  );
}