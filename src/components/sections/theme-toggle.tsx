"use client";

import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const saved = localStorage.getItem("theme") as "light" | "dark" | null;
    if (saved) {
      setTheme(saved);
      document.documentElement.classList.toggle("dark", saved === "dark");
    }
  }, []);

  const toggleTheme = (newTheme: "light" | "dark") => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <div className="flex items-center rounded-full bg-gray-100 dark:bg-gray-800 p-1 shadow-inner">
      {/* Light Mode */}
      <button
        onClick={() => toggleTheme("light")}
        className={`flex items-center justify-center h-8 w-8 rounded-full transition-all ${
          theme === "light"
            ? "bg-white text-yellow-500 shadow"
            : "text-gray-400"
        }`}
      >
        <Sun className="h-5 w-5" />
      </button>

      {/* Dark Mode */}
      <button
        onClick={() => toggleTheme("dark")}
        className={`flex items-center justify-center h-8 w-8 rounded-full transition-all ${
          theme === "dark"
            ? "bg-gray-700 text-blue-400 shadow"
            : "text-gray-400"
        }`}
      >
        <Moon className="h-5 w-5" />
      </button>
    </div>
  );
};

export default ThemeToggle;
