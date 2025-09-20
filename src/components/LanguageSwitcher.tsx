import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const languages = [
    { code: 'en', name: 'EN', flag: '🇺🇸' },
    { code: 'vi', name: 'VI', flag: '🇻🇳' }
  ];

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  const switchLanguage = (langCode: string) => {
    i18n.changeLanguage(langCode);
  };

  return (
    <div className="relative group">
      <button 
        className="flex items-center gap-2 px-3 py-2 rounded-lg border border-base bg-surface hover:bg-surface-alt transition-all duration-200 focus-ring"
        aria-label="Switch language"
      >
        <span className="text-sm">{currentLanguage.flag}</span>
        <span className="text-xs font-medium text-soft">{currentLanguage.name}</span>
        <svg 
          className="w-3 h-3 text-soft transition-transform duration-200 group-hover:rotate-180" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      <div className="absolute right-0 top-full mt-2 w-32 bg-surface border border-base rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => switchLanguage(lang.code)}
            className={`w-full flex items-center gap-3 px-3 py-2 text-sm hover:bg-surface-alt transition-colors first:rounded-t-lg last:rounded-b-lg ${
              lang.code === i18n.language ? 'bg-surface-alt text-brand' : 'text-soft'
            }`}
          >
            <span>{lang.flag}</span>
            <span>{lang.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSwitcher;
