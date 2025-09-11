import "aos/dist/aos.css"; // animation styles
import { useEffect } from "react";
import Section from "./Section";

interface Project {
  title: string;
  summary: string;
  tech: string[];
  link?: string;
  repo?: string;
}

const projects: Project[] = [
  {
    title: "API Platform Skeleton",
    summary:
      "Modular backend template featuring clean layering, auth, request validation, metrics & structured logging.",
    tech: ["Go", "PostgreSQL", "Redis", "OpenTelemetry"],
    repo: "#",
  },
  {
    title: "Realtime Notification Service",
    summary:
      "Event-driven microservice delivering fan-out notifications with retry & dead-letter handling.",
    tech: ["Node.js", "Kafka", "Redis", "gRPC"],
    repo: "#",
  },
  {
    title: "Internal Admin Dashboard",
    summary:
      "Minimal operations UI surfacing system metrics, error traces, and audit trails for support team.",
    tech: ["React", "TypeScript", "TailwindCSS", "REST"],
    link: "#",
  },
];

export const Projects = () => {
  useEffect(() => {
    let cancelled = false;
    // dynamic import so bundle only loads AOS on client
    import("aos").then((AOS) => {
      if (cancelled) return;
      AOS.init({
        duration: 750,
        easing: "ease-out-cubic",
        once: false, // allow replay
        mirror: true, // animate on scroll up
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
    <Section id="projects" title="Projects" eyebrow="Selected Work">
      <div className="grid gap-10 md:grid-cols-3">
        {projects.map((p, i) => (
          <div
            key={p.title}
            className="group relative card flex flex-col gap-4 hover:shadow-mdx transition"
            data-aos="fade-up"
            data-aos-delay={i * 120}
            data-aos-once="false"
          >
            <div>
              <h3 className="text-lg font-semibold mb-2 tracking-tight">
                {p.title}
              </h3>
              <p className="text-sm text-soft leading-relaxed">{p.summary}</p>
            </div>
            <ul className="flex flex-wrap gap-2 mt-auto">
              {p.tech.map((t) => (
                <li
                  key={t}
                  className="pill"
                  data-aos="zoom-in"
                  data-aos-delay={Math.min(480, 160 + i * 120)}
                  data-aos-once="false"
                >
                  {t}
                </li>
              ))}
            </ul>
            <div className="flex gap-4 pt-2 text-xs">
              {p.link && (
                <a
                  href={p.link}
                  className="text-soft hover:text-brand transition"
                  data-aos="fade"
                  data-aos-delay={180 + i * 120}
                  data-aos-once="false"
                >
                  Live ↗
                </a>
              )}
              {p.repo && (
                <a
                  href={p.repo}
                  className="text-soft hover:text-brand transition"
                  data-aos="fade"
                  data-aos-delay={220 + i * 120}
                  data-aos-once="false"
                >
                  Code ↗
                </a>
              )}
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.25),transparent_70%)]" />
          </div>
        ))}
      </div>
      <p
        className="text-sm text-soft mt-10 leading-relaxed"
        data-aos="fade-up"
        data-aos-delay={projects.length * 120 + 120}
        data-aos-once="false"
      >
        These are illustrative placeholders. Share the real project titles +
        one-line impact statements (include metrics if possible), and I'll
        refine.
      </p>
    </Section>
  );
};

export default Projects;
