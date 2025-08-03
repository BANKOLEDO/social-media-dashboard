"use client";

import { useEffect, useState } from "react";

export default function ToggleSwitch() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="flex items-center justify-between w-full px-4 py-2">
      <h1 className="text-sm font-semibold text-black dark:text-white">
        Dark Mode
      </h1>

      <label className="relative inline-block w-11 h-6 cursor-pointer">
        {/* Invisible checkbox (peer) */}
        <input
          type="checkbox"
          className="sr-only peer"
          checked={!darkMode}
          onChange={() => setDarkMode(!darkMode)}
        />
        {/* Switch Track + Knob */}
        <div className="w-full h-full bg-gray-300 dark:bg-gradient-to-r dark:from-blue-500 dark:to-green-500 rounded-full transition-colors" />
        <div className="absolute top-0.5 left-0.5 w-5 h-5 bg-white dark:bg-gray-800 rounded-full shadow-md transition-transform duration-300 peer-checked:translate-x-full" />
      </label>
    </div>
  );
}
