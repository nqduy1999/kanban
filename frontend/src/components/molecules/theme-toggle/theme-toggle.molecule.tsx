import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/outline";
import { Button } from "@/components/atoms";

const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <Button
      className="w-8 h-8 bg-gray-50 rounded-lg dark:bg-slate-800 flex items-center justify-center hover:ring-2 ring-blue-400 transition-all duration-300 focus:outline-none"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Toggle Dark Mode"
    >
      {theme !== "dark" ? (
        <MoonIcon className="text-blue-500 w-5 h-5" />
      ) : (
        <SunIcon className="text-blue-400 w-5 h-5" />
      )}
    </Button>
  );
};

export { ThemeToggler };
