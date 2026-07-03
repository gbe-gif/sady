import { motion } from "motion/react";
import raccoonImg from "../assets/images/raccoon_gang_1783070684012.jpg";
import scratcherImg from "../assets/images/scratcher_logo_1783071103033.jpg";
import noblesImg from "../assets/images/nobles_logo_1783071112643.jpg";
import { PawPrint, Eye, Swords, Shield, HeartHandshake, ListOrdered, MapPin } from "lucide-react";

export function Society() {
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
            Hidden Factions
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-white drop-shadow-md">
            은밀한 길 동물 사회
          </h1>
        </div>
      </div>

      <div className="px-6 space-y-8">
        <section>
          <p className="text-slate-300 leading-relaxed">
            인간들은 눈치채지 못했지만, 샌디 코브의 이면에는 동물들만의 구역과 세력이 나뉘어 아슬아슬한 균형을 유지하고 있습니다.
            인간의 분실물, 남은 음식, 뒷골목 정보는 이들에게 가장 중요한 핵심 자원입니다.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-slate-100 flex items-center gap-2 border-b border-white/10 pb-2">
            <Swords className="w-5 h-5 text-sandy-orange" />
            3대 세력 구도
          </h2>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-3 py-1.5 bg-fluffies/20 text-fluffies rounded-lg text-sm border border-fluffies/30">플러피즈</span>
            <span className="px-3 py-1.5 bg-scratcher/20 text-[--color-scratcher] rounded-lg text-sm border border-scratcher/30">스크래처</span>
            <span className="px-3 py-1.5 bg-nobles/20 text-nobles-dark rounded-lg text-sm border border-nobles-dark/30">노블즈</span>
          </div>
          <p className="text-sm text-slate-400 leading-relaxed bg-sandy-navy-light/30 p-4 rounded-xl border border-white/5">
            세력 간의 견제와 다툼이 치열하지만, 공동의 적인 '길동물관리국' 앞에서는 임시 협력 체제를 구축하기도 합니다.
            이들은 때로 인간의 물건을 직접 터는 등, 교묘하게 인간의 생활권을 이용하며 살아갑니다.
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
                  <h2 className="text-2xl font-bold text-white">플러피즈 <span className="text-sm text-fluffies font-medium ml-1">Fluffies</span></h2>
                  <p className="text-xs text-slate-400">샌디 코브의 길 동물 사회를 제패한 근육질 라쿤 갱단</p>
                </div>
              </div>
              
              <ul className="space-y-2 text-sm text-slate-300 mb-6 bg-sandy-navy-dark/50 p-4 rounded-2xl">
                <li className="flex items-start gap-2"><span className="text-fluffies mt-0.5">•</span> 뒷골목에서 20년이 넘는 깊은 역사를 자랑함.</li>
                <li className="flex items-start gap-2"><span className="text-fluffies mt-0.5">•</span> 철저한 위생 관리로 광견병 발병률 0% 유지 중.</li>
                <li className="flex items-start gap-2"><span className="text-fluffies mt-0.5">•</span> 뛰어난 조직력과 개성이 담긴 시그니처 복장 착용.</li>
                <li className="flex items-start gap-2"><span className="text-fluffies mt-0.5">•</span> 현재 수컷 90%와 암컷 10%의 성비를 보임. (암컷이 관리국에 자주 납치됨)</li>
              </ul>

              <div className="space-y-4">
                <div>
                  <h3 className="text-fluffies font-bold flex items-center gap-2 mb-2 text-sm"><ListOrdered className="w-4 h-4" /> 플러피즈의 엄격한 규율</h3>
                  <div className="bg-fluffies-dark/20 border border-fluffies/20 rounded-xl p-4 text-sm text-slate-300 space-y-2">
                    <p>1. 우리보다 약한 자는 반드시 배려할 것.</p>
                    <p>2. 길을 건널 때는 인간들의 횡단보도를 이용할 것.</p>
                    <p>3. 받은 은혜와 배신은 죽을 때까지 잊지 않고 갚아줄 것.</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-fluffies font-bold flex items-center gap-2 mb-2 text-sm"><MapPin className="w-4 h-4" /> 주요 거점</h3>
                  <div className="space-y-3">
                    <div className="bg-sandy-navy-dark/30 rounded-xl p-3 border border-white/5">
                      <p className="font-semibold text-slate-200 text-sm mb-1">미끄럼틀 (정찰 타워)</p>
                      <p className="text-xs text-slate-400">공원 놀이터의 미끄럼틀을 정찰 타워로 활용. 인간 어린이들이 다칠까 봐 난간 하자를 막기 위해 겉으로만 텃세를 부림.</p>
                    </div>
                    <div className="bg-sandy-navy-dark/30 rounded-xl p-3 border border-white/5">
                      <p className="font-semibold text-slate-200 text-sm mb-1">지하 펌프장 (메인 본부)</p>
                      <p className="text-xs text-slate-400">공원 구석 30년 전 폐쇄된 지하시설. 환기구를 통해서만 은밀히 출입. 캠핑용 에어 매트리스와 구급상자, 식량 등을 깔끔하게 정리해 둠.</p>
                    </div>
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
                  <h2 className="text-2xl font-bold text-white">스크래처 <span className="text-sm text-[--color-scratcher] font-medium ml-1">Scratcher</span></h2>
                  <p className="text-xs text-slate-400">샌디 코브의 고양이들로 구성된 정보 특화 조직</p>
                </div>
              </div>
              
              <ul className="space-y-3 text-sm text-slate-300 bg-sandy-navy-dark/50 p-4 rounded-2xl">
                <li className="flex items-start gap-2"><span className="text-[--color-scratcher] mt-0.5">•</span> 소리 없는 은신과 은밀한 첩보 활동에 뛰어난 두각을 나타냄.</li>
                <li className="flex items-start gap-2"><span className="text-[--color-scratcher] mt-0.5">•</span> 조직원의 대다수가 거리를 떠도는 길고양이 출신으로 이루어짐.</li>
                <li className="flex items-start gap-2"><span className="text-[--color-scratcher] mt-0.5">•</span> 집고양이의 경우, 고급 간식을 상납하고 주인의 사적인 정보를 팔아넘기는 조건으로 입단 가능.</li>
                <li className="flex items-start gap-2"><span className="text-[--color-scratcher] mt-0.5">•</span> 인간들의 SNS에도 올라오지 않는 양질의 고급 정보를 다수 확보.</li>
                <li className="flex items-start gap-2"><span className="text-[--color-scratcher] mt-0.5">•</span> 인간들의 눈을 피해 주로 늦은 밤 시간대에 활발하게 활동하며, 옥상이나 지붕 등 인간의 손이 닿지 않는 높은 장소를 주요 활동 구역으로 삼음.</li>
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
                  <h2 className="text-2xl font-bold text-white">노블즈 <span className="text-sm text-nobles font-medium ml-1">Nobels</span></h2>
                  <p className="text-xs text-slate-400">부유층들이 고용한 전문 도그워커가 산책시키는 엘리트 반려견 모임</p>
                </div>
              </div>
              
              <ul className="space-y-3 text-sm text-slate-300 bg-sandy-navy-dark/50 p-4 rounded-2xl">
                <li className="flex items-start gap-2"><span className="text-nobles-dark mt-0.5">•</span> 공원 중앙의 화려한 분수대와 식수대를 주요 거점으로 삼고 활동함.</li>
                <li className="flex items-start gap-2"><span className="text-nobles-dark mt-0.5">•</span> 부유한 주인들의 넘치는 사랑을 받고 자라 구김살 없이 순수하고 낙천적인 성격.</li>
                <li className="flex items-start gap-2"><span className="text-nobles-dark mt-0.5">•</span> 척박하게 살아가는 길 동물들에게도 스스럼없이 먼저 호의와 온정을 베푸는 편.</li>
                <li className="flex items-start gap-2"><span className="text-nobles-dark mt-0.5">•</span> 다만 험난한 거리의 세상물정에 너무 어두워, 다른 세력들의 뻔한 거짓말에도 쉽게 속아 넘어감.</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </motion.div>
  );
}
