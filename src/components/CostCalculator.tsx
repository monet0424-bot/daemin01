import { useState, useMemo } from "react";
import { Calculator, Sparkles, AlertCircle, Thermometer, ShieldCheck, HelpCircle, FileText, Check } from "lucide-react";

interface CostCalculatorProps {
  onScrollToConsultation: () => void;
  onSetCategoryInConsultation: (tag: string) => void;
}

export default function CostCalculator({ onScrollToConsultation, onSetCategoryInConsultation }: CostCalculatorProps) {
  const [size, setSize] = useState<number>(32); // Pyung standard
  const [windowModel, setWindowModel] = useState<"prime" | "wide" | "basic">("prime");
  const [glassType, setGlassType] = useState<"double22" | "double24" | "lowe26">("lowe26");
  const [isCalculated, setIsCalculated] = useState(true);

  // Approximate pricing values based on industry statistics for raw direct-to-consumer KCC fabrication
  const calculatedEstimates = useMemo(() => {
    // base per pyung rate depending on complexity
    let perPyungFrameCost = 0;
    if (windowModel === "prime") perPyungFrameCost = 145000;
    else if (windowModel === "wide") perPyungFrameCost = 115000;
    else perPyungFrameCost = 85000;

    // glass multiplier
    let glassMultiplier = 1.0;
    if (glassType === "double22") glassMultiplier = 0.95;
    else if (glassType === "double24") glassMultiplier = 1.0;
    else glassMultiplier = 1.15; // Low-E Argon gas

    // calculate core totals
    const totalWindowsCount = Math.floor(size / 6) + 3; // rough estimation
    const rawMaterialCost = size * perPyungFrameCost * glassMultiplier;
    const professionalLaborCost = 450000 + (totalWindowsCount * 65000); // demolition + installation speed
    const directDiscountPct = 15; // 15% wholesale outlet reduction
    
    const subtotal = rawMaterialCost + professionalLaborCost;
    const discountValue = Math.floor(subtotal * (directDiscountPct / 100));
    const finalEstimatedTotal = Math.floor((subtotal - discountValue) / 10000) * 10000; // round to nearest 10,000

    // heat insulation ratings
    let insulationGrade = "1등급 (최고)";
    let thermalRetention = "96%";
    if (windowModel === "wide") {
      insulationGrade = "2등급 (우수)";
      thermalRetention = "88%";
    } else if (windowModel === "basic") {
      insulationGrade = "3등급 (보통)";
      thermalRetention = "74%";
    }

    return {
      windowCount: totalWindowsCount,
      materialCost: Math.floor(rawMaterialCost),
      laborCost: Math.floor(professionalLaborCost),
      subtotal,
      discountValue,
      finalTotal: finalEstimatedTotal,
      insulationGrade,
      thermalRetention,
    };
  }, [size, windowModel, glassType]);

  const handleApplyToConsultation = () => {
    // Pass summary to consultation form
    const customSummary = `[간편 계산 내역] ${size}평형 / KCC ${windowModel === "prime" ? "뉴프라임 140" : windowModel === "wide" ? "와이드빌 230" : "일반 창호"} / ${glassType === "double22" ? "22mm 고성능 유리" : glassType === "double24" ? "24mm 프리미엄 유리" : "26mm 복층 로이 유리"} / 예상 총액 약 ${calculatedEstimates.finalTotal.toLocaleString()}원`;
    
    onSetCategoryInConsultation(customSummary);
    onScrollToConsultation();
  };

  return (
    <section id="calculator" className="py-24 bg-gray-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Title */}
        <div className="max-w-2xl mx-auto text-center mb-16 space-y-4">
          <span className="text-xs md:text-sm font-bold tracking-wider text-accent uppercase bg-accent/5 px-3 py-1.5 rounded-sm inline-block">
            Instant Fabrication Price Estimator
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-primary">직영 생산 견적 계산기</h2>
          <p className="text-gray-600 text-sm md:text-base">
            원하는 아파트 평수와 KCC 프레임 및 고효율 유리 사양을 고르시면, 공장 직판 마진이 적용된 투명한 대민창호만의 즉시 견적 가이드를 드립니다.
          </p>
        </div>

        {/* Main Grid Calculator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Controls Column (Col Span 5) */}
          <div className="lg:col-span-5 bg-white p-6 md:p-8 border border-gray-200/60 rounded-sm flex flex-col justify-between space-y-6">
            
            <div className="space-y-6">
              {/* Size Slider Input */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-black text-gray-800">1. 대상 주거면적 (평형)</span>
                  <span className="text-[15px] font-black text-accent">{size}평형</span>
                </div>
                <input
                  type="range"
                  min="12"
                  max="65"
                  value={size}
                  onChange={(e) => setSize(Number(e.target.value))}
                  className="w-full accent-accent cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-gray-400 font-semibold">
                  <span>소형(12평)</span>
                  <span>아파트 표준(24평)</span>
                  <span>국민 평형(32평)</span>
                  <span>대형(45평)</span>
                  <span>초대형(65평)</span>
                </div>
              </div>

              {/* Window Model Configuration */}
              <div className="space-y-3">
                <span className="text-xs font-black text-gray-800 block">2. KCC 정품 섀시 등급 설계</span>
                <div className="grid grid-cols-1 gap-2">
                  <button
                    onClick={() => setWindowModel("prime")}
                    className={`p-3 text-left border rounded-sm transition-all focus:outline-none flex justify-between items-center cursor-pointer ${
                      windowModel === "prime"
                        ? "border-accent bg-accent/5"
                        : "border-gray-200 hover:bg-gray-50 text-gray-700"
                    }`}
                  >
                    <div>
                      <span className="text-xs font-bold block text-primary">KCC 뉴프라임 140 (외창 특화 프리미엄)</span>
                      <span className="text-[10px] text-gray-400 block mt-0.5">최강의 방풍, 고층 아파트 베란다 전용</span>
                    </div>
                    {windowModel === "prime" && <Check className="w-4 h-4 text-accent" />}
                  </button>

                  <button
                    onClick={() => setWindowModel("wide")}
                    className={`p-3 text-left border rounded-sm transition-all focus:outline-none flex justify-between items-center cursor-pointer ${
                      windowModel === "wide"
                        ? "border-accent bg-accent/5"
                        : "border-gray-200 hover:bg-gray-50 text-gray-700"
                    }`}
                  >
                    <div>
                      <span className="text-xs font-bold block text-primary">KCC 와이드빌 230 (고급 슬라이딩 이중창)</span>
                      <span className="text-[10px] text-gray-400 block mt-0.5 font-medium">안방 및 거실 분할창, 아늑한 소음 감소</span>
                    </div>
                    {windowModel === "wide" && <Check className="w-4 h-4 text-accent" />}
                  </button>

                  <button
                    onClick={() => setWindowModel("basic")}
                    className={`p-3 text-left border rounded-sm transition-all focus:outline-none flex justify-between items-center cursor-pointer ${
                      windowModel === "basic"
                        ? "border-accent bg-accent/5"
                        : "border-gray-200 hover:bg-gray-50 text-gray-700"
                    }`}
                  >
                    <div>
                      <span className="text-xs font-bold block text-primary">KCC 일반 가성비 단창</span>
                      <span className="text-[10px] text-gray-400 block mt-0.5">상업 상가 보조 또는 실내 다용도실 격자형</span>
                    </div>
                    {windowModel === "basic" && <Check className="w-4 h-4 text-accent" />}
                  </button>
                </div>
              </div>

              {/* Glass Type Configuration */}
              <div className="space-y-3">
                <span className="text-xs font-black text-gray-800 block">3. 유리 결합 옵션 (Low-E 단열)</span>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => setGlassType("double22")}
                    className={`p-2.5 text-center border font-bold text-xs rounded-sm transition-all cursor-pointer ${
                      glassType === "double22"
                        ? "border-accent bg-accent/5 text-accent"
                        : "border-gray-200 hover:bg-gray-50 text-gray-600"
                    }`}
                  >
                    22mm 복층 유리
                  </button>
                  <button
                    onClick={() => setGlassType("double24")}
                    className={`p-2.5 text-center border font-bold text-xs rounded-sm transition-all cursor-pointer ${
                      glassType === "double24"
                        ? "border-accent bg-accent/5 text-accent"
                        : "border-gray-200 hover:bg-gray-50 text-gray-600"
                    }`}
                  >
                    24mm 프리미엄
                  </button>
                  <button
                    onClick={() => setGlassType("lowe26")}
                    className={`p-2.5 text-center border font-bold text-xs rounded-sm transition-all cursor-pointer ${
                      glassType === "lowe26"
                        ? "border-accent bg-accent/5 text-accent"
                        : "border-gray-200 hover:bg-gray-50 text-gray-600"
                    }`}
                  >
                    26mm 로이 가스
                  </button>
                </div>
              </div>
            </div>

            {/* Note */}
            <div className="flex gap-2 p-3 bg-gray-50 border border-gray-100/80 rounded-sm text-[11px] text-gray-400">
              <AlertCircle className="w-4 h-4 text-gray-400 shrink-0" />
              <span>본 가격표는 대민창호 자체 공장 직접 가공 단계 기준 일반 마진을 적용한 기초 가이드이며, 현장 고가 크레인 인양, 철거 폐기 난이도에 조율될 수 있습니다.</span>
            </div>

          </div>

          {/* Estimates Display Column (Col Span 7) */}
          <div className="lg:col-span-7 bg-primary text-white p-6 md:p-8 rounded-sm flex flex-col justify-between relative overflow-hidden">
            {/* Soft decorative visual light */}
            <div className="absolute -right-16 -top-16 w-32 h-32 bg-accent/15 rounded-full blur-2xl pointer-events-none" />
            
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <Calculator className="w-5 h-5 text-accent" />
                <span className="text-xs text-accent font-bold uppercase tracking-widest">Calculated Specifications</span>
              </div>

              {/* Huge Price */}
              <div className="space-y-1">
                <span className="text-xs text-gray-400 font-bold block">공장 직영 공급 대민 안심 예상 제안 가격</span>
                <div className="flex items-baseline gap-1 animate-fade-in-quick">
                  <span className="text-3xl md:text-5xl font-black text-white font-inter">
                    약 {calculatedEstimates.finalTotal.toLocaleString()}
                  </span>
                  <span className="text-lg md:text-2xl font-bold">원</span>
                </div>
              </div>

              {/* Comparison item list */}
              <div className="space-y-3.5 border-t border-white/10 pt-6">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">주거 면적 면적 대비</span>
                  <span className="font-bold">{size}평형 (창호 구성 개수 약 {calculatedEstimates.windowCount}틀)</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400 font-medium">KCC 정품 프로파일 자재가</span>
                  <span className="font-bold">{calculatedEstimates.materialCost.toLocaleString()}원</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400 font-medium">철거 및 맞춤 기밀 시공 인건비</span>
                  <span className="font-bold">{calculatedEstimates.laborCost.toLocaleString()}원</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400 font-medium">유통 과정 및 대리점 수수료 마진</span>
                  <span className="underline decoration-red-500 font-bold text-red-400">- {calculatedEstimates.discountValue.toLocaleString()}원 (원가 직결 생략 적용)</span>
                </div>
              </div>

              {/* Energy Retentions grid */}
              <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-6">
                <div className="flex gap-2.5 items-center">
                  <Thermometer className="w-5 h-5 text-accent" />
                  <div className="text-xs">
                    <span className="text-gray-400 block">정부 에너지 단열등급</span>
                    <span className="font-extrabold text-white block">{calculatedEstimates.insulationGrade}</span>
                  </div>
                </div>
                <div className="flex gap-2.5 items-center">
                  <ShieldCheck className="w-5 h-5 text-accent" />
                  <div className="text-xs">
                    <span className="text-gray-400 block">한기 및 결로 예방 차단율</span>
                    <span className="font-extrabold text-white block">{calculatedEstimates.thermalRetention}</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Application CTAs */}
            <div className="space-y-3 mt-8 lg:mt-0">
              <button
                onClick={handleApplyToConsultation}
                className="w-full py-4 bg-accent hover:bg-accent/90 text-white font-bold text-center rounded-sm text-sm cursor-pointer transition-all duration-300 shadow-md flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4 fill-white/10" />
                <span>이 계산 내역으로 맞춤 상담 대기 신청하기</span>
              </button>
              <p className="text-[10px] text-gray-400 text-center font-bold">
                * 상세 실측 시 도면 오차에 따라 금액 증감이 있을 수 있습니다 *
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
