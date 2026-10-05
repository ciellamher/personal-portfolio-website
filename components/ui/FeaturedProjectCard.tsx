import Image from "next/image";
import { ArrowUpRight, Github } from "lucide-react";
import type { Project } from "@/lib/projects";
import DeviceMockup from "@/components/ui/DeviceMockup";

function ProjectIcon({ project }: { project: Project }) {
  const { logo, circularLogo } = project.featured!;

  return (
    <div className={`w-16 h-16 sm:w-[72px] sm:h-[72px] rounded-[22%] overflow-hidden bg-white shadow-[0_1px_1px_-1px_rgba(0,0,0,0.09),0_2px_2px_-2px_rgba(0,0,0,0.08),0_6px_6px_-3px_rgba(0,0,0,0.07),0_20px_20px_-4px_rgba(0,0,0,0.05)] border border-neutral-200/70 dark:border-neutral-800 ${circularLogo ? "p-[9px] sm:p-[10px]" : ""}`}>
      <Image
        src={logo}
        alt={`${project.name} logo`}
        width={72}
        height={72}
        unoptimized={logo.endsWith(".svg")}
        className={`w-full h-full object-cover ${circularLogo ? "rounded-full" : ""}`}
      />
    </div>
  );
}

export default function FeaturedProjectCard({ project }: { project: Project }) {
  const { slug, tagline } = project.featured!;

  return (
    <article className="flex flex-col items-center text-center bg-neutral-50 dark:bg-neutral-900 rounded-3xl border border-neutral-200 dark:border-neutral-800 px-5 pt-8 pb-6 sm:px-10 sm:pt-10 sm:pb-8 overflow-hidden transition-colors duration-700">
      <ProjectIcon project={project} />
      <h3 className="mt-5 text-[26px] leading-tight sm:text-[34px] font-semibold tracking-[-0.75px] text-neutral-900 dark:text-white">{project.name}</h3>
      <p className="mt-2 max-w-sm text-[15px] sm:text-base text-neutral-500 dark:text-neutral-400">{tagline}</p>

      <div className="mt-6 flex items-center gap-2">
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 h-[42px] px-5 rounded-full bg-neutral-900 dark:bg-white text-[15px] font-semibold text-white dark:text-neutral-900 hover:opacity-85 transition-opacity no-underline"
        >
          Visit site <ArrowUpRight size={16} />
        </a>
        {project.githubLink && (
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.name} on GitHub`}
            className="flex items-center justify-center w-[42px] h-[42px] rounded-full border-[1.5px] border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
          >
            <Github size={18} />
          </a>
        )}
      </div>

      <div className="mt-8 sm:mt-10 w-full max-w-[560px]">
        <DeviceMockup desktopSrc={`/projects/${slug}-desktop.jpg`} mobileSrc={`/projects/${slug}-mobile.jpg`} alt={project.name} />
      </div>
    </article>
  );
}
