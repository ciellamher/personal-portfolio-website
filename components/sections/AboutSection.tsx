import { Briefcase } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="bg-white dark:bg-neutral-900 p-6 md:p-8 rounded-3xl border border-neutral-200 dark:border-neutral-800 flex-1 transition-colors duration-700">
      <h3 className="text-xl font-bold flex items-center gap-2 mb-6 text-neutral-900 dark:text-white transition-colors duration-700">
        <Briefcase size={22} className="text-neutral-900 dark:text-white transition-colors duration-700" /> About
      </h3>
      <div className="text-neutral-600 dark:text-neutral-400 text-base leading-relaxed space-y-4 transition-colors duration-700">
        <p>
          Hi! I'm Graciella, a Computer Science student at Holy Angel University. I love exploring and embracing new and innovative ideas in different fields. I love the fashion, art, and culture as much as I love the beauty of the field of technology, science, and business.
        </p>
        <p>
          I find joy in being creative with designing software, user interfaces, and new technologies, which drives my passion for computer science. I enjoy tackling challenges and coming up with innovative solutions through careful and strategic designs.
        </p>
        <p>
          Wherever I am and whatever I do, I keep an open mind and always strive to do my very best. I'm always on the lookout for new ways to learn and grow, and I approach each opportunity with a positive and appreciative mindset.
        </p>
      </div>
    </section>
  );
}
