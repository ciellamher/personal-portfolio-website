"use client";
import { useRouter } from 'next/navigation';
import { ArrowLeft, Github } from 'lucide-react';
import { allProjects } from "../../lib/projects";

export default function ProjectsPage() {
  const router = useRouter();
  const finishedProjects = allProjects.filter((project) => project.status === "Finished" || project.status === "Ongoing");

  return (
    <main className="min-h-screen bg-[#FDFDFD] text-neutral-900 py-20 px-6 font-sans">
      <div className="max-w-5xl mx-auto">
        <button onClick={() => router.back()} className="flex items-center gap-2 text-neutral-500 hover:text-neutral-900 transition-colors mb-8 text-sm font-medium cursor-pointer bg-transparent border-0 p-0">
          <ArrowLeft size={16} /> Back to Home
        </button>
        
        <h1 className="text-4xl font-bold mb-12 tracking-tight">All Projects</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {finishedProjects.map((project, i) => (
            <div key={i} className="relative bg-white p-8 rounded-3xl border border-neutral-200 flex flex-col group hover:border-neutral-900 transition-all h-full hover:shadow-sm">
              <div className="flex flex-1 flex-col">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-2">
                    <h2 className="text-2xl font-bold">
                       {project.link !== "#" ? (
                         <a href={project.link} target="_blank" rel="noopener noreferrer" className="before:absolute before:inset-0 focus:outline-none">
                           {project.name}
                         </a>
                       ) : (
                         project.name
                       )}
                    </h2>
                  </div>
                  {project.githubLink ? (
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="relative z-10 p-2 bg-neutral-50 rounded-full text-neutral-400 hover:text-neutral-900 transition-colors pointer-events-auto">
                      <Github size={22} />
                    </a>
                  ) : project.link !== "#" ? (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="relative z-10 p-2 bg-neutral-50 rounded-full text-neutral-400 hover:text-neutral-900 transition-colors pointer-events-auto">
                      <Github size={22} />
                    </a>
                  ) : null}
                </div>
                <p className="text-neutral-600 leading-relaxed mb-6 text-sm">{project.desc}</p>

                {project.keyFeatures?.length ? (
                  <div className="mb-6">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-3">Key Features</p>
                    <ul className="space-y-2">
                      {project.keyFeatures.map((feature) => (
                        <li key={feature} className="text-sm text-neutral-600 leading-relaxed flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-neutral-900 shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}

                <span className="mt-auto inline-flex w-fit text-[10px] font-bold text-neutral-400 bg-white px-2 py-1 rounded border border-neutral-200">
                  {project.date}
                </span>
              </div>

              <div className="flex flex-wrap gap-2 mt-6">
                {project.tech.map((t) => (
                  <span key={t} className="px-3 py-1 bg-neutral-50 border border-neutral-100 text-[10px] font-bold text-neutral-500 rounded-lg">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}