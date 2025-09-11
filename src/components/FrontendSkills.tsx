import Section from "./Section";

// TODO: Replace placeholder data with actual items from your CV
const frameworks = ["React", "Next.js", "TailwindCSS", "Vite"];
const patterns = [
  "Component-driven",
  "Accessibility",
  "State management",
  "Performance budgets",
];
const tooling = [
  "TypeScript",
  "ESLint",
  "Vitest / Jest"
];
const delivery = ["Responsive UI", "Design systems", "Progressive enhancement"];

const PillList = ({ items }: { items: string[] }) => (
  <ul className="flex flex-wrap gap-2">
    {items.map((i) => (
      <li key={i} className="pill">
        {i}
      </li>
    ))}
  </ul>
);

export const FrontendSkills = () => {
  return (
    <Section
      id="frontend"
      title="Front-end Skills"
      eyebrow="Interface & Experience"
    >
      <div className="grid gap-10 md:grid-cols-2">
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-2">Frameworks</h3>
            <PillList items={frameworks} />
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">Patterns</h3>
            <PillList items={patterns} />
          </div>
        </div>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-2">Tooling</h3>
            <PillList items={tooling} />
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">Delivery Focus</h3>
            <PillList items={delivery} />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default FrontendSkills;
