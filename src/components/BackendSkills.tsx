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

export const BackendSkills = () => {
  const { t } = useTranslation();
  const backendTechs = technologiesData.backend as Technology[];
  
  // Group technologies by category
  const languages = backendTechs.filter(t => t.category === 'language');
  const frameworks = backendTechs.filter(t => t.category === 'framework');
  const databases = backendTechs.filter(t => t.category === 'database');
  const devops = backendTechs.filter(t => t.category === 'devops');
  const cloud = backendTechs.filter(t => t.category === 'cloud');
  
  return (
    <Section
      id="backend"
      title={t('skills.backend.title')}
      eyebrow={t('skills.backend.subtitle')}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {/* Languages Column */}
        <div className="space-y-6">
          <div className="text-center lg:text-left">
            <h3 className="text-2xl font-bold mb-2" style={{ color: 'var(--color-text)' }}>Languages</h3>
            <p className="text-sm text-soft">Core programming languages</p>
          </div>
          <div className="space-y-4">
            {languages.map((tech) => (
              <TechCard key={tech.name} tech={tech} />
            ))}
          </div>
        </div>
        
        {/* Frameworks Column */}
        <div className="space-y-6">
          <div className="text-center lg:text-left">
            <h3 className="text-2xl font-bold mb-2" style={{ color: 'var(--color-text)' }}>Frameworks</h3>
            <p className="text-sm text-soft">Development frameworks & tools</p>
          </div>
          <div className="space-y-4">
            {frameworks.map((tech) => (
              <TechCard key={tech.name} tech={tech} />
            ))}
          </div>
        </div>
        
        {/* Infrastructure Column */}
        <div className="space-y-6 lg:col-span-2 xl:col-span-1">
          <div className="text-center lg:text-left">
            <h3 className="text-2xl font-bold mb-2" style={{ color: 'var(--color-text)' }}>Infrastructure</h3>
            <p className="text-sm text-soft">Databases, DevOps & Cloud</p>
          </div>
          <div className="space-y-4">
            {[...databases, ...devops, ...cloud].map((tech) => (
              <TechCard key={tech.name} tech={tech} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default BackendSkills;
