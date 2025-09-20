import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  title: string;
  eyebrow?: string;
  children: ReactNode;
}

export const Section = ({ id, title, eyebrow, children }: SectionProps) => (
  <section id={id} className="relative scroll-mt-24 apple-spacing-lg">
    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--color-border)]/50 to-transparent" />
    <div className="apple-container">
      <div className="mb-16 text-center">
        {eyebrow && (
          <div className="text-sm font-medium text-soft uppercase tracking-widest mb-6">
            {eyebrow}
          </div>
        )}
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight" style={{ color: 'var(--color-text)' }}>
          {title}
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-brand to-brand-accent mx-auto mt-8 rounded-full" />
      </div>
      {children}
    </div>
  </section>
);

export default Section;
