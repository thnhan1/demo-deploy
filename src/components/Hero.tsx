import { useTranslation } from 'react-i18next';
import userInfo from '../config/userInfo.json';
import heroImage from "../assets/react.svg";
import { useImmersiveScroll, useParallax } from '../hooks/useImmersiveScroll';

function HeroSection() {
  const { t } = useTranslation();
  const { scrollY } = useImmersiveScroll();
  const parallaxOffset = useParallax(0.3);
  
  return (
    <section
      id="home"
      className="relative overflow-hidden apple-spacing-lg immersive-section"
      style={{
        background: `var(--gradient-hero)`,
      }}
    >
      {/* Animated background elements */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          background: `radial-gradient(circle at ${50 + parallaxOffset * 0.1}% ${30 + parallaxOffset * 0.05}%, var(--color-brand) 0%, transparent 50%)`,
          transform: `translateY(${parallaxOffset * 0.5}px)`
        }}
      />
      
      <div className="apple-container flex flex-col md:flex-row items-center gap-20">
        <div 
          className="relative w-56 h-56 md:w-72 md:h-72"
          style={{ transform: `translateY(${parallaxOffset * 0.3}px)` }}
        >
          <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-white/20 to-white/5 shadow-2xl" />
          <div className="relative w-full h-full rounded-full glass-effect border border-white/20 shadow-2xl overflow-hidden">
            <img
              src={heroImage}
              alt="Symbolic avatar"
              className="w-full h-full object-contain p-8 transition-transform duration-700 hover:scale-110"
            />
          </div>
          {/* Floating particles */}
          <div className="absolute -top-4 -right-4 w-3 h-3 rounded-full animate-pulse opacity-60" style={{ backgroundColor: 'var(--color-brand)' }} />
          <div className="absolute -bottom-2 -left-2 w-2 h-2 rounded-full animate-pulse opacity-40 delay-300" style={{ backgroundColor: 'var(--color-brand-accent)' }} />
        </div>
        <div 
          className="max-w-xl space-y-8"
          style={{ transform: `translateY(${parallaxOffset * 0.2}px)` }}
        >
          <div className="space-y-4">
            <p className="text-2xl md:text-3xl font-medium text-soft tracking-wide">{userInfo.title}</p>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <div className="flex items-center gap-4 mb-2">
                <span className="text-2xl md:text-3xl font-normal">{t('hero.title')}</span>
                <span className="inline-block animate-wave text-3xl md:text-4xl">{userInfo.greetingIcon}</span>
              </div>
              <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                {userInfo.name}
              </span>
            </h1>
          </div>
          
          <p className="text-lg md:text-xl text-soft leading-relaxed max-w-2xl">
            {userInfo.bio.split(userInfo.bioHighlight).map((part, index) => (
              <span key={index}>
                {part}
                {index === 0 && (
                  <span className="font-semibold text-brand bg-[var(--color-brand)]/10 px-2 py-1 rounded-lg">
                    {userInfo.bioHighlight}
                  </span>
                )}
              </span>
            ))}
          </p>
          
          <div className="flex flex-wrap gap-6 pt-4">
            <a
              href="#projects"
              className="apple-button-secondary text-base font-medium transition-all duration-300 hover:scale-105"
            >
              {t('hero.cta.viewProjects')}
            </a>
            <a
              href="#contact"
              className="apple-button text-base font-medium transition-all duration-300 hover:scale-105"
            >
              {t('hero.cta.contact')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
