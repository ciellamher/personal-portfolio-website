"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { templates } from "@/lib/templates";
import TemplateCard from "@/components/ui/TemplateCard";

const categories = ["All", ...Array.from(new Set(templates.map((template) => template.category)))];

export default function TemplatesPage() {
  const router = useRouter();
  const [category, setCategory] = useState("All");
  const shown = category === "All" ? templates : templates.filter((template) => template.category === category);

  return (
    <main className="min-h-screen bg-[#FDFDFD] dark:bg-neutral-900 text-neutral-900 dark:text-white py-16 sm:py-20 px-4 sm:px-6 font-sans transition-colors duration-700">
      <div className="max-w-5xl mx-auto">
        <button onClick={() => router.push("/#templates")} className="flex items-center gap-2 text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors mb-8 text-sm font-medium cursor-pointer bg-transparent border-0 p-0">
          <ArrowLeft size={16} /> Back to Home
        </button>

        <h1 className="text-4xl sm:text-5xl font-semibold tracking-[-1.5px]">Notion Templates</h1>
        <p className="mt-3 max-w-md text-lg text-neutral-500 dark:text-neutral-400">Free, ready-made Notion setups to organize your school and life.</p>

        <div className="mt-8 flex flex-wrap gap-2">
          {categories.map((name) => (
            <button
              key={name}
              onClick={() => setCategory(name)}
              className={`h-9 px-4 rounded-full text-sm font-medium border transition-colors cursor-pointer ${
                category === name
                  ? "bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 border-transparent"
                  : "bg-white dark:bg-neutral-950 text-neutral-700 dark:text-neutral-300 border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-800"
              }`}
            >
              {name}
            </button>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
          {shown.map((template) => (
            <TemplateCard key={template.slug} template={template} />
          ))}
        </div>
      </div>
    </main>
  );
}
