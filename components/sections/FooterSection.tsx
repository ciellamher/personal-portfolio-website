export default function FooterSection() {
  return (
    <footer className="min-h-screen flex flex-col items-center justify-center w-full bg-transparent overflow-hidden transition-colors duration-700">
      <h4 className="text-sm font-bold text-neutral-900 dark:text-white mb-1 transition-colors duration-700">Graciella Jimenez</h4>
      <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-6 transition-colors duration-700">Computer Science Student - Philippines</p>

      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm font-medium text-neutral-600 dark:text-neutral-400 mb-3 transition-colors duration-700">
        <a href="#top" className="hover:text-neutral-900 dark:hover:text-white transition-colors no-underline">About</a>
        <a href="/projects" className="hover:text-neutral-900 dark:hover:text-white transition-colors no-underline">Projects</a>
        <a href="#contact" className="hover:text-neutral-900 dark:hover:text-white transition-colors no-underline">Contact</a>
        <a href="#top" className="hover:text-neutral-900 dark:hover:text-white transition-colors no-underline">Back to top</a>
      </div>
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm font-medium text-neutral-600 dark:text-neutral-400 mb-16 sm:mb-24 transition-colors duration-700">
        <a href="https://github.com/ciellamher" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-900 dark:hover:text-white transition-colors no-underline">GitHub</a>
        <a href="https://www.linkedin.com/in/ciellamher/" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-900 dark:hover:text-white transition-colors no-underline">LinkedIn</a>
        <a href="https://www.facebook.com/gramenez/" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-900 dark:hover:text-white transition-colors no-underline">Facebook</a>
      </div>

      <div className="w-full mb-10 md:mb-16 px-4">
        {/* Fine-tuned to 9.5vw so the 16 characters perfectly fit within the screen width without overflowing, ensuring perfect centering */}
        <h1 className="w-full text-[9.5vw] leading-[0.8] font-black tracking-tighter text-neutral-900 dark:text-white select-none text-center transition-colors duration-700">
          graciellajimenez
        </h1>
      </div>

      <p className="text-xs text-neutral-400 dark:text-neutral-600 font-medium mb-8 transition-colors duration-700">
        © 2026 Graciella Jimenez. All rights reserved.
      </p>
    </footer>
  );
}
