"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Server, Database, GitBranch, Brain, Bot, Eye, BarChart, ClipboardList, Keyboard, Share2, PenTool, Globe, Palette, Image, Video, Film, Table, FileText, LayoutGrid, Layers, Coffee } from 'lucide-react';
import { 
  SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiVite, SiHtml5, SiCss, 
  SiPython, SiStreamlit, SiLinux, SiGit, SiMysql,
  SiDart, SiFlutter, SiNotion, SiFigma
} from 'react-icons/si';

const skillsData = [
  // Frontend
  { name: "CSS3", category: "Frontend", icon: SiCss, bg: "#F5F5F5", text: "#404040" },
  { name: "HTML5", category: "Frontend", icon: SiHtml5, bg: "#F5F5F5", text: "#404040" },
  { name: "JavaScript", category: "Frontend", icon: SiJavascript, bg: "#F5F5F5", text: "#404040" },
  { name: "Next.js", category: "Frontend", icon: SiNextdotjs, bg: "#F5F5F5", text: "#404040" },
  { name: "React", category: "Frontend", icon: SiReact, bg: "#F5F5F5", text: "#404040" },
  { name: "TypeScript", category: "Frontend", icon: SiTypescript, bg: "#F5F5F5", text: "#404040" },
  { name: "Vite", category: "Frontend", icon: SiVite, bg: "#F5F5F5", text: "#404040" },
  
  // Backend & Systems
  { name: "API Dev", category: "Backend & Systems", icon: Globe, bg: "#F5F5F5", text: "#404040" },
  { name: "Databases", category: "Backend & Systems", icon: Database, bg: "#F5F5F5", text: "#404040" },
  { name: "Git", category: "Backend & Systems", icon: SiGit, bg: "#F5F5F5", text: "#404040" },
  { name: "Java", category: "Backend & Systems", icon: Coffee, bg: "#F5F5F5", text: "#404040" },
  { name: "Linux", category: "Backend & Systems", icon: SiLinux, bg: "#F5F5F5", text: "#404040" },
  { name: "Python", category: "Backend & Systems", icon: SiPython, bg: "#F5F5F5", text: "#404040" },
  { name: "SQL", category: "Backend & Systems", icon: SiMysql, bg: "#F5F5F5", text: "#404040" },
  { name: "Streamlit", category: "Backend & Systems", icon: SiStreamlit, bg: "#F5F5F5", text: "#404040" },
  { name: "Version Control", category: "Backend & Systems", icon: GitBranch, bg: "#F5F5F5", text: "#404040" },

  // Mobile
  { name: "Dart", category: "Mobile", icon: SiDart, bg: "#F5F5F5", text: "#404040" },
  { name: "Flutter", category: "Mobile", icon: SiFlutter, bg: "#F5F5F5", text: "#404040" },

  // AI & ML
  { name: "AI", category: "AI & ML", icon: Brain, bg: "#F5F5F5", text: "#404040" },
  { name: "Computer Vision", category: "AI & ML", icon: Eye, bg: "#F5F5F5", text: "#404040" },
  { name: "Data Science", category: "AI & ML", icon: BarChart, bg: "#F5F5F5", text: "#404040" },
  { name: "Machine Learning", category: "AI & ML", icon: Bot, bg: "#F5F5F5", text: "#404040" },

  // VA & Productivity
  { name: "Data Entry", category: "VA & Productivity", icon: Keyboard, bg: "#F5F5F5", text: "#404040" },
  { name: "Excel", category: "VA & Productivity", icon: Table, bg: "#F5F5F5", text: "#404040" },
  { name: "Google Workspace", category: "VA & Productivity", icon: LayoutGrid, bg: "#F5F5F5", text: "#404040" },
  { name: "Notion", category: "VA & Productivity", icon: SiNotion, bg: "#F5F5F5", text: "#404040" },
  { name: "Project Mgmt", category: "VA & Productivity", icon: ClipboardList, bg: "#F5F5F5", text: "#404040" },
  { name: "Social Media", category: "VA & Productivity", icon: Share2, bg: "#F5F5F5", text: "#404040" },
  { name: "Word", category: "VA & Productivity", icon: FileText, bg: "#F5F5F5", text: "#404040" },

  // Creative Design
  { name: "After Effects", category: "Creative Design", icon: Video, bg: "#F5F5F5", text: "#404040" },
  { name: "Canva", category: "Creative Design", icon: Palette, bg: "#F5F5F5", text: "#404040" },
  { name: "Figma", category: "Creative Design", icon: SiFigma, bg: "#F5F5F5", text: "#404040" },
  { name: "Illustrator", category: "Creative Design", icon: PenTool, bg: "#F5F5F5", text: "#404040" },
  { name: "Photoshop", category: "Creative Design", icon: Image, bg: "#F5F5F5", text: "#404040" },
  { name: "Premiere Pro", category: "Creative Design", icon: Film, bg: "#F5F5F5", text: "#404040" },
  { name: "UI/UX Design", category: "Creative Design", icon: Layers, bg: "#F5F5F5", text: "#404040" }
];

const categories = ["All", "Frontend", "Backend & Systems", "Mobile", "AI & ML", "VA & Productivity", "Creative Design"];

export default function TechStackPage() {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSkills = activeCategory === "All" 
    ? skillsData 
    : skillsData.filter(skill => skill.category === activeCategory);

  return (
    <main className="min-h-screen bg-[#FDFDFD] dark:bg-neutral-900 text-neutral-900 dark:text-white font-sans py-20 px-6 transition-colors duration-700">
      <div className="max-w-4xl mx-auto">
        {/* Navigation back to main page */}
        <button onClick={() => router.back()} className="flex items-center gap-2 text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors mb-8 text-sm font-medium cursor-pointer bg-transparent border-0 p-0">
          <ArrowLeft size={16} /> Back to Home
        </button>
        
        <h1 className="text-4xl font-bold mb-2 tracking-tight text-neutral-900 dark:text-white transition-colors duration-700">Tech Stack & Skills</h1>
        <p className="text-neutral-500 dark:text-neutral-400 mb-10 text-sm transition-colors duration-700">
          Tools and technologies I use to bring ideas to life
        </p>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer ${
                activeCategory === cat 
                  ? 'bg-neutral-900 dark:bg-white text-white dark:text-neutral-900' 
                  : 'bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-800 hover:text-neutral-900 dark:hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div 
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2 }}
                key={skill.name}
                className="flex flex-col items-center justify-center p-4 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl shadow-sm hover:shadow-md transition-shadow aspect-square gap-3"
              >
                <div 
                  className="w-12 h-12 rounded-[14px] flex items-center justify-center shadow-sm"
                  style={{ backgroundColor: skill.bg, color: skill.text }}
                >
                  <skill.icon size={24} />
                </div>
                <span className="text-xs font-semibold text-neutral-700 dark:text-neutral-300 text-center leading-tight transition-colors duration-700">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </main>
  );
}