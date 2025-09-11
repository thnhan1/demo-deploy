const nav = [
  { label: "Home", href: "#home" },
  { label: "Back-end", href: "#backend" },
  { label: "Front-end", href: "#frontend" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="relative mt-24 border-t border-base surface overflow-hidden">
      <div className="pointer-events-none absolute inset-0 subtle-grid opacity-30" />
      <div className="relative max-w-7xl mx-auto px-6 py-14 grid gap-10 md:grid-cols-3">
        <div>
          <div className="flex items-baseline gap-2 mb-4 select-none text-soft">
            <span className="ink-brush-accent text-brand">N</span>
            <span className="text-lg font-medium tracking-wide">Nhan Tran</span>
          </div>
          <p className="text-sm text-soft leading-relaxed max-w-sm">
            Building reliable backend services & minimal interfaces. Clean code,
            measurable performance, calm aesthetics.
          </p>
        </div>
        <nav className="text-sm flex flex-wrap gap-x-6 gap-y-3 md:justify-center text-soft">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="hover:text-brand transition-colors"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <div className="space-y-4 md:text-right text-sm text-soft">
          <div className="font-medium text-brand">Get in touch</div>
          <a
            href="mailto:youremail@example.com"
            className="hover:text-brand break-all"
          >
            nhandev100@example.com
          </a>
          <div className="pt-4 text-faint text-xs">
            © {year} Nhan Tran. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
