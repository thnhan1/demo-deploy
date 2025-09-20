import { useTranslation } from 'react-i18next';
import ThemeToggle from "./ThemeToggle";
import LanguageSwitcher from "./LanguageSwitcher";

export const Header = () => {
  const { t } = useTranslation();
  
  const navItems: { label: string; href: string; key: string }[] = [
    { label: t('navigation.home'), href: "#home", key: "home" },
    { label: t('navigation.projects'), href: "#projects", key: "projects" },
    { label: t('navigation.backend'), href: "#backend", key: "backend" },
    { label: t('navigation.frontend'), href: "#frontend", key: "frontend" },
    { label: t('navigation.contact'), href: "#contact", key: "contact" },
  ];

  return (
    <header className="sticky top-0 py-2 z-50 glass-effect border-b border-[var(--color-border)]">
      <div className="apple-container py-4 flex items-center gap-8 justify-between">
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
          <LanguageSwitcher />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};
