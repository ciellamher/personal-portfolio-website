import Link from "next/link";
import type { NotionTemplate } from "@/lib/templates";
import TemplatePreview from "@/components/ui/TemplatePreview";

export default function TemplateCard({ template }: { template: NotionTemplate }) {
  return (
    <Link href={`/templates/${template.slug}`} className="group block no-underline">
      <div className="overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_12px_30px_-12px_rgba(0,0,0,0.18)]">
        <TemplatePreview template={template} />
      </div>
      <div className="mt-3 flex items-baseline justify-between gap-3 px-0.5">
        <h3 className="text-[17px] font-medium tracking-[-0.25px] text-neutral-900 dark:text-white truncate">{template.name}</h3>
        <span className="shrink-0 text-[15px] text-neutral-500 dark:text-neutral-400">Free</span>
      </div>
    </Link>
  );
}
