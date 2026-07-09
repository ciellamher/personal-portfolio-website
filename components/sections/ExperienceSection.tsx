import Link from 'next/link';
import { Briefcase, ChevronRight } from "lucide-react";
import { experiences } from "@/lib/experience";

export default function ExperienceSection() {
  return (
    <section id="experience" className="h-full w-full bg-white dark:bg-neutral-900 p-6 md:p-8 rounded-3xl border border-neutral-200 dark:border-neutral-800 flex flex-col transition-colors duration-700">
      <div className="flex justify-between items-center mb-10">
        <h3 className="text-xl font-bold flex items-center gap-2 text-neutral-900 dark:text-white transition-colors duration-700">
          <Briefcase size={22} className="text-neutral-900 dark:text-white transition-colors duration-700" /> Experience
        </h3>
        <Link href="/experience" className="text-sm font-medium text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white flex items-center gap-1 transition-colors duration-700 relative z-20 cursor-pointer">
          View All <ChevronRight size={14} />
        </Link>
      </div>

      <div className="relative ml-3 border-l-2 border-neutral-100 dark:border-neutral-800 space-y-10 pb-4 transition-colors duration-700">
        {experiences.slice(0, 10).map((item, i) => (
          <div key={i} className="relative pl-10 group">
            {/* Timeline Dot: Black for active, Grey for past */}
            <div className={`absolute -left-[9px] top-1 h-4 w-4 rounded-full border-4 border-white dark:border-neutral-900 transition-transform group-hover:scale-125 
            ${item.active ? 'bg-neutral-900 dark:bg-white' : 'bg-neutral-200 dark:bg-neutral-700'}`}
            />

            <div className="grid grid-cols-[minmax(0,1fr)_auto] gap-3 items-start cursor-default">
              <div className="space-y-1 min-w-0">
                <h4 className={`font-semibold text-sm leading-snug transition-colors 
                ${item.active ? 'text-neutral-900 dark:text-white' : 'text-neutral-600 dark:text-neutral-400'}`}>
                  {item.title}
                </h4>
                <p className={`text-xs font-medium leading-snug ${item.active ? 'text-neutral-600 dark:text-neutral-400' : 'text-neutral-500 dark:text-neutral-500'}`}>
                  {item.org}
                </p>
              </div>

              {/* Year Badge */}
              <span className={`text-[10px] font-semibold border px-3 py-1 rounded-full whitespace-nowrap transition-colors duration-700
                ${item.active ? 'text-neutral-600 dark:text-neutral-300 bg-neutral-50 dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700' : 'text-neutral-400 dark:text-neutral-500 bg-transparent border-neutral-200 dark:border-neutral-800'}`}>
                {item.year}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
