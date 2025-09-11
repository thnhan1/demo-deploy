import { useEffect, useState } from "react";

type Theme = "warm" | "dark";

const order: Theme[] = ["dark", "warm"]; // start from dark for cycling consistency
const next = (t: Theme): Theme => order[(order.indexOf(t) + 1) % order.length];

const ThemeToggle = () => {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const current = document.documentElement.dataset.theme as Theme | undefined;
    if (current && (order as string[]).includes(current)) setTheme(current);
    else setTheme("dark");
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
      className="focus-ring theme-switch-btn relative inline-flex items-center gap-2 px-4 py-2 rounded-full border border-base surface text-[13px] text-soft shadow-smx hover:shadow-mdx transition"
      aria-label="Toggle theme"
    >
      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-brand/20 text-brand text-xs font-medium">
        {theme === "dark" && "🌙"}
        {theme === "warm" && "☀"}
      </span>
      <span className="capitalize">{theme}</span>
    </button>
  );
};

export default ThemeToggle;
