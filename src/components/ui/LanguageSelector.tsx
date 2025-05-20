import React from 'react';
import { useTranslation, Language } from '../../translations';

const languages = [
  { code: 'en', label: 'EN' },
  { code: 'pt', label: 'PT' },
  { code: 'fr', label: 'FR' },
] as const;

const LanguageSelector: React.FC = () => {
  const { language, setLanguage } = useTranslation();

  const handleLanguageSelect = (lang: Language) => {
    setLanguage(lang);
  };

  return (
    <div className="flex items-center space-x-2">
      {languages.map((lang, index) => (
        <React.Fragment key={lang.code}>
          {index > 0 && <span className="text-gray-300">|</span>}
          <button
            className={`text-sm hover:text-gray-600 transition-colors ${
              language === lang.code 
                ? 'text-gray-900 font-medium' 
                : 'text-gray-500'
            }`}
            onClick={() => handleLanguageSelect(lang.code)}
          >
            {lang.label}
          </button>
        </React.Fragment>
      ))}
    </div>
  );
};

export default LanguageSelector;