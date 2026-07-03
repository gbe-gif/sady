import { useState } from 'react';
import { Home } from './components/Home';
import { Society } from './components/Society';
import { Characters } from './components/Characters';
import { SupportingCharacters } from './components/SupportingCharacters';
import { Home as HomeIcon, Cat, BookOpen, Users } from 'lucide-react';
import { AnimatePresence } from 'motion/react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'home' | 'society' | 'characters' | 'supporting'>('home');

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

      <nav className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl bg-sandy-navy/95 backdrop-blur-lg border-t border-white/5 flex justify-around items-center pb-6 pt-2 px-2 sm:px-4 shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.8)] z-50">
        <button
          onClick={() => setActiveTab('home')}
          className={`flex flex-col items-center p-2 sm:p-3 transition-colors duration-200 ${
            activeTab === 'home' ? 'text-sandy-orange' : 'text-slate-500 hover:text-slate-300'
          }`}
        >
          <HomeIcon className="w-5 h-5 sm:w-6 sm:h-6 mb-1" />
          <span className="text-[10px] sm:text-[11px] font-semibold tracking-wide">홈 & 스팟</span>
        </button>
        <button
          onClick={() => setActiveTab('society')}
          className={`flex flex-col items-center p-2 sm:p-3 transition-colors duration-200 ${
            activeTab === 'society' ? 'text-sandy-orange' : 'text-slate-500 hover:text-slate-300'
          }`}
        >
          <Cat className="w-5 h-5 sm:w-6 sm:h-6 mb-1" />
          <span className="text-[10px] sm:text-[11px] font-semibold tracking-wide">뒷골목 사회</span>
        </button>
        <button
          onClick={() => setActiveTab('characters')}
          className={`flex flex-col items-center p-2 sm:p-3 transition-colors duration-200 ${
            activeTab === 'characters' ? 'text-sandy-orange' : 'text-slate-500 hover:text-slate-300'
          }`}
        >
          <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 mb-1" />
          <span className="text-[10px] sm:text-[11px] font-semibold tracking-wide">캐릭터 도감</span>
        </button>
        <button
          onClick={() => setActiveTab('supporting')}
          className={`flex flex-col items-center p-2 sm:p-3 transition-colors duration-200 ${
            activeTab === 'supporting' ? 'text-sandy-orange' : 'text-slate-500 hover:text-slate-300'
          }`}
        >
          <Users className="w-5 h-5 sm:w-6 sm:h-6 mb-1" />
          <span className="text-[10px] sm:text-[11px] font-semibold tracking-wide">조연 도감</span>
        </button>
      </nav>
    </div>
  );
}
