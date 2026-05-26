import { CheckCircle2, Award, Settings, ShieldCheck } from "lucide-react";

export default function About() {
  const values = [
    {
      title: "KCC 창호 전문 제작 및 맞춤 시공",
      desc: "본사 직영 공장에서 개별 사이즈를 완벽히 실측하고, 정교하게 프레임을 가공하여 빈틈없는 신축/구축 맞춤형 단열 시공을 책임집니다.",
    },
    {
      title: "합리적인 가격과 투명한 견적",
      desc: "중간 유통 단계를 대폭 생략하고, 제작 공장에서 원가 단위로 직접 출고되어 불필요한 마진이 포함되지 않은 합적이고 투명한 견적을 드립니다.",
    },
    {
      title: "철저한 사후관리 및 평생 안심 보증",
      desc: "창호 설치 후 혹시 모를 누수나 핸들/개폐 작동 문제에 대해 신속하게 전담 기사가 방문하여 안정적인 A/S 보증 서비스를 지원합니다.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <span className="text-xs md:text-sm font-bold tracking-wider text-accent uppercase bg-accent/5 px-3 py-1.5 rounded-sm inline-block">
                About Daemin Changho
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-primary leading-tight">
                오랜 경험과 기술력으로
                <br />
                공간의 가치를 더합니다
              </h2>
            </div>

            <div className="space-y-4 text-gray-600 text-[15px] md:text-base leading-relaxed">
              <p>
                대민창호는 KCC 창호 제작 및 시공을 전문으로 하는 대표 기업으로, 수년간 전국 각지의 수많은 아파트, 상업빌딩, 주택 등의 시공 사례를 통해 쌓은 신뢰와 풍부한 경험을 자랑합니다.
              </p>
              <p>
                창호 설계 및 실측부터 완벽한 철거와 보강 작업, 고성능 로이 유리(Low-E glass) 적용 등 전반적인 단열 에너지 효율 극대화에 앞장서며, 주거 공간의 가치와 편안함을 한 차원 높여 드립니다.
              </p>
            </div>

            {/* Core Values Bullet List with styling */}
            <div className="space-y-4 pt-4 border-t border-gray-100">
              {values.map((v, idx) => (
                <div key={idx} className="flex gap-4 items-start select-none">
                  <div className="p-1 rounded-full bg-accent/10 text-accent shrink-0 mt-0.5">
                    <CheckCircle2 className="w-5 h-5 fill-accent/5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 text-[15px]">{v.title}</h4>
                    <p className="text-sm text-gray-500 mt-1 leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual Image Column */}
          <div className="lg:col-span-6 relative">
            {/* Framed image */}
            <div className="relative aspect-square md:aspect-[4/3] lg:aspect-square overflow-hidden rounded-md border border-gray-200/50 shadow-sm bg-gray-50 group">
              <img
                alt="Expert worker installing KCC Window"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCU-jHv92iGs1ua94ElfMG6vSzJXe0kN4_edO9RNNQ8TQ4cW41XAdpwyGEvUQXW_gQBNBlLrtb6XNNSNTPyV6pL0oNbdWL--aNgs_G3DhLRbG-7vUU24IEa2vV0SVool5oOKJgtcbHQNRGmo4I3rPskIltgEonZESBv9WlZElUrmTsNMA3BqZTVAWrHfnGrJIM6vUY8z4rXpWCSpC9XlKFsB-OGumXhVPPAr9UwsZKeAYsFj-Kpqkzn22jFflClyP8fVd6YzuEgv5s"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent pointer-events-none" />
            </div>

            {/* Overlapping Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-primary text-white p-6 md:p-8 rounded-sm shadow-xl border-l-4 border-accent animate-pulse-subtle hidden md:block">
              <div className="flex items-center gap-3">
                <div className="text-4xl md:text-5xl font-black font-inter tracking-tight leading-none text-accent">
                  15+
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Years of</p>
                  <p className="text-sm font-bold text-gray-100">Excellence</p>
                </div>
              </div>
              <p className="text-xs text-gray-400 mt-3 border-t border-white/10 pt-2 font-medium">
                KCC 공식 직영 기술진 15년 연속 시공력 입증
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
