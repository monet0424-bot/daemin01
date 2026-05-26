import { ShieldCheck, Share2, Award, ArrowUp, Flame, Phone, Mail, MapPin, Clock } from "lucide-react";

interface FooterProps {
  onScrollToTop: () => void;
}

export default function Footer({ onScrollToTop }: FooterProps) {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "대민창호 - KCC 창호 제작·시공 전문",
        url: window.location.href,
      }).catch(console.error);
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("지인분께 공유할 수 있도록 대민창호 링크가 클립보드에 복사되었습니다!");
    }
  };

  return (
    <footer className="bg-primary text-gray-300 border-t border-white/5 font-sans">
      
      {/* Visual Accent Line at the Top */}
      <div className="h-1.5 w-full bg-gradient-to-r from-accent via-primary-light to-accent" />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24">
        
        {/* Main Grid Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-white/10">
          
          {/* Column 1 (Col Span 6): Brand Identification & Certifications */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3">
              <div className="bg-accent/15 text-accent p-2.5 rounded-sm border border-accent/30 shadow-inner">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xl font-black tracking-tight block text-white">대민창호</span>
                <span className="text-[10px] font-bold tracking-widest block uppercase text-accent">Daemin Changho</span>
              </div>
            </div>
            
            <p className="text-gray-400 text-sm leading-relaxed max-w-md font-medium">
              대민창호는 최고의 기술력과 국가 공인 시공 규격 조건에 부합하는 KCC 정품 원재료와 고단열 복층 유리를 활용하여, 냉난방 효율의 한계를 넘는 기밀 창호 시공을 전문적으로 제공합니다.
            </p>
            
            {/* Certifications Badge row */}
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[11px] bg-white/5 border border-white/10 rounded-sm text-gray-300 font-bold transition-colors hover:bg-white/10">
                <Award className="w-3.5 h-3.5 text-accent" />
                <span>KCC 공식 창호 파트너</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[11px] bg-white/5 border border-white/10 rounded-sm text-gray-300 font-bold transition-colors hover:bg-white/10">
                <Flame className="w-3.5 h-3.5 text-red-400" />
                <span>친환경 안심 자재 승인 완료</span>
              </span>
            </div>
          </div>

          {/* Column 2 (Col Span 3): Customer Care & Operation Hours */}
          <div className="lg:col-span-3 space-y-5">
            <h4 className="text-sm font-black text-white uppercase tracking-wider relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-[1.5px] after:bg-accent">
              고객 서비스 보증 센터
            </h4>
            
            <div className="space-y-4 pt-1">
              <div className="flex items-start gap-3">
                <Clock className="w-4.5 h-4.5 text-accent mt-0.5 shrink-0" />
                <div className="text-xs space-y-1">
                  <p className="font-extrabold text-white">실측 및 견적 접수 시간</p>
                  <p className="text-gray-400">평일 09:00 - 18:00</p>
                  <p className="text-gray-400">토요일 09:00 - 13:00</p>
                  <p className="text-gray-500 text-[10px] italic">일요일 및 법정 공휴일 휴관</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4.5 h-4.5 text-accent shrink-0" />
                <span className="text-sm font-black text-white">010-0000-0000</span>
              </div>
            </div>
          </div>

          {/* Column 3 (Col Span 3): Nav Links & Dynamic Contact */}
          <div className="lg:col-span-3 space-y-5">
            <h4 className="text-sm font-black text-white uppercase tracking-wider relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-[1.5px] after:bg-accent">
              고객 지원 안내
            </h4>
            
            <ul className="space-y-3 text-xs pt-1">
              <li>
                <button
                  onClick={() => alert("개인정보 처리방침 전문 서류를 로드합니다. (법적 고지 데모)")}
                  className="hover:text-accent transition-all duration-200 block text-left font-bold text-gray-400 hover:translate-x-1"
                >
                  개인정보처리방침
                </button>
              </li>
              <li>
                <button
                  onClick={() => alert("서비스 이용 약관 서류를 로드합니다. (법적 고지 데모)")}
                  className="hover:text-accent transition-all duration-200 block text-left font-bold text-gray-400 hover:translate-x-1"
                >
                  이용약관 및 법적안내
                </button>
              </li>
              <li>
                <button
                  onClick={() => alert("본사 직영 공장 방문을 원하실 경우 사전 예약 전화를 부탁드립니다.")}
                  className="hover:text-accent transition-all duration-200 block text-left font-bold text-gray-400 hover:translate-x-1"
                >
                  공장 방문 예약 가이드
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Corporate Legal & Registration Grid details */}
        <div className="py-8 border-b border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-xs text-gray-400">
            
            <div className="space-y-1">
              <span className="font-extrabold text-gray-500 block">상호명 및 대표자</span>
              <p className="font-medium text-gray-300">대민창호 | 대표이사 김대민</p>
            </div>
            
            <div className="space-y-1">
              <span className="font-extrabold text-gray-500 block">사업자 정보</span>
              <p className="font-medium text-gray-300">사업자등록번호: 000-00-00000</p>
            </div>

            <div className="space-y-1">
              <span className="font-extrabold text-gray-500 block">직영 공장 소재지</span>
              <p className="font-medium text-gray-300 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-accent shrink-0" />
                <span>경기 하남시 초이로 직영 공단</span>
              </p>
            </div>

            <div className="space-y-1">
              <span className="font-extrabold text-gray-500 block">공식 웹 마스터 문의</span>
              <p className="font-medium text-gray-300 flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-accent shrink-0" />
                <span>monet0424@gmail.com</span>
              </p>
            </div>

          </div>
        </div>

        {/* Lower copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-6 text-xs font-semibold text-gray-500 text-center sm:text-left">
          <p className="leading-relaxed">
            © 2026 대민창호 (Daemin Changho). All Rights Reserved. KCC Window Installation Specialist.
            <br />
            <span className="text-[10px] text-gray-600 block sm:inline sm:ml-1 font-medium">대민창호 공식 웹사이트는 실제 정밀 가공 사양 및 보증 약관을 철저히 준수합니다.</span>
          </p>
          
          <div className="flex gap-2.5">
            <button
              onClick={handleShare}
              className="p-3 bg-white/5 hover:bg-white/10 hover:border-white/20 text-gray-400 hover:text-white rounded-sm transition-all cursor-pointer border border-white/5 flex items-center gap-1.5 focus:outline-none"
              title="지인에게 카톡/문자 공유하기"
            >
              <Share2 className="w-4 h-4" />
              <span className="text-[11px] font-bold">공유하기</span>
            </button>
            <button
              onClick={onScrollToTop}
              className="p-3 bg-white/5 hover:bg-white/10 hover:border-white/20 text-gray-400 hover:text-white rounded-sm transition-all cursor-pointer border border-white/5 flex items-center justify-center focus:outline-none"
              title="맨 위로 가기"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}

