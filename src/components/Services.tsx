import { useState } from "react";
import {
  Factory,
  Building2,
  Store,
  Grid,
  Umbrella,
  DoorOpen,
  Wrench,
  HelpCircle,
  ArrowRight,
  X,
  ShieldAlert,
  Thermometer,
  VolumeX,
  Gauge
} from "lucide-react";

interface ServicesProps {
  onChangePage: (id: string) => void;
}

interface ServiceItem {
  id: string;
  title: string;
  desc: string;
  icon: any;
  details: {
    specs: string[];
    process: string[];
    advantages: string[];
    approxDuration: string;
  };
}

export default function Services({ onChangePage }: ServicesProps) {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const services: ServiceItem[] = [
    {
      id: "production",
      title: "KCC 창호 제작",
      desc: "자체 제작 공정을 통한 정밀한 규격 맞춤 및 유통 단가 절감.",
      icon: Factory,
      details: {
        specs: [
          "KCC 정품 프로파일 원자재 사용",
          "밀리미터(mm) 오차 없는 전자동 자동 절단 시스템",
          "완벽한 구석 용접 및 가선 밀착 작업",
          "더블 모헤어 및 가스켓 직접 조립"
        ],
        process: [
          "도면 및 현장 정밀 실측",
          "프레임 재단 및 보강재 삽입",
          "전자동 일체형 열융착 본딩",
          "조립 검사 및 출고 전 최종 검수"
        ],
        advantages: [
          "공장 직판 단계로 거품 없는 정직한 제작 단가 실현",
          "숙련된 창호 제작 전문 정직원 직접 기획 생산",
          "맞춤 실측을 기반으로 한 빠른 납기 준수"
        ],
        approxDuration: "1~2일 제작 소요"
      }
    },
    {
      id: "apartment",
      title: "아파트 창호 교체",
      desc: "단열과 방음을 극대화한 노후 아파트 베란다 및 내부 창호 시공.",
      icon: Building2,
      details: {
        specs: [
          "KCC 뉴프라임 VBF 140 발코니 전용창",
          "KCC 프라임 이중창 VBF 242/VBF 250",
          "24mm-26mm 고단열 아르곤 가스 복층 로이유리",
          "바람막이 안심 스토퍼 기본 적용"
        ],
        process: [
          "바닥 보양 대책 수립 및 가구 비닐 보양",
          "기존 노후 섀시 및 목창의 정밀 철거",
          "콘크리트 옹벽면 수평·수직 완벽 보정",
          "고밀도 우레탄폼 우레탄 충진 및 프리미엄 코킹 마감"
        ],
        advantages: [
          "외풍 및 웃바람 완벽 차단으로 냉난방비 최대 35% 감소",
          "노후 단지 외부 매연, 미세먼지 침투 방지",
          "철도·도로변 소음 최대 40데시벨 이상 차단"
        ],
        approxDuration: "1일 완료 (원데이 시공)"
      }
    },
    {
      id: "commercial",
      title: "상가·사무실 시공",
      desc: "커튼월, 대형 창호 등 상업 공간의 심미성과 안전을 고려한 시공.",
      icon: Store,
      details: {
        specs: [
          "구조형 알루미늄 커튼월 프레임 시공",
          "고풍압 대응 대면적 하이섀시 및 시스템 창",
          "안전 강화 유리 8mm ~ 24mm 적용",
          "단열 폴딩도어(Folding Door) 연계 설치"
        ],
        process: [
          "입면도 설계 조율 및 풍하중 계산",
          "하지 알루미늄 아연도 파이프 트러스 설치",
          "커튼월 프레임 조립 및 유리 끼우기",
          "특수 웨더 실란트 외부 우천 누수 완벽 방지 마감"
        ],
        advantages: [
          "트렌디하고 현대적인 빌딩 외부 익스테리어 완성",
          "고객 유입을 증대시키는 탁 트인 대형 전면 시인성 확보",
          "다양한 매장 컨셉에 맞춰 분할·비분할 개폐형 시공 가능"
        ],
        approxDuration: "현장 규모별 2~4일 소요"
      }
    },
    {
      id: "glass",
      title: "유리 시공",
      desc: "강화유리, 복층유리 등 용도에 맞는 맞춤 유리 가공 및 설치.",
      icon: Grid,
      details: {
        specs: [
          "KCC 정품 판유리 기반 가공 및 자재 보증",
          "반강화/완전강화 고내구성 열처리 안전유리",
          "e-MAX Light 실버 로이유리 및 칼라 복층유리",
          "기능성 삼중유리 및 진공단열 로이유리"
        ],
        process: [
          "유리 장착부 치수 정확도 99.9% 실측",
          "원자재 유리 특수 CNC 다이아몬드 정밀 재단",
          "실런트 스페이서 조립 및 아르곤가스 자동 주입 배풍",
          "유지 프레임 결착 및 코킹 완성"
        ],
        advantages: [
          "이슬 맺힘(결로) 방지 효과 탁월",
          "안전 사고 시 파편 비산을 차단하는 특수 처리",
          "탁월한 열관류율 값 충족으로 건축 준공 검사 승인 무사통과"
        ],
        approxDuration: "1~2일 소요"
      }
    },
    {
      id: "polycarbonate",
      title: "렉산 (PC) 시공",
      desc: "내구성이 뛰어난 폴리카보네이트 차양 및 지붕 구조물 설치.",
      icon: Umbrella,
      details: {
        specs: [
          "국산 정품 UV 차단 코팅 렉산 판재 사용 (두께 2.0T/3.0T)",
          "녹 방지 스테인리스 및 아연 도금 도료 하부 프레임",
          "다크그린, 브라운, 투명, 스모그그레이 색상 선택",
          "라운드 및 평면형 알루미늄 포스트 프레임"
        ],
        process: [
          "외벽 앵커 주입부 균열 누수 사전 실리콘 보강",
          "강풍 대응 지지 트러스 철재 구조물 영접 및 도조",
          "렉산 시트 곡물 밴딩 고정 및 클램프 바 프로파일 체결",
          "내후성 전용 실란트 코킹 누수 차단 유도"
        ],
        advantages: [
          "유리 대비 250배 이상의 충격 강도로 파손 위험 전무",
          "여름철 과도한 자외선 반사 차단 및 비 차단형 캐노피 구현",
          "빌라 베란다, 전원주택 테라스 비가림막 해결사"
        ],
        approxDuration: "1~2일 소요"
      }
    },
    {
      id: "door",
      title: "강화도어 시공",
      desc: "매장 입구 및 사무실용 강화유리문 정밀 시공 및 부속 교체.",
      icon: DoorOpen,
      details: {
        specs: [
          "8mm ~ 12mm 국산 고강도 투명/반투명 강화유리문",
          "고급 비매립형 또는 매립형 삼화/킹 플로어 힌지(K-8300 등)",
          "스텐 가득 프레임 가드 및 고급 도어 잠금 장치",
          "안전 손끼임 방지 고무 패킹 기본 설치"
        ],
        process: [
          "기존 에이치 바 철거 및 바닥 플로어 박스 콘크리트 굴착",
          "수평계 기반 유압 힌지 중심점 보정 설치",
          "상하 에이치 바 도어 정밀 조립 및 정렬",
          "도어 개폐 서스펜션 장력 속도 조정 테스트"
        ],
        advantages: [
          "부드러운 스톱 제어로 빈번한 출입 시 소음 감소",
          "바람에 의한 도어 튕김 걱정 방지 유턴 스피드 컨트롤",
          "매장 럭셔리함 극대화 및 안전 도어 프레임 확보"
        ],
        approxDuration: "당일 2~4시간 신속 완료"
      }
    },
    {
      id: "stainless",
      title: "스텐 시공 및 용접",
      desc: "핸드레일, 프레임 등 스테인리스 구조물 용접 및 맞춤 제작.",
      icon: Wrench,
      details: {
        specs: [
          "SUS 304 고강도 부식 방지 정품 스테인리스 파이프",
          "헤어라인(HL) 매트 마감 또는 폴리싱(밀러) 광택 마감 선택",
          "다양한 규격의 부속 가성 원통 결착 및 고정 앙카",
          "알곤(TIG) 가스 용접기로 그을음 없는 정교한 용접"
        ],
        process: [
          "용도별(안전 난간, 계단 핸드레일 등) 도안 디자인 검토",
          "스텐 자재 최적 재단 및 현장 앙카 타공 고정",
          "부위별 알곤 가스 현장 용접 결착 및 연마(글라인딩)",
          "용접 부위 방청 도색 마감 및 이물질 클리닝"
        ],
        advantages: [
          "외부 기후 노출에도 수십 년간 녹 없이 은빛 광택 유지",
          "용접 부위 탈락 현상 걱정 없는 견고한 고강도 고정력",
          "상업빌딩 보행 안전 규정 및 소방 안전 충족 기준 완벽 수립"
        ],
        approxDuration: "1~2일 소요"
      }
    }
  ];

  return (
    <section id="services" className="py-24 bg-gray-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs md:text-sm font-bold tracking-wider text-accent uppercase bg-accent/5 px-3 py-1.5 rounded-sm inline-block">
            Professional Construction Service
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary">시공 분야</h2>
          <p className="text-gray-600 text-sm md:text-base">
            대민창호는 자체 제작 공장을 기반으로 엄격한 품질 규격을 철저하게 준수하고 있으며, 전문 인력들이 최고의 노하우로 다양한 맞춤 창호 시공을 제공합니다.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                onClick={() => setSelectedService(service)}
                className="bg-white p-8 border border-gray-200/60 hover:border-accent hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 bg-primary-light/5 text-primary-light flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-all duration-300 rounded-sm">
                    <IconComponent className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {service.desc}
                  </p>
                </div>
                
                <div className="mt-6 pt-4 border-t border-gray-50 flex items-center gap-1 text-xs font-bold text-accent cursor-pointer group-hover:gap-2 transition-all">
                  <span>자세히 보기</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            );
          })}

          {/* Special Custom Other CTA Card inside Grid */}
          <div className="bg-primary p-8 flex flex-col justify-between border border-transparent text-white rounded-sm relative overflow-hidden group">
            {/* Ambient subtle shape light */}
            <div className="absolute -right-20 -bottom-20 w-48 h-48 bg-accent/20 rounded-full blur-2xl group-hover:bg-accent/30 transition-all pointer-events-none" />
            
            <div>
              <div className="w-12 h-12 bg-white/10 flex items-center justify-center text-accent mb-6 rounded-sm">
                <HelpCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 leading-tight">
                기타 특수 모든 시공
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                도면에 따른 대형 특수 섀시, 공장 도어, 하부 전유리 등 다양한 난해 현장도 해결합니다. 편안하게 물어보세요.
              </p>
            </div>

            <div>
              <p className="text-xs text-gray-300 mt-6 md:mt-0 font-medium leading-relaxed">
                문의를 주시면 대민창호 최고의 직영 기술진이 유선 및 현장 방문을 통해 최적의 기획안을 찾아 드립니다.
              </p>
              <button
                onClick={() => onChangePage("consultation")}
                className="mt-6 w-full py-3 bg-white hover:bg-accent hover:text-white text-primary text-xs font-bold transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer rounded-sm"
              >
                <span>상담 바로가기</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Service Specification Modal / Drawer Overlay */}
      {selectedService && (
        <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center bg-black/60 p-4 md:p-6 animate-fade-in backdrop-blur-sm">
          <div className="bg-white rounded-lg shadow-2xl max-w-2xl w-full border border-gray-100 overflow-hidden relative">
            
            {/* Modal Header banner */}
            <div className="bg-primary text-white p-6 md:p-8 flex items-start justify-between relative">
              <div className="space-y-1">
                <span className="text-[10px] text-accent font-bold uppercase tracking-wider">상세 시공 가이드</span>
                <h4 className="text-xl md:text-2xl font-black flex items-center gap-2">
                  <span>{selectedService.title}</span>
                </h4>
              </div>
              <button
                onClick={() => setSelectedService(null)}
                className="text-white hover:text-accent p-1 cursor-pointer bg-white/10 hover:bg-white/15 rounded-full transition-all focus:outline-none"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 md:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
              {/* Feature Attributes */}
              <div className="grid grid-cols-2 gap-4 pb-6 border-b border-gray-100">
                <div className="flex items-center gap-2 text-xs text-gray-500 font-medium">
                  <Gauge className="w-4 h-4 text-accent" />
                  <span>예상 소요 시간: {selectedService.details.approxDuration}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-500 font-medium">
                  <ShieldAlert className="w-4 h-4 text-accent" />
                  <span>품질 유지보수: 무상 2년 보증</span>
                </div>
              </div>

              {/* Specs & Hardware */}
              <div>
                <h5 className="font-bold text-gray-900 text-sm border-l-3 border-accent pl-2 mb-3">
                  전형 자재 사양 및 하드웨어 사양
                </h5>
                <ul className="space-y-2">
                  {selectedService.details.specs.map((item, idx) => (
                    <li key={idx} className="text-gray-600 text-[13px] md:text-sm flex gap-2 items-start">
                      <span className="text-accent font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Step Process */}
              <div>
                <h5 className="font-bold text-gray-900 text-sm border-l-3 border-accent pl-2 mb-3">
                  정밀 시공 작업 공정도
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedService.details.process.map((step, idx) => (
                    <div key={idx} className="p-3 bg-gray-50 border border-gray-100 rounded-sm">
                      <p className="text-[10px] text-accent font-semibold">단계 {idx + 1}</p>
                      <p className="text-[13px] font-bold text-gray-800 mt-1">{step}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct Advantages */}
              <div>
                <h5 className="font-bold text-gray-900 text-sm border-l-3 border-accent pl-2 mb-3">
                  대민창호 시공 시 특장점
                </h5>
                <ul className="space-y-3">
                  {selectedService.details.advantages.map((adv, idx) => (
                    <li key={idx} className="p-3 bg-accent/5 rounded-sm border-l-2 border-accent/40 text-gray-700 text-xs md:text-sm leading-relaxed">
                      {adv}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="p-4 bg-gray-50 border-t border-gray-100 flex flex-col sm:flex-row justify-end gap-3">
              <button
                onClick={() => setSelectedService(null)}
                className="py-2 px-4 bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 font-bold text-xs rounded-sm cursor-pointer transition-all focus:outline-none"
              >
                닫기
              </button>
              <button
                onClick={() => {
                  setSelectedService(null);
                  onChangePage("consultation");
                }}
                className="py-2.5 px-5 bg-accent text-white hover:bg-primary font-bold text-xs rounded-sm cursor-pointer transition-all flex items-center justify-center gap-1.5 focus:outline-none"
              >
                <span>이 시공 종류로 상담받기</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
