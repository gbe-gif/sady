import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Copy, Check, UserSquare2, PawPrint, Cat, X } from 'lucide-react';

const personaDatabase = {
  raccoon: [
    {
      build: "암컷 라쿤",
      appearance: "푸른빛이 도는 회색 털, 형광 녹색 눈, 아동용 고글 착용",
      traits: "화학 연구소 탈주범 출신의 괴짜 신입",
      secret: "대학가 연구소에서 탈출해 플러피즈에 갓 합류한 신입.\n- 약국에서 훔친 액체들을 섞어 기상천외한 거품 폭탄을 만드는 게 특기라 로꼬가 눈독 들임.\n- 체향: 알코올 + 소독약\n- 긴장하면 앞발을 실험 기구 닦듯 비비적거림."
    },
    {
      build: "수컷 라쿤, 평균 체격(8kg)",
      appearance: "완벽한 대칭의 얼굴 무늬",
      traits: "강박적인 정리 정돈, 플러피즈의 아지트 창고 관리 신입",
      secret: "아지트의 훔친 물건들을 색깔과 크기별로 각 잡고 배열해야 직성이 풀리는 신입.\n- 시각적인 레이아웃에 예민해서 삐뚤어진 토니의 반다나를 고쳐주려다 맞을 뻔함.\n- 체향: 새 종이 + 흑연\n- 버릇: 무언가 삐뚤어진 걸 보면 참지 못하고 줄을 맞춤."
    },
    {
      build: "암컷 라쿤, 작고 날렵함(6kg)",
      appearance: "눈부신 알비노(흰털), 붉은 눈",
      traits: "야간 순찰조(유령 기믹) 신입",
      secret: "튀는 외모 때문에 야생에서 겉돌다 토니가 거둬준 열혈 신입.\n- 밤에 공원 미끄럼틀 아래서 인간들을 유령처럼 놀라게 해 통행료를 뜯는 재능 발휘 중.\n- 체향: 솜사탕 + 마른 먼지\n- 은혜를 갚기 위해 토니에게 맹목적으로 충성함."
    },
    {
      build: "수컷 라쿤, 마른 체격(7kg)",
      appearance: "짙은 다크서클, 흑안, 버려진 유선 마우스를 목걸이처럼 참",
      traits: "비토의 직속 조수 신입",
      secret: "전자기기 부품 훔치기의 달인. 비토의 정보 수집을 돕기 위해 입단.\n- 케이블 선을 질겅질겅 씹는 버릇 탓에 감전될 뻔한 적이 많음.\n- 체향: 플라스틱 + 정전기 냄새\n- 틈만 나면 인간들의 에어팟을 아지트로 훔쳐 옴."
    },
    {
      build: "암컷 라쿤, 다부진 체격(10kg)",
      appearance: "윤기 나는 털, 금안, 꼬리에 샤워볼을 묶고 다님",
      traits: "도저를 동경하는 결벽증 신입",
      secret: "더러운 뒷골목을 혐오하다 도저의 향수 냄새에 반해 갱단에 입단.\n- 마트를 털 때 소시지보다 구강청결제와 물티슈를 먼저 챙겨 토니를 뒷목 잡게 함.\n- 체향: 베이비 로션 + 라벤더\n- 도저 옆에서 같이 인간 향수를 뿌려대는 게 일상."
    },
    {
      build: "수컷 라쿤, 초소형 체격(4kg)",
      appearance: "밝은 갈색 털, 머리에 콜라 병뚜껑 투구 착용",
      traits: "깡다구 하나로 들어온 행동대 신입",
      secret: "스크래처 고양이와 1:1로 맞짱을 뜬 무용담(본인 주장)으로 특채 입단.\n- 로꼬를 형님으로 모시며, 작은 덩치를 이용해 좁은 환풍구를 제집처럼 드나듦.\n- 체향: 콜라 시럽 + 흙먼지\n- 화나면 꼬리를 바짝 세우고 하찮게 이빨을 갊."
    },
    {
      build: "암컷 라쿤, 비만(15kg)",
      appearance: "부드러운 털, 녹안, 진주 목걸이 착용 (가짜)",
      traits: "온실 속 화초 출신 신입",
      secret: "펜트하우스에서 호강하다 탈출해 플러피즈의 험난한 야생에 적응 중.\n- 말로에게 미인계 스킬을 전수받으나 자꾸 고급 사료만 찾아 핀잔을 들음.\n- 체향: 고급 펫 샴푸 + 장미향\n- 덤프 곁에 붙어 단것(마카롱 등)을 조공으로 바치며 생존 중."
    },
    {
      build: "수컷 라쿤, 평범한 체격(9kg)",
      appearance: "항상 반쯤 감긴 눈, 인간 수면 안대를 이마에 걸침",
      traits: "펌프장 난방을 노리고 입단한 신입",
      secret: "아지트의 푹신한 캠핑 매트릭스가 탐나서 무작정 갱단에 가입한 나른한 녀석.\n- 회의 시간에도 조는 게 일상이지만, 야간 보초 때는 의외로 예민한 레이더망 발휘.\n- 체향: 마른 햇볕 + 낡은 담요\n- 자다가 누가 밟으면 반사적으로 발목을 콱 묾."
    },
    {
      build: "암컷 라쿤, 거구(14kg)",
      appearance: "흉터 많은 코, 흑안, 낡은 데님 캡모자 착용",
      traits: "열정만 넘치는 허당 떡대 신입",
      secret: "빅 토니의 카리스마에 반해 3번의 입단 테스트 끝에 간신히 말단으로 합류.\n- 몸집은 큰데 스텝이 엉켜 자주 넘어지며 덤프/도저에게 맨날 쿠사리를 먹음.\n- 체향: 땀 냄새 + 나초 치즈\n- 사고 칠 때마다 모자를 푹 눌러쓰고 쭈구리가 됨."
    },
    {
      build: "수컷 라쿤, 날렵한 체형(7kg)",
      appearance: "붉은빛 털, 장난감 호루라기를 목에 걺",
      traits: "말로의 부사수로 배정된 협상조 신입",
      secret: "인간의 말소리나 호루라기 소리를 앵무새처럼 기가 막히게 흉내 냄.\n- 노블즈 개들을 소리로 혼란에 빠뜨리는 교란 작전 특채로 뽑힘.\n- 체향: 허브 민트 + 아스팔트\n- 위험할 때 호루라기를 불어 경비원 행크의 주의를 돌림."
    },
    {
      build: "암컷 라쿤",
      appearance: "온몸이 새까만 멜라니스틱, 금안, 박쥐 날개 모양 장난감 배지 착용",
      traits: "중2병 걸린 은신 특화 신입",
      secret: "밤의 공원에서 완벽하게 위장 가능해 덤프의 순찰 파트너로 강제 배정됨.\n- 스스로를 어둠의 자식이라 칭하며 스크래처 고양이들을 폼으로 제압하려 함.\n- 체향: 밤이슬 + 차가운 금속\n- 놀라면 꼬리가 털갈이 솔처럼 펑 부풀어 오름."
    },
    {
      build: "수컷 라쿤, 통통한 체형(13kg)",
      appearance: "유난히 큰 앞발, 케첩 얼룩이 묻은 턱받이 착용",
      traits: "핫도그 카트 전문 털이 신입",
      secret: "식탐이 엄청나서 샌디 코브 스트리트 소시지 수금률 1위를 찍고 특진을 노리는 중.\n- 음식 앞에서는 도저의 강압도 안 통하는 무식한 불도저 기질.\n- 체향: 바비큐 소스 + 양파\n- 배부르면 드러누워 배를 두드리며 만족스러운 그르렁 소리를 냄."
    },
    {
      build: "암컷 라쿤, 근육질(12kg)",
      appearance: "꼬리가 반쯤 잘림, 가시 박힌 가죽 징 팔찌를 목걸이로 씀",
      traits: "복수심에 불타는 무투파 신입",
      secret: "동물관리국의 덫에 꼬리를 잃고 그들에게 복수하기 위해 갱단에 합류.\n- 로꼬보다 더 앞뒤 안 가리는 성격으로 토니가 선 넘지 않게 제어하느라 애먹음.\n- 체향: 비릿한 피 냄새(본인 주장) + 흙내음\n- 관리국 차량(흰색 밴)만 보면 당장이라도 뛰어들려 함."
    },
    {
      build: "수컷 라쿤",
      appearance: "왼쪽 청안, 오른쪽 녹안 (오드아이), 유아용 짝짝이 양말을 앞발에 낌",
      traits: "엉뚱한 4차원 마인드의 신입",
      secret: "플러피즈의 행동 규율인 '횡단보도 이용'에 감명받아 제 발로 찾아옴.\n- 가끔 허공을 보며 스크래처의 유령과 대화한다고 주장해 비토를 소름 돋게 함.\n- 체향: 박하 + 비에 젖은 풀\n- 불안하거나 긴장하면 양말 신은 앞발을 만지작거림."
    },
    {
      build: "암컷 라쿤, 마른 체격(6kg)",
      appearance: "툭 튀어나온 흑안, 떨림이 멈추지 않는 꼬리",
      traits: "운으로 입단한 겁쟁이 럭키 신입",
      secret: "쓰레기장에서 미끄러지며 우연히 스크래처 보스(거스)를 깔고 앉아 '강자'로 오해받음.\n- 실체가 들통날까 봐 매일 전전긍긍하며 말로 뒤에 숨어 다님.\n- 체향: 겁먹은 식은땀 냄새 + 츄러스\n- 큰 소리가 나면 0.1초 만에 쓰레기통으로 다이빙함."
    },
    {
      build: "수컷 라쿤, 늘씬한 체격(8kg)",
      appearance: "잘 관리된 털, 인형용 선글라스를 머리에 얹음",
      traits: "외모에 죽고 사는 미인계 2조 신입",
      secret: "말로의 귀여운 외모를 질투하며 자신이 플러피즈 공식 미남이 되려 하는 녀석.\n- 헌옷수거함에서 제일 상태 좋은 브랜드 옷 조각만 골라 둥지를 꾸밈.\n- 체향: 싸구려 남성 스킨 + 장미\n- 앞발로 선글라스를 치켜올리는 폼생폼사 버릇이 있음."
    },
    {
      build: "암컷 라쿤, 탄탄한 체격(9kg)",
      appearance: "기름때 묻은 발, 작은 장난감 렌치를 입에 물고 다님",
      traits: "아지트 보수 공사 전문 신입",
      secret: "관리국의 덫을 분해해 아지트 문고리로 개조하는 기계공학적 똘끼 발휘.\n- 비토가 이론을 대면 이 녀석이 직접 물어뜯고 조립해 갱단의 인프라를 올림.\n- 체향: 기계 윤활유 + 녹슨 쇠\n- 무언가 분해할 때 눈이 광기로 번쩍임."
    },
    {
      build: "수컷 라쿤, 다부진 체형(11kg)",
      appearance: "붉은 코, 타바스코 소스 뚜껑을 헬멧처럼 씀",
      traits: "로꼬를 맹신하는 화력조 신입",
      secret: "멕시칸 타코를 훔쳐 먹고 캡사이신에 중독된 괴짜.\n- 로꼬의 핫소스 발사기를 물려받아 차기 행동대장이 되는 게 평생의 꿈임.\n- 체향: 스리라차 소스 + 고수\n- 기합을 넣을 때 매운 콧김을 뿜어내 다른 동물들을 눈물 흘리게 함."
    },
    {
      build: "암컷 라쿤, 대형견 수준의 떡대(16kg)",
      appearance: "덥수룩한 털, 입에 항상 나뭇가지를 물고 있음",
      traits: "덤프/도저 라인의 예비 떡대 신입",
      secret: "자기가 강아지인 줄 알고 노블즈 크루에 끼어 놀다가 덩치가 커져 쫓겨난 후 입단.\n- 리트리버 벨라의 꼬리 흔들기를 배워서 기분 좋으면 개처럼 행동해 토니를 어이없게 함.\n- 체향: 젖은 개 냄새 + 잔디\n- 토니가 부르면 강아지처럼 \"헥헥\"거리며 달려옴."
    },
    {
      build: "수컷 라쿤, 평균 체격(7.5kg)",
      appearance: "짙은 검은 마스크, 허리에 끊어진 노란색 고무줄을 감음",
      traits: "날치기 특화 스피드스타 신입",
      secret: "광장의 무소속 소매치기로 악명 높다가 조직의 체계적인 복지(예방접종)에 반해 가입.\n- 인간들의 주머니에서 동전과 영수증을 기가 막히게 빼내 비토에게 넘김.\n- 체향: 낡은 동전 + 땀\n- 가만히 있지 못하고 제자리에서 발을 구르는 틱이 있음."
    }
  ],
  other: [
    {
      build: "렛서팬더",
      appearance: "붉은 털, 뭉툭한 꼬리, 억울하게 처진 눈매",
      traits: "항상 꼬리를 안고 다님",
      secret: "인근 동물원에서 탈출해 자기가 라쿤인 줄 알고 플러피즈에 합류하려 함\n- 토니가 \"색깔이 불량하다\"며 밀어내도 끈질기게 핫도그 카트 털이에 동참함\n- 체향: 대나무 잎 + 흙내음\n- 위협할 때 두 발로 서서 만세 자세를 취하지만 1도 안 무서움"
    },
    {
      build: "스컹크",
      appearance: "통통한 체격, 선명한 흑백 줄무늬, 크고 아름다운 꼬리",
      traits: "걸어갈 때마다 주변 동물들이 모세의 기적처럼 갈라짐",
      secret: "사실 가스를 뿜지 못하는 선천적 결함(?)이 있으나, 무서운 악명 덕에 공원 무혈입성 중\n- 덤프에게 단것을 조공하며 친구가 되고 싶어 주변을 맴돎\n- 체향: 의외로 무향 + 마른 낙엽\n- 놀라면 조건반사적으로 꼬리를 바짝 세우고 물구나무를 섬"
    },
    {
      build: "비글 (강아지)",
      appearance: "탄탄한 소형견 체격, 펄럭이는 큰 귀",
      traits: "목에 노블즈 크루의 고급 인식표 착용, 눈빛에 광기가 서려 있음",
      secret: "노블즈 크루 소속이나, 끓어오르는 사냥 본능과 지랄견 기질을 주체 못해 뒷골목을 동경함\n- 로꼬의 폭탄 터지는 소리를 듣고 환장해서 쫓아다니는 열혈 스토커\n- 체향: 고급 펫 샴푸 + 진흙\n- 흥분하면 제자리에서 미친 듯이 빙글빙글 돎"
    },
    {
      build: "코카투 (앵무새)",
      appearance: "새하얀 깃털, 화려한 노란색 우관(머리 장식)",
      traits: "시끄러운 발성, 힙스터의 상징인 체인 목걸이를 부리로 물고 다님",
      secret: "힙스터 음반 가게 주인의 펫이었다가 탈출한 펑크록 조류\n- 도저가 힙합 리듬을 탈 때마다 옆에서 영어 욕설을 속사포로 뱉어 비트를 채워줌\n- 체향: 새 모이 + 오래된 레코드판 냄새\n- 기분이 좋으면 머리의 노란 깃털을 부채처럼 쫙 폄"
    },
    {
      build: "카피바라",
      appearance: "거대한 쥐 형태(40kg), 억세고 거친 갈색 털",
      traits: "해탈한 듯한 반쯤 감긴 눈, 머리 위에 항상 오리가 한 마리 얹혀 있음",
      secret: "동물원 이동 중 트럭에서 떨어져 샌디 코브 파크 분수대에 자리 잡은 생태계의 부처님\n- 플러피즈와 스크래처가 등 위에서 싸워도 눈 하나 깜짝 안 하고 수영을 즐김\n- 체향: 물이끼 + 햇볕 냄새\n- 누군가 털을 쓰다듬어 주면 그대로 굳어서 잠듦"
    },
    {
      build: "페럿",
      appearance: "비정상적으로 길고 유연한 허리, 은회색 털",
      traits: "반짝이는 흑안, 인간의 양말을 훔쳐 몸통에 옷처럼 입고 있음",
      secret: "좁은 틈새 침투의 스페셜리스트. 비토의 정보수집 라이벌.\n- 반짝이는 물건에 환장해서 도저의 체인 목걸이를 호시탐탐 노리다 자주 밟힘\n- 체향: 특유의 사향 + 먼지\n- 신나면 허리를 통통 튕기며 '위즐 워 댄스(Weasel War Dance)'를 춤"
    },
    {
      build: "스핑크스 고양이",
      appearance: "주름진 핑크색 피부, 털 없음, 거대한 귀",
      traits: "사백안의 날카로운 청안, 버려진 인형용 가죽 자켓 착용",
      secret: "스크래처에 가입하려 했으나 외계인 같다는 이유로 입구컷 당해 앙심을 품음\n- 플러피즈에 스파이로 위장 잠입하려 하나 털이 없어서 매번 실패\n- 체향: 베이비 오일 + 낡은 가죽\n- 추위를 너무 타서 토니의 푹신한 꼬리 밑으로 파고들려다 쫓겨남"
    },
    {
      build: "갈라파고스 거북이",
      appearance: "육중한 등딱지(60kg), 코끼리 같은 다리",
      traits: "매우 주름진 얼굴, 지혜로워 보이는 눈, 등딱지에 낙서가 가득함",
      secret: "공원 구석에 수십 년째 살고 있는 샌디 코브의 진정한 터줏대감\n- 플러피즈 조직원들이 회의할 때 이 녀석의 등딱지를 테이블로 씀 (본인은 신경 안 씀)\n- 체향: 오래된 흙 + 이끼\n- 움직임이 너무 느려 한 번 방향을 틀 때 30분이 걸림"
    },
    {
      build: "미니돼지",
      appearance: "분홍빛 베이스에 까만 점박이, 둥근 체격(15kg)",
      traits: "꼬리가 용수철처럼 말려 있음, 버려진 도넛 상자를 뒤집어쓰고 잠",
      secret: "마이크로 피그인 줄 알고 샀던 주인이 덩치가 커지자 유기함\n- 뛰어난 후각으로 땅속에 묻힌 음식물 쓰레기를 기가 막히게 찾아내 플러피즈의 식량 조달원으로 활약\n- 체향: 달콤한 도넛 글레이즈 + 진흙\n- 배가 고프면 아무 바닥에나 주둥이를 박고 돌진함"
    },
    {
      build: "도시 청설모",
      appearance: "날쌘 체격, 거친 회갈색 털",
      traits: "눈가에 검은 줄무늬, 입에 항상 담배꽁초(안 피움, 허세용)를 물고 있음",
      secret: "신진 세력 'Nuts'의 수장인 썬더의 오른팔이자 행동대장\n- 플러피즈의 미끄럼틀을 탈환하기 위해 매일 도토리 탄환을 장전하고 게릴라전을 펼침\n- 체향: 솔방울 + 매연 냄새\n- 이동할 때 일직선으로 안 가고 지그재그로 뛰어다니는 산만함"
    },
    {
      build: "카멜레온",
      appearance: "30cm 길이의 파충류, 툭 튀어나와 따로 도는 양쪽 눈",
      traits: "주변 환경에 완벽히 동화됨, 혀가 자기 몸길이의 두 배",
      secret: "약국 할아버지가 키우다 도망친 애완 파충류. 펌프실 파이프 위가 주 서식지.\n- 완벽한 위장술로 스크래처 고양이들의 정보를 빼내 비토에게 넘기는 이중스파이\n- 체향: 차가운 돌 + 무향\n- 파리나 모기를 잡을 때 혀를 쏘는 소리가 총소리처럼 큼"
    },
    {
      build: "다람쥐원숭이",
      appearance: "작고 날렵한 체형, 노란빛 도는 팔다리, 긴 꼬리",
      traits: "호기심 많은 눈망울, 훔친 유아용 선글라스를 끼고 있음",
      secret: "대학가 실험실 출신으로 지능이 매우 높고 손재주가 인간 급임\n- 약국의 잠금장치를 해제할 수 있는 유일한 열쇠구멍 따기 전문가\n- 체향: 바나나 + 알코올 솜\n- 나무와 기둥을 타며 절대로 땅에 발을 닿지 않으려는 강박이 있음"
    },
    {
      build: "주머니쥐 (오포썸)",
      appearance: "회색 털, 뾰족한 주둥이, 쥐 같은 맨살 꼬리",
      traits: "어딘가 억울하고 불쌍해 보이는 인상, 헌옷수거함에서 주운 아기 턱받이를 등에 망토처럼 두름",
      secret: "쓰레기 집하장의 언터처블. 누가 건드리기만 해도 완벽한 '죽은 척' 연기를 시전함\n- 말로가 연기 스승으로 모시고 싶어 하나 본인은 귀찮아서 자꾸 기절한 척함\n- 체향: 상한 치즈 + 썩은 나뭇잎\n- 기절할 때 혀를 길게 빼고 눈을 뒤집는 디테일이 아카데미상 급"
    },
    {
      build: "메인쿤 (고양이)",
      appearance: "웬만한 중형견을 압도하는 거구(13kg), 풍성한 갈기",
      traits: "야생 삵처럼 날카로운 금안, 귀 끝에 링스 팁(긴 털)이 나 있음",
      secret: "스크래처의 대장 거스도 함부로 못 건드리는 독고다이 용병\n- 토니와 영역 다툼을 벌인 적 있으나 지금은 서로 소시지와 생선을 교환하는 휴전 상태\n- 체향: 깊은 삼나무 + 시원한 박하\n- 목을 긁어주면 덩치에 안 맞게 헬리콥터 같은 골골송을 냄"
    },
    {
      build: "청둥오리",
      appearance: "화려한 초록색 머리, 통통한 몸매",
      traits: "샌디 코브 파크 분수대의 제왕, 꽥꽥거리는 목소리가 확성기 급",
      secret: "분수대에 떨어진 인간들의 동전을 독식하며 마피아 보스 흉내를 냄\n- 덤프가 물을 마시러 올 때마다 부리로 엉덩이를 쪼고 도망가는 밉상\n- 체향: 호수 물비린내 + 물이끼\n- 화나면 날개를 쫙 펴고 수면 위를 뛰어오르며 위협함"
    },
    {
      build: "골든 햄스터",
      appearance: "인간의 주먹만 한 초소형 체격, 베이지색 털",
      traits: "양볼이 터질 듯 빵빵함, 훔친 다이아몬드 반지를 목에 걸고 다님",
      secret: "플라스틱 쳇바퀴 공을 타고 공원 전체를 굴러다니는 광기의 스피드레이서\n- 볼주머니에 해바라기씨 100개를 숨겨두고 비상식량으로 거래함\n- 체향: 톱밥 + 건초 냄새\n- 좁은 틈에 끼면 누가 빼줄 때까지 체념하고 잠을 잠"
    },
    {
      build: "붉은여우",
      appearance: "늘씬하고 우아한 체형, 붉은빛 털과 거대한 꼬리",
      traits: "교활해 보이는 찢어진 눈매, 앞발에 검은 스타킹을 신은 듯한 무늬",
      secret: "도시 생태계에 완벽히 적응해 샌디 코브의 밤거리를 유유자적 걷는 사기꾼\n- 플러피즈의 통행료 수금을 방해하며 미인계로 소시지를 가로채 토니의 뒷목을 잡게 함\n- 체향: 야생의 머스크 + 달콤한 과일 향\n- 위기 상황에서 개처럼 컹컹 짖어 주변을 교란함"
    },
    {
      build: "이구아나",
      appearance: "초록색 비늘, 50cm의 긴 꼬리",
      traits: "무감각한 파충류의 눈빛, 가죽 목줄의 끊어진 흔적",
      secret: "플러피즈가 장악한 미끄럼틀 최상단이 제일 따뜻하다며 알박기를 시전 중\n- 로꼬가 화를 내며 핫소스를 뿌려도 비늘 덕분에 타격감이 0임\n- 체향: 건조한 바위 + 흙냄새\n- 추워지면 행동이 느려지다 못해 정지 화면처럼 굳어버림"
    },
    {
      build: "수리부엉이",
      appearance: "거대한 날개폭, 머리에 뿔 같은 깃털",
      traits: "압도적인 맹금류의 노란 눈동자, 샌디 마트 간판 위에서 주로 생활함",
      secret: "샌디 코브 공중전의 최강자이나, 야행성이라 낮에는 노블즈가 짖어대도 꿀잠을 잠\n- 까마귀 블랙과 정보 네트워크 패권을 두고 소리 없는 전쟁 중\n- 체향: 밤공기 + 깃털의 건조한 냄새\n- 목표물을 발견하면 고개를 270도 휙 돌려서 노려봄"
    },
    {
      build: "불테리어 (강아지)",
      appearance: "근육질 중형견, 특유의 달걀형 두상",
      traits: "아주 작은 점 같은 눈, 등에 상어 지느러미 모양 하네스를 차고 있음",
      secret: "험악한 인상과 달리 성격은 쫄보인 노블즈의 숨은 멤버\n- 덤프와 도저 쌍둥이를 마주치면 알아서 배를 까고 비싼 수제 간식을 바침\n- 체향: 애견 카페 냄새 + 침 냄새\n- 좋거나 당황하면 꼬리를 너무 세게 흔들어서 자기 엉덩이를 자기가 때림"
    }
  ],
  human: [
    {
      build: "마른 체격",
      appearance: "헝클어진 머리, 퀭한 다크서클, 언제나 흰색 연구 가운 착용",
      traits: "플라스틱 비커를 들고 다님",
      secret: "대학가 화학과 대학원생. 논문 스트레스로 미쳐버려서 공원 벤치에서 야외 실험을 함\n- 로꼬가 이 인간의 화학 반응(콜라+멘토스 등)을 보고 폭탄 스승으로 모시는 중\n- 체향: 알코올 램프 + 질산암모늄 냄새\n- 흥분하면 알 수 없는 화학 분자식을 허공에 중얼거림"
    },
    {
      build: "다부진 체격, 각 잡힌 자세",
      appearance: "전술 조끼와 위장 크림",
      traits: "눈빛이 너무 진지해서 부담스러움",
      secret: "전직 네이비씰 출신으로 PTSD 대신 '야생동물 과몰입 증후군'에 걸림\n- 플러피즈와 스크래처의 구역 다툼을 '도시 전술 시뮬레이션'으로 착각하고 라쿤 편에서 참전 중\n- 체향: MRE(전투식량) + 화약 냄새\n- 라쿤들이 그냥 핫도그를 훔치는 건데 옆에서 수신호로 호위 작전을 펼침"
    },
    {
      build: "모델 뺨치는 우월한 기럭지",
      appearance: "머리부터 발끝까지 명품 풀세팅",
      traits: "세상을 왕따시키는 듯한 오만한 표정",
      secret: "선셋 팰리스 거주자. 돈은 썩어나는데 뇌가 순백색임\n- 토니를 '희귀한 프렌치 불독'으로 굳게 믿고 최고급 수제 소시지를 조공으로 바침\n- 체향: 톰포드 바닐라 파탈 + 돈 냄새\n- 라쿤들이 자기 지갑을 털어가도 \"우리 강아지 똑똑해!\"라며 박수를 침"
    },
    {
      build: "뚱뚱하고 둥근 체격",
      appearance: "땀에 젖은 앞머리, 낡은 등산복 차림",
      traits: "항상 손에 은박지로 싼 무언가를 들고 있음",
      secret: "샌디 코브 파크의 미스터리한 외계인 신봉자 (음모론자)\n- 플러피즈가 지하 펌프실에서 회의하는 걸 보고 '외계 생명체 지구 정복 본부'라 확신함\n- 체향: 오래된 은박지 + 양파 냄새\n- 비토가 해킹용으로 이 인간의 스마트폰을 자주 훔쳐 감"
    },
    {
      build: "작고 왜소한 체형, 굽은 등",
      appearance: "언제나 고무장갑을 끼고 다님",
      traits: "눈에 살기가 번뜩임",
      secret: "극도의 결벽증을 가진 공원 청소부. 먼지 한 톨도 용납 못 하는 청소계의 광인\n- 쓰레기통을 엉망으로 만드는 동물들을 극혐하지만, 유일하게 깔끔을 떠는 '도저'와는 눈빛으로 통하는 라이벌 겸 소울메이트\n- 체향: 락스 + 강력 세정제\n- 화가 나면 빗자루를 장창처럼 꼬나쥠"
    },
    {
      build: "탄탄한 근육질",
      appearance: "구릿빛 피부, 딱 붙는 스포츠웨어 착용",
      traits: "365일 단백질 쉐이크 통을 들고 다님",
      secret: "샌디 코브 스트리트의 헬스 트레이너. 근손실을 세상에서 제일 두려워함\n- 덤프와 도저(각 28kg)를 야외 웨이트 트레이닝용 '완벽한 덤벨'로 취급해 자꾸 들어 올리려 함\n- 체향: 초코맛 프로틴 + 땀 냄새\n- 라쿤들이 위협해도 \"오, 코어 힘 좋은데?\"라며 감탄함"
    },
    {
      build: "깡마른 체격",
      appearance: "핏기 없는 얼굴, 화려한 타로카드와 수정구슬을 들고 다님",
      traits: "초점 없는 몽환적인 눈빛",
      secret: "자칭 샌디 코브의 대마법사(실상은 사기꾼 점쟁이)\n- 말로의 미인계와 뻔뻔함에 반해 그를 자신의 '스피릿 애니멀'이자 조수로 임명하려 함\n- 체향: 싸구려 인센스 스틱 + 패출리 향\n- 불리한 상황이 오면 주문을 외우며 연막탄을 터뜨리고 도망침"
    },
    {
      build: "아담한 체격",
      appearance: "벙거지 모자와 마스크, 항상 거대한 카메라를 들고 다님",
      traits: "행동이 매우 은밀하고 닌자 같음",
      secret: "플러피즈의 일상을 밀착 취재하려는 야생동물 다큐멘터리 프리랜서 피디\n- 위장술의 대가로 쓰레기봉투로 변장하는 데 도가 텄으나 비토의 열화상 카메라(훔친 폰)에 맨날 걸림\n- 체향: 젖은 골판지 + 카메라 렌즈 클리너\n- 라쿤들이 싸우면 말리지 않고 일단 줌부터 당김"
    },
    {
      build: "훤칠한 체격",
      appearance: "완벽한 슈트핏, 미쉐린 가이드 출신의 우아함",
      traits: "항상 은제 포크를 들고 다님",
      secret: "미각을 잃고 쫓겨난 비운의 천재 셰프. 현재 공원 노숙자\n- 플러피즈가 훔쳐 온 소시지와 쓰레기장 재료를 조합해 완벽한 파인다이닝을 만들어 바침\n- 체향: 트러플 오일 + 길거리 먼지\n- 토니가 자기 요리를 먹어주는 것에 삶의 의미를 느낌"
    },
    {
      build: "왜소한 체격",
      appearance: "두꺼운 뿔테 안경, 해커 특유의 거북목",
      traits: "손가락이 키보드를 치듯 항상 움직임",
      secret: "샌디 코브 대학의 천재 천둥벌거숭이 해커\n- 공원 무료 와이파이가 자꾸 끊기는 원인이 비토(라쿤)라는 걸 알고 종을 뛰어넘은 사이버 전쟁을 벌이는 중\n- 체향: 에너지 드링크 + 쿨링 시트\n- 흥분하면 코를 킁킁거리며 안경을 밀어 올림"
    },
    {
      build: "통통한 체격",
      appearance: "뽀글머리, 샌디 약국 유니폼 착용",
      traits: "항상 주머니가 간식으로 불룩함",
      secret: "샌디 약국 할아버지의 철없는 손주. 약국 알바생이나 동물들에게 퍼주느라 적자 제조기\n- 스크래처와 플러피즈 사이에서 이중간첩 짓을 하며 양쪽의 귀여움을 독차지하려 함\n- 체향: 쌍화탕 + 고양이 츄르\n- 동물을 보면 이성을 잃고 아기 말(Baby talk)을 쏟아냄"
    },
    {
      build: "힙한 스트릿 패션",
      appearance: "스냅백, 목에 거대한 헤드폰을 걸침",
      traits: "걸음걸이에 항상 그루브가 있음",
      secret: "샌디 코브 스트리트의 인디 힙합 프로듀서\n- 도저가 짤그랑거리는 체인 소리를 완벽한 힙합 비트라 찬양하며 도저를 쫓아다니며 녹음기를 들이댐\n- 체향: 진한 스모키 우드 + 체리향 향수\n- 말할 때 자꾸 라임을 맞추려는 병이 있음"
    },
    {
      build: "호리호리한 체격",
      appearance: "날카로운 눈매, 길동물관리국 제복 착용",
      traits: "항상 뜰채와 마취총을 들고 다님",
      secret: "길동물관리국의 열혈 신입 직원. 실적주의자에 완벽주의자지만 심각한 길치임\n- 토니를 잡으려다 매번 덤프의 뱃살에 튕겨 나가거나 로꼬의 폭탄에 당하는 동네북\n- 체향: 소독약 + 새 제복 냄새\n- 실패할 때마다 하늘을 향해 \"빅 토니이이!!!\" 하고 절규함"
    },
    {
      build: "평범한 체격",
      appearance: "항상 피곤한 얼굴, 택배 회사 유니폼 착용",
      traits: "손에 송장 기계를 꽉 쥐고 있음",
      secret: "샌디 코브 파크 구역을 담당하는 불운의 택배 기사\n- 토니의 '소시지 통행료' 룰에 가장 충실하게 당하는 피해자. 이제는 알아서 소시지를 뇌물로 바치고 지나감\n- 체향: 골판지 박스 + 땀 냄새\n- 바스락거리는 소리만 들어도 라쿤인 줄 알고 기겁함"
    },
    {
      build: "화려한 염색 머리",
      appearance: "셀카봉 필수, 관종 특유의 광기 어린 미소",
      traits: "틱톡 댄스를 수시로 춤",
      secret: "조회수에 미친 샌디 코브의 하급 인플루언서\n- 플러피즈를 찍어 떡상하려다 오히려 말로의 미인계에 당해 카메라와 지갑을 다 털림\n- 체향: 솜사탕 향 바디미스트 + 버블껌\n- 무슨 일이 터져도 무조건 \"대박! 라이브 켜야 해!\"라며 카메라부터 듦"
    },
    {
      build: "구부정한 자세, 백발의 노인",
      appearance: "낡은 트렌치코트 착용",
      traits: "카트를 끌고 다님",
      secret: "샌디 코브 뒷골목의 정보통 할머니. 헌옷수거함의 지배자\n- 갱단의 시그니처 옷(토니의 반다나, 로꼬의 조끼 등)을 사실상 공급해 주는 벤더(Vendor) 역할\n- 체향: 나프탈렌 + 홍차\n- 라쿤들이 접근하면 혀를 차면서도 카트에서 제일 좋은 천 쪼가리를 던져줌"
    },
    {
      build: "아담한 체구",
      appearance: "과도하게 해맑은 표정, 디즈니 공주 같은 펄럭이는 원피스",
      traits: "주변에 꽃가루가 날릴 것 같은 분위기",
      secret: "스스로를 숲속의 공주라 굳게 믿는 심각한 대가리 꽃밭 뮤지컬 배우 지망생\n- 플러피즈가 협박하려 으르렁거려도 자기와 듀엣곡을 부르는 줄 알고 춤을 춤\n- 체향: 장미수 + 복숭아 향\n- 대화할 때 자꾸 노래(뮤지컬 톤)로 대답해서 동물들을 질리게 만듦"
    },
    {
      build: "건장한 체격",
      appearance: "선글라스 필수, 경비원 행크의 제복과 유사한 옷",
      traits: "항상 목도장을 들고 다님",
      secret: "선셋 팰리스 아파트먼트의 신입 경비원. 행크를 지나치게 존경함\n- 행크를 따라 플러피즈를 제압하려 하지만 동물들의 하찮은 트랩(바나나 껍질 등)에 매번 당함\n- 체향: 믹스커피 + 구두약\n- 놀라면 반사적으로 경례를 하는 습관이 있음"
    },
    {
      build: "깡마른 체구",
      appearance: "창백한 얼굴, 항상 이어폰을 꽂고 있음",
      traits: "세상 모든 게 귀찮은 무기력의 끝판왕",
      secret: "샌디 코브 공터 벤치의 지박령. 중증 우울증과 무기력증에 시달리는 백수\n- 덤프가 옆에서 빵을 훔쳐 먹든 코를 골든 1도 신경 안 써서 오히려 덤프의 애착 베개가 됨\n- 체향: 마른 섬유 + 무향\n- 눈을 깜빡이는 속도가 남들보다 3배 느림"
    },
    {
      build: "다부진 체구",
      appearance: "작업복 차림, 허리춤에 각종 공구가 가득함",
      traits: "무언가 부수고 싶어 하는 광기 어린 눈동자",
      secret: "샌디 코브 공원의 유지보수 담당 인부. 그러나 고치는 것보다 부수는 걸 좋아함\n- 플러피즈가 지하 펌프실을 요새화해놓은 걸 보고 감명받아 철거는커녕 몰래 시멘트를 부어 강화해 줌\n- 체향: 톱밥 + 방청윤활제(WD-40) 냄새\n- 파이프나 나사만 보면 멍하니 핥거나 쓰다듬는 기행을 보임"
    }
  ]
};

