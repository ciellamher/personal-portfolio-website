"use client";

import { motion } from 'framer-motion';
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import TechStackPreview from "@/components/sections/TechStackPreview";
import ExperienceSection from "@/components/sections/ExperienceSection";
import BeyondCodingSection from "@/components/sections/BeyondCodingSection";
import RecentProjectsSection from "@/components/sections/RecentProjectsSection";
import CertificationsSection from "@/components/sections/CertificationsSection";
import ContactSection from "@/components/sections/ContactSection";
import GallerySection from "@/components/sections/GallerySection";
import FooterSection from "@/components/sections/FooterSection";

export default function Home() {
  return (
    <main id="top" className="pt-8 sm:pt-10 md:pt-0 min-h-screen bg-transparent text-neutral-900 font-sans selection:bg-neutral-100 pb-12">
      
      {/* HERO SECTION */}
      <HeroSection />

      {/* GRID LAYOUT */}
      <div className="max-w-6xl mx-auto px-6 mt-6 md:mt-12 space-y-10">

        {/* ROW 1: About, Tech, Experience */}
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.5 }} className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          <div className="lg:col-span-2 h-full flex flex-col gap-6">
            <AboutSection />
            <TechStackPreview />
          </div>
          <div className="lg:col-span-1 flex">
            <ExperienceSection />
          </div>
        </motion.div>

        {/* ROW 2: BEYOND CODING & PROJECTS */}
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.5, delay: 0.05 }} className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <BeyondCodingSection />
          </div>
          <div className="lg:col-span-2">
            <RecentProjectsSection />
          </div>
        </motion.div>

        {/* ROW 3: CERTIFICATIONS */}
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.18 }} transition={{ duration: 0.5, delay: 0.08 }} className="grid grid-cols-1 gap-6">
          <div>
            <CertificationsSection />
          </div>
        </motion.div>

        {/* ROW 4 & FOOTER */}
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.5, delay: 0.12 }} className="space-y-10">
          <ContactSection />
        </motion.div>

        {/* ROW 5: GALLERY */}
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.18 }} transition={{ duration: 0.5, delay: 0.16 }}>
          <GallerySection />
        </motion.div>

      </div>

      <FooterSection />
    </main>
  );
}