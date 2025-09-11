import ThemeToggle from "./ThemeToggle";

export const Header = () => {
  const navItems: { label: string; href: string }[] = [
    { label: "Home", href: "#home" },
    { label: "Back-end", href: "#backend" },
    { label: "Front-end", href: "#frontend" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-40 backdrop-blur-xl surface border-b border-base">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center gap-8 justify-between">
        <a href="#home" className="group select-none flex items-center gap-2">
          <span className="ink-brush-accent text-brand">N</span>
          <span className="text-lg font-medium tracking-wide text-soft group-hover:text-brand transition-colors">
            Nhan Tran
          </span>
          <span className="sr-only">Go to home</span>
        </a>
        <nav className="hidden md:flex items-center gap-9 text-[13px] font-medium">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative font-sans hover:text-brand transition-colors after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 hover:after:w-full after:bg-brand/70 after:transition-[width] after:duration-300"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};
