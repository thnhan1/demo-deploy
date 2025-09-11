import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  title: string;
  eyebrow?: string;
  children: ReactNode;
}

export const Section = ({ id, title, eyebrow, children }: SectionProps) => (
  <section id={id} className="relative scroll-mt-24 py-24 md:py-32">
    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--color-border)]/70 to-transparent" />
    <div className="relative max-w-7xl mx-auto px-6">
      <div className="mb-12">
        {eyebrow && <div className="section-eyebrow mb-4">{eyebrow}</div>}
        <h2 className="section-title text-3xl md:text-4xl tracking-tight">
          {title}
        </h2>
      </div>
      {children}
    </div>
  </section>
);

export default Section;
