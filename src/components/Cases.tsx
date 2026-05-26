import { useState } from "react";
import { ChevronLeft, ChevronRight, Eye, ShieldCheck, HelpCircle, Thermometer, Sparkles } from "lucide-react";

interface ConstructionCase {
  id: string;
  title: string;
  description: string;
  location: string;
  category: "Apartment" | "Commercial" | "Remodeling";
  imageUrl: string;
  specs: {
    frame: string;
    glass: string;
    period: string;
    insulation: string;
  };
}

export default function Cases() {
  const [activeTab, setActiveTab] = useState<"All" | "Apartment" | "Commercial" | "Remodeling">("All");
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);
  const [selectedCase, setSelectedCase] = useState<ConstructionCase | null>(null);
  
  // State for Before / After visual slider demo (e.g., slider percentage 0 to 100)
  const [sliderPos, setSliderPos] = useState(50);
  const [isSliding, setIsSliding] = useState(false);

  const cases: ConstructionCase[] = [
    {
      id: "case1",
      title: "강남 래미안 아파트 전면 창호 교체",
      description: "노후 알루미늄 단창과 목재 이중창을 고단열 뉴프라임 발코니 전용창으로 깔끔하게 원데이 철거 및 시공 완료해 드린 현장입니다. 냉난방 단열과 고풍압 풍압 하중 설계를 극대화하였습니다.",
      location: "서울특별시 강남구 개포동",
      category: "Apartment",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAVy5F0sWkRm3BcJ994h2IrvzaO09a4cMvzycW61-o4TWxOTdpuNVT0_n6kvRjGV4DvzwW8tu5ujUpVoMf_IaaZDZ72xb06w5a1C3QFZCiqKEFZ3AlqXDxeNwqMrI2RiPI0yvdhaqGGocAc8CHcQMojRIp-kOSEiie6VZxwysqqblPLrO7867cDfUMg8yuAxkEpAZz09689o51ReiUV_W64E585CkHR8N3QSavZ2jrbhNxV-WyvvC6hGQSYIAO8t90J2BH-oEASb2A",
      specs: {
        frame: "KCC 뉴프라임 140 발코니 전용 고성능창",
        glass: "26mm 로이(Low-E) 아르곤 가스 복층 유리",
        period: "기존 섀시 철거 포함 1일 시공 완성",
        insulation: "열관류율 0.9W/㎡K (에너지효율 1등급)"
      }
    },
    {
      id: "case2",
      title: "강남 신사동 테라스 빌딩 로비 & 강화도어 시공",
      description: "전면 디자인 매트 블랙 알루미늄 프레임과 함께 부드럽고 묵직한 유압 힌지를 내장한 정밀 강화 도어를 설치하였으며, 내부 로비 시인성을 넓혀 현대적 무드로 개선했습니다.",
      location: "서울특별시 강남구 신사동",
      category: "Commercial",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDT44AumDOjxF9ddwA0t-bs2KUDElqdJZv-TcYQ6NvwB-82UAiABgQupxErwlvVupIZ2KG5zl_89i3jQmZKchKMPEMJ6MmVyKsg9et74PrBigi0ByJjMPdSBLobRwJRFT_jq86CDBloAnXEvbo3qfKHx0gv-3OSWk5ZGRvd3huipCTzuJ-0hK9s_imsYLZMVwbgELHLUHyffKM8Bi4MM3HKzNjYYdl_x3W5OUCYvuvsBmUTQqS4x4KLrUj1j6x9onJgTfpKkDInP9o",
      specs: {
        frame: "고강도 구조용 알루미늄 프레임 (블랙)",
        glass: "12mm 강화 안심 유리 단판",
        period: "총 2일 (프레임 트러스 용접 1일, 유리/힌지 세팅 1일)",
        insulation: "상업시설 기준 방풍 지수 합격"
      }
    },
    {
      id: "case3",
      title: "서초 주택 노후 주방 및 발코니 창 시공",
      description: "어둡고 단열이 거의 안 되던 얇은 미닫이 목재 창호를 깔끔한 화이트 KCC 슬라이딩 창호 구조로 변경하여, 냄새 환기는 원활하게 돕고 외부 공기 유입은 차단하는 실속 리모델링을 제공했습니다.",
      location: "서울특별시 서초구 방배동",
      category: "Remodeling",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCuYeftAWD0mtmEzB4h-4zavF387OF9WC-6o7ktqVrMKvMCTD0Nd2mfcATtBhUuWQ4_FJ5_bsAWvVBwOGoUEsVZp5vrXnYzoa5O3BefQ3FwVP6ismX4gGPC3-dUMvY4SU1BGi1_rGHMkk67e9YUCNcmxpzd29mU7_k738pL92kKW-aOAYqZHljEAs0UYLPv_m93dbaopM81Xme3rkaXVQ4UPyO6Y-oyHTBUEiebUym-0wnGeZQpr7D6MVUCDuYaL6Bbiw2Kr9bgEXc",
      specs: {
        frame: "KCC 와이드빌 VBF 230 이중창 구조",
        glass: "22mm 복층 그린 투명 이중 유리 적용",
        period: "기존 소형 목창 철거 포함 실내 섀시 교체 4시간 소요",
        insulation: "단열 공기층 형성으로 결로 예방 강화"
      }
    }
  ];

  const filteredCases = activeTab === "All" ? cases : cases.filter(c => c.category === activeTab);

  const handleNextCase = () => {
    setActiveCaseIndex((prev) => (prev + 1) % filteredCases.length);
  };

  const handlePrevCase = () => {
    setActiveCaseIndex((prev) => (prev - 1 + filteredCases.length) % filteredCases.length);
  };

  const activeCase = filteredCases[activeCaseIndex] || cases[0];

  // Helper for manual sliding gesture emulation with touch or mouse
  const handleMove = (clientX: number, containerWidth: number, containerRectLeft: number) => {
    const x = clientX - containerRectLeft;
    const percentage = Math.max(0, Math.min(100, (x / containerWidth) * 100));
    setSliderPos(percentage);
  };

  return (
    <section id="cases" className="py-24 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Top Header & Pagination controllers */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
          <div className="space-y-4">
            <span className="text-xs md:text-sm font-bold tracking-wider text-accent uppercase bg-accent/5 px-3 py-1.5 rounded-sm inline-block">
              Proven Performance Portfolio
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-primary">시공 사례</h2>
            <p className="text-gray-600 text-sm md:text-base max-w-xl">
              정밀 원데이 시공으로 주거 아파트 베란다부터 격조 높은 상가 공간까지 완벽히 완성해 온 대민창호의 시공 실적입니다.
            </p>
          </div>

          {/* Categories Tab */}
          <div className="flex flex-wrap gap-2">
            {(["All", "Apartment", "Commercial", "Remodeling"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  setActiveCaseIndex(0);
                }}
                className={`px-4 py-2 font-bold text-xs rounded-sm transition-all focus:outline-none cursor-pointer ${
                  activeTab === tab
                    ? "bg-primary text-white"
                    : "bg-gray-100 hover:bg-gray-200/85 text-gray-600"
                }`}
              >
                {tab === "All" && "전체 보기"}
                {tab === "Apartment" && "아파트 공사"}
                {tab === "Commercial" && "상가·전문시공"}
                {tab === "Remodeling" && "섀시 리모델링"}
              </button>
            ))}
          </div>

          {/* Simple controls */}
          <div className="hidden lg:flex gap-2">
            <button
              onClick={handlePrevCase}
              className="w-12 h-12 border border-gray-200 hover:border-accent flex items-center justify-center hover:bg-accent hover:text-white transition-all text-gray-500 cursor-pointer rounded-sm"
              aria-label="Previous case"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNextCase}
              className="w-12 h-12 border border-gray-200 hover:border-accent flex items-center justify-center hover:bg-accent hover:text-white transition-all text-gray-500 cursor-pointer rounded-sm"
              aria-label="Next case"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Highlight Main Bento Container with actual specs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main big display panel (Col Span 8) */}
          <div className="lg:col-span-8 bg-gray-50 border border-gray-200/50 rounded-sm overflow-hidden flex flex-col justify-between group relative">
            
            {/* Aspect image display */}
            <div className="relative aspect-[16/10] md:aspect-[16/9] overflow-hidden">
              <img
                alt={activeCase.title}
                src={activeCase.imageUrl}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

              {/* Status Band */}
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="bg-primary hover:bg-accent transition-colors text-white text-[10px] font-bold px-3 py-1.5 uppercase rounded-sm">
                  {activeCase.category === "Apartment" && "APARTMENT AFTER"}
                  {activeCase.category === "Commercial" && "COMMERCIAL PREVIEW"}
                  {activeCase.category === "Remodeling" && "REMODELING PROCESS"}
                </span>
                <span className="bg-white/10 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1.5 rounded-sm">
                  {activeCase.location}
                </span>
              </div>

              {/* Specs Overlay Panel */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white space-y-2">
                <h3 className="text-lg md:text-2xl font-black tracking-tight flex items-center gap-2">
                  <span>{activeCase.title}</span>
                </h3>
                <p className="text-xs md:text-sm text-gray-300 line-clamp-2 leading-relaxed max-w-2xl font-medium">
                  {activeCase.description}
                </p>
              </div>

              {/* Fullscreen view triggers */}
              <button
                onClick={() => setSelectedCase(activeCase)}
                className="absolute top-4 right-4 bg-white/15 hover:bg-accent hover:text-white backdrop-blur-md p-2 text-white rounded-full transition-all duration-300 cursor-pointer border border-white/10"
                title="상세 스펙 분석기 열기"
              >
                <Eye className="w-5 h-5" />
              </button>
            </div>

            {/* Sub attributes and specs quick analysis grid */}
            <div className="p-6 md:p-8 bg-white grid grid-cols-2 md:grid-cols-4 gap-4 divide-y md:divide-y-0 md:divide-x divide-gray-100">
              <div className="space-y-1">
                <p className="text-[10px] text-gray-400 font-bold uppercase">사용 KCC 창호</p>
                <p className="text-xs md:text-sm font-extrabold text-primary truncate">{activeCase.specs.frame}</p>
              </div>
              <div className="space-y-1 pt-2 md:pt-0 pl-0 md:pl-4">
                <p className="text-[10px] text-gray-400 font-bold uppercase">유리 사양</p>
                <p className="text-xs md:text-sm font-extrabold text-primary truncate">{activeCase.specs.glass}</p>
              </div>
              <div className="space-y-1 pt-2 md:pt-0 pl-0 md:pl-4">
                <p className="text-[10px] text-gray-400 font-bold uppercase">시공 총액 기간</p>
                <p className="text-xs md:text-sm font-extrabold text-primary truncate">{activeCase.specs.period}</p>
              </div>
              <div className="space-y-1 pt-2 md:pt-0 pl-0 md:pl-4">
                <p className="text-[10px] text-gray-400 font-bold uppercase">검증 단열 수치</p>
                <p className="text-xs md:text-xs font-extrabold text-accent truncate">{activeCase.specs.insulation}</p>
              </div>
            </div>

          </div>

          {/* Right Bento - Interactive Remodeling Slider Showcase (Col Span 4) */}
          <div className="lg:col-span-4 bg-gray-50 border border-gray-200/50 rounded-sm p-6 flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <span className="text-[10px] font-bold text-accent tracking-widest uppercase bg-accent/5 px-2 bg-slate-100 py-1 rounded-sm inline-block">
                Interactive Before / After
              </span>
              <h4 className="text-lg font-extrabold text-primary">섀시 교체로 변하는 우리 집 모습</h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                노후 알루미늄 단창이나 나무 목문은 심각한 외풍과 한기를 유발합니다. KCC 이중 단열 창호 시공으로 열 손실을 약 70% 이상 철저하게 예방할 수 있습니다. 아래 견본 이미지를 토글해 보며 개선 상황을 확인하세요.
              </p>
            </div>

            {/* Dynamic Comparison Box Container with full slider or toggle click */}
            <div className="space-y-4">
              <div
                className="relative aspect-square md:aspect-[4/3] lg:aspect-square w-full select-none overflow-hidden rounded-md border border-gray-200 bg-white cursor-ew-resize"
                onMouseMove={(e) => {
                  if (isSliding) {
                    const rect = e.currentTarget.getBoundingClientRect();
                    handleMove(e.clientX, rect.width, rect.left);
                  }
                }}
                onTouchMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  if (e.touches[0]) {
                    handleMove(e.touches[0].clientX, rect.width, rect.left);
                  }
                }}
                onMouseDown={() => setIsSliding(true)}
                onTouchStart={() => setIsSliding(true)}
                onMouseLeave={() => setIsSliding(false)}
                onMouseUp={() => setIsSliding(false)}
                onTouchEnd={() => setIsSliding(false)}
              >
                {/* Before Image (Legacy Brown Wooden Window) */}
                <div className="absolute inset-0">
                  <img
                    alt="Before: Legacy brown wooden frame"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCuYeftAWD0mtmEzB4h-4zavF387OF9WC-6o7ktqVrMKvMCTD0Nd2mfcATtBhUuWQ4_FJ5_bsAWvVBwOGoUEsVZp5vrXnYzoa5O3BefQ3FwVP6ismX4gGPC3-dUMvY4SU1BGi1_rGHMkk67e9YUCNcmxpzd29mU7_k738pL92kKW-aOAYqZHljEAs0UYLPv_m93dbaopM81Xme3rkaXVQ4UPyO6Y-oyHTBUEiebUym-0wnGeZQpr7D6MVUCDuYaL6Bbiw2Kr9bgEXc"
                    className="w-full h-full object-cover object-left"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-3 left-3 bg-red-600/90 text-white font-bold text-[10px] px-2 py-1 rounded-sm">
                    교체 전 목창호 (Before)
                  </div>
                </div>

                {/* After Image (Modern Insulated White Vinyl Window) Overlap - clipped by slider percentage */}
                <div
                  className="absolute inset-0 border-r-2 border-accent transition-all duration-75"
                  style={{ width: `${sliderPos}%` }}
                >
                  <img
                    alt="After: New insulated white KCC vinyl window"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCuYeftAWD0mtmEzB4h-4zavF387OF9WC-6o7ktqVrMKvMCTD0Nd2mfcATtBhUuWQ4_FJ5_bsAWvVBwOGoUEsVZp5vrXnYzoa5O3BefQ3FwVP6ismX4gGPC3-dUMvY4SU1BGi1_rGHMkk67e9YUCNcmxpzd29mU7_k738pL92kKW-aOAYqZHljEAs0UYLPv_m93dbaopM81Xme3rkaXVQ4UPyO6Y-oyHTBUEiebUym-0wnGeZQpr7D6MVUCDuYaL6Bbiw2Kr9bgEXc"
                    className="absolute inset-0 object-cover object-left"
                    style={{ width: "380px", maxWidth: "none" }} // fix dimensions for the comparison feel
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-3 left-3 bg-accent text-white font-bold text-[10px] px-2 py-1 rounded-sm">
                    KCC 리모델링 후 (After)
                  </div>
                </div>

                {/* Interactive Center Handle Tool */}
                <div
                  className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white text-accent border border-gray-100 shadow-lg flex items-center justify-center pointer-events-none"
                  style={{ left: `${sliderPos}%` }}
                >
                  <Sparkles className="w-4 h-4 fill-accent/10 shrink-0" />
                </div>
              </div>
              <p className="text-[10px] text-gray-400 text-center font-bold">
                * 이미지 위를 마우스 드래그 혹은 터치하여 Before / After 변화를 비교해 보세요 *
              </p>
            </div>

            {/* Quick Metrics */}
            <div className="p-4 bg-accent/5 rounded-sm flex items-center gap-3 border border-accent/10">
              <Thermometer className="w-5 h-5 text-accent shrink-0" />
              <div className="text-xs">
                <span className="font-extrabold text-primary block">평균 실내 온도 약 +3.5℃ 상승</span>
                <span className="text-gray-500 text-[10px]">연간 아파트 부엌 난방 절감 효과 극대화</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Case Portfolio Full Screen Dialog Specs Viewer */}
      {selectedCase && (
        <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center bg-black/75 p-4 md:p-6 animate-fade-in backdrop-blur-md">
          <div className="bg-white rounded-lg shadow-2xl max-w-2xl w-full border border-gray-100 overflow-hidden relative">
            <div className="relative h-64 md:h-80 bg-gray-50">
              <img
                alt={selectedCase.title}
                src={selectedCase.imageUrl}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white space-y-1">
                <span className="text-[10px] text-accent font-bold uppercase tracking-widest">KCC Certified Portfolio</span>
                <h4 className="text-lg md:text-2xl font-black">{selectedCase.title}</h4>
                <p className="text-xs text-gray-300">{selectedCase.location}</p>
              </div>
            </div>

            <div className="p-6 md:p-8 space-y-6">
              <div className="space-y-3">
                <h5 className="font-bold text-gray-900 text-sm">시공 종합 리포트</h5>
                <p className="text-gray-600 text-[13px] md:text-sm leading-relaxed">
                  {selectedCase.description}
                </p>
              </div>

              {/* Specs detailed key values */}
              <div className="space-y-3 pt-4 border-t border-gray-100">
                <h5 className="font-bold text-gray-900 text-sm">기술 보증 제원 분석</h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-3 bg-gray-50 border border-gray-100/60 rounded-sm">
                    <p className="text-[10px] text-gray-400 font-bold">사용 섀시 모델명</p>
                    <p className="text-sm font-bold text-primary mt-1">{selectedCase.specs.frame}</p>
                  </div>
                  <div className="p-3 bg-gray-50 border border-gray-100/60 rounded-sm">
                    <p className="text-[10px] text-gray-400 font-bold">글라스 두께 및 사양</p>
                    <p className="text-sm font-bold text-primary mt-1">{selectedCase.specs.glass}</p>
                  </div>
                  <div className="p-3 bg-gray-50 border border-gray-100/60 rounded-sm">
                    <p className="text-[10px] text-gray-400 font-bold">공기 소요일</p>
                    <p className="text-sm font-bold text-primary mt-1">{selectedCase.specs.period}</p>
                  </div>
                  <div className="p-3 bg-accent/5 border border-accent/10 rounded-sm">
                    <p className="text-[10px] text-accent font-bold">단열 시험 테스트성적서</p>
                    <p className="text-sm font-bold text-accent mt-1">{selectedCase.specs.insulation}</p>
                  </div>
                </div>
              </div>

              {/* Guarantees */}
              <div className="flex gap-3 p-4 bg-gray-50 rounded-sm items-start border border-gray-100/50">
                <ShieldCheck className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <div className="text-xs text-gray-500 leading-relaxed">
                  <span className="font-bold text-gray-800 block">KCC 공식 정품 창호 하자이행 공제증권 발급 현장</span>
                  대민창호는 정품 프로파일과 본사 정품 부자재 만을 전적으로 사용하며, 전 시공 완료 현장에는 KCC 정품 및 본사 시공 품질을 보장하는 안심 홀로그램 마크가 인쇄되어 있습니다.
                </div>
              </div>
            </div>

            <div className="p-4 bg-gray-50 border-t border-gray-100 flex justify-end">
              <button
                onClick={() => setSelectedCase(null)}
                className="py-2 px-6 bg-primary hover:bg-accent text-white font-bold text-xs rounded-sm cursor-pointer transition-all focus:outline-none"
              >
                상세 탭 닫기
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
