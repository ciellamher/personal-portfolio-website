import Link from 'next/link';
import { Code, ChevronRight, ArrowUpRight } from "lucide-react";
import { recentProjects } from "@/lib/projects";

const getProjectPreview = (description: string) => {
  if (description.length <= 110) {
    return description;
  }
  return `${description.slice(0, 110).trimEnd()}...`;
};

export default function RecentProjectsSection() {
  return (
    <section id="projects" className="bg-white dark:bg-neutral-900 p-6 md:p-8 rounded-3xl border border-neutral-200 dark:border-neutral-800 h-full transition-colors duration-700">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold flex items-center gap-2 text-neutral-900 dark:text-white transition-colors duration-700">
          <Code size={22} className="text-neutral-900 dark:text-white transition-colors duration-700" /> Recent Projects
        </h3>
        <Link href="/projects" className="text-sm font-medium text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white flex items-center gap-1 transition-colors duration-700">
          View All <ChevronRight size={14} />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {recentProjects.map((project, i) => (
          <a
            key={i}
            href={project.link}
            target={project.link === "#" ? "_self" : "_blank"}
            rel="noopener noreferrer"
            className="group p-5 rounded-2xl bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 hover:bg-white dark:hover:bg-neutral-900 hover:border-neutral-300 dark:hover:border-neutral-600 transition-all duration-300 no-underline block h-full"
          >
            <div className="flex h-full flex-col">
              <div className="flex justify-between items-start mb-3">
                <div className="min-w-0 pr-3">
                  <div className="flex items-center gap-2">
                    <h4 className="font-bold text-neutral-900 dark:text-white group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors duration-300">{project.name}</h4>
                  </div>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400">{getProjectPreview(project.desc)}</p>
                </div>
                <div className="p-2 bg-white dark:bg-neutral-900 rounded-full border border-neutral-200 dark:border-neutral-700 group-hover:border-neutral-900 dark:group-hover:border-white transition-colors shrink-0">
                  <ArrowUpRight size={16} className="text-neutral-400 dark:text-neutral-500 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors" />
                </div>
              </div>
              <span className="mt-auto inline-flex w-fit text-[10px] font-bold text-neutral-400 dark:text-neutral-500 bg-white dark:bg-neutral-900 px-2 py-1 rounded border border-neutral-200 dark:border-neutral-800 transition-colors">
                {project.date}
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
