import { motion } from "motion/react";
import raccoonImg from "../assets/images/raccoon_gang_1783070684012.jpg";
import scratcherImg from "../assets/images/scratcher_logo_1783071103033.jpg";
import noblesImg from "../assets/images/nobles_logo_1783071112643.jpg";
import { Eye, Swords, Shield, HeartHandshake, ListOrdered, MapPin } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";

export function Society() {
  const { language } = useLanguage();
  const t = translations.society;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="pb-24 h-[100dvh] overflow-y-auto"
    >
      <div className="relative w-full aspect-[16/9] mb-8 overflow-hidden rounded-b-3xl shadow-2xl shadow-black/50">
        <img
          src={raccoonImg}
          alt="Back Alley Raccoons"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-sandy-navy-dark via-sandy-navy-dark/40 to-transparent"></div>
        <div className="absolute bottom-4 left-6 pr-6">
          <span className="inline-block px-3 py-1 mb-2 text-xs font-semibold text-slate-200 bg-sandy-navy border border-slate-700 rounded-full tracking-wider">
            {t.badge[language]}
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-white drop-shadow-md">
            {t.title[language]}
          </h1>
        </div>
      </div>

      <div className="px-6 space-y-8">
        <section>
          <p className="text-slate-300 leading-relaxed">
            {t.intro[language]}
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-slate-100 flex items-center gap-2 border-b border-white/10 pb-2">
            <Swords className="w-5 h-5 text-sandy-orange" />
            {t.threeFactionsTitle[language]}
          </h2>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-3 py-1.5 bg-fluffies/20 text-fluffies rounded-lg text-sm border border-fluffies/30">
              {t.factionNames.fluffies[language]}
            </span>
            <span className="px-3 py-1.5 bg-scratcher/20 text-[--color-scratcher] rounded-lg text-sm border border-scratcher/30">
              {t.factionNames.scratcher[language]}
            </span>
            <span className="px-3 py-1.5 bg-nobles/20 text-nobles-dark rounded-lg text-sm border border-nobles-dark/30">
              {t.factionNames.nobles[language]}
            </span>
          </div>
          <p className="text-sm text-slate-400 leading-relaxed bg-sandy-navy-light/30 p-4 rounded-xl border border-white/5">
            {t.factionsDynamicDesc[language]}
          </p>
        </section>

        <div className="space-y-12 mt-12 pt-8 border-t border-white/10">
          {/* Fluffies */}
          <section className="bg-sandy-navy rounded-3xl overflow-hidden border border-fluffies/30 shadow-lg shadow-black/40">
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-fluffies/20 text-fluffies">
                  <Shield className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">
                    {t.fluffies.name[language]}{" "}
                    <span className="text-sm text-fluffies font-medium ml-1">
                      {t.fluffies.tag}
                    </span>
                  </h2>
                  <p className="text-xs text-slate-400">
                    {t.fluffies.subtitle[language]}
                  </p>
                </div>
              </div>
              
              <ul className="space-y-2 text-sm text-slate-300 mb-6 bg-sandy-navy-dark/50 p-4 rounded-2xl">
                {t.fluffies.bullets[language].map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-fluffies mt-0.5">•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="space-y-4">
                <div>
                  <h3 className="text-fluffies font-bold flex items-center gap-2 mb-2 text-sm">
                    <ListOrdered className="w-4 h-4" /> {t.fluffies.rulesTitle[language]}
                  </h3>
                  <div className="bg-fluffies-dark/20 border border-fluffies/20 rounded-xl p-4 text-sm text-slate-300 space-y-2">
                    {t.fluffies.rules[language].map((rule, idx) => (
                      <p key={idx}>{rule}</p>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-fluffies font-bold flex items-center gap-2 mb-2 text-sm">
                    <MapPin className="w-4 h-4" /> {t.fluffies.strongholdsTitle[language]}
                  </h3>
                  <div className="space-y-3">
                    {t.fluffies.strongholds.map((st, idx) => (
                      <div key={idx} className="bg-sandy-navy-dark/30 rounded-xl p-3 border border-white/5">
                        <p className="font-semibold text-slate-200 text-sm mb-1">{st.title[language]}</p>
                        <p className="text-xs text-slate-400">{st.desc[language]}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Scratcher */}
          <section className="bg-sandy-navy rounded-3xl overflow-hidden border border-scratcher/30 shadow-lg shadow-black/40">
            <div className="w-full">
              <img 
                src={scratcherImg} 
                alt="Scratcher" 
                className="w-full h-auto object-contain block"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-scratcher/20 text-[--color-scratcher]">
                  <Eye className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">
                    {t.scratcher.name[language]}{" "}
                    <span className="text-sm text-[--color-scratcher] font-medium ml-1">
                      {t.scratcher.tag}
                    </span>
                  </h2>
                  <p className="text-xs text-slate-400">
                    {t.scratcher.subtitle[language]}
                  </p>
                </div>
              </div>
              
              <ul className="space-y-3 text-sm text-slate-300 bg-sandy-navy-dark/50 p-4 rounded-2xl">
                {t.scratcher.bullets[language].map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[--color-scratcher] mt-0.5">•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Nobles */}
          <section className="bg-sandy-navy rounded-3xl overflow-hidden border border-nobles-dark/30 shadow-lg shadow-black/40">
            <div className="w-full">
              <img 
                src={noblesImg} 
                alt="Nobles" 
                className="w-full h-auto object-contain block"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-nobles/20 text-nobles">
                  <HeartHandshake className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">
                    {t.nobles.name[language]}{" "}
                    <span className="text-sm text-nobles font-medium ml-1">
                      {t.nobles.tag}
                    </span>
                  </h2>
                  <p className="text-xs text-slate-400">
                    {t.nobles.subtitle[language]}
                  </p>
                </div>
              </div>
              
              <ul className="space-y-3 text-sm text-slate-300 bg-sandy-navy-dark/50 p-4 rounded-2xl">
                {t.nobles.bullets[language].map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-nobles-dark mt-0.5">•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>
      </div>
    </motion.div>
  );
}
