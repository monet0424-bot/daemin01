import { Phone, MessageSquare, Calculator, Shield, Award, CheckCircle } from "lucide-react";

interface HeroProps {
  onChangePage: (id: string) => void;
}

export default function Hero({ onChangePage }: HeroProps) {
  const handlePhoneCall = () => {
    window.location.href = "tel:010-0000-0000";
  };

  const handleKakaoChat = () => {
    alert("카카오톡 채널 '대민창호'로 연결합니다. (가상 채널 데모)");
  };

  return (
    <section id="hero" className="relative lg:h-[820px] min-h-[640px] flex items-center overflow-hidden pt-28 pb-16">
      {/* Background Image with optimized hotlink */}
      <div className="absolute inset-0 z-0">
        <img
          alt="Modern Skyscraper Glass Building"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1azlb3GvB0gbCxWKQH-6TyDabIA2Ywj3fiJxNfV9nOwJcX7VwoWajsVb7gHkqzMR7gV3yW7GOwhOQQOJfBWDzx9A8BY07qmSjVGuXphR-joEGz8h7T5XPT0lOOL8l-kEAc3P3Jbfx_ZlpN0i9veQb3_r3X3UniaSgjhXNFN3S9dxuWJTylXRc_nikmBuyEDmrCgd_OyvY95AoNcIQypQNILpQOoRa41EMAjuFsmdeUCwPhEsDaXsB7U7ekImB2MmYiQod2usTSIo"
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 image-overlay bg-black/50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 w-full text-white">
        <div className="max-w-3xl animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/20 backdrop-blur-md border border-accent/30 text-accent font-bold text-xs md:text-sm tracking-wide mb-6 uppercase">
            <Shield className="w-4 h-4 fill-accent/10" />
            <span>KCC 공식 창호 대리점 / 100% 정품 보증</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight select-none">
            믿을 수 있는 KCC 창호
            <br />
            <span className="text-accent">제작·시공 전문</span> 업체
          </h1>

          {/* Subtitle */}
          <p className="text-base md:text-lg lg:text-xl font-medium mb-10 text-gray-200 opacity-95 leading-relaxed max-w-2xl">
            아파트, 상가, 사무실, 건물 창호 교체부터 유리·렉산·강화도어·스텐 시공까지.
            <br className="hidden md:inline" />
            대민창호가 꼼꼼한 시공과 합리적인 직접 제작 단가로 도와드립니다.
          </p>

          {/* Action Call Buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 mb-12">
            <button
              onClick={handlePhoneCall}
              className="bg-accent hover:bg-accent/95 text-white px-8 py-4 font-bold flex items-center justify-center gap-2.5 transition-all duration-300 shadow-lg shadow-accent/20 hover:scale-[1.02] cursor-pointer rounded-sm text-base"
            >
              <Phone className="w-5 h-5 fill-white" />
              <span>전화 상담하기</span>
            </button>

            <button
              onClick={handleKakaoChat}
              className="bg-kakao hover:bg-kakao/95 text-kakao-text px-8 py-4 font-bold flex items-center justify-center gap-2.5 transition-all duration-300 shadow-lg shadow-kakao/10 hover:scale-[1.02] cursor-pointer rounded-sm text-base"
            >
              <MessageSquare className="w-5 h-5 fill-kakao-text" />
              <span>카카오톡 상담하기</span>
            </button>

            <button
              onClick={() => onChangePage("calculator")}
              className="border border-white/60 bg-white/10 hover:bg-white hover:text-primary-light text-white px-8 py-4 font-bold flex items-center justify-center gap-2.5 transition-all duration-300 hover:scale-[1.02] cursor-pointer rounded-sm text-base"
            >
              <Calculator className="w-5 h-5" />
              <span>견적 무료 계산기</span>
            </button>
          </div>

          {/* Standard Service Attributes */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-6 border-t border-white/15">
            <div className="flex items-center gap-2.5">
              <CheckCircle className="w-5 h-5 text-accent shrink-0" />
              <div className="text-sm">
                <p className="font-bold text-white">자체 생산 직영 공장</p>
                <p className="text-xs text-gray-400">품질 향상 및 시공 단가 절감</p>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle className="w-5 h-5 text-accent shrink-0" />
              <div className="text-sm">
                <p className="font-bold text-white">KCC 정품 부자재</p>
                <p className="text-xs text-gray-400">고성능 유리 및 정품 하드웨어</p>
              </div>
            </div>
            <div className="col-span-2 md:col-span-1 flex items-center gap-2.5">
              <CheckCircle className="w-5 h-5 text-accent shrink-0" />
              <div className="text-sm">
                <p className="font-bold text-white">품질 및 무상 A/S 보증</p>
                <p className="text-xs text-gray-400">철저한 철거 및 안심 보증서</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
