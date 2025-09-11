import Section from "./Section";

// TODO: Replace placeholder data with actual items from your CV
const coreLanguages = ["Java", "Node.js (TypeScript)", "Python", "SQL"];
const platforms = ["AWS", "Google Cloud Platform (GCP)", "Docker", "RabbitMQ"];
const architecture = [
  "MVC",
  "RESTful APIs",
  "Domain-Driven Design",
  "Microservices",
  "Event-driven",
]; // Placeholder
const practices = [
  "Unit / Integration Testing",
  "Observability (metrics, tracing)",
  "Performance Profiling",
]; // Placeholder

const PillList = ({ items }: { items: string[] }) => (
  <ul className="flex flex-wrap gap-2">
    {items.map((i) => (
      <li key={i} className="pill">
        {i}
      </li>
    ))}
  </ul>
);

export const BackendSkills = () => {
  return (
    <Section
      id="backend"
      title="Back-end Skills"
      eyebrow="Systems & Reliability"
    >
      <div className="grid gap-10 md:grid-cols-2">
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-2">Core Languages</h3>
            <PillList items={coreLanguages} />
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">Platforms & Infra</h3>
            <PillList items={platforms} />
          </div>
        </div>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-2">Architecture</h3>
            <PillList items={architecture} />
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">Practices</h3>
            <PillList items={practices} />
          </div>
        </div>
      </div>
      <p className="text-sm text-soft mt-10 max-w-3xl leading-relaxed"></p>
    </Section>
  );
};

export default BackendSkills;
