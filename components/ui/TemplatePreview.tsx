import Image from "next/image";
import type { NotionTemplate } from "@/lib/templates";

// Template thumbnail. Shows the template's image when it has one, otherwise a
// Notion-style placeholder (icon, title, sidebar links, and a table).
// Sizes use container query units so the same markup works as a card or a hero.
export default function TemplatePreview({ template, sizes = "(min-width: 1024px) 360px, 90vw" }: { template: NotionTemplate; sizes?: string }) {
  if (template.image) {
    return (
      <div className="relative aspect-[16/11] w-full">
        <Image src={template.image} alt={`${template.name} preview`} fill sizes={sizes} className="object-cover object-top" />
      </div>
    );
  }

  const Icon = template.icon;

  return (
    <div className="@container aspect-[16/11] w-full bg-white dark:bg-neutral-900 px-[8cqw] pt-[7cqw] select-none" aria-hidden="true">
      <Icon className="w-[6cqw] h-[6cqw] text-neutral-800 dark:text-neutral-200" strokeWidth={2.2} />
      <p className="mt-[3cqw] text-[4.4cqw] font-semibold tracking-tight text-neutral-900 dark:text-white truncate">{template.name}</p>

      <div className="mt-[4cqw] grid grid-cols-[1fr_2.4fr] gap-[5cqw]">
        <div className="space-y-[1.8cqw]">
          <div className="h-[1.6cqw] w-[70%] rounded-full bg-neutral-300 dark:bg-neutral-700" />
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="flex items-center gap-[1.2cqw]">
              <div className="h-[2.2cqw] w-[2.2cqw] rounded-[0.5cqw] bg-neutral-200 dark:bg-neutral-800" />
              <div className="h-[1.3cqw] rounded-full bg-neutral-200 dark:bg-neutral-800" style={{ width: `${[60, 45, 70, 50][i]}%` }} />
            </div>
          ))}
        </div>

        <div className="space-y-[1.8cqw]">
          <div className="h-[1.6cqw] w-[30%] rounded-full bg-neutral-300 dark:bg-neutral-700" />
          <div className="flex gap-[1.5cqw] border-b border-neutral-200 dark:border-neutral-800 pb-[1.2cqw]">
            {[18, 22, 16].map((w, i) => (
              <div key={i} className={`h-[1.3cqw] rounded-full ${i === 0 ? "bg-neutral-400 dark:bg-neutral-600" : "bg-neutral-200 dark:bg-neutral-800"}`} style={{ width: `${w}%` }} />
            ))}
          </div>
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="flex items-center gap-[1.5cqw]">
              <div className="h-[2.2cqw] w-[2.2cqw] rounded-full border border-neutral-300 dark:border-neutral-700" />
              <div className="h-[1.3cqw] rounded-full bg-neutral-200 dark:bg-neutral-800" style={{ width: `${[48, 36, 54, 40][i]}%` }} />
              <div className="ml-auto h-[2.2cqw] w-[14%] rounded-[0.6cqw] bg-neutral-100 dark:bg-neutral-800/70" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
