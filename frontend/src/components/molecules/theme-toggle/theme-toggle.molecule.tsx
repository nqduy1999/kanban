import { useTheme } from "next-themes";
import { useState, useEffect, FC } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/outline";
import { Button } from "@/components/atoms";

interface IThemeToggle {
  className?: string;
}

const defaultProps: IThemeToggle = {
  className:
    "w-8 h-8 rounded-lg bg-gray-50 dark:bg-slate-800 flex items-center justify-center hover:ring-2 ring-blue-400 transition-all duration-300 focus:outline-none",
};

const ThemeToggler: FC<IThemeToggle> = ({ className }) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <Button
      className={className as string}
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

ThemeToggler.defaultProps = defaultProps;
export { ThemeToggler };
