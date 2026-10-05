import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import { getTemplate, templates } from "@/lib/templates";
import TemplatePreview from "@/components/ui/TemplatePreview";
import TemplateCard from "@/components/ui/TemplateCard";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return templates.map((template) => ({ slug: template.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const template = getTemplate((await params).slug);
  if (!template) return {};
  return { title: `${template.name} Notion Template`, description: template.tagline };
}

export default async function TemplatePage({ params }: Props) {
  const template = getTemplate((await params).slug);
  if (!template) notFound();

  const Icon = template.icon;
  const moreTemplates = templates.filter((other) => other.slug !== template.slug);

  return (
    <main className="min-h-screen bg-[#FDFDFD] dark:bg-neutral-900 text-neutral-900 dark:text-white py-16 sm:py-20 px-4 sm:px-6 font-sans transition-colors duration-700">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 text-sm font-medium text-neutral-500 dark:text-neutral-400">
          <Link href="/templates" className="hover:text-neutral-900 dark:hover:text-white transition-colors">Templates</Link>
          <ChevronRight size={14} />
          <span className="text-neutral-900 dark:text-white">{template.category}</span>
        </nav>

        {/* Header */}
        <div className="mt-8 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <div className="w-14 h-14 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 flex items-center justify-center shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
              <Icon size={28} strokeWidth={2.2} />
            </div>
            <h1 className="mt-5 text-4xl sm:text-5xl font-semibold tracking-[-1.5px]">{template.name}</h1>
            <p className="mt-2 text-lg text-neutral-500 dark:text-neutral-400">{template.tagline}</p>
            <p className="mt-2 text-xl font-semibold">Free</p>
          </div>

          <div className="flex flex-col gap-2 w-full md:w-56 shrink-0">
            <a
              href={template.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center h-11 rounded-full bg-neutral-900 dark:bg-white text-[15px] font-semibold text-white dark:text-neutral-900 hover:opacity-85 transition-opacity no-underline"
            >
              Get the Template
            </a>
            <a
              href={template.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 h-11 rounded-full border-[1.5px] border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-950 text-[15px] font-semibold hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors no-underline"
            >
              View Full Template <ArrowUpRight size={16} />
            </a>
          </div>
        </div>

        {/* Preview */}
        <div className="mt-10 overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-[0_20px_50px_-24px_rgba(0,0,0,0.2)]">
          <TemplatePreview template={template} sizes="(min-width: 896px) 896px, 100vw" />
        </div>

        {/* About */}
        <section className="mt-16 sm:mt-20">
          <h2 className="text-3xl font-semibold tracking-[-0.75px]">About template</h2>
          <div className="mt-5 space-y-4 text-[17px] leading-relaxed text-neutral-700 dark:text-neutral-300">
            {template.description.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <h3 className="mt-8 text-xl font-semibold">What&apos;s included?</h3>
          <ul className="mt-3 list-disc pl-5 space-y-1.5 text-[17px] text-neutral-700 dark:text-neutral-300">
            {template.included.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <dl className="mt-10 flex gap-10">
            <div>
              <dt className="text-sm text-neutral-500 dark:text-neutral-400">Category</dt>
              <dd className="mt-1 font-semibold">{template.category}</dd>
            </div>
            <div>
              <dt className="text-sm text-neutral-500 dark:text-neutral-400">Price</dt>
              <dd className="mt-1 font-semibold">Free</dd>
            </div>
          </dl>
        </section>

        {/* More templates */}
        <section className="mt-16 sm:mt-20">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-semibold tracking-[-0.75px]">More templates</h2>
            <Link href="/templates" className="flex items-center gap-1 text-[17px] font-medium text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors">
              View all <ChevronRight size={18} />
            </Link>
          </div>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-8">
            {moreTemplates.map((other) => (
              <TemplateCard key={other.slug} template={other} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
