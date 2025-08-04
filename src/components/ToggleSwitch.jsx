'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ToggleSwitch() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null; // prevent SSR mismatch

  const isDark = theme === 'dark' || (theme === 'system' && systemTheme === 'dark');

  return (
    <div className="flex items-center justify-between md:justify-normal md:gap-8 w-full px-4 py-2">
      <h1 className="text-sm font-semibold text-black dark:text-gray-400">
        Dark Mode
      </h1>

      <label className="relative inline-block w-11 h-6 cursor-pointer">
        <input
          type="checkbox"
          className="sr-only peer"
          checked={isDark}
          onChange={() => setTheme(isDark ? 'light' : 'dark')}
        />
        <div className="w-full h-full bg-gray-300 dark:bg-gradient-to-r dark:from-blue-500 dark:to-green-500 rounded-full transition-colors hover:bg-gradient-to-r hover:from-blue-500 hover:to-green-500" />
        <div className="absolute top-0.5 left-0.5 w-5 h-5 bg-white dark:bg-gray-800 rounded-full shadow-md transition-transform duration-300 peer-checked:translate-x-full" />
      </label>
    </div>
  );
}
