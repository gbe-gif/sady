import { motion } from "motion/react";
import streetImg from "../assets/images/sandy_cove_street_1783070673476.jpg";
import spotsImg from "../assets/images/sandy_spots_1783070695697.jpg";
import { MapPin, Sun, ShieldCheck, ShoppingBag, Building2, Trees, Store, Trash2, Map } from "lucide-react";
import { PersonaGenerator } from "./PersonaGenerator";

export function Home() {
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
          src={streetImg}
          alt="Sandy Cove Street"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-sandy-navy-dark to-transparent"></div>
        <div className="absolute bottom-4 left-6 pr-6">
          <span className="inline-block px-3 py-1 mb-2 text-xs font-semibold text-sandy-navy-dark bg-sandy-orange rounded-full uppercase tracking-wider">
            Location Guide
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-white drop-shadow-md">
            샌디 코브 스트리트
          </h1>
          <p className="text-sandy-orange/80 text-sm md:text-base font-medium drop-shadow mt-1">
            Sandy Cove St.
          </p>
        </div>
      </div>

      <div className="px-6 space-y-6">
        <PersonaGenerator />

        <p className="text-lg font-medium text-slate-200 leading-relaxed border-l-4 border-sandy-orange pl-4">
          2026년 미국 캘리포니아주에 위치한 트렌디한 힙스터 상권. 유명 대학가와 인접해 유동 인구가 많으며, 현재 젠트리피케이션이 활발히 진행 중입니다.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
          <div className="bg-sandy-navy p-5 rounded-2xl border border-white/5 shadow-lg flex items-start gap-4">
            <div className="p-3 rounded-full bg-sandy-navy-light text-sandy-orange shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-semibold text-slate-100 mb-1">높은 임대료</h3>
              <p className="text-sm text-slate-400 leading-snug">교통이 편리하고 핫플레이스가 많아 월세가 매우 비싼 편에 속합니다.</p>
            </div>
          </div>

          <div className="bg-sandy-navy p-5 rounded-2xl border border-white/5 shadow-lg flex items-start gap-4">
            <div className="p-3 rounded-full bg-sandy-navy-light text-sandy-orange shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-semibold text-slate-100 mb-1">우수한 치안</h3>
              <p className="text-sm text-slate-400 leading-snug">인근 대형 소방서 덕분에 중범죄는 드물지만, 기상천외한 하찮은 경범죄가 잦습니다.</p>
            </div>
          </div>

          <div className="bg-sandy-navy p-5 rounded-2xl border border-white/5 shadow-lg flex items-start gap-4 sm:col-span-2">
            <div className="p-3 rounded-full bg-sandy-navy-light text-sandy-orange shrink-0">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-semibold text-slate-100 mb-1">토요 플리마켓</h3>
              <p className="text-sm text-slate-400 leading-snug">매주 토요일마다 '샌디 코브 파크'에서 화기애애한 분위기의 플리마켓이 열립니다.</p>
            </div>
          </div>
        </div>

        <div className="mt-8 p-6 bg-gradient-to-br from-sandy-orange/10 to-transparent rounded-2xl border border-sandy-orange/20">
          <h3 className="text-sandy-orange font-semibold mb-2 flex items-center gap-2">
            <Sun className="w-4 h-4" />
            Local Rumors
          </h3>
          <p className="text-sm text-slate-300 leading-relaxed">
            "레몬만 훔쳐가는 괴도나 제왕학을 설파하는 고성방가... 이 거리의 경범죄는 범죄라기보단 기행에 가깝지."
          </p>
        </div>

        {/* Key Locations Section */}
        <div className="mt-12">
          <div className="flex items-center gap-3 mb-6">
            <Map className="w-6 h-6 text-sandy-orange" />
            <h2 className="text-2xl font-bold text-slate-100">주요 스팟</h2>
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
                <h2 className="text-lg font-bold text-slate-100">선셋 팰리스 아파트먼트</h2>
              </div>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>• 1976년에 준공된 9층 규모의 아담한 빈티지 아파트. 총 25세대가 거주 중.</li>
                <li>• 쓸만한 명품 헌옷이 쓰레기장으로 자주 배출됨.</li>
                <li>• 깐깐하지만 성실한 경비원 '행크'가 건물을 전담하여 관리 중.</li>
              </ul>
            </div>

            <div className="bg-sandy-navy rounded-2xl p-5 border border-white/5 shadow-lg">
              <div className="flex items-center gap-3 mb-3 pb-3 border-b border-white/10">
                <div className="p-2.5 rounded-xl bg-sandy-orange/20 text-sandy-orange">
                  <Trees className="w-5 h-5" />
                </div>
                <h2 className="text-lg font-bold text-slate-100">샌디 코브 파크</h2>
              </div>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>• 약 200평 규모로 조성된 도심 속 포켓 파크. 분수대는 인간들의 휴식처.</li>
                <li>• 버려진 지하 펌프장과 미끄럼틀은 <strong>'플러피즈'의 전용 구역</strong>으로 점령당함.</li>
                <li>• 라쿤들의 텃세로 인해 인간은 출입을 꺼리며, 다른 동물 세력도 접근을 피함.</li>
              </ul>
            </div>

            <div className="bg-sandy-navy rounded-2xl p-5 border border-white/5 shadow-lg">
              <div className="flex items-center gap-3 mb-3 pb-3 border-b border-white/10">
                <div className="p-2.5 rounded-xl bg-sandy-orange/20 text-sandy-orange">
                  <Store className="w-5 h-5" />
                </div>
                <h2 className="text-lg font-bold text-slate-100">샌디 마트 & 약국</h2>
              </div>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>• <strong>마트:</strong> 외벽에 멜론만 한 낡은 환풍구 구멍이 있어 동물의 비밀 통로로 쓰임.</li>
                <li>• 마트 뒤편 폐기물 쓰레기통은 먹이를 위한 <strong>격전지</strong>. 휴무일엔 대규모 절도 작전 발생.</li>
                <li>• <strong>약국:</strong> 귀여운 것에 약한 노인 약사가 운영하는 평화로운 <strong>중립 구역</strong>. 상비약이 구비되어 있음.</li>
              </ul>
            </div>

            <div className="bg-sandy-navy rounded-2xl p-5 border border-white/5 shadow-lg border-l-4 border-l-sandy-orange">
              <div className="flex items-center gap-3 mb-3 pb-3 border-b border-white/10">
                <div className="p-2.5 rounded-xl bg-sandy-navy-light text-slate-300">
                  <Trash2 className="w-5 h-5" />
                </div>
                <h2 className="text-lg font-bold text-slate-100">뒷골목 광장 & 관리국</h2>
              </div>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>• 쓰레기 집하장은 파밍과 물물 교환이 일어나는 동물 사회 최대의 시장이자 '광장'.</li>
                <li>• 청소차가 오기 직전에는 반드시 해산해야 하는 엄격한 룰 존재.</li>
                <li>• <strong>'길동물관리국'</strong>은 보조금으로 운영되는 악덕 시민 단체. 광장 주변을 순찰해 각별한 주의 요망.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
