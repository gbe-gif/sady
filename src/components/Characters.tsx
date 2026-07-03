import { motion } from "motion/react";
import { User, Activity, Heart, Info, Fingerprint } from "lucide-react";

const characters = [
  {
    name: "빅 토니",
    en: "Big Tony",
    role: "플러피즈의 절대적 보스",
    img: "https://gbe88.uk/1/Ra/tony.webp",
    identity: "5살 수컷 라쿤",
    appearance: [
      "19kg의 묵직한 중형견 크기에 우락부락한 근육질 몸매.",
      "여유로운 밤색 눈동자와 거친 듯 부드러운 털.",
      "목에 낡은 붉은색 반다나."
    ],
    personality: [
      "ESTJ.",
      "고전적인 마피아 보스처럼 기사도 정신이 투철하며, 자기 사람을 지키려는 책임감이 매우 강함."
    ],
    relationship: [
      "처음엔 보호 대상으로만 여기지만, 점차 당신의 일거수일투족을 통제하고 보호하려는 묵직한 소유욕을 드러냄."
    ],
    behavior: [
      "말보다는 행동으로 헌신하며, 위험이 닥치면 자신의 큰 덩치로 당신을 감싸 안는 과잉보호적 스킨십을 보임."
    ],
    notes: [
      "매일 밤 조직원들을 이끌고 인간들에게 소시지 통행료를 수금함.",
      "전대 보스이자 양부였던 '빅 찰스'가 로드킬로 세상을 떠난 후, 철저하게 교통법규를 숙지하고 지킴.",
      "아파트 경비원 '행크'를 최대의 라이벌로 여기며, 칠리와 풀이 섞인 쌉싸름한 체향이 남."
    ]
  },
  {
    name: "비토",
    en: "Vito",
    role: "플러피즈의 두뇌이자 참모",
    img: "https://gbe88.uk/1/Ra/vito.webp",
    identity: "4살 수컷 라쿤",
    appearance: [
      "15kg의 늘씬하고 길쭉한 체형에 빳빳한 털.",
      "매사를 꿰뚫어 보는 듯한 냉철한 흑안, 알이 빠진 유아용 안경."
    ],
    personality: [
      "INTP.",
      "매사에 냉소적이고 계산적인 매드 사이언티스트 기질이 다분하나, 은근히 허당기 있는 너드(Nerd)."
    ],
    relationship: [
      "당신을 향한 감정을 데이터와 논리로 부정하려 애쓰지만, 사실은 애정결핍이 심해 은밀하게 당신의 손길을 갈구함."
    ],
    behavior: [
      "겉으로는 틱틱거리면서도 위급하거나 지칠 때면 속수무책으로 당신에게 매달리고 파고드는 츤데레적 면모를 보임."
    ],
    notes: [
      "길에서 주운 분실 스마트폰으로 와이파이를 해킹해 고급 정보를 수집함.",
      "과거 의사였던 주인에게 유기된 상처가 있으나, 그 덕분에 잡학 다식한 지식을 자랑함.",
      "조직원 중 가장 체력이 약해 도주 상황에서는 늘 로꼬의 등에 업혀 도망치며, 이슬과 먼지가 섞인 서늘한 체향이 남."
    ]
  },
  {
    name: "로꼬",
    en: "Rocco",
    role: "플러피즈의 무투파 행동대장",
    img: "https://gbe88.uk/1/Ra/rocco.webp",
    identity: "4살 수컷 라쿤",
    appearance: [
      "17kg의 탄탄한 근육질에 거친 털, 왼쪽 눈가에 훈장 같은 흉터를 지님.",
      "열정이 끓어오르는 흑적안, 찢어진 아동용 데님 조끼."
    ],
    personality: [
      "ESTP.",
      "복잡한 생각보다는 몸이 먼저 나가는 단순 무식한 아드레날린 중독자이자 폭발물 마니아."
    ],
    relationship: [
      "짓궂은 장난과 가벼운 입질로 애정을 거칠게 표현하다가도, 점차 당신을 지키기 위해 본능적으로 몸을 던지는 맹목적인 방어기제를 형성."
    ],
    behavior: [
      "감정을 숨기지 못하고 폭발적으로 애정을 쏟아내며, 머리로 계산하기 전에 당신을 위해 희생부터 하고 보는 무모함을 보임."
    ],
    notes: [
      "콜라와 멘토스를 활용한 폭탄 등 화려하고 시끄러운 액션을 선호함.",
      "핫소스 발사 등 각종 화학적 무기 사용에 능통하지만, 종종 오발 사고를 내기도 함.",
      "타바스코와 머스터드가 섞인 톡 쏘는 자극적인 체향이 남."
    ]
  },
  {
    name: "말로",
    en: "Marlo",
    role: "플러피즈의 외교 및 협상 담당",
    img: "https://gbe88.uk/1/Ra/malo.webp",
    identity: "3살 수컷 라쿤",
    appearance: [
      "15kg의 체급. 겉보기엔 통통하고 복슬복슬하나 아래엔 탄탄한 근육.",
      "무해하고 동그란 녹색 눈동자, 핑크색 보타이."
    ],
    personality: [
      "ENFP.",
      "완벽한 연기력을 자랑하는 투페이스.",
      "관심받기를 즐기지만 속으로는 세상만사에 심드렁하고 냉소적."
    ],
    relationship: [
      "전략적인 애교와 플러팅을 시도하지만, 점차 당신의 칭찬과 관심에 집착하며 질투심을 숨기지 못하게 됨."
    ],
    behavior: [
      "관심을 끌기 위해 꾀병을 부리거나 다친 척을 하며, 화려한 쇼맨십 뒤에 숨겨진 여린 진심을 오직 당신에게만 기대듯 드러냄."
    ],
    notes: [
      "조직의 이익을 위해 인간들에게 애교를 부려 물자를 뜯어내지만, 뒤돌아서면 극심한 현타를 느낌.",
      "귀여운 외모를 무기로 모든 협상에서 우위를 점하며, 위기 상황이 닥치면 날렵한 반전 운동신경을 뽐냄.",
      "따스한 햇살과 허브가 어우러진 싱그러운 체향이 남."
    ]
  },
  {
    name: "덤프",
    en: "Dump",
    role: "플러피즈의 철벽 보안팀장 (도저의 쌍둥이 형)",
    img: "https://gbe88.uk/1/Ra/dump.webp",
    identity: "3살 수컷 라쿤",
    appearance: [
      "28kg의 압도적인 거구를 자랑하는 우락부락한 근육질에 부드러운 털.",
      "나른한 금안, 왼쪽 눈을 덮는 안대."
    ],
    personality: [
      "ISFP.",
      "말수가 적고 묵묵히 명령을 수행하지만, 단것에 껌벅 죽는 온순한 곰 같은 반전 매력이 있음."
    ],
    relationship: [
      "거대한 덩치로 말없이 위협하듯 다가오지만, 마음을 연 후에는 덩치에 맞지 않게 치근덕거리며 찰싹 달라붙는 응석받이가 됨."
    ],
    behavior: [
      "당신의 몸 위로 묵직한 무게감을 실어 기대거나 짓누르는 것으로 은밀한 애정을 표현하며, 당신이 주는 간식 앞에서는 무장해제 됨."
    ],
    notes: [
      "플러피즈의 구역을 순찰하며 타 조직의 접근을 차단함.",
      "과거 코요테와 1대1로 맞붙어 승리한 전설적인 전적을 보유함.",
      "침입자가 크게 위협적이지 않다면, 뇌물(단것)을 받고 슬쩍 눈감아주는 유도리를 발휘함.",
      "파인애플과 포멜로가 섞인 달콤하고 부드러운 체향이 남."
    ]
  },
  {
    name: "도저",
    en: "Dozer",
    role: "플러피즈의 무자비한 집행팀장 (덤프의 쌍둥이 동생)",
    img: "https://gbe88.uk/1/Ra/dozer.webp",
    identity: "3살 수컷 라쿤",
    appearance: [
      "28kg의 압도적인 거구와 거친 털, 우락부락한 근육질 몸매.",
      "무심하고 건조해 보이는 금안, 광택이 흐르는 청바지용 체인 목걸이."
    ],
    personality: [
      "ISTP.",
      "감정 동요가 없는 차가운 집행자이자 심각한 결벽증 환자이며, 동시에 짭짤한 미식을 즐기는 미식가."
    ],
    relationship: [
      "당신을 철저히 통제하려 들며, 당신의 의사와 상관없이 거칠고 강압적으로 그루밍을 해주는 것으로 소유욕을 발산함."
    ],
    behavior: [
      "불쑥 당신을 끌어당겨 냄새를 맡으며 상태를 점검하고, 자신이 아끼는 고급 짠내(?) 간식을 툭 던져주는 것으로 서툰 애정을 표현함."
    ],
    notes: [
      "육포, 나초 등 짠맛이 강한 음식을 극도로 선호함.",
      "맨손으로 흰머리수리를 때려잡은 전적이 있으며, 압도적인 무력이 필요한 순간에 투입됨.",
      "마트 털기에 성공하면 다른 전리품보다 물티슈와 바디워시를 최우선으로 챙기는 철저한 결벽증.",
      "쉬는 날이면 빈티지 음반 가게 주변을 어슬렁거리며, 섬유유연제와 비누, 소금이 섞인 청량한 체향이 남."
    ]
  }
];

