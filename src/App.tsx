import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Cases from "./components/Cases";
import CostCalculator from "./components/CostCalculator";
import Consultation from "./components/Consultation";
import Footer from "./components/Footer";
import { ShieldCheck, X, FileText, ChevronRight, Home, ArrowRight, ArrowLeft } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const pageMeta: Record<string, { title: string; subtitle: string; bgImage?: string }> = {
  about: {
    title: "회사 소개",
    subtitle: "30년 국가 공량 기술력과 정품 고단열 부자재를 활용하여 보이지 않는 틈새 찬바람까지 기밀 시공합니다.",
    bgImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuDT44AumDOjxF9ddwA0t-bs2KUDElqdJZv-TcYQ6NvwB-82UAiABgQupxErwlvVupIZ2KG5zl_89i3jQmZKchKMPEMJ6MmVyKsg9et74PrBigi0ByJjMPdSBLobRwJRFT_jq86CDBloAnXEvbo3qfKHx0gv-3OSWk5ZGRvd3huipCTzuJ-0hK9s_imsYLZMVwbgELHLUHyffKM8Bi4MM3HKzNjYYdl_x3W5OUCYvuvsBmUTQqS4x4KLrUj1j6x9onJgTfpKkDInP9o"
  },
  cases: {
    title: "시공 사례",
    subtitle: "초고층 발코니 이중창 교체부터 꼼꼼한 강화도어, 방풍 렉산 차양막까지. 대민의 자존심이 깃든 공사 실적입니다.",
    bgImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuCuYeftAWD0mtmEzB4h-4zavF387OF9WC-6o7ktqVrMKvMCTD0Nd2mfcATtBhUuWQ4_FJ5_bsAWvVBwOGoUEsVZp5vrXnYzoa5O3BefQ3FwVP6ismX4gGPC3-dUMvY4SU1BGi1_rGHMkk67e9YUCNcmxpzd29mU7_k738pL92kKW-aOAYqZHljEAs0UYLPv_m93dbaopM81Xme3rkaXVQ4UPyO6Y-oyHTBUEiebUym-0wnGeZQpr7D6MVUCDuYaL6Bbiw2Kr9bgEXc"
  },
  services: {
    title: "시공 분야",
    subtitle: "최정상 기하학 설계 기반 KCC 정품 하이새시 및 강화 인테리어 유리를 공장 직판 최저 마진 보증으로 제공해 드립니다.",
    bgImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuA1azlb3GvB0gbCxWKQH-6TyDabIA2Ywj3fiJxNfV9nOwJcX7VwoWajsVb7gHkqzMR7gV3yW7GOwhOQQOJfBWDzx9A8BY07qmSjVGuXphR-joEGz8h7T5XPT0lOOL8l-kEAc3P3Jbfx_ZlpN0i9veQb3_r3X3UniaSgjhXNFN3S9dxuWJTylXRc_nikmBuyEDmrCgd_OyvY95AoNcIQypQNILpQOoRa41EMAjuFsmdeUCwPhEsDaXsB7U7ekImB2MmYiQod2usTSIo"
  },
  calculator: {
    title: "공장 직판 견적 계산기",
    subtitle: "중간 거래 딜러 마진, 과도한 광고비를 완전히 배제한 대민창호만의 전산 규격 자동 견적 검출기입니다.",
    bgImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuDT44AumDOjxF9ddwA0t-bs2KUDElqdJZv-TcYQ6NvwB-82UAiABgQupxErwlvVupIZ2KG5zl_89i3jQmZKchKMPEMJ6MmVyKsg9et74PrBigi0ByJjMPdSBLobRwJRFT_jq86CDBloAnXEvbo3qfKHx0gv-3OSWk5ZGRvd3huipCTzuJ-0hK9s_imsYLZMVwbgELHLUHyffKM8Bi4MM3HKzNjYYdl_x3W5OUCYvuvsBmUTQqS4x4KLrUj1j6x9onJgTfpKkDInP9o"
  },
  consultation: {
    title: "실시간 상담 문의",
    subtitle: "수도권 전 지역 무료 출동 및 무상 정밀 실측 예약. 대표 엔지니어가 접수 후 30분 안으로 직접 상세히 안내합니다.",
    bgImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuCuYeftAWD0mtmEzB4h-4zavF387OF9WC-6o7ktqVrMKvMCTD0Nd2mfcATtBhUuWQ4_FJ5_bsAWvVBwOGoUEsVZp5vrXnYzoa5O3BefQ3FwVP6ismX4gGPC3-dUMvY4SU1BGi1_rGHMkk67e9YUCNcmxpzd29mU7_k738pL92kKW-aOAYqZHljEAs0UYLPv_m93dbaopM81Xme3rkaXVQ4UPyO6Y-oyHTBUEiebUym-0wnGeZQpr7D6MVUCDuYaL6Bbiw2Kr9bgEXc"
  }
};

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>("hero");
  const [calculatorSummary, setCalculatorSummary] = useState<string>("");
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [modalSubmitSuccessSet, setModalSubmitSuccessSet] = useState(false);

  // Modal form inputs
  const [modalName, setModalName] = useState("");
  const [modalPhone, setModalPhone] = useState("");
  const [modalType, setModalType] = useState("KCC 창호 교체");
  const [modalAgree, setModalAgree] = useState(false);

  const handlePageChange = (id: string) => {
    setCurrentPage(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleModalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!modalName.trim() || !modalPhone.trim() || !modalAgree) {
      alert("성함, 연락처를 정밀 기재하시고 개인정보 수집에 동의하셔야 접수가 가능합니다.");
      return;
    }

    setModalSubmitSuccessSet(true);
    setTimeout(() => {
      setModalName("");
      setModalPhone("");
      setModalAgree(false);
      setModalSubmitSuccessSet(false);
      setIsQuoteModalOpen(false);
      alert("무료 견적 접수가 완료되었습니다! 30분 안으로 전속 기사가 조속히 전화를 드릴 예정입니다.");
    }, 2800);
  };

  return (
    <div className="min-h-screen bg-surface-bg font-sans leading-normal selection:bg-accent selection:text-white flex flex-col justify-between">
      
      <div>
        {/* Dynamic Header */}
        <Header
          onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
          currentPage={currentPage}
          onChangePage={handlePageChange}
        />

        {/* Dynamic Transition Area */}
        <AnimatePresence mode="wait">
          {currentPage === "hero" ? (
            <motion.div
              key="hero-page"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <Hero onChangePage={handlePageChange} />

              {/* Home Portal Quick Navigation Dashboard Board */}
              <div className="py-24 bg-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-6 md:px-8">
                  <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
                    <div className="space-y-4">
                      <span className="text-xs md:text-sm font-bold tracking-wider text-accent uppercase bg-accent/5 px-3 py-1.5 rounded-sm inline-block">
                        Trusted Professional Portal
                      </span>
                      <h2 className="text-3xl md:text-4xl font-extrabold text-primary">대민 정밀 원격 서비스 포털</h2>
                      <p className="text-gray-600 text-sm md:text-base max-w-xl">
                        원하시는 가이드 메뉴를 클릭하시면 해당 상세 전문 독립 페이지로 전환되어 명확하고 상세한 스펙 제원을 보증받으실 수 있습니다.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Card 1: About */}
                    <div className="border border-gray-200 p-8 rounded-sm hover:border-accent hover:shadow-lg transition-all duration-300 flex flex-col justify-between h-72">
                      <div className="space-y-4">
                        <span className="text-xs font-bold text-accent">01. COMPANY SHOWCASE</span>
                        <h3 className="text-xl font-bold text-primary">대민창호 회사 소개</h3>
                        <p className="text-sm text-gray-500 leading-relaxed">
                          30여 년 장인의 정밀 시공 원칙과 철거 폐기 안심 보증을 책임지는 브랜드 기술 제원을 안내해 드립니다.
                        </p>
                      </div>
                      <button
                        onClick={() => handlePageChange("about")}
                        className="text-xs font-bold text-accent flex items-center gap-1.5 hover:gap-2.5 transition-all text-left focus:outline-none cursor-pointer"
                      >
                        <span>회사 철학 및 소개 바로가기</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Card 2: Cases */}
                    <div className="border border-gray-200 p-8 rounded-sm hover:border-accent hover:shadow-lg transition-all duration-300 flex flex-col justify-between h-72">
                      <div className="space-y-4">
                        <span className="text-xs font-bold text-accent">02. PERFORMANCE PORTFOLIO</span>
                        <h3 className="text-xl font-bold text-primary">완벽 시공 사례 모음</h3>
                        <p className="text-sm text-gray-500 leading-relaxed">
                          노후 아파트 원데이 올교체 리모델링 및 상가 강화도어, 빌딩 대면적 로비 커튼월 우수 시공 포트폴리오를 제공합니다.
                        </p>
                      </div>
                      <button
                        onClick={() => handlePageChange("cases")}
                        className="text-xs font-bold text-accent flex items-center gap-1.5 hover:gap-2.5 transition-all text-left focus:outline-none cursor-pointer"
                      >
                        <span>대표 사례 보러 가기</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Card 3: Services */}
                    <div className="border border-gray-200 p-8 rounded-sm hover:border-accent hover:shadow-lg transition-all duration-300 flex flex-col justify-between h-72">
                      <div className="space-y-4">
                        <span className="text-xs font-bold text-accent">03. TECHNOLOGY & SCOPE</span>
                        <h3 className="text-xl font-bold text-primary">공인 시공 규격 및 분야</h3>
                        <p className="text-sm text-gray-500 leading-relaxed">
                          KCC 정품 프레임 조립 가공, 강화유리, 렉산 캐노피 차양막 지붕 등 고풍압 대책 스틸 용접 마감 제원 설계.
                        </p>
                      </div>
                      <button
                        onClick={() => handlePageChange("services")}
                        className="text-xs font-bold text-accent flex items-center gap-1.5 hover:gap-2.5 transition-all text-left focus:outline-none cursor-pointer"
                      >
                        <span>기술 시공 일람 가기</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Card 4: Cost Estimator */}
                    <div className="border border-gray-200 p-8 rounded-sm hover:border-accent hover:shadow-lg transition-all duration-300 flex flex-col justify-between h-72 md:col-span-2 lg:col-span-1">
                      <div className="space-y-4">
                        <span className="text-xs font-bold text-accent">04. FACTORY TRANSPARENCY</span>
                        <h3 className="text-xl font-bold text-primary">직영 원가 섀시 계산기</h3>
                        <p className="text-sm text-gray-500 leading-relaxed">
                          원하는 평형과 등급을 선택하는 즉시 대리점 거품 유통비를 제하고 생산 부자재 원가를 계산해 드립니다.
                        </p>
                      </div>
                      <button
                        onClick={() => handlePageChange("calculator")}
                        className="text-xs font-bold text-accent flex items-center gap-1.5 hover:gap-2.5 transition-all text-left focus:outline-none cursor-pointer"
                      >
                        <span>즉석 견적 진단하기</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Quick Stat Panel (Highlight on Frontpage) */}
                    <div className="lg:col-span-2 bg-primary text-white p-8 rounded-sm flex flex-col md:flex-row items-center justify-between gap-6">
                      <div className="space-y-3">
                        <div className="inline-block px-2.5 py-1 text-[10px] bg-accent text-white font-extrabold rounded-sm uppercase tracking-widest">
                          Premium Partner Guarantee
                        </div>
                        <h4 className="text-xl font-black">언제든 무상 현장 실측을 요청해 보세요</h4>
                        <p className="text-xs text-gray-300 leading-relaxed max-w-sm">
                          대민의 오랜 베테랑들이 정확한 구조 도면 검토를 시작으로 결로 방지, 단열 효율 상승 패키지 진단을 선제 제공합니다.
                        </p>
                      </div>
                      <button
                        onClick={() => handlePageChange("consultation")}
                        className="bg-accent hover:bg-white hover:text-primary text-white text-xs font-extrabold py-4 px-6 rounded-sm w-full md:w-auto text-center cursor-pointer transition-all duration-300 shadow-md flex items-center justify-center gap-2"
                      >
                        <span>지금 무료 실측 상담하기</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
            >
              {/* Standalone Route Page Header Hero Banner */}
              <div className="relative pt-36 pb-20 bg-primary overflow-hidden border-b border-white/5 select-none">
                {/* Visual Accent Mask */}
                {pageMeta[currentPage]?.bgImage && (
                  <div className="absolute inset-0 z-0 opacity-20">
                    <img
                      alt="Banner mask"
                      src={pageMeta[currentPage].bgImage}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                )}
                <div className="absolute inset-0 bg-primary/80 z-0 pointer-events-none" />

                <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 text-white space-y-4">
                  {/* Breadcrumb Navigation */}
                  <div className="flex items-center gap-2 text-xs text-gray-300">
                    <button
                      onClick={() => handlePageChange("hero")}
                      className="hover:text-white flex items-center gap-1 transition-colors cursor-pointer focus:outline-none"
                    >
                      <Home className="w-3.5 h-3.5" />
                      <span>홈</span>
                    </button>
                    <ChevronRight className="w-3 h-3 text-gray-500" />
                    <span className="text-accent font-bold font-sans">{pageMeta[currentPage]?.title || "페이지"}</span>
                  </div>

                  <h1 className="text-4xl font-black tracking-tight text-white mb-2">
                    {pageMeta[currentPage]?.title || "대민 독립형 기획실"}
                  </h1>
                  <p className="text-sm md:text-base text-gray-300 max-w-3xl leading-relaxed">
                    {pageMeta[currentPage]?.subtitle || "대민창호의 정성을 담은 전문 사양 분석 제원 시스템 정보입니다."}
                  </p>
                </div>
              </div>

              {/* Render Selected Dynamic Route Page Only (Single Standalone Screen Boundaries View) */}
              <div className="relative z-10">
                {currentPage === "about" && <About />}
                {currentPage === "cases" && <Cases />}
                {currentPage === "services" && <Services onChangePage={handlePageChange} />}
                
                {currentPage === "calculator" && (
                  <CostCalculator
                    onScrollToConsultation={() => handlePageChange("consultation")}
                    onSetCategoryInConsultation={(summary) => setCalculatorSummary(summary)}
                  />
                )}
                
                {currentPage === "consultation" && (
                  <Consultation
                    initialDetailsValue={calculatorSummary}
                    onClearDetailsValue={() => setCalculatorSummary("")}
                  />
                )}
              </div>

              {/* Interactive Bottom Route Navigator CTA (Ensure smooth user-flow) */}
              <div className="py-12 bg-gray-50 border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
                  <button
                    onClick={() => handlePageChange("hero")}
                    className="flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-primary transition-colors focus:outline-none cursor-pointer"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>메인 홈포털로 되돌아가기</span>
                  </button>

                  <div className="flex gap-3">
                    {currentPage !== "calculator" && (
                      <button
                        onClick={() => handlePageChange("calculator")}
                        className="py-3 px-6 border border-gray-200 hover:border-accent text-gray-700 hover:text-accent font-bold text-xs rounded-sm transition-all focus:outline-none cursor-pointer"
                      >
                        공장 단가 즉석 계산하기
                      </button>
                    )}
                    {currentPage !== "consultation" && (
                      <button
                        onClick={() => handlePageChange("consultation")}
                        className="py-3 px-6 bg-accent hover:bg-primary text-white font-bold text-xs rounded-sm transition-all shadow-sm focus:outline-none cursor-pointer"
                      >
                        실시간 정밀 실측 예약하기
                      </button>
                    )}
                  </div>
                </div>
              </div>

            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Legal Footer */}
      <Footer onScrollToTop={() => window.scrollTo({ top: 0, behavior: "smooth" })} />

      {/* FREE QUOTE MODAL OVERLAY */}
      {isQuoteModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center bg-black/70 p-4 md:p-6 animate-fade-in backdrop-blur-sm">
          <div className="bg-white rounded-lg shadow-2xl max-w-md w-full border border-gray-100 overflow-hidden relative">
            
            {/* Modal Head Banner */}
            <div className="bg-primary text-white p-6 relative">
              <span className="text-[10px] text-accent font-bold uppercase tracking-widest block font-sans">Instant Service Matcher</span>
              <h4 className="text-xl font-black mt-1">대민창호 원스톱 무료 견적 신청</h4>
              <p className="text-xs text-gray-400 mt-1">
                기다림 없는 빠른 맞춤형 외벽 및 실내 창호 분석
              </p>
              
              <button
                onClick={() => setIsQuoteModalOpen(false)}
                className="absolute top-4 right-4 text-white/75 hover:text-white p-1 rounded-full bg-white/10 hover:bg-white/15 cursor-pointer focus:outline-none"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            {modalSubmitSuccessSet ? (
              <div className="p-8 text-center space-y-4 animate-fade-in-quick">
                <div className="w-14 h-14 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto border border-emerald-100 shadow-sm">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <div>
                  <h5 className="font-bold text-gray-900 text-sm">무상 실측 견적 접수 중...</h5>
                  <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                    대민창호 자체 공장 생산 스펙트럼과 가장 인접한 시공팀 매니저를 매칭 중입니다. 잠시만 기다려 주십시오.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleModalSubmit} className="p-6 space-y-5">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-700 block">고객님 성함 (실명)</label>
                  <input
                    type="text"
                    required
                    value={modalName}
                    onChange={(e) => setModalName(e.target.value)}
                    placeholder="예: 홍길동"
                    className="w-full border border-gray-200 focus:border-accent focus:ring-1 focus:ring-accent/15 px-3 py-2 bg-gray-50/50 rounded-sm text-sm focus:outline-none text-gray-800"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-700 block">전화번호 (안심 연락처)</label>
                  <input
                    type="tel"
                    required
                    value={modalPhone}
                    onChange={(e) => setModalPhone(e.target.value)}
                    placeholder="010-0000-0000"
                    className="w-full border border-gray-200 focus:border-accent focus:ring-1 focus:ring-accent/15 px-3 py-2 bg-gray-50/50 rounded-sm text-sm focus:outline-none text-gray-800"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-700 block">시공 종류 선택</label>
                  <select
                    value={modalType}
                    onChange={(e) => setModalType(e.target.value)}
                    className="w-full border border-gray-200 focus:border-accent focus:ring-1 focus:ring-accent/15 px-3 py-2 bg-gray-50/50 rounded-sm text-sm focus:outline-none text-gray-800"
                  >
                    <option value="KCC 창호 교체">KCC 최고급 발코니 이중창 교체</option>
                    <option value="유리/강화도어 시공">유리 / 인테리어 전면 강화도어</option>
                    <option value="렉산/스텐 시공">렉산 캐노피 차양 / 아파트 소방 난간</option>
                    <option value="기타 상담 문의">그 외 복합 건축 창호 문의</option>
                  </select>
                </div>

                <div className="flex items-start gap-2 bg-gray-50 p-3 rounded-sm border border-gray-100">
                  <input
                    id="modal-agree"
                    type="checkbox"
                    checked={modalAgree}
                    onChange={(e) => setModalAgree(e.target.checked)}
                    className="w-4 h-4 accent-accent mt-0.5"
                  />
                  <label htmlFor="modal-agree" className="text-[11px] text-gray-500 leading-normal cursor-pointer select-none font-medium">
                    <span className="font-bold text-gray-700">개인정보 보호 수집 조항 동의</span>
                    {" "}무료 상담 기획 및 전화 상담에 국한되어 일시 활용 후 즉각 소멸함에 동의합니다.
                  </label>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-3">
                  <button
                    type="button"
                    onClick={() => setIsQuoteModalOpen(false)}
                    className="py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold text-xs rounded-sm cursor-pointer transition-colors"
                  >
                    취소
                  </button>
                  <button
                    type="submit"
                    className="py-2.5 bg-accent hover:bg-primary text-white font-bold text-xs rounded-sm cursor-pointer transition-all flex items-center justify-center gap-1.5"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>견적 예약 제출</span>
                  </button>
                </div>
              </form>
            )}

          </div>
        </div>
      )}

    </div>
  );
}
