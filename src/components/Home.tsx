import { motion } from "motion/react";
import streetImg from "../assets/images/sandy_cove_street_1783070673476.jpg";
import spotsImg from "../assets/images/sandy_spots_1783070695697.jpg";
import { MapPin, Sun, ShieldCheck, ShoppingBag, Building2, Trees, Store, Trash2, Map } from "lucide-react";
import { PersonaGenerator } from "./PersonaGenerator";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";

export function Home() {
  const { language } = useLanguage();
  const t = translations.home;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="pb-28 h-[100dvh] overflow-y-auto"
    >
      <div className="relative w-full aspect-[16/9] mb-8 overflow-hidden rounded-b-3xl shadow-2xl shadow-black/50">
        <img
          src={streetImg}
          alt="Sandy Cove Street"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-sandy-navy-dark to-transparent"></div>
        <div className="absolute bottom-4 left-6 pr-6">
          <span className="inline-block px-3 py-1 mb-2 text-xs font-semibold text-sandy-navy-dark bg-sandy-orange rounded-full uppercase tracking-wider">
            {t.locationTag[language]}
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-white drop-shadow-md">
            {t.streetTitle[language]}
          </h1>
          <p className="text-sandy-orange/80 text-sm md:text-base font-medium drop-shadow mt-1">
            {t.streetSubtitle}
          </p>
        </div>
      </div>

      <div className="px-6 space-y-6">
        <PersonaGenerator />

        <p className="text-lg font-medium text-slate-200 leading-relaxed border-l-4 border-sandy-orange pl-4">
          {t.intro[language]}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
          <div className="bg-sandy-navy p-5 rounded-2xl border border-white/5 shadow-lg flex items-start gap-4">
            <div className="p-3 rounded-full bg-sandy-navy-light text-sandy-orange shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-semibold text-slate-100 mb-1">{t.cards.highRent.title[language]}</h3>
              <p className="text-sm text-slate-400 leading-snug">{t.cards.highRent.desc[language]}</p>
            </div>
          </div>

          <div className="bg-sandy-navy p-5 rounded-2xl border border-white/5 shadow-lg flex items-start gap-4">
            <div className="p-3 rounded-full bg-sandy-navy-light text-sandy-orange shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-semibold text-slate-100 mb-1">{t.cards.security.title[language]}</h3>
              <p className="text-sm text-slate-400 leading-snug">{t.cards.security.desc[language]}</p>
            </div>
          </div>

          <div className="bg-sandy-navy p-5 rounded-2xl border border-white/5 shadow-lg flex items-start gap-4 sm:col-span-2">
            <div className="p-3 rounded-full bg-sandy-navy-light text-sandy-orange shrink-0">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-semibold text-slate-100 mb-1">{t.cards.fleaMarket.title[language]}</h3>
              <p className="text-sm text-slate-400 leading-snug">{t.cards.fleaMarket.desc[language]}</p>
            </div>
          </div>
        </div>

        <div className="mt-8 p-6 bg-gradient-to-br from-sandy-orange/10 to-transparent rounded-2xl border border-sandy-orange/20">
          <h3 className="text-sandy-orange font-semibold mb-2 flex items-center gap-2">
            <Sun className="w-4 h-4" />
            {t.rumors.title[language]}
          </h3>
          <p className="text-sm text-slate-300 leading-relaxed italic">
            {t.rumors.quote[language]}
          </p>
        </div>

        {/* Key Locations Section */}
        <div className="mt-12">
          <div className="flex items-center gap-3 mb-6">
            <Map className="w-6 h-6 text-sandy-orange" />
            <h2 className="text-2xl font-bold text-slate-100">{t.spotsTitle[language]}</h2>
          </div>
          
          <div className="w-full aspect-[21/9] mb-6 overflow-hidden rounded-2xl shadow-lg shadow-black/30 border border-white/5 relative">
            <img
              src={spotsImg}
              alt="Sandy Cove Spots"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-sandy-navy-dark via-transparent to-transparent"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-sandy-navy rounded-2xl p-5 border border-white/5 shadow-lg">
              <div className="flex items-center gap-3 mb-3 pb-3 border-b border-white/10">
                <div className="p-2.5 rounded-xl bg-sandy-orange/20 text-sandy-orange">
                  <Building2 className="w-5 h-5" />
                </div>
                <h2 className="text-lg font-bold text-slate-100">{t.spots.sunsetPalace.title[language]}</h2>
              </div>
              <ul className="space-y-2 text-sm text-slate-300">
                {t.spots.sunsetPalace.bullets[language].map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <span className="text-sandy-orange">•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-sandy-navy rounded-2xl p-5 border border-white/5 shadow-lg">
              <div className="flex items-center gap-3 mb-3 pb-3 border-b border-white/10">
                <div className="p-2.5 rounded-xl bg-sandy-orange/20 text-sandy-orange">
                  <Trees className="w-5 h-5" />
                </div>
                <h2 className="text-lg font-bold text-slate-100">{t.spots.sandyPark.title[language]}</h2>
              </div>
              <ul className="space-y-2 text-sm text-slate-300">
                {t.spots.sandyPark.bullets[language].map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <span className="text-sandy-orange">•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-sandy-navy rounded-2xl p-5 border border-white/5 shadow-lg">
              <div className="flex items-center gap-3 mb-3 pb-3 border-b border-white/10">
                <div className="p-2.5 rounded-xl bg-sandy-orange/20 text-sandy-orange">
                  <Store className="w-5 h-5" />
                </div>
                <h2 className="text-lg font-bold text-slate-100">{t.spots.sandyMart.title[language]}</h2>
              </div>
              <ul className="space-y-2 text-sm text-slate-300">
                {t.spots.sandyMart.bullets[language].map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <span className="text-sandy-orange">•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-sandy-navy rounded-2xl p-5 border border-white/5 shadow-lg border-l-4 border-l-sandy-orange">
              <div className="flex items-center gap-3 mb-3 pb-3 border-b border-white/10">
                <div className="p-2.5 rounded-xl bg-sandy-navy-light text-slate-300">
                  <Trash2 className="w-5 h-5" />
                </div>
                <h2 className="text-lg font-bold text-slate-100">{t.spots.alleySquare.title[language]}</h2>
              </div>
              <ul className="space-y-2 text-sm text-slate-300">
                {t.spots.alleySquare.bullets[language].map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <span className="text-sandy-orange">•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
