import React, { useState, useEffect } from "react";
import { ConsultationFormData, ConsultationRecord } from "../types";
import {
  Phone,
  MessageSquare,
  MapPin,
  CheckCircle,
  Calendar,
  User,
  Clock,
  ShieldCheck,
  AlertTriangle,
  XSquare,
  Check
} from "lucide-react";

interface ConsultationProps {
  initialDetailsValue: string;
  onClearDetailsValue: () => void;
}

export default function Consultation({ initialDetailsValue, onClearDetailsValue }: ConsultationProps) {
  const [formData, setFormData] = useState<ConsultationFormData>({
    name: "",
    phone: "",
    location: "",
    serviceType: "선택해 주세요",
    details: "",
    agreePrivacy: false,
  });

  const [activeRegion, setActiveRegion] = useState<"seoul" | "gyeonggi-south" | "gyeonggi-north" | "incheon">("seoul");
  const [submittedTicket, setSubmittedTicket] = useState<ConsultationRecord | null>(null);
  const [errorMsg, setErrorMsg] = useState<string>("");

  // Sync with calculated estimates if passed
  useEffect(() => {
    if (initialDetailsValue) {
      setFormData((prev) => ({
        ...prev,
        details: initialDetailsValue,
        serviceType: "KCC 창호 교체",
      }));
    }
  }, [initialDetailsValue]);

  // Form submit handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (!formData.name.trim()) {
      setErrorMsg("성함을 정확하게 입력해 주세요.");
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 9) {
      setErrorMsg("연락처를 정확하게 입력해 주세요 (예: 010-0000-0000).");
      return;
    }
    if (!formData.location.trim()) {
      setErrorMsg("시공 희망 지역을 정확하게 입력해 주세요.");
      return;
    }
    if (formData.serviceType === "선택해 주세요") {
      setErrorMsg("원하시는 시공 종류를 선택해 주세요.");
      return;
    }
    if (!formData.agreePrivacy) {
      setErrorMsg("개인정보 수집 및 이용 동의가 필요합니다.");
      return;
    }

    const newTicket: ConsultationRecord = {
      ...formData,
      id: `DM-${new Date().getFullYear()}${String(new Date().getMonth() + 1).padStart(2, "0")}-${Math.floor(
        1000 + Math.random() * 9000
      )}`,
      createdAt: new Date().toISOString(),
      status: "pending",
    };

    // Save to local storage
    const existing = JSON.parse(localStorage.getItem("daemin_consultations") || "[]");
    localStorage.setItem("daemin_consultations", JSON.stringify([...existing, newTicket]));

    setSubmittedTicket(newTicket);
    onClearDetailsValue();
    
    // Clear form
    setFormData({
      name: "",
      phone: "",
      location: "",
      serviceType: "선택해 주세요",
      details: "",
      agreePrivacy: false,
    });
  };

  const handlePhoneCall = () => {
    window.location.href = "tel:010-0000-0000";
  };

  const coverageDetails = {
    seoul: {
      name: "서울 직영 본부",
      area: "강남, 서초, 송파, 강동, 마포 등 전 지역 시공 가능",
      status: "실측 예약 가능 (2일 내 방문)",
      manager: "김대민 수석 실장",
      phone: "010-0000-0000",
    },
    "gyeonggi-south": {
      name: "경기 남부 지사",
      area: "수원, 용인, 성남, 분당, 화성, 평택, 부천 등",
      status: "실측 예약 가능 (3일 내 방문)",
      manager: "박정후 시공 팀장",
      phone: "010-0000-0000",
    },
    "gyeonggi-north": {
      name: "경기 북부 지사",
      area: "일산, 고양, 의정부, 파주, 남양주, 구리 등",
      status: "배정 혼잡 (4일 내 방문 조율)",
      manager: "최진철 책임 엔지니어",
      phone: "010-0000-0000",
    },
    incheon: {
      name: "인천 지사",
      area: "송도, 청라, 부평, 남동구 등 인천 전역 가능",
      status: "실측 예약 가능 (2일 내 방문)",
      manager: "송하진 부본부장",
      phone: "010-0000-0000",
    },
  };

  return (
    <section id="consultation" className="py-24 bg-gray-100 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        <div className="grid md:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct info, Interactive Region Availability Indicator */}
          <div className="md:col-span-6 space-y-10">
            <div className="space-y-4">
              <span className="text-xs md:text-sm font-bold tracking-wider text-accent uppercase bg-accent/5 px-3 py-1.5 rounded-sm inline-block">
                Direct Contact & Support Center
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-primary">상담 문의</h2>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                시공을 희망하는 위치나 원하시는 사양을 편하게 남겨주세요.
                <br />
                대민창호의 대리점 및 창호 전문가들이 신속하게 무상 상담 실측 예약을 잡아 드립니다.
              </p>
            </div>

            {/* Direct Dialing Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button
                onClick={handlePhoneCall}
                className="bg-white p-5 border border-gray-200 hover:border-accent hover:shadow-md transition-all text-left flex items-center gap-4 group cursor-pointer focus:outline-none"
              >
                <div className="w-12 h-12 bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white rounded-full flex items-center justify-center transition-colors">
                  <Phone className="w-5 h-5 fill-accent/10 group-hover:fill-white" />
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 font-bold">대민창호 대표 번호</p>
                  <p className="text-base font-black text-primary">010-0000-0000</p>
                </div>
              </button>

              <button
                onClick={() => alert("카카오톡 상담으로 바로 연결됩니다.")}
                className="bg-[#fee500]/15 p-5 border border-[#fee500]/40 hover:border-[#fee500] hover:shadow-md transition-all text-left flex items-center gap-4 group cursor-pointer focus:outline-none"
              >
                <div className="w-12 h-12 bg-[#fee500]/60 text-kakao-text rounded-full flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 fill-kakao-text" />
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 font-bold">카카오톡 채널 이름</p>
                  <p className="text-base font-black text-kakao-text">대민창호</p>
                </div>
              </button>
            </div>

            {/* Interactive Region Coverage Map Dashboard Component */}
            <div className="bg-white p-6 border border-gray-200/60 rounded-sm space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-xs font-black text-gray-800 flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-accent" />
                  <span>수도권 직영 실시간 출동 상황</span>
                </span>
                <span className="text-[10px] bg-emerald-50 text-emerald-600 border border-emerald-100 font-black px-2 py-0.5 rounded-sm">
                  정상 운영 중
                </span>
              </div>

              {/* Geographic selection tabs */}
              <div className="grid grid-cols-4 gap-1.5">
                {(Object.keys(coverageDetails) as Array<keyof typeof coverageDetails>).map((region) => (
                  <button
                    key={region}
                    onClick={() => setActiveRegion(region)}
                    className={`py-2 text-[11px] font-extrabold text-center rounded-sm border transition-all cursor-pointer focus:outline-none ${
                      activeRegion === region
                        ? "bg-primary border-primary text-white"
                        : "bg-gray-50 border-gray-200 hover:bg-gray-100 text-gray-600"
                    }`}
                  >
                    {region === "seoul" && "서울 본부"}
                    {region === "gyeonggi-south" && "경기 남부"}
                    {region === "gyeonggi-north" && "경기 북부"}
                    {region === "incheon" && "인천 지사"}
                  </button>
                ))}
              </div>

              {/* Coverage Details card */}
              <div className="p-4 bg-gray-50 border border-gray-100 rounded-sm space-y-2 animate-fade-in-quick">
                <p className="text-xs font-black text-primary">{coverageDetails[activeRegion].name}</p>
                <p className="text-[11px] text-gray-500 font-medium">
                  <span className="font-bold text-gray-700">시공 범위: </span>
                  {coverageDetails[activeRegion].area}
                </p>
                <div className="flex justify-between text-[11px] border-t border-gray-200/50 pt-2 text-gray-400">
                  <span className="font-semibold text-accent flex items-center gap-1">
                    <Check className="w-3.5 h-3.5" />
                    {coverageDetails[activeRegion].status}
                  </span>
                  <span>배정 책임: {coverageDetails[activeRegion].manager}</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Submission Form */}
          <div className="md:col-span-6">
            <div className="bg-white p-6 md:p-8 rounded-sm border border-gray-200 shadow-sm">
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Visual Header */}
                <div className="border-b border-gray-100 pb-4">
                  <h3 className="text-lg font-extrabold text-primary flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-accent" />
                    <span>실시간 실측 상담 접수처</span>
                  </h3>
                  <p className="text-[11px] text-gray-400 mt-1">
                    대리점 방문 필요 없이, 아래 정보를 기입해 주시면 당일 직영 대표 기사가 직접 전화를 드립니다.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-extrabold text-gray-700 flex items-center gap-1">
                      <User className="w-3.5 h-3.5 text-gray-400" />
                      <span>의뢰인 성함</span>
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="성함을 입력하세요"
                      className="w-full border border-gray-200 focus:border-accent focus:ring-1 focus:ring-accent/15 px-3 py-2.5 bg-gray-50/50 rounded-sm text-sm focus:outline-none text-gray-800"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-extrabold text-gray-700 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-gray-400" />
                      <span>연락처</span>
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="010-0000-0000"
                      className="w-full border border-gray-200 focus:border-accent focus:ring-1 focus:ring-accent/15 px-3 py-2.5 bg-gray-50/50 rounded-sm text-sm focus:outline-none text-gray-800"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-extrabold text-gray-700 block">시공 희망 주소 (수도권 전 지역)</label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="예: 서울시 강남구 삼성동 래미안 아파트 101동"
                    className="w-full border border-gray-200 focus:border-accent focus:ring-1 focus:ring-accent/15 px-3 py-2.5 bg-gray-50/50 rounded-sm text-sm focus:outline-none text-gray-800"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-extrabold text-gray-700 block">시공 희망 종류</label>
                  <select
                    value={formData.serviceType}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                    className="w-full border border-gray-200 focus:border-accent focus:ring-1 focus:ring-accent/15 px-3 py-2.5 bg-gray-50/50 rounded-sm text-sm focus:outline-none text-gray-800"
                  >
                    <option value="선택해 주세요">선택해 주세요</option>
                    <option value="KCC 창호 교체">KCC 아파트 창호 교체</option>
                    <option value="유리/강화도어 시공">유리 / 강화유리 가공 시공</option>
                    <option value="렉산/스텐 시공">렉산 (PC) / 스틸 가드레일 난간 시공</option>
                    <option value="기타 문의">기타 상담 및 공사 설계 요청</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <div className="flex justify-between items-center">
                    <label className="text-xs font-extrabold text-gray-700 block">상세 문의 사양 및 요청 사항</label>
                    {initialDetailsValue && (
                      <button
                        type="button"
                        onClick={onClearDetailsValue}
                        className="text-[10px] text-accent font-extrabold hover:underline"
                      >
                        간편계산 연동 리셋
                      </button>
                    )}
                  </div>
                  <textarea
                    rows={4}
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    placeholder="원하시는 유리 옵션, 구조 변경 또는 아파트 단지 정보 등을 편하게 기입해 주세요."
                    className="w-full border border-gray-200 focus:border-accent focus:ring-1 focus:ring-accent/15 px-3 py-2.5 bg-gray-50/50 rounded-sm text-sm focus:outline-none text-gray-800 leading-relaxed"
                  />
                </div>

                {/* Accuracy Alert */}
                {errorMsg && (
                  <div className="flex gap-2 p-3.5 bg-red-50 text-red-700 border border-red-100 rounded-sm text-xs items-center font-bold">
                    <AlertTriangle className="w-4 h-4 text-red-600" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                {/* Privacy Agreement Checkbox */}
                <div className="flex items-start gap-2.5 p-3.5 bg-gray-50 border border-gray-150 rounded-sm">
                  <input
                    id="agree-privacy"
                    type="checkbox"
                    checked={formData.agreePrivacy}
                    onChange={(e) => setFormData({ ...formData, agreePrivacy: e.target.checked })}
                    className="w-4 h-4 accent-accent mt-0.5"
                  />
                  <label htmlFor="agree-privacy" className="text-xs text-gray-500 leading-5 select-none font-medium cursor-pointer">
                    <span className="font-extrabold text-primary underline">개인정보 수집 및 의뢰 동의 (필수)</span>
                    <br />
                    대민창호는 수집한 성함, 연락처를 실측 상담 전담 연락용으로만 국한하여 활용하며 목적 달성 시 즉각 파기합니다.
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-accent text-white py-4.5 font-bold text-base cursor-pointer rounded-sm hover:-translate-y-0.5 transition-all duration-300 shadow-md"
                >
                  출동 실측 상담 예약 신청하기
                </button>

              </form>
            </div>
          </div>

        </div>
      </div>

      {/* Successful Submission Dialog Feedback */}
      {submittedTicket && (
        <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center bg-black/70 p-4 md:p-6 animate-fade-in backdrop-blur-md">
          <div className="bg-white rounded-lg shadow-2xl max-w-md w-full border border-gray-100 p-6 md:p-8 space-y-6 text-center text-gray-800 relative">
            <div className="w-16 h-16 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto border border-emerald-100 shadow-sm animate-bounce-subtle">
              <ShieldCheck className="w-9 h-9" />
            </div>

            <div className="space-y-2">
              <span className="text-[10px] text-accent font-black tracking-widest uppercase">Consultation Registered</span>
              <h4 className="text-xl font-black text-primary">실측 및 견적 예약 접수 완료</h4>
              <p className="text-xs text-gray-400">대민창호 안심 접수가 정상적으로 승인 처리되었습니다.</p>
            </div>

            {/* Ticket parameters */}
            <div className="bg-gray-50 border border-gray-100 rounded-sm p-4 text-left divide-y divide-gray-200/50 space-y-2.5">
              <div className="flex justify-between items-center pb-2 text-xs">
                <span className="text-gray-400 font-bold">상담 관리번호</span>
                <span className="font-semibold text-primary font-inter">{submittedTicket.id}</span>
              </div>
              <div className="flex justify-between items-center pt-2 text-xs">
                <span className="text-gray-400">의뢰주 분 성함</span>
                <span className="font-bold">{submittedTicket.name} 님</span>
              </div>
              <div className="flex justify-between items-center pt-2 text-xs">
                <span className="text-gray-400">시공 종류</span>
                <span className="font-bold text-accent">{submittedTicket.serviceType}</span>
              </div>
              <div className="flex justify-between items-center pt-2 text-xs">
                <span className="text-gray-400">희망 지역</span>
                <span className="font-medium truncate max-w-[180px]">{submittedTicket.location}</span>
              </div>
              {submittedTicket.details && (
                <div className="pt-2 text-xs">
                  <span className="text-gray-400 font-medium block">접수 메모 요약:</span>
                  <span className="text-[11px] text-gray-600 block line-clamp-2 mt-1 bg-white p-1.5 border border-gray-100 rounded-sm italic leading-relaxed">
                    {submittedTicket.details}
                  </span>
                </div>
              )}
            </div>

            {/* Estimated feedback duration panel */}
            <div className="flex gap-2.5 p-3.5 bg-accent/5 border border-accent/10 rounded-sm items-start text-left text-xs text-gray-500 leading-normal">
              <Clock className="w-4 h-4 text-accent shrink-0 mt-0.5" />
              <div>
                <span className="font-extrabold text-primary block">접수 후 30분 이내 유선 전화 배정</span>
                지정되신 수도권 직영 최고 기사가 전화 상담을 시작으로 고객님 일정에 맞춰 현장 무료 정밀 실측을 잡으러 갈 예정입니다.
              </div>
            </div>

            <button
              onClick={() => setSubmittedTicket(null)}
              className="w-full py-3 bg-primary hover:bg-accent text-white text-xs font-bold rounded-sm cursor-pointer transition-colors focus:outline-none"
            >
              예약 확인창 닫기
            </button>
          </div>
        </div>
      )}

    </section>
  );
}
