"use client";

import { useRef, useEffect } from 'react';
import { Instagram, ArrowLeft, ArrowRight } from "lucide-react";

export default function GallerySection() {
  const galleryRef = useRef<HTMLDivElement>(null);
  const galleryFiles = [
    "IMG_0780.JPG",
    "IMG_4954.JPG",
    "profile.jpeg",
    "IMG_4955.JPG",
    "IMG_5366.JPG"
  ];

  const scrollGallery = (direction: 'left' | 'right') => {
    if (galleryRef.current) {
      const scrollAmount = 300;
      galleryRef.current.scrollBy({
        left: direction === 'right' ? scrollAmount : -scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const gallery = galleryRef.current;
    if (!gallery) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

    if (prefersReducedMotion || !finePointer) return;

    const container = gallery.parentElement || gallery;
    let animationFrameId = 0;
    let lastTimestamp = 0;
    let isPaused = false;

    const pause = () => { isPaused = true; };
    const resume = () => { isPaused = false; lastTimestamp = 0; };

    const animate = (timestamp: number) => {
      if (!lastTimestamp) lastTimestamp = timestamp;

      if (!isPaused) {
        const elapsed = timestamp - lastTimestamp;
        if (elapsed >= 16) {
          gallery.scrollLeft += 0.22;
          const maxScrollLeft = Math.max(0, gallery.scrollWidth - gallery.clientWidth);
          if (maxScrollLeft > 0 && gallery.scrollLeft >= maxScrollLeft) {
            gallery.scrollLeft = 0;
          }
          lastTimestamp = timestamp;
        }
      }
      animationFrameId = window.requestAnimationFrame(animate);
    };

    container.addEventListener("mouseenter", pause);
    container.addEventListener("mouseleave", resume);
    container.addEventListener("focusin", pause);
    container.addEventListener("focusout", resume);

    animationFrameId = window.requestAnimationFrame(animate);

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      container.removeEventListener("mouseenter", pause);
      container.removeEventListener("mouseleave", resume);
      container.removeEventListener("focusin", pause);
      container.removeEventListener("focusout", resume);
    };
  }, []);

  return (
    <section className="bg-white dark:bg-neutral-900 p-6 md:p-8 rounded-3xl border border-neutral-200 dark:border-neutral-800 transition-colors duration-700">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold flex items-center gap-2 text-neutral-900 dark:text-white transition-colors duration-700">
          <Instagram size={22} className="text-neutral-900 dark:text-white transition-colors duration-700" /> Gallery
        </h3>
        <div className="flex gap-2">
          <button onClick={() => scrollGallery('left')} className="p-2 rounded-full border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800 text-neutral-900 dark:text-white transition-colors duration-300">
            <ArrowLeft size={18} />
          </button>
          <button onClick={() => scrollGallery('right')} className="p-2 rounded-full border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800 text-neutral-900 dark:text-white transition-colors duration-300">
            <ArrowRight size={18} />
          </button>
        </div>
      </div>

      <div ref={galleryRef} className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x scroll-smooth">
        {galleryFiles.map((file, i) => (
          <div key={`${file}-${i}`} className="snap-center shrink-0 w-[300px] h-[200px] bg-neutral-100 dark:bg-neutral-800 rounded-2xl overflow-hidden relative group border border-neutral-200 dark:border-neutral-700 transition-colors duration-700">
            <img
              src={`/gallery/${file}`}
              alt={`Gallery ${i + 1}`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
          </div>
        ))}
      </div>
    </section>
  );
}
