import { Instagram } from "lucide-react";

export default function BeyondCodingSection() {
  return (
    <section className="bg-white dark:bg-neutral-900 p-6 md:p-8 rounded-3xl border border-neutral-200 dark:border-neutral-800 h-full flex flex-col justify-between transition-colors duration-700">
      <div>
        <h3 className="text-xl font-bold flex items-center gap-2 mb-4 text-neutral-900 dark:text-white transition-colors duration-700">
          <img 
            src="https://images-eds-ssl.xboxlive.com/image?url=4rt9.lXDC4H_93laV1_eHHFT949fUipzkiFOBH3fAiZZUCdYojwUyX2aTonS1aIwMrx6NUIsHfUHSLzjGJFxxjLA80kau9tjXOxhlZk5VV.0ipITXR7kEC_uNxEet0iuGwViGGXU3GB.AKmUCtG2RYDx3s6u611uyhUGN5NMToo-&format=source" 
            alt="Beyond Coding Icon" 
            className="w-[22px] h-[22px] object-contain dark:invert transition-all duration-700"
          /> Beyond Coding
        </h3>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed mb-6 transition-colors duration-700">
          When not writing code, I organize large-scale campus events and serve as a Notion Campus Leader.
          I enjoy turning ideas into structured experiences, whether that means planning programs, refining workflows, or helping teams stay aligned.
          I am especially drawn to community-building, digital productivity, and creating clean systems that make work feel lighter and more intentional.
        </p>
      </div>

      <a
        href="https://hau-community.notion.site/?pvs=74"
        target="_blank"
        rel="noopener noreferrer"
        className="p-4 bg-neutral-50 dark:bg-neutral-950 rounded-xl border border-neutral-200 dark:border-neutral-800 block hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all duration-300 group no-underline"
      >
        <p className="text-[10px] font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-widest mb-1 group-hover:text-neutral-600 dark:group-hover:text-neutral-400 transition-colors">
          Current Focus
        </p>
        <div className="flex justify-between items-center">
          <p className="text-sm font-bold text-neutral-900 dark:text-white transition-colors">Building "The Notion Campus"</p>
          <Instagram size={16} className="text-neutral-400 dark:text-neutral-500 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors" />
        </div>
      </a>
    </section>
  );
}
