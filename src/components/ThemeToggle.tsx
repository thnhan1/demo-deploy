import { useEffect, useState } from "react";

type Theme = "light" | "dark";

const order: Theme[] = ["light", "dark"]; // start from light for cycling consistency
const next = (t: Theme): Theme => order[(order.indexOf(t) + 1) % order.length];

const ThemeToggle = () => {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const current = document.documentElement.dataset.theme as Theme | undefined;
    if (current && (order as string[]).includes(current)) setTheme(current);
    else setTheme("light");
  }, []);

  const toggle = () => {
    const t = next(theme);
    setTheme(t);
    document.documentElement.dataset.theme = t;
    localStorage.setItem("theme", t);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      className="focus-ring relative inline-flex items-center justify-center w-10 h-10 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] backdrop-filter backdrop-blur-xl shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
    >
      <div className="relative w-5 h-5 overflow-hidden">
        {/* Sun Icon */}
        <svg
          className={`absolute inset-0 w-5 h-5 text-yellow-500 transition-all duration-300 ${
            theme === "light" ? "opacity-100 rotate-0 scale-100" : "opacity-0 rotate-90 scale-75"
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="5" />
          <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
        </svg>
        
        {/* Moon Icon */}
        <svg
          className={`absolute inset-0 w-5 h-5 text-blue-400 transition-all duration-300 ${
            theme === "dark" ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-75"
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      </div>
      
      {/* Animated background circle */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400/10 to-blue-400/10 opacity-0 hover:opacity-100 transition-opacity duration-200" />
    </button>
  );
};

export default ThemeToggle;
