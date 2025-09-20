import "aos/dist/aos.css"; // animation styles
import { useEffect } from "react";
import { useTranslation } from 'react-i18next';
import Section from "./Section";
import projectsData from '../config/projects.json';

interface Project {
  id: string;
  title: string;
  summary: string;
  tech: string[];
  link?: string;
  repo?: string;
  demo?: string;
  featured: boolean;
  year: number;
}

export const Projects = () => {
  const { t } = useTranslation();
  const projects = projectsData as Project[];
  
  useEffect(() => {
    let cancelled = false;
    // dynamic import so bundle only loads AOS on client
    import("aos").then((AOS) => {
      if (cancelled) return;
      AOS.init({
        duration: 100,
        easing: "ease-in-cubic",
        once: true, // allow replay
        // mirror: true, // animate on scroll up
        offset: 80,
      });
      // refresh in case images/fonts late
      setTimeout(() => {
        try {
          AOS.refreshHard();
        } catch {
          // ignore
        }
      }, 400);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <Section id="projects" title={t('projects.title')} eyebrow={t('projects.subtitle')}>
      <div className="apple-grid">
        {projects.filter(p => p.featured).map((p, i) => (
          <div
            key={p.id}
            className="group relative apple-card flex flex-col gap-6"
            data-aos="fade-up"
            data-aos-delay={i * 200}
            data-aos-duration="600"
            data-aos-easing="ease-out-cubic"
          >
            <div className="flex justify-between items-start">
                  <h3 className="text-xl font-bold tracking-tight" style={{ color: 'var(--color-text)' }}>
                {p.title}
              </h3>
              <span className="apple-badge text-xs font-medium">{p.year}</span>
            </div>
            
            <p className="text-base text-soft leading-relaxed flex-1">{p.summary}</p>
            
            <div className="space-y-4">
              <ul className="flex flex-wrap gap-3">
                {p.tech.map((tech) => (
                  <li
                    key={tech}
                    className="apple-badge"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
              
              <div className="flex gap-6 pt-2">
                {p.demo && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand hover:text-brand-accent font-medium text-sm flex items-center gap-2 group"
                  >
                    <span>{t('projects.cta.live')}</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
                {p.repo && (
                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand hover:text-brand-accent font-medium text-sm flex items-center gap-2 group"
                  >
                    <span>{t('projects.cta.code')}</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
            
            {/* Hover effect overlay */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 pointer-events-none" />
          </div>
        ))}
      </div>
      
      <div 
        className="text-center mt-16"
        data-aos="fade-out"
        data-aos-easing="ease-in-cubic"
        data-aos-delay="350"
        data-aos-duration="600"
      >
        <p className="text-base text-soft leading-relaxed max-w-3xl mx-auto">
          {t('projects.description')}
        </p>
      </div>
    </Section>
  );
};

export default Projects;
