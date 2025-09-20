import { useTranslation } from 'react-i18next';
import userInfo from '../config/userInfo.json';

export const Footer = () => {
  const { t } = useTranslation();
  
  const nav = [
    { label: t('navigation.home'), href: "#home" },
    { label: t('navigation.projects'), href: "#projects" },
    { label: t('navigation.backend'), href: "#backend" },
    { label: t('navigation.frontend'), href: "#frontend" },
    { label: t('navigation.contact'), href: "#contact" },
  ];
  return (
    <footer className="relative mt-24 border-t border-base surface overflow-hidden">
      <div className="pointer-events-none absolute inset-0 subtle-grid opacity-30" />
      <div className="relative max-w-7xl mx-auto px-6 py-14 grid gap-10 md:grid-cols-3">
        <div>
          <div className="flex items-baseline gap-2 mb-4 select-none text-soft">
            <span className="ink-brush-accent text-brand">N</span>
            <span className="text-lg font-medium tracking-wide">{userInfo.name}</span>
          </div>
          <p className="text-sm text-soft leading-relaxed max-w-sm">
            {userInfo.bio}
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
            href={userInfo.socialLinks.email}
            className="hover:text-brand break-all transition-colors"
          >
            {userInfo.socialLinks.email.replace('mailto:', '')}
          </a>
          <div className="pt-4 text-faint text-xs">
            {t('footer.copyright')}
          </div>
          <div className="text-faint text-xs">
            {t('footer.builtWith')}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