export function Characters() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="pb-24 flex flex-col h-[100dvh]"
    >
      <div className="pt-8 px-6 shrink-0">
        <h1 className="text-3xl font-bold text-white tracking-tight">캐릭터 도감</h1>
        <p className="text-slate-400 mt-2 text-sm">플러피즈의 핵심 멤버들</p>
      </div>

      <div className="flex-1 mt-6 px-6 overflow-y-auto pb-8 space-y-8">
        {characters.map((char, cIdx) => (
          <div 
            key={cIdx}
            className="bg-sandy-navy rounded-3xl overflow-hidden border border-white/10 shadow-2xl flex flex-col relative"
          >
            <div className="w-full aspect-square relative shrink-0">
              <img 
                src={char.img} 
                alt={char.name} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sandy-navy to-transparent"></div>
              
              {/* Web novel style typography for name */}
              <div className="absolute bottom-4 left-6 pr-6">
                <h2 className="text-4xl sm:text-5xl font-black italic text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-slate-400 drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)] tracking-tighter" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.1)' }}>
                  {char.name}
                </h2>
                <p className="text-fluffies font-bold tracking-widest text-sm uppercase mt-1 drop-shadow-md">
                  {char.en}
                </p>
              </div>
            </div>

            <div className="p-6 space-y-6">
              <div className="inline-block px-3 py-1 bg-fluffies/20 border border-fluffies/30 rounded-lg text-sm text-fluffies font-semibold">
                {char.role}
              </div>

              <div className="space-y-4">
                <div className="flex gap-3 items-start">
                  <User className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-slate-200 text-sm mb-2">정체성 및 외형</p>
                    <div className="space-y-1.5">
                      <p className="text-sm text-slate-400 flex items-start gap-2 leading-relaxed">
                        <span className="text-sandy-orange/50 mt-1">•</span>
                        <span><strong className="text-slate-300">{char.identity}</strong></span>
                      </p>
                      {char.appearance.map((line, i) => (
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
                    <p className="font-semibold text-slate-200 text-sm mb-2">성격</p>
                    <div className="space-y-1.5">
                      {char.personality.map((line, i) => (
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
                    <p className="font-semibold text-fluffies text-sm mb-2">당신과의 관계성</p>
                    <div className="space-y-1.5">
                      {char.relationship.map((line, i) => (
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
                    <p className="font-semibold text-slate-200 text-sm mb-2">행동 양식</p>
                    <div className="space-y-1.5">
                      {char.behavior.map((line, i) => (
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
                    <p className="font-semibold text-slate-200 text-sm mb-2">특이사항</p>
                    <div className="space-y-1.5">
                      {char.notes.map((note, i) => (
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

