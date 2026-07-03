import { motion } from "motion/react";
import { User, Activity, Info, Fingerprint } from "lucide-react";

const supportingCharacters = [
  {
    name: "거스",
    en: "Gus",
    faction: "스크래처",
    factionColor: "text-[--color-scratcher]",
    factionBg: "bg-[--color-scratcher]/20",
    factionBorder: "border-[--color-scratcher]/30",
    role: "스크래처 보스",
    img: "https://gbe88.uk/1/Ra/gus.webp",
    identity: "3살 수컷 길고양이",
    appearance: [
      "큼직한 머리와 짙은 회색 털을 지녔으며, 거리의 거친 풍파를 겪어낸 흔적이 역력한 외형입니다."
    ],
    personality: [
      "길거리에서 태어나 산전수전을 다 겪은 덕분에 어떤 상황에서도 여유를 잃지 않습니다.",
      "매사에 자신감이 넘치고 콧대가 높으며, 특유의 능글맞은 태도로 조직과 상황을 쥐락펴락하며 무리를 이끄는 타고난 리더십을 보여줍니다."
    ],
    notes: [
      "'본투비' 길고양이의 짬바를 자랑함."
    ]
  },
  {
    name: "루나",
    en: "Luna",
    faction: "스크래처",
    factionColor: "text-[--color-scratcher]",
    factionBg: "bg-[--color-scratcher]/20",
    factionBorder: "border-[--color-scratcher]/30",
    role: "스크래처 첫 번째 부관",
    img: "https://gbe88.uk/1/Ra/luna.webp",
    identity: "2살 암컷 흑묘",
    appearance: [
      "윤기가 흐르는 매끄러운 검은 털을 가졌으며, 중성화를 완료한 상태입니다."
    ],
    personality: [
      "과거 인간에게 유기되었던 아픈 상처를 품고 있어 쉽게 타인에게 곁을 내주지 않습니다.",
      "언제나 차갑고 도도한 태도를 유지하며, 어둠 속에서도 범접하기 힘든 요염하고 서늘한 분위기를 풍기며 다가오는 이들을 밀어냅니다."
    ],
    notes: [
      "거리를 겉돌다 스크래처에 합류하여 거스의 오른팔 역할을 수행함."
    ]
  },
  {
    name: "올리버",
    en: "Oliver",
    faction: "스크래처",
    factionColor: "text-[--color-scratcher]",
    factionBg: "bg-[--color-scratcher]/20",
    factionBorder: "border-[--color-scratcher]/30",
    role: "스크래처 두 번째 부관",
    img: "https://gbe88.uk/1/Ra/oliver.webp",
    identity: "3살 수컷 아비니시안",
    appearance: [
      "길고양이 조직에 속해있으나, 안락한 집에서 보살핌을 받아 털에 윤기가 흐르는 전형적인 집고양이의 모습을 하고 있습니다."
    ],
    personality: [
      "철저하게 자신의 이익을 좇아 움직이는 기회주의적인 면모가 강합니다.",
      "상황이 불리해지면 언제든 가장 먼저 발을 뺄 준비가 되어 있는 뺀질거리는 태도를 보이며, 이익 앞에서는 체면을 차리지 않습니다."
    ],
    notes: [
      "고급 정보를 스크래처에 제공하는 대가로 이득을 취함."
    ]
  },
  {
    name: "벨라",
    en: "Bella",
    faction: "노블즈",
    factionColor: "text-nobles-dark",
    factionBg: "bg-nobles/20",
    factionBorder: "border-nobles-dark/30",
    role: "노블즈 리더",
    img: "https://gbe88.uk/1/Ra/bella.webp",
    identity: "2살 암컷 골든 리트리버",
    appearance: [
      "매일 꼼꼼한 관리를 받아 귀티가 흐르는 황금빛 털을 자랑하며, 중성화를 마쳤습니다."
    ],
    personality: [
      "주인의 넘치는 사랑을 듬뿍 받고 자라 구김살이나 그늘이라곤 한 점 찾아볼 수 없는 해맑고 순수한 성정을 지녔습니다.",
      "길 동물들의 험난하고 거친 삶의 방식을 잘 이해하지 못하지만, 마주치는 모든 이에게 꼬리를 흔들며 편견 없이 선의를 베푸는 따뜻한 마음씨를 가졌습니다."
    ],
    notes: [
      "부유층 반려견들의 엘리트 모임을 이끌고 있음."
    ]
  },
  {
    name: "쿠퍼",
    en: "Cooper",
    faction: "노블즈",
    factionColor: "text-nobles-dark",
    factionBg: "bg-nobles/20",
    factionBorder: "border-nobles-dark/30",
    role: "노블즈 첫 번째 부관",
    img: "https://gbe88.uk/1/Ra/cooper.webp",
    identity: "2살 수컷 닥스훈트",
    appearance: [
      "짧은 다리와 긴 허리를 씰룩거리며 공원 분수대 주변을 부지런히 누빕니다."
    ],
    personality: [
      "예쁜 암컷만 보면 이성을 잃고 직진하는 열렬한 사랑꾼 기질을 지녔습니다.",
      "특유의 느끼한 눈빛과 능글맞은 멘트를 쉴 새 없이 남발하며, 가끔 진지한 상황에서도 분위기를 파악하지 못하고 철없는 행동을 일삼아 핀잔을 듣곤 합니다."
    ],
    notes: [
      "공원 분수대를 주 무대로 활동함."
    ]
  },
  {
    name: "윈스턴",
    en: "Winston",
    faction: "노블즈",
    factionColor: "text-nobles-dark",
    factionBg: "bg-nobles/20",
    factionBorder: "border-nobles-dark/30",
    role: "노블즈 두 번째 부관",
    img: "https://gbe88.uk/1/Ra/winston.webp",
    identity: "3살 수컷 프렌치 불독",
    appearance: [
      "특유의 억울해 보이는 둥근 얼굴과 자글자글한 주름을 지녔으며, 중성화를 완료했습니다."
    ],
    personality: [
      "샌디 코브 파크에 떨어지는 낙엽 하나만 봐도 남몰래 눈물을 훔칠 정도로 풍부한 감수성의 소유자입니다.",
      "항상 팍팍한 세상을 자신만의 낭만적인 시선으로 바라보며, 쓸쓸한 목소리로 시적인 문장을 읊조리기를 즐기는 고독한 낭만주의자입니다."
    ],
    notes: [
      "감수성이 풍부해 종종 분위기를 아련하게 만듦."
    ]
  },
  {
    name: "블랙",
    en: "Black",
    faction: "무소속",
    factionColor: "text-slate-300",
    factionBg: "bg-slate-700/30",
    factionBorder: "border-slate-500/30",
    role: "독자적 관찰자",
    img: "https://gbe88.uk/1/Ra/black.webp",
    identity: "수컷 까마귀",
    appearance: [
      "나이를 가늠할 수 없는 칠흑 같은 깃털과 매섭게 빛나는 날카로운 부리를 지녔습니다."
    ],
    personality: [
      "높은 가로등 위에서 거리를 조용히 관망하며, 마치 샌디 코브의 모든 비밀을 다 꿰뚫어 보고 있다는 듯 의미심장한 울음소리를 냅니다.",
      "언제나 거리를 둔 채 신비로운 분위기를 고수하며, 땅 위에서 아등바등 살아가는 다른 동물들을 향해 은근슬쩍 우월감을 내비치며 잘난 척을 하는 오만한 면도 있습니다."
    ],
    notes: [
      "어느 세력에도 속하지 않고 독자적으로 행동함."
    ]
  },
  {
    name: "썬더",
    en: "Thunder",
    faction: "너츠",
    factionColor: "text-emerald-400",
    factionBg: "bg-emerald-500/20",
    factionBorder: "border-emerald-500/30",
    role: "너츠 수장",
    img: "https://gbe88.uk/1/Ra/thunder.webp",
    identity: "1살 수컷 청설모",
    appearance: [
      "날쌔고 다부진 체구에 눈길을 사로잡는 풍성한 꼬리를 지녔습니다."
    ],
    personality: [
      "복잡하게 앞뒤를 재지 않고 호탕하게 웃어젖히는 시원시원한 쾌남입니다.",
      "넘치는 에너지와 뜨거운 열정으로 무장하여 두려움 없이 직진하며, 샌디 코브의 고착화된 기존 세력 판도에 자신만의 방식으로 새로운 긴장감과 활력을 불어넣으려 하는 야심가입니다."
    ],
    notes: [
      "생태계에 새롭게 등장한 신진 세력 '너츠(Nuts)'를 이끎."
    ]
  }
];

