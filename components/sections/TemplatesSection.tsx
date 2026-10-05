import Link from "next/link";
import { ChevronRight, LayoutTemplate } from "lucide-react";
import { templates } from "@/lib/templates";
import TemplateCard from "@/components/ui/TemplateCard";

export default function TemplatesSection() {
  return (
    <section id="templates" className="bg-white dark:bg-neutral-900 p-6 md:p-8 rounded-3xl border border-neutral-200 dark:border-neutral-800 transition-colors duration-700">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-xl font-bold flex items-center gap-2 text-neutral-900 dark:text-white transition-colors duration-700">
          <LayoutTemplate size={22} /> Notion Templates
        </h3>
        <Link href="/templates" className="text-sm font-medium text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white flex items-center gap-1 transition-colors duration-700">
          View All <ChevronRight size={14} />
        </Link>
      </div>
      <p className="mb-6 text-sm text-neutral-500 dark:text-neutral-400">Free Notion setups I made to help students stay organized.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
        {templates.map((template) => (
          <TemplateCard key={template.slug} template={template} />
        ))}
      </div>
    </section>
  );
}