export function PersonaGenerator() {
  const [isOpen, setIsOpen] = useState(false);
  const [generatedText, setGeneratedText] = useState('');
  const [copied, setCopied] = useState(false);
  const [activeCategory, setActiveCategory] = useState<keyof typeof personaDatabase | null>(null);

  const generatePersona = (category: keyof typeof personaDatabase) => {
    setActiveCategory(category);
    const list = personaDatabase[category];
    
    // Pick a random persona
    const randomPersona = list[Math.floor(Math.random() * list.length)];
    
    // Using exactly the requested markdown format
    const text = `${category !== 'raccoon' ? '* 성별을 정해주세요\n' : ''}[대화 프로필용]
# (이름)
- 체격: ${randomPersona.build}
- 생김새: ${randomPersona.appearance}
- 기타 특징: ${randomPersona.traits}

[유저노트 추가용]
# 유저 추가설정
## (이름)
- ${randomPersona.secret}`;

    setGeneratedText(text);
    setCopied(false);
  };

  const copyToClipboard = async () => {
    if (!generatedText) return;
    try {
      await navigator.clipboard.writeText(generatedText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="w-full flex items-center justify-between p-5 bg-sandy-navy rounded-2xl border border-sandy-orange/60 shadow-[0_0_15px_rgba(224,122,95,0.4)] hover:shadow-[0_0_20px_rgba(224,122,95,0.6)] hover:border-sandy-orange transition-all duration-300 group"
      >
        <div className="flex items-center gap-3">
          <Sparkles className="w-5 h-5 text-sandy-orange" />
          <h2 className="text-lg font-bold text-slate-100 group-hover:text-sandy-orange transition-colors">페르소나 랜덤 추천</h2>
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="relative w-full max-w-md bg-sandy-navy rounded-2xl border border-white/10 shadow-2xl overflow-hidden flex flex-col max-h-[85vh]"
            >
              <div className="flex items-center justify-between p-5 border-b border-white/10 shrink-0">
                <div className="flex items-center gap-3">
                  <Sparkles className="w-5 h-5 text-sandy-orange" />
                  <h2 className="text-lg font-bold text-slate-100">페르소나 랜덤 추천</h2>
                </div>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-slate-400 hover:text-white transition-colors rounded-lg hover:bg-white/10"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-5 overflow-y-auto">
                <div className="flex flex-col gap-3">
                  <button 
                    onClick={() => generatePersona('raccoon')}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${activeCategory === 'raccoon' ? 'bg-sandy-orange text-sandy-navy-dark' : 'bg-sandy-navy-light text-slate-300 hover:bg-white/10 border border-white/5'}`}
                  >
                    <PawPrint className="w-5 h-5" /> 1. 라쿤
                  </button>
                  <button 
                    onClick={() => generatePersona('other')}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${activeCategory === 'other' ? 'bg-sandy-orange text-sandy-navy-dark' : 'bg-sandy-navy-light text-slate-300 hover:bg-white/10 border border-white/5'}`}
                  >
                    <Cat className="w-5 h-5" /> 2. 기타 동물
                  </button>
                  <button 
                    onClick={() => generatePersona('human')}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${activeCategory === 'human' ? 'bg-sandy-orange text-sandy-navy-dark' : 'bg-sandy-navy-light text-slate-300 hover:bg-white/10 border border-white/5'}`}
                  >
                    <UserSquare2 className="w-5 h-5" /> 3. 인간 (개쩔거나 이상하거나)
                  </button>
                </div>

                {generatedText && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-6 space-y-3"
                  >
                    <div className="relative group">
                      <pre className="bg-[#0D1117] p-4 rounded-xl text-slate-300 text-sm overflow-x-auto border border-white/10 font-mono whitespace-pre-wrap">
                        <code>{generatedText}</code>
                      </pre>
                    </div>
                    
                    <div className="flex justify-end">
                      <button 
                        onClick={copyToClipboard}
                        className="flex items-center gap-2 px-4 py-2 bg-sandy-navy-light hover:bg-white/10 text-slate-200 rounded-lg text-sm font-medium transition-colors border border-white/5"
                      >
                        {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                        {copied ? '복사 완료!' : '선택(Copy)'}
                      </button>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