export function SupportingCharacters() {
  const groupedCharacters = [
    {
      title: "스크래처",
      color: "text-[--color-scratcher]",
      characters: supportingCharacters.filter(c => c.faction === "스크래처")
    },
    {
      title: "노블즈",
      color: "text-[#D4AF37]", // Assuming nobles color
      characters: supportingCharacters.filter(c => c.faction === "노블즈")
    },
    {
      title: "기타",
      color: "text-slate-300",
      characters: supportingCharacters.filter(c => c.faction !== "스크래처" && c.faction !== "노블즈")
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="pb-24 flex flex-col h-[100dvh]"
    >
      <div className="pt-8 px-6 shrink-0">
        <h1 className="text-3xl font-bold text-white tracking-tight">조연 도감</h1>
        <p className="text-slate-400 mt-2 text-sm">샌디 코브의 씬스틸러들</p>
      </div>

      <div className="flex-1 mt-6 px-6 overflow-y-auto pb-8 space-y-12">
        {groupedCharacters.map((group, gIdx) => (
          <div key={gIdx} className="space-y-6">
            <h2 className={`text-2xl font-black italic tracking-tight ${group.color} border-b border-white/10 pb-2`}>
              {group.title}
            </h2>
            <div className="space-y-8">
              {group.characters.map((char, cIdx) => (
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
                      <h3 className="text-4xl sm:text-5xl font-black italic text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-slate-400 drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)] tracking-tighter pr-2" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.1)' }}>
                        {char.name}
                      </h3>
                      <p className={`${char.factionColor} font-bold tracking-widest text-sm uppercase mt-1 drop-shadow-md`}>
                        {char.en}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 space-y-6">
                    <div className={`inline-block px-3 py-1 ${char.factionBg} border ${char.factionBorder} rounded-lg text-sm ${char.factionColor} font-semibold`}>
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
                          <p className="font-semibold text-slate-200 text-sm mb-2">성격 및 행동</p>
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
          </div>
        ))}
      </div>
    </motion.div>
  );
}