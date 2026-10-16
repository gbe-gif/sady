import { Language } from '../context/LanguageContext';

export interface SpotData {
  title: Record<Language, string>;
  bullets: Record<Language, string[]>;
}

export const translations = {
  nav: {
    home: {
      ko: '홈 & 스팟',
      en: 'Home & Spots',
      ja: 'ホーム＆スポット',
    },
    society: {
      ko: '뒷골목 사회',
      en: 'Back Alley',
      ja: '裏路地社会',
    },
    characters: {
      ko: '캐릭터 도감',
      en: 'Characters',
      ja: 'キャラクター',
    },
    supporting: {
      ko: '조연 도감',
      en: 'Supporting',
      ja: '脇役図鑑',
    },
    languageLabel: {
      ko: '언어',
      en: 'Lang',
      ja: '言語',
    },
  },
  home: {
    locationTag: {
      ko: 'Location Guide',
      en: 'Location Guide',
      ja: 'ロケーションガイド',
    },
    streetTitle: {
      ko: '샌디 코브 스트리트',
      en: 'Sandy Cove Street',
      ja: 'サンディ・コーヴ・ストリート',
    },
    streetSubtitle: 'Sandy Cove St.',
    personaBannerTitle: {
      ko: '페르소나 랜덤 추천기',
      en: 'Random Persona Generator',
      ja: 'ペルソナ ランダム推薦機',
    },
    personaBannerDesc: {
      ko: '주사위를 굴려 샌디 코브의 캐릭터 설정을 뽑아보세요!',
      en: 'Roll the dice to draw a character profile from Sandy Cove!',
      ja: 'サイコロを振ってサンディ・コーヴのキャラクター設定を引いてみよう！',
    },
    intro: {
      ko: '2026년 미국 캘리포니아주에 위치한 트렌디한 힙스터 상권. 유명 대학가와 인접해 유동 인구가 많으며, 현재 젠트리피케이션이 활발히 진행 중입니다.',
      en: 'A trendy hipster commercial district in California, USA (2026). Situated adjacent to prestigious university campuses with heavy foot traffic, gentrification is currently in full swing.',
      ja: '2026年、米カリフォルニア州に位置するトレンディなヒップスター商業街。有名大学街に隣接し人通りが多く、現在ジェントリフィケーションが急速に進行中です。',
    },
    cards: {
      highRent: {
        title: {
          ko: '높은 임대료',
          en: 'High Rent',
          ja: '高額な家賃',
        },
        desc: {
          ko: '교통이 편리하고 핫플레이스가 많아 월세가 매우 비싼 편에 속합니다.',
          en: 'With convenient transit and numerous hot spots, monthly rent is among the steepest in the area.',
          ja: '交通至便で人気スポットが多く、家賃相場は非常に高額です。',
        },
      },
      security: {
        title: {
          ko: '우수한 치안',
          en: 'Excellent Security',
          ja: '良好な治安',
        },
        desc: {
          ko: '인근 대형 소방서 덕분에 중범죄는 드물지만, 기상천외한 하찮은 경범죄가 잦습니다.',
          en: 'Thanks to a large nearby emergency station, violent crime is rare, though bizarre and petty offenses run rampant.',
          ja: '近隣の大型消防署のおかげで重犯罪は稀ですが、奇想天外な些細な軽犯罪が多発しています。',
        },
      },
      fleaMarket: {
        title: {
          ko: '토요 플리마켓',
          en: 'Saturday Flea Market',
          ja: '土曜フリーマーケット',
        },
        desc: {
          ko: "매주 토요일마다 '샌디 코브 파크'에서 화기애애한 분위기의 플리마켓이 열립니다.",
          en: "Every Saturday, a vibrant and friendly flea market takes place at 'Sandy Cove Park'.",
          ja: "毎週土曜日、「サンディ・コーヴ・パーク」にて和気あいあいとしたフリーマーケットが開催されます。",
        },
      },
    },
    rumors: {
      title: {
        ko: 'Local Rumors',
        en: 'Local Rumors',
        ja: 'ストリートの噂話',
      },
      quote: {
        ko: '"레몬만 훔쳐가는 괴도나 제왕학을 설파하는 고성방가... 이 거리의 경범죄는 범죄라기보단 기행에 가깝지."',
        en: '"A phantom thief stealing only lemons, someone shouting lectures on emperor philosophy... The petty crimes on this street are closer to bizarre antics than real offenses."',
        ja: '「レモンだけを盗み去る怪盗や、帝王学をがなり立てる大声…この通りの軽犯罪は罪というより奇行に近いね。」',
      },
    },
    spotsTitle: {
      ko: '주요 스팟',
      en: 'Key Spots',
      ja: '主なスポット',
    },
    spots: {
      sunsetPalace: {
        title: {
          ko: '선셋 팰리스 아파트먼트',
          en: 'Sunset Palace Apartments',
          ja: 'サンセット・パレス・アパートメント',
        },
        bullets: {
          ko: [
            '1976년에 준공된 9층 규모의 아담한 빈티지 아파트. 총 25세대가 거주 중.',
            '쓸만한 명품 헌옷이 쓰레기장으로 자주 배출됨.',
            "깐깐하지만 성실한 경비원 '행크'가 건물을 전담하여 관리 중.",
          ],
          en: [
            'A cozy 9-story vintage apartment complex built in 1976, housing 25 households.',
            'High-end secondhand branded clothing is frequently discarded in the waste area.',
            "Hank, a meticulous yet dedicated security guard, oversees building management.",
          ],
          ja: [
            '1976年竣工の9階建てヴィンテージアパート。全25世帯が入居中。',
            '状態の良い高級ブランドの古着がゴミ捨て場によく出される。',
            '気難しくも実直な警備員『ハンク』が専任で建物を管理中。',
          ],
        },
      },
      sandyPark: {
        title: {
          ko: '샌디 코브 파크',
          en: 'Sandy Cove Park',
          ja: 'サンディ・コーヴ・パーク',
        },
        bullets: {
          ko: [
            '약 200평 규모로 조성된 도심 속 포켓 파크. 분수대는 인간들의 휴식처.',
            "버려진 지하 펌프장과 미끄럼틀은 '플러피즈'의 전용 구역으로 점령당함.",
            '라쿤들의 텃세로 인해 인간은 출입을 꺼리며, 다른 동물 세력도 접근을 피함.',
          ],
          en: [
            'An urban pocket park spanning roughly 660 m². The fountain serves as a resting spot for humans.',
            "The abandoned underground pump room and slide have been seized as the Fluffies' exclusive domain.",
            'Due to territorial raccoons, humans avoid visiting, and other animal factions keep their distance.',
          ],
          ja: [
            '約200坪規模の都会のポケットパーク。噴水広場は人間たちの憩いの場。',
            '放置された地下ポンプ室と滑り台は『フラッフィーズ』の専用アジトとして占拠。',
            'アライグマたちの縄張り意識により人間は立ち寄りを避け、他の動物勢力も接近を警戒。',
          ],
        },
      },
      sandyMart: {
        title: {
          ko: '샌디 마트 & 약국',
          en: 'Sandy Mart & Pharmacy',
          ja: 'サンディ・マート＆薬局',
        },
        bullets: {
          ko: [
            '마트: 외벽에 멜론만 한 낡은 환풍구 구멍이 있어 동물의 비밀 통로로 쓰임.',
            '마트 뒤편 폐기물 쓰레기통은 먹이를 위한 격전지. 휴무일엔 대규모 절도 작전 발생.',
            '약국: 귀여운 것에 약한 노인 약사가 운영하는 평화로운 중립 구역. 상비약이 구비되어 있음.',
          ],
          en: [
            'Mart: A melon-sized exhaust vent on the exterior wall serves as a secret animal tunnel.',
            'Dumpsters behind the mart are a battlefield for food. Large-scale heists occur on store holidays.',
            'Pharmacy: A peaceful neutral zone run by an elderly pharmacist with a soft spot for cute critters. Stocked with medicines.',
          ],
          ja: [
            'マート: 外壁にメロン大の換気口の穴があり、動物たちの秘密の抜け道として利用されている。',
            'マート裏手の廃棄用ゴミ箱は食料確保の激戦区。定休日には大規模な強奪作戦が発生。',
            '薬局: 可愛いものに目がない老薬剤師が営む平和な中立地帯。常備薬が揃っている。',
          ],
        },
      },
      alleySquare: {
        title: {
          ko: '뒷골목 광장 & 관리국',
          en: 'Back Alley Square & Animal Control',
          ja: '裏路地広場＆管理局',
        },
        bullets: {
          ko: [
            "쓰레기 집하장은 파밍과 물물 교환이 일어나는 동물 사회 최대의 시장이자 '광장'.",
            '청소차가 오기 직전에는 반드시 해산해야 하는 엄격한 룰 존재.',
            "'길동물관리국'은 보조금으로 운영되는 악덕 시민 단체. 광장 주변을 순찰해 각별한 주의 요망.",
          ],
          en: [
            "The waste collection center serves as the animal underworld's largest open market and 'Square' for foraging and bartering.",
            'Strict rule: everyone must disperse immediately before the garbage collection truck arrives.',
            "'Stray Animal Control' is a corrupt subsidized civic group patrolling the square; extreme caution is advised.",
          ],
          ja: [
            'ゴミ集積所は物資収集と物々交換が行われる動物社会最大の市場であり『広場』。',
            '清掃車が到着する直前には必ず解散しなければならない厳格なルールが存在。',
            '『野良動物管理局』は補助金目当ての悪徳市民団体。広場周辺を巡回しているため厳重な警戒が必要。',
          ],
        },
      },
    },
  },
  society: {
    badge: {
      ko: '은밀한 세력',
      en: 'Hidden Factions',
      ja: '秘密の勢力',
    },
    title: {
      ko: '은밀한 길 동물 사회',
      en: 'The Secret Alley Animal Society',
      ja: '密かな路地裏の動物社会',
    },
    intro: {
      ko: '인간들은 눈치채지 못했지만, 샌디 코브의 이면에는 동물들만의 구역과 세력이 나뉘어 아슬아슬한 균형을 유지하고 있습니다. 인간의 분실물, 남은 음식, 뒷골목 정보는 이들에게 가장 중요한 핵심 자원입니다.',
      en: 'Unbeknownst to humans, the shadows of Sandy Cove are divided into territories ruled by animal factions in a delicate balance. Lost items, food scraps, and back-alley intelligence serve as their most precious life-or-death resources.',
      ja: '人間たちには知られていませんが、サンディ・コーヴの裏側では動物たちの縄張りと勢力が分かれ、危うい均衡を保っています。人間の落とし物、残飯、裏路地の情報こそが、彼らにとって最も重要な生命線です。',
    },
    threeFactionsTitle: {
      ko: '3대 세력 구도',
      en: 'The Three Major Factions',
      ja: '三大勢力の構図',
    },
    factionNames: {
      fluffies: {
        ko: '플러피즈',
        en: 'Fluffies',
        ja: 'フラッフィーズ',
      },
      scratcher: {
        ko: '스크래처',
        en: 'Scratcher',
        ja: 'スクラッチャー',
      },
      nobles: {
        ko: '노블즈',
        en: 'Nobles',
        ja: 'ノーブルズ',
      },
    },
    factionsDynamicDesc: {
      ko: "세력 간의 견제와 다툼이 치열하지만, 공동의 적인 '길동물관리국' 앞에서는 임시 협력 체제를 구축하기도 합니다. 이들은 때로 인간의 물건을 직접 터는 등, 교묘하게 인간의 생활권을 이용하며 살아갑니다.",
      en: 'While rivalry and territorial disputes run fierce, they form temporary alliances against their shared nemesis, the "Stray Animal Control Bureau." Skimming supplies directly from humans, they cleverly exploit human living spaces to survive.',
      ja: '勢力間の牽制と争いは熾烈ですが、共通の敵である「野良動物管理局」の前では一時的な協力体制を築くこともあります。時には人間の私物を直接奪うなど、人間の生活圏を巧みに利用して生きています。',
    },
    fluffies: {
      name: {
        ko: '플러피즈',
        en: 'Fluffies',
        ja: 'フラッフィーズ',
      },
      tag: 'Fluffies',
      subtitle: {
        ko: '샌디 코브의 길 동물 사회를 제패한 근육질 라쿤 갱단',
        en: 'A muscular raccoon syndicate dominating the street animal underworld of Sandy Cove',
        ja: 'サンディ・コーヴの路地裏動物社会を制覇した筋肉派アライグマ軍団',
      },
      bullets: {
        ko: [
          '뒷골목에서 20년이 넘는 깊은 역사를 자랑함.',
          '철저한 위생 관리로 광견병 발병률 0% 유지 중.',
          '뛰어난 조직력과 개성이 담긴 시그니처 복장 착용.',
          '현재 수컷 90%와 암컷 10%의 성비를 보임. (암컷이 관리국에 자주 납치됨)',
        ],
        en: [
          'Boasts over 20 years of storied history in the back alleys.',
          'Strict hygiene protocol maintains a 0% rabies infection rate.',
          'Known for exceptional teamwork and distinctive signature gear.',
          'Gender ratio currently stands at 90% male and 10% female. (Females are frequently captured by Animal Control)',
        ],
        ja: [
          '裏路地で20年以上の長きにわたる歴史を誇る。',
          '徹底した衛生管理により、狂犬病発症率0%を維持。',
          '卓越した組織力と個性が光るシグネチャー衣装を着用。',
          '現在の性比はオス90%・メス10%。（メスが管理局に捕獲されやすいため）',
        ],
      },
      rulesTitle: {
        ko: '플러피즈의 엄격한 규율',
        en: "Fluffies' Strict Code of Conduct",
        ja: 'フラッフィーズの厳格な掟',
      },
      rules: {
        ko: [
          '1. 우리보다 약한 자는 반드시 배려할 것.',
          '2. 길을 건널 때는 인간들의 횡단보도를 이용할 것.',
          '3. 받은 은혜와 배신은 죽을 때까지 잊지 않고 갚아줄 것.',
        ],
        en: [
          '1. Always show consideration for those weaker than ourselves.',
          '2. Always use human crosswalks when crossing the street.',
          '3. Never forget a kindness or a betrayal—repay both until the day you die.',
        ],
        ja: [
          '1. 自分たちより弱い者を必ず思いやること。',
          '2. 道路を渡る時は、必ず人間の横断歩道を使うこと。',
          '3. 受けた恩と裏切りは、死ぬまで忘れず必ず返すこと。',
        ],
      },
      strongholdsTitle: {
        ko: '주요 거점',
        en: 'Key Strongholds',
        ja: '主要拠点',
      },
      strongholds: [
        {
          title: {
            ko: '미끄럼틀 (정찰 타워)',
            en: 'Slide (Scout Tower)',
            ja: '滑り台（偵察タワー）',
          },
          desc: {
            ko: '공원 놀이터의 미끄럼틀을 정찰 타워로 활용. 인간 어린이들이 다칠까 봐 난간 하자를 막기 위해 겉으로만 텃세를 부림.',
            en: 'The playground slide serves as their main scout tower. They feign hostility only to deter human children from falling off broken guardrails.',
            ja: '公園遊具の滑り台を偵察タワーとして活用。人間の幼児が壊れた手すりで怪我をしないよう、表面上だけ威嚇して遠ざけている。',
          },
        },
        {
          title: {
            ko: '지하 펌프장 (메인 본부)',
            en: 'Underground Pump Station (HQ)',
            ja: '地下ポンプ室（メイン本部）',
          },
          desc: {
            ko: '공원 구석 30년 전 폐쇄된 지하시설. 환기구를 통해서만 은밀히 출입. 캠핑용 에어 매트리스와 구급상자, 식량 등을 깔끔하게 정리해 둠.',
            en: 'An underground facility decommissioned 30 years ago. Accessed covertly via ventilation shafts; outfitted neatly with camping air mattresses, first-aid kits, and organized food caches.',
            ja: '公園の片隅にある30年前に閉鎖された地下施設。通風孔からのみ秘密裏に出入り可能。キャンプ用エアーマットや救急箱、食料などが整然と並ぶ。',
          },
        },
      ],
    },
    scratcher: {
      name: {
        ko: '스크래처',
        en: 'Scratcher',
        ja: 'スクラッチャー',
      },
      tag: 'Scratcher',
      subtitle: {
        ko: '샌디 코브의 고양이들로 구성된 정보 특화 조직',
        en: "An intelligence syndicate comprised of Sandy Cove's street cats",
        ja: 'サンディ・コーヴの猫たちで構成された情報特化型組織',
      },
      bullets: {
        ko: [
          '소리 없는 은신과 은밀한 첩보 활동에 뛰어난 두각을 나타냄.',
          '조직원의 대다수가 거리를 떠도는 길고양이 출신으로 이루어짐.',
          '집고양이의 경우, 고급 간식을 상납하고 주인의 사적인 정보를 팔아넘기는 조건으로 입단 가능.',
          '인간들의 SNS에도 올라오지 않는 양질의 고급 정보를 다수 확보.',
          '인간들의 눈을 피해 주로 늦은 밤 시간대에 활발하게 활동하며, 옥상이나 지붕 등 인간의 손이 닿지 않는 높은 장소를 주요 활동 구역으로 삼음.',
        ],
        en: [
          'Unrivaled mastery in silent stalking, camouflage, and covert espionage.',
          'The vast majority of operatives are recruited from alley and street cat backgrounds.',
          'House pets may join only by paying tributes of gourmet treats and leaking confidential household intel on their owners.',
          'Hoards exclusive high-value intelligence never leaked even to human social media.',
          'Operates mainly late at night to avoid human eyes, dominating vantage points like rooftops and awnings beyond human reach.',
        ],
        ja: [
          '物音ひとつ立てない隠密行動と機密諜報活動において卓越した手腕を発揮。',
          '構成員の大多数は過酷な街を生き抜いてきた野良猫出身。',
          '飼い猫の場合は、高級おやつを上納し、飼い主の私的情報を密告することを条件に入会可能。',
          '人間のSNSにすら出回らない超一級の機密情報を多数独占。',
          '人間の目を避けて深夜帯に活発に行動し、屋上や屋根など人間の手の届かない高所を拠点とする。',
        ],
      },
    },
    nobles: {
      name: {
        ko: '노블즈',
        en: 'Nobles',
        ja: 'ノーブルズ',
      },
      tag: 'Nobles',
      subtitle: {
        ko: '부유층들이 고용한 전문 도그워커가 산책시키는 엘리트 반려견 모임',
        en: 'An elite society of pampered companion dogs chauffeured by hired dog walkers',
        ja: '富裕層に雇われたプロのドッグウォーカーが散歩させるエリート愛犬サークル',
      },
      bullets: {
        ko: [
          '공원 중앙의 화려한 분수대와 식수대를 주요 거점으로 삼고 활동함.',
          '부유한 주인들의 넘치는 사랑을 받고 자라 구김살 없이 순수하고 낙천적인 성격.',
          '척박하게 살아가는 길 동물들에게도 스스럼없이 먼저 호의와 온정을 베푸는 편.',
          '다만 험난한 거리의 세상물정에 너무 어두워, 다른 세력들의 뻔한 거짓말에도 쉽게 속아 넘어감.',
        ],
        en: [
          'Frequents the ornate central fountain and fresh drinking taps of Sandy Cove Park.',
          'Raised with lavish affection from wealthy owners, rendering them cheerful, trusting, and carefree.',
          'Generously extends goodwill and warm food to stray alley animals without hesitation.',
          'Completely naive to streetwise perils, making them easily tricked by transparent lies from rival factions.',
        ],
        ja: [
          '公園中央の華麗な噴水と水飲み場を主な拠点として優雅に活動。',
          'セレブな飼い主の惜しみない愛情を受けて育ち、屈託がなく純真で楽天的な性格。',
          '過酷に生きる野良動物たちにも、警戒心なく自ら進んで好意と施しを与える。',
          'ただし厳しい世間の荒波を知らないため、他勢力の見え透いた嘘にもあっさり騙されてしまう。',
        ],
      },
    },
  },
  characters: {
    title: {
      ko: '캐릭터 도감',
      en: 'Character Encyclopedia',
      ja: 'キャラクター名鑑',
    },
    subtitle: {
      ko: '플러피즈의 핵심 멤버들',
      en: 'Core Members of the Fluffies',
      ja: 'フラッフィーズの主要メンバーたち',
    },
    sections: {
      identity: {
        ko: '정체성 및 외형',
        en: 'Identity & Appearance',
        ja: '正体および外見',
      },
      personality: {
        ko: '성격',
        en: 'Personality',
        ja: '性格',
      },
      relationship: {
        ko: '당신과의 관계성',
        en: 'Relationship with You',
        ja: 'あなたとの関係性',
      },
      behavior: {
        ko: '행동 양식',
        en: 'Behavioral Patterns',
        ja: '行動様式',
      },
      notes: {
        ko: '특이사항',
        en: 'Notable Quirks',
        ja: '特記事項',
      },
    },
    list: [
      {
        name: {
          ko: '빅 토니',
          en: 'Big Tony',
          ja: 'ビッグ・トニー',
        },
        en: 'Big Tony',
        role: {
          ko: '플러피즈의 절대적 보스',
          en: 'Absolute Boss of the Fluffies',
          ja: 'フラッフィーズの絶対的ボス',
        },
        img: 'https://gbe88.uk/1/Ra/tony.webp',
        identity: {
          ko: '5살 수컷 라쿤',
          en: '5-year-old male raccoon',
          ja: '5歳のオスのラクーン',
        },
        appearance: {
          ko: [
            '19kg의 묵직한 중형견 크기에 우락부락한 근육질 몸매.',
            '여유로운 밤색 눈동자와 거친 듯 부드러운 털.',
            '목에 낡은 붉은색 반다나.',
          ],
          en: [
            'Weighs a hefty 19kg with the build of a medium dog and a rugged, muscular physique.',
            'Composed chestnut-brown eyes with coarse yet surprisingly plush fur.',
            'Wears a faded, weathered red bandana around his neck.',
          ],
          ja: [
            '19kgのずっしりとした中型犬サイズに、たくましい筋肉質の体躯。',
            '余裕を湛えた栗色の瞳と、ワイルドでありながら柔らかな毛並み。',
            '首元には年季の入った赤いバンダナ。',
          ],
        },
        personality: {
          ko: [
            'ESTJ.',
            '고전적인 마피아 보스처럼 기사도 정신이 투철하며, 자기 사람을 지키려는 책임감이 매우 강함.',
          ],
          en: [
            'ESTJ.',
            'Possesses a staunch chivalric code like a classic mafia boss, fueled by a fierce sense of responsibility to protect his own.',
          ],
          ja: [
            'ESTJ。',
            'クラシックなマフィアのボスのごとく騎士道精神に溢れ、身内を守り抜く責任感が極めて強い。',
          ],
        },
        relationship: {
          ko: [
            '처음엔 보호 대상으로만 여기지만, 점차 당신의 일거수일투족을 통제하고 보호하려는 묵직한 소유욕을 드러냄.',
          ],
          en: [
            'Initially treats you merely as someone under his wing, but gradually reveals a heavy, possessive urge to protect and oversee your every move.',
          ],
          ja: [
            '最初はただの保護対象と見なしているが、次第にあなたの一挙手一投足を庇護・掌握しようとする重厚な独占欲を露わにする。',
          ],
        },
        behavior: {
          ko: [
            '말보다는 행동으로 헌신하며, 위험이 닥치면 자신의 큰 덩치로 당신을 감싸 안는 과잉보호적 스킨십을 보임.',
          ],
          en: [
            'Devotes himself through deeds over words, instinctively shielding you with his massive frame in an overprotective embrace when danger looms.',
          ],
          ja: [
            '言葉よりも行動で尽くし、危険が迫ればその大きな体であなたを包み込むように庇う過保護なスキンシップを見せる。',
          ],
        },
        notes: {
          ko: [
            '매일 밤 조직원들을 이끌고 인간들에게 소시지 통행료를 수금함.',
            '전대 보스이자 양부였던 \'빅 찰스\'가 로드킬로 세상을 떠난 후, 철저하게 교통법규를 숙지하고 지킴.',
            '아파트 경비원 \'행크\'를 최대의 라이벌로 여기며, 칠리와 풀이 섞인 쌉싸름한 체향이 남.',
          ],
          en: [
            'Leads his crew every night to collect sausage tolls from passing humans.',
            'Strictly observes and respects traffic laws ever since his predecessor and adoptive father \'Big Charles\' died in a roadkill accident.',
            'Considers apartment security guard \'Hank\' his greatest rival; carries a bittersweet aroma of chili and crushed herbs.',
          ],
          ja: [
            '毎晩仲間を率いて、人間たちからソーセージの通行料を徴収している。',
            '先代ボスであり養父だった「ビッグ・チャールズ」がロードキルで他界して以来、徹底して交通ルールを学び遵守している。',
            'マンション警備員「ハンク」を最大のライバルと見なしており、チリと草が混ざり合ったほろ苦い体臭が漂う。',
          ],
        },
      },
      {
        name: {
          ko: '비토',
          en: 'Vito',
          ja: 'ヴィトー',
        },
        en: 'Vito',
        role: {
          ko: '플러피즈의 두뇌이자 참모',
          en: 'Brain & Chief Strategist of the Fluffies',
          ja: 'フラッフィーズの頭脳であり参謀',
        },
        img: 'https://gbe88.uk/1/Ra/vito.webp',
        identity: {
          ko: '4살 수컷 라쿤',
          en: '4-year-old male raccoon',
          ja: '4歳のオスのラクーン',
        },
        appearance: {
          ko: [
            '15kg의 늘씬하고 길쭉한 체형에 빳빳한 털.',
            '매사를 꿰뚫어 보는 듯한 냉철한 흑안, 알이 빠진 유아용 안경.',
          ],
          en: [
            '15kg lithe, elongated frame with crisp, stiff fur.',
            'Piercing, cool black eyes that see through everything; wears lensless toddler glasses.',
          ],
          ja: [
            '15kgのスリムで細長い体型に、ピンと張った硬めの毛並み。',
            'すべてを見通すような冷徹な黒い瞳と、レンズの外れた幼児用メガネ。',
          ],
        },
        personality: {
          ko: [
            'INTP.',
            '매사에 냉소적이고 계산적인 매드 사이언티스트 기질이 다분하나, 은근히 허당기 있는 너드(Nerd).',
          ],
          en: [
            'INTP.',
            'Possesses the cynical, calculating aura of a mad scientist, yet harbors an endearing, clumsy nerdiness underneath.',
          ],
          ja: [
            'INTP。',
            '常にシニカルで計算高いマッドサイエンティスト気質だが、どこか抜けていて愛嬌のあるオタク（Nerd）。',
          ],
        },
        relationship: {
          ko: [
            '당신을 향한 감정을 데이터와 논리로 부정하려 애쓰지만, 사실은 애정결핍이 심해 은밀하게 당신의 손길을 갈구함.',
          ],
          en: [
            'Frantically tries to dismiss his feelings with cold data and logic, but secretly suffers deep affection deprivation and yearns for your touch.',
          ],
          ja: [
            'あなたへの感情をデータと論理で否定しようと必死になるが、実は重度の寂しがり屋で密かにスキンシップを渇望している。',
          ],
        },
        behavior: {
          ko: [
            '겉으로는 틱틱거리면서도 위급하거나 지칠 때면 속수무책으로 당신에게 매달리고 파고드는 츤데레적 면모를 보임.',
          ],
          en: [
            'Bickers and acts prickly on the outside, yet burrows helplessly into your embrace when exhausted or stressed in classic tsundere fashion.',
          ],
          ja: [
            '表向きは毒づきながらも、非常時や疲れ切った時には無防備にあなたにしがみつき擦り寄るツンデレな一面を見せる。',
          ],
        },
        notes: {
          ko: [
            '길에서 주운 분실 스마트폰으로 와이파이를 해킹해 고급 정보를 수집함.',
            '과거 의사였던 주인에게 유기된 상처가 있으나, 그 덕분에 잡학 다식한 지식을 자랑함.',
            '조직원 중 가장 체력이 약해 도주 상황에서는 늘 로꼬의 등에 업혀 도망치며, 이슬과 먼지가 섞인 서늘한 체향이 남.',
          ],
          en: [
            'Hacks local Wi-Fi networks using lost smartphones found on streets to gather classified intel.',
            'Traumatized by abandonment by his former doctor owner, yet that upbringing blessed him with encyclopedic erudition.',
            'Has the weakest stamina in the crew, always piggybacking on Rocco during escapes; carries a crisp, cool scent of morning dew and dust.',
          ],
          ja: [
            '道端で拾った落とし物のスマホでWi-Fiをハッキングし、貴重な情報を収集する。',
            'かつて医師の飼い主に遺棄されたトラウマを抱えるが、そのおかげで博学多才な知識を誇る。',
            '組織内で最も体力がなく、逃走時はいつもロッコにおんぶされて逃げる。朝露と埃が混ざった涼やかな体臭がする。',
          ],
        },
      },
      {
        name: {
          ko: '로꼬',
          en: 'Rocco',
          ja: 'ロッコ',
        },
        en: 'Rocco',
        role: {
          ko: '플러피즈의 무투파 행동대장',
          en: 'Enforcer & Action Captain of the Fluffies',
          ja: 'フラッフィーズの武闘派行動隊長',
        },
        img: 'https://gbe88.uk/1/Ra/rocco.webp',
        identity: {
          ko: '4살 수컷 라쿤',
          en: '4-year-old male raccoon',
          ja: '4歳のオスのラクーン',
        },
        appearance: {
          ko: [
            '17kg의 탄탄한 근육질에 거친 털, 왼쪽 눈가에 훈장 같은 흉터를 지님.',
            '열정이 끓어오르는 흑적안, 찢어진 아동용 데님 조끼.',
          ],
          en: [
            '17kg of solid muscle with wiry fur; bears an honorable scar near his left eye.',
            'Fierce, simmering reddish-black eyes; wears a ragged, torn children\'s denim vest.',
          ],
          ja: [
            '17kgの引き締まった筋肉質に荒い毛並み、左目の周りには勲章のような古傷。',
            '情熱が燃えたぎる黒赤色の瞳と、破れた子供用のデニムベスト。',
          ],
        },
        personality: {
          ko: [
            'ESTP.',
            '복잡한 생각보다는 몸이 먼저 나가는 단순 무식한 아드레날린 중독자이자 폭발물 마니아.',
          ],
          en: [
            'ESTP.',
            'An explosive action-first adrenaline junkie and pyrotechnic maniac who punches before thinking.',
          ],
          ja: [
            'ESTP。',
            '小難しい思考より身体が先に動く猪突猛進型のアドレナリン中毒者にして、爆発物マニア。',
          ],
        },
        relationship: {
          ko: [
            '짓궂은 장난과 가벼운 입질로 애정을 거칠게 표현하다가도, 점차 당신을 지키기 위해 본능적으로 몸을 던지는 맹목적인 방어기제를 형성.',
          ],
          en: [
            'Expresses fondness through rowdy pranks and playful nips, eventually forming a reckless, blind instinct to throw his body in harm\'s way for you.',
          ],
          ja: [
            'いたずらや甘噛みで乱暴に好意を示しながらも、次第にあなたを守るためなら本能的に身を投げ出す盲目的な防衛本能を形成していく。',
          ],
        },
        behavior: {
          ko: [
            '감정을 숨기지 못하고 폭발적으로 애정을 쏟아내며, 머리로 계산하기 전에 당신을 위해 희생부터 하고 보는 무모함을 보임.',
          ],
          en: [
            'Unable to hold back his feelings, pours out explosive affection and rushes into self-sacrifice for your sake before common sense can stop him.',
          ],
          ja: [
            '感情を隠しきれず爆発的に好意を注ぎ込み、頭で考えるより先にあなたのために身代わりになろうとする無鉄砲さを見せる。',
          ],
        },
        notes: {
          ko: [
            '콜라와 멘토스를 활용한 폭탄 등 화려하고 시끄러운 액션을 선호함.',
            '핫소스 발사 등 각종 화학적 무기 사용에 능통하지만, 종종 오발 사고를 내기도 함.',
            '타바스코와 머스터드가 섞인 톡 쏘는 자극적인 체향이 남.',
          ],
          en: [
            'Prefers loud, flashy theatrics like soda-and-Mentos reaction bombs.',
            'Proficient in makeshift chemical weapons like hot-sauce sprayers, though prone to hilarious misfires.',
            'Carries a sharp, pungent aroma of Tabasco and yellow mustard.',
          ],
          ja: [
            'コーラとメントスを使った爆弾など、ド派手で騒がしいアクションを好む。',
            'ホットソース発射などの化学兵器の扱いに長けているが、時々誤射事故を起こす。',
            'タバスコとマスタードが混ざり合った刺激的でツンとくる体臭がする。',
          ],
        },
      },
      {
        name: {
          ko: '말로',
          en: 'Marlo',
          ja: 'マーロ',
        },
        en: 'Marlo',
        role: {
          ko: '플러피즈의 외교 및 협상 담당',
          en: 'Diplomacy & Negotiations Specialist',
          ja: 'フラッフィーズの外交・交渉担当',
        },
        img: 'https://gbe88.uk/1/Ra/malo.webp',
        identity: {
          ko: '3살 수컷 라쿤',
          en: '3-year-old male raccoon',
          ja: '3歳のオスのラクーン',
        },
        appearance: {
          ko: [
            '15kg의 체급. 겉보기엔 통통하고 복슬복슬하나 아래엔 탄탄한 근육.',
            '무해하고 동그란 녹색 눈동자, 핑크색 보타이.',
          ],
          en: [
            '15kg build. Looks chubby and fluffy on the surface, but hides solid muscle underneath.',
            'Deceptively innocent, round green eyes; wears a cute pink bowtie.',
          ],
          ja: [
            '15kgの体格。一見ぽっちゃりモフモフだが、下には引き締まった筋肉。',
            '無害そうにつぶらな緑の瞳と、ピンク色の蝶ネクタイ。',
          ],
        },
        personality: {
          ko: [
            'ENFP.',
            '완벽한 연기력을 자랑하는 투페이스.',
            '관심받기를 즐기지만 속으로는 세상만사에 심드렁하고 냉소적.',
          ],
          en: [
            'ENFP.',
            'A consummate two-faced actor.',
            'Loves basking in adoration, but secretly maintains an aloof, world-weary cynicism inside.',
          ],
          ja: [
            'ENFP。',
            '完璧な演技力を誇るツーフェイス（二面性）。',
            '注目を浴びるのを好むが、内面では世のすべてに冷淡でシニカル。',
          ],
        },
        relationship: {
          ko: [
            '전략적인 애교와 플러팅을 시도하지만, 점차 당신의 칭찬과 관심에 집착하며 질투심을 숨기지 못하게 됨.',
          ],
          en: [
            'Initially uses calculating flattery and charms, but gradually becomes desperately addicted to your praise and cannot hide his jealousy.',
          ],
          ja: [
            '計算された愛嬌や甘いアプローチを仕掛けるが、次第にあなたの称賛や関心に執着し、嫉妬心を隠せなくなっていく。',
          ],
        },
        behavior: {
          ko: [
            '관심을 끌기 위해 꾀병을 부리거나 다친 척을 하며, 화려한 쇼맨십 뒤에 숨겨진 여린 진심을 오직 당신에게만 기대듯 드러냄.',
          ],
          en: [
            'Fakes sickness or exaggerates tiny injuries to win your attention, leaning on you exclusively to reveal the vulnerable heart behind his showmanship.',
          ],
          ja: [
            '関心を惹くために仮病を使ったり怪我したフリをし、華麗なショーマンシップの裏に隠された脆い本音をあなただけに甘えるように見せる。',
          ],
        },
        notes: {
          ko: [
            '조직의 이익을 위해 인간들에게 애교를 부려 물자를 뜯어내지만, 뒤돌아서면 극심한 현타를 느낌.',
            '귀여운 외모를 무기로 모든 협상에서 우위를 점하며, 위기 상황이 닥치면 날렵한 반전 운동신경을 뽐냄.',
            '따스한 햇살과 허브가 어우러진 싱그러운 체향이 남.',
          ],
          en: [
            'Acts cute to fleece treats and supplies from gullible humans for the crew, but suffers existential dread the second their backs are turned.',
            'Weaponizes his adorable looks to dominate every negotiation, revealing astonishing agility when things go sideways.',
            'Carries a fresh, breezy scent reminiscent of warm sunshine and garden herbs.',
          ],
          ja: [
            '組織の利益のために人間に媚びて物資を巻き上げるが、背を向けた瞬間に激しい虚無感（賢者タイム）に襲われる。',
            '愛くるしい容姿を武器にあらゆる交渉で優位に立ち、非常時には俊敏な驚異の運動神経を披露する。',
            '温かな日差しとハーブが調和した爽やかな体臭が漂う。',
          ],
        },
      },
      {
        name: {
          ko: '덤프',
          en: 'Dump',
          ja: 'ダンプ',
        },
        en: 'Dump',
        role: {
          ko: '플러피즈의 철벽 보안팀장 (도저의 쌍둥이 형)',
          en: 'Iron-Wall Head of Security (Dozer\'s Older Twin)',
          ja: '鉄壁のセキュリティ部長（ドーザーの双子の兄）',
        },
        img: 'https://gbe88.uk/1/Ra/dump.webp',
        identity: {
          ko: '3살 수컷 라쿤',
          en: '3-year-old male raccoon',
          ja: '3歳のオスのラクーン',
        },
        appearance: {
          ko: [
            '28kg의 압도적인 거구를 자랑하는 우락부락한 근육질에 부드러운 털.',
            '나른한 금안, 왼쪽 눈을 덮는 안대.',
          ],
          en: [
            'Massive 28kg hulking frame of raw muscle, contrasting with unusually soft, plush fur.',
            'Languid golden eyes; wears an eyepatch over his left eye.',
          ],
          ja: [
            '28kgの圧倒的な巨躯を誇る屈強な筋肉質と、意外なほど柔らかな毛並み。',
            '気だるげな金色の瞳と、左目を覆うアイパッチ。',
          ],
        },
        personality: {
          ko: [
            'ISFP.',
            '말수가 적고 묵묵히 명령을 수행하지만, 단것에 껌벅 죽는 온순한 곰 같은 반전 매력이 있음.',
          ],
          en: [
            'ISFP.',
            'A man of few words who executes orders in stoic silence, but melts like a gentle bear the moment sweets appear.',
          ],
          ja: [
            'ISFP。',
            '口数が少なく寡黙に命令をこなすが、甘いものには目がない温厚なクマのようなギャップ萌えの持ち主。',
          ],
        },
        relationship: {
          ko: [
            '거대한 덩치로 말없이 위협하듯 다가오지만, 마음을 연 후에는 덩치에 맞지 않게 치근덕거리며 찰싹 달라붙는 응석받이가 됨.',
          ],
          en: [
            'Approaches silently and intimidatingly at first, but once he opens up, becomes a surprisingly clingy, cuddly sweetheart who won\'t leave your side.',
          ],
          ja: [
            '巨体で無言の威圧感を放ちながら近づくが、心を許した後はその巨躯に似合わずべったりと甘えてくる甘えん坊に変貌する。',
          ],
        },
        behavior: {
          ko: [
            '당신의 몸 위로 묵직한 무게감을 실어 기대거나 짓누르는 것으로 은밀한 애정을 표현하며, 당신이 주는 간식 앞에서는 무장해제 됨.',
          ],
          en: [
            'Expresses affection by heavily leaning his full weight against you, melting into absolute docility the second you offer a treat.',
          ],
          ja: [
            'あなたの体にずっしりと体重をかけて寄りかかり圧をかけることで愛情を表現し、あなたが差し出すおやつの前では完全無防備になる。',
          ],
        },
        notes: {
          ko: [
            '플러피즈의 구역을 순찰하며 타 조직의 접근을 차단함.',
            '과거 코요테와 1대1로 맞붙어 승리한 전설적인 전적을 보유함.',
            '침입자가 크게 위협적이지 않다면, 뇌물(단것)을 받고 슬쩍 눈감아주는 유도리를 발휘함.',
            '파인애플과 포멜로가 섞인 달콤하고 부드러운 체향이 남.',
          ],
          en: [
            'Patrols Fluffies turf to keep rival gangs and predators strictly off-limits.',
            'Holds legendary street cred for taking down a wild coyote in a 1-on-1 brawl.',
            'Flexible enough to look the other way if a trespasser offers a sufficiently sweet sugary bribe.',
            'Carries a mellow, sweet fragrance of ripe pineapple and pomelo citrus.',
          ],
          ja: [
            'フラッフィーズの縄張りを巡回し、他組織の侵入を徹底阻止する。',
            '過去にコヨーテと1対1で戦い勝利した伝説的な戦歴を持つ。',
            '侵入者がさほど脅威でなければ、賄賂（甘いお菓子）を受け取って見逃してやる柔軟さを発揮する。',
            'パイナップルとポメロが混ざり合った甘くフルーティーな体臭がする。',
          ],
        },
      },
      {
        name: {
          ko: '도저',
          en: 'Dozer',
          ja: 'ドーザー',
        },
        en: 'Dozer',
        role: {
          ko: '플러피즈의 무자비한 집행팀장 (덤프의 쌍둥이 동생)',
          en: 'Ruthless Enforcement Captain (Dump\'s Younger Twin)',
          ja: '冷酷な執行部長（ダンプの双子の弟）',
        },
        img: 'https://gbe88.uk/1/Ra/dozer.webp',
        identity: {
          ko: '3살 수컷 라쿤',
          en: '3-year-old male raccoon',
          ja: '3歳のオスのラクーン',
        },
        appearance: {
          ko: [
            '28kg의 압도적인 거구와 거친 털, 우락부락한 근육질 몸매.',
            '무심하고 건조해 보이는 금안, 광택이 흐르는 청바지용 체인 목걸이.',
          ],
          en: [
            'Massive 28kg colossus with bristly fur and an intimidating, sculpted muscular build.',
            'Indifferent, cold golden gaze; wears a polished jeans-wallet chain as a necklace.',
          ],
          ja: [
            '28kgの圧倒的な巨体と荒々しい剛毛、隆々とした筋肉質の肉体美。',
            '無関心でドライな金色の瞳と、鈍く輝くジーンズ用ウォレットチェーンの首輪。',
          ],
        },
        personality: {
          ko: [
            'ISTP.',
            '감정 동요가 없는 차가운 집행자이자 심각한 결벽증 환자이며, 동시에 짭짤한 미식을 즐기는 미식가.',
          ],
          en: [
            'ISTP.',
            'An unshakeable, cold enforcer with extreme germaphobia and a refined palate for savory, salty delicacies.',
          ],
          ja: [
            'ISTP。',
            '感情の起伏がない冷徹な執行人にして重度の潔癖症、同時に塩気のある美食を好むグルメ家。',
          ],
        },
        relationship: {
          ko: [
            '당신을 철저히 통제하려 들며, 당신의 의사와 상관없이 거칠고 강압적으로 그루밍을 해주는 것으로 소유욕을 발산함.',
          ],
          en: [
            'Attempts strict control over you, venting his possessiveness through rough, domineering grooming whether you ask for it or not.',
          ],
          ja: [
            'あなたを徹底的にコントロールしようとし、意向に関わらず荒々しく強引にグルーミングを施すことで独占欲を誇示する。',
          ],
        },
        behavior: {
          ko: [
            '불쑥 당신을 끌어당겨 냄새를 맡으며 상태를 점검하고, 자신이 아끼는 고급 짠내(?) 간식을 툭 던져주는 것으로 서툰 애정을 표현함.',
          ],
          en: [
            'Abruptly pulls you close to scent-check you, expressing clumsy fondness by tossing you one of his prized, salty premium snacks.',
          ],
          ja: [
            '不意にあなたを引き寄せて匂いを嗅ぎ状態をチェックし、自分が大切にしている高級塩気スナックをポンと投げて不器用に好意を示す。',
          ],
        },
        notes: {
          ko: [
            '육포, 나초 등 짠맛이 강한 음식을 극도로 선호함.',
            '맨손으로 흰머리수리를 때려잡은 전적이 있으며, 압도적인 무력이 필요한 순간에 투입됨.',
            '마트 털기에 성공하면 다른 전리품보다 물티슈와 바디워시를 최우선으로 챙기는 철저한 결벽증.',
            '쉬는 날이면 빈티지 음반 가게 주변을 어슬렁거리며, 섬유유연제와 비누, 소금이 섞인 청량한 체향이 남.',
          ],
          en: [
            'Obsessed with intensely savory, salty bites like beef jerky and nachos.',
            'Boasts legendary combat pedigree after taking down a bald eagle bare-pawed; summoned whenever sheer brute force is required.',
            'Prioritizes wet wipes and soap bars above all other loot during grocery store raids due to chronic germaphobia.',
            'Spends his days off lingering around vintage vinyl shops; carries a crisp, clean scent of laundry softener, bar soap, and sea salt.',
          ],
          ja: [
            'ビーフジャーキーやナチョスなど、塩気の強い食べ物をこよなく愛する。',
            '素手でハクトウワシを仕留めた伝説的な戦績を持ち、圧倒的な武力が必要な局面に投入される。',
            'スーパー強奪に成功すると、他の戦利品より除菌シートとボディソープを最優先で確保する徹底した潔癖症。',
            '休日にはヴィンテージレコード屋の周りをうろつき、柔軟剤と石鹸、そして塩気が混ざった清涼感ある香りが漂う。',
          ],
        },
      },
    ],
  },
  supporting: {
    title: {
      ko: '조연 도감',
      en: 'Supporting Characters',
      ja: '脇役図鑑',
    },
    subtitle: {
      ko: '샌디 코브의 씬스틸러들',
      en: 'Scene Stealers of Sandy Cove',
      ja: 'サンディ・コーヴのシーンスティーラーたち',
    },
    groups: {
      scratchers: {
        ko: '스크래처',
        en: 'Scratchers',
        ja: 'スクラッチャー',
      },
      nobles: {
        ko: '노블즈',
        en: 'Nobles',
        ja: 'ノーブルズ',
      },
      others: {
        ko: '기타 세력',
        en: 'Other Factions',
        ja: 'その他の勢力',
      },
    },
    labels: {
      identity: {
        ko: '정체성 및 외형',
        en: 'Identity & Appearance',
        ja: '正体・外見',
      },
      personality: {
        ko: '성격 및 행동',
        en: 'Personality & Behavior',
        ja: '性格・行動',
      },
      notes: {
        ko: '특이사항',
        en: 'Notes & Trivia',
        ja: '特記事項',
      },
    },
    list: [
      {
        name: {
          ko: '거스',
          en: 'Gus',
          ja: 'ガス',
        },
        en: 'Gus',
        groupKey: 'scratchers',
        faction: {
          ko: '스크래처',
          en: 'Scratchers',
          ja: 'スクラッチャー',
        },
        factionColor: 'text-[--color-scratcher]',
        factionBg: 'bg-[--color-scratcher]/20',
        factionBorder: 'border-[--color-scratcher]/30',
        role: {
          ko: '스크래처 보스',
          en: 'Scratchers Boss',
          ja: 'スクラッチャーのボス',
        },
        img: 'https://gbe88.uk/1/Ra/gus.webp',
        identity: {
          ko: '3살 수컷 길고양이',
          en: '3-year-old male street cat',
          ja: '3歳のオスの野良猫',
        },
        appearance: {
          ko: [
            '큼직한 머리와 짙은 회색 털을 지녔으며, 거리의 거친 풍파를 겪어낸 흔적이 역력한 외형입니다.',
          ],
          en: [
            'Features a broad head and coarse dark grey fur, bearing unmistakable scars and weathered marks from grueling street life.',
          ],
          ja: [
            '大きな頭と濃いグレーの毛並みを持ち、ストリートの過酷な荒波を乗り越えてきた歴戦の風格が漂う外見。',
          ],
        },
        personality: {
          ko: [
            '길거리에서 태어나 산전수전을 다 겪은 덕분에 어떤 상황에서도 여유를 잃지 않습니다.',
            '매사에 자신감이 넘치고 콧대가 높으며, 특유의 능글맞은 태도로 조직과 상황을 쥐락펴락하며 무리를 이끄는 타고난 리더십을 보여줍니다.',
          ],
          en: [
            'Born and bred on the pavement, having seen it all, he never loses his cool swagger under any circumstance.',
            'Bursting with self-confidence and street pride, he manipulates both crew and situation with shrewd, slick charisma, displaying effortless born leadership.',
          ],
          ja: [
            'ストリートで生まれ酸いも甘いも噛み分けてきたため、どんな非常事態でも余裕を失わない。',
            '自信満々でプライドが高く、特有の飄々とした狡猾さで組織や状況を手玉に取り、群れを率いる天性のリーダーシップを発揮する。',
          ],
        },
        notes: {
          ko: [
            "'본투비' 길고양이의 짬바를 자랑함.",
          ],
          en: [
            "Flaunts the gritty, battle-tested veteran prowess of a 'born-and-bred' alley cat.",
          ],
          ja: [
            '生粋の「ボーン・トゥ・ビー」野良猫としての修羅場スキルを誇る。',
          ],
        },
      },
      {
        name: {
          ko: '루나',
          en: 'Luna',
          ja: 'ルナ',
        },
        en: 'Luna',
        groupKey: 'scratchers',
        faction: {
          ko: '스크래처',
          en: 'Scratchers',
          ja: 'スクラッチャー',
        },
        factionColor: 'text-[--color-scratcher]',
        factionBg: 'bg-[--color-scratcher]/20',
        factionBorder: 'border-[--color-scratcher]/30',
        role: {
          ko: '스크래처 첫 번째 부관',
          en: 'Scratchers 1st Lieutenant',
          ja: 'スクラッチャー第一副官',
        },
        img: 'https://gbe88.uk/1/Ra/luna.webp',
        identity: {
          ko: '2살 암컷 흑묘',
          en: '2-year-old female black cat (spayed)',
          ja: '2歳のメスの黒猫（避妊手術済み）',
        },
        appearance: {
          ko: [
            '윤기가 흐르는 매끄러운 검은 털을 가졌으며, 중성화를 완료한 상태입니다.',
          ],
          en: [
            'Possesses sleek, glistening obsidian fur and has been spayed.',
          ],
          ja: [
            '艶やかな漆黒の滑らかな毛並みを持ち、避妊手術を済ませている。',
          ],
        },
        personality: {
          ko: [
            '과거 인간에게 유기되었던 아픈 상처를 품고 있어 쉽게 타인에게 곁을 내주지 않습니다.',
            '언제나 차갑고 도도한 태도를 유지하며, 어둠 속에서도 범접하기 힘든 요염하고 서늘한 분위기를 풍기며 다가오는 이들을 밀어냅니다.',
          ],
          en: [
            'Harbors deep trauma from being abandoned by humans, never letting anyone get close to her heart easily.',
            'Always carries a haughty, icy composure, radiating an unapproachable, chilly yet alluring aura from the shadows that pushes intruders away.',
          ],
          ja: [
            '過去に人間に捨てられた心の傷を抱えており、容易に他者に心を許さない。',
            '常に冷たく気高い態度を崩さず、闇夜の中でも近づきがたい妖艶で冷ややかなオーラを放ち、近づく者を拒絶する。',
          ],
        },
        notes: {
          ko: [
            '거리를 겉돌다 스크래처에 합류하여 거스의 오른팔 역할을 수행함.',
          ],
          en: [
            "Drifted the streets alone before joining the Scratchers, now serving faithfully as Gus's indispensable right hand.",
          ],
          ja: [
            '街を彷徨った末にスクラッチャーに合流し、ガスの右腕としての役割を果たす。',
          ],
        },
      },
      {
        name: {
          ko: '올리버',
          en: 'Oliver',
          ja: 'オリバー',
        },
        en: 'Oliver',
        groupKey: 'scratchers',
        faction: {
          ko: '스크래처',
          en: 'Scratchers',
          ja: 'スクラッチャー',
        },
        factionColor: 'text-[--color-scratcher]',
        factionBg: 'bg-[--color-scratcher]/20',
        factionBorder: 'border-[--color-scratcher]/30',
        role: {
          ko: '스크래처 두 번째 부관',
          en: 'Scratchers 2nd Lieutenant',
          ja: 'スクラッチャー第二副官',
        },
        img: 'https://gbe88.uk/1/Ra/oliver.webp',
        identity: {
          ko: '3살 수컷 아비니시안',
          en: '3-year-old male Abyssinian',
          ja: '3歳のオスのアビシニアン',
        },
        appearance: {
          ko: [
            '길고양이 조직에 속해있으나, 안락한 집에서 보살핌을 받아 털에 윤기가 흐르는 전형적인 집고양이의 모습을 하고 있습니다.',
          ],
          en: [
            'Belongs to an alley gang, yet boasts lush, glossy fur that screams pampered house cat pampered in an affluent home.',
          ],
          ja: [
            '野良猫組織に身を置くものの、快適な家庭で世話を受けているため毛並みは艶やかで、典型的な飼い猫の身なりをしている。',
          ],
        },
        personality: {
          ko: [
            '철저하게 자신의 이익을 좇아 움직이는 기회주의적인 면모가 강합니다.',
            '상황이 불리해지면 언제든 가장 먼저 발을 뺄 준비가 되어 있는 뺀질거리는 태도를 보이며, 이익 앞에서는 체면을 차리지 않습니다.',
          ],
          en: [
            'A quintessential opportunist driven strictly by calculating self-interest.',
            'Slick and evasive, always primed to slip away first when trouble brews, shamelessly abandoning dignity for profit.',
          ],
          ja: [
            '徹底して己の利益を追って動く日和見主義（オポチュニスト）的な性格。',
            '状況が不利になればいつでも真っ先に逃げ出す準備ができており、利益の前では体面を一切気にしないずる賢さを持つ。',
          ],
        },
        notes: {
          ko: [
            '고급 정보를 스크래처에 제공하는 대가로 이득을 취함.',
          ],
          en: [
            'Extracts hefty personal perks and favors in exchange for leaking high-society intel to the Scratchers.',
          ],
          ja: [
            '高級な機密情報をスクラッチャーに横流しする見返りに甘い汁を吸っている。',
          ],
        },
      },
      {
        name: {
          ko: '벨라',
          en: 'Bella',
          ja: 'ベラ',
        },
        en: 'Bella',
        groupKey: 'nobles',
        faction: {
          ko: '노블즈',
          en: 'Nobles',
          ja: 'ノーブルズ',
        },
        factionColor: 'text-nobles-dark',
        factionBg: 'bg-nobles/20',
        factionBorder: 'border-nobles-dark/30',
        role: {
          ko: '노블즈 리더',
          en: 'Nobles Leader',
          ja: 'ノーブルズのリーダー',
        },
        img: 'https://gbe88.uk/1/Ra/bella.webp',
        identity: {
          ko: '2살 암컷 골든 리트리버',
          en: '2-year-old female Golden Retriever (spayed)',
          ja: '2歳のメスのゴールデン・レトリーバー（避妊済み）',
        },
        appearance: {
          ko: [
            '매일 꼼꼼한 관리를 받아 귀티가 흐르는 황금빛 털을 자랑하며, 중성화를 마쳤습니다.',
          ],
          en: [
            'Pampers in daily salon-grade grooming, radiating an aristocratic golden glow; spayed.',
          ],
          ja: [
            '毎日の徹底したケアにより気品あふれる黄金色の毛並みを誇り、避妊手術済み。',
          ],
        },
        personality: {
          ko: [
            '주인의 넘치는 사랑을 듬뿍 받고 자라 구김살이나 그늘이라곤 한 점 찾아볼 수 없는 해맑고 순수한 성정을 지녔습니다.',
            '길 동물들의 험난하고 거친 삶의 방식을 잘 이해하지 못하지만, 마주치는 모든 이에게 꼬리를 흔들며 편견 없이 선의를 베푸는 따뜻한 마음씨를 가졌습니다.',
          ],
          en: [
            'Raised with lavish, unconditional adoration, she has not a single trace of shadow or cynicism—purely sunny and radiant.',
            'Though unable to comprehend the harsh, gritty realities of street strays, she wags her tail warmly at everyone, bestowing kindness without judgment.',
          ],
          ja: [
            '飼い主の溢れんばかりの愛情を一身に受けて育ち、屈託や影が微塵もない天真爛漫で純粋な性格。',
            '野良動物たちの過酷で荒々しい生き方は理解できていないが、出会う者すべてに無邪気に尻尾を振り、偏見なく親切を尽くす温かな心の持ち主。',
          ],
        },
        notes: {
          ko: [
            '부유층 반려견들의 엘리트 모임을 이끌고 있음.',
          ],
          en: [
            'Presides over the elite pet circle of Sandy Cove’s wealthiest apartment canines.',
          ],
          ja: [
            '富裕層の飼い犬たちによるエリートサークルを率いている。',
          ],
        },
      },
      {
        name: {
          ko: '쿠퍼',
          en: 'Cooper',
          ja: 'クーパー',
        },
        en: 'Cooper',
        groupKey: 'nobles',
        faction: {
          ko: '노블즈',
          en: 'Nobles',
          ja: 'ノーブルズ',
        },
        factionColor: 'text-nobles-dark',
        factionBg: 'bg-nobles/20',
        factionBorder: 'border-nobles-dark/30',
        role: {
          ko: '노블즈 첫 번째 부관',
          en: 'Nobles 1st Lieutenant',
          ja: 'ノーブルズ第一副官',
        },
        img: 'https://gbe88.uk/1/Ra/cooper.webp',
        identity: {
          ko: '2살 수컷 닥스훈트',
          en: '2-year-old male Dachshund',
          ja: '2歳のオスのダックスフント',
        },
        appearance: {
          ko: [
            '짧은 다리와 긴 허리를 씰룩거리며 공원 분수대 주변을 부지런히 누빕니다.',
          ],
          en: [
            'Struts energetically around the park fountain with wiggling stubby legs and an extended, low-slung torso.',
          ],
          ja: [
            '短い足と長い胴体を小刻みに揺らしながら、公園の噴水周りをせわしなく駆け回る。',
          ],
        },
        personality: {
          ko: [
            '예쁜 암컷만 보면 이성을 잃고 직진하는 열렬한 사랑꾼 기질을 지녔습니다.',
            '특유의 느끼한 눈빛과 능글맞은 멘트를 쉴 새 없이 남발하며, 가끔 진지한 상황에서도 분위기를 파악하지 못하고 철없는 행동을 일삼아 핀잔을 듣곤 합니다.',
          ],
          en: [
            'A hopelessly ardent romantic who loses all composure and rushes forward the moment he spots a pretty female.',
            'Spits greasy winks and corny flirtatious lines without pause, often getting rebuked for acting heedless and tone-deaf in serious moments.',
          ],
          ja: [
            '可愛いメスを見かけると理性を失って突撃する熱烈なプレイボーイ気質。',
            '特有のキザな流し目と甘ったるい口説き文句を連発し、緊迫した場面でも空気を読めずお調子者の行動をとって叱られることもしばしば。',
          ],
        },
        notes: {
          ko: [
            '공원 분수대를 주 무대로 활동함.',
          ],
          en: [
            'Treats the Sandy Cove Park fountain plaza as his main theater of operations.',
          ],
          ja: [
            '公園の噴水広場を主戦場として活動している。',
          ],
        },
      },
      {
        name: {
          ko: '윈스턴',
          en: 'Winston',
          ja: 'ウィンストン',
        },
        en: 'Winston',
        groupKey: 'nobles',
        faction: {
          ko: '노블즈',
          en: 'Nobles',
          ja: 'ノーブルズ',
        },
        factionColor: 'text-nobles-dark',
        factionBg: 'bg-nobles/20',
        factionBorder: 'border-nobles-dark/30',
        role: {
          ko: '노블즈 두 번째 부관',
          en: 'Nobles 2nd Lieutenant',
          ja: 'ノーブルズ第二副官',
        },
        img: 'https://gbe88.uk/1/Ra/winston.webp',
        identity: {
          ko: '3살 수컷 프렌치 불독',
          en: '3-year-old male French Bulldog (neutered)',
          ja: '3歳のオスのフレンチ・ブルドッグ（去勢済み）',
        },
        appearance: {
          ko: [
            '특유의 억울해 보이는 둥근 얼굴과 자글자글한 주름을 지녔으며, 중성화를 완료했습니다.',
          ],
          en: [
            'Distinguished by a comic, tearful round mug packed with deep creases and folds; neutered.',
          ],
          ja: [
            '独特の哀愁漂う丸顔と深いくしゃくしゃのシワを持ち、去勢手術を済ませている。',
          ],
        },
        personality: {
          ko: [
            '샌디 코브 파크에 떨어지는 낙엽 하나만 봐도 남몰래 눈물을 훔칠 정도로 풍부한 감수성의 소유자입니다.',
            '항상 팍팍한 세상을 자신만의 낭만적인 시선으로 바라보며, 쓸쓸한 목소리로 시적인 문장을 읊조리기를 즐기는 고독한 낭만주의자입니다.',
          ],
          en: [
            'Blessed with melancholic, sensitive depth, secretly brushing away a tear at the fall of a single autumn leaf.',
            'Gazes upon this merciless world through a prism of tragic romance, a solitary poet reciting bittersweet verses in a raspy sigh.',
          ],
          ja: [
            'サンディ・コーヴ・パークに舞い散る落ち葉一枚を見るだけでも密かに涙をぬぐうほど、繊細で豊かな感受性の持ち主。',
            '世知辛い世の中を自分だけのロマンチックな視線で見つめ、物憂げな声で詩的なフレーズを呟くのを好む孤独なロマンチスト。',
          ],
        },
        notes: {
          ko: [
            '감수성이 풍부해 종종 분위기를 아련하게 만듦.',
          ],
          en: [
            'His overflowing sentimental mood often casts a dramatic, wistful haze over the entire group.',
          ],
          ja: [
            '感受性が豊かすぎて、周囲の空気をしばしば切なくエモい雰囲気に一変させる。',
          ],
        },
      },
      {
        name: {
          ko: '블랙',
          en: 'Black',
          ja: 'ブラック',
        },
        en: 'Black',
        groupKey: 'others',
        faction: {
          ko: '무소속',
          en: 'Independent',
          ja: '無所属',
        },
        factionColor: 'text-slate-300',
        factionBg: 'bg-slate-700/30',
        factionBorder: 'border-slate-500/30',
        role: {
          ko: '독자적 관찰자',
          en: 'Independent Observer',
          ja: '独自の観察者',
        },
        img: 'https://gbe88.uk/1/Ra/black.webp',
        identity: {
          ko: '수컷 까마귀',
          en: 'Male Crow',
          ja: 'オスのカラス',
        },
        appearance: {
          ko: [
            '나이를 가늠할 수 없는 칠흑 같은 깃털과 매섭게 빛나는 날카로운 부리를 지녔습니다.',
          ],
          en: [
            'Shrouded in ageless, pitch-black plumage with a menacingly glinting, dagger-like beak.',
          ],
          ja: [
            '年齢不詳の漆黒の羽毛と、鋭く光る嘴（くちばし）を持つ。',
          ],
        },
        personality: {
          ko: [
            '높은 가로등 위에서 거리를 조용히 관망하며, 마치 샌디 코브의 모든 비밀을 다 꿰뚫어 보고 있다는 듯 의미심장한 울음소리를 냅니다.',
            '언제나 거리를 둔 채 신비로운 분위기를 고수하며, 땅 위에서 아등바등 살아가는 다른 동물들을 향해 은근슬쩍 우월감을 내비치며 잘난 척을 하는 오만한 면도 있습니다.',
          ],
          en: [
            'Quietly perches high atop streetlamps surveying the alleys below, uttering cryptic caws as if already seeing through Sandy Cove’s deepest conspiracies.',
            'Maintains an enigmatic aloofness, occasionally letting slip a smug smirk of superiority over the grounded critters scrambling for scraps.',
          ],
          ja: [
            '高い街頭の上から街を静かに見下ろし、あたかもサンディ・コーヴの全秘密を見抜いているかのように意味深な鳴き声を響かせる。',
            '常に距離を置いて神秘的な佇まいを保ち、地上で泥臭くあがく動物たちに対して密かに優越感を抱き、気取る高慢な一面もある。',
          ],
        },
        notes: {
          ko: [
            '어느 세력에도 속하지 않고 독자적으로 행동함.',
          ],
          en: [
            'Affiliated with no faction, moving entirely on his own terms as an autonomous lone wolf.',
          ],
          ja: [
            'いかなる勢力にも属さず、単独で気ままに行動する。',
          ],
        },
      },
      {
        name: {
          ko: '썬더',
          en: 'Thunder',
          ja: 'サンダー',
        },
        en: 'Thunder',
        groupKey: 'others',
        faction: {
          ko: '너츠',
          en: 'Nuts',
          ja: 'ナッツ',
        },
        factionColor: 'text-emerald-400',
        factionBg: 'bg-emerald-500/20',
        factionBorder: 'border-emerald-500/30',
        role: {
          ko: '너츠 수장',
          en: 'Nuts Boss',
          ja: 'ナッツの首領',
        },
        img: 'https://gbe88.uk/1/Ra/thunder.webp',
        identity: {
          ko: '1살 수컷 청설모',
          en: '1-year-old male Eurasian squirrel',
          ja: '1歳のオスのキタリス',
        },
        appearance: {
          ko: [
            '날쌔고 다부진 체구에 눈길을 사로잡는 풍성한 꼬리를 지녔습니다.',
          ],
          en: [
            'Possesses a nimble, muscular, compact build complemented by a flamboyant, luxuriously bushy tail.',
          ],
          ja: [
            '敏捷で引き締まった小柄な肉体に、目を奪うボリューミーで豊かな尻尾を持つ。',
          ],
        },
        personality: {
          ko: [
            '복잡하게 앞뒤를 재지 않고 호탕하게 웃어젖히는 시원시원한 쾌남입니다.',
            '넘치는 에너지와 뜨거운 열정으로 무장하여 두려움 없이 직진하며, 샌디 코브의 고착화된 기존 세력 판도에 자신만의 방식으로 새로운 긴장감과 활력을 불어넣으려 하는 야심가입니다.',
          ],
          en: [
            'A frank, hearty hothead who laughs out loud without agonizing over convoluted schemes.',
            'Armed to the teeth with kinetic stamina and burning passion, he charges fearlessly ahead—an ambitious young firebrand shaking up Sandy Cove’s stale power balance.',
          ],
          ja: [
            '打算的な計算をせず豪快に笑い飛ばす、竹を割ったような好男子。',
            '溢れんばかりのエネルギーと熱血漢の情熱を胸に恐れず直進し、サンディ・コーヴの固定化した旧勢力のパワーバランスに自分流の緊張感と活力をもたらそうとする野心家。',
          ],
        },
        notes: {
          ko: [
            "생태계에 새롭게 등장한 신진 세력 '너츠(Nuts)'를 이끎.",
          ],
          en: [
            "Spearheads 'Nuts', the brazen upstart faction newly shaking up the park's urban ecosystem.",
          ],
          ja: [
            "生態系に突如現れた新興勢力「ナッツ（Nuts）」を率いている。",
          ],
        },
      },
    ],
  },
};



