import { useTranslation } from 'react-i18next';
import Section from "./Section";
import technologiesData from '../config/technologies.json';

interface Technology {
  name: string;
  level: string;
  description: string;
  icon: string;
  category: string;
}

const TechCard = ({ tech }: { tech: Technology }) => (
  <div className="apple-card p-4 hover:scale-105 transition-all duration-300 group">
    <div className="flex items-center gap-3 mb-3">
      <span className="text-xl group-hover:scale-110 transition-transform duration-200">{tech.icon}</span>
      <div className="flex-1">
            <h4 className="font-bold text-sm leading-tight" style={{ color: 'var(--color-text)' }}>{tech.name}</h4>
        <span className="text-xs text-soft font-medium">{tech.level}</span>
      </div>
    </div>
    <p className="text-xs text-soft leading-relaxed">{tech.description}</p>
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
  </div>
);

export const FrontendSkills = () => {
  const { t } = useTranslation();
  const frontendTechs = technologiesData.frontend as Technology[];
  
  // Group technologies by category
  const languages = frontendTechs.filter(t => t.category === 'language');
  const frameworks = frontendTechs.filter(t => t.category === 'framework');
  const styling = frontendTechs.filter(t => t.category === 'styling');
  const tooling = frontendTechs.filter(t => t.category === 'tooling');
  
  return (
    <Section
      id="frontend"
      title={t('skills.frontend.title')}
      eyebrow={t('skills.frontend.subtitle')}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Languages Column */}
        <div className="space-y-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--color-text)' }}>Languages</h3>
            <p className="text-xs text-soft">Core languages</p>
          </div>
          <div className="space-y-3">
            {languages.map((tech) => (
              <TechCard key={tech.name} tech={tech} />
            ))}
          </div>
        </div>
        
        {/* Frameworks Column */}
        <div className="space-y-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--color-text)' }}>Frameworks</h3>
            <p className="text-xs text-soft">UI frameworks</p>
          </div>
          <div className="space-y-3">
            {frameworks.map((tech) => (
              <TechCard key={tech.name} tech={tech} />
            ))}
          </div>
        </div>
        
        {/* Styling Column */}
        <div className="space-y-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--color-text)' }}>Styling</h3>
            <p className="text-xs text-soft">CSS & design</p>
          </div>
          <div className="space-y-3">
            {styling.map((tech) => (
              <TechCard key={tech.name} tech={tech} />
            ))}
          </div>
        </div>
        
        {/* Tooling Column */}
        <div className="space-y-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--color-text)' }}>Tooling</h3>
            <p className="text-xs text-soft">Build tools</p>
          </div>
          <div className="space-y-3">
            {tooling.map((tech) => (
              <TechCard key={tech.name} tech={tech} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default FrontendSkills;
