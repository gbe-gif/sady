import { useState } from 'react';
import { Home } from './components/Home';
import { Society } from './components/Society';
import { Characters } from './components/Characters';
import { SupportingCharacters } from './components/SupportingCharacters';
import { Home as HomeIcon, Cat, BookOpen, Users } from 'lucide-react';
import { AnimatePresence } from 'motion/react';
import { LanguageProvider, useLanguage, Language } from './context/LanguageContext';
import { translations } from './i18n/translations';

function AppContent() {
  const [activeTab, setActiveTab] = useState<'home' | 'society' | 'characters' | 'supporting'>('home');
  const { language, setLanguage } = useLanguage();
  const t = translations.nav;

  const languages: { key: Language; label: string }[] = [
    { key: 'ko', label: 'Kor' },
    { key: 'en', label: 'Eng' },
    { key: 'ja', label: 'Jp' },
  ];

  return (
    <div className="max-w-3xl mx-auto w-full min-h-[100dvh] bg-sandy-navy-dark shadow-2xl relative overflow-hidden flex flex-col">
      <main className="w-full flex-grow relative">
        <AnimatePresence mode="wait">
          {activeTab === 'home' && <Home key="home" />}
          {activeTab === 'society' && <Society key="society" />}
          {activeTab === 'characters' && <Characters key="characters" />}
          {activeTab === 'supporting' && <SupportingCharacters key="supporting" />}
        </AnimatePresence>
      </main>

      <nav className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl bg-sandy-navy/95 backdrop-blur-lg border-t border-white/5 flex justify-between sm:justify-around items-center pb-6 pt-2 px-1 sm:px-4 shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.8)] z-50">
        <button
          onClick={() => setActiveTab('home')}
          className={`flex flex-col items-center p-1 sm:p-2.5 transition-colors duration-200 cursor-pointer min-w-0 ${
            activeTab === 'home' ? 'text-sandy-orange' : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <HomeIcon className="w-5 h-5 sm:w-6 sm:h-6 mb-1 shrink-0" />
          <span className="text-[10px] sm:text-[11px] font-semibold tracking-wide truncate max-w-[68px] sm:max-w-none text-center">
            {t.home[language]}
          </span>
        </button>

        <button
          onClick={() => setActiveTab('society')}
          className={`flex flex-col items-center p-1 sm:p-2.5 transition-colors duration-200 cursor-pointer min-w-0 ${
            activeTab === 'society' ? 'text-sandy-orange' : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <Cat className="w-5 h-5 sm:w-6 sm:h-6 mb-1 shrink-0" />
          <span className="text-[10px] sm:text-[11px] font-semibold tracking-wide truncate max-w-[68px] sm:max-w-none text-center">
            {t.society[language]}
          </span>
        </button>

        {/* Center Language Toggle: Between Society and Characters */}
        <div className="flex flex-col items-center justify-center px-0.5 sm:px-1 shrink-0">
          <div className="flex items-center bg-black/50 border border-white/10 rounded-full p-0.5 shadow-inner">
            {languages.map(({ key, label }) => {
              const isActive = language === key;
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => setLanguage(key)}
                  className={`px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full text-[9px] sm:text-[10px] font-bold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-sandy-orange text-sandy-navy-dark shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                  aria-label={`Switch language to ${label}`}
                >
                  {label}
                </button>
              );
            })}
          </div>
          <span className="text-[8px] sm:text-[9px] text-slate-500 font-medium mt-1 tracking-tight uppercase">
            {t.languageLabel[language]}
          </span>
        </div>

        <button
          onClick={() => setActiveTab('characters')}
          className={`flex flex-col items-center p-1 sm:p-2.5 transition-colors duration-200 cursor-pointer min-w-0 ${
            activeTab === 'characters' ? 'text-sandy-orange' : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 mb-1 shrink-0" />
          <span className="text-[10px] sm:text-[11px] font-semibold tracking-wide truncate max-w-[68px] sm:max-w-none text-center">
            {t.characters[language]}
          </span>
        </button>

        <button
          onClick={() => setActiveTab('supporting')}
          className={`flex flex-col items-center p-1 sm:p-2.5 transition-colors duration-200 cursor-pointer min-w-0 ${
            activeTab === 'supporting' ? 'text-sandy-orange' : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <Users className="w-5 h-5 sm:w-6 sm:h-6 mb-1 shrink-0" />
          <span className="text-[10px] sm:text-[11px] font-semibold tracking-wide truncate max-w-[68px] sm:max-w-none text-center">
            {t.supporting[language]}
          </span>
        </button>
      </nav>
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
