import Link from 'next/link';
import { FlaskConical, ChevronRight } from "lucide-react";

export default function TechStackPreview() {
  return (
    <section id="tech-stack" className="bg-white dark:bg-neutral-900 p-6 md:p-8 rounded-3xl border border-neutral-200 dark:border-neutral-800 transition-colors duration-700">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold flex items-center gap-2 text-neutral-900 dark:text-white transition-colors duration-700">
          <FlaskConical size={22} className="text-neutral-900 dark:text-white transition-colors duration-700" /> Tech Stack & Skills
        </h3>
        <Link href="/tech-stack" className="text-sm font-medium text-neutral-500 dark:text-neutral-400 cursor-pointer hover:text-neutral-900 dark:hover:text-white flex items-center gap-1 transition-colors duration-700">
          View All <ChevronRight size={14} />
        </Link>
      </div>

      <div className="space-y-6">
        {/* Frontend */}
        <div>
          <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-[0.2em] block mb-4">Frontend</span>
          <div className="flex flex-wrap gap-2">
            {["CSS3", "HTML5", "JavaScript", "Next.js", "React", "TypeScript", "Vite"].map(t => (
              <span key={t} className="inline-flex h-11 items-center justify-center whitespace-nowrap px-4 bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 text-sm font-medium text-neutral-900 dark:text-neutral-300 rounded-xl hover:border-neutral-900 dark:hover:border-neutral-500 transition-colors cursor-default leading-none">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Backend & Systems */}
        <div>
          <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-[0.2em] block mb-4">Backend & Systems</span>
          <div className="flex flex-wrap gap-2">
            {["API Development", "Databases", "Git", "Java", "Linux", "Python", "SQL", "Streamlit", "Version Control"].map(t => (
              <span key={t} className="inline-flex h-11 items-center justify-center whitespace-nowrap px-4 bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 text-sm font-medium text-neutral-900 dark:text-neutral-300 rounded-xl hover:border-neutral-900 dark:hover:border-neutral-500 transition-colors cursor-default leading-none">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Mobile Development */}
        <div>
          <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-[0.2em] block mb-4">Mobile Development</span>
          <div className="flex flex-wrap gap-2">
            {["Dart", "Flutter"].map(t => (
              <span key={t} className="inline-flex h-11 items-center justify-center whitespace-nowrap px-4 bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 text-sm font-medium text-neutral-900 dark:text-neutral-300 rounded-xl hover:border-neutral-900 dark:hover:border-neutral-500 transition-colors cursor-default leading-none">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* AI & Machine Learning */}
        <div>
          <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-[0.2em] block mb-4">AI & Machine Learning</span>
          <div className="flex flex-wrap gap-2">
            {["Artificial Intelligence", "Computer Vision", "Data Science", "Machine Learning"].map(t => (
              <span key={t} className="inline-flex h-11 items-center justify-center whitespace-nowrap px-4 bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 text-sm font-medium text-neutral-900 dark:text-neutral-300 rounded-xl hover:border-neutral-900 dark:hover:border-neutral-500 transition-colors cursor-default leading-none">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* VA & Productivity */}
        <div>
          <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-[0.2em] block mb-4">VA & Productivity</span>
          <div className="flex flex-wrap gap-2">
            {["Data Entry", "Google Workspace", "Microsoft Excel", "Microsoft Word", "Notion", "Project Management", "Social Media Management"].map(t => (
              <span key={t} className="inline-flex h-11 items-center justify-center whitespace-nowrap px-4 bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 text-sm font-medium text-neutral-900 dark:text-neutral-300 rounded-xl hover:border-neutral-900 dark:hover:border-neutral-500 transition-colors cursor-default leading-none">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
