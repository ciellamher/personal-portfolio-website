"use client";

import { GitHubCalendar } from 'react-github-calendar';
import { useTheme } from 'next-themes';
import { Github } from 'lucide-react';
import React, { useState, useEffect } from 'react';

export default function GithubSection() {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = theme === 'system' ? resolvedTheme : theme;

  return (
    <section className="bg-white dark:bg-neutral-900 p-6 md:p-8 rounded-3xl border border-neutral-200 dark:border-neutral-800 transition-colors duration-700 overflow-hidden flex flex-col items-center">
      <div className="w-full flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold flex items-center gap-2 text-neutral-900 dark:text-white transition-colors duration-700">
          <Github size={22} className="text-neutral-900 dark:text-white transition-colors duration-700" /> Contributions
        </h3>
        <a 
          href="https://github.com/ciellamher" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-sm font-mono text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors"
        >
          @ciellamher ↗
        </a>
      </div>

      <div className="w-full overflow-x-auto scrollbar-hide flex justify-start lg:justify-center pb-2">
        <div className="min-w-[800px] flex justify-start lg:justify-center">
          {mounted && (
            <GitHubCalendar
              username="ciellamher"
              blockSize={14}
              blockMargin={6}
              colorScheme={currentTheme === "dark" ? "dark" : "light"}
              theme={{
                light: ['#f5f5f5', '#d4d4d4', '#a3a3a3', '#525252', '#171717'],
                dark: ['#3f3f46', '#71717a', '#a1a1aa', '#d4d4d8', '#ffffff'],
              }}
              renderBlock={(block, activity) => {
                const { x, y, width, height, fill } = block.props;
                // Center coordinates
                const cx = Number(x) + Number(width) / 2;
                const cy = Number(y) + Number(height) / 2;
                
                // Varying circle sizes based on activity level (0 to 4)
                const levels = [2, 3.5, 5, 6, 7]; // radii
                const r = levels[activity.level] || 2;
                
                return (
                  <circle
                    key={activity.date}
                    cx={cx}
                    cy={cy}
                    r={r}
                    fill={fill}
                    className="transition-all duration-300 hover:opacity-80"
                    data-tooltip-id="react-tooltip"
                    data-tooltip-content={`${activity.count} contributions on ${activity.date}`}
                  />
                );
              }}
            />
          )}
        </div>
      </div>
    </section>
  );
}
