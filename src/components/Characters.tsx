import { motion } from "motion/react";
import { User, Activity, Heart, Info, Fingerprint } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";

export function Characters() {
  const { language } = useLanguage();
  const t = translations.characters;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="pb-24 flex flex-col h-[100dvh]"
    >
      <div className="pt-8 px-6 shrink-0">
        <h1 className="text-3xl font-bold text-white tracking-tight">{t.title[language]}</h1>
        <p className="text-slate-400 mt-2 text-sm">{t.subtitle[language]}</p>
      </div>

      <div className="flex-1 mt-6 px-6 overflow-y-auto pb-8 space-y-8">
        {t.list.map((char, cIdx) => (
          <div 
            key={cIdx}
            className="bg-sandy-navy rounded-3xl border border-white/10 shadow-2xl flex flex-col relative"
          >
            <div className="w-full aspect-square relative shrink-0">
              <img 
                src={char.img} 
                alt={char.name[language]} 
                className="w-full h-full object-cover rounded-t-3xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sandy-navy to-transparent"></div>
              
              {/* Web novel style typography for name */}
              <div className="absolute bottom-4 left-6 pr-6">
                <h2 className="text-4xl sm:text-5xl font-black italic text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-slate-400 drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)] tracking-tighter pr-2" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.1)' }}>
                  {char.name[language]}
                </h2>
                <p className="text-fluffies font-bold tracking-widest text-sm uppercase mt-1 drop-shadow-md">
                  {char.en}
                </p>
              </div>
            </div>

            <div className="p-6 space-y-6">
              <div className="inline-block px-3 py-1 bg-fluffies/20 border border-fluffies/30 rounded-lg text-sm text-fluffies font-semibold">
                {char.role[language]}
              </div>

              <div className="space-y-4">
                <div className="flex gap-3 items-start">
                  <User className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-slate-200 text-sm mb-2">{t.sections.identity[language]}</p>
                    <div className="space-y-1.5">
                      <p className="text-sm text-slate-400 flex items-start gap-2 leading-relaxed">
                        <span className="text-sandy-orange/50 mt-1">•</span>
                        <span><strong className="text-slate-300">{char.identity[language]}</strong></span>
                      </p>
                      {char.appearance[language].map((line, i) => (
                        <p key={i} className="text-sm text-slate-400 flex items-start gap-2 leading-relaxed">
                          <span className="text-sandy-orange/50 mt-1">•</span>
                          <span>{line}</span>
                        </p>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <Fingerprint className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-slate-200 text-sm mb-2">{t.sections.personality[language]}</p>
                    <div className="space-y-1.5">
                      {char.personality[language].map((line, i) => (
                        <p key={i} className="text-sm text-slate-400 flex items-start gap-2 leading-relaxed">
                          <span className="text-sandy-orange/50 mt-1">•</span>
                          <span>{line}</span>
                        </p>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <Heart className="w-5 h-5 text-fluffies shrink-0 mt-0.5" />
                  <div className="bg-fluffies/5 p-4 rounded-xl border border-fluffies/10 w-full">
                    <p className="font-semibold text-fluffies text-sm mb-2">{t.sections.relationship[language]}</p>
                    <div className="space-y-1.5">
                      {char.relationship[language].map((line, i) => (
                        <p key={i} className="text-sm text-slate-300 flex items-start gap-2 leading-relaxed">
                          <span className="text-fluffies/50 mt-1">•</span>
                          <span>{line}</span>
                        </p>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <Activity className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-slate-200 text-sm mb-2">{t.sections.behavior[language]}</p>
                    <div className="space-y-1.5">
                      {char.behavior[language].map((line, i) => (
                        <p key={i} className="text-sm text-slate-400 flex items-start gap-2 leading-relaxed">
                          <span className="text-sandy-orange/50 mt-1">•</span>
                          <span>{line}</span>
                        </p>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 items-start pt-4 border-t border-white/5">
                  <Info className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-slate-200 text-sm mb-2">{t.sections.notes[language]}</p>
                    <div className="space-y-1.5">
                      {char.notes[language].map((note, i) => (
                        <p key={i} className="text-sm text-slate-400 flex items-start gap-2 leading-relaxed">
                          <span className="text-sandy-orange/50 mt-1">•</span>
                          <span>{note}</span>
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
